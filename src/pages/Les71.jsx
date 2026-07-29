import React from 'react'
import PageShell from '../components/PageShell.jsx'
import Section from '../components/Section.jsx'
import Leerdoelen from '../components/Leerdoelen.jsx'
import InfoBox from '../components/InfoBox.jsx'
import VerwerkingsOpdracht from '../components/VerwerkingsOpdracht.jsx'

import OefenBank from '../components/OefenBank.jsx'
import VraagAanbodSimulator from '../components/VraagAanbodSimulator.jsx'
import oefenbankLes71 from '../data/oefenbankLes71.js'

const voorbeelden = [
  { markt: 'Pretpark op een zonnige zaterdag', vraag: 'Hoog (veel bezoekers willen komen)', aanbod: 'Vast (maximale capaciteit)' },
  { markt: 'Pretpark op een regenachtige dinsdag', vraag: 'Laag', aanbod: 'Vast (dezelfde capaciteit)' },
  { markt: 'Verse aardbeien in de zomer', vraag: 'Gemiddeld', aanbod: 'Hoog (veel oogst beschikbaar)' },
  { markt: 'Vliegtuigstoelen vlak voor vertrek', vraag: 'Wisselend', aanbod: 'Vast (aantal stoelen ligt vast)' },
]

export default function Les71() {
  return (
    <PageShell>
      <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-blue-700">Les 7.1</p>
      <h1 className="mb-8 text-slate-900">Vraag en aanbod op de kaartjesmarkt: marktwerking en evenwichtsprijs</h1>

      <Leerdoelen>
        Je legt uit wat vraag, aanbod en de evenwichtsprijs zijn, en past dit toe op een markt met een vaste
        capaciteit, zoals een pretpark.
      </Leerdoelen>

      <Section title="Kerntheorie">
        <p className="mb-4 text-slate-700">
          Op elke markt komt de prijs van een product tot stand door het samenspel van{' '}
          <strong>vraag</strong> en <strong>aanbod</strong>. Consumenten bepalen samen de vraag: hoeveel zij
          bereid en in staat zijn te kopen bij een bepaalde prijs. Aanbieders bepalen samen het aanbod:
          hoeveel zij bereid en in staat zijn te verkopen bij een bepaalde prijs. Deze twee krachten samen
          bepalen wat er op een markt gebeurt.
        </p>

        <InfoBox type="definitie" title="Definitie: vraag en aanbod">
          <p>
            <strong>Vraag</strong> is de hoeveelheid van een product die consumenten bereid en in staat zijn
            te kopen bij een bepaalde prijs. <strong>Aanbod</strong> is de hoeveelheid van een product die
            aanbieders bereid en in staat zijn te verkopen bij een bepaalde prijs.
          </p>
        </InfoBox>

        <p className="mb-4 text-slate-700">
          Normaal gesproken geldt: hoe hoger de prijs, hoe lager de gevraagde hoeveelheid (mensen kopen
          minder bij een hogere prijs), en hoe hoger de prijs, hoe hoger de aangeboden hoeveelheid
          (aanbieders willen meer verkopen bij een hogere prijs). Dit heet de <strong>wet van vraag en
          aanbod</strong>.
        </p>

        <InfoBox type="definitie" title="Definitie: evenwichtsprijs (marktprijs)">
          <p>
            De <strong>evenwichtsprijs</strong> (of marktprijs) is de prijs waarbij de gevraagde hoeveelheid
            precies gelijk is aan de aangeboden hoeveelheid. Bij deze prijs is er geen overschot (te veel
            aanbod) en geen tekort (te veel vraag).
          </p>
        </InfoBox>

        <InfoBox type="verdieping" title="Verdieping: wat gebeurt er bij een verkeerde prijs?">
          <p>
            Ligt de prijs te laag, dan ontstaat er een <strong>tekort</strong>: de gevraagde hoeveelheid is
            groter dan de aangeboden hoeveelheid, en niet iedereen die wil kopen, kan dat ook daadwerkelijk
            doen — denk aan een uitverkocht pretpark met lange wachtrijen. Ligt de prijs te hoog, dan ontstaat
            er juist een <strong>overschot</strong>: er is meer aanbod dan vraag, en een deel van de
            capaciteit blijft onbenut, zoals een pretpark met lege paden en attracties.
          </p>
        </InfoBox>

        <InfoBox type="vwo" title="De Uitdaging: vast aanbod (inelastisch aanbod)">
          <p>
            Bij de meeste markten kan het aanbod op de langere termijn meebewegen: een bakker kan meer brood
            bakken, een fabriek kan meer produceren. Maar bij een pretpark is de{' '}
            <strong>capaciteit op de korte termijn vrijwel vast</strong>: het aantal attracties, personeelsleden
            en de fysieke ruimte veranderen niet van dag tot dag. Economen noemen dit een sterk{' '}
            <strong>inelastisch aanbod</strong>. Omdat het aanbod niet snel kan meebewegen met een wisselende
            vraag, is de prijs vaak het enige instrument dat een pretpark op korte termijn kan inzetten om
            vraag en aanbod dichter bij elkaar te brengen — de basis voor dynamic pricing, dat je in les 7.3
            verder uitwerkt.
          </p>
        </InfoBox>
      </Section>

      <Section title="Praktijk" eyebrow="Interactieve simulator">
        <p className="mb-4 text-slate-700">
          Speel met de prijs van een dagkaart en de maximale capaciteit van een pretpark, en ontdek wanneer er
          een tekort, een overschot of (vrijwel) een evenwicht ontstaat.
        </p>
        <VraagAanbodSimulator />

        <h3 className="mb-3 mt-8 text-slate-900">Verschillende markten vergelijken</h3>
        <div className="mb-4 overflow-x-auto">
          <table className="w-full min-w-[500px] border-collapse text-sm">
            <thead>
              <tr className="border-b border-border text-left text-slate-500">
                <th className="py-2 pr-4">Markt</th>
                <th className="py-2 pr-4">Vraag</th>
                <th className="py-2 pr-4">Aanbod</th>
              </tr>
            </thead>
            <tbody>
              {voorbeelden.map((v) => (
                <tr key={v.markt} className="border-b border-border align-top">
                  <td className="py-2 pr-4 font-medium text-slate-800">{v.markt}</td>
                  <td className="py-2 pr-4 text-slate-600">{v.vraag}</td>
                  <td className="py-2 pr-4 text-slate-600">{v.aanbod}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <ul className="list-disc space-y-1 pl-5 text-slate-700">
          <li>Bij welke markt in de tabel verwacht jij het vaakst een tekort of overschot? Waarom?</li>
          <li>Wat zou een pretpark kunnen doen als het aanbod niet kan meebewegen met de vraag?</li>
        </ul>
      </Section>

      <VerwerkingsOpdracht
        titel="Opdracht: bepaal de evenwichtsprijs"
        werkboekPagina="4"
        instructie="Voer onderstaande stappen uit en werk je antwoorden uit in je werkboekje of schrift."
      >
        <ol className="list-decimal space-y-2 pl-5">
          <li>
            Leg in je eigen woorden uit wat <strong>vraag</strong>, <strong>aanbod</strong> en de{' '}
            <strong>evenwichtsprijs</strong> zijn.
          </li>
          <li>
            Gebruik de simulator: zet de capaciteit op 15.000 bezoekers en zoek met de prijsslider de prijs op
            waarbij er (vrijwel) geen tekort en geen overschot is. Noteer deze prijs.
          </li>
          <li>
            Leg uit waarom een pretpark, in tegenstelling tot een bakker, zijn aanbod niet snel kan
            vergroten als de vraag stijgt.
          </li>
        </ol>
      </VerwerkingsOpdracht>

      <OefenBank lesTitel="Les 7.1" opdrachten={oefenbankLes71} />
    </PageShell>
  )
}
