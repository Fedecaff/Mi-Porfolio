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
                  Soy un desarrollador web apasionado por crear soluciones digitales que combinan 
                  funcionalidad y diseño elegante. Me especializo en el desarrollo full stack 
                  con tecnologías modernas.
                </p>
                
                <p>
                  Mi enfoque se centra en escribir código limpio, mantenible y escalable, 
                  siempre buscando las mejores prácticas y manteniendo la atención al detalle 
                  en cada proyecto.
                </p>
                
                <p>
                  Estoy constantemente aprendiendo nuevas tecnologías y metodologías para 
                  mantenerme actualizado en este campo en constante evolución.
                </p>
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
                {/* Placeholder para foto - puedes agregar tu foto aquí */}
                <div className="w-80 h-80 bg-gradient-to-br from-accent/20 to-primary/20 rounded-2xl flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-32 h-32 bg-accent/30 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <svg className="w-16 h-16 text-accent" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                      </svg>
                    </div>
                    <p className="text-text-secondary text-sm">
                      Foto profesional
                      <br />
                      (próximamente)
                    </p>
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
