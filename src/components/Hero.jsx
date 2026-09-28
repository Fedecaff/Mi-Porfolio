import { motion, useReducedMotion } from 'framer-motion'
import { heroAside, profile } from '../data/content'
import { fadeUp } from '../lib/motion'
import { IconDownload, IconGitHub, IconLinkedIn } from './Icons'

export default function Hero() {
  const reduce = useReducedMotion()
  const variants = fadeUp(reduce)

  return (
    <section className="relative overflow-hidden border-b border-ink-600">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-peach/70 to-transparent"
        aria-hidden="true"
      />
      <div className="container-max section-padding flex flex-col justify-center py-16 sm:py-20 lg:min-h-[calc(100vh-4rem)]">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <motion.div initial="hidden" animate="show" variants={variants} className="lg:col-span-7">
            <div className="mb-8 flex items-center gap-4">
              <img
                src={profile.photo}
                alt={profile.name}
                width={80}
                height={80}
                className="h-16 w-16 rounded-full border border-peach/40 object-cover sm:h-20 sm:w-20"
              />
              <p className="text-sm text-muted">{profile.location}</p>
            </div>

            <h1 className="font-sans text-4xl font-semibold tracking-tight text-cream sm:text-5xl lg:text-[3.25rem] lg:leading-tight">
              {profile.name}
            </h1>

            <p className="mt-4 font-sans text-lg font-medium text-peach sm:text-xl">
              {profile.title}
            </p>

            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
              {profile.heroLead}
            </p>

            <p className="mt-4 text-base text-cream/90">{profile.seeking}</p>

            <div className="mt-10 flex flex-wrap gap-3">
              <a href={profile.cvDesign} download className="btn-primary">
                <IconDownload />
                Descargar CV
              </a>
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
              <a href="#contacto" className="btn-secondary">
                Contacto
              </a>
            </div>

            <p className="mt-6 text-sm text-muted">
              Versión simple del CV:{' '}
              <a
                href={profile.cvSimple}
                download
                className="text-peach underline-offset-4 hover:underline"
              >
                descargar PDF
              </a>
            </p>
          </motion.div>

          <motion.aside
            initial="hidden"
            animate="show"
            variants={variants}
            className="lg:col-span-5"
          >
            <div className="rounded-md border border-ink-600 bg-ink-800 p-6 sm:p-8">
              <p className="font-sans text-xs font-medium uppercase tracking-[0.18em] text-peach">
                {heroAside.kicker}
              </p>
              <p className="mt-3 font-sans text-xl font-semibold text-cream">{heroAside.title}</p>
              <ul className="mt-6 space-y-3">
                {heroAside.items.map((item) => (
                  <li key={item} className="flex gap-3 text-base text-muted">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-peach" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  )
}
