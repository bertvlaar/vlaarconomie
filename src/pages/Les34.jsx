import React from 'react'
import PageShell from '../components/PageShell.jsx'
import Section from '../components/Section.jsx'
import Leerdoelen from '../components/Leerdoelen.jsx'
import InfoBox from '../components/InfoBox.jsx'
import VerwerkingsOpdracht from '../components/VerwerkingsOpdracht.jsx'
import OefenBank from '../components/OefenBank.jsx'
import RekenOpdracht from '../components/RekenOpdracht.jsx'
import AbonnementenOverzichtSimulator from '../components/AbonnementenOverzichtSimulator.jsx'
import oefenbankLes34 from '../data/oefenbankLes34.js'
import rekenLes34 from '../data/rekenLes34.js'

export default function Les34() {
  return (
    <PageShell>
      <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-blue-700">Les 3.4</p>
      <h1 className="mb-8 text-slate-900">Slim kiezen: bundelen, prijsstijgingen en je abonnementenoverzicht</h1>

      <Leerdoelen>
        Je legt uit wat bundelen en drip pricing zijn, berekent de totale jaarlasten van meerdere
        abonnementen, en beoordeelt kritisch welke abonnementen de moeite waard zijn.
      </Leerdoelen>

      <Section title="Kerntheorie">
        <p className="mb-4 text-slate-700">
          In de vorige lessen zag je hoe bedrijven verdienen aan abonnementen en waarom opzeggen zo lastig
          gemaakt wordt. In deze laatste les kijk je naar twee andere trucs — bundelen en prijsstijgingen —
          en leer je hoe je zelf grip houdt op je abonnementenlasten.
        </p>

        <InfoBox type="definitie" title="Definitie: bundelen (bundling)">
          <p>
            Het combineren van meerdere diensten of producten in één (vaak voordeliger ogend) pakket tegen
            een gezamenlijke prijs, bijvoorbeeld streaming + muziek + cloudopslag in één abonnement.
          </p>
        </InfoBox>

        <InfoBox type="definitie" title="Definitie: drip pricing (prijsstijging na aanmelding)">
          <p>
            Het verschijnsel waarbij een abonnement start tegen een lage introductieprijs, die na verloop
            van tijd stilzwijgend wordt verhoogd naar de normale, hogere prijs.
          </p>
        </InfoBox>

        <InfoBox type="verdieping" title="Waarom bundelen niet altijd voordeliger is">
          <p>
            Bundelen lijkt voordelig, maar houdt klanten ook langer vast: je moet vaak het hele pakket
            opzeggen in plaats van alleen de dienst die je niet meer gebruikt. Bovendien betaal je binnen
            een bundel soms voor onderdelen die je nauwelijks gebruikt, wat de werkelijke besparing kleiner
            maakt dan het lijkt.
          </p>
        </InfoBox>

        <InfoBox type="vwo" title="De Uitdaging: verzonken kosten (sunk cost)">
          <p>
            Mensen redeneren soms: "ik betaal al zo lang voor dit abonnement, dan kan ik nu niet meer
            stoppen." Dit is een denkfout: de reeds gemaakte kosten (<strong>verzonken kosten</strong>)
            zouden geen invloed moeten hebben op de beslissing om door te gaan of te stoppen. Alleen de
            toekomstige kosten en baten van het abonnement zijn relevant voor een goede beslissing.
          </p>
        </InfoBox>
      </Section>

      <Section title="Praktijk: wat kosten al jouw abonnementen samen?">
        <p className="mb-4 text-slate-700">
          Vink hieronder aan welke abonnementen jij (of je gezin) hebt lopen, en bekijk hoeveel dit samen
          kost per maand en per jaar.
        </p>
        <AbonnementenOverzichtSimulator />
      </Section>

      <Section title="Praktijk: reken bundelen en prijsstijgingen door">
        <div className="space-y-4">
          {rekenLes34.map((r) => (
            <RekenOpdracht key={r.nummer} {...r} />
          ))}
        </div>
      </Section>

      <VerwerkingsOpdracht
        titel="Opdracht: maak je eigen abonnementenoverzicht"
        werkboekPagina={34}
        instructie="Gebruik de simulator hierboven, of vraag thuis na welke abonnementen er lopen."
      >
        <p>1. Maak een lijst van alle abonnementen (van jou of je gezin) met hun maandbedrag.</p>
        <p>2. Bereken het totaalbedrag per maand en per jaar.</p>
        <p>
          3. Kies één abonnement uit de lijst en beoordeel eerlijk: wordt dit genoeg gebruikt om de prijs
          waard te zijn? Onderbouw je antwoord.
        </p>
      </VerwerkingsOpdracht>

      <OefenBank lesTitel="3.4" opdrachten={oefenbankLes34} />
    </PageShell>
  )
}
