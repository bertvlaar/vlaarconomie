import React from 'react'
import PageShell from '../components/PageShell.jsx'
import Section from '../components/Section.jsx'
import Leerdoelen from '../components/Leerdoelen.jsx'
import InfoBox from '../components/InfoBox.jsx'
import VerwerkingsOpdracht from '../components/VerwerkingsOpdracht.jsx'

import OefenBank from '../components/OefenBank.jsx'
import RekenOpdracht from '../components/RekenOpdracht.jsx'
import oefenbankLes61 from '../data/oefenbankLes61.js'

const scenarios = [
  { situatie: 'SoleZone verkoopt 150 paar sneakers voor €120 per paar.', afzet: '150 paar', verkoopprijs: '€120', omzet: '€18.000' },
  { situatie: 'In de decembermaand verkoopt SoleZone 220 paar voor €120 per paar.', afzet: '220 paar', verkoopprijs: '€120', omzet: '€26.400' },
  { situatie: 'Tijdens een uitverkoop verkoopt SoleZone 200 paar voor €100 per paar.', afzet: '200 paar', verkoopprijs: '€100', omzet: '€20.000' },
]

export default function Les61() {
  return (
    <PageShell>
      <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-emerald-700">Les 6.1</p>
      <h1 className="mb-8 text-slate-900">Omzet en afzet: wat levert verkopen eigenlijk op?</h1>

      <Leerdoelen>
        Je legt uit wat afzet en omzet zijn, en berekent de omzet van een bedrijf met de formule
        Omzet = Verkoopprijs × Afzet.
      </Leerdoelen>

      <Section title="Kerntheorie">
        <p className="mb-4 text-slate-700">
          Elke ondernemer begint met dezelfde vraag: hoeveel producten ga ik verkopen, en wat levert dat
          op? Het aantal producten dat een bedrijf in een bepaalde periode daadwerkelijk verkoopt, heet de{' '}
          <strong>afzet</strong>. Sneakerwinkel "SoleZone" verkoopt bijvoorbeeld gemiddeld 150 paar
          sneakers per maand: dat is de afzet van SoleZone in een gewone maand.
        </p>

        <InfoBox type="definitie" title="Definitie: afzet">
          <p>
            <strong>Afzet</strong> is het aantal producten of diensten dat een bedrijf in een bepaalde
            periode daadwerkelijk verkoopt.
          </p>
        </InfoBox>

        <p className="mb-4 text-slate-700">
          Vermenigvuldig je de afzet met de <strong>verkoopprijs</strong> per product, dan krijg je de{' '}
          <strong>omzet</strong>: het totale bedrag dat een bedrijf binnenkrijgt door de verkoop. Verkoopt
          SoleZone 150 paar sneakers voor €120 per paar, dan is de omzet 150 × €120 = €18.000 per maand.
        </p>

        <InfoBox type="definitie" title="Definitie: omzet">
          <p>
            <strong>Omzet</strong> is het totale bedrag dat een bedrijf ontvangt door de verkoop van
            producten of diensten: <strong>Omzet = Verkoopprijs × Afzet</strong>.
          </p>
        </InfoBox>

        <InfoBox type="verdieping" title="Verdieping: meer omzet kan op twee manieren">
          <p>
            Omdat omzet wordt bepaald door zowel de verkoopprijs als de afzet, kan een bedrijf zijn omzet
            op twee manieren laten stijgen: door meer producten te verkopen (afzet omhoog) of door een
            hogere prijs te vragen (verkoopprijs omhoog). Verlaagt een winkel de prijs tijdens een
            uitverkoop, dan kan de omzet soms toch stijgen, als de afzet daardoor sterk genoeg toeneemt.
          </p>
        </InfoBox>

        <InfoBox type="vwo" title="VWO-Challenge: omzet is niet hetzelfde als winst">
          <p>
            Een hoge omzet zegt op zichzelf nog niets over hoe gezond een bedrijf is: de omzet houdt geen
            rekening met de kosten die een bedrijf maakt om die producten in te kopen en te verkopen. Pas
            als je de omzet naast de kosten van een bedrijf legt, kun je zeggen of een bedrijf ook
            daadwerkelijk winst maakt — daarover gaan de lessen 6.2 en 6.3.
          </p>
        </InfoBox>
      </Section>

      <Section title="Praktijk" eyebrow="Reken mee met SoleZone">
        <p className="mb-3 text-slate-700">
          Bekijk de tabel hieronder met drie verkoopsituaties bij SoleZone:
        </p>
        <div className="mb-6 overflow-x-auto">
          <table className="w-full min-w-[500px] border-collapse text-sm">
            <thead>
              <tr className="border-b border-border text-left text-slate-500">
                <th className="py-2 pr-4">Situatie</th>
                <th className="py-2 pr-4">Afzet</th>
                <th className="py-2 pr-4">Verkoopprijs</th>
                <th className="py-2 pr-4">Omzet</th>
              </tr>
            </thead>
            <tbody>
              {scenarios.map((s) => (
                <tr key={s.situatie} className="border-b border-border align-top">
                  <td className="py-2 pr-4 text-slate-600">{s.situatie}</td>
                  <td className="py-2 pr-4 font-medium text-slate-800">{s.afzet}</td>
                  <td className="py-2 pr-4 font-medium text-slate-800">{s.verkoopprijs}</td>
                  <td className="py-2 pr-4 font-semibold text-emerald-700">{s.omzet}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h3 className="mb-3 text-slate-900">Rekenen met omzet (niveau 2F)</h3>
        <div className="grid gap-4 md:grid-cols-2">
          <RekenOpdracht
            nummer={1}
            niveau="2F"
            vraag="SoleZone verkoopt 180 paar sneakers voor €120 per paar. Bereken de omzet."
            antwoord={21600}
            eenheid="€"
            uitleg="180 × €120 = €21.600."
          />
          <RekenOpdracht
            nummer={2}
            niveau="2F"
            vraag="Een concurrent verkoopt 90 paar sneakers voor €150 per paar. Bereken de omzet."
            antwoord={13500}
            eenheid="€"
            uitleg="90 × €150 = €13.500."
          />
        </div>
      </Section>

      <VerwerkingsOpdracht
        titel="Opdracht: bereken de omzet van SoleZone"
        werkboekPagina="4"
        instructie="Voer onderstaande stappen uit en werk je antwoorden uit in je werkboekje of schrift."
      >
        <ol className="list-decimal space-y-2 pl-5">
          <li>
            Leg in je eigen woorden uit wat <strong>afzet</strong> en <strong>omzet</strong> zijn, en hoe
            deze twee begrippen met elkaar samenhangen.
          </li>
          <li>
            SoleZone verhoogt de prijs naar €135 per paar, waardoor de afzet daalt naar 130 paar. Bereken
            de nieuwe omzet en vergelijk deze met de omzet van een gewone maand (150 paar × €120).
          </li>
          <li>
            Bedenk zelf een tweede product (bijvoorbeeld een ander kledingstuk of een dienst), verzin een
            realistische verkoopprijs en afzet, en bereken de omzet.
          </li>
        </ol>
      </VerwerkingsOpdracht>

      <OefenBank lesTitel="Les 6.1" opdrachten={oefenbankLes61} />
    </PageShell>
  )
}
