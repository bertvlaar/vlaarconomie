import React from 'react'
import PageShell from '../components/PageShell.jsx'
import Section from '../components/Section.jsx'

const fases = [
  {
    titel: 'Fase 1 · Onderzoek (week 1)',
    inhoud: [
      'Kies met je groep een bestaande freemium-game of app en zoek uit welke virtuele goederen erin te koop zijn, en tegen welke (virtuele) prijs.',
      'Zoek uit of de game gebruikmaakt van lootboxes, tijdsdruk-aanbiedingen of andere dark patterns, en beschrijf hoe deze precies werken.',
      'Verzamel minimaal drie bronnen (de game zelf, een nieuwsartikel, een consumentenorganisatie zoals de Consumentenbond) over kritiek of onderzoek naar jullie gekozen game.',
    ],
  },
  {
    titel: 'Fase 2 · Verdienmodel ontwerpen (week 2)',
    inhoud: [
      'Ontwerp een fictieve eigen freemium-game met minstens twee virtuele goederen (bijvoorbeeld een skin en een battle pass) en een eigen virtuele valuta.',
      'Bepaal de wisselkoers van jullie virtuele valuta ten opzichte van euro\'s, en bereken de werkelijke prijs van jullie virtuele goederen.',
      'Kies bewust: gebruikt jullie game kunstmatige schaarste (tijdelijke items) en/of een lootbox-systeem? Onderbouw deze keuze.',
    ],
  },
  {
    titel: 'Fase 3 · Eerlijk ontwerp (week 3)',
    inhoud: [
      'Beoordeel jullie eigen ontwerp: welke onderdelen zouden als dark pattern gezien kunnen worden?',
      'Herontwerp minstens één onderdeel zodat het eerlijker is voor spelers (bijvoorbeeld: prijzen altijd ook in euro\'s tonen, of geen valse tijdsdruk).',
      'Leg uit welk effect deze aanpassing waarschijnlijk heeft op de omzet van jullie fictieve game, en of jullie die afweging acceptabel vinden.',
    ],
  },
  {
    titel: 'Fase 4 · Presentatie (week 4)',
    inhoud: [
      'Verwerk jullie onderzoek, verdienmodel en herontwerp in een presentatie van maximaal 8 minuten.',
      'Laat in de presentatie duidelijk zien hoe de werkelijke prijs (in euro\'s) van jullie virtuele goederen is opgebouwd.',
      'Sluit af met een stelling over gaming en in-app aankopen waarover de klas kort kan discussiëren.',
    ],
  },
]

const rubriek = [
  { criterium: 'Onderzoek', omschrijving: 'Volledigheid en betrouwbaarheid van de gebruikte bronnen over de gekozen bestaande game.', punten: '0–3' },
  { criterium: 'Economische begrippen', omschrijving: 'Correct en toegepast gebruik van begrippen uit dit thema (freemium, kunstmatige schaarste, dark pattern, payment pain, verliesaversie).', punten: '0–3' },
  { criterium: 'Verdienmodel & berekening', omschrijving: 'Onderbouwing van het eigen verdienmodel en een correcte berekening van de werkelijke prijs in euro\'s.', punten: '0–2' },
  { criterium: 'Presentatie', omschrijving: 'Duidelijkheid, tijdsbewaking en gebruik van een visuele weergave van de prijsopbouw.', punten: '0–2' },
]

export default function Project2() {
  return (
    <PageShell>
      <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-blue-700">Thema 2 · Project</p>
      <h1 className="mb-3 text-slate-900">Ontwerp je eigen (eerlijke) freemium-game</h1>
      <p className="mb-8 max-w-2xl text-slate-600">
        In groepjes van 3–4 leerlingen onderzoek je een bestaande freemium-game en ontwerp je vervolgens een
        eigen, fictieve game met een onderbouwd verdienmodel én een bewuste, eerlijke aanpak van dark
        patterns. Looptijd: 4 lesweken.
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
