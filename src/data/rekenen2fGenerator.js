// Generator voor oneindige rekensommen op niveau 2F (vmbo/mbo-2, basisniveau
// rekenen). In lijn met het referentiekader rekenen blijft 2F beperkt tot:
// - hele getallen of eenvoudige decimale getallen (max. 2 decimalen)
// - bekende, "vertrouwde" breuken (1/2, 1/4, 1/3, 3/4) en ronde percentages
//   (10%, 20%, 25%, 50%, ...)
// - één duidelijke rekenstap per opgave (geen formules herschrijven, geen
//   samengestelde rente, geen break-even-berekeningen)
// - concrete, alledaagse contexten (boodschappen, zakgeld, reizen, klussen)
//
// Dit staat qua opzet los van de 3F-generator (rekenen3fGenerator.js), zodat
// niveau, vraagstelling en moeilijkheidsgraad van 2F en 3F strikt gescheiden
// blijven.

export const CATEGORIEEN = [
  { key: 'alle', label: 'Alle categorieën' },
  { key: 'geld', label: 'Rekenen met geld' },
  { key: 'procenten', label: 'Eenvoudige procenten' },
  { key: 'breuken', label: 'Eenvoudige breuken' },
  { key: 'verhoudingen', label: 'Eenvoudige verhoudingen' },
  { key: 'meten-en-tijd', label: 'Meten & tijd' },
]

// ---------- kleine hulpfuncties ----------

function randInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

function randItem(arr) {
  return arr[randInt(0, arr.length - 1)]
}

function rond(getal, decimals = 2) {
  const factor = 10 ** decimals
  return Math.round((getal + Number.EPSILON) * factor) / factor
}

function euro(bedrag) {
  return `€${rond(bedrag, 2).toLocaleString('nl-NL', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`
}

// Namen/contexten, herkenbaar en concreet (2F: alledaagse, niet-abstracte situaties)
const PRODUCTEN = ['een broodje', 'een paar sokken', 'een schrift', 'een pak koekjes', 'een bal', 'een sleutelhanger', 'een ijsje', 'een fietsslot']
const WINKELS = ['de supermarkt', 'de schoolkantine', 'een speelgoedwinkel', 'de kiosk', 'de drogist']
const NAMEN = ['Sanne', 'Milan', 'Yusuf', 'Fenna', 'Noah', 'Zara', 'Daan', 'Lotte']

// ---------- categorie: rekenen met geld ----------

function somWisselgeld() {
  const prijs = randInt(3, 18)
  const betaaldMet = randItem([10, 20, 50].filter((b) => b > prijs))
  const wisselgeld = betaaldMet - prijs
  const naam = randItem(NAMEN)
  const winkel = randItem(WINKELS)
  const product = randItem(PRODUCTEN)

  return {
    vraag: `${naam} koopt bij ${winkel} ${product} voor ${euro(prijs)}. ${naam} betaalt met een briefje van ${euro(betaaldMet)}. Hoeveel wisselgeld krijgt ${naam} terug?`,
    antwoord: wisselgeld,
    eenheid: '€',
    tolerantie: 0,
    categorie: 'geld',
    uitleg: `Wisselgeld = betaald bedrag − prijs = ${euro(betaaldMet)} − ${euro(prijs)} = ${euro(wisselgeld)}.`,
  }
}

function somTotaalBoodschappen() {
  const aantalArtikelen = randInt(2, 4)
  const prijzen = Array.from({ length: aantalArtikelen }, () => rond(randInt(1, 8) + randItem([0, 0.5]), 2))
  const totaal = rond(
    prijzen.reduce((sum, p) => sum + p, 0),
    2,
  )
  const naam = randItem(NAMEN)

  return {
    vraag: `${naam} koopt ${aantalArtikelen} dingen bij de supermarkt: ${prijzen.map((p) => euro(p)).join(', ')}. Hoeveel moet ${naam} in totaal betalen?`,
    antwoord: totaal,
    eenheid: '€',
    tolerantie: 0.01,
    categorie: 'geld',
    uitleg: `Totaal = som van alle prijzen = ${prijzen.map((p) => euro(p)).join(' + ')} = ${euro(totaal)}.`,
  }
}

function somZakgeldSparen() {
  const zakgeldPerWeek = randItem([2.5, 5, 7.5, 10])
  const weken = randInt(3, 8)
  const totaal = rond(zakgeldPerWeek * weken, 2)
  const naam = randItem(NAMEN)

  return {
    vraag: `${naam} krijgt elke week ${euro(zakgeldPerWeek)} zakgeld en spaart alles. Hoeveel heeft ${naam} na ${weken} weken gespaard?`,
    antwoord: totaal,
    eenheid: '€',
    tolerantie: 0.01,
    categorie: 'geld',
    uitleg: `Totaal gespaard = zakgeld per week × aantal weken = ${euro(zakgeldPerWeek)} × ${weken} = ${euro(totaal)}.`,
  }
}

// ---------- categorie: eenvoudige procenten ----------

