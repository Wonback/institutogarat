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
<h2 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900 uppercase">TÍTULO</h2>
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
    <h2 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900 uppercase">TÍTULO</h2>
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
  <a href="https://api.whatsapp.com/send/?phone=54345402..." target="_blank" rel="noopener noreferrer"
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

El separador puede ir como elemento independiente entre secciones, o dentro de una sección al final (antes del `</section>`). En páginas con patrón lg/2xl: `py-8 md:py-16 2xl:py-24`. En páginas sin ese patrón: `py-12 md:py-24`. Nunca solo `pt-*`.

La única excepción es la primera sección después del hero, que puede tener `pt-12 md:pt-24` ya que no hay separador arriba.

### Hero landing — z-index gotcha

`landing.css` sets `.hero-content { z-index: 2 }`. Tailwind `z-10`+ on overlays inside the hero will render **above** content despite DOM order. Rule: overlay `div`s inside `.hero` must use `z-0` + `pointer-events-none`. Never use `z-10` or higher on an overlay inside the landing hero.

**Landing hero (patrón actual — `core/landing/landing.html`):**
Dark gradient overlay (left→right: 0.72→0.15 opacity), left-aligned content, split-weight H1 (`font-light` top line + `font-extrabold` bottom line), gradient CTA button. Overlay: `z-0 pointer-events-none`. Hero uses `h-[80vh]` with `hero-mask-fade` class. Do not redesign unless explicitly asked.

### CSS personalizado reutilizable

`landing.css` define `.hero-mask-fade` (fade inferior del hero) y `.hero-bottom-fade`.

`navbar.css` define `.nav-item-glow`, `.glow-from-right`, `.glow-from-left` para el efecto hover del navbar.

`contacto.css` define el borde verde en foco para `.input`, `.select` y `.file-input`.

## README — Estado de páginas

`README.md` raíz tiene una tabla de estado por página (✅ Terminada / 🚧 En desarrollo / ❌ Sin desarrollar). Actualizar cuando cambie el estado de una página.

### Patrón responsive lg (1024–1535px) vs 2xl (1536px+)

La versión mediana usa `lg:` para reducir escala y `2xl:` para restaurar al tamaño full. Aplicar siempre este par — no usar solo `lg:` sin restaurar en `2xl:`.

- **Espacio lateral:** `px-5 lg:px-16 2xl:px-5` en todos los containers del landing y navbar.
- **Separadores:** `py-8 md:py-16 2xl:py-24` — no usar `md:py-24` solo (aplica desde 768px, excesivo en lg).
- **Títulos de sección:** `text-2xl sm:text-3xl lg:text-2xl 2xl:text-3xl`
- **Textos descriptivos:** `text-lg lg:text-base 2xl:text-lg`
- **Navbar padding:** `lg:py-3 lg:px-16 2xl:p-5` en el container; logo `lg:max-w-[270px] 2xl:max-w-[350px]`.
- **Páginas con patrón lg/2xl aplicado:** contacto, hemodinamia, nutricion, traumatologia, neonatologia. Usar `hemodinamia.html` como referencia canónica del patrón completo.

**Modales DaisyUI:** Siempre agregar `max-h-[80vh] overflow-y-auto` al `modal-box` cuando el contenido es variable (CVs, descripciones de tratamientos). Sin esto el modal se pega a los bordes de la pantalla.

## Pendientes

### Dropdown navbar en pantalla mediana — RESUELTO
- **Causa raíz:** DaisyUI `dropdown-content` vive siempre en el DOM aunque esté oculto — los links interceptan clicks/hover aunque no se vean. `[class.dropdown-open]` no soluciona esto.
- **Solución:** Reemplazar el componente `dropdown` de DaisyUI con un `div relative` propio + `@if (dropdownOpen())` de Angular. Cuando cerrado, los links no existen en el DOM → hitbox invisible imposible.
- **Hover gap fix:** `mt-*` en el dropdown crea un gap fuera del bounding box del contenedor que dispara `mouseleave`. Fix: `pb-[mismo valor]` en el contenedor + quitar el `mt-*` del dropdown.
- **Implementación:** `(mouseenter)`/`(mouseleave)` en el contenedor, `dropdownOpen = signal(false)` en `navbar.ts`. Ver `navbar.html` bloque `specialties-dropdown`.

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

