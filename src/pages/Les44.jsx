import React from 'react'
import PageShell from '../components/PageShell.jsx'
import Section from '../components/Section.jsx'
import Leerdoelen from '../components/Leerdoelen.jsx'
import InfoBox from '../components/InfoBox.jsx'
import VerwerkingsOpdracht from '../components/VerwerkingsOpdracht.jsx'
import OefenBank from '../components/OefenBank.jsx'
import HuurVsKopenSimulator from '../components/HuurVsKopenSimulator.jsx'
import oefenbankLes44 from '../data/oefenbankLes44.js'

export default function Les44() {
  return (
    <PageShell>
      <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-blue-700">Les 4.4</p>
      <h1 className="mb-8 text-slate-900">De kledingkast van de toekomst: circulaire economie in de mode</h1>

      <Leerdoelen>
        Je legt uit wat een circulaire economie in de mode inhoudt, herkent verdienmodellen zoals
        kledingverhuur en reparatie, en weegt de kosten en baten van kleding huren tegenover kleding kopen
        tegen elkaar af.
      </Leerdoelen>

      <Section title="Kerntheorie">
        <p className="mb-4 text-slate-700">
          In de vorige lessen zag je hoe fast fashion en greenwashing werken. Maar er ontstaan ook nieuwe
          verdienmodellen die inspelen op de vraag naar minder verspilling: kleding huren in plaats van
          kopen, laten repareren in plaats van weggooien, of textiel recyclen tot nieuwe grondstof. Samen
          vormen deze modellen de <strong>circulaire economie</strong> in de mode.
        </p>

        <InfoBox type="definitie" title="Definitie: circulaire economie (in de mode)">
          <p>
            Een <strong>circulaire economie</strong> in de mode is een model waarin grondstoffen en
            kledingstukken zo lang mogelijk in de kringloop blijven — via reparatie, hergebruik, verhuur en
            recycling — in plaats van na kort gebruik als afval te eindigen.
          </p>
        </InfoBox>

        <InfoBox type="definitie" title="Definitie: kledingverhuur (leasen)">
          <p>
            Bij <strong>kledingverhuur</strong> betaalt een consument periodiek (bijvoorbeeld per maand) voor
            het gebruik van kleding, zonder eigenaar te worden. Het bedrijf blijft eigenaar van het
            kledingstuk en kan het na inlevering opnieuw verhuren aan een andere klant.
          </p>
        </InfoBox>

        <InfoBox type="definitie" title="Definitie: reparatie-economie">
          <p>
            De <strong>reparatie-economie</strong> draait om het herstellen van kledingstukken (bijvoorbeeld
            een kapotte rits of naad) in plaats van ze weg te gooien, waardoor de levensduur van het
            kledingstuk verlengd wordt en er minder nieuwe grondstoffen nodig zijn.
          </p>
        </InfoBox>

        <InfoBox type="verdieping" title="Een ander soort verdienmodel">
          <p>
            Fast fashion verdient aan het zo vaak mogelijk verkopen van nieuwe kleding. Een
            kledingverhuurbedrijf verdient juist aan het zo vaak mogelijk hérgebruiken van hetzelfde
            kledingstuk: hoe langer een kledingstuk meegaat en hoe vaker het opnieuw verhuurd wordt, hoe
            hoger de totale opbrengst per kledingstuk voor het bedrijf.
          </p>
        </InfoBox>

        <InfoBox type="vwo" title="VWO-verdieping: het rebound-effect">
          <p>
            Circulaire modellen klinken altijd duurzamer, maar dat is niet vanzelfsprekend. Als een goedkoop
            kledingabonnement mensen juist aanmoedigt om vaker van outfit te wisselen dan voorheen, kan de
            totale hoeveelheid geproduceerde en getransporteerde kleding alsnog toenemen. Dit heet het{' '}
            <strong>rebound-effect</strong>: een op zichzelf gunstige maatregel leidt, door veranderd
            gedrag, alsnog tot een hoger totaalgebruik.
          </p>
        </InfoBox>
      </Section>

      <Section title="Praktijk: huren of kopen?">
        <p className="mb-4 text-slate-700">
          Vergelijk de totale kosten van steeds nieuwe kleding kopen met een kledingabonnement. Speel met de
          schuifjes en ontdek bij welk koopgedrag huren voordeliger wordt.
        </p>
        <HuurVsKopenSimulator />
      </Section>

      <VerwerkingsOpdracht
        titel="Opdracht: ontwerp jouw circulaire kledingkeuze"
        werkboekPagina={44}
        instructie="Gebruik de simulator hierboven om twee verschillende scenario's te vergelijken."
      >
        <p>
          1. Stel de simulator zo in dat kopen voordeliger is. Noteer de instellingen en het verschil in
          euro's.
        </p>
        <p>
          2. Stel de simulator nu zo in dat huren voordeliger is. Noteer opnieuw de instellingen en het
          verschil.
        </p>
        <p>
          3. Leg uit bij wat voor consumptiepatroon (veel of weinig nieuwe kleding per maand) een abonnement
          financieel het meeste voordeel oplevert, en waarom dit ook beter is voor het milieu.
        </p>
      </VerwerkingsOpdracht>

      <OefenBank lesTitel="4.4" opdrachten={oefenbankLes44} />
    </PageShell>
  )
}
