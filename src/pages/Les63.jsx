import React from 'react'
import PageShell from '../components/PageShell.jsx'
import Section from '../components/Section.jsx'
import Leerdoelen from '../components/Leerdoelen.jsx'
import InfoBox from '../components/InfoBox.jsx'
import VerwerkingsOpdracht from '../components/VerwerkingsOpdracht.jsx'

import OefenBank from '../components/OefenBank.jsx'
import RekenOpdracht from '../components/RekenOpdracht.jsx'
import WinstSimulator from '../components/WinstSimulator.jsx'
import oefenbankLes63 from '../data/oefenbankLes63.js'
import rekenLes63 from '../data/rekenLes63.js'

export default function Les63() {
  return (
    <PageShell>
      <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-emerald-700">Les 6.3</p>
      <h1 className="mb-8 text-slate-900">De resultatenrekening: brutowinst en nettowinst berekenen</h1>

      <Leerdoelen>
        Je stelt een eenvoudige resultatenrekening op en berekent hiermee de brutowinst en de nettowinst
        van een bedrijf.
      </Leerdoelen>

      <Section title="Kerntheorie">
        <p className="mb-4 text-slate-700">
          In de vorige twee lessen zag je hoe je de omzet, de inkoopwaarde van de omzet en de vaste kosten
          van een bedrijf berekent. In deze les breng je deze onderdelen samen in één overzicht: de{' '}
          <strong>resultatenrekening</strong>. Daarmee zie je in één oogopslag of een bedrijf winst of
          verlies maakt.
        </p>

        <p className="mb-4 text-slate-700">
          De eerste stap is de <strong>brutowinst</strong>: het verschil tussen de omzet en de inkoopwaarde
          van de omzet. Bij SoleZone is de omzet €18.000 en de inkoopwaarde van de omzet €10.500, dus de
          brutowinst is €18.000 − €10.500 = €7.500.
        </p>

        <InfoBox type="definitie" title="Definitie: brutowinst">
          <p>
            De <strong>brutowinst</strong> is het verschil tussen de omzet en de inkoopwaarde van de omzet:{' '}
            <strong>Brutowinst = Omzet − Inkoopwaarde van de omzet</strong>.
          </p>
        </InfoBox>

        <p className="mb-4 text-slate-700">
          De brutowinst is echter nog niet het uiteindelijke resultaat: hier moeten ook nog de overige
          (vaste) kosten van worden afgetrokken, zoals huur en salarissen. Wat daarna overblijft, is de{' '}
          <strong>nettowinst</strong>. Bij SoleZone: €7.500 brutowinst − €3.000 vaste kosten = €4.500
          nettowinst.
        </p>

        <InfoBox type="definitie" title="Definitie: nettowinst">
          <p>
            De <strong>nettowinst</strong> is het uiteindelijke resultaat van een bedrijf nadat ook de
            overige (vaste) kosten van de brutowinst zijn afgetrokken:{' '}
            <strong>Nettowinst = Brutowinst − Overige kosten</strong>.
          </p>
        </InfoBox>

        <InfoBox type="definitie" title="Definitie: resultatenrekening">
          <p>
            Een <strong>resultatenrekening</strong> is een overzicht waarin een bedrijf over een bepaalde
            periode de omzet, de inkoopwaarde van de omzet, de brutowinst, de overige kosten en de
            nettowinst (of het verlies) op een rijtje zet.
          </p>
        </InfoBox>

        <div className="mb-4 overflow-x-auto">
          <table className="w-full min-w-[400px] border-collapse text-sm">
            <tbody>
              <tr className="border-b border-border">
                <td className="py-2 pr-4 text-slate-700">Omzet</td>
                <td className="py-2 pr-4 text-right font-medium text-slate-800">€18.000</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 pr-4 text-slate-700">Inkoopwaarde van de omzet</td>
                <td className="py-2 pr-4 text-right font-medium text-slate-800">− €10.500</td>
              </tr>
              <tr className="border-b border-border font-semibold text-slate-900">
                <td className="py-2 pr-4">Brutowinst</td>
                <td className="py-2 pr-4 text-right">€7.500</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 pr-4 text-slate-700">Overige (vaste) kosten</td>
                <td className="py-2 pr-4 text-right font-medium text-slate-800">− €3.000</td>
              </tr>
              <tr className="font-bold text-emerald-700">
                <td className="py-2 pr-4">Nettowinst</td>
                <td className="py-2 pr-4 text-right">€4.500</td>
              </tr>
            </tbody>
          </table>
        </div>

        <InfoBox type="verdieping" title="Verdieping: brutowinst versus nettowinst">
          <p>
            De brutowinst is altijd hoger dan (of gelijk aan) de nettowinst, omdat er van de brutowinst nog
            de overige kosten af moeten. Een bedrijf met een hoge brutowinst kan door zeer hoge overige
            kosten toch een lage of zelfs negatieve nettowinst hebben.
          </p>
        </InfoBox>

        <InfoBox type="vwo" title="VWO-Challenge: een negatieve nettowinst (verlies)">
          <p>
            Zijn de overige kosten hoger dan de brutowinst, dan is de nettowinst negatief: het bedrijf
            draait dan <strong>verlies</strong> in plaats van winst. Dit gebeurt bijvoorbeeld wanneer de
            afzet in een slechte maand flink terugvalt, terwijl de vaste kosten (zoals huur) gewoon
            doorlopen.
          </p>
        </InfoBox>
      </Section>

      <Section title="Praktijk" eyebrow="Interactieve WinstSimulator">
        <p className="mb-4 text-slate-700">
          Pas de afzet, de verkoopprijs, de inkoopprijs en de vaste kosten van SoleZone aan en bekijk
          direct het effect op de omzet, de brutowinst en de nettowinst in de resultatenrekening hieronder.
        </p>
        <WinstSimulator />

        <h3 className="mb-3 mt-8 text-slate-900">Rekenen met de resultatenrekening (niveau 2F/3F)</h3>
        <div className="grid gap-4 md:grid-cols-2">
          {rekenLes63.map((opdracht) => (
            <RekenOpdracht
              key={opdracht.nummer}
              nummer={opdracht.nummer}
              niveau={opdracht.niveau}
              vraag={opdracht.vraag}
              antwoord={opdracht.antwoord}
              eenheid={opdracht.eenheid}
              uitleg={opdracht.uitleg}
            />
          ))}
        </div>
      </Section>

      <VerwerkingsOpdracht
        titel="Opdracht: stel een resultatenrekening op"
        werkboekPagina="15"
        instructie="Voer onderstaande stappen uit en werk je antwoorden uit in je werkboekje of schrift."
      >
        <ol className="list-decimal space-y-2 pl-5">
          <li>
            Gebruik de WinstSimulator: zet de afzet op 200 paar, de verkoopprijs op €130, de inkoopprijs op
            €75 en de vaste kosten op €3.500. Noteer de omzet, de brutowinst en de nettowinst.
          </li>
          <li>
            Stel voor deze situatie zelf een volledige resultatenrekening op (zoals in het voorbeeld
            hierboven), met alle tussenstappen.
          </li>
          <li>
            Leg uit wat er met de nettowinst gebeurt als de vaste kosten in deze situatie zouden stijgen
            naar €8.500, en waarom dit gebeurt.
          </li>
        </ol>
      </VerwerkingsOpdracht>

      <OefenBank lesTitel="Les 6.3" opdrachten={oefenbankLes63} />
    </PageShell>
  )
}
