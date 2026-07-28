import React from 'react'
import PageShell from '../components/PageShell.jsx'
import Section from '../components/Section.jsx'
import Leerdoelen from '../components/Leerdoelen.jsx'
import InfoBox from '../components/InfoBox.jsx'
import VerwerkingsOpdracht from '../components/VerwerkingsOpdracht.jsx'

import OefenBank from '../components/OefenBank.jsx'
import oefenbankLes53 from '../data/oefenbankLes53.js'

const databronnen = [
  { data: 'Zoekgeschiedenis', gebruik: 'Advertenties die aansluiten bij recente zoekopdrachten' },
  { data: 'Kijktijd per video', gebruik: 'Meer vergelijkbare content aanbevelen aan de kijker' },
  { data: 'Locatiegegevens', gebruik: 'Advertenties van winkels of diensten in de buurt' },
  { data: 'Likes & reacties', gebruik: 'Content van vergelijkbare makers of onderwerpen tonen' },
]

export default function Les53() {
  return (
    <PageShell>
      <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-blue-700">Les 5.3</p>
      <h1 className="mb-8 text-slate-900">Algoritmes &amp; doelgroepmarketing: hoe platforms jou "kennen"</h1>

      <Leerdoelen>
        Je legt uit hoe algoritmes gebruikersdata gebruiken om gerichte advertenties en aanbevelingen
        te tonen (doelgroepmarketing), en je herkent zowel de voordelen als de risico's hiervan, zoals
        filterbubbels.
      </Leerdoelen>

      <Section title="Kerntheorie">
        <p className="mb-4 text-slate-700">
          Een <strong>algoritme</strong> is een set regels waarmee een platform automatisch bepaalt
          welke content, advertenties en aanbevelingen aan jou worden getoond. Deze algoritmes worden
          getraind op enorme hoeveelheden data over jouw gedrag: waar je op klikt, hoelang je kijkt,
          wanneer je scrolt en zelfs wanneer je juist stopt met kijken.
        </p>

        <InfoBox type="definitie" title="Definitie: algoritme">
          <p>
            Een <strong>algoritme</strong> is een geautomatiseerd systeem van regels dat, op basis van
            gebruikersdata, bepaalt welke content en advertenties aan een specifieke gebruiker worden
            getoond.
          </p>
        </InfoBox>

        <InfoBox type="definitie" title="Definitie: doelgroepmarketing">
          <p>
            <strong>Doelgroepmarketing</strong> is een vorm van marketing waarbij een advertentie
            gericht wordt getoond aan de mensen die er statistisch gezien het meest gevoelig voor
            zijn, in plaats van breed aan iedereen (zoals bij traditionele tv-reclame).
          </p>
        </InfoBox>

        <p className="mb-4 text-slate-700">
          Voor adverteerders is dit goud waard: in plaats van een advertentie breed aan iedereen te
          tonen, kan doelgroepmarketing een advertentie precies tonen aan de mensen die er
          waarschijnlijk het meest in geïnteresseerd zijn. Dit maakt reclame veel efficiënter — en dus
          duurder per bereikte, relevante kijker — dan ongerichte advertenties.
        </p>

        <InfoBox type="verdieping" title="Verdieping: de filterbubbel">
          <p>
            Een algoritme beloont content die mensen lang laat kijken of waarop mensen reageren.
            Hierdoor krijg je steeds meer content te zien die aansluit bij wat je al leuk vindt, en
            steeds minder andersoortige content of meningen. Dit noemen we een{' '}
            <strong>filterbubbel</strong>: je "bubbel" van informatie wordt smaller, zonder dat je het
            zelf doorhebt.
          </p>
        </InfoBox>

        <InfoBox type="vwo" title="VWO-Challenge: data als grondstof, privacy als prijs">
          <p>
            Gebruikersdata wordt wel eens "de grondstof van de aandachtseconomie" genoemd: zonder data
            over jouw gedrag kunnen platforms en adverteerders veel minder gericht (en dus minder
            winstgevend) werken. Hier staat een afweging tegenover: hoe meer data een platform
            verzamelt, hoe relevanter de content kan worden, maar hoe minder privacy jij overhoudt.
          </p>
        </InfoBox>
      </Section>

      <Section title="Praktijk" eyebrow="Van data naar advertentie">
        <p className="mb-3 text-slate-700">
          Bekijk hoe verschillende soorten data door algoritmes gebruikt kunnen worden:
        </p>
        <div className="mb-4 overflow-x-auto">
          <table className="w-full min-w-[500px] border-collapse text-sm">
            <thead>
              <tr className="border-b border-border text-left text-slate-500">
                <th className="py-2 pr-4">Databron</th>
                <th className="py-2 pr-4">Mogelijk gebruik door het algoritme</th>
              </tr>
            </thead>
            <tbody>
              {databronnen.map((d) => (
                <tr key={d.data} className="border-b border-border align-top">
                  <td className="py-2 pr-4 font-medium text-slate-800">{d.data}</td>
                  <td className="py-2 pr-4 text-slate-600">{d.gebruik}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <ul className="list-disc space-y-1 pl-5 text-slate-700">
          <li>Herken je een van deze voorbeelden uit je eigen ervaring op sociale media?</li>
          <li>Welke van deze databronnen vind jij het meest privacygevoelig, en waarom?</li>
          <li>Bedenk een manier waarop jij zelf zou kunnen zien of je in een filterbubbel zit.</li>
        </ul>
      </Section>

      <VerwerkingsOpdracht
        titel="Opdracht: jouw eigen aanbevelingen onder de loep"
        werkboekPagina="3"
        instructie="Voer onderstaande stappen uit en werk je antwoorden uit in je werkboekje of schrift."
      >
        <ol className="list-decimal space-y-2 pl-5">
          <li>
            Leg in je eigen woorden uit hoe een <strong>algoritme</strong> bepaalt wat jij te zien
            krijgt op een platform naar keuze.
          </li>
          <li>
            Geef een eigen voorbeeld van een advertentie of aanbeveling die je kreeg die opvallend
            goed aansloot bij jouw eerdere gedrag. Welke data zou hieraan ten grondslag kunnen liggen?
          </li>
          <li>
            Leg uit wat een <strong>filterbubbel</strong> is, en bedenk één manier om hier zelf
            bewuster mee om te gaan.
          </li>
        </ol>
      </VerwerkingsOpdracht>

      <OefenBank lesTitel="Les 5.3" opdrachten={oefenbankLes53} />
    </PageShell>
  )
}
