import React from 'react'
import PageShell from '../components/PageShell.jsx'
import Section from '../components/Section.jsx'
import Leerdoelen from '../components/Leerdoelen.jsx'
import InfoBox from '../components/InfoBox.jsx'
import VerwerkingsOpdracht from '../components/VerwerkingsOpdracht.jsx'

import OefenBank from '../components/OefenBank.jsx'
import oefenbankLes84 from '../data/oefenbankLes84.js'

const stellingen = [
  {
    titel: '"Platforms zoals Vinted en Marktplaats zouden verplicht moeten worden om kopers en verkopers financieel te compenseren bij oplichting."',
    voor: [
      'Gebruikers vertrouwen op de schijn van veiligheid die een groot, bekend platform uitstraalt, en verwachten daarom ook bescherming.',
      'Een verplichte compensatie zou platforms een sterke prikkel geven om fraude actief te bestrijden, bijvoorbeeld met betere controles.',
      'Zonder enige compensatie draagt de individuele consument het volledige risico van een systeem dat het platform zelf heeft opgezet.',
    ],
    tegen: [
      'Een platform kan onmogelijk elke individuele transactie tussen miljoenen gebruikers controleren.',
      'Verplichte compensatie zou de kosten voor het platform flink verhogen, wat waarschijnlijk leidt tot hogere servicekosten voor alle gebruikers.',
      'Kopers en verkopers houden ook een eigen verantwoordelijkheid om veilig te handelen, bijvoorbeeld door op een openbare plek af te spreken.',
    ],
  },
  {
    titel: '"Tweedehands verkopen zou, net als bij professionele verkopers, inkomstenbelasting moeten opleveren zodra je er \'een beetje\' geld mee verdient."',
    voor: [
      'Als iemand structureel en winstgericht inkoopt om door te verkopen, lijkt dit meer op een bedrijfsactiviteit dan op het opruimen van eigen spullen.',
      'Eerlijke concurrentie met professionele (tweedehands)winkels vraagt om gelijke regels voor iedereen die stelselmatig met winst verkoopt.',
      'Belastinginkomsten uit deze groeiende sector zouden gebruikt kunnen worden voor bijvoorbeeld duurzaamheidsbeleid.',
    ],
    tegen: [
      'Voor de meeste mensen gaat het om incidentele verkoop van eigen, niet langer gebruikte spullen, niet om een bedrijf.',
      'Het is voor de belastingdienst vrijwel onmogelijk om bij te houden welke van de miljoenen kleine transacties incidenteel of structureel zijn.',
      'Een belastingplicht op kleine bedragen zou mensen kunnen ontmoedigen om spullen tweedehands te verkopen in plaats van weg te gooien, wat averechts werkt voor duurzaamheid.',
    ],
  },
  {
    titel: '"Onderhandelen op Marktplaats is oneerlijk tegenover verkopers die vanaf het begin een eerlijke prijs vragen."',
    voor: [
      'Verkopers die een realistische prijs vragen, worden soms toch overladen met lage biedingen, wat tijd en energie kost.',
      'Onderhandelen bevoordeelt kopers die assertiever zijn of beter kunnen onderhandelen, ongeacht de werkelijke waarde van het product.',
      'Een vaste, transparante prijs zou voor alle kopers evenveel eerlijk zijn.',
    ],
    tegen: [
      'Onderhandelen geeft juist ruimte om rekening te houden met verborgen gebreken of persoonlijke omstandigheden die niet in de advertentie staan.',
      'Verkopers kunnen zelf kiezen om "vaste prijs, niet onderhandelbaar" te vermelden als ze onderhandelen willen vermijden.',
      'Onderhandelingsruimte is juist ingebouwd in de vraagprijs: veel verkopers vragen bewust iets meer dan hun minimum, met onderhandelen al in gedachten.',
    ],
  },
]

