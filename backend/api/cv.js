const { parseFormData } = require('../services/cv.service');
const { validateFields, validateFile } = require('../validators/cv.validator');
const { sendCvEmail } = require('../lib/mailer');

const ALLOWED_ORIGIN = process.env.ALLOWED_ORIGIN;
if (!ALLOWED_ORIGIN) {
  throw new Error('ALLOWED_ORIGIN environment variable is not defined.');
}

const RATE_LIMIT_MAX = 5;
const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000; // 1 hora
const COOLDOWN_MS = 24 * 60 * 60 * 1000; // 24 horas
const ipRequests = new Map();
const ipCooldowns = new Map();

function isRateLimited(ip) {
  const now = Date.now();
  const timestamps = (ipRequests.get(ip) || []).filter(t => now - t < RATE_LIMIT_WINDOW_MS);
  if (timestamps.length >= RATE_LIMIT_MAX) return true;
  timestamps.push(now);
  ipRequests.set(ip, timestamps);
  return false;
}

function setSecurityHeaders(res) {
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('X-Frame-Options', 'DENY');
  res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
  res.setHeader('Content-Security-Policy', "default-src 'none'");
}

function setCorsHeaders(res) {
  res.setHeader('Access-Control-Allow-Origin', ALLOWED_ORIGIN);
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
}

module.exports = async function handler(req, res) {
  setCorsHeaders(res);
  setSecurityHeaders(res);

  if (req.method === 'OPTIONS') {
    return res.status(204).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Método no permitido.' });
  }

  const origin = req.headers['origin'];
  if (!origin || origin !== ALLOWED_ORIGIN) {
    return res.status(403).json({ error: 'Origen no permitido.' });
  }

  const ip = req.headers['x-forwarded-for']?.split(',')[0].trim() || req.socket?.remoteAddress || 'unknown';
  if (isRateLimited(ip)) {
    return res.status(429).json({ error: 'Demasiados intentos. Intentá más tarde.' });
  }
  const lastSubmit = ipCooldowns.get(ip);
  if (lastSubmit && Date.now() - lastSubmit < COOLDOWN_MS) {
    return res.status(429).json({ error: 'Ya enviaste tu CV. Podés volver a intentarlo en 24 horas.' });
  }

  let parsed;
  try {
    parsed = await parseFormData(req);
  } catch (err) {
    console.error('Error parsing form:', err);
    return res.status(400).json({ error: 'Error al procesar el formulario.' });
  }

  const { fields, fileBuffer, fileName, fileMime, fileSizeExceeded } = parsed;
  const { nombre, apellido, sector } = fields;

  const fieldError = validateFields({ nombre, apellido, sector });
  if (fieldError) return res.status(400).json({ error: fieldError });

  const fileError = validateFile({ fileBuffer, fileMime, fileSizeExceeded });
  if (fileError) return res.status(400).json({ error: fileError });

  try {
    await sendCvEmail({
      nombre,
      apellido,
      sector,
      fileBuffer,
      fileName: `CV_${nombre.trim().replace(/\s+/g, '_')}_${apellido.trim().replace(/\s+/g, '_')}_${sector.trim().replace(/\s+/g, '_')}.pdf`,
    });
    ipCooldowns.set(ip, Date.now());
    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error('Error al enviar email:', err);
    return res.status(500).json({ error: 'No se pudo enviar el correo. Intentá más tarde.' });
  }
};

module.exports.config = {
  api: {
    bodyParser: false,
  },
};
