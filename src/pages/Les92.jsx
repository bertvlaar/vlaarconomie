import React from 'react'
import PageShell from '../components/PageShell.jsx'
import Section from '../components/Section.jsx'
import Leerdoelen from '../components/Leerdoelen.jsx'
import InfoBox from '../components/InfoBox.jsx'
import VerwerkingsOpdracht from '../components/VerwerkingsOpdracht.jsx'

import OefenBank from '../components/OefenBank.jsx'
import TerugverdientijdSimulator from '../components/TerugverdientijdSimulator.jsx'
import oefenbankLes92 from '../data/oefenbankLes92.js'

export default function Les92() {
  return (
    <PageShell>
      <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-blue-700">Les 9.2</p>
      <h1 className="mb-8 text-slate-900">Kosten-batenanalyse over de levensloop: is studeren de moeite waard?</h1>

      <Leerdoelen>
        Je legt uit welke kosten en baten meetellen bij het beoordelen of een studie loont, en berekent
        de terugverdientijd van een studie.
      </Leerdoelen>

      <Section title="Kerntheorie">
        <p className="mb-4 text-slate-700">
          Om te bepalen of een studie financieel de moeite waard is, vergelijk je de kosten en baten niet
          over één jaar, maar over de hele levensloop: je hele werkzame leven. Aan de kostenkant staan
          niet alleen directe kosten zoals collegegeld en boeken, maar ook gederfde inkomsten: het loon
          dat je tijdens je studiejaren had kunnen verdienen als je in plaats daarvan was gaan werken.
        </p>

        <InfoBox type="definitie" title="Definitie: gederfde inkomsten (opportunitykosten van studeren)">
          <p>
            <strong>Gederfde inkomsten</strong> zijn het inkomen dat iemand misloopt doordat hij of zij
            tijdens de studiejaren niet (volledig) werkt, gezien als de waarde van het beste alternatief
            (direct gaan werken) dat wordt opgegeven door voor een studie te kiezen. Voor de meeste
            studenten zijn deze gederfde inkomsten een veel grotere kostenpost dan het collegegeld zelf.
          </p>
        </InfoBox>

        <InfoBox type="definitie" title="Definitie: kosten-batenanalyse over de levensloop">
          <p>
            Aan de batenkant staat vooral het hogere loon dat je naar verwachting krijgt na het
            afstuderen, elk jaar opnieuw, over de rest van je werkzame leven. Pas als je de totale
            investering (directe kosten plus gederfde inkomsten) hebt "terugverdiend" via dit hogere
            loon, is de studie er financieel op vooruitgegaan.
          </p>
        </InfoBox>

        <InfoBox type="verdieping" title="Verdieping: het voorbeeld van Yasmin en Bram">
          <p>
            Bram gaat na de havo direct aan het werk en verdient €20.000 per jaar. Yasmin kiest voor een
            hbo-opleiding van 4 jaar en betaalt €2.000 per jaar aan collegegeld en boeken (samen
            4 × €2.000 = €8.000), terwijl ze gedurende die 4 jaar het loon van Bram misloopt:
            4 × €20.000 = €80.000 aan gederfde inkomsten. Haar totale investering komt daarmee op
            €8.000 + €80.000 = €88.000. Na haar afstuderen verdient Yasmin €28.000 per jaar, €8.000
            méér dan Bram: €88.000 ÷ €8.000 = 11 jaar is haar terugverdientijd.
          </p>
        </InfoBox>

        <InfoBox type="vwo" title="De Uitdaging: geld nu is meer waard dan geld later">
          <p>
            Deze eenvoudige berekening houdt geen rekening met de tijdswaarde van geld: €1.000 die je
            over 10 jaar ontvangt, is in economische zin minder waard dan €1.000 die je nu ontvangt,
            onder andere omdat je geld nu al zou kunnen beleggen of sparen. Economen gebruiken hiervoor
            een techniek die <strong>discontering</strong> heet, waarbij toekomstige bedragen worden
            "teruggerekend" naar hun waarde vandaag. Voor deze module rekenen we vereenvoudigd, zonder
            discontering.
          </p>
        </InfoBox>
      </Section>

      <Section title="Praktijk" eyebrow="Interactieve terugverdientijd-simulator">
        <p className="mb-4 text-slate-700">
          Speel met de studieduur, de directe kosten en de lonen mét en zonder studie, en bereken direct
          de terugverdientijd van een fictieve studiekeuze.
        </p>
        <TerugverdientijdSimulator />
      </Section>

      <VerwerkingsOpdracht
        titel="Opdracht: bereken je eigen terugverdientijd-scenario"
        werkboekPagina="9"
        instructie="Voer onderstaande stappen uit en noteer je berekeningen en conclusie."
      >
        <ol className="list-decimal space-y-2 pl-5">
          <li>
            Leg in je eigen woorden uit wat <strong>gederfde inkomsten</strong> zijn, en waarom deze vaak
            de grootste kostenpost van een studie vormen.
          </li>
          <li>
            Gebruik de simulator: kies een studieduur en lonen die bij een studierichting passen die jij
            interessant vindt. Noteer de totale investering, de loonpremie en de terugverdientijd.
          </li>
          <li>
            Leg uit waarom een studie met een langere terugverdientijd niet per definitie een slechte
            keuze is.
          </li>
        </ol>
      </VerwerkingsOpdracht>

      <OefenBank lesTitel="Les 9.2" opdrachten={oefenbankLes92} />
    </PageShell>
  )
}
