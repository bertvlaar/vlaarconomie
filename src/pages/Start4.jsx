import React from 'react'
import { Link } from 'react-router-dom'
import PageShell from '../components/PageShell.jsx'
import Section from '../components/Section.jsx'

const lessen = [
  { to: '/thema-4/les-4-1', titel: 'Les 4.1', ondertitel: 'Van katoenveld tot kassa: wat kost een T-shirt nu eigenlijk?' },
  { to: '/thema-4/les-4-2', titel: 'Les 4.2', ondertitel: 'Fast fashion: sneller, goedkoper... en toch winstgevend' },
  { to: '/thema-4/les-4-3', titel: 'Les 4.3', ondertitel: 'Greenwashing ontmaskerd: marketing vs. werkelijkheid' },
  { to: '/thema-4/les-4-4', titel: 'Les 4.4', ondertitel: 'De kledingkast van de toekomst: circulaire economie in de mode' },
]

export default function Start4() {
  return (
    <PageShell>
      <section className="mb-12 text-center">
        <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-blue-700">
          Economie · Havo/Vwo onderbouw · Thema 4
        </p>
        <h1 className="mb-4 text-slate-900">
          Fast Fashion, Greenwashing &amp; De Kledingkast van de Toekomst
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-slate-600">
          Een T-shirt voor €4,99, een hoodie voor €12,99 — hoe kan kleding zó goedkoop zijn? En waarom
          noemen steeds meer merken zichzelf "duurzaam", terwijl er intussen wereldwijd een enorme berg
          kledingafval ontstaat? In dit thema ontdek je hoe de kostprijs van kleding is opgebouwd, hoe het
          verdienmodel van fast fashion werkt, hoe je greenwashing herkent, en hoe de kledingkast van de
          toekomst er circulair uit kan zien.
        </p>
      </section>

      <Section title="🎬 Introductievideo (± 4 min.)">
        <div className="aspect-video w-full overflow-hidden rounded-lg border border-border">
          <iframe
            className="h-full w-full"
            src="https://www.youtube.com/embed/ImYc7qzJCdY"
            title="Fast fashion: wat is dat? En waarom is dat niet zo goed?"
            allowFullScreen
          />
        </div>
        <p className="mt-3 text-sm text-slate-500">
          Docent: vervang deze video indien gewenst door een recentere of eigen uitleg over fast fashion.
        </p>

        <h3 className="mb-3 mt-6 text-slate-900">Kijkvragen</h3>
        <ol className="list-decimal space-y-2 pl-5 text-slate-700">
          <li>Wat is fast fashion volgens de video, en waar komt veel van deze kleding uiteindelijk terecht?</li>
          <li>Welk probleem voor mens en milieu wordt in de video genoemd?</li>
          <li>Wat zou jij zelf kunnen veranderen aan je eigen kledingkeuzes na het zien van deze video?</li>
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
          to="/thema-4/begrippenlijst"
          className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-blue-700 hover:text-blue-800"
        >
          📚 Bekijk de begrippenlijst van dit thema
        </Link>
      </Section>
    </PageShell>
  )
}
