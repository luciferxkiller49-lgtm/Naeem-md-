# Naeem-MD WhatsApp Bot

Multi-user WhatsApp bot built with Baileys library.

## Features
- Multi-session support (up to 50 numbers)
- Web-based pairing (browser se number add karein)
- 580+ commands
- MongoDB session storage
- Anti-link, anti-delete, auto-status-seen

## Requirements
- Node.js 18+
- ffmpeg
- MongoDB Atlas (free cluster)

## Setup

### 1. Install dependencies
```bash
npm install


## Anti Group Status

- `.antistatus on` — enable automatic removal of group Status/Story posts in the current group.
- `.antistatus off` — disable protection for the current group.
- `.antistatus` — show the current group's setting.

Only group admins or the bot owner can change the setting. The bot must be a group admin to revoke another member's group status. Settings are stored in MongoDB (`group_anti_status`) per group.

The project `postinstall` script patches the installed Baileys `7.0.0-rc.9` receive handler so encrypted `<status>` stanzas from groups reach the normal message decryption pipeline. If dependency installation is run with lifecycle scripts disabled (for example, `npm install --ignore-scripts`), this compatibility patch will not be applied.
