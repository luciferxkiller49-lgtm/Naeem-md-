'use strict';

const fs = require('fs');
const path = require('path');

const candidates = [
  path.join(process.cwd(), 'node_modules/@whiskeysockets/baileys/lib/Socket/messages-recv.js'),
  path.join(process.cwd(), 'node_modules/@whiskeysockets/baileys/lib/Socket/messages-recv.cjs')
];
const target = candidates.find(file => fs.existsSync(file));
if (!target) {
  throw new Error('[ANTISTATUS] Baileys messages-recv.js was not found. Refusing to install without the required group-status receive patch.');
}

let source = fs.readFileSync(target, 'utf8');
if (source.includes('handling status stanza')) {
  console.log('[ANTISTATUS] Baileys group-status receive patch is already installed.');
  process.exit(0);
}
const anchor = /ws\\.on\\((['"])CB:call\\1\\s*,/;
if (!anchor.test(source)) {
  throw new Error(`[ANTISTATUS] Unsupported Baileys receive file layout: ${target}. No changes were made.`);
}
const handler = `
  // Naeem MD: group statuses arrive as <status>, not <message>.
  ws.on('CB:status', async (node) => {
    try {
      if (isJidGroup(node.attrs.from) && getBinaryNodeChild(node, 'enc')) {
        await handleMessage(node);
      } else {
        await sendMessageAck(node);
      }
    } catch (error) {
      onUnexpectedError(error, 'handling status stanza');
    }
  });

  `;
source = source.replace(anchor, handler + source.match(anchor)[0]);
fs.writeFileSync(target, source, 'utf8');
console.log(`[ANTISTATUS] Patched Baileys group-status receive handler: ${target}`);
