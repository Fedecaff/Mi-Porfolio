import React from 'react'
import { motion } from 'framer-motion'

const Projects = () => {
  // Aquí puedes agregar los datos de tus proyectos reales
  const projects = [
    {
      id: 1,
      title: "🚒 Sistema de Mapeo de Emergencias - Catamarca",
      description: "Sistema integral de gestión de emergencias en tiempo real para bomberos voluntarios. Una aplicación web completa que permite la coordinación de emergencias, geolocalización de operadores, gestión de puntos de interés y notificaciones en tiempo real para mejorar la respuesta ante emergencias.",
      technologies: ["Node.js", "Express.js", "PostgreSQL", "Socket.IO", "JavaScript ES6+", "Leaflet.js", "Bootstrap 5", "Railway"],
      githubUrl: "https://github.com/Fedecaff/mapa-emergencias",
      liveUrl: "", // Demo temporalmente no disponible (Railway expirado)
      imageUrl: "/emergencias-dashboard.jpg", // Agrega screenshot del dashboard
      features: [
        "Mapa interactivo con geolocalización cada 30s",
        "Sistema de alertas con notificaciones push",
        "Gestión de operadores en tiempo real",
        "Comunicación WebSocket bidireccional",
        "Panel administrativo con roles",
        "Integración con servicios de mapas y geolocalización"
      ],
      metrics: "13,580+ líneas de código • 6 tablas de BD • Sistema en tiempo real",
      impact: "Sistema completo para coordinación de emergencias con tecnología moderna"
    },
    {
      id: 2,
      title: "💍 Invitación Digital de Boda - Federico & Georgina",
      description: "Sitio web interactivo diseñado como invitación digital para una boda, desarrollado con HTML5, CSS3 y JavaScript vanilla. El proyecto presenta una experiencia inmersiva y elegante que combina funcionalidad moderna con un diseño romántico y sofisticado.",
      technologies: ["HTML5", "CSS3", "JavaScript ES6+", "Google Fonts", "CSS Grid", "Flexbox", "Media Queries"],
      githubUrl: "https://github.com/Fedecaff/Boda",
      liveUrl: "https://boda-fede-geor.netlify.app/",
      imageUrl: "/boda-screenshot.jpg", // Agrega screenshot de la invitación
      features: [
        "Diseño responsivo adaptable a todos los dispositivos",
        "Cuenta regresiva dinámica en tiempo real",
        "Carrusel de imágenes interactivo",
        "Reproductor de audio con controles personalizados",
        "Modal interactivo para información adicional",
        "Animaciones CSS y efectos visuales elegantes"
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
              <div className={`grid lg:grid-cols-2 gap-8 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}>
                {/* Imagen del proyecto */}
                <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="relative group">
                    <div className="aspect-video bg-gradient-to-br from-accent/20 to-primary/20 rounded-xl flex items-center justify-center overflow-hidden">
                      {/* Placeholder para la imagen del proyecto */}
                      <div className="text-center">
                        <svg className="w-16 h-16 text-accent/60 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        <p className="text-text-secondary text-sm">
                          Screenshot del proyecto
                          <br />
                          (agregar imagen)
                        </p>
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
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-accent text-white px-4 py-2 rounded-lg font-medium hover:bg-accent/90 transition-colors flex items-center"
                      >
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                        Ver Demo
                      </a>
                    </div>
                  </div>
                </div>

                {/* Contenido del proyecto */}
                <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <h3 className="text-2xl lg:text-3xl font-bold text-primary mb-4">
                    {project.title}
                  </h3>
                  
                  <p className="text-text-secondary text-lg mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Métricas del proyecto */}
                  {project.metrics && (
                    <div className="mb-6 p-4 bg-accent/5 rounded-lg border-l-4 border-accent">
                      <h4 className="font-semibold text-primary mb-2">📊 Métricas del Proyecto:</h4>
                      <p className="text-text-secondary text-sm">{project.metrics}</p>
                    </div>
                  )}

                  {/* Impacto */}
                  {project.impact && (
                    <div className="mb-6 p-4 bg-green-50 rounded-lg border-l-4 border-green-500">
                      <h4 className="font-semibold text-primary mb-2">🎯 Impacto Real:</h4>
                      <p className="text-text-secondary text-sm">{project.impact}</p>
                    </div>
                  )}

                  {/* Características principales */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-primary mb-3">Características principales:</h4>
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
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary inline-flex items-center"
                    >
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      Ver Demo
                    </a>
                  </div>
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
