import React from 'react'
import PageShell from '../components/PageShell.jsx'
import Section from '../components/Section.jsx'

const fases = [
  {
    titel: 'Fase 1 · Onderzoek (week 1)',
    inhoud: [
      'Kies met je groep een bedrijf of evenement met een (bijna) vaste capaciteit, bijvoorbeeld een pretpark, bioscoop, festival, concertzaal of hotel.',
      'Zoek op hoe de vraag naar dit bedrijf of evenement in de praktijk wisselt: welke momenten zijn druk, welke momenten zijn rustig, en waardoor komt dat?',
      'Verzamel minimaal drie bronnen (website, nieuwsartikel, eigen ervaring/interview) over de huidige prijsstrategie van jullie gekozen bedrijf.',
    ],
  },
  {
    titel: 'Fase 2 · Analyse (week 2)',
    inhoud: [
      'Schat, op basis van jullie bronnen, hoe de vraag verschilt tussen een piekmoment en een rustig moment (bijvoorbeeld in bezoekersaantallen of bezettingsgraad).',
      'Bereken de (geschatte) capaciteitsbenutting op een piekmoment en op een rustig moment, en bepaal of er sprake is van piekbelasting.',
      'Onderzoek of het gekozen bedrijf al vormen van dynamic pricing, prijsdifferentiatie of psychologische prijzen toepast, en zo ja: welke.',
    ],
  },
  {
    titel: 'Fase 3 · Prijsstrategie (week 3)',
    inhoud: [
      'Ontwerp met de groep een eigen dynamic-pricing-strategie voor jullie bedrijf: op welke momenten zou de prijs omhoog of omlaag moeten, en met hoeveel procent?',
      'Onderbouw jullie strategie met minimaal één berekening van de (geschatte) prijselasticiteit van de vraag.',
      'Bereken bij jullie voorgestelde prijs de (geschatte) marge per klant, uitgaande van realistische vaste en variabele kosten.',
    ],
  },
  {
    titel: 'Fase 4 · Presentatie (week 4)',
    inhoud: [
      'Verwerk jullie onderzoek, analyse en prijsstrategie in een presentatie van maximaal 8 minuten.',
      'Gebruik minimaal één grafiek, tabel of schema om jullie prijsstrategie te visualiseren.',
      'Sluit af met een stelling over dynamic pricing waarover de klas kort kan discussiëren.',
    ],
  },
]

const rubriek = [
  { criterium: 'Onderzoek', omschrijving: 'Volledigheid en betrouwbaarheid van de gebruikte bronnen over vraag, aanbod en de huidige prijsstrategie.', punten: '0–3' },
  { criterium: 'Economische begrippen', omschrijving: 'Correct en toegepast gebruik van begrippen uit dit thema (vraag en aanbod, evenwichtsprijs, prijselasticiteit, dynamic pricing, kostprijs, marge).', punten: '0–3' },
  { criterium: 'Prijsstrategie & berekeningen', omschrijving: 'Onderbouwing van de voorgestelde prijsstrategie met correcte berekeningen van elasticiteit en marge.', punten: '0–2' },
  { criterium: 'Presentatie', omschrijving: 'Duidelijkheid, tijdsbewaking en gebruik van een visuele weergave.', punten: '0–2' },
]

export default function Project7() {
  return (
    <PageShell>
      <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-blue-700">Thema 7 · Project</p>
      <h1 className="mb-3 text-slate-900">Ontwerp een dynamic-pricing-strategie</h1>
      <p className="mb-8 max-w-2xl text-slate-600">
        In groepjes van 3–4 leerlingen onderzoek je de vraag- en aanbodsituatie van een zelfgekozen bedrijf of
        evenement met een (bijna) vaste capaciteit, en ontwerp je een onderbouwde prijsstrategie. Looptijd: 4
        lesweken.
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
