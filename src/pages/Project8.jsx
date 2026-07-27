import React from 'react'
import PageShell from '../components/PageShell.jsx'
import Section from '../components/Section.jsx'

const fases = [
  {
    titel: 'Fase 1 · Onderzoek (week 1)',
    inhoud: [
      'Kies met je groep één C2C-platform (bijvoorbeeld Vinted, Marktplaats of Depop) en onderzoek hoe het verdienmodel werkt.',
      'Zoek uit: welke servicekosten of commissie rekent het platform, en aan wie (koper, verkoper, of beide)?',
      'Verzamel minimaal drie bronnen (nieuwsartikel, platformwebsite, review) over jullie gekozen platform.',
    ],
  },
  {
    titel: 'Fase 2 · Analyse (week 2)',
    inhoud: [
      'Kies met de groep vijf fictieve of eigen tweedehands producten en bepaal voor elk product een geschatte nieuwwaarde, leeftijd en conditie.',
      'Bereken voor elk product de geschatte restwaarde (afschrijving + conditie) en een realistische verkoopprijs.',
      'Bereken de winstmarge als jullie deze producten tweedehands zouden inkopen en met een kleine marge doorverkopen.',
    ],
  },
  {
    titel: 'Fase 3 · Standpunt (week 3)',
    inhoud: [
      'Formuleer met de groep een onderbouwd standpunt: is C2C-handel per saldo goed voor duurzaamheid, of spelen effecten zoals het rebound-effect dit voordeel parten?',
      'Bedenk minimaal één concrete maatregel waarmee C2C-platforms veiliger of eerlijker zouden kunnen worden, en leg uit welk economisch mechanisme daarachter zit.',
    ],
  },
  {
    titel: 'Fase 4 · Presentatie (week 4)',
    inhoud: [
      'Verwerk jullie onderzoek, berekeningen en standpunt in een presentatie van maximaal 8 minuten.',
      'Gebruik minimaal één berekening van restwaarde of winstmarge als concreet cijfervoorbeeld.',
      'Sluit af met een stelling waarover de klas kort kan discussiëren.',
    ],
  },
]

const rubriek = [
  { criterium: 'Onderzoek', omschrijving: 'Volledigheid en betrouwbaarheid van de gebruikte bronnen over het gekozen platform.', punten: '0–3' },
  { criterium: 'Economische begrippen', omschrijving: 'Correct en toegepast gebruik van begrippen uit dit thema (C2C, transactiekosten, afschrijving, restwaarde, winstmarge).', punten: '0–3' },
  { criterium: 'Berekeningen', omschrijving: 'Juistheid van de berekeningen van restwaarde en winstmarge bij de gekozen producten.', punten: '0–2' },
  { criterium: 'Presentatie & standpunt', omschrijving: 'Duidelijkheid, tijdsbewaking en een onderbouwd eigen standpunt.', punten: '0–2' },
]

export default function Project8() {
  return (
    <PageShell>
      <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-blue-700">Thema 8 · Project</p>
      <h1 className="mb-3 text-slate-900">Zet je eigen C2C-winkel op</h1>
      <p className="mb-8 max-w-2xl text-slate-600">
        In groepjes van 3–4 leerlingen onderzoek je een tweedehandsplatform, bereken je de waarde en
        winstmarge van fictieve tweedehands producten, en presenteer je een onderbouwd standpunt over
        C2C-handel en duurzaamheid. Looptijd: 4 lesweken.
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
