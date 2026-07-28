import React, { useState } from 'react'
import PageShell from '../components/PageShell.jsx'
import Section from '../components/Section.jsx'
import Leerdoelen from '../components/Leerdoelen.jsx'
import InfoBox from '../components/InfoBox.jsx'
import VerwerkingsOpdracht from '../components/VerwerkingsOpdracht.jsx'
import OefenBank from '../components/OefenBank.jsx'
import oefenbankLes32 from '../data/oefenbankLes32.js'

const voorbeelden = [
  {
    dienst: 'Spotify',
    gratis: 'Muziek luisteren met reclame, beperkt aantal keren "skippen".',
    betaald: 'Geen reclame, onbeperkt skippen, offline luisteren.',
  },
  {
    dienst: 'Cloudopslag (bv. Google Drive)',
    gratis: 'Een klein aantal gigabytes gratis opslag.',
    betaald: 'Veel meer opslagruimte tegen een vast bedrag per maand.',
  },
  {
    dienst: 'Mobiele game',
    gratis: 'Volledige game speelbaar, maar met wachttijden of beperkte levens.',
    betaald: 'Wachttijden overslaan of extra levens kopen met echt geld.',
  },
]

export default function Les32() {
  const [open, setOpen] = useState(null)

  return (
    <PageShell>
      <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-blue-700">Les 3.2</p>
      <h1 className="mb-8 text-slate-900">Freemium: gratis totdat je toch betaalt</h1>

      <Leerdoelen>
        Je legt uit wat het freemium-model inhoudt, herkent hoe conversie en upselling werken, en beoordeelt
        waarom een gratis dienst voor een bedrijf toch winstgevend kan zijn.
      </Leerdoelen>

      <Section title="Kerntheorie">
        <p className="mb-4 text-slate-700">
          Veel apps en diensten die je "gratis" gebruikt, zijn dat niet helemaal. Denk aan Spotify, een
          mobiele game of extra opslagruimte in de cloud: de basisversie is gratis, maar zodra je meer wilt,
          moet je betalen. Dit heet het <strong>freemium-model</strong>.
        </p>

        <InfoBox type="definitie" title="Definitie: freemium-model">
          <p>
            Een verdienmodel waarbij een basisversie van een product of dienst gratis is, maar extra
            functies, opslag of het wegnemen van reclame alleen beschikbaar zijn tegen betaling.
          </p>
        </InfoBox>

        <InfoBox type="definitie" title="Definitie: conversieratio">
          <p>
            Het percentage gratis gebruikers dat uiteindelijk overstapt naar een betaalde versie van een
            dienst. Bij veel freemium-diensten ligt dit percentage laag (vaak tussen de 1% en 5%), maar bij
            een groot aantal gratis gebruikers levert dit alsnog een grote groep betalende klanten op.
          </p>
        </InfoBox>

        <InfoBox type="definitie" title="Definitie: upsell">
          <p>
            Het aanbieden van een duurdere of uitgebreidere versie van een dienst aan een klant die al
            gebruikmaakt van de gratis of goedkopere versie, bijvoorbeeld via pop-ups die op het juiste
            moment een upgrade voorstellen.
          </p>
        </InfoBox>

        <InfoBox type="verdieping" title="Waarom een gratis versie financieel slim is">
          <p>
            Een gratis versie trekt enorm veel gebruikers aan, zonder dat het bedrijf per gebruiker
            marketingkosten hoeft te maken. Zelfs bij een lage conversieratio kan dit, bij miljoenen gratis
            gebruikers, alsnog een grote groep betalende klanten opleveren. Bovendien "betalen" gratis
            gebruikers vaak op een andere manier: met hun aandacht (reclame-inkomsten) en soms met hun data.
          </p>
        </InfoBox>

        <InfoBox type="vwo" title="VWO-verdieping: churn en freemium samen">
          <p>
            Freemium-bedrijven kijken niet alleen naar de conversieratio, maar ook naar de{' '}
            <strong>churn</strong> van betaalde gebruikers: het percentage dat na het upgraden weer terug
            overstapt naar gratis of helemaal stopt. Een hoge conversieratio is minder waardevol als de
            churn van betalende gebruikers ook hoog is — het bedrijf wil dat gebruikers niet alleen
            upgraden, maar ook lang betalend abonnee blijven.
          </p>
        </InfoBox>
      </Section>

      <Section title="Praktijk: gratis versus betaald">
        <p className="mb-4 text-slate-700">
          Klik op een dienst om te zien wat het verschil is tussen de gratis en de betaalde versie.
        </p>
        <div className="grid gap-3 sm:grid-cols-3">
          {voorbeelden.map((v, i) => (
            <button
              key={v.dienst}
              onClick={() => setOpen(open === i ? null : i)}
              className={`rounded-lg border p-4 text-left transition-colors ${
                open === i ? 'border-blue-400 bg-blue-50' : 'border-border bg-white hover:border-blue-300'
              }`}
            >
              <p className="font-semibold text-slate-900">{v.dienst}</p>
              {open === i && (
                <div className="mt-3 space-y-2 border-t border-border pt-3 text-sm">
                  <p>
                    <span className="font-semibold text-slate-700">Gratis: </span>
                    {v.gratis}
                  </p>
                  <p>
                    <span className="font-semibold text-blue-700">Betaald: </span>
                    {v.betaald}
                  </p>
                </div>
              )}
            </button>
          ))}
        </div>
      </Section>

      <VerwerkingsOpdracht
        titel="Opdracht: ontleed een freemium-dienst"
        werkboekPagina={32}
        instructie="Kies zelf een app of dienst die jij gebruikt met een gratis en betaalde versie."
      >
        <p>1. Beschrijf precies wat je gratis krijgt en wat je alleen krijgt als je betaalt.</p>
        <p>2. Leg uit welk onderdeel van de gratis versie is bedoeld om je te verleiden tot upgraden.</p>
        <p>
          3. Zou jij zelf overstappen naar de betaalde versie? Onderbouw je antwoord met een economisch
          argument (bijvoorbeeld: wat kost het je, en wat levert het je op).
        </p>
      </VerwerkingsOpdracht>

      <OefenBank lesTitel="3.2" opdrachten={oefenbankLes32} />
    </PageShell>
  )
}
