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

El color verde característico de la marca es **`#00c950`**. Todos los verdes del diseño deben derivarse de esta paleta. No usar las clases `green-*` de Tailwind por defecto — usar los valores hex directos o variables CSS.

#### Verde base
| Rol | Hex |
|---|---|
| **Base (principal)** | `#00c950` |

#### Tintes (más claros)
| Nivel | Hex |
|---|---|
| Tinte 1 | `#4fd26a` |
| Tinte 2 | `#75da83` |
| Tinte 3 | `#94e29b` |
| Tinte 4 | `#b0eab4` |
| Tinte 5 (más suave) | `#cbf1cd` |

#### Shades (más oscuros)
| Nivel | Hex |
|---|---|
| Shade 1 | `#15aa45` |
| Shade 2 | `#1c8b3b` |
| Shade 3 | `#1d6e30` |
| Shade 4 | `#1c5226` |
| Shade 5 (más oscuro) | `#17381c` |

#### Hues (variaciones de matiz)
`#14c700` · `#00c70d` · `#00c72e` · `#00c950` · `#00c771` · `#00c792`

#### Transparencias
| Alpha | Hex |
|---|---|
| 86% | `#00c950db` |
| 71% | `#00c950b6` |
| 57% | `#00c95092` |
| 43% | `#00c9506d` |
| 29% | `#00c95049` |

#### Colores complementarios y triángulo
| Rol | Hex |
|---|---|
| Complementario base | `#c70077` (magenta/rosa) |
| Complementario hover | `#a90065` (shade −15%) |
| Triángulo 1 | `#5000c7` (violeta) |
| Triángulo 2 | `#c75000` (naranja) |

#### Usos semánticos
| Uso | Valor |
|---|---|
| Color principal (acento, botones, íconos, bordes activos) | `#00c950` |
| Hover de botones principales | `#15aa45` (Shade 1) |
| Títulos de sección en modales y CV | `#1c8b3b` (Shade 2) |
| Fondo suave / franja trust | `#cbf1cd` (Tinte 5) |
| Overlay de hero banner | `#1d6e30cc` → `#1c8b3b66` (Shade 3/2 con alpha) |
| Glow del navbar (hover) | `#00c95040` (Transparencia ~25%) |
| Borde de inputs en foco | `#00c950` (2px solid) |
| Textos base | `gray-900`, `gray-700`, `gray-600`, `gray-500` |
| Errores / alertas | `#c70077` (complementario) / hover: `#a90065` |

### Componentes UI — convenciones

**Botones principales:**
```html
<button class="btn bg-[#00c950] hover:bg-[#15aa45] text-white border-0">...</button>
<!-- Pill shape para CTAs -->
<a class="... bg-[#00c950] border-0 py-2 px-8 rounded-full hover:bg-[#15aa45] text-white">...</a>
```

**Separador de sección (underline verde):**
```html
<div class="h-1 w-20 bg-[#00c950] rounded"></div>
```

**Hero banner de página de especialidad:**
```html
<div class="hero min-h-[60vh] relative" style="background-image: url(...)">
  <div class="absolute inset-0 bg-gradient-to-r from-[#17381c]/90 to-[#1c5226]/40 mix-blend-multiply"></div>
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
<div class="h-1 w-20 bg-[#00c950] rounded mx-auto mb-4"></div>
```

**Tarjeta de tratamiento / procedimiento (clickeable):**
```html
<button class="bg-base-100 border border-gray-200 shadow-sm rounded-lg flex p-4 h-full items-center justify-start w-full text-left transition-all duration-300 hover:shadow-md hover:scale-[1.02] cursor-pointer hover:border-[#75da83]">
  <!-- ícono SVG checkmark verde -->
  <span class="title-font font-medium text-gray-900">...</span>
</button>
```

**Bio de profesional (quote):**
```html
<p class="leading-relaxed text-lg text-gray-600 italic border-l-4 border-[#00c950] pl-4">
  "{{ selectedMember().bio }}"
</p>
```

