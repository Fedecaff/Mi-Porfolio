import { motion, useReducedMotion } from 'framer-motion'
import { automation } from '../data/content'
import { fadeUp, viewportOnce } from '../lib/motion'
import SectionHeading from './SectionHeading'

export default function Automation() {
  const reduce = useReducedMotion()
  const variants = fadeUp(reduce)

  return (
    <section id="automatizacion" className="border-b border-ink-600 py-20 sm:py-24">
      <div className="container-max section-padding">
        <motion.div initial="hidden" whileInView="show" viewport={viewportOnce} variants={variants}>
          <SectionHeading kicker="IA aplicada" title={automation.title} description={automation.text} />
          <ul className="flex flex-wrap gap-2" aria-label="Herramientas de automatización">
            {automation.items.map((item) => (
              <li key={item} className="chip">
                {item}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  )
}
