import React from 'react'
import { Link } from 'react-router-dom'
import PageShell from '../components/PageShell.jsx'
import Section from '../components/Section.jsx'

const lessen = [
  { to: '/thema-3/les-3-1', titel: 'Les 3.1', ondertitel: 'Van bezitten naar gebruiken: het abonnementenmodel' },
  { to: '/thema-3/les-3-2', titel: 'Les 3.2', ondertitel: 'Freemium: gratis totdat je toch betaalt' },
  { to: '/thema-3/les-3-3', titel: 'Les 3.3', ondertitel: 'Abonnementenroof: waarom opzeggen zo moeilijk is' },
  { to: '/thema-3/les-3-4', titel: 'Les 3.4', ondertitel: 'Slim kiezen: bundelen, prijsstijgingen en je abonnementenoverzicht' },
]

export default function Start3() {
  return (
    <PageShell>
      <section className="mb-12 text-center">
        <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-blue-700">
          Economie · Havo/Vwo onderbouw · Thema 3
        </p>
        <h1 className="mb-4 text-slate-900">
          De Abonnementsmaatschappij: Abonnementenroof, van Netflix tot HelloFresh
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-slate-600">
          Je Spotify, Netflix, iCloud-opslag, sportschool en misschien zelfs je HelloFresh-box: stuk voor
          stuk "maar een paar euro per maand". Los lijkt elk bedrag onschuldig, maar bij elkaar opgeteld
          verdwijnt er iedere maand een verrassend groot deel van je geld richting bedrijven. In dit thema
          ontdek je waarom bedrijven massaal overstappen op abonnementen, hoe freemium-modellen werken,
          waarom opzeggen zo lastig gemaakt wordt, en hoe je zelf grip houdt op je abonnementenlasten.
        </p>
      </section>

      <Section title="🎬 Introductieopdracht (± 5 min.)">
        <div className="rounded-lg border border-dashed border-border bg-white p-5">
          <p className="text-slate-700">
            Docent: zoek voorafgaand aan de les een korte (Nederlandstalige) video over de
            abonnementeneconomie of over prijsstijgingen bij streamingdiensten, en plaats de link hier in
            een <code>iframe</code> (zie de andere thema's voor het exacte format). Geen passende video
            gevonden? Start de les dan met de kijkvragen hieronder als klassikaal gesprek, aan de hand van
            de eigen abonnementen van de leerlingen.
          </p>
        </div>

        <h3 className="mb-3 mt-6 text-slate-900">Kijk-/gespreksvragen</h3>
        <ol className="list-decimal space-y-2 pl-5 text-slate-700">
          <li>Welke abonnementen heb jij, of heeft je gezin, op dit moment lopen?</li>
          <li>Weet je precies hoeveel deze abonnementen samen per maand kosten?</li>
          <li>Is er weleens een abonnement geweest dat je vergeten was op te zeggen? Wat gebeurde er?</li>
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
          to="/thema-3/begrippenlijst"
          className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-blue-700 hover:text-blue-800"
        >
          📚 Bekijk de begrippenlijst van dit thema
        </Link>
      </Section>
    </PageShell>
  )
}
