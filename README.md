# Instituto Médico Quirúrgico Garat - Website

Este repositorio contiene el código fuente para el sitio web del Instituto Médico Quirúrgico Garat. Es una aplicación web moderna construida con Angular, diseñada para ofrecer información sobre los servicios médicos, especialidades y staff profesional del instituto.

## 🛠️ Tecnologías Utilizadas

- **Angular 21** con SSR (Server-Side Rendering via Express)
- **Tailwind CSS 4** + **DaisyUI 5** para estilos y componentes UI
- **Motion One** para animaciones
- **Lucide Angular** para iconos
- **Vercel** para el deploy (frontend + backend serverless)

## 📂 Estructura del Proyecto

```
institutogarat/
├── frontend/       # Aplicación Angular 21 con SSR
└── backend/        # API serverless en Vercel (Node.js)
```

### `frontend/src/app/core`
Componentes base cargados en todas las rutas:
- **Navbar** — Barra de navegación responsiva con menú móvil (DaisyUI drawer)
- **Footer** — Pie de página
- **Landing** — Página de inicio con secciones de presentación, especialidades y animaciones

### `frontend/src/app/pages`
Páginas de especialidades médicas (todas lazy-loaded):

| Página | Ruta | Estado |
|---|---|---|
| Cirugía | `/cirugia` | ❌ Sin desarrollar |
| Clínica | `/clinica` | ❌ Sin desarrollar |
| Gastroenterología | `/gastro` | ❌ Sin desarrollar |
| Guardia | `/guardia` | ❌ Sin desarrollar |
| Hemodinamia | `/hemodinamia` | ✅ Terminada |
| Neonatología | `/neonatologia` | ✅ Terminada |
| Nutrición | `/nutricion` | ❌ Sin desarrollar |
| Obstetricia | `/obstetricia` | ❌ Sin desarrollar |
| Terapia Intensiva | `/terapia` | ❌ Sin desarrollar |
| Traumatología | `/traumatologia` | ✅ Terminada |
| Urología | `/urologia` | ❌ Sin desarrollar |
| Trabajá con nosotros | `/contacto` | ✅ Terminada |

#### Estructura de una página terminada
Las páginas completas siguen este patrón:
1. **Hero banner** con imagen de fondo y overlay degradado
2. **Nosotros** — descripción del servicio (misión/visión o texto libre)
3. **Equipo de profesionales** — selector de miembros con foto, bio y modal de CV
4. **Tratamientos / Procedimientos** — lista clickeable con modal de detalle
5. **FAB de WhatsApp** flotante

### `backend/api`
- `cv.js` — Endpoint `POST /api/cv` para recibir postulaciones laborales (form multipart + PDF)

## 🚀 Instalación y Ejecución

```bash
cd frontend
npm install
npm start         # Dev server en http://localhost:4200
npm run build     # Build de producción con SSR
```

## ✨ Características Principales

- **Diseño Responsivo** — Mobile-first con Tailwind
- **SSR** — Angular Universal + Express para mejor SEO y rendimiento
- **Animaciones** — Motion One con efectos de entrada en scroll y hover
- **Temas** — Light (default), Dark y Nord (DaisyUI)
- **Integraciones** — WhatsApp para turnos, Google Maps para ubicación
- **Formulario de RRHH** — Envío de CV en PDF con validación y email automático
