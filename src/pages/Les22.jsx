import React from 'react'
import PageShell from '../components/PageShell.jsx'
import Section from '../components/Section.jsx'
import Leerdoelen from '../components/Leerdoelen.jsx'
import InfoBox from '../components/InfoBox.jsx'
import VerwerkingsOpdracht from '../components/VerwerkingsOpdracht.jsx'
import OefenBank from '../components/OefenBank.jsx'
import RekenOpdracht from '../components/RekenOpdracht.jsx'
import VirtueleValutaSimulator from '../components/VirtueleValutaSimulator.jsx'
import oefenbankLes22 from '../data/oefenbankLes22.js'
import rekenLes22 from '../data/rekenLes22.js'

export default function Les22() {
  return (
    <PageShell>
      <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-blue-700">Les 2.2</p>
      <h1 className="mb-8 text-slate-900">
        Digitale schaarste: waarom een skin 'zeldzaam' is terwijl hij oneindig kopieerbaar is
      </h1>

      <Leerdoelen>
        Je legt uit wat kunstmatige schaarste in digitale werelden inhoudt, herkent hoe virtuele economieën
        werken, en berekent hoe virtuele valuta de werkelijke prijs van een item verhullen.
      </Leerdoelen>

      <Section title="Kerntheorie">
        <p className="mb-4 text-slate-700">
          In de "echte" economie ontstaat schaarste vaak vanzelf: er is maar een beperkte hoeveelheid goud,
          land of tijd. Bij een digitale skin is dat compleet anders — een gamebedrijf kan met één druk op
          de knop letterlijk oneindig veel exemplaren van hetzelfde "zeldzame" item aanmaken.
        </p>

        <InfoBox type="definitie" title="Definitie: kunstmatige schaarste">
          <p>
            Bewust gecreëerde beperking van de beschikbaarheid van een digitaal item (bijvoorbeeld qua tijd
            of aantal), terwijl het technisch gezien oneindig gekopieerd zou kunnen worden. Deze schaarste
            bestaat alleen omdat de ontwikkelaar ervoor kiest.
          </p>
        </InfoBox>

        <InfoBox type="definitie" title="Definitie: virtuele economie">
          <p>
            Een systeem van digitale goederen, valuta, handel en waarde binnen een game of platform, dat qua
            werking sterk lijkt op een echte economie, maar volledig door de ontwikkelaar wordt
            gecontroleerd. Denk aan de markt voor CS:GO-wapenskins, waar spelers items met echt geld kopen,
            verkopen en ruilen alsof het verhandelbare goederen zijn.
          </p>
        </InfoBox>

        <InfoBox type="verdieping" title="Waarom kunstmatige schaarste toch werkt">
          <p>
            Spelers behandelen de virtuele economie van een game als een echte markt: er ontstaan rangordes
            ("legendary", "mythic", "limited edition"), en spelers ervaren evenveel status- en
            bezitsgevoel bij een digitaal item als bij een fysiek collector's item. Door items slechts
            "tijdelijk verkrijgbaar" te maken, simuleren ontwikkelaars dezelfde schaarste-dynamiek als bij
            een beperkte oplage sneakers: niet omdat het item moeilijk te maken is, maar omdat kunstmatige
            schaarste de vraag en dus de betalingsbereidheid opdrijft.
          </p>
        </InfoBox>

        <InfoBox type="vwo" title="De Uitdaging: marginale kosten van een digitaal goed">
          <p>
            De <strong>marginale kosten</strong> van een digitaal goed — de kosten van het maken van één
            extra exemplaar — zijn voor de ontwikkelaar vrijwel nul, ongeacht hoe zeldzaam het item wordt
            gepresenteerd. Dit betekent dat, na de eenmalige ontwikkelkosten van een skin, vrijwel de
            volledige verkoopprijs van elk extra verkocht exemplaar winst is.
          </p>
        </InfoBox>
      </Section>

      <Section title="Praktijk: de werkelijke prijs achter virtuele valuta">
        <p className="mb-4 text-slate-700">
          Veel games rekenen niet in euro's, maar in een eigen munt (zoals V-Bucks, Robux of "Gems"). Speel
          met de simulator en ontdek hoeveel een item écht kost in euro's, en hoeveel virtuele valuta er
          vaak ongebruikt overblijft.
        </p>
        <VirtueleValutaSimulator />
      </Section>

      <Section title="Praktijk: reken de werkelijke prijzen door">
        <div className="space-y-4">
          {rekenLes22.map((r) => (
            <RekenOpdracht key={r.nummer} {...r} />
          ))}
        </div>
      </Section>

      <VerwerkingsOpdracht
        titel="Opdracht: schaarste ontleden"
        werkboekPagina={22}
        instructie="Zoek een voorbeeld van een 'zeldzaam' of 'limited edition' item uit een game die jij kent (of vraag het aan iemand die games speelt)."
      >
        <p>1. Beschrijf waarom dit item als zeldzaam wordt gepresenteerd.</p>
        <p>
          2. Leg uit waarom deze schaarste, economisch gezien, kunstmatig is en niet natuurlijk zoals bij
          grondstoffen.
        </p>
        <p>
          3. Zou jij, wetende dat het item eigenlijk oneindig kopieerbaar is, hier nog steeds geld aan
          uitgeven? Onderbouw je antwoord.
        </p>
      </VerwerkingsOpdracht>

      <OefenBank lesTitel="2.2" opdrachten={oefenbankLes22} />
    </PageShell>
  )
}
