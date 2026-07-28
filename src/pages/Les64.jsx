import React from 'react'
import PageShell from '../components/PageShell.jsx'
import Section from '../components/Section.jsx'
import Leerdoelen from '../components/Leerdoelen.jsx'
import InfoBox from '../components/InfoBox.jsx'
import VerwerkingsOpdracht from '../components/VerwerkingsOpdracht.jsx'

import OefenBank from '../components/OefenBank.jsx'
import oefenbankLes64 from '../data/oefenbankLes64.js'

const maatregelen = [
  { maatregel: 'Verkoopprijs verhogen', effect: 'Hogere omzet per verkocht paar, maar kan de afzet laten dalen als klanten afhaken.' },
  { maatregel: 'Afzet verhogen (bijv. via marketing of extra vestiging)', effect: 'Hogere omzet én hogere inkoopwaarde van de omzet, dus alleen een hogere brutowinst als de marge per paar positief blijft.' },
  { maatregel: 'Inkoopprijs verlagen (bijv. via onderhandelen met leverancier)', effect: 'Lagere inkoopwaarde van de omzet bij gelijke afzet, dus een hogere brutowinst zonder dat de klant iets merkt.' },
  { maatregel: 'Vaste kosten verlagen (bijv. goedkopere locatie)', effect: 'Directe verbetering van de nettowinst, zonder dat de omzet of brutowinst verandert.' },
]

const stellingen = [
  {
    titel: '"SoleZone kan het beste de verkoopprijs verhogen om de nettowinst te verbeteren, ook al kost dat waarschijnlijk een paar klanten."',
    voor: [
      'Een hogere prijs levert per verkocht paar meteen meer omzet op, zonder dat de winkel iets aan de inkoop of kosten hoeft te veranderen.',
      'Sneakers hebben vaak een sterk merk- en statusgevoel, waardoor klanten minder snel wegblijven bij een prijsstijging dan bij alledaagse producten.',
      'Zolang de daling in afzet kleiner is dan de stijging in prijs, levert dit per saldo altijd meer omzet (en dus mogelijk meer nettowinst) op.',
    ],
    tegen: [
      'Een prijsstijging kan klanten naar concurrenten met een lagere prijs jagen, waardoor de afzet harder daalt dan verwacht.',
      'Als de afzet te veel daalt, kan de omzet juist lager uitvallen dan vóór de prijsstijging.',
      'Andere maatregelen (zoals een lagere inkoopprijs of lagere vaste kosten) verbeteren de nettowinst zonder dat de klant er iets van merkt.',
    ],
  },
  {
    titel: '"Het is voor een ondernemer als de eigenaar van SoleZone verstandiger om te bezuinigen op vaste kosten dan op de kwaliteit van de ingekochte sneakers."',
    voor: [
      'Vaste kosten zoals huur of energie leveren de klant vaak niets direct op, in tegenstelling tot de kwaliteit van het product zelf.',
      'Een lagere kwaliteit van sneakers kan klanten wegjagen en zo de afzet (en daarmee de omzet) op de lange termijn schaden.',
      'Vaste kosten zijn vaak onderhandelbaar (bijvoorbeeld een goedkoper huurcontract), zonder dat de klant hier iets van merkt.',
    ],
    tegen: [
      'Sommige vaste kosten (zoals een goed getraind, vast personeelsbestand) dragen juist bij aan een betere klantervaring en daarmee aan hogere afzet.',
      'Een goedkopere locatie kan ook minder klanten aantrekken, wat de afzet juist kan schaden.',
      'Bezuinigen op kwaliteit hoeft niet altijd merkbaar te zijn voor klanten, bijvoorbeeld bij een iets goedkopere maar vergelijkbare leverancier.',
    ],
  },
  {
    titel: '"Een winkel moet altijd streven naar de hoogst mogelijke afzet, want meer verkopen is altijd goed voor de nettowinst."',
    voor: [
      'Meer afzet betekent meer omzet, wat in de meeste gevallen ook tot meer brutowinst leidt.',
      'Een hogere afzet kan ook zorgen voor meer naamsbekendheid en terugkerende klanten, wat op de lange termijn extra omzet oplevert.',
      'Bij vaste kosten die toch al betaald moeten worden, draagt elke extra verkoop bijna volledig bij aan de nettowinst.',
    ],
    tegen: [
      'Meer afzet vraagt vaak om meer inkoop, en dus een hogere inkoopwaarde van de omzet, wat de winst per saldo kan drukken.',
      'Om meer te verkopen, moet een winkel soms de prijs verlagen of meer aan marketing uitgeven, wat weer kosten met zich meebrengt.',
      'Extreme groei kan ook extra vaste kosten vragen (bijvoorbeeld een grotere winkel of meer personeel), die niet altijd in verhouding staan tot de extra omzet.',
    ],
  },
]

