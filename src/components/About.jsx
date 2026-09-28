import { motion, useReducedMotion } from 'framer-motion'
import { about } from '../data/content'
import { fadeUp, viewportOnce } from '../lib/motion'
import { IconShield } from './Icons'
import SectionHeading from './SectionHeading'

export default function About() {
  const reduce = useReducedMotion()
  const variants = fadeUp(reduce)

  return (
    <section id="sobre-mi" className="border-b border-ink-600 py-20 sm:py-24">
      <div className="container-max section-padding">
        <SectionHeading kicker="Perfil" title="Sobre mí" />

        <div className="grid gap-10 lg:grid-cols-12">
          <motion.div
            className="lg:col-span-7"
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            variants={variants}
          >
            <div className="space-y-4 text-base leading-relaxed text-muted sm:text-lg">
              {about.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 24)}>{paragraph}</p>
              ))}
            </div>
          </motion.div>

          <motion.aside
            className="lg:col-span-5"
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            variants={variants}
          >
            <div className="rounded-md border border-ink-600 bg-ink-800 p-6">
              <div className="mb-4 flex items-center gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-peach/30 text-peach">
                  <IconShield className="h-5 w-5" />
                </span>
                <p className="font-sans text-sm font-semibold text-cream">
                  {about.firefighter.title}
                </p>
              </div>
              <p className="text-xs uppercase tracking-[0.12em] text-peach">
                {about.firefighter.period}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted">{about.firefighter.text}</p>
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  )
}
