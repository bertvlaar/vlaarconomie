import React from 'react'
import PageShell from '../components/PageShell.jsx'
import Section from '../components/Section.jsx'
import Leerdoelen from '../components/Leerdoelen.jsx'
import InfoBox from '../components/InfoBox.jsx'
import VerwerkingsOpdracht from '../components/VerwerkingsOpdracht.jsx'
import OefenBank from '../components/OefenBank.jsx'
import RekenOpdracht from '../components/RekenOpdracht.jsx'
import CLVSimulator from '../components/CLVSimulator.jsx'
import oefenbankLes31 from '../data/oefenbankLes31.js'
import rekenLes31 from '../data/rekenLes31.js'

export default function Les31() {
  return (
    <PageShell>
      <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-blue-700">Les 3.1</p>
      <h1 className="mb-8 text-slate-900">Van bezitten naar gebruiken: het abonnementenmodel</h1>

      <Leerdoelen>
        Je legt uit wat de verschuiving van eigendom naar gebruik inhoudt, herkent waarom terugkerende
        omzet zo waardevol is voor bedrijven, en berekent de Customer Lifetime Value van een abonnee.
      </Leerdoelen>

      <Section title="Kerntheorie">
        <p className="mb-4 text-slate-700">
          Vroeger kocht je een cd, een dvd of een telefoon en was hij van jou. Tegenwoordig stream je muziek
          via Spotify, kijk je series via Netflix en lease je misschien je telefoon in plaats van hem te
          kopen. Deze verschuiving heet <strong>van eigendom naar gebruik</strong>: je betaalt niet meer voor
          het bezit van een product, maar voor toegang zolang je blijft betalen.
        </p>

        <InfoBox type="definitie" title="Definitie: van eigendom naar gebruik">
          <p>
            De economische verschuiving waarbij consumenten steeds vaker betalen voor tijdelijke toegang tot
            een product of dienst, zolang ze blijven betalen, in plaats van het product blijvend in eigendom
            te verkrijgen. Zodra je stopt met betalen, ben je de toegang kwijt.
          </p>
        </InfoBox>

        <InfoBox type="definitie" title="Definitie: terugkerende kasstromen (recurring revenue)">
          <p>
            Inkomsten die een bedrijf automatisch en herhaaldelijk (bijvoorbeeld maandelijks) ontvangt van
            dezelfde klant, zonder dat deze er telkens actief opnieuw voor hoeft te kiezen. Dit maakt de
            omzet van een bedrijf voorspelbaar en stabiel.
          </p>
        </InfoBox>

        <InfoBox type="definitie" title="Definitie: vaste lasten">
          <p>
            Kosten die periodiek terugkeren en grotendeels onafhankelijk zijn van hoeveel een product of
            dienst daadwerkelijk wordt gebruikt. Vaste lasten (zoals huur, verzekeringen én abonnementen)
            verkleinen structureel het beschikbare budget, ook in maanden dat je een dienst amper gebruikt.
          </p>
        </InfoBox>

        <InfoBox type="verdieping" title="Waarom bedrijven dol zijn op abonnementen">
          <p>
            Vergelijk twee verdienmodellen: een winkel die eenmalig een broek verkoopt voor €40, versus een
            streamingdienst die €10 per maand incasseert. Na vier maanden heeft de streamingdienst evenveel
            verdiend, maar blijft daarna maand na maand geld binnenkomen van dezelfde klant — zonder dat er
            iets extra's hoeft te worden geproduceerd of verkocht. Daarom sturen bedrijven op twee dingen:
            zoveel mogelijk nieuwe abonnees werven, én bestaande abonnees zo lang mogelijk vasthouden.
          </p>
        </InfoBox>

        <InfoBox type="vwo" title="De Uitdaging: Customer Lifetime Value (CLV)">
          <p>
            De <strong>Customer Lifetime Value (CLV)</strong> is de totale waarde die een gemiddelde klant
            gedurende de hele periode dat hij of zij abonnee is, oplevert aan een bedrijf. Een eenvoudige
            berekening: CLV = maandprijs × gemiddelde abonnementsduur in maanden. De gemiddelde
            abonnementsduur hangt weer samen met de <strong>churn</strong>: het percentage abonnees dat per
            maand opzegt (gemiddelde duur ≈ 1 ÷ churn). Hoe lager de churn, hoe langer klanten gemiddeld
            blijven, en hoe hoger de CLV.
          </p>
        </InfoBox>
      </Section>

      <Section title="Praktijk: bereken de Customer Lifetime Value">
        <p className="mb-4 text-slate-700">
          Speel met de maandprijs en de churn, en ontdek hoe sterk de CLV verandert als een bedrijf erin
          slaagt om klanten iets langer vast te houden.
        </p>
        <CLVSimulator />
      </Section>

      <Section title="Praktijk: reken de jaarlasten en CLV door">
        <div className="space-y-4">
          {rekenLes31.map((r) => (
            <RekenOpdracht key={r.nummer} {...r} />
          ))}
        </div>
      </Section>

      <VerwerkingsOpdracht
        titel="Opdracht: eigendom of gebruik?"
        werkboekPagina={31}
        instructie="Beantwoord de volgende vragen in je werkboek."
      >
        <p>
          1. Noem twee producten of diensten die je vroeger zou hebben gekocht, maar die je nu (of je
          ouders) via een abonnement gebruikt.
        </p>
        <p>
          2. Leg uit waarom recurring revenue voor een bedrijf waardevoller is dan een eenmalige verkoop.
        </p>
        <p>
          3. Gebruik de simulator hierboven: zet de churn op 10% en daarna op 3%. Wat gebeurt er met de CLV,
          en waarom investeren bedrijven daarom zoveel moeite in het vasthouden van klanten?
        </p>
      </VerwerkingsOpdracht>

      <OefenBank lesTitel="3.1" opdrachten={oefenbankLes31} />
    </PageShell>
  )
}
