import React from 'react'
import PageShell from '../components/PageShell.jsx'
import Section from '../components/Section.jsx'
import Leerdoelen from '../components/Leerdoelen.jsx'
import InfoBox from '../components/InfoBox.jsx'
import VerwerkingsOpdracht from '../components/VerwerkingsOpdracht.jsx'

import OefenBank from '../components/OefenBank.jsx'
import oefenbankLes81 from '../data/oefenbankLes81.js'

const platforms = [
  { platform: 'Vinted', model: 'Verkoper verstuurt; koper betaalt kopersbescherming', focus: 'Kleding & accessoires' },
  { platform: 'Marktplaats', model: 'Vaak lokaal afhalen, geen verplichte servicekosten', focus: 'Alles: meubels, elektronica, kleding' },
  { platform: 'Depop', model: 'Verkoper betaalt commissie over de verkoopprijs', focus: 'Vintage & streetwear, jongere doelgroep' },
]

export default function Les81() {
  return (
    <PageShell>
      <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-blue-700">Les 8.1</p>
      <h1 className="mb-8 text-slate-900">C2C-markten: van winkel naar peer-to-peer handel</h1>

      <Leerdoelen>
        Je legt uit wat een C2C-markt is en hoe deze verschilt van een gewone winkel, en herkent welke
        transactiekosten en risico's horen bij het kopen en verkopen via platforms als Vinted en
        Marktplaats.
      </Leerdoelen>

      <Section title="Kerntheorie">
        <p className="mb-4 text-slate-700">
          Wanneer je iets koopt bij een winkel, koopt dat bedrijf eerst zelf producten in bij een
          fabrikant of groothandel, en verkoopt het deze vervolgens met winst door aan jou als
          consument: dit heet <strong>B2C</strong> (business-to-consumer). Bij Vinted, Marktplaats en
          Depop werkt het anders: hier verkopen consumenten hun eigen, al gebruikte spullen rechtstreeks
          aan een andere consument, zonder dat het platform zelf eigenaar wordt van het product.
        </p>

        <InfoBox type="definitie" title="Definitie: C2C (Consument-tot-consument)">
          <p>
            <strong>C2C</strong> is een markt waarop consumenten rechtstreeks aan elkaar verkopen, zonder
            dat een bedrijf als tussenhandelaar de goederen zelf inkoopt en doorverkoopt.
          </p>
        </InfoBox>

        <InfoBox type="definitie" title="Definitie: platformeconomie">
          <p>
            De <strong>platformeconomie</strong> is een economisch model waarbij een online platform
            vraag en aanbod van consumenten bij elkaar brengt, zonder zelf eigenaar te worden van de
            verhandelde producten of diensten. Het platform verdient meestal aan servicekosten of
            commissie per transactie.
          </p>
        </InfoBox>

        <p className="mb-4 text-slate-700">
          Het kopen en verkopen op zo'n platform is niet gratis: naast de prijs van het product zelf
          betaal je (of de verkoper) vaak ook nog <strong>transactiekosten</strong>: tijd die het kost om
          te zoeken naar het juiste product, servicekosten van het platform, en het risico dat het
          product toch niet overeenkomt met de beschrijving.
        </p>

        <InfoBox type="definitie" title="Definitie: transactiekosten">
          <p>
            <strong>Transactiekosten</strong> zijn de kosten die het kost om een transactie tot stand te
            brengen, zoals de tijd om te zoeken en te onderhandelen, de servicekosten van een platform en
            het risico dat er iets misgaat.
          </p>
        </InfoBox>

        <InfoBox type="verdieping" title="Verdieping: waarom je niet altijd weet wat je koopt">
          <p>
            Bij tweedehands spullen ken je de verkoper meestal niet persoonlijk, en moet je vertrouwen op
            foto's en een beschrijving. De verkoper weet echter vaak beter dan jij hoe versleten het
            product werkelijk is, of het nog goed werkt, of of er verborgen gebreken zijn.
          </p>
        </InfoBox>

        <InfoBox type="vwo" title="VWO-Challenge: informatie-asymmetrie en reputatiesystemen">
          <p>
            Economen noemen dit verschil in kennis tussen koper en verkoper{' '}
            <strong>informatie-asymmetrie</strong>: de verkoper heeft meer informatie over het product dan
            de koper, wat de koper kwetsbaar maakt. Platforms proberen dit risico te verkleinen met
            reputatiesystemen (sterrenbeoordelingen van eerdere kopers), duidelijke conditie-eisen en
            kopersbescherming, zodat een onbekende verkoper toch enigszins betrouwbaar overkomt.
          </p>
        </InfoBox>
      </Section>

      <Section title="Praktijk" eyebrow="Vergelijk platforms">
        <p className="mb-3 text-slate-700">
          Bekijk de tabel hieronder met drie bekende C2C-platforms:
        </p>
        <div className="mb-4 overflow-x-auto">
          <table className="w-full min-w-[500px] border-collapse text-sm">
            <thead>
              <tr className="border-b border-border text-left text-slate-500">
                <th className="py-2 pr-4">Platform</th>
                <th className="py-2 pr-4">Verdienmodel / kenmerk</th>
                <th className="py-2 pr-4">Focus</th>
              </tr>
            </thead>
            <tbody>
              {platforms.map((p) => (
                <tr key={p.platform} className="border-b border-border align-top">
                  <td className="py-2 pr-4 font-medium text-slate-800">{p.platform}</td>
                  <td className="py-2 pr-4 text-slate-600">{p.model}</td>
                  <td className="py-2 pr-4 text-slate-600">{p.focus}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <ul className="list-disc space-y-1 pl-5 text-slate-700">
          <li>Welk platform zou jij kiezen om je oude kleding te verkopen, en waarom?</li>
          <li>Welk risico loop je als koper op elk van deze platforms, en hoe zou je dat kunnen verkleinen?</li>
          <li>Bedenk één manier waarop een platform geld verdient, zonder zelf een product te verkopen.</li>
        </ul>
      </Section>

      <VerwerkingsOpdracht
        titel="Opdracht: analyseer een C2C-platform"
        werkboekPagina="4"
        instructie="Voer onderstaande stappen uit en werk je antwoorden uit in je werkboekje of schrift."
      >
        <ol className="list-decimal space-y-2 pl-5">
          <li>
            Leg in je eigen woorden uit wat een <strong>C2C-markt</strong> is, en wat het verschil is met
            een gewone winkel (B2C).
          </li>
          <li>
            Noem drie soorten <strong>transactiekosten</strong> die je tegenkomt bij het kopen of
            verkopen op Vinted of Marktplaats.
          </li>
          <li>
            Leg uit wat <strong>informatie-asymmetrie</strong> is, en hoe platforms proberen dit risico te
            verkleinen.
          </li>
        </ol>
      </VerwerkingsOpdracht>

      <OefenBank lesTitel="Les 8.1" opdrachten={oefenbankLes81} />
    </PageShell>
  )
}
