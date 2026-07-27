import React from 'react'
import PageShell from '../components/PageShell.jsx'
import Section from '../components/Section.jsx'

const fases = [
  {
    titel: 'Fase 1 · Onderzoek (week 1)',
    inhoud: [
      'Kies met je groep één product (bijvoorbeeld een smartphone, laptop, spijkerbroek of kopje koffie) en breng de wereldwijde waardeketen ervan in kaart.',
      'Zoek per productiestap op: in welk land gebeurt dit, en waarom juist daar?',
      'Verzamel minimaal drie bronnen (nieuwsartikel, documentaire, bedrijfsrapport) over de herkomst van jullie product.',
    ],
  },
  {
    titel: 'Fase 2 · Analyse (week 2)',
    inhoud: [
      'Schat, op basis van jullie bronnen, hoe de verkoopprijs van het product verdeeld is over de verschillende schakels in de keten.',
      'Onderzoek of er bij dit product sprake is van een "smiling curve": welke schakels leveren naar schatting de meeste toegevoegde waarde op?',
      'Onderzoek of het product ook gevoelig is voor geopolitieke of macro-economische schokken (bijvoorbeeld grondstofprijzen, handelsconflicten of transportkosten).',
    ],
  },
  {
    titel: 'Fase 3 · Standpunt (week 3)',
    inhoud: [
      'Formuleer met de groep een onderbouwd standpunt: is de verdeling van toegevoegde waarde in jullie waardeketen eerlijk? Waarom wel of niet?',
      'Bedenk minimaal één concrete maatregel waarmee de verdeling eerlijker zou kunnen worden, en leg uit welk economisch mechanisme daarachter zit.',
    ],
  },
  {
    titel: 'Fase 4 · Presentatie (week 4)',
    inhoud: [
      'Verwerk jullie onderzoek, analyse en standpunt in een presentatie van maximaal 8 minuten.',
      'Gebruik minimaal één visuele weergave van de waardeketen (schema, kaart of infographic).',
      'Sluit af met een stelling waarover de klas kort kan discussiëren.',
    ],
  },
]

const rubriek = [
  { criterium: 'Onderzoek', omschrijving: 'Volledigheid en betrouwbaarheid van de gebruikte bronnen over de waardeketen.', punten: '0–3' },
  { criterium: 'Economische begrippen', omschrijving: 'Correct en toegepast gebruik van begrippen uit dit thema (arbeidsdeling, waardeketen, toegevoegde waarde, smiling curve, macro-economische schok).', punten: '0–3' },
  { criterium: 'Analyse & standpunt', omschrijving: 'Onderbouwing van het eigen standpunt met argumenten uit meerdere perspectieven.', punten: '0–2' },
  { criterium: 'Presentatie', omschrijving: 'Duidelijkheid, tijdsbewaking en gebruik van een visuele weergave.', punten: '0–2' },
]

export default function Project10() {
  return (
    <PageShell>
      <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-blue-700">Thema 10 · Project</p>
      <h1 className="mb-3 text-slate-900">De wereldwijde reis van een product</h1>
      <p className="mb-8 max-w-2xl text-slate-600">
        In groepjes van 3–4 leerlingen onderzoek je de wereldwijde waardeketen van een zelfgekozen
        product en presenteer je een onderbouwd standpunt over de verdeling van toegevoegde waarde.
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
