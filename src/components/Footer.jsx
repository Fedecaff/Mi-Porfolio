import { profile } from '../data/content'

export default function Footer() {
  return (
    <footer className="border-t border-ink-600 py-8">
      <div className="container-max section-padding flex flex-col gap-2 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {new Date().getFullYear()} {profile.name}
        </p>
        <p>Catamarca, Argentina</p>
      </div>
    </footer>
  )
}