**Nombre de profesional (gradient):**
```html
<h2 class="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#15aa45] to-[#4fd26a] mb-2">
```

**Título de sección dividido (título izq + descripción der):**
```html
<div class="flex flex-wrap w-full mb-12">
  <div class="lg:w-1/2 w-full mb-6 lg:mb-0">
    <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900 uppercase">TÍTULO</h1>
    <div class="h-1 w-20 bg-[#00c950] rounded"></div>
  </div>
  <p class="lg:w-1/2 w-full leading-relaxed text-gray-500 text-lg self-center">Descripción...</p>
</div>
```
Usar cuando hay suficiente texto descriptivo para justificar el layout 50/50. Alternativa al header centrado.

**Banner full-width con espaciado exterior (ej. Supervisión de Menús):**
```html
<div class="bg-base-100 py-12 md:py-24">
  <section class="bg-gradient-to-r from-[#1d6e30] to-[#15aa45] py-20 md:py-28">
    <div class="container mx-auto px-8 md:px-16">...</div>
  </section>
</div>
```
El wrapper blanco actúa como separador — no agregar dividers adicionales alrededor.

**FAB de WhatsApp (presente en todas las páginas terminadas):**
```html
<div class="fab">
  <a href="https://api.whatsapp.com/send/?phone=54345402..." target="_blank"
     class="border-0 bg-[#00c950] btn btn-xl btn-circle btn-primary">
    <!-- SVG de WhatsApp -->
  </a>
</div>
```

**Imágenes:** todas hosteadas en ImageKit (`https://ik.imagekit.io/wonback/...`).

**Separadores entre secciones:**

El espaciado vertical entre secciones lo controlan **exclusivamente los separadores**. Las secciones de contenido no deben tener `py-*`. El divider siempre usa `py` simétrico (igual arriba y abajo):

```html
<div class="container px-5 py-12 md:py-24 mx-auto flex w-full flex-col">
  <div class="divider"></div>
</div>
```

El separador puede ir como elemento independiente entre secciones, o dentro de una sección al final (antes del `</section>`). En ambos casos siempre `py-12 md:py-24`, nunca solo `pt-*`.

La única excepción es la primera sección después del hero, que puede tener `pt-12 md:pt-24` ya que no hay separador arriba.

### CSS personalizado reutilizable

`landing.css` define `.hero-mask-fade` (fade inferior del hero) y `.hero-bottom-fade`.

`navbar.css` define `.nav-item-glow`, `.glow-from-right`, `.glow-from-left` para el efecto hover del navbar.

`contacto.css` define el borde verde en foco para `.input`, `.select` y `.file-input`.

## README — Estado de páginas

`README.md` raíz tiene una tabla de estado por página (✅ Terminada / 🚧 En desarrollo / ❌ Sin desarrollar). Actualizar cuando cambie el estado de una página.

## Pendientes

### Bug conocido — Dropdown navbar en pantalla mediana
- **Qué:** En `lg` (≥1024px hasta <1536px), el dropdown "Especialidades" se activa al hacer hover en un área invisible debajo del botón.
- **Causa probable:** DaisyUI v5 `dropdown-hover` usa `:hover` CSS puro; el `dropdown-content` oculto parece seguir interceptando eventos de mouse.
- **Intentado sin éxito:** `items-center` en el wrapper `flex-1`; reemplazar `dropdown-hover` por `[class.dropdown-open]` + `mouseenter`/`mouseleave` Angular.
- **Estado:** Sin resolver. Requiere inspeccionar qué hace DaisyUI v5 con `pointer-events` en `.dropdown-content` oculto antes de intentar otro parche.

### Sección Trust/Social Proof — Landing
- **Qué:** Franja de obras sociales y prepagas con cobertura (logos o nombres en fila con checkmarks)
- **Dónde:** Entre el hero y "Nuestras Especialidades" en `core/landing/landing.html`
- **Estado:** Esperando lista de obras sociales del cliente
- **Patrón sugerido:** `✓ PAMI  ✓ OSDE  ✓ Swiss Medical  ✓ Galeno  ...` con fondo sutil (`bg-[#cbf1cd]` Tinte 5 o `base-200`)

