import React from 'react'
import PageShell from '../components/PageShell.jsx'
import Section from '../components/Section.jsx'
import Leerdoelen from '../components/Leerdoelen.jsx'
import InfoBox from '../components/InfoBox.jsx'
import VerwerkingsOpdracht from '../components/VerwerkingsOpdracht.jsx'

import OefenBank from '../components/OefenBank.jsx'
import RekenOpdracht from '../components/RekenOpdracht.jsx'
import TweedehandsWaardeCalculator from '../components/TweedehandsWaardeCalculator.jsx'
import oefenbankLes83 from '../data/oefenbankLes83.js'
import rekenLes83 from '../data/rekenLes83.js'

export default function Les83() {
  return (
    <PageShell>
      <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-blue-700">Les 8.3</p>
      <h1 className="mb-8 text-slate-900">Waardebepaling: wat is jouw oude spullen nog waard?</h1>

      <Leerdoelen>
        Je legt uit wat afschrijving en restwaarde zijn, en berekent wat een tweedehands product nog
        waard is op basis van nieuwwaarde, leeftijd en conditie.
      </Leerdoelen>

      <Section title="Kerntheorie">
        <p className="mb-4 text-slate-700">
          Elk product verliest na aankoop geleidelijk waarde: dit heet <strong>afschrijving</strong>.
          Een jas die nieuw €120 kost, is na een jaar dragen niet meer €120 waard, ook al is er niets
          stuk. Het bedrag dat een product na verloop van tijd nog waard is, wordt de{' '}
          <strong>restwaarde</strong> genoemd.
        </p>

        <InfoBox type="definitie" title="Definitie: afschrijving">
          <p>
            <strong>Afschrijving</strong> is de waardevermindering van een product per jaar (of per
            gebruiksperiode) door veroudering, slijtage of nieuwere alternatieven op de markt.
          </p>
        </InfoBox>

        <InfoBox type="definitie" title="Definitie: restwaarde">
          <p>
            <strong>Restwaarde</strong> is de waarde die een product nog heeft nadat rekening is gehouden
            met afschrijving; het bedrag waarvoor een gebruikt product redelijkerwijs nog verkocht kan
            worden.
          </p>
        </InfoBox>

        <p className="mb-4 text-slate-700">
          De restwaarde hangt niet alleen af van de leeftijd van een product, maar ook van de{' '}
          <strong>conditie</strong>: twee identieke, even oude jassen kunnen toch een andere restwaarde
          hebben als de ene nog in nieuwstaat is en de andere zichtbare slijtage heeft.
        </p>

        <InfoBox type="verdieping" title="Verdieping: waarom nieuwwaarde het startpunt is">
          <p>
            Om de restwaarde van een tweedehands product te schatten, ga je uit van de{' '}
            <strong>nieuwwaarde</strong>: de prijs waarvoor het product nieuw te koop was. Vanuit dat
            bedrag reken je terug hoeveel waarde er door afschrijving en conditie is verdwenen.
          </p>
        </InfoBox>

        <InfoBox type="vwo" title="De Uitdaging: waardebehoud verschilt per merk">
          <p>
            Sommige merken hebben een hoog <strong>waardebehoud</strong>: door schaarste, populariteit of
            kwaliteit blijft de vraag naar tweedehands exemplaren hoog, waardoor ze per jaar minder snel
            afschrijven dan een gemiddeld product. Dit verklaart waarom een tweedehands designertas soms
            nog een groot deel van zijn nieuwwaarde behoudt, terwijl een gewoon kledingstuk na een paar
            jaar nog maar een fractie van de oorspronkelijke prijs oplevert.
          </p>
        </InfoBox>
      </Section>

      <Section title="Praktijk" eyebrow="Interactieve waardebepaling-calculator">
        <p className="mb-4 text-slate-700">
          Stel de nieuwwaarde, de leeftijd, het afschrijvingspercentage en de conditie in, en bekijk hoe
          de restwaarde van een tweedehands product wordt opgebouwd.
        </p>
        <TweedehandsWaardeCalculator />

        <h3 className="mb-3 mt-8 text-slate-900">Rekenen met afschrijving (niveau 2F/3F)</h3>
        <div className="grid gap-4 md:grid-cols-2">
          {rekenLes83.map((r) => (
            <RekenOpdracht key={r.nummer} {...r} />
          ))}
        </div>
      </Section>

      <VerwerkingsOpdracht
        titel="Opdracht: bepaal de waarde van een eigen product"
        werkboekPagina="14"
        instructie="Voer onderstaande stappen uit en werk je antwoorden uit in je werkboekje of schrift."
      >
        <ol className="list-decimal space-y-2 pl-5">
          <li>
            Kies een eigen product (bijvoorbeeld een kledingstuk, telefoon of fiets) en noteer de
            geschatte nieuwwaarde, leeftijd en conditie.
          </li>
          <li>
            Gebruik de calculator (of een eigen berekening) om de <strong>restwaarde</strong> van dit
            product te schatten.
          </li>
          <li>
            Leg uit waarom twee identieke producten van dezelfde leeftijd toch een verschillende
            restwaarde kunnen hebben.
          </li>
        </ol>
      </VerwerkingsOpdracht>

      <OefenBank lesTitel="Les 8.3" opdrachten={oefenbankLes83} />
    </PageShell>
  )
}
