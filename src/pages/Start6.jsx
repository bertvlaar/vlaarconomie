import React from 'react'
import { Link } from 'react-router-dom'
import PageShell from '../components/PageShell.jsx'
import Section from '../components/Section.jsx'

const lessen = [
  { to: '/thema-6/les-6-1', titel: 'Les 6.1', ondertitel: 'Omzet en afzet: wat levert verkopen eigenlijk op?' },
  { to: '/thema-6/les-6-2', titel: 'Les 6.2', ondertitel: 'Vaste kosten, variabele kosten en de inkoopwaarde van de omzet' },
  { to: '/thema-6/les-6-3', titel: 'Les 6.3', ondertitel: 'De resultatenrekening: brutowinst en nettowinst berekenen' },
  { to: '/thema-6/les-6-4', titel: 'Les 6.4', ondertitel: 'Een gezonde zaak runnen: hoe verbeter je de nettowinst?' },
]

export default function Start6() {
  return (
    <PageShell>
      <section className="mb-12 text-center">
        <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-blue-700">
          Economie · Havo/Vwo onderbouw · Thema 6
        </p>
        <h1 className="mb-4 text-slate-900">De Winstfabriek: Hoe runt een bedrijf een gezonde zaak?</h1>
        <p className="mx-auto max-w-2xl text-lg text-slate-600">
          Wat maakt het verschil tussen een bedrijf dat overleeft en een bedrijf dat omvalt? In dit thema
          kruip je in de huid van de eigenaar van sneakerwinkel "SoleZone" en ontdek je hoe omzet, kosten,
          brutowinst en nettowinst met elkaar samenhangen. Je leert een resultatenrekening lezen en
          opstellen, speelt met de cijfers in een interactieve winst-simulator en buigt je aan het einde
          over de vraag hoe een ondernemer zijn zaak gezonder kan maken.
        </p>
      </section>

      <Section title="🎬 Introductievideo (± 4 min.)">
        <div className="aspect-video w-full overflow-hidden rounded-lg border border-border">
          <iframe
            className="h-full w-full"
            src="https://www.youtube.com/embed/XPQ2Y3lVIVs"
            title="Hoe maakt een bedrijf winst? Uitleg omzet, kosten en de resultatenrekening"
            allowFullScreen
          />
        </div>
        <p className="mt-3 text-sm text-slate-500">
          Docent: vervang deze video indien gewenst door een recentere of specifiek Nederlandstalige
          uitleg over omzet, kosten en winst.
        </p>

        <h3 className="mb-3 mt-6 text-slate-900">Kijkvragen</h3>
        <ol className="list-decimal space-y-2 pl-5 text-slate-700">
          <li>Welke soorten kosten worden in de video genoemd?</li>
          <li>Hoe wordt in de video het verschil tussen omzet en winst uitgelegd?</li>
          <li>Wat gebeurt er met een bedrijf als de kosten structureel hoger zijn dan de opbrengsten?</li>
        </ol>
      </Section>

      <Section title="Vier lessen, één thema">
        <div className="grid gap-4 sm:grid-cols-2">
          {lessen.map((les) => (
            <Link
              key={les.to}
              to={les.to}
              className="rounded-lg border border-border bg-pagebg p-5 transition-colors hover:border-emerald-300 hover:bg-emerald-50/40"
            >
              <p className="text-sm font-semibold text-emerald-700">{les.titel}</p>
              <p className="mt-1 font-medium text-slate-800">{les.ondertitel}</p>
            </Link>
          ))}
        </div>
        <Link
          to="/thema-6/begrippenlijst"
          className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-emerald-700 hover:text-emerald-800"
        >
          📚 Bekijk de begrippenlijst van dit thema
        </Link>
      </Section>
    </PageShell>
  )
}
