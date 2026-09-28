import { caseCoverSlugs } from '../data/content'

export default function CaseCapture({ slug, title }) {
  if (!caseCoverSlugs.includes(slug)) return null

  return (
    <div className="overflow-hidden rounded-md border border-ink-600 bg-ink-800">
      <img
        src={`/projects/${slug}/cover.webp`}
        alt={`Captura de ${title}`}
        className="aspect-[16/10] h-full w-full object-cover"
      />
    </div>
  )
}
