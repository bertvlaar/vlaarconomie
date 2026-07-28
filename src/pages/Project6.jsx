import React from 'react'
import PageShell from '../components/PageShell.jsx'
import Section from '../components/Section.jsx'

const fases = [
  {
    titel: 'Fase 1 · Onderzoek (week 1)',
    inhoud: [
      'Kies met je groep een klein bedrijf (bestaand of zelfverzonnen, bijvoorbeeld een winkel, foodtruck, webshop of dienstverlener) dat een fysiek product verkoopt.',
      'Bepaal een realistische verkoopprijs, inkoopprijs en verwachte afzet per maand voor jullie bedrijf.',
      'Verzamel minimaal drie voorbeelden van vaste kosten die jullie bedrijf per maand zou moeten betalen (bijvoorbeeld huur, verzekering, personeel).',
    ],
  },
  {
    titel: 'Fase 2 · Berekening (week 2)',
    inhoud: [
      'Bereken de maandomzet van jullie bedrijf: Omzet = Verkoopprijs × Afzet.',
      'Bereken de inkoopwaarde van de omzet en de brutowinst.',
      'Bereken de nettowinst en de nettowinstmarge, en zet alle stappen overzichtelijk in een resultatenrekening.',
    ],
  },
  {
    titel: 'Fase 3 · Verbetervoorstel (week 3)',
    inhoud: [
      'Bedenk twee concrete maatregelen waarmee jullie bedrijf de nettowinst zou kunnen verbeteren (bijvoorbeeld prijs, afzet, inkoopprijs of vaste kosten).',
      'Bereken voor beide maatregelen wat het verwachte effect op de nettowinst zou zijn.',
      'Kies onderbouwd welke maatregel jullie bedrijf het beste zou kunnen toepassen, en waarom.',
    ],
  },
  {
    titel: 'Fase 4 · Presentatie (week 4)',
    inhoud: [
      'Verwerk jullie bedrijf, resultatenrekening en verbetervoorstel in een presentatie van maximaal 8 minuten.',
      'Gebruik minimaal één visuele weergave van de resultatenrekening (tabel, grafiek of schema).',
      'Sluit af met een stelling over jullie verbetervoorstel waarover de klas kort kan discussiëren.',
    ],
  },
]

const rubriek = [
  { criterium: 'Onderzoek', omschrijving: 'Realistische en onderbouwde keuze van bedrijf, prijzen, afzet en kostenposten.', punten: '0–3' },
  { criterium: 'Economische begrippen', omschrijving: 'Correct en toegepast gebruik van begrippen uit dit thema (omzet, afzet, vaste en variabele kosten, inkoopwaarde, brutowinst, nettowinst, resultatenrekening).', punten: '0–3' },
  { criterium: 'Resultatenrekening & verbetervoorstel', omschrijving: 'Correcte berekening van de resultatenrekening en een goed onderbouwd verbetervoorstel voor de nettowinst.', punten: '0–2' },
  { criterium: 'Presentatie', omschrijving: 'Duidelijkheid, tijdsbewaking en gebruik van een visuele weergave.', punten: '0–2' },
]

export default function Project6() {
  return (
    <PageShell>
      <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-emerald-700">Thema 6 · Project</p>
      <h1 className="mb-3 text-slate-900">Reken je eigen bedrijf door: stel een resultatenrekening op</h1>
      <p className="mb-8 max-w-2xl text-slate-600">
        In groepjes van 3–4 leerlingen verzin je een eigen kleine onderneming, stel je hiervoor een
        volledige resultatenrekening op en formuleer je een onderbouwd voorstel om de nettowinst te
        verbeteren. Looptijd: 4 lesweken.
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
