import React from 'react'
import PageShell from '../components/PageShell.jsx'
import Section from '../components/Section.jsx'
import Leerdoelen from '../components/Leerdoelen.jsx'
import InfoBox from '../components/InfoBox.jsx'
import VerwerkingsOpdracht from '../components/VerwerkingsOpdracht.jsx'

import OefenBank from '../components/OefenBank.jsx'
import HergebruikImpactSimulator from '../components/HergebruikImpactSimulator.jsx'
import oefenbankLes82 from '../data/oefenbankLes82.js'

export default function Les82() {
  return (
    <PageShell>
      <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-blue-700">Les 8.2</p>
      <h1 className="mb-8 text-slate-900">Van fast fashion naar circulaire economie</h1>

      <Leerdoelen>
        Je legt uit wat het verschil is tussen een lineaire en een circulaire economie, en beoordeelt
        hoe tweedehandshandel bijdraagt aan het verminderen van de afvalberg die fast fashion
        veroorzaakt.
      </Leerdoelen>

      <Section title="Kerntheorie">
        <p className="mb-4 text-slate-700">
          Veel kledingmerken werken volgens het model van <strong>fast fashion</strong>: kleding wordt
          snel, goedkoop en in grote hoeveelheden geproduceerd, en is ontworpen om maar kort gedragen te
          worden voordat alweer een nieuwe collectie in de winkel ligt. Dit past bij wat economen een{' '}
          <strong>lineaire economie</strong> noemen: grondstoffen worden gewonnen, verwerkt tot een
          product, gebruikt, en daarna weggegooid.
        </p>

        <InfoBox type="definitie" title="Definitie: lineaire economie">
          <p>
            Een <strong>lineaire economie</strong> is een economisch model waarin grondstoffen worden
            gewonnen, verwerkt tot een product, gebruikt en daarna weggegooid, zonder dat het product of
            de grondstoffen worden hergebruikt.
          </p>
        </InfoBox>

        <InfoBox type="definitie" title="Definitie: circulaire economie">
          <p>
            Een <strong>circulaire economie</strong> is een economisch model waarin grondstoffen en
            producten zo lang mogelijk in de kringloop blijven door hergebruik, reparatie en recycling,
            in plaats van na één gebruiksfase te worden weggegooid.
          </p>
        </InfoBox>

        <p className="mb-4 text-slate-700">
          Tweedehandsplatforms zoals Vinted en Marktplaats passen precies in deze omslag: een
          kledingstuk dat anders bij het afval terecht zou komen, krijgt een tweede (of derde) leven bij
          een nieuwe eigenaar. Zo hoeft er voor die vraag geen nieuw kledingstuk geproduceerd te worden,
          wat grondstoffen, water en energie bespaart.
        </p>

        <InfoBox type="verdieping" title="Verdieping: de afvalberg van fast fashion">
          <p>
            Doordat fast fashion goedkoop is en snel wisselt van collectie, kopen consumenten gemiddeld
            vaker nieuwe kleding en dragen ze kledingstukken korter. Het gevolg is een groeiende
            afvalberg van kleding die nog prima bruikbaar zou zijn, maar toch wordt weggegooid in plaats
            van hergebruikt.
          </p>
        </InfoBox>

        <InfoBox type="vwo" title="De Uitdaging: het rebound-effect">
          <p>
            Tweedehandshandel is niet automatisch een volledige oplossing. Doordat tweedehands kleding
            goedkoper is, kan het ook verleiden tot méér kopen dan wanneer alles nieuw en duur zou zijn.
            Dit noemen economen het <strong>rebound-effect</strong>: het verschijnsel dat een besparing
            (in geld of grondstoffen) er soms toe leidt dat mensen juist meer gaan consumeren, waardoor
            het beoogde milieuvoordeel deels teniet wordt gedaan.
          </p>
        </InfoBox>
      </Section>

      <Section title="Praktijk" eyebrow="Interactieve simulator">
        <p className="mb-4 text-slate-700">
          Speel met het aantal kledingstukken dat tweedehands gekocht wordt, de gemiddelde
          tweedehandsprijs, en het rebound-effect, en bekijk wat dit betekent voor de portemonnee en de
          CO2-uitstoot.
        </p>
        <HergebruikImpactSimulator />
      </Section>

      <VerwerkingsOpdracht
        titel="Opdracht: weeg de duurzaamheidswinst van tweedehands kleding af"
        werkboekPagina="9"
        instructie="Voer onderstaande stappen uit en noteer je berekeningen en conclusie."
      >
        <ol className="list-decimal space-y-2 pl-5">
          <li>
            Leg in je eigen woorden uit wat het verschil is tussen een <strong>lineaire</strong> en een{' '}
            <strong>circulaire economie</strong>.
          </li>
          <li>
            Gebruik de simulator: stel het aantal kledingstukken in op 15 en de tweedehandsprijs op 40%
            van de nieuwprijs. Zet daarna het rebound-effect aan. Noteer het verschil in CO2-besparing.
          </li>
          <li>
            Leg uit hoe het <strong>rebound-effect</strong> ervoor kan zorgen dat tweedehandshandel
            minder milieuwinst oplevert dan op het eerste gezicht lijkt.
          </li>
        </ol>
      </VerwerkingsOpdracht>

      <OefenBank lesTitel="Les 8.2" opdrachten={oefenbankLes82} />
    </PageShell>
  )
}
