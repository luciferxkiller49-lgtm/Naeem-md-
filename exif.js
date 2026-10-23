// exif.js - Sticker EXIF helper for Naeem-MD
const { Image } = require('node-webpmux');
const crypto = require('crypto');
const fs = require('fs');
const ffmpeg = require('fluent-ffmpeg');
const path = require('path');

async function imageToWebp(mediaBuffer, ext = 'png') {
  const tmpIn = path.join('/tmp', `${Date.now()}.${ext}`);
  const tmpOut = path.join('/tmp', `${Date.now()}.webp`);
  fs.writeFileSync(tmpIn, mediaBuffer);

  return new Promise((resolve, reject) => {
    ffmpeg(tmpIn)
      .on('error', reject)
      .on('end', () => {
        const buff = fs.readFileSync(tmpOut);
        try { fs.unlinkSync(tmpIn); fs.unlinkSync(tmpOut); } catch (e) {}
        resolve(buff);
      })
      .addOutputOptions([
        '-vcodec', 'libwebp',
        '-vf', "scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15,pad=320:320:-1:-1:color=white@0.0,split [a][b];[a] palettegen=reserve_transparent=on:transparency_color=ffffff [p];[b][p] paletteuse"
      ])
      .toFormat('webp')
      .save(tmpOut);
  });
}

async function videoToWebp(videoBuffer, ext = 'mp4') {
  const tmpIn = path.join('/tmp', `${Date.now()}.${ext}`);
  const tmpOut = path.join('/tmp', `${Date.now()}.webp`);
  fs.writeFileSync(tmpIn, videoBuffer);

  return new Promise((resolve, reject) => {
    ffmpeg(tmpIn)
      .on('error', reject)
      .on('end', () => {
        const buff = fs.readFileSync(tmpOut);
        try { fs.unlinkSync(tmpIn); fs.unlinkSync(tmpOut); } catch (e) {}
        resolve(buff);
      })
      .addOutputOptions([
        '-vcodec', 'libwebp',
        '-vf', "scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15,pad=320:320:-1:-1:color=white@0.0,split [a][b];[a] palettegen=reserve_transparent=on:transparency_color=ffffff [p];[b][p] paletteuse",
        '-loop', '0',
        '-ss', '00:00:00',
        '-t', '00:00:05',
        '-preset', 'default',
        '-an',
        '-vsync', '0'
      ])
      .toFormat('webp')
      .save(tmpOut);
  });
}

async function writeExif(mediaBuffer, metadata = {}) {
  const packname = metadata.packname || 'Naeem-MD';
  const author = metadata.author || 'Naeem';

  const img = new Image();
  await img.load(mediaBuffer);

  const json = {
    'sticker-pack-id': crypto.randomBytes(32).toString('hex'),
    'sticker-pack-name': packname,
    'sticker-pack-publisher': author,
    'emojis': metadata.categories || ['🎯']
  };

  const exifAttr = Buffer.from([
    0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00,
    0x01, 0x00, 0x41, 0x57, 0x07, 0x00, 0x00, 0x00,
    0x00, 0x00, 0x16, 0x00, 0x00, 0x00
  ]);
  const jsonBuff = Buffer.from(JSON.stringify(json), 'utf-8');
  const exif = Buffer.concat([exifAttr, jsonBuff]);
  exif.writeUIntLE(jsonBuff.length, 14, 4);

  await img.save(mediaBuffer, { packId: packname, packName: packname, emojis: metadata.categories || ['🎯'], exifBuffer: exif });
  return mediaBuffer;
}

async function writeExifImg(mediaBuffer, metadata = {}) {
  const webp = await imageToWebp(mediaBuffer);
  return await writeExif(webp, metadata);
}

async function writeExifVid(mediaBuffer, metadata = {}) {
  const webp = await videoToWebp(mediaBuffer);
  return await writeExif(webp, metadata);
}

module.exports = {
  imageToWebp,
  videoToWebp,
  writeExif,
  writeExifImg,
  writeExifVid,
};
