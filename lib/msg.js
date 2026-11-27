
const {
    getContentType,
    downloadContentFromMessage
} = require('@whiskeysockets/baileys');

const sms = (conn, message) => {
    if (!message) return null;

    const m = { ...message };
    const key = m.key || {};
    const chat = key.remoteJid || '';
    const content = m.message || {};

    m.id = key.id || '';
    m.chat = chat;
    m.from = key.participant || chat;
    m.sender = key.participant || chat;
    m.isGroup = chat.endsWith('@g.us');
    m.pushName = m.pushName || 'Unknown';

    m.mtype = getContentType(content) || '';
    m.msg = content[m.mtype] || {};
    m.body =
        content.conversation ||
        content.extendedTextMessage?.text ||
        m.msg?.caption ||
        m.msg?.text ||
        '';

    m.text = m.body;
    m.mentionedJid = m.msg?.contextInfo?.mentionedJid || [];
    m.quoted = m.msg?.contextInfo?.quotedMessage || null;

    return m;
};

const downloadMediaMessage = async (message) => {
    if (!message) throw new Error('Message is required');

    const content = message.msg || message.message || message;
    const type = message.mtype
        ? message.mtype.replace(/Message$/i, '').toLowerCase()
        : getContentType(content)?.replace(/Message$/i, '').toLowerCase();

    const media = content[type + 'Message'] || content;

    if (!media || !media.url && !media.directPath) {
        throw new Error('No downloadable media found');
    }

    const stream = await downloadContentFromMessage(media, type);
    const chunks = [];

    for await (const chunk of stream) {
        chunks.push(chunk);
    }

    return Buffer.concat(chunks);
};

module.exports = {
    sms,
    downloadMediaMessage
};
