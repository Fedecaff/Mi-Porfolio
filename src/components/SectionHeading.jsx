export default function SectionHeading({ kicker, title, description }) {
  return (
    <header className="mb-12 max-w-2xl">
      {kicker ? (
        <p className="mb-3 font-sans text-xs font-medium uppercase tracking-[0.18em] text-peach">
          {kicker}
        </p>
      ) : null}
      <h2 className="font-sans text-3xl font-semibold tracking-tight text-cream sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">{description}</p>
      ) : null}
    </header>
  )
}
