import { motion, useReducedMotion } from 'framer-motion'
import { caseCoverSlugs, cases } from '../data/content'
import { fadeUp, viewportOnce } from '../lib/motion'
import CaseCapture from './CaseCapture'
import SectionHeading from './SectionHeading'

export default function Cases() {
  const reduce = useReducedMotion()
  const variants = fadeUp(reduce)

  return (
    <section id="casos" className="border-b border-ink-600 py-20 sm:py-24">
      <div className="container-max section-padding">
        <SectionHeading
          kicker="Trabajo"
          title="Casos reales"
          description="Sistemas de gestión en producción para comercios. Cada caso: el problema del cliente, lo que hice, el stack y el impacto. Por confidencialidad de cada cliente, no incluyo enlaces a los sistemas en producción."
        />

        <ol className="space-y-16">
          {cases.map((item, index) => {
            const hasCover = caseCoverSlugs.includes(item.slug)

            return (
              <motion.li
                key={item.slug}
                initial="hidden"
                whileInView="show"
                viewport={viewportOnce}
                variants={variants}
                className={hasCover ? 'grid gap-8 lg:grid-cols-12 lg:gap-10' : ''}
              >
                {hasCover ? (
                  <div className="lg:col-span-5">
                    <CaseCapture slug={item.slug} title={item.title} />
                  </div>
                ) : null}

                <article className={hasCover ? 'lg:col-span-7' : 'max-w-3xl'}>
                  <p className="font-sans text-xs font-medium uppercase tracking-[0.18em] text-peach">
                    {String(index + 1).padStart(2, '0')}
                  </p>
                  <h3 className="mt-2 font-sans text-2xl font-semibold text-cream">{item.title}</h3>
                  <p className="mt-1 text-sm text-muted">{item.subtitle}</p>

                  <dl className="mt-6 space-y-4 text-base leading-relaxed">
                    <div>
                      <dt className="font-sans text-sm font-semibold text-cream">Problema</dt>
                      <dd className="mt-1 text-muted">{item.problem}</dd>
                    </div>
                    <div>
                      <dt className="font-sans text-sm font-semibold text-cream">Qué hice</dt>
                      <dd className="mt-1 text-muted">{item.did}</dd>
                    </div>
                    <div>
                      <dt className="font-sans text-sm font-semibold text-cream">Impacto</dt>
                      <dd className="mt-1 text-muted">{item.impact}</dd>
                    </div>
                  </dl>

                  <ul className="mt-5 flex flex-wrap gap-2" aria-label={`Stack de ${item.title}`}>
                    {item.stack.map((tech) => (
                      <li key={tech} className="chip">
                        {tech}
                      </li>
                    ))}
                  </ul>
                </article>
              </motion.li>
            )
          })}
        </ol>
      </div>
    </section>
  )
}
