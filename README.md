# Federico Caffettaro · Portfolio

Portfolio profesional de Federico Caffettaro, desarrollador full stack freelance. Los casos corresponden a sistemas reales de clientes; su código es confidencial.

**Sitio en vivo:** https://mi-porfolio-caffettarro.netlify.app

Este repositorio contiene solo el código del sitio del portfolio.

## Stack

- **React 18** con **Vite**
- **Tailwind CSS** para estilos y **Framer Motion** para animaciones
- **Netlify** para el hosting:
  - **Netlify Forms** para el formulario de contacto (`contacto-profesional`)
  - Cabeceras de seguridad en `public/_headers` (`X-Frame-Options`, `X-Content-Type-Options`, `Referrer-Policy`, `Permissions-Policy`)
  - Redirección SPA (`/* → /index.html`)

## Correr el proyecto en local

Requisitos: Node.js 18 o superior.

```bash
npm install
npm run dev       # servidor de desarrollo
npm run build     # build de producción en dist/
npm run preview   # sirve el build localmente
```

En local el formulario de contacto no envía a Netlify: los envíos solo funcionan en el sitio publicado.

## Deploy

Netlify despliega automáticamente cada push a `main` desde GitHub. La configuración está en `netlify.toml`:

- Comando de build: `npm run build`
- Carpeta publicada: `dist`

## Estructura

```
public/
  _headers                  cabeceras de seguridad
  _redirects                redirección SPA
  projects/<slug>/          capturas de cada caso (cover.webp)
  CV-*.pdf, foto.jpg        CV descargable y foto
src/
  components/               secciones del sitio (Hero, Cases, Stack, Contact, etc.)
  data/content.js           todo el contenido del sitio
  lib/motion.js             variantes de animación
index.html                  metadatos, Open Graph y formulario oculto para Netlify Forms
netlify.toml                configuración de build y deploy
```

### Contenido

Todo el texto del sitio (perfil, casos, proceso de trabajo, stack, sobre mí y SEO) está en `src/data/content.js`. Para cambiar el contenido, se edita ese archivo y no hace falta tocar los componentes.

### Capturas de los casos

Cada caso muestra una imagen solo si se cumplen dos condiciones:

1. Existe el archivo `public/projects/<slug>/cover.webp`.
2. El slug está incluido en `caseCoverSlugs` dentro de `src/data/content.js`.

Si falta alguna de las dos, el caso se muestra solo con texto y no se pide ninguna imagen. Las capturas usan datos ficticios, nunca datos reales de clientes.

## Contacto

- Email: federico.gomez.sc@gmail.com
- LinkedIn: https://www.linkedin.com/in/federico-gabriel-gomez-caffettaro-109494408
- GitHub: https://github.com/Fedecaff
