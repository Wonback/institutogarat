const MAX_FILE_SIZE = 4 * 1024 * 1024; // 4 MB
const MAX_NAME_LENGTH = 100;
const SOLO_LETRAS = /^[a-zA-ZÀ-ÿ\s'\-]+$/;
const SECTORES_VALIDOS = [
  'Cirugía',
  'Gastroenterología',
  'Urología',
  'Neonatología',
  'Hemodinamia',
  'Clínica e Infectología',
  'Nutrición',
  'Terapia Intensiva (U.T.I.)',
  'Traumatología',
  'Obstetricia',
  'Guardia',
  'Administración',
  'Enfermería',
];

function validateFields({ nombre, apellido, sector }) {
  if (!nombre) return 'El nombre es requerido.';
  if (!apellido) return 'El apellido es requerido.';
  if (!sector) return 'El sector es requerido.';
  if (nombre.length > MAX_NAME_LENGTH) return 'El nombre es demasiado largo.';
  if (apellido.length > MAX_NAME_LENGTH) return 'El apellido es demasiado largo.';
  if (!SOLO_LETRAS.test(nombre)) return 'El nombre contiene caracteres no válidos.';
  if (!SOLO_LETRAS.test(apellido)) return 'El apellido contiene caracteres no válidos.';
  if (!SECTORES_VALIDOS.includes(sector)) return 'El sector seleccionado no es válido.';
  return null;
}

function validateFile({ fileBuffer, fileMime, fileSizeExceeded }) {
  if (fileSizeExceeded) return 'El archivo no puede superar los 4 MB.';
  if (!fileBuffer) return 'El CV es requerido.';
  if (fileMime !== 'application/pdf') return 'Solo se aceptan archivos PDF.';
  const isPdf = fileBuffer.length >= 4 &&
    fileBuffer[0] === 0x25 &&
    fileBuffer[1] === 0x50 &&
    fileBuffer[2] === 0x44 &&
    fileBuffer[3] === 0x46;
  if (!isPdf) return 'El archivo no es un PDF válido.';
  return null;
}

module.exports = { validateFields, validateFile, MAX_FILE_SIZE };
