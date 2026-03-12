# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a medical institution website for "Instituto Garat" — an Angular 21 SPA with SSR and a serverless Node.js backend on Vercel. It features specialty pages, a CV submission form with file upload, and animated UI using Motion One + DaisyUI.

## Repository Structure

```
institutogarat/
├── frontend/       # Angular 21 app with SSR (Express)
├── backend/        # Vercel serverless API functions
├── vercel.json     # Root Vercel config
└── package.json    # Root (nodemailer, busboy)
```

## Commands

All frontend commands run from `frontend/`:

```bash
cd frontend
npm start              # Dev server at http://localhost:4200
npm run build          # Production build (SSR-enabled)
npm test               # Run Vitest tests
npm run serve:ssr:frontend  # Run SSR server locally (node dist/frontend/server/server.mjs)
```

Backend has no local dev server — it runs as Vercel Functions. Test locally by pointing `frontend/src/environments/environment.ts` API URL to `http://localhost:3000` and running the function manually.

## Architecture

### Frontend (`frontend/src/app/`)

- **Standalone components** — no NgModules (except icon registration). All components declare their own `imports`.
- **Lazy-loaded routes** — every page under `pages/` uses dynamic `import()` in `app.routes.ts`.
- **Signals** — reactive state uses Angular `signal()` (not RxJS subjects).
- **Animations** — Motion One (`motion` package): `animate()`, `inView()`, hover effects. See `landing.ts` and `navbar.ts`.
- **Styling** — Tailwind CSS 4 + DaisyUI 5. Three themes: `light` (default), `dark` (prefers-dark), `nord`. Configured in `styles.css`.

Key directories:
- `core/` — Navbar, Footer, Landing (always-loaded components)
- `pages/` — Specialty pages + `contacto/` (CV form, lazy-loaded)

### Backend (`backend/`)

Vercel Functions (Node.js):
- `api/cv.js` — POST `/api/cv` — parses multipart form, validates, sends email
- `lib/mailer.js` — Nodemailer via Gmail
- `services/cv.service.js` — Busboy form parsing
- `validators/cv.validator.js` — Required fields + PDF max 4MB

### Environment Config

| File | API URL |
|---|---|
| `frontend/src/environments/environment.ts` | `http://localhost:3000` |
| `frontend/src/environments/environment.prod.ts` | `https://institutogarat-api.vercel.app` |

Backend secrets (`backend/.env`): `MAIL_USER`, `MAIL_PASS`, `MAIL_TO`, `ALLOWED_ORIGIN`.

## Estilos y Colores

### Paleta de colores

| Uso | Clase Tailwind | Hex |
|---|---|---|
| Color principal (acento, botones, íconos, bordes activos) | `green-500` | `#22c55e` |
| Hover de botones principales | `green-600` | `#16a34a` |
| Títulos de sección en modales y CV | `green-700` | `#15803d` |
| Overlay de hero banner | `green-900/90` → `green-800/40` | — |
| Glow del navbar (hover) | `rgba(0, 172, 82, 0.25)` | `#00AC52` a 25% |
| Textos base | `gray-900`, `gray-700`, `gray-600`, `gray-500` | — |
| Borde de inputs en foco | `#22c55e` (2px solid) | — |
| Patologías / errores (solo Hemodinamia) | `red-500` / `red-600` | — |

### Componentes UI — convenciones

**Botones principales:**
```html
<button class="btn bg-green-500 hover:bg-green-600 text-white border-0">...</button>
<!-- Pill shape para CTAs -->
<a class="... bg-green-500 border-0 py-2 px-8 rounded-full hover:bg-green-600 text-white">...</a>
```

**Separador de sección (underline verde):**
```html
<div class="h-1 w-20 bg-green-500 rounded"></div>
```

**Hero banner de página de especialidad:**
```html
<div class="hero min-h-[60vh] relative" style="background-image: url(...)">
  <div class="absolute inset-0 bg-gradient-to-r from-green-900/90 to-green-800/40 mix-blend-multiply"></div>
  <div class="hero-content text-white w-full justify-start px-8 md:px-16 z-10">
    <div class="max-w-2xl text-left mt-32 md:mt-0">
      <h1 class="mb-2 text-4xl md:text-5xl font-black uppercase leading-tight tracking-tight">...</h1>
    </div>
  </div>
</div>
```

**Títulos de sección:**
```html
<h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900 uppercase">TÍTULO</h1>
<div class="h-1 w-20 bg-green-500 rounded mx-auto mb-4"></div>
```

**Tarjeta de tratamiento / procedimiento (clickeable):**
```html
<button class="bg-base-100 border border-gray-200 shadow-sm rounded-lg flex p-4 h-full items-center justify-start w-full text-left transition-all duration-300 hover:shadow-md hover:scale-[1.02] cursor-pointer hover:border-green-300">
  <!-- ícono SVG checkmark verde -->
  <span class="title-font font-medium text-gray-900">...</span>
</button>
```

**Bio de profesional (quote):**
```html
<p class="leading-relaxed text-lg text-gray-600 italic border-l-4 border-green-500 pl-4">
  "{{ selectedMember().bio }}"
</p>
```

**Nombre de profesional (gradient):**
```html
<h2 class="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-green-400 mb-2">
```

**FAB de WhatsApp (presente en todas las páginas terminadas):**
```html
<div class="fab">
  <a href="https://api.whatsapp.com/send/?phone=54345402..." target="_blank"
     class="border-0 bg-green-500 btn btn-xl btn-circle btn-primary">
    <!-- SVG de WhatsApp -->
  </a>
</div>
```

**Imágenes:** todas hosteadas en ImageKit (`https://ik.imagekit.io/wonback/...`).

### CSS personalizado reutilizable

`landing.css` define `.hero-mask-fade` (fade inferior del hero) y `.hero-bottom-fade`.

`navbar.css` define `.nav-item-glow`, `.glow-from-right`, `.glow-from-left` para el efecto hover del navbar.

`contacto.css` define el borde verde en foco para `.input`, `.select` y `.file-input`.

## Pendientes

### Sección Trust/Social Proof — Landing
- **Qué:** Franja de obras sociales y prepagas con cobertura (logos o nombres en fila con checkmarks)
- **Dónde:** Entre el hero y "Nuestras Especialidades" en `core/landing/landing.html`
- **Estado:** Esperando lista de obras sociales del cliente
- **Patrón sugerido:** `✓ PAMI  ✓ OSDE  ✓ Swiss Medical  ✓ Galeno  ...` con fondo sutil (bg-green-50 o base-200)

## Key Patterns

- **CV form** (`pages/contacto/contacto.ts`): Reactive Forms con validator custom `soloLetras` (`/^[a-zA-ZÀ-ÿ\s'\-]+$/`), validación de PDF/4MB en cliente, loading state, modales success/error.
- **SSR**: `app.config.server.ts` + `server.ts` (Express). Server routes en `app.routes.server.ts`.
- **TypeScript**: Strict mode (`noImplicitAny`, `strictNullChecks`). Target ES2022.