function somRondePercentageVanBedrag() {
  const bedrag = randInt(20, 200)
  const pct = randItem([10, 20, 25, 50])
  const deel = rond((pct / 100) * bedrag, 2)

  return {
    vraag: `Hoeveel is ${pct}% van ${euro(bedrag)}?`,
    antwoord: deel,
    eenheid: '€',
    tolerantie: 0.01,
    categorie: 'procenten',
    uitleg: `${pct}% = ${pct}/100. ${pct}% van ${euro(bedrag)} = (${pct}/100) × ${euro(bedrag)} = ${euro(deel)}.`,
  }
}

function somKortingRondPercentage() {
  const prijs = randInt(10, 80)
  const kortingPct = randItem([10, 20, 25, 50])
  const kortingBedrag = rond((kortingPct / 100) * prijs, 2)
  const nieuwePrijs = rond(prijs - kortingBedrag, 2)
  const product = randItem(PRODUCTEN)
  const winkel = randItem(WINKELS)

  return {
    vraag: `Bij ${winkel} krijg je ${kortingPct}% korting op ${product}. De prijs was ${euro(prijs)}. Wat is de nieuwe prijs, na de korting?`,
    antwoord: nieuwePrijs,
    eenheid: '€',
    tolerantie: 0.01,
    categorie: 'procenten',
    uitleg: `Korting = ${kortingPct}% van ${euro(prijs)} = ${euro(kortingBedrag)}. Nieuwe prijs = ${euro(prijs)} − ${euro(kortingBedrag)} = ${euro(nieuwePrijs)}.`,
  }
}

function somHelftPercentage() {
  const aantal = randInt(20, 80) * 2 // altijd even, zodat de helft een heel getal is
  const naam = randItem(NAMEN)

  return {
    vraag: `Op school zitten ${aantal} leerlingen in het derde leerjaar. Precies 50% van hen doet mee aan het schoolfeest. Hoeveel leerlingen is dat?`,
    antwoord: aantal / 2,
    eenheid: 'leerlingen',
    tolerantie: 0,
    categorie: 'procenten',
    uitleg: `50% is de helft. De helft van ${aantal} is ${aantal} ÷ 2 = ${aantal / 2} leerlingen.`,
  }
}

// ---------- categorie: eenvoudige breuken ----------

const BEKENDE_BREUKEN = [
  { teller: 1, noemer: 2 },
  { teller: 1, noemer: 4 },
  { teller: 3, noemer: 4 },
  { teller: 1, noemer: 3 },
]

function somBreukVanAantal() {
  const breuk = randItem(BEKENDE_BREUKEN)
  // Kies een totaal dat deelbaar is door de noemer, zodat het antwoord een heel getal is
  const factor = randInt(2, 10)
  const totaal = breuk.noemer * factor
  const deel = (breuk.teller / breuk.noemer) * totaal
  const naam = randItem(NAMEN)

  return {
    vraag: `${naam} heeft ${totaal} knikkers. ${naam} geeft ${breuk.teller}/${breuk.noemer} deel weg aan een vriend(in). Hoeveel knikkers geeft ${naam} weg?`,
    antwoord: deel,
    eenheid: 'knikkers',
    tolerantie: 0,
    categorie: 'breuken',
    uitleg: `${breuk.teller}/${breuk.noemer} van ${totaal} = (${totaal} ÷ ${breuk.noemer}) × ${breuk.teller} = ${totaal / breuk.noemer} × ${breuk.teller} = ${deel} knikkers.`,
  }
}

function somBreukVanBedrag() {
  const breuk = randItem(BEKENDE_BREUKEN)
  const factor = randInt(2, 12)
  const totaal = breuk.noemer * factor * 2 // ronde bedragen
  const deel = rond((breuk.teller / breuk.noemer) * totaal, 2)

  return {
    vraag: `Een pizza kost ${euro(totaal)}. Vier vrienden delen de pizza gelijk in vieren, maar Milan betaalt daarvan zelf ${breuk.teller}/${breuk.noemer} deel van het totaalbedrag. Hoeveel betaalt Milan?`,
    antwoord: deel,
    eenheid: '€',
    tolerantie: 0.01,
    categorie: 'breuken',
    uitleg: `${breuk.teller}/${breuk.noemer} van ${euro(totaal)} = (${euro(totaal)} ÷ ${breuk.noemer}) × ${breuk.teller} = ${euro(deel)}.`,
  }
}

// ---------- categorie: eenvoudige verhoudingen ----------

function somReceptSchalen() {
  const basisPersonen = randItem([2, 4])
  const factor = randItem([2, 3])
  const nieuwPersonen = basisPersonen * factor
  const basisHoeveelheid = randInt(2, 8) * basisPersonen // zorgt voor mooie ronde getallen
  const nieuweHoeveelheid = basisHoeveelheid * factor
  const ingredient = randItem(['gram bloem', 'gram suiker', 'eieren', 'gram boter', 'ml melk'])

  return {
    vraag: `Voor een recept voor ${basisPersonen} personen heb je ${basisHoeveelheid} ${ingredient} nodig. Hoeveel ${ingredient} heb je nodig voor ${nieuwPersonen} personen (dezelfde verhouding)?`,
    antwoord: nieuweHoeveelheid,
    eenheid: '',
    tolerantie: 0,
    categorie: 'verhoudingen',
    uitleg: `${nieuwPersonen} personen is ${factor} keer zoveel als ${basisPersonen} personen, dus heb je ook ${factor} keer zoveel nodig: ${basisHoeveelheid} × ${factor} = ${nieuweHoeveelheid} ${ingredient}.`,
  }
}

