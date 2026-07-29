import { Link } from 'react-router-dom'
import themas from '../data/themas.js'

export default function Home() {
  return (
    <div className="min-h-screen bg-pagebg">
      <header className="bg-header text-white">
        <div className="max-w-content mx-auto px-4 py-8">
          <h1 className="font-display text-3xl font-bold">Vlaconomie — Leerjaar 3</h1>
          <p className="text-slate-200 mt-2">
            Economie leren aan de hand van 10 thema's, praktijkopdrachten en Rekenen 2F & 3F.
          </p>
        </div>
      </header>

      <main className="max-w-content mx-auto px-4 py-10 space-y-12">
        <section>
          <h2 className="font-display text-2xl font-semibold text-header mb-4">
            Thema's
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {themas.map((thema) => (
              <Link
                key={thema.id}
                to={`/${thema.slug}`}
                className="block rounded-xl border border-border bg-white p-5 hover:border-flash hover:shadow-md transition"
              >
                <span className="text-sm font-mono text-flashdark">
                  Thema {thema.id}
                </span>
                <h3 className="font-display text-lg font-semibold text-header mt-1">
                  {thema.titel}
                </h3>
                <p className="text-sm text-slate-500 mt-1">{thema.subtitel}</p>
              </Link>
            ))}
          </div>
        </section>

        <section className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="rounded-xl border border-border bg-white p-6">
            <h2 className="font-display text-2xl font-semibold text-header mb-2">
              Rekenen 2F
            </h2>
            <p className="text-slate-600 mb-4">
              Oefen losstaand van de thema's met basale rekenvaardigheden op 2F-niveau.
            </p>
            <Link
              to="/rekenen-2f"
              className="inline-block rounded-lg bg-action text-white px-4 py-2 font-medium hover:opacity-90 transition"
            >
              Start Rekenen 2F
            </Link>
          </div>

          <div className="rounded-xl border border-border bg-white p-6">
            <h2 className="font-display text-2xl font-semibold text-header mb-2">
              Rekenen 3F
            </h2>
            <p className="text-slate-600 mb-4">
              Oefen losstaand van de thema's met rekenvaardigheden op 3F-niveau.
            </p>
            <Link
              to="/rekenen-3f"
              className="inline-block rounded-lg bg-action text-white px-4 py-2 font-medium hover:opacity-90 transition"
            >
              Start Rekenen 3F
            </Link>
          </div>
        </section>
      </main>
    </div>
  )
}
