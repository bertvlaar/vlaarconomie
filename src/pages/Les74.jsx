import React from 'react'
import PageShell from '../components/PageShell.jsx'
import Section from '../components/Section.jsx'
import Leerdoelen from '../components/Leerdoelen.jsx'
import InfoBox from '../components/InfoBox.jsx'
import VerwerkingsOpdracht from '../components/VerwerkingsOpdracht.jsx'

import OefenBank from '../components/OefenBank.jsx'
import RekenOpdracht from '../components/RekenOpdracht.jsx'
import oefenbankLes74 from '../data/oefenbankLes74.js'
import rekenLes74 from '../data/rekenLes74.js'

const psychologischeVoorbeelden = [
  { techniek: 'Charm pricing (afrondingseffect)', voorbeeld: '€39,95 in plaats van €40', werking: 'Consumenten lezen vooral het eerste cijfer en ervaren de prijs als "in de dertig" in plaats van "in de veertig".' },
  { techniek: 'Prijsanker', voorbeeld: 'Een doorgestreepte "van €60" naast een prijs van "voor €45"', werking: 'De hoge doorgestreepte prijs dient als referentiepunt, waardoor €45 goedkoop aanvoelt.' },
  { techniek: 'Prijsdifferentiatie', voorbeeld: 'Kindertarief, seniorentarief of vroegboekkorting', werking: 'Verschillende groepen met een verschillende prijsgevoeligheid betalen een andere prijs voor hetzelfde product.' },
  { techniek: 'Bundelprijzen', voorbeeld: 'Combiticket "toegang + maaltijd" voor €55 in plaats van los €40 + €20', werking: 'De korting op de bundel stimuleert bezoekers om meer in één keer te kopen dan ze los zouden doen.' },
]

