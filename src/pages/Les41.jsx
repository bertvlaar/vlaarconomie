import React from 'react'
import PageShell from '../components/PageShell.jsx'
import Section from '../components/Section.jsx'
import Leerdoelen from '../components/Leerdoelen.jsx'
import InfoBox from '../components/InfoBox.jsx'
import VerwerkingsOpdracht from '../components/VerwerkingsOpdracht.jsx'
import OefenBank from '../components/OefenBank.jsx'
import KostprijsSimulator from '../components/KostprijsSimulator.jsx'
import oefenbankLes41 from '../data/oefenbankLes41.js'

export default function Les41() {
  return (
    <PageShell>
      <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-blue-700">Les 4.1</p>
      <h1 className="mb-8 text-slate-900">Van katoenveld tot kassa: wat kost een T-shirt nu eigenlijk?</h1>

      <Leerdoelen>
        Je legt uit welke kosten samen de kostprijs van een kledingstuk vormen, herkent de schakels in de
        waardeketen van grondstof tot winkel, en verklaart hoe een merk toch winst maakt op een T-shirt van
        een paar euro.
      </Leerdoelen>

      <Section title="Kerntheorie">
        <p className="mb-4 text-slate-700">
          Loop je weleens door een winkel en zie je een T-shirt voor €4,99? Dan denk je misschien: hoe kan
          dat nou zo goedkoop? Er zit immers katoen in, iemand heeft het genaaid, het is vervoerd naar
          Nederland en er staat personeel in de winkel. Al die stappen samen vormen de{' '}
          <strong>waardeketen</strong> van een kledingstuk: elke schakel voegt iets toe, en kost geld.
        </p>

        <InfoBox type="definitie" title="Definitie: waardeketen">
          <p>
            De <strong>waardeketen</strong> is de opeenvolging van schakels — van grondstof tot eindproduct
            in de winkel — waarin elke schakel waarde toevoegt aan het product. Bij kleding gaat het
            bijvoorbeeld om: grondstof telen (katoen) → garen spinnen en stof weven → kledingstuk naaien →
            transport → verkoop in de winkel of webshop.
          </p>
        </InfoBox>

        <InfoBox type="definitie" title="Definitie: kostprijs">
          <p>
            De <strong>kostprijs</strong> is het totaal van alle kosten die nodig zijn om één product te
            maken: grondstoffen, arbeid, transport en overige productiekosten samen. De kostprijs is niet
            hetzelfde als de verkoopprijs — daar komen namelijk ook nog marketingkosten, winkelkosten,
            belasting én de winst van het merk bovenop.
          </p>
        </InfoBox>

        <p className="mb-4 text-slate-700">
          Het verschil tussen de verkoopprijs en alle gemaakte kosten noemen we de{' '}
          <strong>winstmarge</strong>: het deel van de verkoopprijs dat het bedrijf overhoudt als winst.
        </p>

        <InfoBox type="definitie" title="Definitie: winstmarge">
          <p>
            De <strong>winstmarge</strong> is het deel van de verkoopprijs dat overblijft als winst, nadat
            alle kosten (kostprijs, marketing, transport, belasting, enzovoort) zijn afgetrokken.
          </p>
        </InfoBox>

        <InfoBox type="verdieping" title="Hoe kan een T-shirt van €5 tóch winstgevend zijn?">
          <p>
            Het antwoord is simpel: grondstof, arbeid en transport vormen vaak maar een klein deel van de
            verkoopprijs. Het grootste deel gaat naar marketing, winkelkosten en belasting — en juist omdat
            fast-fashionmerken zulke gigantische aantallen verkopen, telt een kleine winst per T-shirt op
            tot een enorme totale winst. Dit principe heet <strong>schaalvoordeel</strong>.
          </p>
        </InfoBox>

        <InfoBox type="vwo" title="De Uitdaging: schaalvoordeel (economies of scale)">
          <p>
            Hoe groter de productie, hoe lager de gemiddelde kosten per product — dit heet{' '}
            <strong>schaalvoordeel</strong>. Een merk dat miljoenen T-shirts tegelijk bestelt, betaalt per
            stuk veel minder aan grondstof en fabriekscapaciteit dan een klein merk dat er duizend bestelt.
            Zo kan een wereldwijd fast-fashionmerk een lage verkoopprijs vragen én toch winst maken, terwijl
            een klein duurzaam merk met dezelfde verkoopprijs verlies zou draaien.
          </p>
        </InfoBox>
      </Section>

      <Section title="Praktijk: ontleed de prijs van een T-shirt">
        <p className="mb-4 text-slate-700">
          Schuif hieronder met de verkoopprijs en bekijk hoe de opbouw van die prijs verandert. Let op: hoe
          hoger de prijs, hoe groter (in euro's) elk onderdeel wordt — maar de percentages blijven in dit
          voorbeeld gelijk.
        </p>
        <KostprijsSimulator />
      </Section>

      <VerwerkingsOpdracht
        titel="Opdracht: reken de kostprijsopbouw door"
        werkboekPagina={41}
        instructie="Gebruik de simulator hierboven en beantwoord de volgende vragen in je werkboek."
      >
        <p>1. Zet de simulator op €10. Hoeveel euro gaat er samen naar grondstof, arbeid en transport?</p>
        <p>
          2. Vergelijk dit bedrag met het bedrag dat het merk zelf als winst overhoudt. Wat valt je op?
        </p>
        <p>
          3. Leg in twee tot drie zinnen uit hoe schaalvoordeel ervoor zorgt dat een fast-fashionmerk bij
          een lage verkoopprijs toch winst kan maken.
        </p>
      </VerwerkingsOpdracht>

      <OefenBank lesTitel="4.1" opdrachten={oefenbankLes41} />
    </PageShell>
  )
}
