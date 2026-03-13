# Frontend — Instituto Garat

Angular 21 SPA con SSR. Ver el [README raíz](../README.md) para documentación completa del proyecto.

## Comandos

```bash
npm start                       # Dev server → http://localhost:4200
npm run build                   # Build de producción (SSR)
npm run serve:ssr:frontend      # Servidor SSR local (requiere build previo)
npm test                        # Tests con Vitest
```

## Estructura

```
src/app/
├── core/           # Navbar, Footer, Landing (siempre cargados)
├── pages/          # Especialidades (lazy-loaded)
└── app.routes.ts   # Configuración de rutas
```

## Environments

| Archivo | API URL |
|---|---|
| `environments/environment.ts` | `http://localhost:3000` |
| `environments/environment.prod.ts` | `https://institutogarat-api.vercel.app` |
