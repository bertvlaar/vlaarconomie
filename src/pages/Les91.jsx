import React from 'react'
import PageShell from '../components/PageShell.jsx'
import Section from '../components/Section.jsx'
import Leerdoelen from '../components/Leerdoelen.jsx'
import InfoBox from '../components/InfoBox.jsx'
import VerwerkingsOpdracht from '../components/VerwerkingsOpdracht.jsx'

import OefenBank from '../components/OefenBank.jsx'
import oefenbankLes91 from '../data/oefenbankLes91.js'

const kapitaalvormen = [
  { vorm: 'Fysiek kapitaal', voorbeeld: 'Een productiemachine in een fabriek', opbrengst: 'Meer of snellere productie' },
  { vorm: 'Financieel kapitaal', voorbeeld: 'Spaargeld belegd in aandelen', opbrengst: 'Rendement/dividend' },
  { vorm: 'Menselijk kapitaal', voorbeeld: 'Een hbo-opleiding', opbrengst: 'Hogere productiviteit en loon' },
]

export default function Les91() {
  return (
    <PageShell>
      <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-blue-700">Les 9.1</p>
      <h1 className="mb-8 text-slate-900">Menselijk kapitaal: investeren in jezelf</h1>

      <Leerdoelen>
        Je legt uit wat menselijk kapitaal is, en waarom economen een opleiding vergelijken met een
        investering.
      </Leerdoelen>

      <Section title="Kerntheorie">
        <p className="mb-4 text-slate-700">
          Een bedrijf dat investeert in een nieuwe machine, verwacht dat die machine in de toekomst meer
          opbrengt dan hij nu kost. Menselijk kapitaal werkt op eenzelfde manier, maar dan met mensen in
          plaats van machines: door te investeren in kennis en vaardigheden (bijvoorbeeld via een
          opleiding) vergroot je je eigen productiviteit — en daarmee je waarde op de arbeidsmarkt.
        </p>

        <InfoBox type="definitie" title="Definitie: menselijk kapitaal">
          <p>
            <strong>Menselijk kapitaal</strong> is de verzameling kennis, vaardigheden en ervaring van
            een persoon, die kan worden opgebouwd door te investeren (bijvoorbeeld via een opleiding) en
            die in de toekomst een economische opbrengst genereert, vergelijkbaar met een investering in
            machines of gebouwen.
          </p>
        </InfoBox>

        <p className="mb-4 text-slate-700">
          Net als bij een machine kost deze investering eerst geld en tijd, voordat er iets wordt
          "terugverdiend". Een opleiding levert geen fysiek product op, maar wel vaardigheden, diploma's
          en kennis die je later kunt inzetten om productiever werk te leveren, vaak tegen een hoger
          loon.
        </p>

        <InfoBox type="definitie" title="Definitie: productiviteit">
          <p>
            <strong>Productiviteit</strong> is de hoeveelheid en kwaliteit van het werk dat iemand kan
            leveren; een opleiding vergroot doorgaans iemands productiviteit.
          </p>
        </InfoBox>

        <InfoBox type="verdieping" title="Verdieping: waarom een werkgever hiervoor betaalt">
          <p>
            Een werkgever is vaak bereid om iemand met meer menselijk kapitaal een hoger loon te betalen,
            omdat die persoon meer of beter werk levert in dezelfde tijd. De investering die de student
            eerder heeft gedaan (tijd, geld, moeite), komt dus via een hoger loon ten dele terug — precies
            zoals een bedrijf een deel van zijn investering in een machine terugverdient via een hogere
            productie.
          </p>
        </InfoBox>

        <InfoBox type="vwo" title="VWO-Challenge: waarom de overheid meebetaalt aan onderwijs">
          <p>
            Menselijk kapitaal is in de eerste plaats een investering van het individu zelf, maar
            onderwijs levert ook <strong>externe effecten</strong> op die niet alleen bij de student
            terechtkomen: hoger opgeleiden dragen gemiddeld meer belasting af, hebben minder vaak een
            uitkering nodig en dragen bij aan innovatie. Deze bredere, maatschappelijke voordelen zijn
            een reden voor de overheid om mee te investeren in onderwijs, bijvoorbeeld via
            studiefinanciering (zie les 9.3).
          </p>
        </InfoBox>
      </Section>

      <Section title="Praktijk" eyebrow="Vergelijk vormen van kapitaal">
        <p className="mb-3 text-slate-700">
          Bekijk de tabel hieronder met drie vormen van kapitaal:
        </p>
        <div className="mb-4 overflow-x-auto">
          <table className="w-full min-w-[500px] border-collapse text-sm">
            <thead>
              <tr className="border-b border-border text-left text-slate-500">
                <th className="py-2 pr-4">Vorm van kapitaal</th>
                <th className="py-2 pr-4">Voorbeeld</th>
                <th className="py-2 pr-4">Verwachte opbrengst</th>
              </tr>
            </thead>
            <tbody>
              {kapitaalvormen.map((k) => (
                <tr key={k.vorm} className="border-b border-border align-top">
                  <td className="py-2 pr-4 font-medium text-slate-800">{k.vorm}</td>
                  <td className="py-2 pr-4 text-slate-600">{k.voorbeeld}</td>
                  <td className="py-2 pr-4 text-slate-600">{k.opbrengst}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <ul className="list-disc space-y-1 pl-5 text-slate-700">
          <li>Wat hebben deze drie vormen van kapitaal met elkaar gemeen?</li>
          <li>Wat is het belangrijkste verschil tussen menselijk kapitaal en de andere twee vormen?</li>
          <li>Bedenk een eigen voorbeeld van menselijk kapitaal dat je zelf (buiten school) al hebt opgebouwd.</li>
        </ul>
      </Section>

      <VerwerkingsOpdracht
        titel="Opdracht: breng je eigen menselijk kapitaal in kaart"
        werkboekPagina="4"
        instructie="Voer onderstaande stappen uit en werk je antwoorden uit in je werkboekje of schrift."
      >
        <ol className="list-decimal space-y-2 pl-5">
          <li>
            Leg in je eigen woorden uit wat <strong>menselijk kapitaal</strong> is, en waarom economen
            dit vergelijken met een investering.
          </li>
          <li>
            Noem twee concrete voorbeelden van kennis of vaardigheden die jij de afgelopen jaren hebt
            opgebouwd (op school of daarbuiten), en leg uit hoe deze je productiviteit zouden kunnen
            vergroten.
          </li>
          <li>
            Leg uit waarom de overheid meebetaalt aan jouw onderwijs, ook al ben jij degene die er later
            (financieel) het meeste van profiteert.
          </li>
        </ol>
      </VerwerkingsOpdracht>

      <OefenBank lesTitel="Les 9.1" opdrachten={oefenbankLes91} />
    </PageShell>
  )
}