export default function Les64() {
  return (
    <PageShell>
      <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-emerald-700">Les 6.4</p>
      <h1 className="mb-8 text-slate-900">Een gezonde zaak runnen: hoe verbeter je de nettowinst?</h1>

      <Leerdoelen>
        Je beoordeelt verschillende maatregelen waarmee een ondernemer de nettowinst kan verbeteren, en
        onderbouwt welke maatregel jij het verstandigst vindt.
      </Leerdoelen>

      <Section title="Kerntheorie">
        <p className="mb-4 text-slate-700">
          Je weet nu hoe je de nettowinst van een bedrijf berekent. Maar een ondernemer wil natuurlijk meer:
          hij wil weten hóe hij die nettowinst kan verbéteren. Kijk je terug naar de resultatenrekening, dan
          zie je dat er in principe maar een paar knoppen zijn om aan te draaien: de verkoopprijs, de afzet,
          de inkoopprijs en de vaste kosten.
        </p>

        <p className="mb-4 text-slate-700">
          Om te bepalen hoe goed een bedrijf presteert ten opzichte van zijn omzet, gebruiken ondernemers
          vaak de <strong>nettowinstmarge</strong>: het percentage van de omzet dat overblijft als
          nettowinst. Bij SoleZone: (€4.500 ÷ €18.000) × 100% = 25%. Van elke euro omzet houdt SoleZone dus
          25 cent over als winst.
        </p>

        <InfoBox type="definitie" title="Definitie: nettowinstmarge">
          <p>
            De <strong>nettowinstmarge</strong> is de nettowinst uitgedrukt als percentage van de omzet:{' '}
            <strong>Nettowinstmarge = (Nettowinst ÷ Omzet) × 100%</strong>. Hiermee vergelijk je hoe
            winstgevend bedrijven van verschillende grootte zijn.
          </p>
        </InfoBox>

        <div className="mb-4 overflow-x-auto">
          <table className="w-full min-w-[600px] border-collapse text-sm">
            <thead>
              <tr className="border-b border-border text-left text-slate-500">
                <th className="py-2 pr-4">Maatregel</th>
                <th className="py-2 pr-4">Mogelijk effect op de nettowinst</th>
              </tr>
            </thead>
            <tbody>
              {maatregelen.map((m) => (
                <tr key={m.maatregel} className="border-b border-border align-top">
                  <td className="py-2 pr-4 font-medium text-slate-800">{m.maatregel}</td>
                  <td className="py-2 pr-4 text-slate-600">{m.effect}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <InfoBox type="verdieping" title="Verdieping: er is niet één 'beste' maatregel">
          <p>
            Elke maatregel heeft voor- en nadelen: een prijsverhoging kan klanten wegjagen, kostenbesparing
            kan ten koste gaan van kwaliteit of service, en groei in afzet vraagt vaak om extra investeringen.
            Een goede ondernemer weegt bij elke keuze de verwachte extra omzet af tegen de verwachte extra
            kosten, in plaats van blind te kiezen voor "meer verkopen" of "minder uitgeven".
          </p>
        </InfoBox>

        <InfoBox type="vwo" title="VWO-Challenge: de nettowinstmarge vergelijken tussen bedrijven">
          <p>
            Twee bedrijven kunnen exact dezelfde nettowinst hebben (bijvoorbeeld €4.500), maar een heel
            andere nettowinstmarge, als hun omzet verschilt. Een bedrijf met €18.000 omzet en €4.500
            nettowinst heeft een marge van 25%, terwijl een bedrijf met €45.000 omzet en dezelfde €4.500
            nettowinst een marge van slechts 10% heeft. De nettowinstmarge laat dus zien hoe efficiënt een
            bedrijf omzet omzet in winst, los van hoe groot het bedrijf is.
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
        titel="Opdracht: geef SoleZone een onderbouwd advies"
        werkboekPagina="20"
        instructie="Voer onderstaande stappen uit en werk je antwoorden uit in je werkboekje of schrift."
      >
        <ol className="list-decimal space-y-2 pl-5">
          <li>
            Bereken de nettowinstmarge van SoleZone bij de standaardcijfers (omzet €18.000, nettowinst
            €4.500).
          </li>
          <li>
            Kies twee maatregelen uit de tabel hierboven en leg per maatregel uit wat het risico is als de
            maatregel averechts uitpakt.
          </li>
          <li>
            Kies één van de drie stellingen hierboven en formuleer in twee tot drie zinnen jouw eigen,
            onderbouwde standpunt.
          </li>
        </ol>
      </VerwerkingsOpdracht>

      <OefenBank lesTitel="Les 6.4" opdrachten={oefenbankLes64} />
    </PageShell>
  )
}
