import React from 'react'
import PageShell from '../components/PageShell.jsx'
import Section from '../components/Section.jsx'
import Leerdoelen from '../components/Leerdoelen.jsx'
import InfoBox from '../components/InfoBox.jsx'
import VerwerkingsOpdracht from '../components/VerwerkingsOpdracht.jsx'

import OefenBank from '../components/OefenBank.jsx'
import oefenbankLes101 from '../data/oefenbankLes101.js'

const landen = [
  { land: 'Nederland', situatie: 'Importeert het grootste deel van zijn aardgas', afhankelijkheid: 'Hoog' },
  { land: 'Noorwegen', situatie: 'Grote eigen gasvelden op de Noordzee', afhankelijkheid: 'Laag' },
  { land: 'Qatar', situatie: 'Eén van de grootste gasexporteurs ter wereld', afhankelijkheid: 'Zeer laag' },
  { land: 'Japan', situatie: 'Vrijwel geen eigen olie- of gasvoorraden', afhankelijkheid: 'Zeer hoog' },
]

export default function Les101() {
  return (
    <PageShell>
      <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-blue-700">Les 10.1</p>
      <h1 className="mb-8 text-slate-900">Energiemarkten: primaire energiebronnen als schaars goed</h1>

      <Leerdoelen>
        Je legt uit wat primaire energiebronnen zijn, en waarom de ongelijke verdeling ervan landen
        wereldwijd van elkaar afhankelijk maakt.
      </Leerdoelen>

      <Section title="Kerntheorie">
        <p className="mb-4 text-slate-700">
          Olie, aardgas en steenkool worden <strong>primaire energiebronnen</strong> genoemd:
          energiebronnen die rechtstreeks uit de natuur komen en niet zijn omgezet uit een andere bron
          (in tegenstelling tot bijvoorbeeld elektriciteit, die vaak juist wél is opgewekt uit een
          primaire bron zoals gas of zon). Deze primaire energiebronnen zijn eindig en ongelijk over de
          wereld verdeeld: het ene land heeft grote gasvelden, het andere land moet vrijwel alles
          importeren.
        </p>

        <InfoBox type="definitie" title="Definitie: primaire energiebronnen">
          <p>
            <strong>Primaire energiebronnen</strong> zijn energiebronnen die rechtstreeks uit de natuur
            worden gewonnen en niet zijn omgezet uit een andere energiebron, zoals aardgas, olie,
            steenkool, zon en wind.
          </p>
        </InfoBox>

        <p className="mb-4 text-slate-700">
          Omdat vraag en aanbod van gas en olie wereldwijd op elkaar inwerken via internationale
          markten, bepaalt niet alleen de Nederlandse vraag de prijs die jij thuis betaalt, maar de
          totale wereldwijde vraag en het totale wereldwijde aanbod. Valt er ergens een groot deel van
          het aanbod weg — bijvoorbeeld doordat een belangrijk producerend land zijn leveringen
          stopzet — dan stijgt de prijs voor iedereen die van diezelfde wereldmarkt afhankelijk is, ook
          al verandert er in Nederland zelf helemaal niets aan het eigen verbruik.
        </p>

        <InfoBox type="definitie" title="Definitie: netwerkkosten">
          <p>
            Naast de kale energieprijs betaal je thuis ook <strong>netwerkkosten</strong>: de kosten van
            de kabels, buizen en het onderhoud van het net dat de energie tot bij jou thuisbrengt.
          </p>
        </InfoBox>

        <InfoBox type="verdieping" title="Verdieping: waarom zonnepanelen wél degelijk helpen">
          <p>
            Zonnepanelen op je dak veranderen niets aan de wereldmarktprijs van gas — de bijdrage van
            één huishouden aan de totale wereldwijde vraag is daarvoor te klein. Ze zorgen er wel voor
            dat een huishouden voor een deel van zijn stroomverbruik niet langer afhankelijk is van
            diezelfde onvoorspelbare wereldmarkt. Vandaar dat zonnepanelen wél degelijk invloed hebben op
            je portemonnee, zeker wanneer de gasprijs plotseling stijgt.
          </p>
        </InfoBox>

        <InfoBox type="vwo" title="De Uitdaging: energieonafhankelijkheid als strategisch doel">
          <p>
            Voor landen die sterk afhankelijk zijn van geïmporteerde energie, is{' '}
            <strong>energieonafhankelijkheid</strong> een strategisch doel geworden: de mate waarin een
            land zelf in zijn energiebehoefte kan voorzien, zonder afhankelijk te zijn van import via de
            wereldmarkt. Landen investeren daarom in eigen duurzame opwekking, strategische
            gasvoorraden of alternatieve leveranciers, juist om minder kwetsbaar te zijn voor
            geopolitieke schokken (zie les 10.2).
          </p>
        </InfoBox>
      </Section>

      <Section title="Praktijk" eyebrow="Vergelijk landen">
        <p className="mb-3 text-slate-700">
          Bekijk de tabel hieronder met de energiesituatie van vier landen:
        </p>
        <div className="mb-4 overflow-x-auto">
          <table className="w-full min-w-[500px] border-collapse text-sm">
            <thead>
              <tr className="border-b border-border text-left text-slate-500">
                <th className="py-2 pr-4">Land</th>
                <th className="py-2 pr-4">Situatie</th>
                <th className="py-2 pr-4">Afhankelijkheid van import</th>
              </tr>
            </thead>
            <tbody>
              {landen.map((l) => (
                <tr key={l.land} className="border-b border-border align-top">
                  <td className="py-2 pr-4 font-medium text-slate-800">{l.land}</td>
                  <td className="py-2 pr-4 text-slate-600">{l.situatie}</td>
                  <td className="py-2 pr-4 text-slate-600">{l.afhankelijkheid}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <ul className="list-disc space-y-1 pl-5 text-slate-700">
          <li>Welk land verwacht jij dat het meest kwetsbaar is bij een wereldwijde prijsschok?</li>
          <li>Waarom denk je dat sommige landen wél en andere landen geen grote eigen energievoorraden hebben?</li>
          <li>Bedenk één maatregel die een sterk importafhankelijk land zou kunnen nemen om minder kwetsbaar te worden.</li>
        </ul>
      </Section>

      <VerwerkingsOpdracht
        titel="Opdracht: breng schaarste van energiebronnen in kaart"
        werkboekPagina="4"
        instructie="Voer onderstaande stappen uit en werk je antwoorden uit in je werkboekje of schrift."
      >
        <ol className="list-decimal space-y-2 pl-5">
          <li>
            Leg in je eigen woorden uit wat <strong>primaire energiebronnen</strong> zijn, en waarom
            deze ongelijk verdeeld zijn over de wereld.
          </li>
          <li>
            Leg uit wat <strong>netwerkkosten</strong> zijn en waarom deze bovenop de kale energieprijs
            komen.
          </li>
          <li>
            Kies één land uit de tabel hierboven en leg uit waarom dat land wel of juist niet kwetsbaar
            is voor prijsschommelingen op de wereldmarkt.
          </li>
        </ol>
      </VerwerkingsOpdracht>

      <OefenBank lesTitel="Les 10.1" opdrachten={oefenbankLes101} />
    </PageShell>
  )
}
