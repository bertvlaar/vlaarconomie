import React from 'react'
import PageShell from '../components/PageShell.jsx'
import Section from '../components/Section.jsx'
import Leerdoelen from '../components/Leerdoelen.jsx'
import InfoBox from '../components/InfoBox.jsx'
import VerwerkingsOpdracht from '../components/VerwerkingsOpdracht.jsx'

import OefenBank from '../components/OefenBank.jsx'
import RekenOpdracht from '../components/RekenOpdracht.jsx'
import oefenbankLes93 from '../data/oefenbankLes93.js'
import rekenLes93 from '../data/rekenLes93.js'

export default function Les93() {
  return (
    <PageShell>
      <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-blue-700">Les 9.3</p>
      <h1 className="mb-8 text-slate-900">Studiefinanciering: lening versus gift</h1>

      <Leerdoelen>
        Je legt uit wat het verschil is tussen studiefinanciering als gift en als lening, en rekent met
        rente op een studieschuld.
      </Leerdoelen>

      <Section title="Kerntheorie">
        <p className="mb-4 text-slate-700">
          Omdat studenten tijdens hun studie doorgaans weinig verdienen, maar wel kosten maken, bestaat
          er studiefinanciering om deze periode te overbruggen. Een belangrijk onderscheid daarbij is dat
          tussen een gift en een lening. Een gift is geld dat je niet hoeft terug te betalen: het
          vermindert de totale kosten van studeren direct en blijvend.
        </p>

        <InfoBox type="definitie" title="Definitie: studiefinanciering — lening versus gift">
          <p>
            <strong>Studiefinanciering</strong> is financiële ondersteuning tijdens de studiejaren,
            waarbij een <strong>gift</strong> niet hoeft te worden terugbetaald (en de totale kosten van
            studeren verlaagt), terwijl een <strong>lening</strong> later mét rente moet worden
            terugbetaald (en vooral het moment van betalen verschuift naar de toekomst).
          </p>
        </InfoBox>

        <p className="mb-4 text-slate-700">
          Een lening verlaagt niet de totale kosten van studeren, maar verschuift wanneer je die kosten
          betaalt: in plaats van nu (tijdens je studie, als je weinig verdient) betaal je later, als je
          eenmaal een inkomen hebt.
        </p>

        <InfoBox type="verdieping" title="Verdieping: waarom rente de investering verhoogt">
          <p>
            Dit onderscheid is belangrijk bij het maken van een kosten-batenanalyse: bij een gift daalt
            de totale investering die je moet terugverdienen, terwijl bij een lening de investering
            (inclusief rente) juist iets hoger kan uitvallen — al blijft lenen voor de meeste studenten
            nog altijd voordeliger dan de studie helemaal zelf uit eigen zak te betalen tijdens de
            studiejaren zelf.
          </p>
        </InfoBox>

        <InfoBox type="vwo" title="De Uitdaging: leenaversie">
          <p>
            Niet iedereen behandelt een lening en een even grote toekomstige terugbetaling als
            economisch gelijkwaardig: sommige mensen hebben een sterke afkeer van schulden
            ("leenaversie"), waardoor zij minder snel voor een studie kiezen zodra die met een lening
            gefinancierd moet worden — ook als de studie op de lange termijn financieel voordelig zou
            zijn. Dit is een voorbeeld van hoe psychologische factoren economische keuzes kunnen
            beïnvloeden, los van de "koude" cijfers.
          </p>
        </InfoBox>
      </Section>

      <Section title="Praktijk" eyebrow="Rekenen met rente op een studielening">
        <p className="mb-4 text-slate-700">
          Reken de volgende opgaven door om te zien hoe rente de totale kosten van een lening beïnvloedt.
        </p>
        <div className="grid gap-4 md:grid-cols-2">
          {rekenLes93.map((r) => (
            <RekenOpdracht key={r.nummer} {...r} />
          ))}
        </div>
      </Section>

      <VerwerkingsOpdracht
        titel="Opdracht: vergelijk twee stelsels van studiefinanciering"
        werkboekPagina="14"
        instructie="Voer onderstaande stappen uit en werk je antwoorden uit in je werkboekje of schrift."
      >
        <ol className="list-decimal space-y-2 pl-5">
          <li>
            Leg uit wat het verschil is tussen studiefinanciering als <strong>gift</strong> en als{' '}
            <strong>lening</strong>, en welke van de twee voor een student financieel voordeliger is.
          </li>
          <li>
            Bereken hoeveel euro een student in totaal terugbetaalt als hij €15.000 leent tegen 3% rente
            (totaal, niet samengesteld) over de hele looptijd.
          </li>
          <li>
            Leg uit waarom sommige mensen toch liever geen lening afsluiten, ook als die financieel
            voordelig zou zijn.
          </li>
        </ol>
      </VerwerkingsOpdracht>

      <OefenBank lesTitel="Les 9.3" opdrachten={oefenbankLes93} />
    </PageShell>
  )
}
