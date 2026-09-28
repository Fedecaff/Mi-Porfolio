import { useEffect, useState } from 'react'
import { nav, profile } from '../data/content'
import { IconDownload } from './Icons'

export default function Header() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!open) return undefined

    const onKey = (event) => {
      if (event.key === 'Escape') setOpen(false)
    }

    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const close = () => setOpen(false)

  return (
    <header className="sticky top-0 z-50 border-b border-ink-600/80 bg-ink/90 backdrop-blur-md">
      <div className="container-max section-padding flex h-16 items-center justify-between">
        <a href="#contenido" className="font-sans text-sm font-semibold tracking-tight text-cream">
          {profile.shortName}
        </a>

        <nav className="hidden items-center gap-5 xl:flex" aria-label="Principal">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-muted transition-colors hover:text-cream"
            >
              {item.label}
            </a>
          ))}
          <a href={profile.cvDesign} download className="btn-primary">
            <IconDownload />
            Descargar CV
          </a>
        </nav>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-ink-600 text-cream xl:hidden"
          aria-expanded={open}
          aria-controls="menu-movil"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">{open ? 'Cerrar menú' : 'Abrir menú'}</span>
          {open ? (
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          )}
        </button>
      </div>

      {open ? (
        <nav
          id="menu-movil"
          className="border-t border-ink-600 bg-ink px-5 py-4 xl:hidden"
          aria-label="Móvil"
        >
          <ul className="flex flex-col gap-1">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={close}
                  className="block rounded-md px-3 py-2 text-cream hover:bg-ink-700"
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <a href={profile.cvDesign} download className="btn-primary w-full" onClick={close}>
                <IconDownload />
                Descargar CV
              </a>
            </li>
          </ul>
        </nav>
      ) : null}
    </header>
  )
}