function somVerdelenInGelijkeDelen() {
  const personen = randInt(2, 5)
  const totaal = randInt(2, 20) * personen // deelbaar, heel antwoord
  const perPersoon = totaal / personen
  const context = randItem(['snoepjes', 'euro prijzengeld', 'stickers', 'appels'])
  const naam = randItem(NAMEN)

  return {
    vraag: `${naam} en zijn/haar vrienden verdelen ${totaal} ${context} eerlijk onder ${personen} personen. Hoeveel krijgt iedere persoon?`,
    antwoord: perPersoon,
    eenheid: '',
    tolerantie: 0,
    categorie: 'verhoudingen',
    uitleg: `Eerlijk verdelen = totaal ÷ aantal personen = ${totaal} ÷ ${personen} = ${perPersoon} per persoon.`,
  }
}

// ---------- categorie: meten & tijd ----------

function somTijdsduur() {
  const startUur = randInt(8, 15)
  const startMin = randItem([0, 15, 30, 45])
  const duurMin = randItem([15, 30, 45, 60, 90])
  const totaalMinutenStart = startUur * 60 + startMin
  const totaalMinutenEind = totaalMinutenStart + duurMin
  const eindUur = Math.floor(totaalMinutenEind / 60) % 24
  const eindMin = totaalMinutenEind % 60
  const format = (u, m) => `${u.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}`

  return {
    vraag: `Een training begint om ${format(startUur, startMin)} uur en duurt ${duurMin} minuten. Om hoeveel minuten na het hele uur eindigt de training? (bijvoorbeeld: eindigt de training om 14:30 uur, vul dan 30 in)`,
    antwoord: eindMin,
    eenheid: 'minuten na het uur',
    tolerantie: 0,
    categorie: 'meten-en-tijd',
    uitleg: `Starttijd in minuten vanaf middernacht = ${startUur} × 60 + ${startMin} = ${totaalMinutenStart}. Eindtijd = ${totaalMinutenStart} + ${duurMin} = ${totaalMinutenEind} minuten, dat is ${format(eindUur, eindMin)} uur. De training eindigt dus op minuut ${eindMin} van dat uur.`,
  }
}

function somAfstandMetSnelheid() {
  const snelheid = randItem([4, 5, 15, 20]) // km/u: lopen of fietsen
  const uren = randItem([1, 2, 3])
  const afstand = snelheid * uren
  const naam = randItem(NAMEN)
  const vervoer = snelheid <= 5 ? 'wandelt' : 'fietst'

  return {
    vraag: `${naam} ${vervoer} met een snelheid van ${snelheid} km per uur, gedurende ${uren} uur. Welke afstand legt ${naam} in totaal af?`,
    antwoord: afstand,
    eenheid: 'km',
    tolerantie: 0,
    categorie: 'meten-en-tijd',
    uitleg: `Afstand = snelheid × tijd = ${snelheid} km/u × ${uren} uur = ${afstand} km.`,
  }
}

// ---------- registratie per categorie ----------

const GENERATOREN = {
  geld: [somWisselgeld, somTotaalBoodschappen, somZakgeldSparen],
  procenten: [somRondePercentageVanBedrag, somKortingRondPercentage, somHelftPercentage],
  breuken: [somBreukVanAantal, somBreukVanBedrag],
  verhoudingen: [somReceptSchalen, somVerdelenInGelijkeDelen],
  'meten-en-tijd': [somTijdsduur, somAfstandMetSnelheid],
}

let laatsteCategorie = null

/**
 * Genereert een oneindige stroom aan willekeurige 2F-rekensommen.
 * @param {string} categorieFilter - key uit CATEGORIEEN, of 'alle'
 * @returns {{vraag: string, antwoord: number, eenheid: string, tolerantie: number, uitleg: string, categorie: string, niveau: '2F'}}
 */
export function genereerSom(categorieFilter = 'alle') {
  const beschikbareCategorieen =
    categorieFilter && categorieFilter !== 'alle' && GENERATOREN[categorieFilter]
      ? [categorieFilter]
      : Object.keys(GENERATOREN)

  // Voorkom twee keer exact dezelfde categorie achter elkaar bij 'alle', voor variatie
  let categorie = randItem(beschikbareCategorieen)
  if (beschikbareCategorieen.length > 1 && categorie === laatsteCategorie) {
    categorie = randItem(beschikbareCategorieen.filter((c) => c !== laatsteCategorie))
  }
  laatsteCategorie = categorie

  const generatorFn = randItem(GENERATOREN[categorie])
  const som = generatorFn()
  return { ...som, niveau: '2F' }
}

export default genereerSom
