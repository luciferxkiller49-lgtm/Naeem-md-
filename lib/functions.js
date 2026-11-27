
const axios = require('axios');

const getBuffer = async (url, options = {}) => {
    if (Buffer.isBuffer(url)) return url;

    if (typeof url !== 'string' || !/^https?:\/\//i.test(url)) {
        throw new Error('A valid HTTP/HTTPS URL is required');
    }

    const response = await axios.get(url, {
        responseType: 'arraybuffer',
        timeout: options.timeout || 30000,
        ...options
    });

    return Buffer.from(response.data);
};

const getGroupAdmins = async (participants = []) => {
    if (!Array.isArray(participants)) return [];

    return participants
        .filter(user => user && (user.admin === 'admin' || user.admin === 'superadmin'))
        .map(user => user.id)
        .filter(Boolean);
};

const getRandom = (length = 10) => {
    const size = Math.max(1, Math.min(Number(length) || 10, 64));
    return require('crypto').randomBytes(Math.ceil(size / 2))
        .toString('hex').slice(0, size);
};

const h2k = (number) => {
    const value = Number(number) || 0;
    if (value >= 1000000) return (value / 1000000).toFixed(1) + 'M';
    if (value >= 1000) return (value / 1000).toFixed(1) + 'K';
    return String(value);
};

const isUrl = (value) => {
    try {
        const url = new URL(value);
        return url.protocol === 'http:' || url.protocol === 'https:';
    } catch {
        return false;
    }
};

const Json = (data) => JSON.stringify(data, null, 2);

const runtime = (seconds) => {
    let total = Math.max(0, Math.floor(Number(seconds) || 0));
    const days = Math.floor(total / 86400);
    total %= 86400;
    const hours = Math.floor(total / 3600);
    total %= 3600;
    const minutes = Math.floor(total / 60);
    const secs = total % 60;

    return `${days}d ${hours}h ${minutes}m ${secs}s`;
};

const sleep = (ms) => new Promise(resolve =>
    setTimeout(resolve, Math.max(0, Number(ms) || 0))
);

const delay = sleep;

const fetchJson = async (url, options = {}) => {
    if (!isUrl(url)) throw new Error('Invalid URL');

    const response = await axios.get(url, {
        timeout: options.timeout || 30000,
        ...options
    });

    return response.data;
};

const cleanPN = (value) => String(value || '').replace(/\D/g, '');

const lidToPhone = async (conn, lid) => {
    if (!lid) return null;

    if (!String(lid).includes('@lid')) {
        return cleanPN(String(lid).split('@')[0]);
    }

    try {
        const mapping = conn?.signalRepository?.lidMapping;

        if (mapping?.getPNForLID) {
            const result = await mapping.getPNForLID(lid);
            if (result) return cleanPN(String(result).split('@')[0]);
        }

        if (typeof conn?.getPNForLID === 'function') {
            const result = await conn.getPNForLID(lid);
            if (result) return cleanPN(String(result).split('@')[0]);
        }
    } catch (error) {
        console.error('LID mapping error:', error.message);
    }

    return null;
};

module.exports = {
    getBuffer,
    getGroupAdmins,
    getRandom,
    h2k,
    isUrl,
    Json,
    runtime,
    sleep,
    fetchJson,
    lidToPhone,
    cleanPN,
    delay
};
