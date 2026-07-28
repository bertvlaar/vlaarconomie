import React from 'react'
import { Link } from 'react-router-dom'
import PageShell from '../components/PageShell.jsx'
import Section from '../components/Section.jsx'

const lessen = [
  { to: '/thema-5/les-5-1', titel: 'Les 5.1', ondertitel: 'De aandachtseconomie: jouw tijd is het echte product' },
  { to: '/thema-5/les-5-2', titel: 'Les 5.2', ondertitel: 'Indirecte verdienmodellen: reclame versus abonnementen' },
  { to: '/thema-5/les-5-3', titel: 'Les 5.3', ondertitel: 'Algoritmes & doelgroepmarketing: hoe platforms jou "kennen"' },
  { to: '/thema-5/les-5-4', titel: 'Les 5.4', ondertitel: 'Sponsoring, kostenoverdracht & reclame herkennen' },
]

export default function Start5() {
  return (
    <PageShell>
      <section className="mb-12 text-center">
        <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-blue-700">
          Economie · Havo/Vwo onderbouw · Thema 5
        </p>
        <h1 className="mb-4 text-slate-900">Influencers, Sponsoring &amp; De Aandachtseconomie</h1>
        <p className="mx-auto max-w-2xl text-lg text-slate-600">
          Een YouTuber die "gewoon wat games speelt" verdient soms meer dan een chirurg. Dat klinkt
          gek, tot je beseft dat hij niet in games handelt, maar in iets veel schaarsers: jouw
          aandacht. Dit thema laat zien hoe de aandachtseconomie werkt, hoe influencers indirect
          worden betaald door adverteerders in plaats van door jou, en hoe algoritmes precies
          berekenen welke video, advertentie en influencer het best bij jou passen.
        </p>
      </section>

      <Section title="🎬 Introductievideo (± 4 min.)">
        <div className="aspect-video w-full overflow-hidden rounded-lg border border-border">
          <iframe
            className="h-full w-full"
            src="https://www.youtube.com/embed/PXVOe1KrCFI"
            title="Hoe verdienen influencers geld? De aandachtseconomie uitgelegd"
            allowFullScreen
          />
        </div>
        <p className="mt-3 text-sm text-slate-500">
          Docent: vervang deze video indien gewenst door een recentere of specifiek Nederlandstalige
          uitleg over influencer-marketing, de aandachtseconomie of algoritmes op sociale media.
        </p>

        <h3 className="mb-3 mt-6 text-slate-900">Kijkvragen</h3>
        <ol className="list-decimal space-y-2 pl-5 text-slate-700">
          <li>Welke voorbeelden van influencers of verdienmodellen worden in de video genoemd?</li>
          <li>Wie betaalt er volgens de video eigenlijk voor "gratis" content?</li>
          <li>Welke rol speelt jouw eigen kijkgedrag in wat je vervolgens te zien krijgt?</li>
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
          to="/thema-5/begrippenlijst"
          className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-blue-700 hover:text-blue-800"
        >
          📚 Bekijk de begrippenlijst van dit thema
        </Link>
      </Section>
    </PageShell>
  )
}
