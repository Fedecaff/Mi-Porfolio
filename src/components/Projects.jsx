import React from 'react'
import { motion } from 'framer-motion'

const Projects = () => {
  // Aquí puedes agregar los datos de tus proyectos reales
  const projects = [
    {
      id: 1,
      title: "Sabores de mi Tierra — Sistema de Gestión para Rotisería",
      description: "Plataforma integral para gestionar ventas, clientes, viandas y cocina en una rotisería. Centraliza operaciones diarias, reduce errores manuales y mejora la trazabilidad del servicio. Diseñada para un entorno real con flujo de caja rápido y múltiples tipos de pedidos.",
      technologies: ["Node.js", "Express", "PostgreSQL", "React", "Vite", "JWT", "Axios"],
      githubUrl: "https://github.com/Fedecaff/sabores-de-mi-tierra-",
      imageUrl: "/imagen/captura-sabores-mi-tierra.png",
      features: [
        "Ventas de mostrador con ticket de cocina y ticket de venta",
        "Gestión de planes de vianda con pagos y retiros diarios",
        "Módulo de pedidos de cocina unificado (mostrador + viandas)",
        "Promociones automáticas con cálculo de precio",
        "CRUD de productos, categorías y clientes",
        "Reportes operativos de ventas y viandas"
      ],
      problemSolved: "Resuelve la falta de control en el flujo diario de ventas y viandas, ofreciendo un sistema unificado que registra pedidos, pagos, tickets de cocina y retiros, evitando confusiones operativas y mejorando la atención al cliente.",
      learnings: [
        "Diseño de flujos operativos reales y validaciones de negocio",
        "Integración frontend/backend con autenticación y roles",
        "Organización modular de servicios y controladores para escalabilidad"
      ],
      technicalDecisions: [
        "Separación en capas (rutas, controladores y servicios) para facilitar mantenimiento y crecimiento del sistema",
        "Autenticación con JWT para mantener sesiones stateless y simplificar la protección de endpoints",
        "PostgreSQL por su fortaleza en relaciones entre entidades operativas como clientes, ventas y viandas",
        "Centralización de la lógica de pedidos para unificar el flujo entre caja y cocina y evitar inconsistencias"
      ],
      metrics: "Sistema de gestión integral • Operación diaria unificada • Enfoque en trazabilidad",
      impact: "Permite ordenar la operación de rotisería en un único sistema y mejorar tiempos de atención en escenarios de alta demanda",
      deploymentNote: "Proyecto preparado para entorno real con PostgreSQL y documentación de API disponible en el repositorio."
    },
    {
      id: 2,
      title: "CRUD Fullstack - Sistema de Mapeo (Demo Educativa)",
      description: "Demo educativa que demuestra conocimientos fullstack a través de un sistema de gestión de puntos de emergencia. Implementa CRUD completo con 3 tablas relacionadas, API REST, mapa interactivo con Leaflet, y arquitectura Node.js + Express + PostgreSQL. Proyecto creado para evidenciar comprensión de integración frontend-backend-base de datos en un caso práctico funcional.",
      technologies: ["Node.js", "Express", "PostgreSQL", "JavaScript ES6+", "HTML5", "CSS3", "Bootstrap 5", "Leaflet.js", "Font Awesome"],
      githubUrl: "https://github.com/Fedecaff/crud-mapeo-emergencias",
      imageUrl: "/imagen/captura CRUD mapeo.png",
      features: [
        "CRUD completo para 3 tablas relacionadas (usuarios, categorías, puntos)",
        "API REST con endpoints para consultas especiales y estadísticas",
        "Mapa interactivo con marcadores personalizados por categoría",
        "Sistema de gestión de usuarios con roles (administrador/operador)",
        "Dashboard con estadísticas en tiempo real",
        "Interfaz responsive con formularios validados"
      ],
      problemSolved: "Centralizar la gestión de puntos de emergencia en un sistema único para registrar, consultar y mantener datos operativos de forma ordenada.",
      learnings: [
        "Modelado y relación de tablas en PostgreSQL para casos reales",
        "Diseño de API REST con separación entre rutas, controladores y consultas",
        "Integración entre mapa interactivo y datos persistidos en base de datos"
      ],
      technicalDecisions: [
        "Modelo relacional de 3 tablas para preservar integridad de datos entre usuarios, categorías y puntos",
        "Diseño REST para desacoplar frontend y backend y facilitar pruebas por endpoint",
        "Uso de Leaflet para representar datos geográficos con marcadores por categoría de forma escalable"
      ],
      metrics: "Proyecto educativo Full Stack • 3 tablas relacionadas • API REST completa",
      impact: "Desarrollado para consolidar conocimientos en arquitectura de aplicaciones web completas y manejo integral de bases de datos relacionales",
      deploymentNote: "Proyecto local que requiere PostgreSQL. Código completo disponible en GitHub para revisión."
    },
    {
      id: 3,
      title: "Sistema de Mapeo de Emergencias - Catamarca",
      description: "Sistema integral de gestión de emergencias en tiempo real para bomberos voluntarios. Una aplicación web completa que permite la coordinación de emergencias, geolocalización de operadores, gestión de puntos de interés y notificaciones en tiempo real para mejorar la respuesta ante emergencias.",
      technologies: ["Node.js", "Express.js", "PostgreSQL", "Socket.IO", "JavaScript ES6+", "Leaflet.js", "Bootstrap 5", "Railway"],
      githubUrl: "https://github.com/Fedecaff/mapa-emergencias",
      imageUrl: "/imagen/captura pro bombero.png",
      features: [
        "Mapa interactivo con geolocalización cada 30s",
        "Sistema de alertas con notificaciones push",
        "Gestión de operadores en tiempo real",
        "Comunicación WebSocket bidireccional",
        "Panel administrativo con roles",
        "Integración con servicios de mapas y geolocalización"
      ],
      problemSolved: "Mejorar la coordinación de emergencias con visibilidad en tiempo real de operadores, alertas y puntos críticos en una sola plataforma.",
      learnings: [
        "Implementación de comunicación en tiempo real con Socket.IO",
        "Manejo de estados y eventos para paneles operativos en vivo",
        "Despliegue de un proyecto full stack con servicios cloud gratuitos"
      ],
      technicalDecisions: [
        "Socket.IO para sincronizar operadores y alertas en tiempo real sin refresco manual",
        "Control de acceso por roles para separar operaciones administrativas de uso operativo",
        "Persistencia en PostgreSQL para auditar eventos y mantener trazabilidad de la operación"
      ],
      metrics: "13,580+ líneas de código • 6 tablas de BD • Sistema en tiempo real",
      impact: "Sistema completo para coordinación de emergencias con tecnología moderna",
      deploymentNote: "El proyecto está desplegado con limitaciones debido al vencimiento de la cuenta gratuita de Railway. La funcionalidad completa puede verse en el código fuente.",
      credentials: {
        admin: { user: "admin@bomberos.com", pass: "admin123" }
      }
    },
    {
      id: 4,
      title: "Invitación Digital de Boda - Félix & Susana",
      description: "Sitio web interactivo reutilizable para invitaciones digitales de boda, adaptado para nuevos novios y eventos. Desarrollado con HTML5, CSS3 y JavaScript vanilla, ofrece una experiencia elegante y personalizada con secciones dinámicas, cuenta regresiva y contenido multimedia.",
      technologies: ["HTML5", "CSS3", "JavaScript ES6+", "Google Fonts", "CSS Grid", "Flexbox", "Media Queries"],
      githubUrl: "https://github.com/Fedecaff/Boda",
      imageUrl: "/imagen/captura pro boda.png",
      features: [
        "Diseño responsivo adaptable a todos los dispositivos",
        "Cuenta regresiva dinámica en tiempo real",
        "Carrusel de imágenes interactivo",
        "Reproductor de audio con controles personalizados",
        "Modal interactivo para información adicional",
        "Animaciones CSS y efectos visuales elegantes"
      ],
      problemSolved: "Reemplazar invitaciones tradicionales por una experiencia digital accesible, personalizable y fácil de compartir para los invitados.",
      learnings: [
        "Organización de una landing interactiva con JavaScript vanilla",
        "Uso de componentes visuales para mejorar narrativa y experiencia",
        "Adaptación de una misma base de proyecto para distintos clientes"
      ],
      technicalDecisions: [
        "Arquitectura frontend simple con JavaScript vanilla para facilitar personalización por evento",
        "Diseño responsive mobile-first para asegurar experiencia consistente en dispositivos móviles",
        "Estructura reutilizable de secciones para reducir tiempos de adaptación a nuevos clientes"
      ],
      metrics: "Desarrollo frontend completo • Diseño mobile-first • UX/UI personalizada",
      impact: "Experiencia web memorable que combina funcionalidad moderna con diseño romántico"
    }
  ]

  return (
    <section id="projects" className="py-20 bg-bg-light">
      <div className="section-padding container-max">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Mis Proyectos
          </h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            Una selección de proyectos que demuestran mis habilidades y experiencia en desarrollo web
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-1 gap-12 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="card p-8 lg:p-10"
            >
              <div className="flex flex-col gap-8">
                {/* Imagen del proyecto */}
                <div>
                  <div className="relative group max-w-3xl mx-auto">
                    <div className="aspect-[16/7] rounded-xl overflow-hidden shadow-lg">
                      <img 
                        src={project.imageUrl} 
                        alt={`Screenshot de ${project.title}`}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          // Fallback si no se carga la imagen
                          e.target.style.display = 'none';
                          e.target.nextSibling.style.display = 'flex';
                        }}
                      />
                      {/* Fallback si no se carga la imagen */}
                  <div className="w-full h-full bg-gradient-to-br from-accent/20 to-primary/20 rounded-xl hidden items-center justify-center">
                    <p className="text-text-secondary text-sm">Imagen no disponible</p>
                  </div>
                    </div>
                    
                    {/* Overlay con links */}
                    <div className="absolute inset-0 bg-primary/90 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white text-primary px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors flex items-center"
                      >
                        <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                        </svg>
                        GitHub
                      </a>
                    </div>
                  </div>
                </div>

                {/* Contenido del proyecto */}
                <div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-primary mb-4">
                    {project.title}
                  </h3>
                  
                  <p className="text-text-secondary text-lg mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Problema que resuelve */}
                  {project.problemSolved && (
                    <div className="mb-6 p-4 bg-purple-50 rounded-lg border-l-4 border-purple-500">
                      <h4 className="font-semibold text-primary mb-2">Problema que resuelve</h4>
                      <p className="text-text-secondary text-sm">{project.problemSolved}</p>
                    </div>
                  )}

                  {/* Tecnologías */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-primary mb-3">Tecnologías utilizadas:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Enlaces */}
                  <div className="flex flex-wrap gap-4">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 border-2 border-primary text-primary rounded-lg font-medium hover:bg-primary hover:text-white transition-all duration-300"
                    >
                      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                      </svg>
                      Ver Código
                    </a>
                  </div>

                  {/* Detalle técnico desplegable */}
                  <details className="mt-6 border border-accent/20 rounded-lg p-4">
                    <summary className="cursor-pointer font-semibold text-primary">
                      Ver detalle técnico
                    </summary>
                    <div className="mt-4 space-y-4">
                      <div>
                        <h4 className="font-semibold text-primary mb-3">Características principales</h4>
                        <ul className="grid grid-cols-1 gap-2">
                          {project.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center text-text-secondary">
                              <svg className="w-4 h-4 text-accent mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {project.technicalDecisions && project.technicalDecisions.length > 0 && (
                        <div>
                          <h4 className="font-semibold text-primary mb-3">Decisiones técnicas</h4>
                          <ul className="grid grid-cols-1 gap-2">
                            {project.technicalDecisions.map((decision, decisionIndex) => (
                              <li key={decisionIndex} className="text-text-secondary text-sm">
                                - {decision}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {project.metrics && (
                        <div className="p-4 bg-accent/5 rounded-lg border-l-4 border-accent">
                          <h4 className="font-semibold text-primary mb-2">Métricas del Proyecto</h4>
                          <p className="text-text-secondary text-sm">{project.metrics}</p>
                        </div>
                      )}

                      {project.impact && (
                        <div className="p-4 bg-green-50 rounded-lg border-l-4 border-green-500">
                          <h4 className="font-semibold text-primary mb-2">Impacto</h4>
                          <p className="text-text-secondary text-sm">{project.impact}</p>
                        </div>
                      )}

                      {project.learnings && project.learnings.length > 0 && (
                        <div>
                          <h4 className="font-semibold text-primary mb-3">Aprendizajes clave</h4>
                          <ul className="grid grid-cols-1 gap-2">
                            {project.learnings.map((learning, learningIndex) => (
                              <li key={learningIndex} className="text-text-secondary text-sm">
                                - {learning}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {project.deploymentNote && (
                        <div className="p-4 bg-yellow-50 rounded-lg border-l-4 border-yellow-500">
                          <h4 className="font-semibold text-primary mb-2">Nota sobre el Deploy</h4>
                          <p className="text-text-secondary text-sm">{project.deploymentNote}</p>
                        </div>
                      )}

                      {project.credentials && (
                        <div className="p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                          <h4 className="font-semibold text-primary mb-3">Credenciales de Prueba</h4>
                          <div className="bg-white p-4 rounded border max-w-sm">
                            <p className="font-medium text-blue-600 mb-2">Administrador</p>
                            <p className="text-text-secondary mb-1">Email: <span className="font-mono bg-gray-100 px-2 py-1 rounded text-sm">{project.credentials.admin.user}</span></p>
                            <p className="text-text-secondary">Contraseña: <span className="font-mono bg-gray-100 px-2 py-1 rounded text-sm">{project.credentials.admin.pass}</span></p>
                          </div>
                          <p className="text-xs text-text-secondary mt-3">Algunas funcionalidades pueden tener limitaciones por la migración de Railway a Vercel</p>
                        </div>
                      )}
                    </div>
                  </details>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mensaje para futuros proyectos */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center px-6 py-3 bg-accent/10 text-accent rounded-full font-medium">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
            Más proyectos en desarrollo
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
