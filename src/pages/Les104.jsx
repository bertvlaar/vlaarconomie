import React from 'react'
import PageShell from '../components/PageShell.jsx'
import Section from '../components/Section.jsx'
import Leerdoelen from '../components/Leerdoelen.jsx'
import InfoBox from '../components/InfoBox.jsx'
import VerwerkingsOpdracht from '../components/VerwerkingsOpdracht.jsx'

import OefenBank from '../components/OefenBank.jsx'
import oefenbankLes104 from '../data/oefenbankLes104.js'

const stellingen = [
  {
    titel: '"Bedrijven als Apple zouden verplicht moeten worden een groter deel van de verkoopprijs te laten toekomen aan mijnwerkers en fabrieksarbeiders."',
    voor: [
      'Mijnwerkers in Congo en fabrieksarbeiders in China verrichten zwaar, essentieel werk, maar ontvangen slechts een fractie (ongeveer 5%) van de verkoopprijs.',
      'Een groter aandeel zou de levensomstandigheden van deze werknemers direct kunnen verbeteren.',
      'Andere sectoren (zoals fairtrade-koffie) laten zien dat een eerlijker verdeelde keten mogelijk is.',
    ],
    tegen: [
      'Een verplicht hoger aandeel zou de kostprijs van smartphones fors kunnen verhogen, wat ten koste gaat van consumenten wereldwijd.',
      'Bedrijven zouden fabrieken kunnen verplaatsen naar landen zonder zo\'n verplichting, waardoor werkgelegenheid juist verdwijnt.',
      'De hoge toegevoegde waarde van ontwerp en merk komt voort uit jarenlange investeringen in kennis en innovatie, niet uit toeval.',
    ],
  },
  {
    titel: '"De \'smiling curve\' is vooral een eerlijke beloning voor risico en investering, en geen oneerlijke verdeling."',
    voor: [
      'Ontwerpers en softwarebedrijven investeren enorme bedragen in onderzoek en ontwikkeling, vaak jaren vóórdat een product winst oplevert, en dragen daarmee ook het grootste risico.',
      'Kennis en een sterk merk zijn schaars en moeilijk te kopiëren, terwijl assemblagefabrieken relatief eenvoudig te vervangen zijn.',
      'Zonder deze investeringen zou het product (en daarmee alle banen in de keten, inclusief mijnbouw en assemblage) niet bestaan.',
    ],
    tegen: [
      'Mijnwerkers en fabrieksarbeiders dragen evengoed risico\'s, bijvoorbeeld voor hun gezondheid en veiligheid, zonder dat dit terugkomt in hun beloning.',
      'De verdeling ontstaat deels doordat arbeidsintensieve schakels makkelijk vervangbaar zijn, wat de onderhandelingspositie van arbeiders juist verzwakt, los van eerlijkheid.',
      'Grote winstmarges bij ontwerp en merk zijn niet altijd het directe gevolg van risico, maar ook van marktmacht en merkentrouw.',
    ],
  },
  {
    titel: '"Consumenten hebben een verantwoordelijkheid om kritisch te kijken naar de herkomst van hun smartphone, ook al is die vaak duurder."',
    voor: [
      'Consumenten die bewust kiezen voor eerlijker geproduceerde producten, kunnen bedrijven stimuleren om hun waardeketen te verbeteren.',
      'Zonder vraag naar eerlijkere producten hebben bedrijven weinig prikkel om iets aan de verdeling te veranderen.',
      'Vergelijkbare bewustwording heeft in andere sectoren (zoals kleding) al tot verandering geleid.',
    ],
    tegen: [
      'Niet elke consument kan een hogere prijs betalen, waardoor "stemmen met je portemonnee" vooral een optie is voor mensen met meer geld.',
      'De herkomst van onderdelen in een wereldwijde waardeketen is voor consumenten vaak nauwelijks te achterhalen.',
      'De verantwoordelijkheid voor eerlijke verdeling ligt primair bij bedrijven en overheden, die de keten en de regels daadwerkelijk kunnen sturen.',
    ],
  },
]

