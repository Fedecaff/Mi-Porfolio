# Portfolio de Federico Gabriel Gomez Caffettaro

Un portafolio web moderno y minimalista desarrollado con React, Vite y Tailwind CSS.

##  Características

- **Diseño Minimalista**: Paleta de colores sobria y elegante
- **Totalmente Responsive**: Optimizado para todos los dispositivos
- **Animaciones Suaves**: Implementadas con Framer Motion
- **SEO Optimizado**: Meta tags y estructura semántica
- **Fácil Personalización**: Código limpio y bien documentado
- **Deploy Automático**: Configurado para Netlify

##  Tecnologías Utilizadas

- **React 18** - Biblioteca de JavaScript para interfaces de usuario
- **Vite** - Herramienta de construcción rápida
- **Tailwind CSS** - Framework de CSS utilitario
- **Framer Motion** - Biblioteca de animaciones para React
- **Netlify** - Plataforma de deploy

##  Instalación

1. **Instalar dependencias:**
   ```bash
   npm install
   ```

2. **Ejecutar en modo desarrollo:**
   ```bash
   npm run dev
   ```

3. **Construir para producción:**
   ```bash
   npm run build
   ```

4. **Vista previa de la construcción:**
   ```bash
   npm run preview
   ```

##  Personalización

### Colores
Los colores se definen en `tailwind.config.js`:
- `primary`: Color principal (azul grisáceo oscuro)
- `secondary`: Color secundario (gris azulado)
- `accent`: Color de acento (azul suave)

### Contenido
- **Proyectos**: Edita el array `projects` en `src/components/Projects.jsx`
- **Skills**: Modifica `skillCategories` en `src/components/Skills.jsx`
- **Información personal**: Actualiza los datos en cada componente

### Imágenes
- Agrega tus screenshots de proyectos en la carpeta `public/`
- Actualiza las rutas en el componente `Projects.jsx`

##  Secciones del Portfolio

1. **Hero Section**: Presentación principal con tu nombre y título
2. **Sobre Mí**: Descripción personal y profesional
3. **Proyectos**: Showcase de tus trabajos con detalles técnicos
4. **Skills**: Tecnologías y herramientas que manejas
5. **Contacto**: Formulario de contacto y redes sociales

##  Deploy en Netlify

1. **Conecta tu repositorio** a Netlify
2. **Configuración automática**: El archivo `netlify.toml` ya está configurado
3. **Build settings**:
   - Build command: `npm run build`
   - Publish directory: `dist`

### Deploy manual:
```bash
npm run build
# Sube la carpeta 'dist' a Netlify
```

##  Personalización Pendiente

Antes de hacer deploy, asegúrate de personalizar:

- [ ] URLs de GitHub y LinkedIn en `Contact.jsx`
- [ ] Email de contacto
- [ ] Información de proyectos reales
- [ ] Screenshots de tus proyectos
- [ ] Descripción personal en la sección "Sobre Mí"
- [ ] Ajustar skills según tu experiencia

##  Licencia

Este proyecto es de uso libre. Puedes usarlo como base para tu propio portfolio.

---

Desarrollado por Federico Gabriel Gomez Caffettaro
