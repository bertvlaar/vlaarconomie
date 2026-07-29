import React, { useState } from 'react'
import PageShell from '../components/PageShell.jsx'
import Section from '../components/Section.jsx'
import Leerdoelen from '../components/Leerdoelen.jsx'
import InfoBox from '../components/InfoBox.jsx'
import VerwerkingsOpdracht from '../components/VerwerkingsOpdracht.jsx'
import OefenBank from '../components/OefenBank.jsx'
import oefenbankLes43 from '../data/oefenbankLes43.js'

const claims = [
  {
    claim: '"100% Eco Collectie" op een label, zonder verdere uitleg of keurmerk.',
    oordeel: 'Waarschijnlijk greenwashing',
    toelichting:
      'Een vage term zonder onafhankelijke controle of concrete cijfers is niet controleerbaar en dus geen hard bewijs van duurzaamheid.',
  },
  {
    claim: 'Kledingstuk met het GOTS-keurmerk (Global Organic Textile Standard) op het label.',
    oordeel: 'Geloofwaardiger',
    toelichting:
      'Een erkend, onafhankelijk keurmerk controleert daadwerkelijk aan vaste eisen, waardoor de claim beter te vertrouwen is dan een eigen marketingtekst.',
  },
  {
    claim: '"Climate Neutral" dankzij het compenseren van CO₂-uitstoot door het planten van bomen elders.',
    oordeel: 'Twijfelachtig',
    toelichting:
      'Compensatie zegt niets over de daadwerkelijke uitstoot die het product veroorzaakt; het is een aanvulling, geen bewijs dat de productie zelf duurzamer is geworden.',
  },
  {
    claim: 'Bedrijf publiceert jaarlijks een lijst met namen en adressen van alle fabrieken waarmee het werkt.',
    oordeel: 'Transparant',
    toelichting:
      'Concrete, controleerbare informatie over de keten maakt het voor onafhankelijke partijen (en journalisten) mogelijk om de omstandigheden te checken.',
  },
]

export default function Les43() {
  const [gekozen, setGekozen] = useState(null)

  return (
    <PageShell>
      <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-blue-700">Les 4.3</p>
      <h1 className="mb-8 text-slate-900">Greenwashing ontmaskerd: marketing vs. werkelijkheid</h1>

      <Leerdoelen>
        Je legt uit wat greenwashing is, herkent hoe marketingclaims kunnen afwijken van de werkelijke
        productieomstandigheden, en beoordeelt de waarde van een onafhankelijk keurmerk ten opzichte van
        een marketingterm van het merk zelf.
      </Leerdoelen>

      <Section title="Kerntheorie">
        <p className="mb-4 text-slate-700">
          "Duurzaam", "eco", "bewust" — steeds meer kledingmerken gebruiken dit soort woorden. Maar
          betekenen ze ook echt iets? Soms wel, soms niet. Wanneer een bedrijf zich duurzamer voordoet dan
          het in werkelijkheid is, spreken we van <strong>greenwashing</strong>.
        </p>

        <InfoBox type="definitie" title="Definitie: greenwashing">
          <p>
            <strong>Greenwashing</strong> is het overdrijven, vaag houden of verzinnen van de duurzaamheid
            van een product of bedrijf in de marketing, terwijl de werkelijke productie niet of nauwelijks
            duurzamer is dan gebruikelijk.
          </p>
        </InfoBox>

        <InfoBox type="definitie" title="Definitie: transparantie in de keten">
          <p>
            <strong>Transparantie in de keten</strong> betekent dat een bedrijf openheid geeft over waar en
            hoe een product gemaakt is: welke fabriek, welke grondstoffen, en onder welke
            arbeidsomstandigheden. Zonder transparantie kan een consument marketingclaims niet controleren.
          </p>
        </InfoBox>

        <InfoBox type="definitie" title="Definitie: keurmerk">
          <p>
            Een <strong>keurmerk</strong> is een label dat aangeeft dat een onafhankelijke organisatie heeft
            gecontroleerd of een product aan vastgestelde eisen voldoet (bijvoorbeeld over grondstoffen,
            chemicaliën of arbeidsomstandigheden). Omdat de controle onafhankelijk is, is een keurmerk in
            principe betrouwbaarder dan een marketingtekst van het merk zelf.
          </p>
        </InfoBox>

        <InfoBox type="verdieping" title="Waarom is greenwashing economisch aantrekkelijk voor een merk?">
          <p>
            Duurzamer produceren kost vaak geld: betere grondstoffen, eerlijkere lonen, minder uitstoot. Met
            greenwashing kan een merk het imago van duurzaamheid "kopen" via marketing, zonder de hogere
            kosten van échte verandering te dragen. Zo lijkt het merk aantrekkelijker voor consumenten die
            duurzaamheid belangrijk vinden, zonder dat dit iets kost aan de winst.
          </p>
        </InfoBox>

        <InfoBox type="vwo" title="De Uitdaging: informatie-asymmetrie">
          <p>
            Een kledingmerk weet veel meer over de eigen productieketen dan de consument: dit verschil in
            kennis heet <strong>informatie-asymmetrie</strong>. Doordat de consument de fabriek, de
            grondstoffen en de arbeidsomstandigheden niet kan zien, kan het merk claims doen die niet te
            checken zijn. Een onafhankelijk keurmerk vermindert deze informatie-asymmetrie, doordat een
            derde partij namens de consument controleert of de claim klopt.
          </p>
        </InfoBox>
      </Section>

      <Section title="Praktijk: greenwashing of geloofwaardig?">
        <p className="mb-4 text-slate-700">
          Klik op een claim om te zien hoe je 'm economisch kunt beoordelen. Let op: het gaat niet om wat er
          beloofd wordt, maar om wat er dáádwerkelijk gecontroleerd of onderbouwd is.
        </p>
        <div className="grid gap-3 md:grid-cols-2">
          {claims.map((c, i) => (
            <button
              key={i}
              onClick={() => setGekozen(gekozen === i ? null : i)}
              className={`rounded-lg border p-4 text-left transition-colors ${
                gekozen === i ? 'border-blue-400 bg-blue-50' : 'border-border bg-white hover:border-blue-300'
              }`}
            >
              <p className="font-medium text-slate-800">"{c.claim}"</p>
              {gekozen === i && (
                <div className="mt-3 border-t border-border pt-3">
                  <p className="mb-1 text-sm font-bold text-blue-700">Oordeel: {c.oordeel}</p>
                  <p className="text-sm text-slate-600">{c.toelichting}</p>
                </div>
              )}
            </button>
          ))}
        </div>
      </Section>

      <VerwerkingsOpdracht
        titel="Opdracht: ontleed een duurzaamheidsclaim"
        werkboekPagina={43}
        instructie="Zoek zelf (thuis, online of in een winkel) een kledingstuk met een duurzaamheidsclaim op het label of in de advertentie."
      >
        <p>1. Schrijf de exacte claim op ("100% duurzaam", "eco", een keurmerklogo, enzovoort).</p>
        <p>
          2. Zoek uit of het om een erkend, onafhankelijk keurmerk gaat of om een eigen marketingterm van
          het merk.
        </p>
        <p>
          3. Beoordeel: is dit waarschijnlijk greenwashing, of een geloofwaardige, controleerbare claim?
          Onderbouw je antwoord.
        </p>
      </VerwerkingsOpdracht>

      <OefenBank lesTitel="4.3" opdrachten={oefenbankLes43} />
    </PageShell>
  )
}
