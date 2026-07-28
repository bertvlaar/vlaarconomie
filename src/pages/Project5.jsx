import React from 'react'
import PageShell from '../components/PageShell.jsx'
import Section from '../components/Section.jsx'

const fases = [
  {
    titel: 'Fase 1 · Onderzoek (week 1)',
    inhoud: [
      'Kies met je groep één influencer of één platform en onderzoek hoe deze/dit geld verdient (reclame, abonnementen, sponsoring, of een combinatie).',
      'Zoek uit: is er een moment waarop jullie influencer/platform duidelijk (met #ad of #spon) een betaalde samenwerking vermeldt?',
      'Verzamel minimaal drie bronnen (video, nieuwsartikel, interview) over jullie gekozen influencer of platform.',
    ],
  },
  {
    titel: 'Fase 2 · Analyse & berekening (week 2)',
    inhoud: [
      'Bedenk met de groep een fictieve sponsordeal: een merk, een vergoeding en een geschat aantal views.',
      'Bereken de CPM (kosten per 1.000 views) van jullie fictieve sponsordeal.',
      'Bereken hoeveel euro van de verkoopprijs van het gesponsorde product ongeveer naar marketingkosten zou kunnen gaan, als jullie uitgaan van een gekozen marketingpercentage.',
    ],
  },
  {
    titel: 'Fase 3 · Standpunt (week 3)',
    inhoud: [
      'Formuleer met de groep een onderbouwd standpunt: bieden de huidige #ad-regels voldoende bescherming aan jonge kijkers, of zou er meer regelgeving moeten komen?',
      'Bedenk minimaal één concrete maatregel waarmee platforms transparanter zouden kunnen zijn over algoritmes of sponsoring, en leg uit welk economisch mechanisme daarachter zit.',
    ],
  },
  {
    titel: 'Fase 4 · Presentatie (week 4)',
    inhoud: [
      'Verwerk jullie onderzoek, berekeningen en standpunt in een presentatie van maximaal 8 minuten.',
      'Gebruik minimaal één berekening (CPM of marketingkosten-percentage) als concreet cijfervoorbeeld.',
      'Sluit af met een stelling over influencer-marketing waarover de klas kort kan discussiëren.',
    ],
  },
]

const rubriek = [
  { criterium: 'Onderzoek', omschrijving: 'Volledigheid en betrouwbaarheid van de gebruikte bronnen over de gekozen influencer of het platform.', punten: '0–3' },
  { criterium: 'Economische begrippen', omschrijving: 'Correct en toegepast gebruik van begrippen uit dit thema (aandachtseconomie, verdienmodellen, algoritme, sponsoring, kostenoverdracht).', punten: '0–3' },
  { criterium: 'Berekeningen', omschrijving: 'Juistheid van de berekening van CPM en/of het marketingkosten-percentage.', punten: '0–2' },
  { criterium: 'Presentatie & standpunt', omschrijving: 'Duidelijkheid, tijdsbewaking en een onderbouwd eigen standpunt.', punten: '0–2' },
]

export default function Project5() {
  return (
    <PageShell>
      <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-blue-700">Thema 5 · Project</p>
      <h1 className="mb-3 text-slate-900">Ontleed een influencer-verdienmodel</h1>
      <p className="mb-8 max-w-2xl text-slate-600">
        In groepjes van 3–4 leerlingen onderzoek je hoe een influencer of platform naar keuze geld
        verdient, bereken je fictieve advertentie- en sponsorcijfers, en presenteer je een onderbouwd
        standpunt over transparantie in influencer-marketing. Looptijd: 4 lesweken.
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
