'use strict';

const { spawn } = require('child_process');
const ffmpegInstaller = require('@ffmpeg-installer/ffmpeg');

const ffmpegPath = ffmpegInstaller.path;

/** Convert an in-memory media buffer with the bundled FFmpeg binary. */
function runFfmpeg(input, args, outputFormat) {
  if (!Buffer.isBuffer(input) || input.length === 0) {
    return Promise.reject(new TypeError('A non-empty media Buffer is required'));
  }

  return new Promise((resolve, reject) => {
    const child = spawn(ffmpegPath, [
      '-hide_banner', '-loglevel', 'error', '-nostdin',
      '-i', 'pipe:0',
      ...args,
      '-f', outputFormat,
      'pipe:1'
    ], { stdio: ['pipe', 'pipe', 'pipe'] });

    const output = [];
    const errors = [];
    let settled = false;

    child.stdout.on('data', chunk => output.push(chunk));
    child.stderr.on('data', chunk => errors.push(chunk));
    child.on('error', error => {
      if (!settled) {
        settled = true;
        reject(new Error(`Unable to start FFmpeg: ${error.message}`));
      }
    });
    child.on('close', code => {
      if (settled) return;
      settled = true;
      if (code === 0 && output.length) return resolve(Buffer.concat(output));
      reject(new Error(`FFmpeg conversion failed (exit ${code}): ${Buffer.concat(errors).toString().trim() || 'No diagnostic output'}`));
    });

    child.stdin.on('error', error => {
      // EPIPE is reported again by the process close handler with FFmpeg stderr.
      if (error.code !== 'EPIPE' && !settled) {
        settled = true;
        reject(error);
      }
    });
    child.stdin.end(input);
  });
}

async function stickerToImage(buffer) {
  return runFfmpeg(buffer, ['-frames:v', '1', '-vcodec', 'png'], 'image2pipe');
}

async function toAudio(buffer, inputExtension = 'mp4') {
  // FFmpeg detects the input container from the media stream itself.
  return runFfmpeg(buffer, [
    '-vn', '-ac', '2', '-ar', '44100', '-b:a', '128k', '-codec:a', 'libmp3lame'
  ], 'mp3');
}

async function toPTT(buffer, inputExtension = 'mp4') {
  return runFfmpeg(buffer, [
    '-vn', '-ac', '1', '-ar', '48000', '-c:a', 'libopus', '-b:a', '32k',
    '-application', 'voip'
  ], 'ogg');
}

module.exports = { stickerToImage, toAudio, toPTT };
