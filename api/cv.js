const Busboy = require('busboy');
const nodemailer = require('nodemailer');

const MAX_FILE_SIZE = 4 * 1024 * 1024; // 4 MB

module.exports = async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Método no permitido.' });
  }

  const fields = {};
  let fileBuffer = null;
  let fileName = 'cv.pdf';
  let fileMime = null;
  let fileSizeExceeded = false;

  try {
    await new Promise((resolve, reject) => {
      const bb = Busboy({
        headers: req.headers,
        limits: { fileSize: MAX_FILE_SIZE },
      });

      bb.on('field', (name, value) => {
        fields[name] = value;
      });

      bb.on('file', (_name, file, info) => {
        const { filename, mimeType } = info;
        if (filename) fileName = filename;
        fileMime = mimeType;

        const chunks = [];
        file.on('data', (chunk) => chunks.push(chunk));
        file.on('limit', () => {
          fileSizeExceeded = true;
          file.resume();
        });
        file.on('end', () => {
          if (!fileSizeExceeded) {
            fileBuffer = Buffer.concat(chunks);
          }
        });
      });

      bb.on('finish', resolve);
      bb.on('error', reject);
      req.pipe(bb);
    });
  } catch (err) {
    console.error('Error parsing form:', err);
    return res.status(400).json({ error: 'Error al procesar el formulario.' });
  }

  const { nombre, apellido, sector } = fields;

  if (!nombre || !apellido || !sector) {
    return res.status(400).json({ error: 'Faltan campos requeridos.' });
  }

  if (fileSizeExceeded) {
    return res.status(400).json({ error: 'El archivo no puede superar los 4 MB.' });
  }

  if (!fileBuffer) {
    return res.status(400).json({ error: 'El CV es requerido.' });
  }

  if (fileMime !== 'application/pdf') {
    return res.status(400).json({ error: 'Solo se aceptan archivos PDF.' });
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
  });

  const mailOptions = {
    from: `"Instituto Garat - Postulaciones" <${process.env.MAIL_USER}>`,
    to: process.env.MAIL_TO || process.env.MAIL_USER,
    subject: `Nueva postulación: ${nombre} ${apellido} — ${sector}`,
    html: `
      <h2>Nueva postulación recibida</h2>
      <p><strong>Nombre:</strong> ${nombre} ${apellido}</p>
      <p><strong>Sector:</strong> ${sector}</p>
      <p>El CV se encuentra adjunto a este correo.</p>
    `,
    attachments: [
      {
        filename: `CV_${nombre}_${apellido}.pdf`,
        content: fileBuffer,
        contentType: 'application/pdf',
      },
    ],
  };

  try {
    await transporter.sendMail(mailOptions);
    res.json({ ok: true });
  } catch (err) {
    console.error('Error al enviar email:', err);
    res.status(500).json({ error: 'No se pudo enviar el correo. Intentá más tarde.' });
  }
};

module.exports.config = {
  api: {
    bodyParser: false,
  },
};
