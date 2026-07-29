import React from 'react'
import PageShell from '../components/PageShell.jsx'
import Section from '../components/Section.jsx'
import Leerdoelen from '../components/Leerdoelen.jsx'
import InfoBox from '../components/InfoBox.jsx'
import VerwerkingsOpdracht from '../components/VerwerkingsOpdracht.jsx'
import OefenBank from '../components/OefenBank.jsx'
import oefenbankLes14 from '../data/oefenbankLes14.js'

export default function Les14() {
  return (
    <PageShell>
      <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-blue-700">Les 1.4</p>
      <h1 className="mb-8 text-slate-900">Informatie-asymmetrie: de guru weet meer dan jij</h1>

      <Leerdoelen>
        Je legt uit wat informatie-asymmetrie inhoudt, herkent hoe finfluencers en scammers hiervan
        profiteren, en past concrete stappen van financiële zelfbescherming toe.
      </Leerdoelen>

      <Section title="Kerntheorie">
        <p className="mb-4 text-slate-700">
          Informatie-asymmetrie betekent dat de ene partij in een transactie veel meer relevante informatie
          heeft dan de andere — en dat verschil gebruikt in zijn eigen voordeel. Bij online scams is dit vaak
          extreem: de "guru" weet precies hoeveel hij zelf verdient, terwijl jij alleen zijn gepolijste
          verhaal ziet.
        </p>

        <InfoBox type="definitie" title="Definitie: informatie-asymmetrie">
          <p>
            Een situatie waarin de ene partij in een transactie (bijvoorbeeld de verkoper) veel meer
            relevante informatie heeft dan de andere partij (bijvoorbeeld jij als koper of belegger),
            waardoor er een oneerlijk voordeel ontstaat.
          </p>
        </InfoBox>

        <InfoBox type="definitie" title="Definitie: financiële zelfbescherming">
          <p>
            Het bewust nemen van maatregelen om jezelf te beschermen tegen financiële risico's en fraude,
            zoals het controleren van vergunningen, het zoeken van onafhankelijke informatie en het
            wantrouwen van druk en te-mooi-om-waar-te-zijn-beloftes.
          </p>
        </InfoBox>

        <InfoBox type="verdieping" title="Het verdienmodel van de guru is jouw onwetendheid">
          <p>
            Veel zogenaamde crypto- of trading-experts verdienen hun geld helemaal niet met traden, maar met
            het verkopen van dure "mentorship-programma's", links met een commissie (affiliate-marketing) of
            het werven van nieuwe deelnemers voor een piramidespel. Dat is informatie die ze je nooit zullen
            vertellen, want hun verdienmodel is jouw onwetendheid.
          </p>
        </InfoBox>

        <InfoBox type="vwo" title="De Uitdaging: het provisieverbod">
          <p>
            Om informatie-asymmetrie tussen adviseurs (of finfluencers) en consumenten te verkleinen, geldt
            in Nederland een <strong>provisieverbod</strong>: het is verboden om commissie te ontvangen voor
            het aanbrengen van klanten bij een beleggingsonderneming. Dit moet voorkomen dat een adviseur een
            verborgen financieel belang heeft bij het aanprijzen van een specifiek product, zonder dat jij
            dit belang kunt zien.
          </p>
        </InfoBox>

        <InfoBox type="verdieping" title="Praktische vuistregels voor jezelf">
          <p>
            Financiële zelfbescherming betekent dat jij de informatiekloof actief probeert te dichten
            voordat je ook maar één euro overmaakt: controleer of een aanbieder geregistreerd staat bij een
            toezichthouder (in Nederland de AFM of DNB), zoek onafhankelijke recensies buiten het platform
            van de verkoper zelf, en wees extra achterdochtig bij tijdsdruk en bij beloftes die met geen
            enkele andere legale belegging te evenaren zijn. De belangrijkste vuistregel blijft simpel:
            investeer nooit geld dat je niet kunt missen, en als iets te mooi klinkt om waar te zijn, is het
            dat vrijwel altijd ook.
          </p>
        </InfoBox>
      </Section>

      <VerwerkingsOpdracht
        titel="Opdracht: jouw eigen checklist"
        werkboekPagina={14}
        instructie="Stel je voor dat een klasgenoot jou om advies vraagt over een 'investeringskans' die hij online is tegengekomen."
      >
        <p>1. Maak een checklist van minstens vier vragen die je je klasgenoot zou stellen.</p>
        <p>
          2. Leg voor elke vraag uit welke informatie-asymmetrie je hiermee probeert te doorbreken.
        </p>
        <p>
          3. Zoek op de website van de AFM (afm.nl) op hoe je kunt controleren of een aanbieder een geldige
          vergunning heeft, en beschrijf in het kort wat je daar vindt.
        </p>
      </VerwerkingsOpdracht>

      <OefenBank lesTitel="1.4" opdrachten={oefenbankLes14} />
    </PageShell>
  )
}
