import React from 'react'
import PageShell from '../components/PageShell.jsx'
import Section from '../components/Section.jsx'
import Leerdoelen from '../components/Leerdoelen.jsx'
import InfoBox from '../components/InfoBox.jsx'
import VerwerkingsOpdracht from '../components/VerwerkingsOpdracht.jsx'
import OefenBank from '../components/OefenBank.jsx'
import oefenbankLes24 from '../data/oefenbankLes24.js'

export default function Les24() {
  return (
    <PageShell>
      <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-blue-700">Les 2.4</p>
      <h1 className="mb-8 text-slate-900">Waarom jouw brein hier gevoelig voor is</h1>

      <Leerdoelen>
        Je legt uit hoe consumentenpsychologie inspeelt op koopgedrag in games, herkent de effecten van
        payment pain, FOMO en verliesaversie, en past een concrete strategie toe om weerbaarder te worden
        tegen dark patterns.
      </Leerdoelen>

      <Section title="Kerntheorie">
        <p className="mb-4 text-slate-700">
          In de vorige lessen zag je verschillende trucs: freemium, kunstmatige schaarste, lootboxes. Maar
          waarom werken deze trucs eigenlijk zo goed? Het antwoord ligt in de manier waarop ons brein
          keuzes maakt.
        </p>

        <InfoBox type="definitie" title="Definitie: consumentenpsychologie">
          <p>
            De studie van hoe psychologische factoren zoals emotie, gewoonte, sociale druk en verliesaversie
            het koopgedrag van consumenten beïnvloeden, vaak los van een puur rationele afweging van kosten
            en baten.
          </p>
        </InfoBox>

        <InfoBox type="definitie" title="Definitie: payment pain">
          <p>
            Het onaangename gevoel dat mensen ervaren bij het uitgeven van geld. Door prijzen weer te geven
            in V-Bucks in plaats van euro's, wordt dit gevoel kleiner: je voelt minder weerstand om 1500
            V-Bucks uit te geven dan om €11,99 over te maken, ook al is het exact hetzelfde bedrag.
          </p>
        </InfoBox>

        <InfoBox type="definitie" title="Definitie: FOMO (fear of missing out)">
          <p>
            De angst om een kans, aanbieding of ervaring te missen, die mensen aanzet tot snel en minder
            doordacht handelen — bijvoorbeeld bij een skin die maar 48 uur beschikbaar is.
          </p>
        </InfoBox>

        <InfoBox type="vwo" title="VWO-verdieping: verliesaversie">
          <p>
            <strong>Verliesaversie</strong> is de psychologische neiging om een verlies (of een gemiste kans)
            zwaarder te laten wegen dan een even grote winst. Bij een tijdelijke aanbieding voelt het mislopen
            ervan als een verlies, wat sterker aanzet tot handelen dan het vooruitzicht op een gewone,
            permanent beschikbare aankoop. Gamebedrijven combineren dit vaak met payment pain-verlagende
            virtuele valuta, waardoor beide effecten elkaar versterken.
          </p>
        </InfoBox>

        <InfoBox type="verdieping" title="Hoe je jezelf weerbaarder maakt">
          <p>
            Het goede nieuws: dit gedrag is aan te leren herkennen. Vraag jezelf bij elke in-game aankoop
            drie dingen af: wat kost dit werkelijk in euro's, waarom voel ik nu tijdsdruk of FOMO, en zou ik
            dit ook kopen als ik een dag moest wachten? Die simpele denkstap ontneemt dark patterns het
            grootste deel van hun kracht.
          </p>
        </InfoBox>
      </Section>

      <VerwerkingsOpdracht
        titel="Opdracht: jouw eigen weerbaarheidsplan"
        werkboekPagina={24}
        instructie="Denk terug aan een moment waarop jij (of iemand die je kent) bijna, of daadwerkelijk, een in-game aankoop deed."
      >
        <p>1. Beschrijf de situatie: welke dark pattern(s) speelden hierbij mogelijk een rol?</p>
        <p>
          2. Leg uit welke psychologische effecten (payment pain, FOMO, verliesaversie) je in deze situatie
          herkent.
        </p>
        <p>
          3. Formuleer je eigen "drie-vragen-regel" die je voortaan zou willen gebruiken voordat je een
          in-game aankoop doet.
        </p>
      </VerwerkingsOpdracht>

      <OefenBank lesTitel="2.4" opdrachten={oefenbankLes24} />
    </PageShell>
  )
}
