import React from 'react'
import { Link } from 'react-router-dom'
import PageShell from '../components/PageShell.jsx'
import Section from '../components/Section.jsx'

const lessen = [
  { to: '/thema-10/les-10-1', titel: 'Les 10.1', ondertitel: 'Energiemarkten: primaire energiebronnen als schaars goed' },
  { to: '/thema-10/les-10-2', titel: 'Les 10.2', ondertitel: 'Van geopolitiek conflict tot jouw energierekening' },
  { to: '/thema-10/les-10-3', titel: 'Les 10.3', ondertitel: 'Van Congo tot Californië: de wereldwijde reis van je smartphone' },
  { to: '/thema-10/les-10-4', titel: 'Les 10.4', ondertitel: 'De ongelijke verdeling van toegevoegde waarde' },
]

export default function Start10() {
  return (
    <PageShell>
      <section className="mb-12 text-center">
        <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-blue-700">
          Economie · Havo/Vwo onderbouw · Thema 10
        </p>
        <h1 className="mb-4 text-slate-900">Energie, Gasprijzen &amp; De wereld achter je iPhone</h1>
        <p className="mx-auto max-w-2xl text-lg text-slate-600">
          Waarom schiet je energierekening ineens omhoog door een conflict aan de andere kant van de
          wereld? En waarom liggen er in jouw smartphone onderdelen uit tien verschillende landen,
          terwijl de fabrieksarbeider die hem in elkaar zet maar een fractie verdient van wat de
          ontwerper in Californië opstrijkt? Dit afsluitende thema van leerjaar 3 laat zien hoe
          energiemarkten, geopolitiek en wereldwijde waardeketens rechtstreeks in je portemonnee
          terechtkomen.
        </p>
      </section>

      <Section title="🎬 Introductievideo (± 4 min.)">
        <div className="aspect-video w-full overflow-hidden rounded-lg border border-border">
          <iframe
            className="h-full w-full"
            src="https://www.youtube.com/embed/dhrDNwCEGGk"
            title="Waarom stijgt de gasprijs? En wat heeft dat met de wereld te maken?"
            allowFullScreen
          />
        </div>
        <p className="mt-3 text-sm text-slate-500">
          Docent: vervang deze video indien gewenst door een recentere of specifiek Nederlandstalige
          uitleg over energieprijzen en globalisering.
        </p>

        <h3 className="mb-3 mt-6 text-slate-900">Kijkvragen</h3>
        <ol className="list-decimal space-y-2 pl-5 text-slate-700">
          <li>Welke oorzaak wordt in de video genoemd voor het stijgen van energieprijzen?</li>
          <li>Welke landen of gebeurtenissen worden genoemd die de energiemarkt beïnvloeden?</li>
          <li>Wat merkt een gewoon huishouden hiervan in de praktijk?</li>
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
          to="/thema-10/begrippenlijst"
          className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-blue-700 hover:text-blue-800"
        >
          📚 Bekijk de begrippenlijst van dit thema
        </Link>
      </Section>
    </PageShell>
  )
}
