import React from 'react'
import PageShell from '../components/PageShell.jsx'
import Section from '../components/Section.jsx'
import Leerdoelen from '../components/Leerdoelen.jsx'
import InfoBox from '../components/InfoBox.jsx'
import VerwerkingsOpdracht from '../components/VerwerkingsOpdracht.jsx'

import OefenBank from '../components/OefenBank.jsx'
import RekenOpdracht from '../components/RekenOpdracht.jsx'
import oefenbankLes62 from '../data/oefenbankLes62.js'

const kostenposten = [
  { post: 'Huur van de winkel', soort: 'Vaste kosten', bedrag: '€1.800 per maand' },
  { post: 'Vaste salarissen personeel', soort: 'Vaste kosten', bedrag: '€900 per maand' },
  { post: 'Verzekering', soort: 'Vaste kosten', bedrag: '€300 per maand' },
  { post: 'Inkoop van sneakers', soort: 'Variabele kosten (inkoopwaarde van de omzet)', bedrag: '€70 per verkocht paar' },
]

export default function Les62() {
  return (
    <PageShell>
      <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-emerald-700">Les 6.2</p>
      <h1 className="mb-8 text-slate-900">Vaste kosten, variabele kosten en de inkoopwaarde van de omzet</h1>

      <Leerdoelen>
        Je herkent het verschil tussen vaste kosten, variabele kosten en de inkoopwaarde van de omzet, en
        berekent deze voor een bedrijf.
      </Leerdoelen>

      <Section title="Kerntheorie">
        <p className="mb-4 text-slate-700">
          Naast omzet maakt elk bedrijf ook kosten, maar niet alle kosten gedragen zich hetzelfde.{' '}
          <strong>Vaste kosten</strong> zijn kosten die een bedrijf móet betalen, ongeacht hoeveel het
          verkoopt. SoleZone betaalt bijvoorbeeld elke maand €1.800 huur, €900 aan vaste salarissen en €300
          verzekering — samen €3.000 vaste kosten per maand, of er nu 10 of 300 paar sneakers worden
          verkocht.
        </p>

        <InfoBox type="definitie" title="Definitie: vaste kosten">
          <p>
            <strong>Vaste kosten</strong> zijn kosten die een bedrijf op de korte termijn altijd moet
            betalen, ongeacht hoeveel er wordt verkocht, zoals huur, verzekering en vaste salarissen.
          </p>
        </InfoBox>

        <p className="mb-4 text-slate-700">
          <strong>Variabele kosten</strong> bewegen daarentegen wél mee met de verkoop: hoe meer een
          bedrijf verkoopt, hoe hoger deze kosten oplopen. De belangrijkste variabele kostenpost bij een
          winkel is meestal de inkoop van de producten die worden doorverkocht.
        </p>

        <InfoBox type="definitie" title="Definitie: variabele kosten">
          <p>
            <strong>Variabele kosten</strong> zijn kosten die meebewegen met de hoeveelheid verkochte
            producten: hoe meer een bedrijf verkoopt, hoe hoger deze kosten in totaal oplopen.
          </p>
        </InfoBox>

        <p className="mb-4 text-slate-700">
          Bij een winkel als SoleZone heet de belangrijkste variabele kostenpost de{' '}
          <strong>inkoopwaarde van de omzet</strong>: de totale inkoopprijs van alle sneakers die in een
          periode zijn verkocht. Koopt SoleZone elk paar sneakers in voor €70 en verkoopt het er 150, dan
          is de inkoopwaarde van de omzet 150 × €70 = €10.500.
        </p>

        <InfoBox type="definitie" title="Definitie: inkoopwaarde van de omzet">
          <p>
            De <strong>inkoopwaarde van de omzet</strong> is de totale inkoopprijs van alle producten die
            een bedrijf in een periode heeft verkocht: <strong>Inkoopprijs per stuk × Afzet</strong>.
          </p>
        </InfoBox>

        <InfoBox type="vwo" title="VWO-Challenge: waarom vaste kosten relatief zwaarder wegen bij tegenvallende verkoop">
          <p>
            Omdat vaste kosten hetzelfde blijven ongeacht de afzet, wegen ze relatief zwaarder wanneer een
            bedrijf minder verkoopt: dezelfde €3.000 huur en salaris moet dan uit een kleinere omzet worden
            betaald. Variabele kosten dalen daarentegen automatisch mee bij een lagere afzet, omdat er dan
            ook minder hoeft te worden ingekocht.
          </p>
        </InfoBox>
      </Section>

      <Section title="Praktijk" eyebrow="De kostenposten van SoleZone">
        <p className="mb-3 text-slate-700">
          Bekijk de belangrijkste kostenposten van SoleZone in een gewone maand:
        </p>
        <div className="mb-6 overflow-x-auto">
          <table className="w-full min-w-[500px] border-collapse text-sm">
            <thead>
              <tr className="border-b border-border text-left text-slate-500">
                <th className="py-2 pr-4">Kostenpost</th>
                <th className="py-2 pr-4">Soort kosten</th>
                <th className="py-2 pr-4">Bedrag</th>
              </tr>
            </thead>
            <tbody>
              {kostenposten.map((k) => (
                <tr key={k.post} className="border-b border-border align-top">
                  <td className="py-2 pr-4 font-medium text-slate-800">{k.post}</td>
                  <td className="py-2 pr-4 text-slate-600">{k.soort}</td>
                  <td className="py-2 pr-4 text-slate-600">{k.bedrag}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h3 className="mb-3 text-slate-900">Rekenen met kosten (niveau 2F/3F)</h3>
        <div className="grid gap-4 md:grid-cols-2">
          <RekenOpdracht
            nummer={1}
            niveau="2F"
            vraag="SoleZone verkoopt in een maand 170 paar sneakers. Bereken de inkoopwaarde van de omzet (inkoopprijs €70 per paar)."
            antwoord={11900}
            eenheid="€"
            uitleg="170 × €70 = €11.900."
          />
          <RekenOpdracht
            nummer={2}
            niveau="3F"
            vraag="SoleZone opent een tijdelijke pop-up kraam en betaalt daarvoor €250 extra huur per maand, naast de bestaande €3.000 vaste kosten. Bereken de nieuwe totale vaste kosten."
            antwoord={3250}
            eenheid="€"
            uitleg="3.000 + 250 = €3.250."
          />
        </div>
      </Section>

      <VerwerkingsOpdracht
        titel="Opdracht: onderscheid vaste kosten van variabele kosten"
        werkboekPagina="9"
        instructie="Voer onderstaande stappen uit en werk je antwoorden uit in je werkboekje of schrift."
      >
        <ol className="list-decimal space-y-2 pl-5">
          <li>
            Leg het verschil uit tussen <strong>vaste kosten</strong> en <strong>variabele kosten</strong>,
            met voor elk een eigen voorbeeld (niet uit de les).
          </li>
          <li>
            Bereken de inkoopwaarde van de omzet van SoleZone bij een afzet van 210 paar sneakers
            (inkoopprijs €70 per paar).
          </li>
          <li>
            Leg uit waarom de energierekening van een winkel vaak deels vast en deels variabel is (denk
            aan een vast abonnement plus een bedrag per verbruikte kWh).
          </li>
        </ol>
      </VerwerkingsOpdracht>

      <OefenBank lesTitel="Les 6.2" opdrachten={oefenbankLes62} />
    </PageShell>
  )
}
