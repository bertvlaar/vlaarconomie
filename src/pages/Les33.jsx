import React from 'react'
import PageShell from '../components/PageShell.jsx'
import Section from '../components/Section.jsx'
import Leerdoelen from '../components/Leerdoelen.jsx'
import InfoBox from '../components/InfoBox.jsx'
import VerwerkingsOpdracht from '../components/VerwerkingsOpdracht.jsx'
import OefenBank from '../components/OefenBank.jsx'
import oefenbankLes33 from '../data/oefenbankLes33.js'

export default function Les33() {
  return (
    <PageShell>
      <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-blue-700">Les 3.3</p>
      <h1 className="mb-8 text-slate-900">Abonnementenroof: waarom opzeggen zo moeilijk is</h1>

      <Leerdoelen>
        Je legt uit wat een subscription trap is, herkent de psychologische valkuil van kleine maandelijkse
        bedragen, en beoordeelt de wettelijke bescherming die consumenten hebben bij het opzeggen van een
        abonnement.
      </Leerdoelen>

      <Section title="Kerntheorie">
        <p className="mb-4 text-slate-700">
          Een abonnement afsluiten kan meestal in twee klikken. Opzeggen? Dat voelt vaak als een
          hindernisbaan: een verstopte knop, een verplicht telefoontje op kantooruren, of een reeks
          tegenaanbiedingen voordat je eindelijk kunt stoppen. Dit is geen toeval.
        </p>

        <InfoBox type="definitie" title="Definitie: subscription trap (abonnementenval)">
          <p>
            Een bedrijfsstrategie waarbij aanmelden voor een abonnement bewust eenvoudig wordt gemaakt,
            terwijl opzeggen bewust ingewikkeld, tijdrovend of onduidelijk wordt gehouden.
          </p>
        </InfoBox>

        <InfoBox type="definitie" title="Definitie: opzegtermijn">
          <p>
            De periode die een consument vooraf in acht moet nemen voordat een abonnement daadwerkelijk
            stopt, ook al heeft de consument al opgezegd. Tijdens deze periode loopt de betaling meestal
            gewoon door.
          </p>
        </InfoBox>

        <InfoBox type="verdieping" title="De valkuil van 'maar een paar euro per maand'">
          <p>
            Waarom voelt €9,99 per maand onschuldiger aan dan €119,88 per jaar, terwijl het exact hetzelfde
            bedrag is? Mensen beoordelen kleine, herhaalde bedragen milder dan één groot bedrag. Daarnaast
            speelt het "set-and-forget"-effect: zodra een abonnement automatisch wordt afgeschreven,
            verdwijnt het uit je actieve aandacht, waardoor je het langer laat doorlopen dan je eigenlijk
            zou willen.
          </p>
        </InfoBox>

        <InfoBox type="juridisch" title="Wat zegt de wet? De Wet van Dam en de nieuwe opzegknop">
          <p>
            In Nederland geldt sinds 2012 de <strong>Wet van Dam</strong>: opzeggen moet net zo makkelijk
            zijn als aanmelden, en de opzegtermijn mag na de eerste contractperiode maximaal één maand zijn.
            Toch bleek uit onderzoek van toezichthouder ACM dat veel telecomaanbieders dit in de praktijk
            lastig maakten, bijvoorbeeld door opzeggen alleen telefonisch mogelijk te maken. Vanaf 2026 komt
            er daarnaast, dankzij een Europese richtlijn, een verplichte duidelijke "opzegknop" voor online
            afgesloten contracten en proefabonnementen.
          </p>
        </InfoBox>

        <InfoBox type="vwo" title="De Uitdaging: informatie-asymmetrie bij opzeggen">
          <p>
            Het bedrijf weet exact hoe de opzegprocedure werkt: welke stappen, welke wachttijden en welke
            voorwaarden gelden. De consument weet dit vooraf meestal niet. Dit verschil in kennis heet{' '}
            <strong>informatie-asymmetrie</strong>. Doordat de consument deze informatie mist, kan het
            bedrijf de procedure zo inrichten dat deze in het voordeel van het bedrijf werkt, zonder dat de
            consument dit vooraf kan inschatten.
          </p>
        </InfoBox>
      </Section>

      <VerwerkingsOpdracht
        titel="Opdracht: onderzoek een opzegprocedure"
        werkboekPagina={33}
        instructie="Zoek (samen met een ouder/verzorger, of via de website) op hoe je een abonnement kunt opzeggen dat jullie thuis hebben (bijvoorbeeld een streamingdienst, sportschool of tijdschrift)."
      >
        <p>1. Beschrijf de stappen die je moet zetten om dit abonnement op te zeggen.</p>
        <p>
          2. Vergelijk dit met de stappen die nodig waren om het abonnement af te sluiten. Wat valt je op?
        </p>
        <p>
          3. Leg uit hoe de Wet van Dam consumenten in dit geval beschermt, en of jij vindt dat de
          opzegprocedure hieraan voldoet.
        </p>
      </VerwerkingsOpdracht>

      <OefenBank lesTitel="3.3" opdrachten={oefenbankLes33} />
    </PageShell>
  )
}
