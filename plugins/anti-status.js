'use strict';

const { cmd } = require('../command');
const { isEnabled, setGroupStatusProtection } = require('../lib/anti-status');

cmd({
  pattern: 'antistatus',
  alias: ['antigcstatus', 'antigroupstatus'],
  desc: 'Automatically remove group status/story posts in this group',
  category: 'group',
  react: '🛡️',
  filename: __filename
}, async (conn, mek, m, {
  from, text, isGroup, isCreator, isAdmins, isBotAdmins, reply
}) => {
  try {
    if (!isGroup || !/@g\\.us$/.test(from || '')) {
      return reply('⚠️ This command only works inside a WhatsApp group.');
    }
    if (!isAdmins && !isCreator) {
      return reply('🔐 Only group admins or the bot owner can change this setting.');
    }

    const action = String(text || '').trim().toLowerCase();
    const enabled = await isEnabled(from);
    if (!action) {
      return reply(
        `🛡️ *ANTI GROUP STATUS*\\n\\n*Current:* ${enabled ? 'ON ✅' : 'OFF ❌'}\\n\\nEnable: *.antistatus on*\\nDisable: *.antistatus off*\\n\\nThis removes group Status/Story posts. Personal status mentions are handled separately.`
      );
    }
    if (action !== 'on' && action !== 'off') {
      return reply('⚠️ Use only *.antistatus on* or *.antistatus off*.');
    }
    if (action === 'on' && !isBotAdmins) {
      return reply('❌ I must be a group admin to remove other members’ group statuses. Promote the bot, then try again.');
    }

    await setGroupStatusProtection(from, action === 'on');
    return reply(action === 'on'
      ? '✅ *Anti Status is ON for this group.* New group Status/Story posts will be detected and removal will be attempted.'
      : '✅ *Anti Status is OFF for this group.*');
  } catch (error) {
    console.error('[ANTISTATUS COMMAND]', error);
    return reply(`❌ Could not update Anti Status: ${error.message}`);
  }
});
