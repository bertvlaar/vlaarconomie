import { Link, Outlet, useParams } from 'react-router-dom'
import themas from '../data/themas.js'

export default function ThemaLayout() {
  const { themaSlug } = useParams()
  const thema = themas.find((t) => t.slug === themaSlug)

  return (
    <div className="min-h-screen bg-pagebg">
      <header className="bg-header text-white">
        <div className="max-w-content mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="font-display text-lg font-semibold">
            Vlaconomie — Leerjaar 3
          </Link>
          <nav className="text-sm text-slate-200">
            {thema ? thema.titel : 'Thema niet gevonden'}
          </nav>
        </div>
      </header>

      <main className="max-w-content mx-auto px-4 py-8">
        <Outlet context={{ thema }} />
      </main>
    </div>
  )
}
