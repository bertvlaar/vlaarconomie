import React from 'react'
import PageShell from '../components/PageShell.jsx'
import Section from '../components/Section.jsx'
import Leerdoelen from '../components/Leerdoelen.jsx'
import InfoBox from '../components/InfoBox.jsx'
import VerwerkingsOpdracht from '../components/VerwerkingsOpdracht.jsx'

import OefenBank from '../components/OefenBank.jsx'
import GasprijsSchokSimulator from '../components/GasprijsSchokSimulator.jsx'
import oefenbankLes102 from '../data/oefenbankLes102.js'

export default function Les102() {
  return (
    <PageShell>
      <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-blue-700">Les 10.2</p>
      <h1 className="mb-8 text-slate-900">Van geopolitiek conflict tot jouw energierekening</h1>

      <Leerdoelen>
        Je legt uit wat geopolitieke invloed en macro-economische schokken zijn, en berekent wat een
        gasprijsschok een huishouden daadwerkelijk kost.
      </Leerdoelen>

      <Section title="Kerntheorie">
        <p className="mb-4 text-slate-700">
          <strong>Geopolitieke invloed</strong> betekent dat politieke gebeurtenissen tussen landen —
          zoals oorlogen, sancties of handelsconflicten — economische gevolgen hebben, ook voor landen
          die zelf niet bij het conflict betrokken zijn. Wanneer een groot gasproducerend land
          bijvoorbeeld zijn leveringen aan Europa stopzet vanwege een conflict, daalt het wereldwijde
          aanbod van gas drastisch, terwijl de vraag in de verwarmde en verlichte huizen van Europa
          gelijk blijft. Het gevolg: de prijs op de internationale gasmarkt schiet omhoog.
        </p>

        <InfoBox type="definitie" title="Definitie: geopolitieke invloed">
          <p>
            <strong>Geopolitieke invloed</strong> is de invloed die politieke gebeurtenissen tussen
            landen hebben op economische zaken zoals prijzen en handelsstromen, ook in landen die zelf
            niet rechtstreeks bij het conflict betrokken zijn.
          </p>
        </InfoBox>

        <InfoBox type="definitie" title="Definitie: macro-economische schokken">
          <p>
            Zo'n plotselinge, van buitenaf komende gebeurtenis die de hele economie tegelijk raakt,
            noemen economen een <strong>macro-economische schok</strong>: een onverwachte verandering
            die niet ontstaat door het gedrag van één huishouden of bedrijf, maar door een gebeurtenis
            die de gehele markt of economie beïnvloedt.
          </p>
        </InfoBox>

        <InfoBox type="verdieping" title="Verdieping: hoe de schok bij jou thuiskomt">
          <p>
            Een gasprijsschok werkt door via energiebedrijven, die hun inkoopprijs op de wereldmarkt
            direct doorberekenen aan huishoudens en bedrijven, ongeacht of die huishoudens zelf iets aan
            hun verbruik hebben veranderd. Familie De Vries verbruikt 1.200 m³ gas per jaar en betaalde
            vóór de crisis € 0,90 per m³, dus 1.200 × € 0,90 = € 1.080 per jaar. Na het conflict stijgt
            de prijs naar € 2,40 per m³: 1.200 × € 2,40 = € 2.880 per jaar. Enkel en alleen door deze
            macro-economische schok betaalt de familie € 2.880 − € 1.080 = € 1.800 méér per jaar, zonder
            dat hun eigen leven ook maar iets is veranderd.
          </p>
        </InfoBox>

        <InfoBox type="vwo" title="De Uitdaging: doorwerking in de bredere economie">
          <p>
            Een gasprijsschok blijft zelden beperkt tot de energierekening alleen. Hogere energiekosten
            voor bedrijven werken door in de prijzen van andere producten (inflatie), en huishoudens die
            meer aan energie kwijt zijn, houden minder over voor andere uitgaven — wat weer gevolgen kan
            hebben voor de omzet van andere bedrijven. Zo kan één geopolitiek conflict, via de energieprijs,
            uiteindelijk de hele economie raken.
          </p>
        </InfoBox>
      </Section>

      <Section title="Praktijk" eyebrow="Interactieve simulator">
        <p className="mb-4 text-slate-700">
          Speel met het jaarverbruik, de wereldmarktprijs na een schok en het aandeel zelfopgewekte
          zonne-energie, en zie direct wat dit betekent voor de jaarrekening van een huishouden.
        </p>
        <GasprijsSchokSimulator />
      </Section>

      <VerwerkingsOpdracht
        titel="Opdracht: reken de gevolgen van een prijsschok door"
        werkboekPagina="9"
        instructie="Voer onderstaande stappen uit en noteer je berekeningen en conclusie."
      >
        <ol className="list-decimal space-y-2 pl-5">
          <li>
            Leg in je eigen woorden uit hoe een <strong>geopolitiek conflict</strong> kan leiden tot een{' '}
            <strong>macro-economische schok</strong> in de gasprijs.
          </li>
          <li>
            Gebruik de simulator: stel het jaarverbruik in op 1.200 m³ en de prijs na de schok op €2,40.
            Verhoog daarna het aandeel zonnepanelen van 0% naar 33%. Noteer het verschil in euro's.
          </li>
          <li>
            Leg uit waarom deze schok voor sommige huishoudens veel zwaarder aankomt dan voor andere,
            ook al is de prijsstijging voor iedereen hetzelfde.
          </li>
        </ol>
      </VerwerkingsOpdracht>

      <OefenBank lesTitel="Les 10.2" opdrachten={oefenbankLes102} />
    </PageShell>
  )
}
