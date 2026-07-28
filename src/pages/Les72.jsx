import React from 'react'
import PageShell from '../components/PageShell.jsx'
import Section from '../components/Section.jsx'
import Leerdoelen from '../components/Leerdoelen.jsx'
import InfoBox from '../components/InfoBox.jsx'
import VerwerkingsOpdracht from '../components/VerwerkingsOpdracht.jsx'

import OefenBank from '../components/OefenBank.jsx'
import RekenOpdracht from '../components/RekenOpdracht.jsx'
import oefenbankLes72 from '../data/oefenbankLes72.js'
import rekenLes72 from '../data/rekenLes72.js'

export default function Les72() {
  return (
    <PageShell>
      <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-blue-700">Les 7.2</p>
      <h1 className="mb-8 text-slate-900">Prijselasticiteit van de vraag: hoe gevoelig zijn bezoekers voor prijs?</h1>

      <Leerdoelen>
        Je legt uit wat de prijselasticiteit van de vraag is, berekent deze bij een gegeven prijs- en
        vraagverandering, en beoordeelt of de vraag elastisch of inelastisch is.
      </Leerdoelen>

      <Section title="Kerntheorie">
        <p className="mb-4 text-slate-700">
          Niet elke consument reageert even sterk op een prijsverandering. Sommige bezoekers blijven bijna
          altijd komen, ook als een kaartje duurder wordt; anderen haken meteen af zodra de prijs iets stijgt.
          Om dit gedrag te meten, gebruiken economen de <strong>prijselasticiteit van de vraag</strong>.
        </p>

        <InfoBox type="definitie" title="Definitie: prijselasticiteit van de vraag">
          <p>
            De <strong>prijselasticiteit van de vraag</strong> meet hoe sterk de gevraagde hoeveelheid van een
            product verandert als reactie op een prijsverandering. De formule is:
          </p>
          <p className="mt-2 font-mono text-sm text-slate-800">
            Prijselasticiteit = procentuele verandering in gevraagde hoeveelheid ÷ procentuele verandering in prijs
          </p>
          <p className="mt-2">
            Omdat een prijsstijging normaal gesproken tot een daling in de vraag leidt, is de uitkomst meestal
            negatief.
          </p>
        </InfoBox>

        <InfoBox type="verdieping" title="Verdieping: elastisch of inelastisch?">
          <p>
            Is de uitkomst (in absolute waarde) <strong>groter dan 1</strong>, dan spreken we van een{' '}
            <strong>elastische vraag</strong>: de gevraagde hoeveelheid reageert relatief sterk op een
            prijsverandering. Is de uitkomst <strong>kleiner dan 1</strong>, dan is de vraag{' '}
            <strong>inelastisch</strong>: bezoekers blijven relatief trouw komen, ook al stijgt de prijs.
          </p>
        </InfoBox>

        <p className="mb-4 text-slate-700">
          Pretpark "Fantasialand" heeft een maximale capaciteit van 20.000 bezoekers per dag. Bij de vaste
          prijs van €40 zou de vraag op een zonnige zomerzaterdag oplopen tot 25.000 bezoekers — 5.000 méér
          dan het park aankan. Om dit te voorkomen verhoogt het park de prijs op zulke piekdagen naar €50 per
          kaartje, een stijging van 25%. Door deze prijsverhoging daalt de vraag van 25.000 naar precies
          20.000 bezoekers: een daling van 5.000 ÷ 25.000 = 20%. De prijselasticiteit van de vraag is dan:
          −20% ÷ 25% = −0,8.
        </p>

        <InfoBox type="verdieping" title="Verdieping: wie is elastisch, wie inelastisch?">
          <p>
            Bij pretparken is de vraag vaak relatief <strong>inelastisch</strong> voor bezoekers die hun
            dagje al lang van tevoren hebben gepland (bijvoorbeeld rond een verjaardag of de enige vrije
            zaterdag in de vakantie): zij komen toch wel, ook bij een hogere prijs. Voor spontane,
            weersafhankelijke bezoekers is de vraag juist <strong>elastischer</strong>: zij haken bij een
            hogere prijs sneller af, of wachten op een goedkopere dag.
          </p>
        </InfoBox>

        <InfoBox type="vwo" title="VWO-Challenge: unitaire elasticiteit">
          <p>
            Is de absolute waarde van de prijselasticiteit precies <strong>1</strong>, dan spreken we van{' '}
            <strong>unitaire elasticiteit</strong>: de gevraagde hoeveelheid daalt (of stijgt) procentueel
            exact even hard als de prijs verandert. In dat specifieke geval blijft de totale omzet (prijs ×
            hoeveelheid) precies gelijk bij een prijsverandering, terwijl deze bij een elastische vraag daalt
            en bij een inelastische vraag stijgt wanneer de prijs omhooggaat.
          </p>
        </InfoBox>
      </Section>

      <Section title="Praktijk" eyebrow="Reken zelf de elasticiteit uit">
        <p className="mb-4 text-slate-700">
          Oefen met het berekenen van procentuele veranderingen en de prijselasticiteit van de vraag, aan de
          hand van het Fantasialand-voorbeeld.
        </p>
        <div className="grid gap-4 md:grid-cols-2">
          {rekenLes72.map((r) => (
            <RekenOpdracht key={r.nummer} {...r} />
          ))}
        </div>
      </Section>

      <VerwerkingsOpdracht
        titel="Opdracht: bereken en interpreteer de prijselasticiteit"
        werkboekPagina="9"
        instructie="Voer onderstaande stappen uit en noteer je berekeningen en conclusie."
      >
        <ol className="list-decimal space-y-2 pl-5">
          <li>
            Leg in je eigen woorden uit wat de <strong>prijselasticiteit van de vraag</strong> meet, en
            waarom de uitkomst meestal negatief is.
          </li>
          <li>
            Bereken de prijselasticiteit van de vraag als de prijs met 10% stijgt en de vraag met 4% daalt.
            Is deze vraag elastisch of inelastisch?
          </li>
          <li>
            Geef een voorbeeld van een product waarvan jij denkt dat de vraag sterk elastisch is, en een
            voorbeeld waarvan je denkt dat de vraag sterk inelastisch is. Onderbouw beide keuzes.
          </li>
        </ol>
      </VerwerkingsOpdracht>

      <OefenBank lesTitel="Les 7.2" opdrachten={oefenbankLes72} />
    </PageShell>
  )
}
