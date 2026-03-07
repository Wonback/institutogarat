const Busboy = require('busboy');
const { MAX_FILE_SIZE } = require('../validators/cv.validator');

async function parseFormData(req) {
  return new Promise((resolve, reject) => {
    const bb = Busboy({
      headers: req.headers,
      limits: { fileSize: MAX_FILE_SIZE },
    });

    const fields = {};
    let fileBuffer = null;
    let fileName = 'cv.pdf';
    let fileMime = null;
    let fileSizeExceeded = false;

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

    bb.on('finish', () =>
      resolve({ fields, fileBuffer, fileName, fileMime, fileSizeExceeded })
    );
    bb.on('error', reject);

    req.pipe(bb);
  });
}

module.exports = { parseFormData };
