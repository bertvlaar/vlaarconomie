import React from 'react'
import { Link } from 'react-router-dom'
import PageShell from '../components/PageShell.jsx'
import Section from '../components/Section.jsx'

const lessen = [
  { to: '/thema-7/les-7-1', titel: 'Les 7.1', ondertitel: 'Vraag en aanbod op de kaartjesmarkt: marktwerking en evenwichtsprijs' },
  { to: '/thema-7/les-7-2', titel: 'Les 7.2', ondertitel: 'Prijselasticiteit van de vraag: hoe gevoelig zijn bezoekers voor prijs?' },
  { to: '/thema-7/les-7-3', titel: 'Les 7.3', ondertitel: 'Dynamic pricing in de praktijk: pretparken, vliegtickets, hotels en Uber' },
  { to: '/thema-7/les-7-4', titel: 'Les 7.4', ondertitel: 'Psychologische prijzen en kostprijsberekening: marges en kosten' },
]

export default function Start7() {
  return (
    <PageShell>
      <section className="mb-12 text-center">
        <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-blue-700">
          Economie · Havo/Vwo onderbouw · Thema 7
        </p>
        <h1 className="mb-4 text-slate-900">Pretparken &amp; Dynamic Pricing: Waarom kost een kaartje soms meer?</h1>
        <p className="mx-auto max-w-2xl text-lg text-slate-600">
          Een dagje Efteling kost in de zomervakantie op een zonnige zaterdag zomaar het dubbele van een
          regenachtige dinsdag in november. Toeval is dat niet: pretparken gebruiken dynamic pricing om vraag
          en aanbod slim op elkaar af te stemmen. In dit thema ontdek je hoe de prijs van een kaartje tot
          stand komt, hoe gevoelig bezoekers zijn voor prijsveranderingen, hoe bedrijven als pretparken,
          vliegtuigmaatschappijen, hotels en Uber hun prijzen laten meebewegen met de vraag, en hoe
          psychologische prijzen en kostenberekeningen daarbij een rol spelen.
        </p>
      </section>

      <Section title="🎬 Introductievideo (± 4 min.)">
        <div className="aspect-video w-full overflow-hidden rounded-lg border border-border">
          <iframe
            className="h-full w-full"
            src="https://www.youtube.com/embed/4gk_DKW2b7A"
            title="Waarom is een pretpark- of vliegticket soms duurder? Uitleg dynamic pricing"
            allowFullScreen
          />
        </div>
        <p className="mt-3 text-sm text-slate-500">
          Docent: vervang deze video indien gewenst door een recentere of specifiek Nederlandstalige uitleg
          over dynamic pricing en prijsvorming.
        </p>

        <h3 className="mb-3 mt-6 text-slate-900">Kijkvragen</h3>
        <ol className="list-decimal space-y-2 pl-5 text-slate-700">
          <li>Welke voorbeelden van prijzen die veranderen op basis van vraag worden in de video genoemd?</li>
          <li>Welke reden geeft de video voor waarom bedrijven hun prijzen laten meebewegen?</li>
          <li>Wat merkt een consument hiervan in de praktijk?</li>
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
          to="/thema-7/begrippenlijst"
          className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-blue-700 hover:text-blue-800"
        >
          📚 Bekijk de begrippenlijst van dit thema
        </Link>
      </Section>
    </PageShell>
  )
}
