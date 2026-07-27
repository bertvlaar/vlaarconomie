import React from 'react'
import PageShell from '../components/PageShell.jsx'
import Section from '../components/Section.jsx'

const fases = [
  {
    titel: 'Fase 1 · Onderzoek (week 1)',
    inhoud: [
      'Kies met je groep twee vervolgopleidingen die jullie interesseren (bijvoorbeeld een mbo-, hbo- of universitaire opleiding), en onderzoek per opleiding: de studieduur, het collegegeld en het gemiddelde startsalaris na afstuderen.',
      'Zoek ook op wat het gemiddelde loon is van iemand die, in plaats van een van deze opleidingen, direct na de havo of het mbo aan het werk gaat.',
      'Verzamel minimaal drie bronnen (bijvoorbeeld CBS, DUO of een beroepenwebsite) voor jullie cijfers.',
    ],
  },
  {
    titel: 'Fase 2 · Analyse (week 2)',
    inhoud: [
      'Bereken voor beide opleidingen de totale investering (directe kosten plus gederfde inkomsten).',
      'Bereken voor beide opleidingen de loonpremie en de terugverdientijd, en vergelijk deze met elkaar.',
      'Onderzoek of een van beide opleidingen (deels) met studiefinanciering gefinancierd kan worden, en of dat een gift of een lening betreft.',
    ],
  },
  {
    titel: 'Fase 3 · Standpunt (week 3)',
    inhoud: [
      'Formuleer met de groep een onderbouwd standpunt: welke van de twee opleidingen zou je puur financieel gezien aanraden, en waarom?',
      'Bespreek ook: zijn er redenen om, ondanks een langere terugverdientijd, toch voor de andere opleiding te kiezen?',
    ],
  },
  {
    titel: 'Fase 4 · Presentatie (week 4)',
    inhoud: [
      'Verwerk jullie onderzoek, berekeningen en standpunt in een presentatie van maximaal 8 minuten.',
      'Gebruik minimaal één berekening van de terugverdientijd als concreet cijfervoorbeeld.',
      'Sluit af met een stelling waarover de klas kort kan discussiëren.',
    ],
  },
]

const rubriek = [
  { criterium: 'Onderzoek', omschrijving: 'Volledigheid en betrouwbaarheid van de gebruikte bronnen over beide opleidingen.', punten: '0–3' },
  { criterium: 'Economische begrippen', omschrijving: 'Correct en toegepast gebruik van begrippen uit dit thema (menselijk kapitaal, gederfde inkomsten, loonpremie, terugverdientijd).', punten: '0–3' },
  { criterium: 'Berekeningen', omschrijving: 'Juistheid van de berekeningen van totale investering, loonpremie en terugverdientijd.', punten: '0–2' },
  { criterium: 'Presentatie & standpunt', omschrijving: 'Duidelijkheid, tijdsbewaking en een onderbouwd eigen standpunt.', punten: '0–2' },
]

export default function Project9() {
  return (
    <PageShell>
      <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-blue-700">Thema 9 · Project</p>
      <h1 className="mb-3 text-slate-900">Reken je eigen studiekeuze door</h1>
      <p className="mb-8 max-w-2xl text-slate-600">
        In groepjes van 3–4 leerlingen vergelijk je twee vervolgopleidingen met elkaar aan de hand van
        een kosten-batenanalyse over de levensloop, en presenteer je een onderbouwd standpunt.
        Looptijd: 4 lesweken.
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