## SEO

**Meta y título dinámico por página:** Cada componente inyecta `Meta` y `Title` en `ngOnInit`. Patrón canónico:

```typescript
private meta = inject(Meta);   // from '@angular/platform-browser'
private title = inject(Title); // from '@angular/platform-browser'

ngOnInit() {
  this.title.setTitle('Especialidad | Instituto Garat');
  this.meta.updateTag({ name: 'description', content: 'Descripción de ~155 chars.' });
}
```

**Jerarquía de encabezados — un único `<h1>` por página:**
- Hero → `<h1>` (único en la página; keyword principal debe coincidir con `title` y `meta description`)
- Secciones (Nosotros, Tratamientos, Equipo) → `<h2>`
- Sub-secciones (Misión, Visión, Quiénes somos) → `<h3>`

**Reglas SEO adicionales (validadas con analizador externo):**
- **Meta description:** máximo ~155 caracteres (Google renderiza ~1000px). Superar ese límite dispara advertencia de "too long".
- **Keywords del H1 en el cuerpo:** las palabras clave del `<h1>` deben aparecer al menos una vez en el texto del cuerpo (`<p>`, `<h2>`, etc.). Si el `<h1>` es el nombre institucional, incluir el adjetivo compuesto en el primer párrafo del hero.
- **Headings semánticos:** no usar `<h2>`/`<h3>` para etiquetas decorativas (ej. "ESPECIALIDAD", "PASO 1"), contadores estadísticos (+50, +100) ni números que no sean títulos reales. Usar `<span>` o `<p>` con las mismas clases de estilo.
- **Anchor text único:** cuando múltiples links comparten el mismo texto visible (ej. "Más información" × N), agregar `aria-label` descriptivo al `<a>` sin cambiar el texto visible. Ej: `aria-label="Más información sobre Cirugía General"`.

**Links externos:** Todo `target="_blank"` requiere `rel="noopener noreferrer"`.

**Google Fonts:** Cargar con `rel="preload" as="style"` + `onload` — ya configurado en `index.html`.

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
         rel="noopener noreferrer"
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

**Campos de `TeamMember` — imagen y CV:**
- `bioImagePosition` — `object-position` de la foto grande. Siempre dos valores: `'center 30%'` (horizontal vertical). Un solo valor (ej. `'50%'`) no cambia nada porque CSS usa `center` como segundo valor por defecto.
- `thumbnailPosition` — `object-position` del avatar circular. Mismo formato.
- `thumbnailZoom` — número (ej. `1.2`). Aplica `transform: scale()` dentro del contenedor `overflow-hidden`.
- `cv` — string HTML. Títulos con `<p class="font-semibold text-[#1c8b3b] mb-1">`, listas con `<ul class="list-disc list-inside space-y-1 mb-4">`. Secciones típicas: Matrícula (`<p class="mb-4">MP XXXXX</p>`), Formación, Ocupación actual.
- **Gotcha:** Al agregar un campo nuevo a la interfaz TypeScript, siempre añadir el valor en **cada objeto del array** en el mismo paso.

**Footer:** Lleva `mt-12 md:mt-24` propio — ninguna página necesita agregar espacio antes del footer. `footer.css` define `box-shadow` hacia arriba (espejo de `shadow-lg` de Tailwind).

**Carrusel mobile de galería (scroll-snap + dots):** Para galerías de imágenes que en desktop muestran grid y en mobile carrusel. Patrón: wrapper `md:hidden` con `flex overflow-x-auto snap-x snap-mandatory gallery-scrollbar-hide` + `(scroll)="onGalleryScroll($event)"`, cada item `snap-center w-full shrink-0 aspect-square`. Dots con `[style.background-color]` binding a signal `currentGallerySlide`. Desktop: `hidden md:block` con grid normal. En TS: `currentGallerySlide = signal(0)`, `onGalleryScroll(e)` calcula `Math.round(scrollLeft / clientWidth)`, `scrollToSlide(container, index)` usa `scrollTo({ left: clientWidth * index, behavior: 'smooth' })`. En CSS del componente: clase `.gallery-scrollbar-hide` con `scrollbar-width: none` + `::-webkit-scrollbar { display: none }`. Ver `nutricion.html/.ts/.css` como referencia.