export default function Les74() {
  return (
    <PageShell>
      <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-blue-700">Les 7.4</p>
      <h1 className="mb-8 text-slate-900">Psychologische prijzen en kostprijsberekening: marges, vaste en variabele kosten</h1>

      <Leerdoelen>
        Je legt uit wat vaste kosten, variabele kosten, kostprijs en marge zijn, berekent deze in een
        pretparkcontext, en herkent psychologische prijsstrategieën.
      </Leerdoelen>

      <Section title="Kerntheorie: kosten, kostprijs en marge">
        <p className="mb-4 text-slate-700">
          Een pretpark bepaalt zijn prijzen niet alleen op basis van vraag en aanbod, maar houdt ook rekening
          met de eigen kosten. Deze kosten vallen uiteen in twee soorten.
        </p>

        <InfoBox type="definitie" title="Definitie: vaste kosten en variabele kosten">
          <p>
            <strong>Vaste kosten</strong> zijn kosten die niet veranderen met het aantal bezoekers, zoals de
            huur van het terrein, de afschrijving van attracties of vaste salarissen.{' '}
            <strong>Variabele kosten</strong> zijn kosten die wél meebewegen met het aantal bezoekers, zoals
            extra los personeel, schoonmaak of energieverbruik van attracties.
          </p>
        </InfoBox>

        <InfoBox type="definitie" title="Definitie: kostprijs en marge">
          <p>
            De <strong>kostprijs</strong> is de totale kosten (vaste kosten plus variabele kosten) die nodig
            zijn om één product of dienst te leveren, meestal berekend per stuk of per bezoeker. De{' '}
            <strong>marge</strong> is het verschil tussen de verkoopprijs en de kostprijs: de winst die per
            verkochte eenheid overblijft.
          </p>
        </InfoBox>

        <p className="mb-4 text-slate-700">
          Stel: Fantasialand heeft €18 vaste kosten en €14 variabele kosten per bezoeker. De kostprijs per
          bezoeker is dan €18 + €14 = €32. Bij een verkoopprijs van €50 per dagkaart is de marge per bezoeker
          €50 − €32 = €18. Dynamic pricing verandert de verkoopprijs, maar de kostprijs blijft (grotendeels)
          gelijk — waardoor de marge juist toe- of afneemt naarmate het park de prijs verhoogt of verlaagt.
        </p>

        <InfoBox type="vwo" title="VWO-Challenge: waarom de marge niet lineair meegroeit met de prijs">
          <p>
            Bij een prijsverhoging groeit de marge per bezoeker sneller dan de verkoopprijs zelf, omdat de
            kostprijs (grotendeels) gelijk blijft: stijgt de prijs van €40 naar €50 (+25%) bij een kostprijs
            van €32, dan stijgt de marge van €8 naar €18 — een toename van meer dan 100%. Dit verklaart mede
            waarom bedrijven dynamic pricing zo aantrekkelijk vinden op piekmomenten: een relatief kleine
            prijsstijging kan een relatief grote stijging van de marge opleveren, zolang de vraag niet te
            elastisch is (zie les 7.2).
          </p>
        </InfoBox>
      </Section>

      <Section title="Kerntheorie: psychologische prijsstrategieën">
        <p className="mb-4 text-slate-700">
          Naast de "harde" kant van kosten en marges spelen bedrijven ook in op hoe consumenten prijzen
          waarnemen. Dit heet een <strong>psychologische prijsstrategie</strong>.
        </p>

        <InfoBox type="definitie" title="Definitie: psychologische prijsstrategie">
          <p>
            Een <strong>psychologische prijsstrategie</strong> maakt gebruik van de manier waarop consumenten
            prijzen waarnemen, bijvoorbeeld door een prijs net onder een rond getal te zetten, zodat een
            product goedkoper aanvoelt dan het feitelijk is.
          </p>
        </InfoBox>

        <div className="mb-4 overflow-x-auto">
          <table className="w-full min-w-[650px] border-collapse text-sm">
            <thead>
              <tr className="border-b border-border text-left text-slate-500">
                <th className="py-2 pr-4">Techniek</th>
                <th className="py-2 pr-4">Voorbeeld</th>
                <th className="py-2 pr-4">Hoe werkt het?</th>
              </tr>
            </thead>
            <tbody>
              {psychologischeVoorbeelden.map((p) => (
                <tr key={p.techniek} className="border-b border-border align-top">
                  <td className="py-2 pr-4 font-medium text-slate-800">{p.techniek}</td>
                  <td className="py-2 pr-4 text-slate-600">{p.voorbeeld}</td>
                  <td className="py-2 pr-4 text-slate-600">{p.werking}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <InfoBox type="verdieping" title="Verdieping: prijsdifferentiatie">
          <p>
            <strong>Prijsdifferentiatie</strong> is het vragen van verschillende prijzen voor hetzelfde
            product aan verschillende groepen klanten of op verschillende momenten — bijvoorbeeld een
            kindertarief, een seniorentarief of een vroegboekkorting. Dit lijkt op dynamic pricing, maar het
            verschil is dat dynamic pricing vooral reageert op de actuele vraag en capaciteit, terwijl
            prijsdifferentiatie meestal is gebaseerd op vaste kenmerken van de klant of het boekmoment.
          </p>
        </InfoBox>
      </Section>

      <Section title="Praktijk" eyebrow="Reken zelf de kostprijs en marge uit">
        <div className="grid gap-4 md:grid-cols-2">
          {rekenLes74.map((r) => (
            <RekenOpdracht key={r.nummer} {...r} />
          ))}
        </div>
      </Section>

      <VerwerkingsOpdracht
        titel="Opdracht: bereken de marge en beoordeel een prijsstrategie"
        werkboekPagina="19"
        instructie="Voer onderstaande stappen uit en werk je antwoorden uit in je werkboekje of schrift."
      >
        <ol className="list-decimal space-y-2 pl-5">
          <li>
            Leg het verschil uit tussen <strong>vaste kosten</strong> en <strong>variabele kosten</strong>,
            met een voorbeeld van elk uit de pretparkwereld.
          </li>
          <li>
            Een dagkaart kost €48, de vaste kosten per bezoeker zijn €16 en de variabele kosten per bezoeker
            zijn €12. Bereken de kostprijs en de marge per bezoeker.
          </li>
          <li>
            Kies één psychologische prijsstrategie uit de tabel hierboven en beoordeel in twee tot drie
            zinnen of jij deze strategie eerlijk vindt tegenover consumenten.
          </li>
        </ol>
      </VerwerkingsOpdracht>

      <OefenBank lesTitel="Les 7.4" opdrachten={oefenbankLes74} />
    </PageShell>
  )
}
