import { useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { profile } from '../data/content'
import { fadeUp, viewportOnce } from '../lib/motion'
import { IconGitHub, IconLinkedIn, IconMail } from './Icons'
import SectionHeading from './SectionHeading'

const initial = { name: '', email: '', message: '' }

export default function Contact() {
  const reduce = useReducedMotion()
  const variants = fadeUp(reduce)
  const [formData, setFormData] = useState(initial)
  const [errors, setErrors] = useState({})
  const [submitStatus, setSubmitStatus] = useState('idle')

  const validateForm = () => {
    const next = {}
    if (!formData.name.trim()) next.name = 'El nombre es obligatorio.'
    if (!formData.email.trim()) {
      next.email = 'El email es obligatorio.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      next.email = 'Ingresá un email válido.'
    }
    if (!formData.message.trim()) next.message = 'El mensaje es obligatorio.'
    setErrors(next)
    return Object.keys(next).length === 0
  }

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    setSubmitStatus('idle')
    if (!validateForm()) return

    setSubmitStatus('sending')
    const payload = new FormData(event.currentTarget)

    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(payload).toString(),
      })
      if (!response.ok) throw new Error('send-failed')
      setSubmitStatus('success')
      setFormData(initial)
      setErrors({})
    } catch {
      setSubmitStatus('error')
    }
  }

  const fieldClass =
    'w-full rounded-md border border-ink-600 bg-ink px-4 py-3 text-cream placeholder:text-muted/70 focus:border-peach'

  return (
    <section id="contacto" className="py-20 sm:py-24">
      <div className="container-max section-padding">
        <SectionHeading
          kicker="Contacto"
          title="Hablemos"
          description="Si estás evaluando un perfil Full Stack para tu equipo, escribime. Respondo a este correo y al formulario."
        />

        <div className="grid gap-12 lg:grid-cols-12">
          <motion.div
            className="lg:col-span-5"
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            variants={variants}
          >
            <ul className="space-y-5 text-sm">
              <li>
                <p className="font-sans font-semibold text-cream">Email</p>
                <a
                  href={`mailto:${profile.email}`}
                  className="mt-1 inline-flex items-center gap-2 text-peach hover:underline"
                >
                  <IconMail />
                  {profile.email}
                </a>
              </li>
              <li>
                <p className="font-sans font-semibold text-cream">Ubicación</p>
                <p className="mt-1 text-muted">{profile.location}</p>
              </li>
              <li>
                <p className="font-sans font-semibold text-cream">Teléfono</p>
                <a href={profile.phoneHref} className="mt-1 text-muted hover:text-peach">
                  {profile.phone}
                </a>
              </li>
              <li className="flex gap-3 pt-2">
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                >
                  <IconGitHub />
                  GitHub
                </a>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                >
                  <IconLinkedIn />
                  LinkedIn
                </a>
              </li>
            </ul>
          </motion.div>

          <motion.div
            className="lg:col-span-7"
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            variants={variants}
          >
            <form
              id="contact-form"
              name="contacto-profesional"
              method="POST"
              action="/"
              data-netlify="true"
              netlify-honeypot="bot-field"
              onSubmit={handleSubmit}
              className="space-y-4 rounded-md border border-ink-600 bg-ink-800 p-6 sm:p-8"
              noValidate
            >
              <input type="hidden" name="form-name" value="contacto-profesional" />
              <p className="hidden">
                <label>
                  No completar este campo
                  <input name="bot-field" tabIndex={-1} autoComplete="off" />
                </label>
              </p>

              <div>
                <label htmlFor="name" className="mb-1 block text-sm font-medium text-cream">
                  Nombre
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={fieldClass}
                  placeholder="Tu nombre"
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={errors.name ? 'error-name' : undefined}
                />
                {errors.name ? (
                  <p id="error-name" className="mt-1 text-sm text-peach-hot">
                    {errors.name}
                  </p>
                ) : null}
              </div>

              <div>
                <label htmlFor="email" className="mb-1 block text-sm font-medium text-cream">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={fieldClass}
                  placeholder="tu@email.com"
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={errors.email ? 'error-email' : undefined}
                />
                {errors.email ? (
                  <p id="error-email" className="mt-1 text-sm text-peach-hot">
                    {errors.email}
                  </p>
                ) : null}
              </div>

              <div>
                <label htmlFor="message" className="mb-1 block text-sm font-medium text-cream">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  className={fieldClass}
                  placeholder="Contame sobre la búsqueda o el equipo."
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={errors.message ? 'error-message' : undefined}
                />
                {errors.message ? (
                  <p id="error-message" className="mt-1 text-sm text-peach-hot">
                    {errors.message}
                  </p>
                ) : null}
              </div>

              <button type="submit" disabled={submitStatus === 'sending'} className="btn-primary w-full">
                {submitStatus === 'sending' ? 'Enviando…' : 'Enviar mensaje'}
              </button>

              <div role="status" aria-live="polite">
                {submitStatus === 'success' ? (
                  <p className="text-sm text-peach">Enviado. Te respondo a la brevedad.</p>
                ) : null}
                {submitStatus === 'error' ? (
                  <p className="text-sm text-peach-hot">
                    No se pudo enviar desde acá. Escribime a {profile.email}.
                  </p>
                ) : null}
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
