import { motion, useReducedMotion } from 'framer-motion'
import { iaPractice, processSteps } from '../data/content'
import { fadeUp, viewportOnce } from '../lib/motion'
import SectionHeading from './SectionHeading'

export default function Process() {
  const reduce = useReducedMotion()
  const variants = fadeUp(reduce)

  return (
    <section id="como-trabajo" className="border-b border-ink-600 py-20 sm:py-24">
      <div className="container-max section-padding">
        <SectionHeading
          kicker="Método"
          title="Cómo trabajo"
          description="El ciclo completo, desde el negocio hacia el código: relevamiento, rediseño, desarrollo, producción y mejora continua."
        />

        <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {processSteps.map((step, index) => (
            <motion.li
              key={step.title}
              initial="hidden"
              whileInView="show"
              viewport={viewportOnce}
              variants={variants}
              className="border-t border-peach/40 pt-4"
            >
              <p className="font-sans text-xs font-medium text-peach">
                {String(index + 1).padStart(2, '0')}
              </p>
              <h3 className="mt-2 font-sans text-lg font-semibold text-cream">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{step.text}</p>
            </motion.li>
          ))}
        </ol>

        <motion.aside
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={variants}
          className="mt-12 rounded-md border border-ink-600 bg-ink-800 p-6 sm:p-8"
        >
          <h3 className="font-sans text-lg font-semibold text-cream">{iaPractice.title}</h3>
          <p className="mt-3 max-w-3xl leading-relaxed text-muted">{iaPractice.text}</p>
        </motion.aside>
      </div>
    </section>
  )
}
