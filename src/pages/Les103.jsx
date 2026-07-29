import React from 'react'
import PageShell from '../components/PageShell.jsx'
import Section from '../components/Section.jsx'
import Leerdoelen from '../components/Leerdoelen.jsx'
import InfoBox from '../components/InfoBox.jsx'
import VerwerkingsOpdracht from '../components/VerwerkingsOpdracht.jsx'

import OefenBank from '../components/OefenBank.jsx'
import RekenOpdracht from '../components/RekenOpdracht.jsx'
import IPhoneWaardeketenSimulator from '../components/IPhoneWaardeketenSimulator.jsx'
import oefenbankLes103 from '../data/oefenbankLes103.js'
import rekenLes103 from '../data/rekenLes103.js'

export default function Les103() {
  return (
    <PageShell>
      <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-blue-700">Les 10.3</p>
      <h1 className="mb-8 text-slate-900">Van Congo tot Californië: de wereldwijde reis van je smartphone</h1>

      <Leerdoelen>
        Je legt uit wat internationale arbeidsdeling en wereldwijde waardeketens zijn, en past deze
        begrippen toe op de productie van een smartphone.
      </Leerdoelen>

      <Section title="Kerntheorie">
        <p className="mb-4 text-slate-700">
          Geen enkel land maakt een smartphone helemaal zelf. In plaats daarvan is de productie
          opgeknipt in tientallen stappen, die elk in het land gebeuren waar dat op dat moment het
          voordeligst kan: grondstoffen zoals kobalt en coltan worden gedolven in Congo, chips en
          schermen worden geproduceerd in Zuid-Korea en Taiwan, de onderdelen worden in Chinese
          fabrieken in elkaar gezet, en het ontwerp, de software en het merk komen uit Californië.
        </p>

        <InfoBox type="definitie" title="Definitie: internationale arbeidsdeling">
          <p>
            <strong>Internationale arbeidsdeling</strong> is de verdeling van productiestappen van een
            product over verschillende landen, waarbij elk land zich specialiseert in de stap waarin
            het relatief het meest efficiënt (of goedkoopst) is.
          </p>
        </InfoBox>

        <InfoBox type="definitie" title="Definitie: wereldwijde waardeketens">
          <p>
            De aaneenschakeling van al deze stappen — van grondstof tot eindproduct in de winkel —
            wordt een <strong>wereldwijde waardeketen</strong> (global value chain) genoemd: een keten
            van bedrijven in verschillende landen die elk een stukje bijdragen aan hetzelfde
            eindproduct, voordat het uiteindelijk bij de consument terechtkomt.
          </p>
        </InfoBox>

        <InfoBox type="verdieping" title="Verdieping: globalisering">
          <p>
            Dankzij deze wereldwijde waardeketens kunnen bedrijven gebruikmaken van de goedkoopste
            grondstoffen, de meest gespecialiseerde fabrieken en de slimste ontwerpers, ongeacht in
            welk land die zich bevinden — dit proces van steeds hechter met elkaar verweven
            wereldeconomieën heet <strong>globalisering</strong>.
          </p>
        </InfoBox>

        <InfoBox type="vwo" title="De Uitdaging: toegevoegde waarde per schakel">
          <p>
            Elke stap in de waardeketen voegt iets toe aan het product: dit noemen economen{' '}
            <strong>toegevoegde waarde</strong>, het verschil tussen de waarde van wat een bedrijf
            verkoopt en de waarde van de grondstoffen en onderdelen die het van andere bedrijven heeft
            ingekocht. Een fabriek in China die onderdelen ontvangt en er een werkend toestel van
            assembleert, voegt daarmee waarde toe; een ontwerpstudio in Californië die een uniek
            uiterlijk en besturingssysteem bedenkt, voegt eveneens waarde toe — maar, zoals les 10.4
            laat zien, lang niet in gelijke mate.
          </p>
        </InfoBox>
      </Section>

      <Section title="Praktijk" eyebrow="Interactieve waardeketen-simulator">
        <p className="mb-4 text-slate-700">
          Verschuif de verkoopprijs van de smartphone en bekijk hoe de toegevoegde waarde zich verdeelt
          over de verschillende schakels van de wereldwijde waardeketen.
        </p>
        <IPhoneWaardeketenSimulator />

        <h3 className="mb-3 mt-8 text-slate-900">Rekenen met de waardeketen (niveau 2F/3F)</h3>
        <div className="grid gap-4 md:grid-cols-2">
          {rekenLes103.map((r) => (
            <RekenOpdracht key={r.nummer} {...r} />
          ))}
        </div>
      </Section>

      <VerwerkingsOpdracht
        titel="Opdracht: beschrijf de waardeketen van je eigen smartphone"
        werkboekPagina="14"
        instructie="Voer onderstaande stappen uit en werk je antwoorden uit in je werkboekje of schrift."
      >
        <ol className="list-decimal space-y-2 pl-5">
          <li>
            Zet de vier hoofdstappen uit dit thema (grondstofwinning, chipproductie, assemblage,
            ontwerp/marketing) in de juiste volgorde en noteer per stap een land waar die stap
            plaatsvindt.
          </li>
          <li>
            Leg uit wat <strong>internationale arbeidsdeling</strong> betekent, en waarom dit
            economisch voordeliger kan zijn dan één land dat alles zelf produceert.
          </li>
          <li>
            Leg in eigen woorden uit hoe <strong>globalisering</strong> samenhangt met wereldwijde
            waardeketens.
          </li>
        </ol>
      </VerwerkingsOpdracht>

      <OefenBank lesTitel="Les 10.3" opdrachten={oefenbankLes103} />
    </PageShell>
  )
}
