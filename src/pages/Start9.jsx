import React from 'react'
import { Link } from 'react-router-dom'
import PageShell from '../components/PageShell.jsx'
import Section from '../components/Section.jsx'

const lessen = [
  { to: '/thema-9/les-9-1', titel: 'Les 9.1', ondertitel: 'Menselijk kapitaal: investeren in jezelf' },
  { to: '/thema-9/les-9-2', titel: 'Les 9.2', ondertitel: 'Kosten-batenanalyse over de levensloop' },
  { to: '/thema-9/les-9-3', titel: 'Les 9.3', ondertitel: 'Studiefinanciering: lening versus gift' },
  { to: '/thema-9/les-9-4', titel: 'Les 9.4', ondertitel: 'Loonverschillen op de arbeidsmarkt doorgerekend' },
]

export default function Start9() {
  return (
    <PageShell>
      <section className="mb-12 text-center">
        <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-blue-700">
          Economie · Havo/Vwo onderbouw · Thema 9
        </p>
        <h1 className="mb-4 text-slate-900">Kiezen voor je toekomst: Wat levert studeren op?</h1>
        <p className="mx-auto max-w-2xl text-lg text-slate-600">
          Waarom duurt het jaren voordat je geld verdient als je gaat studeren, terwijl klasgenoten die
          direct gaan werken nu al salaris ontvangen? En waarom krijg je later, gemiddeld genomen, toch
          een hoger loon dan iemand die niet is doorgeleerd? In dit thema leer je een studie te
          bekijken zoals een econoom dat doet: als een investering in jezelf, met kosten nu en een
          opbrengst later.
        </p>
      </section>

      <Section title="🎬 Introductievideo (± 5 min.)">
        <div className="aspect-video w-full overflow-hidden rounded-lg border border-border">
          <iframe
            className="h-full w-full"
            src="https://www.youtube.com/embed/OYvVOpurtEg"
            title="Is je diploma je tijd en geld waard? - Universiteit van Vlaanderen"
            allowFullScreen
          />
        </div>
        <p className="mt-3 text-sm text-slate-500">
          "Is je diploma je tijd en geld waard?" — arbeidseconoom Stijn Baert (UGent) voor Universiteit
          van Vlaanderen.
        </p>
        <p className="mt-1 text-xs text-slate-400">
          Docent: controleer voor de les of deze video nog beschikbaar is, en pas eventueel de
          Nederlandse in plaats van Vlaamse voorbeelden en cijfers aan waar nodig.
        </p>

        <h3 className="mb-3 mt-6 text-slate-900">Kijkvragen</h3>
        <ol className="list-decimal space-y-2 pl-5 text-slate-700">
          <li>Welk voordeel van een diploma hoger onderwijs noemt de arbeidseconoom in de video?</li>
          <li>Wat gebeurt er met iemands loon als hij of zij niet doorleert, volgens de video?</li>
          <li>Welke kanttekening plaatst de arbeidseconoom bij zijn conclusie?</li>
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
          to="/thema-9/begrippenlijst"
          className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-blue-700 hover:text-blue-800"
        >
          📚 Bekijk de begrippenlijst van dit thema
        </Link>
      </Section>
    </PageShell>
  )
}
