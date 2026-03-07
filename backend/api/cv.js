const { parseFormData } = require('../services/cv.service');
const { validateFields, validateFile } = require('../validators/cv.validator');
const { sendCvEmail } = require('../lib/mailer');

const ALLOWED_ORIGIN = process.env.ALLOWED_ORIGIN || '*';

function setCorsHeaders(res) {
  res.setHeader('Access-Control-Allow-Origin', ALLOWED_ORIGIN);
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
}

module.exports = async function handler(req, res) {
  setCorsHeaders(res);

  if (req.method === 'OPTIONS') {
    return res.status(204).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Método no permitido.' });
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
      fileName: `CV_${nombre}_${apellido}.pdf`,
    });
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
