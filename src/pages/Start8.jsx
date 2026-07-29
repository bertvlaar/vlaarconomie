import React from 'react'
import { Link } from 'react-router-dom'
import PageShell from '../components/PageShell.jsx'
import Section from '../components/Section.jsx'

const lessen = [
  { to: '/thema-8/les-8-1', titel: 'Les 8.1', ondertitel: 'C2C-markten: van winkel naar peer-to-peer handel' },
  { to: '/thema-8/les-8-2', titel: 'Les 8.2', ondertitel: 'Van fast fashion naar circulaire economie' },
  { to: '/thema-8/les-8-3', titel: 'Les 8.3', ondertitel: 'Waardebepaling: wat is jouw oude spullen nog waard?' },
  { to: '/thema-8/les-8-4', titel: 'Les 8.4', ondertitel: 'Veilig handelen: onderhandelen, verzendkosten en kleine winstmarges' },
]

export default function Start8() {
  return (
    <PageShell>
      <section className="mb-12 text-center">
        <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-blue-700">
          Economie · Havo/Vwo onderbouw · Thema 8
        </p>
        <h1 className="mb-4 text-slate-900">Tweedehands is het nieuwe nieuw: Vinted &amp; Marktplaats</h1>
        <p className="mx-auto max-w-2xl text-lg text-slate-600">
          Waarom verkopen tieners massaal hun oude kleren via Vinted in plaats van ze weg te gooien? En
          hoe kan iemand met een tweede leven voor spullen zelfs geld verdienen? Dit thema laat zien hoe
          consument-tot-consumentmarkten werken, wat tweedehands spullen nog waard zijn, en wat handel
          via Vinted en Marktplaats betekent voor je portemonnee én voor het milieu.
        </p>
      </section>

      <Section title="🎬 Introductievideo (± 4 min.)">
        <div className="aspect-video w-full overflow-hidden rounded-lg border border-border">
          <iframe
            className="h-full w-full"
            src="https://www.youtube.com/embed/kqvxgGSMs2M"
            title="Kleding kopen op Vinted? Zo doe ik dat"
            allowFullScreen
          />
        </div>
        <p className="mt-3 text-sm text-slate-500">
          Docent: vervang deze video indien gewenst door een recentere of specifiek Nederlandstalige
          uitleg over tweedehandshandel, fast fashion of de circulaire economie.
        </p>

        <h3 className="mb-3 mt-6 text-slate-900">Kijkvragen</h3>
        <ol className="list-decimal space-y-2 pl-5 text-slate-700">
          <li>Welke redenen worden in de video genoemd om tweedehands te kopen of te verkopen?</li>
          <li>Welke platforms of voorbeelden komen voorbij?</li>
          <li>Wat merkt een gewone consument hiervan in de praktijk, financieel en qua duurzaamheid?</li>
        </ol>
      </Section>

      <Section title="Vier lessen, één thema">
        <div className="grid gap-4 sm:grid-cols-2">
          {lessen.map((les) => (
            <Link
              key={les.to}
              to={les.to}
              className="rounded-lg border border-border bg-pagebg p-5 transition-colors hover:border-blue-300 hover:bg-blue-50/40"
            >
              <p className="text-sm font-semibold text-blue-700">{les.titel}</p>
              <p className="mt-1 font-medium text-slate-800">{les.ondertitel}</p>
            </Link>
          ))}
        </div>
        <Link
          to="/thema-8/begrippenlijst"
          className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-blue-700 hover:text-blue-800"
        >
          📚 Bekijk de begrippenlijst van dit thema
        </Link>
      </Section>
    </PageShell>
  )
}
