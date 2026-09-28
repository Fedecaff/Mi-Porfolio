import { motion, useReducedMotion } from 'framer-motion'
import { stackAreas } from '../data/content'
import { fadeUp, viewportOnce } from '../lib/motion'
import SectionHeading from './SectionHeading'

export default function Stack() {
  const reduce = useReducedMotion()
  const variants = fadeUp(reduce)

  return (
    <section id="stack" className="border-b border-ink-600 py-20 sm:py-24">
      <div className="container-max section-padding">
        <SectionHeading
          kicker="Tecnología"
          title="Stack por áreas"
          description="Lo que uso en producción, organizado por áreas."
        />

        <div className="space-y-8">
          {stackAreas.map((area) => (
            <motion.div
              key={area.title}
              initial="hidden"
              whileInView="show"
              viewport={viewportOnce}
              variants={variants}
            >
              <h3 className="font-sans text-sm font-semibold uppercase tracking-[0.14em] text-peach">
                {area.title}
              </h3>
              <ul className="mt-3 flex flex-wrap gap-2">
                {area.items.map((item) => (
                  <li key={item} className="chip">
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
