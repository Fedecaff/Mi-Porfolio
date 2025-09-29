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
                  <strong className="text-primary">Estudiante avanzado de la Tecnicatura en Desarrollo de Software</strong>, 
                  con una sólida formación en Java y JavaScript. Me destaco por mi compromiso, responsabilidad 
                  y capacidad para trabajar en equipo y bajo presión.
                </p>
                
                <p>
                  Si bien aún me encuentro en proceso de formación, cuento con una fuerte motivación por 
                  seguir aprendiendo mediante capacitaciones constantes, excelente presentismo y una actitud proactiva.
                </p>
                
                <p>
                  Mi perfil técnico se complementa con valores esenciales adquiridos como 
                  <strong className="text-primary"> miembro del cuerpo de Bomberos de la Policía Federal Argentina</strong>, 
                  entre ellos la colaboración, la adaptabilidad y un marcado enfoque en la resolución de problemas.
                </p>
                
                <div className="p-4 bg-accent/10 rounded-lg border-l-4 border-accent">
                  <p className="font-medium text-primary mb-2">🚀 Disponibilidad Laboral</p>
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
                  Trabajemos Juntos
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
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

