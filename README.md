# Instituto Médico Quirúrgico Garat - Website

Sitio web institucional del Instituto Médico Quirúrgico Garat. Aplicación Angular con SSR que presenta los servicios médicos, especialidades y staff profesional del instituto.

> **Sitio en producción:** [institutogarat.vercel.app](https://institutogarat.vercel.app)

---

## Tecnologías

- **Angular 21** con SSR (Server-Side Rendering via Express)
- **Tailwind CSS 4** + **DaisyUI 5** para estilos y componentes UI
- **Motion One** para animaciones
- **Lucide Angular** para iconos
- **Vercel** para el deploy (frontend + backend serverless)

---

## Estructura del Proyecto

```
institutogarat/
├── frontend/                   # Aplicación Angular 21 con SSR
│   └── src/app/
│       ├── core/               # Navbar, Footer, Landing (siempre cargados)
│       └── pages/              # Páginas de especialidades (lazy-loaded)
├── backend/                    # API serverless (Vercel Functions)
│   ├── api/
│   │   └── cv.js               # POST /api/cv — recepción de postulaciones
│   ├── lib/
│   │   └── mailer.js           # Nodemailer via Gmail
│   ├── services/
│   │   └── cv.service.js       # Parseo de form multipart con Busboy
│   ├── validators/
│   │   └── cv.validator.js     # Validación de campos + PDF max 4MB
│   └── vercel.json             # Configuración de rutas del backend
├── vercel.json                 # Configuración raíz de Vercel
└── package.json
```

---

## Páginas de Especialidades

Todas las páginas bajo `pages/` son lazy-loaded.

| Página | Ruta | Estado |
|---|---|---|
| Cirugía | `/cirugia` | ❌ Sin desarrollar |
| Clínica | `/clinica` | ❌ Sin desarrollar |
| Gastroenterología | `/gastro` | ❌ Sin desarrollar |
| Guardia | `/guardia` | ❌ Sin desarrollar |
| Hemodinamia | `/hemodinamia` | ✅ Terminada |
| Neonatología | `/neonatologia` | 🚧 En desarrollo |
| Nutrición | `/nutricion` | 🚧 En desarrollo |
| Obstetricia | `/obstetricia` | ❌ Sin desarrollar |
| Terapia Intensiva | `/terapia` | ❌ Sin desarrollar |
| Traumatología | `/traumatologia` | ✅ Terminada |
| Urología | `/urologia` | ❌ Sin desarrollar |
| Trabajá con nosotros | `/contacto` | ✅ Terminada |

### Estructura de una página terminada

1. **Hero banner** — imagen de fondo con overlay degradado
2. **Nosotros** — descripción del servicio (misión/visión o texto libre)
3. **Equipo de profesionales** — selector de miembros con foto, bio y modal de CV
4. **Tratamientos / Procedimientos** — lista clickeable con modal de detalle
5. **FAB de WhatsApp** flotante

---

## Instalación y Ejecución (Frontend)

```bash
cd frontend
npm install
npm start                       # Dev server en http://localhost:4200 (sin SSR)
npm run build                   # Build de producción con SSR
npm run serve:ssr:frontend      # Servidor SSR local (post-build)
npm test                        # Tests con Vitest
```

> `npm start` usa el dev server de Angular sin SSR. Para probar comportamiento idéntico al de producción (hidratación, SEO) usar `npm run build` + `npm run serve:ssr:frontend`.

---

## Backend — Desarrollo Local

El backend corre como **Vercel Functions** y no tiene un servidor de desarrollo tradicional. Para probarlo localmente:

1. Instalar dependencias: `cd backend && npm install`
2. Crear `backend/.env` con las variables requeridas (ver abajo)
3. Apuntar la URL de API en `frontend/src/environments/environment.ts` a `http://localhost:3000`
4. Ejecutar la función manualmente o usar `vercel dev` desde la raíz del proyecto

En producción el backend está desplegado como proyecto separado en Vercel (`institutogarat-api.vercel.app`).

---

## Variables de Entorno

El backend requiere `backend/.env`:

```env
MAIL_USER=tu_cuenta@gmail.com
MAIL_PASS=app_password_de_gmail
MAIL_TO=destinatario@email.com
ALLOWED_ORIGIN=https://tu-dominio.vercel.app
```

En producción estas variables se configuran en el dashboard de Vercel, no en un archivo `.env`.

---

## Deploy

El proyecto usa dos proyectos de Vercel separados:

| Proyecto | Directorio | URL |
|---|---|---|
| Frontend | `frontend/` | `institutogarat.vercel.app` |
| Backend | `backend/` | `institutogarat-api.vercel.app` |

Para deployar: conectar cada directorio a su proyecto de Vercel via GitHub integration o `vercel --cwd frontend` / `vercel --cwd backend`.

---

## Convenciones

- Componentes **standalone** — sin NgModules (excepto registro de íconos Lucide)
- Estado reactivo con `signal()` — sin RxJS subjects
- Color principal `#00c950` — siempre en hex, nunca clases `green-*` de Tailwind
- Imágenes hosteadas en **ImageKit** (`https://ik.imagekit.io/wonback/...`)
- Espaciado vertical entre secciones controlado exclusivamente por separadores (`divider`)

Ver `CLAUDE.md` para la guía completa de estilos: paleta de colores, patrones de componentes UI, convenciones de espaciado y animaciones.

---

## Contribuir

Abrir PRs contra `main`. Usar las páginas terminadas (Hemodinamia, Traumatología) como referencia de implementación al desarrollar nuevas especialidades.