export default function Les84() {
  return (
    <PageShell>
      <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-blue-700">Les 8.4</p>
      <h1 className="mb-8 text-slate-900">Veilig handelen: onderhandelen, verzendkosten en kleine winstmarges</h1>

      <Leerdoelen>
        Je legt uit wat winstmarge, onderhandelingsruimte en verzendkosten betekenen bij tweedehandshandel,
        herkent risico's zoals scams, en beoordeelt vraagstukken rondom veilig en eerlijk handelen.
      </Leerdoelen>

      <Section title="Kerntheorie">
        <p className="mb-4 text-slate-700">
          Wie op Vinted of Marktplaats verkoopt om wat bij te verdienen, houdt niet de hele verkoopprijs
          over als winst. Neem Fatima, die een fiets tweedehands inkoopt voor €40, hem opknapt voor €10
          aan onderdelen, en hem vervolgens verkoopt voor €90. Haar winst is € 90 − € 40 − € 10 = € 40,
          oftewel een <strong>winstmarge</strong> van € 40 / € 90 × 100% ≈ 44% van de verkoopprijs.
        </p>

        <InfoBox type="definitie" title="Definitie: winstmarge">
          <p>
            <strong>Winstmarge</strong> is het verschil tussen de verkoopprijs en alle kosten (inkoop,
            opknappen, verzending), uitgedrukt als percentage van de verkoopprijs.
          </p>
        </InfoBox>

        <p className="mb-4 text-slate-700">
          Veel verkopers vragen bewust iets meer dan het bedrag dat ze uiteindelijk willen ontvangen, om
          ruimte te hebben om te onderhandelen met een koper die afdingt.
        </p>

        <InfoBox type="definitie" title="Definitie: onderhandelingsruimte">
          <p>
            <strong>Onderhandelingsruimte</strong> is het verschil tussen de vraagprijs die een verkoper
            aanvankelijk vraagt en de laagste prijs waarvoor de verkoper nog bereid is te verkopen.
          </p>
        </InfoBox>

        <InfoBox type="definitie" title="Definitie: verzendkosten">
          <p>
            <strong>Verzendkosten</strong> zijn de kosten van het versturen van een tweedehands product
            naar de koper. Worden deze niet volledig doorberekend aan de koper, dan gaan ze rechtstreeks
            van de winstmarge van de verkoper af.
          </p>
        </InfoBox>

        <InfoBox type="verdieping" title="Verdieping: veilig handelen">
          <p>
            Omdat je bij C2C-handel vaak met onbekenden zaken doet, is voorzichtigheid nodig: spreek af op
            een openbare, veilige plek om af te halen, betaal nooit vooraf aan een onbekende verkoper
            zonder kopersbescherming, en wees alert op prijzen die veel lager zijn dan vergelijkbare
            aanbiedingen zonder duidelijke reden.
          </p>
        </InfoBox>

        <InfoBox type="vwo" title="De Uitdaging: het fiscale grijze gebied">
          <p>
            Bij incidentele verkoop van eigen, niet langer gebruikte spullen hoeft doorgaans geen
            belasting betaald te worden. Wanneer iemand echter structureel en met een duidelijk
            winstoogmerk handelt — bijvoorbeeld stelselmatig inkopen om met winst door te verkopen — komt
            dit dichter bij een bedrijfsactiviteit, wat mogelijk als belastbaar inkomen gezien kan worden.
            Dit noemen we een <strong>fiscaal grijs gebied</strong>: het is voor zowel verkoper als
            belastingdienst niet altijd scherp waar de grens ligt.
          </p>
        </InfoBox>
      </Section>

      <Section title="Denk- en discussieopdracht" eyebrow="De Debathal">
        <p className="mb-4 text-slate-700">
          Kies een stelling, verdeel de klas in voor/tegen, en debatteer met onderstaande argumenten als
          startpunt. Gebruik zoveel mogelijk begrippen uit dit hele thema.
        </p>
        <div className="space-y-6">
          {stellingen.map((s, i) => (
            <div key={i} className="rounded-lg border border-border bg-white p-5">
              <h3 className="mb-3 text-slate-900">
                Stelling {i + 1}: {s.titel}
              </h3>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <p className="mb-2 text-sm font-semibold text-green-700">Vóór</p>
                  <ul className="list-disc space-y-1 pl-5 text-sm text-slate-700">
                    {s.voor.map((a, j) => (
                      <li key={j}>{a}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="mb-2 text-sm font-semibold text-docent">Tegen</p>
                  <ul className="list-disc space-y-1 pl-5 text-sm text-slate-700">
                    {s.tegen.map((a, j) => (
                      <li key={j}>{a}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <VerwerkingsOpdracht
        titel="Opdracht: bereken een winstmarge en kies een standpunt"
        werkboekPagina="19"
        instructie="Voer onderstaande stappen uit en werk je antwoorden uit in je werkboekje of schrift."
      >
        <ol className="list-decimal space-y-2 pl-5">
          <li>
            Bereken zelf de winst en winstmarge van Fatima's fiets (inkoop € 40, opknappen € 10,
            verkoop € 90), en controleer of je op € 40 winst en ≈ 44% marge uitkomt.
          </li>
          <li>
            Leg uit waarom verzendkosten die niet worden doorberekend, rechtstreeks van de winstmarge
            afgaan.
          </li>
          <li>
            Kies één van de drie stellingen hierboven en formuleer in twee tot drie zinnen jouw eigen,
            onderbouwde standpunt.
          </li>
        </ol>
      </VerwerkingsOpdracht>

      <OefenBank lesTitel="Les 8.4" opdrachten={oefenbankLes84} />
    </PageShell>
  )
}
