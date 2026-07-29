import React from 'react'
import PageShell from '../components/PageShell.jsx'
import Section from '../components/Section.jsx'
import Leerdoelen from '../components/Leerdoelen.jsx'
import InfoBox from '../components/InfoBox.jsx'
import VerwerkingsOpdracht from '../components/VerwerkingsOpdracht.jsx'

import OefenBank from '../components/OefenBank.jsx'
import oefenbankLes54 from '../data/oefenbankLes54.js'

const signalen = [
  { signaal: 'Vaste vermelding #ad of #spon', betekenis: 'Verplichte, herkenbare aanduiding van een betaalde samenwerking' },
  { signaal: 'Herhaalde kortingscode van één merk', betekenis: 'Vaak een teken van een lopende, betaalde samenwerking' },
  { signaal: 'Uitsluitend positieve, ongenuanceerde recensie', betekenis: 'Kan duiden op een belang bij het product, ook zonder expliciete #ad' },
]

export default function Les54() {
  return (
    <PageShell>
      <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-blue-700">Les 5.4</p>
      <h1 className="mb-8 text-slate-900">Sponsoring, kostenoverdracht &amp; reclame herkennen</h1>

      <Leerdoelen>
        Je legt uit hoe sponsoring werkt en hoe marketingkosten indirect worden doorberekend aan de
        consument, en je kunt (verborgen) reclame herkennen en uitleggen waarom transparantie
        hierover wettelijk verplicht is.
      </Leerdoelen>

      <Section title="Kerntheorie">
        <p className="mb-4 text-slate-700">
          De privéjet, de designerkleding en de peperdure horloges die je bij sommige influencers
          voorbij ziet komen, worden meestal niet rechtstreeks door jouw portemonnee betaald — maar
          dat betekent niet dat niemand ervoor betaalt. Adverteerders betalen voor de zichtbaarheid
          die een influencer hun bezorgt, en die kosten worden uiteindelijk grotendeels doorberekend
          in de verkoopprijs van de producten die zij verkopen.
        </p>

        <InfoBox type="definitie" title="Definitie: sponsoring">
          <p>
            <strong>Sponsoring</strong> is een betaalde samenwerking waarbij een merk een influencer
            betaalt (in geld of producten) om een product of dienst te promoten bij diens volgers.
          </p>
        </InfoBox>

        <InfoBox type="definitie" title="Definitie: indirecte kostenoverdracht">
          <p>
            <strong>Indirecte kostenoverdracht</strong> houdt in dat de kosten die een merk betaalt aan
            een influencer voor promotie, uiteindelijk grotendeels worden doorberekend in de
            verkoopprijs die de consument voor het product betaalt. De kosten verdwijnen niet, ze
            worden alleen verplaatst.
          </p>
        </InfoBox>

        <p className="mb-4 text-slate-700">
          Als jij een product koopt dat via een influencer wordt aangeprezen, betaal je als consument
          dus indirect mee aan de marketingkosten van dat product — inclusief het bedrag dat naar de
          influencer ging. Dat maakt kritisch kijken belangrijk: een influencer die "gewoon zijn
          mening geeft" over een product, kan tegelijkertijd (soms zonder duidelijke vermelding)
          betaald worden om dat product te promoten.
        </p>

        <InfoBox type="juridisch" title="Juridisch: de wettelijke plicht tot herkenbaarheid">
          <p>
            In Nederland moeten influencers duidelijk aangeven wanneer een video een betaalde
            samenwerking is, bijvoorbeeld met <strong>#ad</strong> of <strong>#spon</strong>. Reclame
            moet wettelijk herkenbaar zijn: kijkers hebben het recht om te weten of ze naar een
            eerlijke, onbetaalde mening kijken of naar reclame. De Reclame Code Commissie houdt
            hier (mede) toezicht op.
          </p>
        </InfoBox>

        <InfoBox type="vwo" title="De Uitdaging: waarom sponsoring vaak overtuigender is dan tv-reclame">
          <p>
            Een influencer heeft vaak een hechtere, meer vertrouwde band met zijn volgers dan een
            onbekend gezicht in een tv-commercial, waardoor een aanbeveling overtuigender kan overkomen
            en gerichter een specifieke doelgroep bereikt. Dit maakt sponsoring voor merken vaak
            efficiënter dan brede, ongerichte tv-reclame — maar het brengt ook een risico met zich mee:
            als volgers doorkrijgen dat vrijwel alles betaald is, kan dit de geloofwaardigheid van de
            influencer juist ondermijnen.
          </p>
        </InfoBox>
      </Section>

      <Section title="Praktijk" eyebrow="Herken (verborgen) reclame">
        <p className="mb-3 text-slate-700">Bekijk enkele signalen die kunnen duiden op sponsoring:</p>
        <div className="mb-4 overflow-x-auto">
          <table className="w-full min-w-[500px] border-collapse text-sm">
            <thead>
              <tr className="border-b border-border text-left text-slate-500">
                <th className="py-2 pr-4">Signaal</th>
                <th className="py-2 pr-4">Wat het kan betekenen</th>
              </tr>
            </thead>
            <tbody>
              {signalen.map((s) => (
                <tr key={s.signaal} className="border-b border-border align-top">
                  <td className="py-2 pr-4 font-medium text-slate-800">{s.signaal}</td>
                  <td className="py-2 pr-4 text-slate-600">{s.betekenis}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <ul className="list-disc space-y-1 pl-5 text-slate-700">
          <li>Kun jij je een video herinneren waarin #ad of #spon werd vermeld?</li>
          <li>Waarom zou een influencer een sponsordeal soms proberen te verbergen?</li>
          <li>Bedenk hoe jij zelf zou kunnen checken of een aanbeveling betaald is.</li>
        </ul>
      </Section>

      <VerwerkingsOpdracht
        titel="Opdracht: speur naar sponsoring"
        werkboekPagina="4"
        instructie="Voer onderstaande stappen uit en werk je antwoorden uit in je werkboekje of schrift."
      >
        <ol className="list-decimal space-y-2 pl-5">
          <li>
            Zoek (samen met een klasgenoot, onder begeleiding) een video op van een influencer die je
            volgt en ga na of deze een #ad- of #spon-vermelding bevat.
          </li>
          <li>
            Leg uit wat <strong>indirecte kostenoverdracht</strong> betekent, met een eigen voorbeeld
            van een product dat via influencer-marketing wordt verkocht.
          </li>
          <li>
            Beoordeel: vind jij de huidige #ad-regels voldoende bescherming bieden aan kijkers? Geef
            minimaal één argument voor je standpunt.
          </li>
        </ol>
      </VerwerkingsOpdracht>

      <OefenBank lesTitel="Les 5.4" opdrachten={oefenbankLes54} />
    </PageShell>
  )
}
