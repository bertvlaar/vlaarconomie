import React from 'react'
import PageShell from '../components/PageShell.jsx'
import Section from '../components/Section.jsx'
import Leerdoelen from '../components/Leerdoelen.jsx'
import InfoBox from '../components/InfoBox.jsx'
import VerwerkingsOpdracht from '../components/VerwerkingsOpdracht.jsx'

import OefenBank from '../components/OefenBank.jsx'
import oefenbankLes52 from '../data/oefenbankLes52.js'

const modellen = [
  { naam: 'YouTube (gratis)', model: 'Reclamemodel: adverteerders betalen per vertoning/klik', klant: 'De adverteerder' },
  { naam: 'Netflix', model: 'Abonnementsmodel: vaste maandelijkse bijdrage van de kijker', klant: 'De kijker zelf' },
  { naam: 'Spotify Free / Premium', model: 'Freemium: gratis met reclame, of betaald zonder reclame', klant: 'Beide, afhankelijk van de gekozen versie' },
]

export default function Les52() {
  return (
    <PageShell>
      <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-blue-700">Les 5.2</p>
      <h1 className="mb-8 text-slate-900">Indirecte verdienmodellen: reclame versus abonnementen</h1>

      <Leerdoelen>
        Je legt uit hoe het reclamemodel en het abonnementsmodel van elkaar verschillen, met name als
        het gaat om de vraag wie eigenlijk "de klant" is, en je herkent voor- en nadelen van beide
        modellen.
      </Leerdoelen>

      <Section title="Kerntheorie">
        <p className="mb-4 text-slate-700">
          De meeste influencers en platforms verdienen niet rechtstreeks aan jou als kijker, maar via{' '}
          <strong>indirecte verdienmodellen</strong>. Bij het reclamemodel betalen adverteerders het
          platform (en via het platform vaak ook de maker) per keer dat een advertentie wordt getoond
          of aangeklikt. Jij betaalt dus niet met geld, maar met je aandacht en je kijkgedrag, die
          vervolgens aan adverteerders wordt "doorverkocht".
        </p>

        <InfoBox type="definitie" title="Definitie: het reclamemodel (advertentiemodel)">
          <p>
            Een verdienmodel waarbij een platform of maker geld verdient doordat adverteerders betalen
            om advertenties te tonen aan de kijkers, in plaats van dat de kijkers zelf betalen.
          </p>
        </InfoBox>

        <InfoBox type="definitie" title="Definitie: het abonnementsmodel">
          <p>
            Een verdienmodel waarbij gebruikers rechtstreeks een vast bedrag betalen voor toegang tot
            content, zonder tussenkomst van adverteerders.
          </p>
        </InfoBox>

        <p className="mb-4 text-slate-700">
          Het belangrijkste economische verschil: bij reclame-inkomsten is de <strong>adverteerder</strong>{' '}
          de eigenlijke klant, en ben jij als kijker het "product" dat wordt verkocht (via je aandacht en
          data); bij een abonnementsmodel ben jij zelf de klant. Veel makers combineren beide: reclame
          op hun video's, een betaald abonnement voor exclusieve content, én losse sponsordeals met
          merken.
        </p>

        <InfoBox type="verdieping" title="Verdieping: freemium, het beste van twee werelden">
          <p>
            Bij <strong>freemium</strong> krijgt iedereen gratis toegang tot een basisversie (vaak met
            advertenties), terwijl wie meer wil (geen reclame, extra functies) een abonnement kan
            afsluiten. Zo verdient een platform aan bijna elke gebruiker, ongeacht of die wel of niet
            wil betalen.
          </p>
        </InfoBox>

        <InfoBox type="vwo" title="De Uitdaging: risicospreiding door meerdere inkomstenbronnen">
          <p>
            Makers die zowel reclame-inkomsten, abonnementsgeld als sponsordeals combineren, spreiden
            hun financiële risico: als één inkomstenbron daalt (bijvoorbeeld doordat adverteerders
            minder budget hebben), vangen de andere bronnen dit gedeeltelijk op. Dit lijkt op hoe
            bedrijven hun omzet over meerdere producten of markten spreiden om minder kwetsbaar te
            zijn.
          </p>
        </InfoBox>
      </Section>

      <Section title="Praktijk" eyebrow="Vergelijk verdienmodellen">
        <p className="mb-3 text-slate-700">Bekijk de tabel met drie bekende platformen:</p>
        <div className="mb-4 overflow-x-auto">
          <table className="w-full min-w-[500px] border-collapse text-sm">
            <thead>
              <tr className="border-b border-border text-left text-slate-500">
                <th className="py-2 pr-4">Platform</th>
                <th className="py-2 pr-4">Verdienmodel</th>
                <th className="py-2 pr-4">Wie is de klant?</th>
              </tr>
            </thead>
            <tbody>
              {modellen.map((m) => (
                <tr key={m.naam} className="border-b border-border align-top">
                  <td className="py-2 pr-4 font-medium text-slate-800">{m.naam}</td>
                  <td className="py-2 pr-4 text-slate-600">{m.model}</td>
                  <td className="py-2 pr-4 text-slate-600">{m.klant}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <ul className="list-disc space-y-1 pl-5 text-slate-700">
          <li>Welke apps of platforms gebruik jij zelf die gratis zijn met reclame?</li>
          <li>Betaal jij (of je ouders) voor een abonnement zonder reclame? Waarom wel of niet?</li>
          <li>Bedenk een nadeel van het freemium-model voor gebruikers die altijd de gratis versie blijven gebruiken.</li>
        </ul>
      </Section>

      <VerwerkingsOpdracht
        titel="Opdracht: analyseer jouw eigen apps"
        werkboekPagina="2"
        instructie="Voer onderstaande stappen uit en werk je antwoorden uit in je werkboekje of schrift."
      >
        <ol className="list-decimal space-y-2 pl-5">
          <li>
            Kies drie apps of platforms die je zelf gebruikt en bepaal per app of dit het{' '}
            <strong>reclamemodel</strong>, het <strong>abonnementsmodel</strong> of{' '}
            <strong>freemium</strong> is.
          </li>
          <li>
            Leg voor elke app uit wie volgens jou "de klant" is: jij, of de adverteerder.
          </li>
          <li>
            Kies één van deze apps en beschrijf één voordeel en één nadeel van het verdienmodel dat
            deze app gebruikt, vanuit jouw perspectief als gebruiker.
          </li>
        </ol>
      </VerwerkingsOpdracht>

      <OefenBank lesTitel="Les 5.2" opdrachten={oefenbankLes52} />
    </PageShell>
  )
}
