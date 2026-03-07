const nodemailer = require('nodemailer');

function createTransporter() {
  return nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
  });
}

async function sendCvEmail({ nombre, apellido, sector, fileBuffer, fileName }) {
  const transporter = createTransporter();

  await transporter.sendMail({
    from: `"Instituto Garat - Postulaciones" <${process.env.MAIL_USER}>`,
    to: process.env.MAIL_TO,
    subject: `Nueva postulación: ${nombre} ${apellido} — ${sector}`,
    html: `
      <h2>Nueva postulación recibida</h2>
      <p><strong>Nombre:</strong> ${nombre} ${apellido}</p>
      <p><strong>Sector:</strong> ${sector}</p>
      <p>El CV se encuentra adjunto a este correo.</p>
    `,
    attachments: [
      {
        filename: fileName,
        content: fileBuffer,
        contentType: 'application/pdf',
      },
    ],
  });
}

module.exports = { sendCvEmail };
