const MAX_FILE_SIZE = 4 * 1024 * 1024; // 4 MB

function validateFields({ nombre, apellido, sector }) {
  if (!nombre) return 'El nombre es requerido.';
  if (!apellido) return 'El apellido es requerido.';
  if (!sector) return 'El sector es requerido.';
  return null;
}

function validateFile({ fileBuffer, fileMime, fileSizeExceeded }) {
  if (fileSizeExceeded) return 'El archivo no puede superar los 4 MB.';
  if (!fileBuffer) return 'El CV es requerido.';
  if (fileMime !== 'application/pdf') return 'Solo se aceptan archivos PDF.';
  return null;
}

module.exports = { validateFields, validateFile, MAX_FILE_SIZE };
