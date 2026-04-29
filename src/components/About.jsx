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
                  Soy desarrollador web en formación, enfocado en JavaScript, React y Node.js.
                </p>
                
                <p>
                  Desarrollo aplicaciones con lógica de negocio, manejo de datos e integración entre frontend y backend, priorizando claridad en el código y organización de funcionalidades.
                </p>
                
                <p>
                  Busco mi primera experiencia profesional en empresa para aportar valor en equipo y seguir creciendo con proyectos reales.
                </p>
                
                <div className="p-4 bg-accent/10 rounded-lg border-l-4 border-accent">
                  <p className="font-medium text-primary mb-2">Disponibilidad Laboral</p>
                  <p>
                    Actualmente me desempeño en el cuerpo de bomberos de la <strong>Policía Federal Argentina (PFA)</strong> en el aeropuerto, desarrollando habilidades de trabajo bajo presión, responsabilidad y toma de decisiones. En paralelo, me encuentro en búsqueda de mi primera oportunidad en el área de desarrollo de software, con disponibilidad y compromiso para crecer profesionalmente en el sector.
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

