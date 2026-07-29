import React from 'react'
import PageShell from '../components/PageShell.jsx'
import Section from '../components/Section.jsx'
import Leerdoelen from '../components/Leerdoelen.jsx'
import InfoBox from '../components/InfoBox.jsx'
import VerwerkingsOpdracht from '../components/VerwerkingsOpdracht.jsx'
import OefenBank from '../components/OefenBank.jsx'
import RekenOpdracht from '../components/RekenOpdracht.jsx'
import RendementSimulator from '../components/RendementSimulator.jsx'
import oefenbankLes12 from '../data/oefenbankLes12.js'
import rekenLes12 from '../data/rekenLes12.js'

export default function Les12() {
  return (
    <PageShell>
      <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-blue-700">Les 1.2</p>
      <h1 className="mb-8 text-slate-900">De wet die niemand kan omzeilen: risico en rendement</h1>

      <Leerdoelen>
        Je legt uit wat het verband tussen risico en rendement inhoudt, herkent wanneer een beloofd
        rendement economisch onmogelijk is, en berekent hoe absurd groot zulke beloftes worden over tijd.
      </Leerdoelen>

      <Section title="Kerntheorie">
        <p className="mb-4 text-slate-700">
          In de economie bestaat een ijzeren regel: hoe hoger het rendement dat je wordt beloofd, hoe hoger
          het risico dat je je geld (deels of helemaal) kwijtraakt.
        </p>

        <InfoBox type="definitie" title="Definitie: risico en rendement">
          <p>
            Het economische principe dat een hoger verwacht rendement altijd gepaard gaat met een hoger
            risico op verlies. Een laag risico betekent structureel ook een lager rendement.
          </p>
        </InfoBox>

        <InfoBox type="verdieping" title="Realistische rendementen als ijkpunt">
          <p>
            Een spaarrekening geeft een laag, veilig rendement omdat het risico bijna nul is. Aandelen kunnen
            op lange termijn gemiddeld zo'n 5 à 9% per jaar opleveren, maar dan moet je ook accepteren dat de
            waarde in een slecht jaar flink kan dalen. Als iemand jou "gegarandeerd 20% winst per week"
            belooft, klopt er wiskundig al iets niet: geen enkele legale belegging op de wereld haalt dat
            structureel, jaar in jaar uit, zonder risico. Zodra het woord "gegarandeerd" samen met een
            torenhoog rendement opduikt, is dat geen kans — het is een rode vlag.
          </p>
        </InfoBox>

        <InfoBox type="vwo" title="VWO-verdieping: samengestelde interest bij extreme rendementen">
          <p>
            Deze regel geldt ook voor de tijd die je erin moet steken: "passief" duizenden euro's per maand
            verdienen zonder kennis, netwerk of tijdsinvestering bestaat economisch gezien niet. Iemand moet
            ergens het echte risico of de echte arbeid dragen — en bij een scam ben jij dat. Door
            samengestelde interest (rente-op-rente) groeit een "bescheiden" belofte van bijvoorbeeld 20% per
            week binnen enkele maanden tot een bedrag dat economisch volstrekt onmogelijk is.
          </p>
        </InfoBox>
      </Section>

      <Section title="Praktijk: hoe absurd wordt de belofte van de guru?">
        <p className="mb-4 text-slate-700">
          Vergelijk een realistisch rendement (sparen, aandelen) met een typische "guru"-belofte, en zie hoe
          snel het verschil oploopt.
        </p>
        <RendementSimulator />
      </Section>

      <Section title="Praktijk: reken de groei door">
        <div className="space-y-4">
          {rekenLes12.map((r) => (
            <RekenOpdracht key={r.nummer} {...r} />
          ))}
        </div>
      </Section>

      <VerwerkingsOpdracht
        titel="Opdracht: beoordeel een beleggingsbelofte"
        werkboekPagina={12}
        instructie="Zoek (of bedenk) een voorbeeld van een beleggingsbelofte die je verdacht vindt."
      >
        <p>1. Noteer het beloofde rendement en de tijdsperiode waarin dit zou moeten gebeuren.</p>
        <p>
          2. Bereken (net als in de simulator) hoe dit bedrag eruit zou zien na een jaar, als het rendement
          zich elke periode zou herhalen.
        </p>
        <p>
          3. Leg uit waarom dit bedrag economisch onmogelijk is, en welk realistisch rendement (sparen of
          aandelen) hier wél bij past.
        </p>
      </VerwerkingsOpdracht>

      <OefenBank lesTitel="1.2" opdrachten={oefenbankLes12} />
    </PageShell>
  )
}
