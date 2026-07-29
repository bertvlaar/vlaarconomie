import React from 'react'
import PageShell from '../components/PageShell.jsx'
import Section from '../components/Section.jsx'
import Leerdoelen from '../components/Leerdoelen.jsx'
import InfoBox from '../components/InfoBox.jsx'
import VerwerkingsOpdracht from '../components/VerwerkingsOpdracht.jsx'
import OefenBank from '../components/OefenBank.jsx'
import oefenbankLes11 from '../data/oefenbankLes11.js'

export default function Les11() {
  return (
    <PageShell>
      <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-blue-700">Les 1.1</p>
      <h1 className="mb-8 text-slate-900">De TikTok-guru: rijk worden in 15 seconden</h1>

      <Leerdoelen>
        Je legt uit wat een finfluencer is, herkent hoe het algoritme van social media financiële scams
        versterkt, en beoordeelt waarom juist jongeren een aantrekkelijke doelgroep zijn voor online
        oplichters.
      </Leerdoelen>

      <Section title="Kerntheorie">
        <p className="mb-4 text-slate-700">
          Scroll drie minuten door TikTok of Instagram Reels en je komt hem vanzelf tegen: de "guru" in een
          huurauto voor een huurvilla, die schreeuwt dat jij "dom" bent als je nog steeds voor de kost werkt.
          Hij heeft altijd hetzelfde recept — crypto-trading, dropshipping, of een "geheim" online
          casino-systeem — en altijd dezelfde belofte: snel, makkelijk en gegarandeerd geld.
        </p>

        <InfoBox type="definitie" title="Definitie: finfluencer">
          <p>
            Een influencer die via social media (Instagram, YouTube, TikTok) financiële tips of
            beleggingsadvies geeft, vaak zonder de vereiste vergunning of transparantie over eigen belangen.
          </p>
        </InfoBox>

        <InfoBox type="definitie" title="Definitie: FOMO (fear of missing out)">
          <p>
            De angst om een financiële kans te missen, die mensen aanzet tot snel en minder doordacht
            handelen, bijvoorbeeld bij een "unieke, tijdelijke" beleggingskans.
          </p>
        </InfoBox>

        <InfoBox type="verdieping" title="Waarom het algoritme scams versterkt">
          <p>
            Dit is geen toeval. Het algoritme van social media beloont content die extreme emoties oproept:
            jaloezie, FOMO en de droom van moeiteloos succes scoren nu eenmaal beter dan een saai filmpje
            over pensioensparen. Hoe extremer de claim, hoe meer views — en hoe meer views, hoe meer nieuwe
            slachtoffers de guru kan werven.
          </p>
        </InfoBox>

        <InfoBox type="vwo" title="VWO-verdieping: waarom juist jongeren een doelwit zijn">
          <p>
            Tieners zijn een aantrekkelijke doelgroep voor deze oplichters: veel jongeren hebben nog weinig
            ervaring met financiële producten, zijn gewend om beslissingen te nemen op basis van korte
            video's, en voelen sociale druk als leeftijdsgenoten online pronken met "winst". Precies die
            combinatie maakt bewustzijn van dit mechanisme zo belangrijk: niet omdat jij dommer bent, maar
            omdat de scam speciaal is ontworpen om jouw brein te overtuigen.
          </p>
        </InfoBox>

        <InfoBox type="juridisch" title="Wat zegt de toezichthouder? De AFM over finfluencers">
          <p>
            De Autoriteit Financiële Markten (AFM) waarschuwt al jaren voor onbetrouwbare finfluencers.
            Financieel advies geven mag in Nederland alleen met de juiste vergunning, en het is verboden om
            commissie te ontvangen voor het aanbrengen van klanten bij een beleggingsonderneming (het
            zogenoemde provisieverbod). Toch overtreden finfluencers deze regels regelmatig: twee bekende
            finfluencers kregen in 2024 samen €800.000 boete voor het promoten van een illegale
            "vermogensbeheerder" die 4% rendement per maand beloofde — geld dat de beleggers uiteindelijk
            allemaal kwijtraakten.
          </p>
        </InfoBox>
      </Section>

      <VerwerkingsOpdracht
        titel="Opdracht: ontleed een finfluencer-video"
        werkboekPagina={11}
        instructie="Zoek (of herinner je) een video van een finfluencer of 'rijk-worden-guru' op social media."
      >
        <p>1. Beschrijf welke belofte er wordt gedaan, en binnen welke tijd dit zou moeten lukken.</p>
        <p>
          2. Noem minstens twee elementen in de video die bedoeld zijn om vertrouwen of FOMO op te wekken
          (bijvoorbeeld beelden, taalgebruik of tijdsdruk).
        </p>
        <p>
          3. Leg uit waarom het algoritme van het platform belang heeft bij het tonen van dit soort content
          aan een breed publiek.
        </p>
      </VerwerkingsOpdracht>

      <OefenBank lesTitel="1.1" opdrachten={oefenbankLes11} />
    </PageShell>
  )
}