export default function Les104() {
  return (
    <PageShell>
      <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-blue-700">Les 10.4</p>
      <h1 className="mb-8 text-slate-900">De ongelijke verdeling van toegevoegde waarde</h1>

      <Leerdoelen>
        Je legt uit wat toegevoegde waarde en de "smiling curve" zijn, en beoordeelt of de verdeling
        van waarde in wereldwijde waardeketens eerlijk is.
      </Leerdoelen>

      <Section title="Kerntheorie">
        <p className="mb-4 text-slate-700">
          Een iPhone die in de winkel € 1.000 kost, is opgebouwd uit toegevoegde waarde die in
          verschillende landen is ontstaan. Stel: de grondstoffen (kobalt en coltan) uit Congo
          vertegenwoordigen € 20 van die € 1.000, de assemblage in Chinese fabrieken € 30, de chips en
          schermen uit Zuid-Korea en Taiwan € 250, en het ontwerp, de software, het merk en de
          marketing vanuit de Verenigde Staten € 500 (de resterende € 200 gaat naar winst, marges en
          distributie elders in de keten). Samen: € 20 + € 30 + € 250 + € 500 + € 200 = € 1.000.
        </p>

        <InfoBox type="definitie" title="Definitie: toegevoegde waarde">
          <p>
            <strong>Toegevoegde waarde</strong> is het verschil tussen de waarde van wat een bedrijf
            verkoopt en de waarde van de grondstoffen en onderdelen die het bij andere bedrijven heeft
            ingekocht; de eigen bijdrage van een bedrijf (of land) aan een product.
          </p>
        </InfoBox>

        <p className="mb-4 text-slate-700">
          Deze verdeling is opvallend ongelijk: de mijnwerkers in Congo en de fabrieksarbeiders in
          China verrichten fysiek zwaar, arbeidsintensief werk, maar nemen slechts € 20 + € 30 = € 50
          van de € 1.000 voor hun rekening — 5% van de verkoopprijs. De ontwerpers, software-ingenieurs
          en marketeers in Californië, die vooral kennis, creativiteit en een sterk merk inbrengen,
          nemen met € 500 juist de helft van de totale waarde voor hun rekening.
        </p>

        <InfoBox type="verdieping" title="Verdieping: de 'smiling curve'">
          <p>
            Economen noemen dit patroon wel de <strong>"smiling curve"</strong>: de stappen aan het
            begin (grondstoffen) én aan het eind (ontwerp, merk, verkoop) van een waardeketen leveren
            vaak de meeste toegevoegde waarde op, terwijl de stap in het midden (fysieke assemblage)
            relatief weinig oplevert — ook al is die stap arbeidsintensief en essentieel.
          </p>
        </InfoBox>

        <InfoBox type="vwo" title="De Uitdaging: waarom kennis schaarser is dan arbeid">
          <p>
            Dit verklaart waarom globalisering wereldwijd welvaart kan creëren, en tegelijk waarom die
            welvaart lang niet gelijk verdeeld terechtkomt bij iedereen die aan het eindproduct heeft
            meegewerkt: arbeidsintensieve assemblage kan relatief eenvoudig door andere fabrieken
            wereldwijd worden overgenomen, terwijl uniek ontwerp, geavanceerde chiptechnologie en een
            sterk merk veel schaarser en moeilijker te kopiëren zijn — en daardoor meer economische
            macht, en dus meer toegevoegde waarde, kunnen claimen.
          </p>
        </InfoBox>
      </Section>

      <Section title="Denk- en discussieopdracht" eyebrow="De Debathal">
        <p className="mb-4 text-slate-700">
          Kies een stelling, verdeel de klas in voor/tegen, en debatteer met onderstaande argumenten als
          startpunt. Gebruik zoveel mogelijk begrippen uit dit hele thema.
        </p>
        <div className="space-y-6">
          {stellingen.map((s, i) => (
            <div key={i} className="rounded-lg border border-border bg-white p-5">
              <h3 className="mb-3 text-slate-900">
                Stelling {i + 1}: {s.titel}
              </h3>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <p className="mb-2 text-sm font-semibold text-green-700">Vóór</p>
                  <ul className="list-disc space-y-1 pl-5 text-sm text-slate-700">
                    {s.voor.map((a, j) => (
                      <li key={j}>{a}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="mb-2 text-sm font-semibold text-docent">Tegen</p>
                  <ul className="list-disc space-y-1 pl-5 text-sm text-slate-700">
                    {s.tegen.map((a, j) => (
                      <li key={j}>{a}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <VerwerkingsOpdracht
        titel="Opdracht: reken de toegevoegde waarde na en kies een standpunt"
        werkboekPagina="19"
        instructie="Voer onderstaande stappen uit en werk je antwoorden uit in je werkboekje of schrift."
      >
        <ol className="list-decimal space-y-2 pl-5">
          <li>
            Bereken welk percentage van de € 1.000 verkoopprijs van de iPhone naar grondstoffen en
            assemblage samen gaat (€ 20 + € 30), en welk percentage naar ontwerp, software en marketing
            gaat (€ 500).
          </li>
          <li>
            Leg uit waarom dit patroon de "smiling curve" wordt genoemd.
          </li>
          <li>
            Kies één van de drie stellingen hierboven en formuleer in twee tot drie zinnen jouw eigen,
            onderbouwde standpunt.
          </li>
        </ol>
      </VerwerkingsOpdracht>

      <OefenBank lesTitel="Les 10.4" opdrachten={oefenbankLes104} />
    </PageShell>
  )
}
