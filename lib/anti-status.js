'use strict';

const { MongoClient } = require('mongodb');
const { proto, generateWAMessageFromContent } = require('@whiskeysockets/baileys');

let mongoClient;
let settingsCollectionPromise;
const settingsCache = new Map();
const CACHE_TTL_MS = 10 * 1000;
const attachedSockets = new WeakSet();

async function getSettingsCollection() {
  if (!process.env.MONGODB_URL) throw new Error('MONGODB_URL is not configured');
  if (!settingsCollectionPromise) {
    settingsCollectionPromise = (async () => {
      mongoClient = new MongoClient(process.env.MONGODB_URL);
      await mongoClient.connect();
      return mongoClient.db(process.env.DB_NAME || 'naeem_bot_db').collection('group_anti_status');
    })().catch(error => {
      settingsCollectionPromise = null;
      throw error;
    });
  }
  return settingsCollectionPromise;
}

async function isEnabled(groupJid) {
  const cached = settingsCache.get(groupJid);
  if (cached && Date.now() - cached.loadedAt < CACHE_TTL_MS) return cached.enabled;

  const collection = await getSettingsCollection();
  const setting = await collection.findOne({ _id: groupJid });
  const enabled = setting?.enabled === true;
  settingsCache.set(groupJid, { enabled, loadedAt: Date.now() });
  return enabled;
}

async function setGroupStatusProtection(groupJid, enabled) {
  if (!/@g\.us$/.test(groupJid || '')) throw new Error('Invalid group JID');
  const collection = await getSettingsCollection();

  if (enabled) {
    await collection.updateOne(
      { _id: groupJid },
      { $set: { enabled: true, updatedAt: new Date() } },
      { upsert: true }
    );
  } else {
    await collection.deleteOne({ _id: groupJid });
  }

  settingsCache.set(groupJid, { enabled, loadedAt: Date.now() });
  return enabled;
}

function unwrapMessage(message) {
  let current = message;
  for (let i = 0; i < 8 && current && typeof current === 'object'; i++) {
    if (current.groupStatusMessageV2) return current.groupStatusMessageV2;
    if (current.ephemeralMessage?.message) current = current.ephemeralMessage.message;
    else if (current.viewOnceMessage?.message) current = current.viewOnceMessage.message;
    else if (current.viewOnceMessageV2?.message) current = current.viewOnceMessageV2.message;
    else if (current.documentWithCaptionMessage?.message) current = current.documentWithCaptionMessage.message;
    else break;
  }
  return null;
}

function getAuthorJid(key, conn) {
  const candidates = [key?.participantAlt, key?.participant];
  const lid = candidates.find(value => typeof value === 'string' && value.endsWith('@lid'));
  if (lid) return lid;
  const participant = candidates.find(value => typeof value === 'string' && value.includes('@'));
  if (participant) return participant;
  return conn.user?.lid || `${String(conn.user?.id || '').split(':')[0].split('@')[0]}@s.whatsapp.net`;
}

function isAdminParticipant(participant) {
  return !!participant && (participant.admin === 'admin' || participant.admin === 'superadmin');
}

async function revokeGroupStatus(conn, message) {
  const key = message.key || {};
  const group = key.remoteJid;
  const id = key.id;
  if (!group || !id) throw new Error('Status message is missing its group or message ID');

  const metadata = await conn.groupMetadata(group);

  // Baileys v7 may expose the same account as a phone JID or a LID.
  // Resolve both forms when the socket's LID mapping is available.
  const botIds = new Set();
  const addJid = value => {
    if (typeof value !== 'string' || !value.includes('@')) return;
    const normalized = value.trim().toLowerCase().replace(/:\\d+(?=@)/, '');
    botIds.add(normalized);
  };

  addJid(conn.user?.id);
  addJid(conn.user?.lid);
  addJid(conn.user?.phoneNumber);

  const ownPhone = String(conn.user?.id || conn.user?.phoneNumber || '');
  const ownLid = String(conn.user?.lid || '');
  const lidMapping = conn.signalRepository?.lidMapping;
  try {
    if (ownLid && typeof lidMapping?.getPNForLID === 'function') {
      addJid(await lidMapping.getPNForLID(ownLid));
    }
    if (ownPhone && typeof lidMapping?.getLIDForPN === 'function') {
      addJid(await lidMapping.getLIDForPN(ownPhone));
    }
  } catch (error) {
    console.warn('[ANTISTATUS] Could not resolve bot LID/phone mapping:', error.message);
  }

  const participants = metadata.participants || [];
  const botIsAdmin = participants.some(participant => {
    const participantIds = [
      participant?.id,
      participant?.lid,
      participant?.phoneNumber,
      participant?.jid,
      participant?.jidAlt
    ];
    return isAdminParticipant(participant) && participantIds.some(value => {
      if (typeof value !== 'string' || !value.includes('@')) return false;
      return botIds.has(value.trim().toLowerCase().replace(/:\\d+(?=@)/, ''));
    });
  });
  if (!botIsAdmin) {
    console.warn(`[ANTISTATUS] Cannot revoke ${id} in ${group}: bot is not a group admin`);
    return false;
  }

  const author = key.fromMe ? getAuthorJid({}, conn) : getAuthorJid(key, conn);
  if (!author || !author.includes('@')) throw new Error('Could not resolve status author JID');

  const revoke = {
    protocolMessage: {
      key: {
        remoteJid: group,
        id,
        fromMe: !!key.fromMe,
        participant: author
      },
      type: proto.Message.ProtocolMessage.Type.REVOKE
    }
  };

  const outgoing = generateWAMessageFromContent(group, revoke, {
    userJid: conn.user?.id
  });

  await conn.relayMessage(group, outgoing.message, {
    messageId: outgoing.key.id,
    additionalAttributes: { edit: key.fromMe ? '7' : '8' },
    additionalNodes: [{
      tag: 'meta',
      attrs: { is_group_status: 'true', origin: 'group_status' }
    }]
  });

  console.log(`[ANTISTATUS] Revocation submitted for ${id} in ${group}`);
  return true;
}

function attach(conn) {
  if (!conn || !conn.ev || attachedSockets.has(conn)) return;
  attachedSockets.add(conn);

  conn.ev.on('messages.upsert', async ({ messages }) => {
    for (const message of messages || []) {
      try {
        const group = message?.key?.remoteJid;
        if (!group || !group.endsWith('@g.us') || !(await isEnabled(group))) continue;

        const body = unwrapMessage(message.message);
        const contextInfo = body?.message?.imageMessage?.contextInfo
          || body?.message?.videoMessage?.contextInfo
          || body?.message?.audioMessage?.contextInfo
          || body?.message?.extendedTextMessage?.contextInfo
          || body?.messageContextInfo
          || message.message?.messageContextInfo;

        const isGroupStatus = !!body || contextInfo?.isGroupStatus === true;
        if (!isGroupStatus) continue;

        const removed = await revokeGroupStatus(conn, message);
        if (removed) {
          console.log(`[ANTISTATUS] Removed group status ${message.key.id} from ${group}`);
        }
      } catch (error) {
        console.error('[ANTISTATUS] Failed to process group status:', error.message);
      }
    }
  });

  console.log('[ANTISTATUS] Group status protection listener attached');
}

module.exports = {
  attach,
  isEnabled,
  setGroupStatusProtection
};
