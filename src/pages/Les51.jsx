import React from 'react'
import PageShell from '../components/PageShell.jsx'
import Section from '../components/Section.jsx'
import Leerdoelen from '../components/Leerdoelen.jsx'
import InfoBox from '../components/InfoBox.jsx'
import VerwerkingsOpdracht from '../components/VerwerkingsOpdracht.jsx'

import OefenBank from '../components/OefenBank.jsx'
import oefenbankLes51 from '../data/oefenbankLes51.js'

const tijdsbesteding = [
  { activiteit: 'Korte video\'s kijken (bijv. Reels, TikTok, Shorts)', schatting: '± 90 minuten per dag' },
  { activiteit: 'Berichtjes & chatten', schatting: '± 45 minuten per dag' },
  { activiteit: 'Gamen', schatting: '± 60 minuten per dag' },
  { activiteit: 'Muziek/podcasts luisteren', schatting: '± 40 minuten per dag' },
]

export default function Les51() {
  return (
    <PageShell>
      <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-blue-700">Les 5.1</p>
      <h1 className="mb-8 text-slate-900">De aandachtseconomie: jouw tijd is het echte product</h1>

      <Leerdoelen>
        Je legt uit wat de aandachtseconomie is en waarom aandacht een schaars economisch goed is, en
        je herkent waarom platforms en makers hun best doen om zoveel mogelijk van jouw tijd op te
        eisen.
      </Leerdoelen>

      <Section title="Kerntheorie">
        <p className="mb-4 text-slate-700">
          Een YouTuber die "gewoon wat games speelt" verdient soms meer dan een chirurg. Dat klinkt
          gek, tot je beseft dat hij niet handelt in games, maar in iets veel schaarsers: jouw
          aandacht. In de <strong>aandachtseconomie</strong> is niet geld of een fysiek product het
          schaarse goed, maar menselijke aandacht. Jij hebt maar 24 uur per dag, en elk platform,
          elke app en elke maker strijdt om zoveel mogelijk van die uren voor zichzelf op te eisen.
        </p>

        <InfoBox type="definitie" title="Definitie: schaarste">
          <p>
            <strong>Schaarste</strong> ontstaat wanneer er meer vraag naar iets is dan er van
            beschikbaar is. Omdat een schaars goed niet voor iedereen onbeperkt voorhanden is, ontstaat
            er concurrentie om het te bemachtigen.
          </p>
        </InfoBox>

        <InfoBox type="definitie" title="Definitie: de aandachtseconomie">
          <p>
            De <strong>aandachtseconomie</strong> is een economisch systeem waarin menselijke aandacht
            (in plaats van geld of fysieke goederen) het schaarse goed is waar platforms, makers en
            adverteerders om concurreren, omdat de beschikbare tijd en aandacht van mensen beperkt is.
          </p>
        </InfoBox>

        <p className="mb-4 text-slate-700">
          Hoe langer jij kijkt, scrolt of luistert, hoe meer waarde een platform of maker kan
          genereren — ook al betaal jij zelf niets voor de video. Dit verklaart ook waarom content
          steeds pakkender, sneller en soms extremer wordt: hoe beter een video erin slaagt jouw
          aandacht vast te houden, hoe waardevoller die video wordt voor het platform en de maker,
          ongeacht of de inhoud jou ook daadwerkelijk iets oplevert.
        </p>

        <InfoBox type="verdieping" title="Verdieping: ontworpen om je niet te laten stoppen">
          <p>
            Functies als "autoplay" (automatisch de volgende video starten) of oneindig scrollen zijn
            geen toeval: ze zijn bewust ontworpen om de drempel om te stoppen met kijken zo laag
            mogelijk te maken. Elke seconde die jij extra kijkt, is economisch gezien winst voor het
            platform.
          </p>
        </InfoBox>

        <InfoBox type="vwo" title="De Uitdaging: opportunitykosten van je tijd">
          <p>
            Economen noemen de waarde van het beste alternatief dat je opgeeft door een keuze te
            maken de <strong>opportunitykosten</strong> (of alternatieve aanwendingsmogelijkheden).
            Twee uur scrollen kost je geen geld, maar wél de twee uur die je ook aan huiswerk, sporten
            of afspreken had kunnen besteden. Ook "gratis" tijdsbesteding heeft dus een economische
            prijs.
          </p>
        </InfoBox>
      </Section>

      <Section title="Praktijk" eyebrow="Reken aan je eigen aandacht">
        <p className="mb-3 text-slate-700">
          Bekijk onderstaande (voorbeeld)tabel van een gemiddelde tiener op een schooldag:
        </p>
        <div className="mb-4 overflow-x-auto">
          <table className="w-full min-w-[500px] border-collapse text-sm">
            <thead>
              <tr className="border-b border-border text-left text-slate-500">
                <th className="py-2 pr-4">Activiteit</th>
                <th className="py-2 pr-4">Geschatte tijd</th>
              </tr>
            </thead>
            <tbody>
              {tijdsbesteding.map((t) => (
                <tr key={t.activiteit} className="border-b border-border align-top">
                  <td className="py-2 pr-4 font-medium text-slate-800">{t.activiteit}</td>
                  <td className="py-2 pr-4 text-slate-600">{t.schatting}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <ul className="list-disc space-y-1 pl-5 text-slate-700">
          <li>Tel de tijd in de tabel bij elkaar op: hoeveel uur "aandacht" levert dit per dag op?</li>
          <li>Vergelijk dit met je eigen schatting van jouw schermtijd. Klopt dit ongeveer?</li>
          <li>Welke van deze activiteiten kost jou volgens jou de meeste opportunitykosten, en waarom?</li>
        </ul>
      </Section>

      <VerwerkingsOpdracht
        titel="Opdracht: jouw eigen aandachtsbudget"
        werkboekPagina="1"
        instructie="Voer onderstaande stappen uit en werk je antwoorden uit in je werkboekje of schrift."
      >
        <ol className="list-decimal space-y-2 pl-5">
          <li>
            Leg in je eigen woorden uit wat de <strong>aandachtseconomie</strong> is, met een eigen
            voorbeeld van een app of platform dat om jouw aandacht strijdt.
          </li>
          <li>
            Schat hoeveel uur per dag jij ongeveer besteedt aan schermtijd, en bereken hoeveel uur dat
            per week is.
          </li>
          <li>
            Noem één concrete opportunitykost: iets dat jij daardoor waarschijnlijk minder doet, en
            leg uit waarom dit voor jou een "kostenpost" is, ook al kost het geen geld.
          </li>
        </ol>
      </VerwerkingsOpdracht>

      <OefenBank lesTitel="Les 5.1" opdrachten={oefenbankLes51} />
    </PageShell>
  )
}
