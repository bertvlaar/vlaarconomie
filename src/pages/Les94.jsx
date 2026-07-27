import React from 'react'
import PageShell from '../components/PageShell.jsx'
import Section from '../components/Section.jsx'
import Leerdoelen from '../components/Leerdoelen.jsx'
import InfoBox from '../components/InfoBox.jsx'
import VerwerkingsOpdracht from '../components/VerwerkingsOpdracht.jsx'

import OefenBank from '../components/OefenBank.jsx'
import oefenbankLes94 from '../data/oefenbankLes94.js'

const stellingen = [
  {
    titel: '"Iedereen zou moeten doorstuderen, omdat een diploma altijd financieel loont."',
    voor: [
      'Gemiddeld verdienen hoger opgeleiden significant meer dan mensen zonder vervolgopleiding, en hebben ze meer kans op werk.',
      'De terugverdientijd van een studie is vaak veel korter dan iemands totale werkzame leven.',
      'Een diploma geeft daarnaast meer flexibiliteit om later van baan of richting te veranderen.',
    ],
    tegen: [
      'Loonpremies verschillen enorm per studierichting; niet elke studie verdient zich even snel (of ooit) terug.',
      'Sommige beroepen zonder vervolgopleiding (bijvoorbeeld in de techniek of logistiek) bieden ook een goed salaris en snelle werkervaring.',
      'Niet iedereen heeft evenveel baat bij, of toegang tot, vervolgonderwijs, waardoor "altijd loont" geen universele waarheid is.',
    ],
  },
  {
    titel: '"Bij studiekeuze zou de verwachte loonpremie zwaarder moeten wegen dan persoonlijke interesse."',
    voor: [
      'Een hogere loonpremie betekent een kortere terugverdientijd en meer financiële zekerheid op de lange termijn.',
      'Studenten onderschatten vaak hoe groot loonverschillen tussen studierichtingen in de praktijk kunnen zijn.',
      'Financiële zekerheid kan later meer keuzevrijheid opleveren (bijvoorbeeld om alsnog een hobby of interesse te combineren met werk).',
    ],
    tegen: [
      'Werken in een vakgebied zonder interesse kan leiden tot minder motivatie, meer stress en zelfs een hoger risico op uitval.',
      'Mensen die hun werk leuk vinden, presteren vaak beter en houden het langer vol, wat op de lange termijn ook financieel voordeel kan opleveren.',
      'Een puur financiële afweging houdt geen rekening met niet-financiële vormen van welzijn, die voor veel mensen net zo belangrijk zijn.',
    ],
  },
]

export default function Les94() {
  return (
    <PageShell>
      <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-blue-700">Les 9.4</p>
      <h1 className="mb-8 text-slate-900">Loonverschillen op de arbeidsmarkt doorgerekend</h1>

      <Leerdoelen>
        Je rekent een compleet kosten-batenscenario van een studiekeuze door, en beoordeelt of financiële
        overwegingen altijd zwaarder zouden moeten wegen dan persoonlijke interesse.
      </Leerdoelen>

      <Section title="Kerntheorie">
        <p className="mb-4 text-slate-700">
          Bram gaat na de havo direct aan het werk en verdient €20.000 per jaar. Yasmin kiest voor een
          hbo-opleiding van 4 jaar. Zij betaalt €2.000 per jaar aan collegegeld en boeken (samen
          4 × €2.000 = €8.000) en loopt gedurende die 4 jaar het loon van Bram mis: 4 × €20.000 = €80.000
          aan gederfde inkomsten.
        </p>
        <p className="mb-4 text-slate-700">
          De totale investering van Yasmin komt daarmee op €8.000 + €80.000 = €88.000. Na haar
          afstuderen verdient Yasmin dankzij haar diploma €28.000 per jaar — €8.000 méér dan Bram, die op
          dat moment nog steeds €20.000 per jaar verdient.
        </p>

        <InfoBox type="definitie" title="Definitie: loonpremie / loonverschillen op de arbeidsmarkt">
          <p>
            Dit verschil van €8.000 noemen economen de <strong>loonpremie</strong> van een opleiding: het
            verschil in loon tussen mensen met een hoger en een lager opleidingsniveau, dat ontstaat
            doordat een hogere opleiding vaak leidt tot hogere productiviteit en dus een hoger loon op de
            arbeidsmarkt.
          </p>
        </InfoBox>

        <p className="mb-4 text-slate-700">
          Om te berekenen wanneer Yasmins investering is terugverdiend, deel je de totale investering
          door het jaarlijkse loonverschil: €88.000 ÷ €8.000 = 11 jaar. Na 11 jaar werken heeft Yasmin
          haar extra kosten volledig gecompenseerd via haar hogere loon; elk jaar daarna verdient ze er
          financieel op vooruit ten opzichte van Bram.
        </p>

        <InfoBox type="verdieping" title="Verdieping: loonpremie verschilt sterk per richting">
          <p>
            De loonpremie van €8.000 in dit voorbeeld is een aanname; in werkelijkheid verschilt de
            loonpremie sterk per studierichting, afhankelijk van vraag en aanbod van afgestudeerden op de
            arbeidsmarkt. Een richting met veel vraag en weinig aanbod levert vaak een hogere loonpremie
            (en dus een kortere terugverdientijd) op dan een richting met veel aanbod.
          </p>
        </InfoBox>

        <InfoBox type="vwo" title="VWO-Challenge: arbeidsmarktrisico">
          <p>
            De berekende terugverdientijd gaat uit van een verwacht, gemiddeld loonverschil. In de
            praktijk bestaat er <strong>arbeidsmarktrisico</strong>: de kans dat iemand, ondanks een
            opleiding, toch moeite heeft om werk te vinden of geen hoger loon ontvangt, bijvoorbeeld door
            een krappe arbeidsmarkt in een bepaalde richting. Dit risico wordt in de eenvoudige
            berekening van dit thema niet meegenomen.
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
        titel="Opdracht: reken Yasmin en Bram na en kies een standpunt"
        werkboekPagina="19"
        instructie="Voer onderstaande stappen uit en werk je antwoorden uit in je werkboekje of schrift."
      >
        <ol className="list-decimal space-y-2 pl-5">
          <li>
            Herhaal de berekening van Yasmins totale investering en terugverdientijd in je eigen woorden,
            met de gegeven bedragen.
          </li>
          <li>
            Stel dat Yasmins loonpremie na een economische crisis daalt naar €4.000 per jaar. Bereken
            haar nieuwe terugverdientijd.
          </li>
          <li>
            Kies één van de twee stellingen hierboven en formuleer in twee tot drie zinnen jouw eigen,
            onderbouwde standpunt.
          </li>
        </ol>
      </VerwerkingsOpdracht>

      <OefenBank lesTitel="Les 9.4" opdrachten={oefenbankLes94} />
    </PageShell>
  )
}
