import React from 'react'
import { motion } from 'framer-motion'

const About = () => {
  return (
    <section id="about" className="py-20 bg-bg-white">
      <div className="section-padding container-max">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-8 text-center">
            Sobre Mí
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="space-y-6 text-lg text-text-secondary leading-relaxed">
                <p>
                  Actualmente desarrollo aplicaciones web con JavaScript, creando interfaces interactivas y lógica de negocio para proyectos funcionales. Trabajo con frontend y backend en implementaciones Full Stack, integrando formularios, APIs REST y bases de datos relacionales.
                </p>
                
                <p>
                  En esta etapa estoy fortaleciendo mis conocimientos en arquitectura de aplicaciones web, buenas prácticas de código y desarrollo de sistemas más complejos orientados a casos reales.
                </p>
                
                <p>
                  Me encuentro en búsqueda de oportunidades laborales en empresas donde pueda aportar soluciones concretas, seguir creciendo profesionalmente y sumar valor en equipos de desarrollo.
                </p>
                
                <div className="p-4 bg-accent/10 rounded-lg border-l-4 border-accent">
                  <p className="font-medium text-primary mb-2">Disponibilidad Laboral</p>
                  <p>
                    Actualmente me encuentro en <strong>búsqueda de oportunidades laborales</strong> que me 
                    permitan aplicar y potenciar mis conocimientos, con plena disposición para asumir nuevos 
                    desafíos profesionales y priorizar mi desarrollo dentro del área de software.
                  </p>
                </div>
              </div>
              
              <motion.div 
                className="mt-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <a 
                  href="#contact" 
                  className="btn-primary inline-flex items-center"
                >
                  Contacto profesional
                </a>
              </motion.div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="flex justify-center"
            >
              <div className="relative">
                {/* Foto profesional de Federico */}
                <div className="w-80 h-80 rounded-2xl overflow-hidden shadow-lg">
                  <img 
                    src="/federico-foto.jpeg" 
                    alt="Federico Gabriel Gomez Caffettaro" 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      // Fallback si no encuentra la imagen
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  {/* Fallback si no se carga la imagen */}
                  <div className="w-full h-full bg-gradient-to-br from-accent/20 to-primary/20 rounded-2xl hidden items-center justify-center">
                    <p className="text-text-secondary text-sm text-center">Imagen no disponible</p>
                  </div>
                </div>
                
                {/* Elementos decorativos */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent/10 rounded-full"></div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-primary/10 rounded-full"></div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About

