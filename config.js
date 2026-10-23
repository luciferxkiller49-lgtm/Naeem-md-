// config.js - Naeem-MD Configuration
require('dotenv').config();

const config = {
  // ============ MONGODB ============
  MONGODB_URL: process.env.MONGODB_URL,
  DB_NAME: process.env.DB_NAME || 'naeem_bot_db',

  COLLECTIONS: {
    SESSIONS: 'whatsapp_sessions',
    NUMBERS: 'active_numbers',
    CONFIGS: 'bot_configs'
  },

  // ============ BOT CONFIGURATION ============
  AUTO_VIEW_STATUS: 'true',
  AUTO_RECORDING: 'false',
  AUTO_REACT: 'false',
  AUTO_TYPING: 'false',
  ALWAYS_ONLINE: 'false',
  VERSION: '1.0.0',
  DESCRIPTION: '*© POWERED BY NAEEM-MD*',
  ANTI_DELETE_PATH: 'inbox',
  ANTI_DELETE: 'false',
  ANTI_EDIT_PATH: 'inbox',
  ANTI_EDIT: 'false',
  STICKER_NAME: 'Naeem-MD',
  ANTI_LINK: 'true',
  WELCOME: 'false',
  GOODBYE: 'false',
  WELCOME_MESSAGE: '*_@user joined the group, welcome! 🎉_*',
  GOODBYE_MESSAGE: '*_@user has left the group, we will miss them! 👋_*',
  ADMIN_ACTION: 'false',
  MODE: 'public',
  PREFIX: '.',
  ANTI_CALL: 'false',
  REJECT_MSG: '*Call Rejected Automatically 📵*',
  READ_MESSAGE: 'false',
  AUTO_STATUS_SEEN: 'true',
  OWNER_REACT: 'false',
  OWNER_EMOJIS: ['❤️', '🔥', '👑', '⭐', '💎'],
  REACT_EMOJIS: ['🌈', '🕊️', '🌚', '🦢', '🎀', '💗', '🌺', '🌝', '🦋', '💐', '👀', '🍂', '🫶', '🤌', '💕', '🫠', '🫀', '🫰', '🪽', '🍻'],

  // ============ BOT IDENTITY ============
  BOT_NAME: 'Naeem-MD',
  OWNER_NAME: 'Naeem',
  OWNER_NUMBER: process.env.OWNER_NUMBER || '923XXXXXXXXX',
  DEV: process.env.OWNER_NUMBER || '923XXXXXXXXX',
  IK_IMAGE_PATH: './lib/bot.png',
  BOT_IMAGE: 'https://files.catbox.moe/p4xi2g.jpg',

  // ============ STICKER (IMPORTANT - pehle missing tha) ============
  packname: 'Naeem-MD',
  author: 'Naeem',

  // ============ CHANNELS (khaali - apne channel JID daalein) ============
  KHAN: [],
  NEWSLETTER_JID: '',
  NEWSLETTER_MESSAGE_ID: '',

  // ============ SYSTEM ============
  MAX_RETRIES: 3,
  OTP_EXPIRY: 300000,
  BANNED: [],

  // ============ SUDO (sirf apna number) ============
  SUDO: [
    (process.env.OWNER_NUMBER || '923XXXXXXXXX') + '@s.whatsapp.net'
  ],

  // ============ DEFAULT SETTINGS ============
  DEFAULT_SETTINGS: {
    AUTO_VIEW_STATUS: 'true',
    AUTO_STATUS_SEEN: 'true',
    READ_MESSAGE: 'false',
    AUTO_RECORDING: 'false',
    AUTO_REACT: 'false',
    AUTO_TYPING: 'false',
    ALWAYS_ONLINE: 'false',
    OWNER_REACT: 'false',
    ANTI_DELETE: 'false',
    ANTI_DELETE_PATH: 'inbox',
    ANTI_EDIT: 'false',
    ANTI_EDIT_PATH: 'inbox',
    ANTI_CALL: 'false',
    ANTI_LINK: 'true',
    WELCOME: 'false',
    GOODBYE: 'false',
    ADMIN_ACTION: 'false',
    WELCOME_MESSAGE: '*_@user joined the group, welcome! 🎉_*',
    GOODBYE_MESSAGE: '*_@user has left the group, we will miss them! 👋_*',
    REJECT_MSG: '*Call Rejected Automatically 📵*',
    VERSION: '1.0.0',
    OWNER_NAME: 'Naeem',
    OWNER_NUMBER: process.env.OWNER_NUMBER || '923XXXXXXXXX',
    DEV: process.env.OWNER_NUMBER || '923XXXXXXXXX',
    DESCRIPTION: '*© POWERED BY NAEEM-MD*',
    STICKER_NAME: 'Naeem-MD',
    MODE: 'public',
    PREFIX: '.',
    BOT_NAME: 'Naeem-MD',
    BOT_IMAGE: 'https://files.catbox.moe/p4xi2g.jpg',
    packname: 'Naeem-MD',
    author: 'Naeem',
    REACT_EMOJIS: ['🌈', '🕊️', '🌚', '🦢', '🎀', '💗', '🌺', '🌝', '🦋', '💐', '👀', '🍂', '🫶', '🤌', '💕', '🫠', '🫀', '🫰', '🪽', '🍻'],
    OWNER_EMOJIS: ['❤️', '🔥', '👑', '⭐', '💎'],
    BANNED: [],
    SUDO: [
      (process.env.OWNER_NUMBER || '923XXXXXXXXX') + '@s.whatsapp.net'
    ]
  }
};

module.exports = config;
