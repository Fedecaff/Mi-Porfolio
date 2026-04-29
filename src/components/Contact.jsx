import React, { useState } from 'react'
import { motion } from 'framer-motion'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [errors, setErrors] = useState({})
  const [submitStatus, setSubmitStatus] = useState('idle')

  const validateForm = () => {
    const newErrors = {}

    if (!formData.name.trim()) newErrors.name = 'El nombre es obligatorio.'
    if (!formData.email.trim()) {
      newErrors.email = 'El email es obligatorio.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Ingresa un email válido.'
    }
    if (!formData.message.trim()) newErrors.message = 'El mensaje es obligatorio.'

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }))
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubmitStatus('idle')

    if (!validateForm()) return

    setSubmitStatus('sending')

    const form = e.currentTarget
    const formData = new FormData(form)

    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData).toString()
      })

      if (!response.ok) throw new Error('Error en envío')

      setSubmitStatus('success')
      setFormData({ name: '', email: '', message: '' })
      setErrors({})
    } catch (error) {
      setSubmitStatus('error')
    }
  }

  return (
    <section id="contact" className="py-20 bg-primary text-white">
      <div className="section-padding container-max">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <p className="text-lg text-gray-200 mb-4">
            ¿Te interesa trabajar conmigo o conocer más sobre mis proyectos?
          </p>
          <a
            href="#contact-form"
            className="inline-flex items-center px-6 py-3 rounded-lg font-medium bg-accent text-white hover:bg-accent/90 transition-colors"
          >
            Contactarme
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Contacto Profesional
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Estoy disponible para procesos de selección en empresas que busquen un perfil Full Stack en crecimiento, con foco en JavaScript y desarrollo de aplicaciones web.
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
            
            <div className="grid gap-4 mb-8">
              <div className="bg-secondary/40 rounded-xl p-4 min-h-[110px] flex items-start gap-4">
                <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12H8m8 0l-3 3m3-3l-3-3M4 6h16M4 18h16" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-gray-300 break-all">federico.gomez.sc@gmail.com</p>
                </div>
              </div>

              <div className="bg-secondary/40 rounded-xl p-4 min-h-[110px] flex items-start gap-4">
                <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium">Ubicación</p>
                  <p className="text-gray-300">San Fernando del Valle de Catamarca, Catamarca, Argentina</p>
                </div>
              </div>

              <div className="bg-secondary/40 rounded-xl p-4 min-h-[110px] flex items-start gap-4">
                <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium">Disponibilidad</p>
                  <p className="text-gray-300">Disponible para incorporación laboral</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Formulario de contacto */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="bg-secondary/50 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4">Envíame un mensaje</h3>
              <p className="text-gray-300 mb-6">
                Completa el formulario y te responderé a la brevedad.
              </p>

              <form
                id="contact-form"
                name="contacto-profesional"
                method="POST"
                action="/"
                data-netlify="true"
                onSubmit={handleSubmit}
                className="space-y-4 text-left"
              >
                <input type="hidden" name="form-name" value="contacto-profesional" />

                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1">Nombre</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full rounded-lg px-4 py-3 bg-white text-primary border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent"
                    placeholder="Tu nombre"
                  />
                  {errors.name && <p className="text-red-300 text-sm mt-1">{errors.name}</p>}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full rounded-lg px-4 py-3 bg-white text-primary border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent"
                    placeholder="tu@email.com"
                  />
                  {errors.email && <p className="text-red-300 text-sm mt-1">{errors.email}</p>}
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-1">Mensaje</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full rounded-lg px-4 py-3 bg-white text-primary border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent"
                    placeholder="Cuéntame sobre la oportunidad o proyecto."
                  />
                  {errors.message && <p className="text-red-300 text-sm mt-1">{errors.message}</p>}
                </div>

                <button
                  type="submit"
                  disabled={submitStatus === 'sending'}
                  className="w-full bg-accent text-white py-3 px-4 rounded-lg font-medium hover:bg-accent/90 transition-colors disabled:opacity-70"
                >
                  {submitStatus === 'sending' ? 'Enviando...' : 'Enviar mensaje'}
                </button>
              </form>

              {submitStatus === 'success' && (
                <p className="text-green-300 text-sm mt-4">
                  Enviado correctamente.
                </p>
              )}
              {submitStatus === 'error' && (
                <p className="text-red-300 text-sm mt-4">
                  No se pudo enviar. Intenta nuevamente.
                </p>
              )}

              <p className="text-gray-300 text-sm mt-6 text-center">
                O podés escribirme directamente a:{' '}
                <a
                  href="mailto:federico.gomez.sc@gmail.com"
                  className="text-accent hover:underline font-medium"
                >
                  federico.gomez.sc@gmail.com
                </a>
              </p>
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
            © 2026 FGC - Federico Gabriel Gomez Caffettaro
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
