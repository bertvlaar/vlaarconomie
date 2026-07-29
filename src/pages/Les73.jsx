import React from 'react'
import PageShell from '../components/PageShell.jsx'
import Section from '../components/Section.jsx'
import Leerdoelen from '../components/Leerdoelen.jsx'
import InfoBox from '../components/InfoBox.jsx'
import VerwerkingsOpdracht from '../components/VerwerkingsOpdracht.jsx'

import OefenBank from '../components/OefenBank.jsx'
import DynamicPricingSimulator from '../components/DynamicPricingSimulator.jsx'
import oefenbankLes73 from '../data/oefenbankLes73.js'

const sectoren = [
  { sector: 'Pretparken', trigger: 'Weer, seizoen, weekend/doordeweeks', voorbeeld: 'Duurder kaartje op een zonnige zaterdag in de zomervakantie' },
  { sector: 'Vliegtickets', trigger: 'Tijd tot vertrek, bezettingsgraad van het toestel', voorbeeld: 'Prijs stijgt naarmate de vertrekdatum dichterbij komt en er meer geboekt wordt' },
  { sector: 'Hotels', trigger: 'Seizoen, evenementen in de stad, bezettingsgraad', voorbeeld: 'Hogere kamerprijs tijdens een festivalweekend dan doordeweeks in het laagseizoen' },
  { sector: 'Uber / taxidiensten', trigger: 'Verhouding vraag naar ritten en beschikbare chauffeurs', voorbeeld: '"Surge pricing": de ritprijs stijgt snel tijdens spitsuur of een regenbui' },
]

export default function Les73() {
  return (
    <PageShell>
      <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-blue-700">Les 7.3</p>
      <h1 className="mb-8 text-slate-900">Dynamic pricing in de praktijk: pretparken, vliegtickets, hotels en Uber</h1>

      <Leerdoelen>
        Je legt uit wat dynamic pricing is en waarom bedrijven het toepassen, en herkent piekbelasting en
        capaciteitsbenutting in verschillende sectoren.
      </Leerdoelen>

      <Section title="Kerntheorie">
        <p className="mb-4 text-slate-700">
          In les 7.1 en 7.2 zag je dat pretparken een vrijwel vaste capaciteit hebben, terwijl de vraag sterk
          wisselt, en dat bezoekers verschillend reageren op prijsveranderingen. Bedrijven gebruiken deze
          kennis actief om hun prijzen voortdurend aan te passen: dit heet <strong>dynamic pricing</strong>.
        </p>

        <InfoBox type="definitie" title="Definitie: dynamic pricing">
          <p>
            <strong>Dynamic pricing</strong> is een prijsstrategie waarbij de verkoopprijs van een product of
            dienst voortdurend wordt aangepast aan de actuele vraag en beschikbare capaciteit, met als doel de
            vraag beter te laten aansluiten op het aanbod.
          </p>
        </InfoBox>

        <InfoBox type="definitie" title="Definitie: piekbelasting en capaciteitsbenutting">
          <p>
            <strong>Piekbelasting</strong> ontstaat wanneer de vraag op bepaalde momenten de beschikbare
            capaciteit overstijgt of er dicht tegenaan zit — met lange wachtrijen en ontevreden klanten tot
            gevolg. De <strong>capaciteitsbenutting</strong> geeft aan hoeveel van de maximale capaciteit
            daadwerkelijk wordt gebruikt: (aantal klanten ÷ maximale capaciteit) × 100%.
          </p>
        </InfoBox>

        <p className="mb-4 text-slate-700">
          Dynamic pricing wordt in veel meer sectoren toegepast dan alleen bij pretparken. Steeds gaat het om
          hetzelfde principe: een vrijwel vaste capaciteit (stoelen, kamers, chauffeurs) en een wisselende
          vraag, waarbij de prijs het instrument is om beide dichter bij elkaar te brengen.
        </p>

        <div className="mb-4 overflow-x-auto">
          <table className="w-full min-w-[600px] border-collapse text-sm">
            <thead>
              <tr className="border-b border-border text-left text-slate-500">
                <th className="py-2 pr-4">Sector</th>
                <th className="py-2 pr-4">Wat stuurt de prijs?</th>
                <th className="py-2 pr-4">Voorbeeld</th>
              </tr>
            </thead>
            <tbody>
              {sectoren.map((s) => (
                <tr key={s.sector} className="border-b border-border align-top">
                  <td className="py-2 pr-4 font-medium text-slate-800">{s.sector}</td>
                  <td className="py-2 pr-4 text-slate-600">{s.trigger}</td>
                  <td className="py-2 pr-4 text-slate-600">{s.voorbeeld}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <InfoBox type="verdieping" title="Verdieping: waarom niet altijd de hoogste prijs vragen?">
          <p>
            Een pretpark zou in theorie altijd een heel hoge prijs kunnen vragen, maar dat levert minder
            omzet op dan een goed afgestemde prijs: bij een te hoge prijs blijven bezoekers (en dus omzet)
            weg, terwijl bij een te lage prijs de capaciteit onbenut blijft of een tekort ontstaat. Dynamic
            pricing zoekt op elk moment naar de prijs die vraag en aanbod het beste op elkaar afstemt.
          </p>
        </InfoBox>

        <InfoBox type="vwo" title="De Uitdaging: surge pricing en maatschappelijke discussie">
          <p>
            Bij <strong>surge pricing</strong>, zoals bij Uber, kan de prijs binnen enkele minuten fors
            stijgen zodra de vraag naar ritten het aanbod van beschikbare chauffeurs sterk overstijgt — denk
            aan een plotselinge stortbui of een verstoring in het openbaar vervoer. Economisch gezien werkt
            dit als een signaal dat meer chauffeurs uitlokt en de vraag afremt bij wie een rit het minst
            dringend nodig heeft. Tegelijk leidt surge pricing in noodsituaties regelmatig tot maatschappelijke
            discussie over de vraag of het eerlijk is dat mensen dan (soms fors) meer moeten betalen voor iets
            dat op dat moment bijna een basisbehoefte is geworden.
          </p>
        </InfoBox>
      </Section>

      <Section title="Praktijk" eyebrow="Interactieve simulator">
        <p className="mb-4 text-slate-700">
          Stel de verwachte vraag, de capaciteit en de prijselasticiteit in, en bekijk welke prijs Fantasialand
          zou moeten vragen om de vraag precies op de capaciteit uit te laten komen.
        </p>
        <DynamicPricingSimulator />
      </Section>

      <VerwerkingsOpdracht
        titel="Opdracht: vergelijk dynamic pricing in verschillende sectoren"
        werkboekPagina="14"
        instructie="Voer onderstaande stappen uit en werk je antwoorden uit in je werkboekje of schrift."
      >
        <ol className="list-decimal space-y-2 pl-5">
          <li>
            Kies twee sectoren uit de tabel hierboven en leg per sector uit wat de vraag stuurt en waarom het
            aanbod daar (bijna) vast is.
          </li>
          <li>
            Gebruik de simulator: zet de verwachte vraag op 28.000, de capaciteit op 18.000 en de
            prijselasticiteit op −0,3. Noteer de geadviseerde prijs en leg uit waarom deze zo hoog uitvalt.
          </li>
          <li>
            Neem een standpunt in over surge pricing tijdens een noodsituatie: is dit een eerlijke toepassing
            van dynamic pricing? Onderbouw je antwoord in twee tot drie zinnen.
          </li>
        </ol>
      </VerwerkingsOpdracht>

      <OefenBank lesTitel="Les 7.3" opdrachten={oefenbankLes73} />
    </PageShell>
  )
}
