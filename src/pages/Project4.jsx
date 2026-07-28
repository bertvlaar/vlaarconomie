import React from 'react'
import PageShell from '../components/PageShell.jsx'
import Section from '../components/Section.jsx'

const fases = [
  {
    titel: 'Fase 1 · Onderzoek (week 1)',
    inhoud: [
      'Kies met je groep een bestaand kledingmerk (fast fashion of slow fashion) en zoek uit hoe transparant dit merk is over de eigen productieketen.',
      'Zoek op welke duurzaamheidsclaims en/of keurmerken het merk gebruikt, en ga na of deze door een onafhankelijke organisatie gecontroleerd worden.',
      'Verzamel minimaal drie bronnen (website van het merk, een keurmerksite, een nieuwsartikel of consumentenorganisatie) over jullie gekozen merk.',
    ],
  },
  {
    titel: 'Fase 2 · Kostprijs & verdienmodel (week 2)',
    inhoud: [
      'Ontwerp een fictief eigen kledingmerk met één kledingstuk (bijvoorbeeld een hoodie of T-shirt), en bepaal een realistische kostprijsopbouw (grondstof, arbeid, transport, marketing).',
      'Bereken de verkoopprijs en de winstmarge van jullie kledingstuk, uitgaande van een door jullie gekozen winstmarge in procenten.',
      'Kies of jullie merk een fast-fashion-, slow-fashion- of circulair verdienmodel (bijvoorbeeld verhuur) hanteert, en onderbouw deze keuze.',
    ],
  },
  {
    titel: 'Fase 3 · Eerlijke marketing (week 3)',
    inhoud: [
      'Schrijf een korte marketingtekst voor jullie kledingstuk, waarin je duurzaamheid of kwaliteit benoemt zónder aan greenwashing te doen.',
      'Kies een bestaand, onafhankelijk keurmerk dat past bij jullie kledingstuk, of leg uit waarom jullie merk (nog) geen keurmerk kan voeren.',
      'Leg uit welke informatie jullie merk transparant zou delen met consumenten over de productieketen.',
    ],
  },
  {
    titel: 'Fase 4 · Presentatie (week 4)',
    inhoud: [
      'Verwerk jullie onderzoek, kostprijsberekening en marketingtekst in een presentatie van maximaal 8 minuten.',
      'Laat in de presentatie duidelijk de kostprijsopbouw van jullie kledingstuk zien, bijvoorbeeld in een taartdiagram of tabel.',
      'Sluit af met een stelling over eerlijke mode waarover de klas kort kan discussiëren.',
    ],
  },
]

const rubriek = [
  { criterium: 'Onderzoek', omschrijving: 'Volledigheid en betrouwbaarheid van de gebruikte bronnen over het gekozen bestaande kledingmerk.', punten: '0–3' },
  { criterium: 'Economische begrippen', omschrijving: 'Correct en toegepast gebruik van begrippen uit dit thema (kostprijs, winstmarge, schaalvoordeel, greenwashing, keurmerk, circulaire economie).', punten: '0–3' },
  { criterium: 'Kostprijs & marketing', omschrijving: 'Onderbouwing van de kostprijsopbouw, winstmarge en een eerlijke (niet-greenwashende) marketingtekst.', punten: '0–2' },
  { criterium: 'Presentatie', omschrijving: 'Duidelijkheid, tijdsbewaking en gebruik van een visuele weergave van de kostprijsopbouw.', punten: '0–2' },
]

export default function Project4() {
  return (
    <PageShell>
      <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-blue-700">Thema 4 · Project</p>
      <h1 className="mb-3 text-slate-900">Ontwerp een eerlijk kledingmerk</h1>
      <p className="mb-8 max-w-2xl text-slate-600">
        In groepjes van 3–4 leerlingen onderzoek je een bestaand kledingmerk en ontwerp je vervolgens een
        eigen, fictief kledingmerk met een onderbouwde kostprijs, verdienmodel en eerlijke (niet
        greenwashende) marketing. Looptijd: 4 lesweken.
      </p>

      <Section title="Aanpak in vier fases">
        <div className="space-y-6">
          {fases.map((f) => (
            <div key={f.titel} className="rounded-lg border border-border bg-white p-5">
              <h3 className="mb-2 text-slate-900">{f.titel}</h3>
              <ul className="list-disc space-y-1.5 pl-5 text-slate-700">
                {f.inhoud.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Beoordelingsrubric">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[500px] border-collapse text-sm">
            <thead>
              <tr className="border-b border-border text-left text-slate-500">
                <th className="py-2 pr-4">Criterium</th>
                <th className="py-2 pr-4">Omschrijving</th>
                <th className="py-2 pr-4">Punten</th>
              </tr>
            </thead>
            <tbody>
              {rubriek.map((r) => (
                <tr key={r.criterium} className="border-b border-border align-top">
                  <td className="py-2 pr-4 font-medium text-slate-800">{r.criterium}</td>
                  <td className="py-2 pr-4 text-slate-600">{r.omschrijving}</td>
                  <td className="py-2 pr-4 text-slate-600">{r.punten}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-sm text-slate-500">Totaal: 10 punten, om te zetten naar een cijfer volgens de eigen normering van de docent.</p>
      </Section>
    </PageShell>
  )
}
