import React from 'react'
import PageShell from '../components/PageShell.jsx'
import Section from '../components/Section.jsx'

const fases = [
  {
    titel: 'Fase 1 · Onderzoek (week 1)',
    inhoud: [
      'Kies met je groep een bekend voorbeeld van financiële oplichting (bijvoorbeeld BitConnect, OneCoin, Grinta Invest, of een ander bekend piramidespel of Ponzi-fraude).',
      'Zoek uit welk rendement er werd beloofd, hoeveel mensen erin trapten, en hoe het uiteindelijk instortte.',
      'Verzamel minimaal drie bronnen (nieuwsartikelen, een AFM-waarschuwing, of een documentaire) over jullie gekozen voorbeeld.',
    ],
  },
  {
    titel: 'Fase 2 · Reken het door (week 2)',
    inhoud: [
      'Bereken het beloofde rendement van jullie gekozen voorbeeld over een langere periode (bijvoorbeeld een jaar), met samengestelde groei.',
      'Vergelijk dit met een realistisch rendement (sparen of aandelen) over dezelfde periode.',
      'Als het om een piramidespel gaat: bereken hoeveel deelnemers er na een aantal niveaus nodig zouden zijn geweest, en vergelijk dit met de bevolking van Nederland of de wereld.',
    ],
  },
  {
    titel: 'Fase 3 · Ontmasker de trucs (week 3)',
    inhoud: [
      'Analyseer welke psychologische technieken (FOMO, sociale bewijskracht, tijdsdruk, vertrouwen wekkende beelden) werden ingezet om mensen te overtuigen.',
      'Beschrijf welke informatie de organisatoren wél hadden, maar de slachtoffers niet (informatie-asymmetrie).',
      'Formuleer minstens drie waarschuwingssignalen die achteraf duidelijk hadden moeten zijn.',
    ],
  },
  {
    titel: 'Fase 4 · Presentatie (week 4)',
    inhoud: [
      'Verwerk jullie onderzoek, berekeningen en waarschuwingssignalen in een presentatie van maximaal 8 minuten.',
      'Maak een korte "waarschuwingsposter" of infographic met de belangrijkste alarmsignalen uit jullie casus.',
      'Sluit af met een stelling over online financiële scams waarover de klas kort kan discussiëren.',
    ],
  },
]

const rubriek = [
  { criterium: 'Onderzoek', omschrijving: 'Volledigheid en betrouwbaarheid van de gebruikte bronnen over het gekozen scam-voorbeeld.', punten: '0–3' },
  { criterium: 'Economische begrippen', omschrijving: 'Correct en toegepast gebruik van begrippen uit dit thema (risico en rendement, piramidespel, Ponzi-fraude, informatie-asymmetrie).', punten: '0–3' },
  { criterium: 'Berekeningen', omschrijving: 'Correcte berekening van het beloofde rendement en/of het benodigde aantal deelnemers.', punten: '0–2' },
  { criterium: 'Presentatie', omschrijving: 'Duidelijkheid, tijdsbewaking en kwaliteit van de waarschuwingsposter/infographic.', punten: '0–2' },
]

export default function Project1() {
  return (
    <PageShell>
      <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-blue-700">Thema 1 · Project</p>
      <h1 className="mb-3 text-slate-900">Ontmasker de scam</h1>
      <p className="mb-8 max-w-2xl text-slate-600">
        In groepjes van 3–4 leerlingen onderzoek je een bekend voorbeeld van financiële oplichting, reken je
        de beloftes economisch door, en ontmasker je de psychologische trucs die gebruikt werden. Looptijd:
        4 lesweken.
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
