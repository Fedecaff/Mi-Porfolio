# Federico Caffettaro — Portfolio

Sitio one-page de **Federico Gabriel Gomez Caffettaro**, Desarrollador Full Stack. Stack: React 18, Vite, Tailwind CSS y Framer Motion. Texto en español.

Busco empleo en una empresa. El contenido sale del CV 2026 (sistemas en producción), no de proyectos de práctica.

## Desarrollo local

```bash
npm install
npm run dev
```

```bash
npm run build
npm run preview
```

`npm run build` genera `dist/`, listo para publicar en Netlify arrastrando esa carpeta.

## Deploy en Netlify (drag & drop)

1. `npm run build`
2. Arrastrá la carpeta `dist/` al deploy de Netlify.

`dist/` incluye:

- `_redirects` — SPA (`/* → /index.html`)
- `_headers` — cabeceras básicas
- `index.html` con el formulario oculto **contacto-profesional** para [Netlify Forms](https://docs.netlify.com/forms/setup/)

Si conectás el repo en lugar de subir `dist/`, `netlify.toml` usa `npm run build` y publica `dist/`.

El formulario se detecta en el HTML estático. En local (`npm run preview`) el envío no llega a Netlify: eso es esperado. En producción, los mensajes aparecen en **Forms** del sitio.

## Capturas de proyectos

Cada caso muestra imagen solo si su slug está en `caseCoverSlugs` (`src/data/content.js`) y existe `public/projects/<slug>/cover.webp`. Si no, no se pide el archivo (evita 404) y el texto ocupa todo el ancho.

| Caso | Carpeta |
| --- | --- |
| Rotisería con 3 sucursales | `public/projects/rotiseria/cover.webp` |
| Somar Frutas y Verduras | `public/projects/somar/cover.webp` |
| Food POS | `public/projects/food-pos/cover.webp` |
| Fon.corner | `public/projects/fon-corner/cover.webp` |
| SIHE | `public/projects/sihe/cover.webp` |

Usá capturas con **datos ficticios**, no de producción. Poné `cover.webp` en la carpeta del caso y agregá el slug en `caseCoverSlugs`. Después volvé a construir.

Los PDFs del CV y la foto viven en `public/`:

- Botón **Descargar CV**: `CV-Federico-Caffettaro-2026-diseno.pdf`
- Link secundario: `CV-Federico-Caffettaro-2026.pdf`
- Foto: `foto.jpg` (circular, tamaño chico)

## Contenido

Textos en `src/data/content.js`. No inventar métricas ni enlazar sistemas en producción.

La carpeta `_material-portfolio/` es material de trabajo (CV fuente, LinkedIn, propuesta) y está en `.gitignore`.

## Open Graph

`og:image`, `og:url` y `canonical` usan `https://mi-porfolio-caffettarro.netlify.app/`.
