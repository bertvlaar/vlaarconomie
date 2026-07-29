import React from 'react'
import PageShell from '../components/PageShell.jsx'
import Section from '../components/Section.jsx'
import Leerdoelen from '../components/Leerdoelen.jsx'
import InfoBox from '../components/InfoBox.jsx'
import VerwerkingsOpdracht from '../components/VerwerkingsOpdracht.jsx'
import OefenBank from '../components/OefenBank.jsx'
import PiramideSimulator from '../components/PiramideSimulator.jsx'
import oefenbankLes13 from '../data/oefenbankLes13.js'

export default function Les13() {
  return (
    <PageShell>
      <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-blue-700">Les 1.3</p>
      <h1 className="mb-8 text-slate-900">Reëel investeren versus Ponzi-fraude en piramidespelen</h1>

      <Leerdoelen>
        Je legt het verschil uit tussen een reële investering en een piramidespel, herkent Ponzi-fraude, en
        berekent waarom piramidespelen wiskundig altijd instorten.
      </Leerdoelen>

      <Section title="Kerntheorie">
        <p className="mb-4 text-slate-700">
          Bij een reële investering (bijvoorbeeld aandelen, obligaties of een spaarrekening) verdient jouw
          geld winst omdat het ergens daadwerkelijk productief wordt ingezet: een bedrijf maakt en verkoopt
          producten, of een bank leent je geld uit tegen rente. Er zit een echte economische activiteit
          achter je rendement.
        </p>

        <InfoBox type="definitie" title="Definitie: piramidespel">
          <p>
            Een systeem waarbij deelnemers geld verdienen door nieuwe deelnemers te werven die op hun beurt
            ook weer geld inleggen, in plaats van door een echt product of een echte investering.
          </p>
        </InfoBox>

        <InfoBox type="definitie" title="Definitie: Ponzi-fraude">
          <p>
            Een vorm van fraude (genoemd naar oplichter Charles Ponzi uit de jaren '20) waarbij de
            organisator de "winst" van bestaande deelnemers uitbetaalt met het geld dat nieuwe deelnemers
            inleggen — er wordt nergens echt geïnvesteerd of verdiend.
          </p>
        </InfoBox>

        <InfoBox type="verdieping" title="Waarom deze systemen altijd instorten">
          <p>
            Het wiskundige probleem van beide constructies is hetzelfde: om iedereen uit te betalen heb je
            een oneindig groeiende stroom nieuwe deelnemers nodig. Omdat de wereldbevolking eindig is, stort
            zo'n systeem altijd in — het is nooit de vraag óf, maar wanneer. Historische voorbeelden als de
            crypto-"investeringsplatforms" BitConnect en OneCoin beloofden torenhoge, gegarandeerde
            rendementen en werden achteraf ontmaskerd als miljardenfraude waarbij vooral de laatste
            instappers alles verloren.
          </p>
        </InfoBox>

        <InfoBox type="vwo" title="De Uitdaging: exponentiële groei">
          <p>
            Bij elk niveau van een piramidespel wordt het aantal benodigde nieuwe deelnemers vermenigvuldigd
            in plaats van simpelweg opgeteld. Deze <strong>exponentiële groei</strong> zorgt ervoor dat het
            systeem al na een klein aantal niveaus onhoudbaar wordt: wat in het begin overzichtelijk lijkt
            (jij werft drie mensen, zij werven er ieder drie), groeit binnen een tiental niveaus uit tot een
            aantal dat de bevolking van een heel land overstijgt.
          </p>
        </InfoBox>

        <InfoBox type="juridisch" title="Een concreet voorbeeld: de Grinta Invest-zaak">
          <p>
            In 2024 beboette de AFM twee bekende finfluencers voor in totaal €800.000, omdat zij het
            buitenlandse "Grinta Invest" promootten — een aanbieder die 4% rendement per máánd beloofde. De
            finfluencers verdienden zelf 10% commissie over elk ingelegd bedrag. Grinta Invest is inmiddels
            spoorloos, en de beleggers die instapten zijn hun geld kwijt: een schoolvoorbeeld van hoe
            beloftes die te mooi zijn om waar te zijn, dat ook blijken te zijn.
          </p>
        </InfoBox>
      </Section>

      <Section title="Praktijk: reken een piramidespel door">
        <p className="mb-4 text-slate-700">
          Stel in hoeveel mensen elke deelnemer werft, en hoeveel niveaus het spel doorgaat. Zie hoe snel het
          aantal benodigde deelnemers uit de hand loopt.
        </p>
        <PiramideSimulator />
      </Section>

      <VerwerkingsOpdracht
        titel="Opdracht: herken het piramidespel"
        werkboekPagina={13}
        instructie="Zoek (of bedenk) een voorbeeld van een 'investeringsplatform' of verdienmodel dat lijkt te werken via werving van nieuwe deelnemers."
      >
        <p>1. Beschrijf hoe deelnemers volgens dit systeem geld verdienen.</p>
        <p>
          2. Gebruik de simulator hierboven om te berekenen hoeveel deelnemers er na een aantal niveaus
          nodig zouden zijn.
        </p>
        <p>
          3. Leg uit waarom dit systeem, ondanks eventuele beloftes van "passief inkomen", uiteindelijk moet
          instorten.
        </p>
      </VerwerkingsOpdracht>

      <OefenBank lesTitel="1.3" opdrachten={oefenbankLes13} />
    </PageShell>
  )
}
