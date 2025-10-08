import React from 'react'
import { motion } from 'framer-motion'

const Contact = () => {

  return (
    <section id="contact" className="py-20 bg-primary text-white">
      <div className="section-padding container-max">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Trabajemos Juntos
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            ¿Tienes un proyecto en mente? Me encantaría conocer más sobre tu idea y cómo puedo ayudarte a hacerla realidad.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Información de contacto */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6">Información de Contacto</h3>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mr-4 text-white font-semibold">@</div>
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-gray-300">federico.gomez.sc@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mr-4 text-white font-semibold">📍</div>
                <div>
                  <p className="font-medium">Ubicación</p>
                  <p className="text-gray-300">Avenida Recalde 2868, San Fernando del Valle de Catamarca, Catamarca, Argentina</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mr-4 text-white font-semibold">✓</div>
                <div>
                  <p className="font-medium">Disponibilidad</p>
                  <p className="text-gray-300">Disponible para proyectos</p>
                </div>
              </div>
            </div>

          </motion.div>

          {/* Mensaje simple de contacto */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="bg-secondary/50 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4">¿Interesado en trabajar juntos?</h3>
              <p className="text-gray-300 mb-4">
                Contáctame directamente:
              </p>
              <a 
                href="mailto:federico.gomez.sc@gmail.com"
                className="text-accent text-xl font-semibold hover:underline inline-block"
              >
                📧 federico.gomez.sc@gmail.com
              </a>
            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16 pt-8 border-t border-gray-600"
        >
          <p className="text-gray-300">
            © 2025 FGC - Federico Gabriel Gomez Caffettaro. Todos los derechos reservados.
          </p>
          <p className="text-gray-400 text-sm mt-2">
            Desarrollado con React + Vite + Tailwind CSS
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
