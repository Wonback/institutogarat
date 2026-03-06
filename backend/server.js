require('dotenv').config();
const express = require('express');
const cors = require('cors');
const multer = require('multer');
const nodemailer = require('nodemailer');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors({ origin: process.env.FRONTEND_URL || 'http://localhost:4200' }));

const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 5 * 1024 * 1024 },
  fileFilter: (_req, file, cb) => {
    if (file.mimetype === 'application/pdf') {
      cb(null, true);
    } else {
      cb(new Error('Solo se aceptan archivos PDF'));
    }
  },
});

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

app.post('/api/contacto', upload.single('cv'), async (req, res) => {
  const { nombre, apellido, sector } = req.body;

  if (!nombre || !apellido || !sector) {
    return res.status(400).json({ error: 'Faltan campos requeridos.' });
  }
  if (!req.file) {
    return res.status(400).json({ error: 'El CV es requerido.' });
  }

  const mailOptions = {
    from: `"Instituto Garat - Postulaciones" <${process.env.EMAIL_USER}>`,
    to: process.env.EMAIL_TO || process.env.EMAIL_USER,
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
        content: req.file.buffer,
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
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
