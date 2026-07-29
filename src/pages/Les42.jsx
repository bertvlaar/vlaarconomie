import React from 'react'
import PageShell from '../components/PageShell.jsx'
import Section from '../components/Section.jsx'
import Leerdoelen from '../components/Leerdoelen.jsx'
import InfoBox from '../components/InfoBox.jsx'
import VerwerkingsOpdracht from '../components/VerwerkingsOpdracht.jsx'
import OefenBank from '../components/OefenBank.jsx'
import RekenOpdracht from '../components/RekenOpdracht.jsx'
import oefenbankLes42 from '../data/oefenbankLes42.js'
import rekenLes42 from '../data/rekenLes42.js'

export default function Les42() {
  return (
    <PageShell>
      <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-blue-700">Les 4.2</p>
      <h1 className="mb-8 text-slate-900">Fast fashion: sneller, goedkoper... en toch winstgevend</h1>

      <Leerdoelen>
        Je legt uit wat het verdienmodel van fast fashion is, herkent het verschil met slow fashion, en
        berekent hoe een hoge omloopsnelheid en groot volume samen voor winst zorgen, ook bij een kleine
        marge per product.
      </Leerdoelen>

      <Section title="Kerntheorie">
        <p className="mb-4 text-slate-700">
          In les 4.1 zag je dat een T-shirt van €5 nog steeds winstgevend kan zijn dankzij schaalvoordeel.
          Maar er is meer aan de hand: fast-fashionmerken verdienen hun geld niet alleen met lage kosten,
          maar ook met snelheid.
        </p>

        <InfoBox type="definitie" title="Definitie: fast fashion">
          <p>
            <strong>Fast fashion</strong> is een bedrijfsmodel waarbij kleding snel en goedkoop wordt
            geproduceerd, met een hoog tempo van nieuwe collecties die inspelen op actuele trends.
          </p>
        </InfoBox>

        <InfoBox type="definitie" title="Definitie: omloopsnelheid">
          <p>
            <strong>Omloopsnelheid</strong> is hoe snel de voorraad van een winkel wordt verkocht en
            vervangen door nieuwe collecties. Een hoge omloopsnelheid betekent dat een winkel meerdere
            keren per jaar (soms wel wekelijks) nieuwe kleding aanbiedt.
          </p>
        </InfoBox>

        <InfoBox type="definitie" title="Definitie: slow fashion">
          <p>
            <strong>Slow fashion</strong> is het tegenovergestelde model: minder, kwalitatief
            hoogwaardigere kleding, met een langzamere collectiecyclus en een hogere prijs per stuk.
          </p>
        </InfoBox>

        <InfoBox type="verdieping" title="Klein bedrag × groot aantal = grote winst">
          <p>
            Een fast-fashionmerk maakt vaak maar een paar cent tot een paar procent winst per kledingstuk.
            Maar doordat het merk enorme aantallen verkoopt én de voorraad razendsnel vervangt door nieuwe
            collecties, telt die kleine winst per stuk op tot een grote totale winst per jaar.
            Slow-fashionmerken doen het tegenovergestelde: een hogere winst per stuk, maar bij een veel
            lager volume.
          </p>
        </InfoBox>

        <InfoBox type="vwo" title="De Uitdaging: prijsgevoeligheid van fast-fashionklanten">
          <p>
            Fast-fashionkleding wordt vaak gekocht voor een korte trend in plaats van jarenlang gebruik.
            Klanten letten daardoor minder op kwaliteit en meer op prijs: ze zijn erg{' '}
            <strong>prijsgevoelig</strong>. Een kleine prijsverhoging kan hen snel naar een concurrent laten
            overstappen. Dit dwingt fast-fashionmerken om de prijs zo laag mogelijk te houden, en de winst
            juist te halen uit volume en omloopsnelheid in plaats van uit een hoge marge per stuk.
          </p>
        </InfoBox>
      </Section>

      <Section title="Praktijk: reken het verdienmodel door">
        <p className="mb-4 text-slate-700">
          Gebruik de formule <strong>Winst = Aantal verkocht × Winst per stuk</strong> (of{' '}
          <strong>Winst = Omzet × Winstmarge</strong>) om de volgende opdrachten te maken.
        </p>
        <div className="space-y-4">
          {rekenLes42.map((r) => (
            <RekenOpdracht key={r.nummer} {...r} />
          ))}
        </div>
      </Section>

      <VerwerkingsOpdracht
        titel="Opdracht: fast fashion vs. slow fashion"
        werkboekPagina={42}
        instructie="Beantwoord de volgende vragen in je werkboek."
      >
        <p>
          1. Noem twee voordelen en twee nadelen van fast fashion, gezien vanuit de consument én vanuit het
          milieu.
        </p>
        <p>
          2. Leg uit waarom fast-fashionklanten vaak prijsgevoeliger zijn dan slow-fashionklanten.
        </p>
        <p>
          3. Stel je voor dat jij een kledingmerk runt. Zou je kiezen voor het fast-fashion- of het
          slow-fashionmodel? Onderbouw je keuze met minimaal één economisch argument.
        </p>
      </VerwerkingsOpdracht>

      <OefenBank lesTitel="4.2" opdrachten={oefenbankLes42} />
    </PageShell>
  )
}