## Plugins instalados

| Plugin | Cuándo usarlo |
|---|---|
| **context7** | Antes de usar APIs de Angular, DaisyUI 5, Tailwind 4, Motion One o cualquier librería — busca docs actualizadas en vez de depender del conocimiento interno |
| **ui-ux-pro-max** | Al diseñar o mejorar componentes UI: paletas, estilos, layout, tipografía, animaciones |
| **github** | Para trabajar con PRs, issues y releases del repositorio |
| **claude-md-management** | Para auditar y actualizar este CLAUDE.md con aprendizajes de la sesión |

### Uso de Context7

Cuando vayas a trabajar con una librería, resolvé su ID primero y luego consultá la documentación relevante:

```
# Ejemplo: antes de usar una API de Angular o DaisyUI
1. resolve-library-id("angular") → /angular/angular
2. query-docs("/angular/angular", "standalone components signals")
```

Librerías clave de este proyecto: `angular`, `daisyui`, `tailwindcss`, `motion` (Motion One).

## Key Patterns

- **CV form** (`pages/contacto/contacto.ts`): Reactive Forms con validator custom `soloLetras` (`/^[a-zA-ZÀ-ÿ\s'\-]+$/`), validación de PDF/4MB en cliente, loading state, modales success/error.
- **SSR**: `app.config.server.ts` + `server.ts` (Express). Server routes en `app.routes.server.ts`.
- **TypeScript**: Strict mode (`noImplicitAny`, `strictNullChecks`). Target ES2022.

## Páginas de Especialidad — Convenciones

**Orden canónico de secciones:**
Hero → Nosotros → [Contenido específico: tratamientos / procedimientos / patologías] → Equipo de Profesionales (al final, como "créditos"). No invertir este orden — el equipo siempre cierra la página.

**Hero con CTA (patrón completo):**
```html
<div class="hero min-h-[60vh] relative" style="background-image: url(...)">
  <div class="absolute inset-0 bg-gradient-to-r from-[#17381c]/90 to-[#1c5226]/40 mix-blend-multiply"></div>
  <div class="hero-content text-white w-full justify-start px-8 md:px-16 z-10">
    <div class="max-w-2xl text-left mt-32 md:mt-0">
      <h1 class="mb-6 text-4xl md:text-5xl font-black uppercase leading-tight tracking-tight">...</h1>
      <a href="https://api.whatsapp.com/send/?phone=543454021218&text&type=phone_number&app_absent=0"
         target="_blank"
         class="inline-flex items-center gap-3 bg-[#00c950] hover:bg-[#15aa45] text-white font-semibold py-3 px-8 rounded-full transition-colors duration-200 shadow-lg drop-shadow-lg text-lg">
        Solicitar turno
        <!-- SVG WhatsApp -->
      </a>
    </div>
  </div>
</div>
```
Nota: `mb-6` en el `<h1>` (no `mb-2`) cuando hay botón debajo.

**Teléfono WhatsApp por defecto:** `543454021218` (el mismo del landing). Usar este número en todas las páginas salvo que se indique explícitamente un número distinto al arrancar el desarrollo de una página nueva. Excepción conocida: Hemodinamia usa `543454021217`.

**Auto-rotación del equipo de profesionales:** Todas las páginas con sección de equipo usan `setInterval` de 5000ms (`OnInit`/`OnDestroy`). Patrón: `stopRotation()` en el click que abre el modal CV, `(close)="startRotation()"` en el elemento `<dialog>`, y `stopRotation()` + `startRotation()` al hacer click manual en un miembro. Ver `hemodinamia.ts` como referencia canónica.

**Footer:** Lleva `mt-12 md:mt-24` propio — ninguna página necesita agregar espacio antes del footer. `footer.css` define `box-shadow` hacia arriba (espejo de `shadow-lg` de Tailwind).
