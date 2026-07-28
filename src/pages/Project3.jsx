import React from 'react'
import PageShell from '../components/PageShell.jsx'
import Section from '../components/Section.jsx'

const fases = [
  {
    titel: 'Fase 1 · Onderzoek (week 1)',
    inhoud: [
      'Kies met je groep een bestaande abonnementendienst (bijvoorbeeld een streamingdienst, maaltijdbox, sportschool of gaming-abonnement) en zoek uit hoe het aanmeld- en opzegproces eruitziet.',
      'Zoek op of de dienst een freemium-versie heeft, en zo ja, wat daarbij gratis is en wat betaald.',
      'Verzamel minimaal drie bronnen (website van het bedrijf, een nieuwsartikel, een consumentenorganisatie) over prijsstijgingen of klachten rondom opzeggen bij jullie gekozen dienst.',
    ],
  },
  {
    titel: 'Fase 2 · Verdienmodel ontwerpen (week 2)',
    inhoud: [
      'Ontwerp een fictieve eigen abonnementendienst (bijvoorbeeld voor muziek, games, kleding of maaltijden) met een maandprijs.',
      'Bepaal of jullie dienst een freemium-model gebruikt, en zo ja, wat gratis blijft en wat betaald wordt.',
      'Bereken de Customer Lifetime Value van een gemiddelde abonnee bij een door jullie gekozen churn-percentage.',
    ],
  },
  {
    titel: 'Fase 3 · Eerlijk aanmelden én opzeggen (week 3)',
    inhoud: [
      'Ontwerp een aanmeldproces voor jullie dienst, en een opzegproces dat voldoet aan de Wet van Dam (net zo makkelijk als aanmelden, maximaal één maand opzegtermijn).',
      'Beschrijf hoe jullie dienst omgaat met prijsstijgingen: transparant vooraf gecommuniceerd, of stilzwijgend na verloop van tijd?',
      'Beoordeel of jullie eigen verdienmodel eerlijk is tegenover de consument, en onderbouw dit met minimaal één argument.',
    ],
  },
  {
    titel: 'Fase 4 · Presentatie (week 4)',
    inhoud: [
      'Verwerk jullie onderzoek, verdienmodel en CLV-berekening in een presentatie van maximaal 8 minuten.',
      'Laat in de presentatie duidelijk zien hoe het aanmeld- en opzegproces van jullie dienst werkt, bijvoorbeeld in een stroomschema.',
      'Sluit af met een stelling over abonnementen waarover de klas kort kan discussiëren.',
    ],
  },
]

const rubriek = [
  { criterium: 'Onderzoek', omschrijving: 'Volledigheid en betrouwbaarheid van de gebruikte bronnen over de gekozen bestaande abonnementendienst.', punten: '0–3' },
  { criterium: 'Economische begrippen', omschrijving: 'Correct en toegepast gebruik van begrippen uit dit thema (recurring revenue, CLV, churn, freemium, subscription trap, bundelen).', punten: '0–3' },
  { criterium: 'Verdienmodel & berekening', omschrijving: 'Onderbouwing van het eigen verdienmodel en een correcte CLV-berekening.', punten: '0–2' },
  { criterium: 'Presentatie', omschrijving: 'Duidelijkheid, tijdsbewaking en gebruik van een visuele weergave van het aanmeld-/opzegproces.', punten: '0–2' },
]

export default function Project3() {
  return (
    <PageShell>
      <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-blue-700">Thema 3 · Project</p>
      <h1 className="mb-3 text-slate-900">Ontwerp je eigen abonnementendienst</h1>
      <p className="mb-8 max-w-2xl text-slate-600">
        In groepjes van 3–4 leerlingen onderzoek je een bestaande abonnementendienst en ontwerp je
        vervolgens een eigen, fictieve abonnementendienst met een onderbouwd verdienmodel én een eerlijk
        aanmeld- en opzegproces. Looptijd: 4 lesweken.
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
