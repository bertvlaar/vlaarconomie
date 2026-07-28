import React from 'react'
import PageShell from '../components/PageShell.jsx'
import Section from '../components/Section.jsx'
import Leerdoelen from '../components/Leerdoelen.jsx'
import InfoBox from '../components/InfoBox.jsx'
import VerwerkingsOpdracht from '../components/VerwerkingsOpdracht.jsx'
import OefenBank from '../components/OefenBank.jsx'
import oefenbankLes21 from '../data/oefenbankLes21.js'

export default function Les21() {
  return (
    <PageShell>
      <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-blue-700">Les 2.1</p>
      <h1 className="mb-8 text-slate-900">Freemium: gratis instappen, duur eruit stappen</h1>

      <Leerdoelen>
        Je legt uit wat het freemium-verdienmodel inhoudt, herkent waarom een gratis game toch enorm
        winstgevend kan zijn, en beoordeelt welke rol koopmomenten spelen in het ontwerp van een game.
      </Leerdoelen>

      <Section title="Kerntheorie">
        <p className="mb-4 text-slate-700">
          Fortnite, League of Legends en de meeste mobiele games zijn "gratis om te spelen" — je betaalt
          niets om te starten. Toch verdienen de makers van deze games miljarden. Hoe kan dat?
        </p>

        <InfoBox type="definitie" title="Definitie: freemium-verdienmodel">
          <p>
            Een verdienmodel waarbij de basisversie van een product of dienst (hier: de game) gratis is,
            maar geld wordt verdiend aan een klein percentage gebruikers dat betaalt voor extra functies,
            voordelen of virtuele goederen zoals skins, battle passes of in-game valuta.
          </p>
        </InfoBox>

        <InfoBox type="definitie" title="Definitie: whales">
          <p>
            Het kleine percentage spelers van een freemium-game — vaak enkele procenten — dat
            verantwoordelijk is voor het grootste deel van de omzet, door veel geld uit te geven aan
            virtuele goederen.
          </p>
        </InfoBox>

        <InfoBox type="verdieping" title="Waarom gratis spelen economisch slim is">
          <p>
            Dit verdienmodel is economisch slim, omdat het de drempel om te beginnen wegneemt: hoe meer
            mensen gratis spelen, hoe groter de groep potentiële betalers. Het addertje onder het gras: omdat
            de game zelf gratis is, wordt de winst niet gehaald uit de verkoopprijs, maar uit het spelgedrag
            zelf. Dat betekent dat het bedrijf er financieel belang bij heeft dat spelers zo lang en zo vaak
            mogelijk spelen en op zoveel mogelijk momenten een koopmoment tegenkomen.
          </p>
        </InfoBox>

        <InfoBox type="vwo" title="VWO-verdieping: conversieratio">
          <p>
            De <strong>conversieratio</strong> is het percentage gratis spelers dat uiteindelijk overgaat tot
            een betaalde aankoop. Uit onderzoek van gameanalisten blijkt dat dit percentage vaak laag ligt
            (soms slechts enkele procenten). Toch is dit voldoende voor een winstgevend verdienmodel,
            doordat het aantal gratis spelers zo groot is dat zelfs een kleine conversieratio een grote
            groep betalende klanten oplevert.
          </p>
        </InfoBox>
      </Section>

      <VerwerkingsOpdracht
        titel="Opdracht: analyseer een freemium-game"
        werkboekPagina={21}
        instructie="Kies een freemium-game die jij (of iemand die je kent) speelt."
      >
        <p>1. Beschrijf wat gratis is in de game, en wat je alleen krijgt als je betaalt.</p>
        <p>
          2. Noem minstens twee momenten tijdens het spelen waarop je een aankoop wordt aangeboden
          (koopmomenten).
        </p>
        <p>
          3. Leg uit waarom het voor het gamebedrijf financieel voordeliger is dat de game gratis is, in
          plaats van een vaste verkoopprijs van bijvoorbeeld €40 te vragen.
        </p>
      </VerwerkingsOpdracht>

      <OefenBank lesTitel="2.1" opdrachten={oefenbankLes21} />
    </PageShell>
  )
}
