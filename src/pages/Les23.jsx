import React from 'react'
import PageShell from '../components/PageShell.jsx'
import Section from '../components/Section.jsx'
import Leerdoelen from '../components/Leerdoelen.jsx'
import InfoBox from '../components/InfoBox.jsx'
import VerwerkingsOpdracht from '../components/VerwerkingsOpdracht.jsx'
import OefenBank from '../components/OefenBank.jsx'
import LootboxKansSimulator from '../components/LootboxKansSimulator.jsx'
import oefenbankLes23 from '../data/oefenbankLes23.js'

export default function Les23() {
  return (
    <PageShell>
      <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-blue-700">Les 2.3</p>
      <h1 className="mb-8 text-slate-900">Lootboxes, dark patterns en het kansspelelement in games</h1>

      <Leerdoelen>
        Je legt uit wat dark patterns zijn en hoe lootboxes werken, herkent de gelijkenis met gokken, en
        vormt een onderbouwde mening over de rol van wetgeving hierbij.
      </Leerdoelen>

      <Section title="Kerntheorie">
        <p className="mb-4 text-slate-700">
          Een dark pattern is een bewust ontworpen interface- of spelmechaniek die je gedrag stuurt richting
          een keuze die vooral in het voordeel is van het bedrijf, niet per se van jou — vaak door gebruik
          te maken van psychologische zwakke plekken in plaats van eerlijke overtuiging.
        </p>

        <InfoBox type="definitie" title="Definitie: dark pattern">
          <p>
            Een bewust ontworpen interface- of spelmechaniek die gebruikers stuurt richting keuzes die vooral
            in het voordeel zijn van het bedrijf, vaak door psychologische zwakke plekken (zoals FOMO of
            gokprikkels) uit te buiten.
          </p>
        </InfoBox>

        <InfoBox type="definitie" title="Definitie: lootbox">
          <p>
            Een virtueel "kistje" dat je koopt zonder te weten wat erin zit, met een kleine kans op een
            zeldzaam item. Dit werkt volgens hetzelfde beloningsmechanisme als een gokautomaat (variabele,
            onvoorspelbare beloning).
          </p>
        </InfoBox>

        <InfoBox type="verdieping" title="Andere veelvoorkomende dark patterns">
          <p>
            Naast lootboxes bestaan er meer dark patterns: kunstmatige tijdsdruk ("deze deal verloopt over 2
            uur!"), sociale druk via ranglijsten en cosmetische statussymbolen, en "gratis" dagelijkse
            beloningen die je terug de app in lokken op het moment dat je er bijna mee zou stoppen. Het
            slimme (en riskante) van deze technieken is dat ze meestal niet liegen — er staat nergens een
            onwaarheid — maar wél je brein sturen richting een beslissing die je bij helder nadenken
            misschien niet zou nemen.
          </p>
        </InfoBox>

        <InfoBox type="juridisch" title="Wat zegt de wet? Lootboxes en de Wet op de kansspelen">
          <p>
            In Nederland onderzocht de Kansspelautoriteit (KSA) jarenlang of lootboxes onder de Wet op de
            kansspelen vallen. In 2020 kreeg de KSA in eerste instantie gelijk in een zaak tegen een
            gamebedrijf, maar de Raad van State oordeelde in 2022 dat losse lootboxes niet zomaar apart als
            kansspel beoordeeld mogen worden — het hele spel zou daarvoor als kansspel gekwalificeerd moeten
            worden, wat lastig te bewijzen is. Hierdoor blijven gokachtige lootbox-mechanismen in Nederland
            grotendeels onder de radar van de kansspelwetgeving.
          </p>
          <p className="mt-2">
            Wel greep de Autoriteit Consument &amp; Markt (ACM) al eerder in via een ander spoor: zij
            beboette Epic Games, de maker van Fortnite, voor meer dan een miljoen euro omdat de winkel in het
            spel met valse aftel-timers een kunstmatig gevoel van tijdsdruk creëerde bij (vaak jonge)
            spelers, terwijl het aanbod na het verstrijken van de "deadline" gewoon beschikbaar bleef. Dit
            werd aangemerkt als een agressieve handelspraktijk gericht op kinderen.
          </p>
        </InfoBox>
      </Section>

      <Section title="Praktijk: hoeveel kost een zeldzaam item gemiddeld?">
        <p className="mb-4 text-slate-700">
          Stel een dropkans en een prijs per lootbox in, en "open" een aantal lootboxes om te zien hoeveel
          geld en pogingen dit gemiddeld kost.
        </p>
        <LootboxKansSimulator />
      </Section>

      <VerwerkingsOpdracht
        titel="Opdracht: herken de dark pattern"
        werkboekPagina={23}
        instructie="Denk aan een game of app die jij kent met lootboxes, tijdsdruk-aanbiedingen of ranglijsten."
      >
        <p>1. Beschrijf welke dark pattern(s) je herkent, en hoe deze precies werken.</p>
        <p>
          2. Leg uit waarom een lootbox lijkt op een gokautomaat, en welk risico dit met zich meebrengt,
          vooral voor jongere spelers.
        </p>
        <p>
          3. Bedenk zelf een manier waarop een gamebedrijf hetzelfde spelplezier zou kunnen bieden zonder
          gebruik te maken van een dark pattern.
        </p>
      </VerwerkingsOpdracht>

      <OefenBank lesTitel="2.3" opdrachten={oefenbankLes23} />
    </PageShell>
  )
}
