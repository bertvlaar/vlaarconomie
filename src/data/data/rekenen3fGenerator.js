// Generator voor oneindige rekensommen op niveau 3F (vakkennis mbo 3/4, havo rekenen).
// Elke aanroep van genereerSom() levert een nieuwe, willekeurige, economisch/
// maatschappelijk getinte som op: procenten, breuken, verhoudingen, formules
// omschrijven en kosten/omzet/winst-vraagstukken, inclusief een stapsgewijze
// uitleg zodat een leerling na het nakijken altijd ziet hoe het antwoord tot
// stand komt.

export const CATEGORIEEN = [
  { key: 'alle', label: 'Alle categorieën' },
  { key: 'procenten', label: 'Procenten' },
  { key: 'breuken', label: 'Breuken' },
  { key: 'verhoudingen', label: 'Verhoudingen' },
  { key: 'formules', label: 'Formules omschrijven' },
  { key: 'kosten-omzet-winst', label: 'Kosten, omzet & winst' },
  { key: 'verhaalsommen', label: 'Verhaalsommen' },
]

// ---------- kleine hulpfuncties ----------

function randInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

function randFloat(min, max, decimals = 2) {
  const waarde = Math.random() * (max - min) + min
  const factor = 10 ** decimals
  return Math.round(waarde * factor) / factor
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

// Namen/contexten om herhaling te doorbreken en het herkenbaar te houden
const PRODUCTEN = ['een paar sneakers', 'een nieuwe telefoon', 'een fiets', 'een jas', 'koptelefoons', 'een festivalticket', 'een abonnement op een streamingdienst', 'een tweedehands scooter']
const WINKELS = ['Bol.com', 'een lokale sneakerstore', 'een webshop', 'de Appie', 'een kledingwinkel', 'een elektronicazaak']
const NAMEN = ['Sanne', 'Milan', 'Yusuf', 'Fenna', 'Noah', 'Zara', 'Daan', 'Lotte']
const BEDRIJVEN = ['Foodtruck Falafel Fanatic', 'Sneakerresell BV', 'Streetwear Studio', 'Bakkerij De Volkoren', 'Webshop Kicksnap', 'Fietsenmaker Rademaker']

// ---------- categorie: procenten ----------

function somBtw() {
  const tarief = randItem([9, 21])
  const prijsExcl = randFloat(8, 250, 2)
  const prijsIncl = rond(prijsExcl * (1 + tarief / 100), 2)
  const richting = randItem(['incl', 'excl'])
  const product = randItem(PRODUCTEN)
  const winkel = randItem(WINKELS)

  if (richting === 'incl') {
    return {
      vraag: `Bij ${winkel} kost ${product} ${euro(prijsExcl)} exclusief btw. Het btw-tarief is ${tarief}%. Wat is de prijs inclusief btw?`,
      antwoord: prijsIncl,
      eenheid: '€',
      tolerantie: 0.02,
      categorie: 'procenten',
      uitleg: `Prijs incl. btw = prijs excl. btw × (1 + btw-tarief). Dus ${euro(prijsExcl)} × ${(1 + tarief / 100).toFixed(2)} = ${euro(prijsIncl)}.`,
    }
  }
  return {
    vraag: `Bij ${winkel} kost ${product} ${euro(prijsIncl)} inclusief ${tarief}% btw. Wat was de prijs exclusief btw?`,
    antwoord: prijsExcl,
    eenheid: '€',
    tolerantie: 0.02,
    categorie: 'procenten',
    uitleg: `Prijs excl. btw = prijs incl. btw ÷ (1 + btw-tarief). Dus ${euro(prijsIncl)} ÷ ${(1 + tarief / 100).toFixed(2)} = ${euro(prijsExcl)}.`,
  }
}

function somKorting() {
  const oorspronkelijk = randFloat(15, 300, 2)
  const kortingPct = randItem([10, 15, 20, 25, 30, 40, 50])
  const nieuwePrijs = rond(oorspronkelijk * (1 - kortingPct / 100), 2)
  const product = randItem(PRODUCTEN)
  const winkel = randItem(WINKELS)

  return {
    vraag: `${winkel} geeft ${kortingPct}% korting op ${product}. De oorspronkelijke prijs is ${euro(oorspronkelijk)}. Wat is de nieuwe prijs?`,
    antwoord: nieuwePrijs,
    eenheid: '€',
    tolerantie: 0.02,
    categorie: 'procenten',
    uitleg: `Korting in euro's = ${kortingPct}% van ${euro(oorspronkelijk)} = ${euro(rond((kortingPct / 100) * oorspronkelijk, 2))}. Nieuwe prijs = ${euro(oorspronkelijk)} − ${euro(rond((kortingPct / 100) * oorspronkelijk, 2))} = ${euro(nieuwePrijs)}.`,
  }
}

function somProcentueleVerandering() {
  const naam = randItem(NAMEN)
  const vorigJaar = randFloat(400, 900, 2)
  const stijging = Math.random() > 0.5
  const pct = randInt(3, 18)
  const ditJaar = rond(vorigJaar * (1 + (stijging ? 1 : -1) * (pct / 100)), 2)

  return {
    vraag: `De energierekening van ${naam} was vorig jaar ${euro(vorigJaar)} per maand en is dit jaar ${euro(ditJaar)} per maand. Met hoeveel procent is de rekening ${stijging ? 'gestegen' : 'gedaald'}? (rond af op één decimaal)`,
    antwoord: pct,
    eenheid: '%',
    tolerantie: 0.5,
    categorie: 'procenten',
    uitleg: `Procentuele verandering = (verschil ÷ oude waarde) × 100%. Verschil = ${euro(Math.abs(ditJaar - vorigJaar))}. (${euro(Math.abs(ditJaar - vorigJaar))} ÷ ${euro(vorigJaar)}) × 100% ≈ ${pct}%.`,
  }
}

function somRenteOverJaar() {
  const inleg = randFloat(500, 5000, 0)
  const rentePct = randItem([1.5, 2, 2.5, 3, 3.5, 4])
  const eindbedrag = rond(inleg * (1 + rentePct / 100), 2)

  return {
    vraag: `${randItem(NAMEN)} zet ${euro(inleg)} op een spaarrekening tegen ${rentePct}% rente per jaar. Hoeveel staat er na één jaar op de rekening (bij gelijkblijvende rente, geen tussentijdse opnames)?`,
    antwoord: eindbedrag,
    eenheid: '€',
    tolerantie: 0.05,
    categorie: 'procenten',
    uitleg: `Eindbedrag = inleg × (1 + rentepercentage). ${euro(inleg)} × ${(1 + rentePct / 100).toFixed(3)} = ${euro(eindbedrag)}.`,
  }
}

// ---------- categorie: breuken ----------

function somBreukVanBedrag() {
  const teller = randInt(1, 4)
  const noemer = randInt(teller + 1, 8)
  const totaal = rond(randFloat(20, 400, 0), 2)

  return {
    vraag: `Van een klas van ${Math.round(totaal)} leerlingen koopt ${teller}/${noemer} deel een kaartje voor het schoolfeest van ${euro(randFloat(8, 20, 2))} per stuk. Hoeveel leerlingen kopen een kaartje? (rond eventueel af op een heel aantal)`,
    antwoord: rond((teller / noemer) * totaal, 0),
    eenheid: 'leerlingen',
    tolerantie: 0.5,
    categorie: 'breuken',
    uitleg: `Aantal = breuk × totaal aantal = ${teller}/${noemer} × ${Math.round(totaal)} = ${rond((teller / noemer) * totaal, 0)} leerlingen.`,
  }
}

function somBreukVanOmzet() {
  const teller = randInt(1, 3)
  const noemer = randInt(teller + 1, 6)
  const omzet = randFloat(800, 6000, 0)
  const deel = rond((teller / noemer) * omzet, 2)
  const bedrijf = randItem(BEDRIJVEN)

  return {
    vraag: `${bedrijf} behaalt een weekomzet van ${euro(omzet)}. Precies ${teller}/${noemer} deel daarvan komt uit online verkoop. Hoeveel euro omzet komt uit online verkoop?`,
    antwoord: deel,
    eenheid: '€',
    tolerantie: 1,
    categorie: 'breuken',
    uitleg: `Online omzet = ${teller}/${noemer} × ${euro(omzet)} = ${euro(deel)}.`,
  }
}

// ---------- categorie: verhoudingen ----------

function somVerdeelsleutel() {
  const a = randInt(1, 5)
  const b = randInt(1, 5)
  const winst = randFloat(500, 8000, 0)
  const deelA = rond((a / (a + b)) * winst, 2)
  const bedrijf = randItem(BEDRIJVEN)
  const namen = [randItem(NAMEN), randItem(NAMEN)]

  return {
    vraag: `${namen[0]} en ${namen[1]} runnen samen ${bedrijf} en verdelen de winst in de verhouding ${a} : ${b} (${namen[0]} : ${namen[1]}). De winst dit kwartaal is ${euro(winst)}. Hoeveel euro krijgt ${namen[0]} (het deel met verhoudingsgetal ${a})?`,
    antwoord: deelA,
    eenheid: '€',
    tolerantie: 1,
    categorie: 'verhoudingen',
    uitleg: `Totaal aantal delen = ${a} + ${b} = ${a + b}. Eén deel = ${euro(winst)} ÷ ${a + b} = ${euro(rond(winst / (a + b), 2))}. Deel van ${namen[0]} = ${a} × ${euro(rond(winst / (a + b), 2))} = ${euro(deelA)}.`,
  }
}

function somPrijsPerEenheid() {
  const inhoudA = randInt(250, 500)
  const prijsA = randFloat(1.5, 4, 2)
  const inhoudB = randInt(700, 1500)
  const prijsB = randFloat(3, 8, 2)
  const perA = rond((prijsA / inhoudA) * 1000, 3)
  const perB = rond((prijsB / inhoudB) * 1000, 3)
  const voordeligst = perA < perB ? 'A' : 'B'

  return {
    vraag: `Verpakking A bevat ${inhoudA} gram voor ${euro(prijsA)}. Verpakking B bevat ${inhoudB} gram voor ${euro(prijsB)}. Wat is de prijs per kilo (1000 gram) van verpakking ${voordeligst === 'A' ? 'A' : 'B'}? (in euro's, 2 decimalen)`,
    antwoord: voordeligst === 'A' ? perA : perB,
    eenheid: '€ per kg',
    tolerantie: 0.02,
    categorie: 'verhoudingen',
    uitleg: `Prijs per kg = (prijs ÷ gewicht in gram) × 1000. Verpakking A: (${euro(prijsA)} ÷ ${inhoudA}) × 1000 = ${euro(perA)} per kg. Verpakking B: (${euro(prijsB)} ÷ ${inhoudB}) × 1000 = ${euro(perB)} per kg.`,
  }
}

function somSchaalVerhouding() {
  const factor = randItem([2, 3, 4, 5])
  const basisAantal = randInt(4, 12)
  const basisKosten = randFloat(20, 80, 2)
  const nieuwAantal = basisAantal * factor
  const nieuweKosten = rond(basisKosten * factor, 2)
  const bedrijf = randItem(BEDRIJVEN)

  return {
    vraag: `${bedrijf} betaalt ${euro(basisKosten)} aan verpakkingsmateriaal voor ${basisAantal} bestellingen. Kosten schalen recht evenredig mee met het aantal bestellingen. Wat kost het verpakkingsmateriaal voor ${nieuwAantal} bestellingen?`,
    antwoord: nieuweKosten,
    eenheid: '€',
    tolerantie: 0.5,
    categorie: 'verhoudingen',
    uitleg: `${nieuwAantal} ÷ ${basisAantal} = ${factor} keer zoveel bestellingen, dus ook ${factor} keer zoveel kosten: ${euro(basisKosten)} × ${factor} = ${euro(nieuweKosten)}.`,
  }
}

// ---------- categorie: formules omschrijven ----------

function somOmzetFormuleNaarPrijs() {
  const aantal = randInt(20, 300)
  const prijs = randFloat(4, 60, 2)
  const omzet = rond(aantal * prijs, 2)
  const bedrijf = randItem(BEDRIJVEN)

  return {
    vraag: `Voor ${bedrijf} geldt de formule Omzet = Verkoopprijs × Aantal verkocht. Vorige maand was de omzet ${euro(omzet)} bij ${aantal} verkochte producten. Herschrijf de formule naar Verkoopprijs en bereken de verkoopprijs per product.`,
    antwoord: prijs,
    eenheid: '€',
    tolerantie: 0.02,
    categorie: 'formules',
    uitleg: `Omzet = Prijs × Aantal, dus Prijs = Omzet ÷ Aantal = ${euro(omzet)} ÷ ${aantal} = ${euro(prijs)}.`,
  }
}

function somWinstFormuleNaarKosten() {
  const omzet = randFloat(500, 5000, 2)
  const winst = randFloat(50, omzet * 0.5, 2)
  const kosten = rond(omzet - winst, 2)
  const bedrijf = randItem(BEDRIJVEN)

  return {
    vraag: `Voor ${bedrijf} geldt: Winst = Omzet − Kosten. Deze maand was de omzet ${euro(omzet)} en de winst ${euro(winst)}. Herschrijf de formule naar Kosten en bereken de kosten.`,
    antwoord: kosten,
    eenheid: '€',
    tolerantie: 0.02,
    categorie: 'formules',
    uitleg: `Winst = Omzet − Kosten, dus Kosten = Omzet − Winst = ${euro(omzet)} − ${euro(winst)} = ${euro(kosten)}.`,
  }
}

function somMargeFormuleNaarVerkoopprijs() {
  const inkoop = randFloat(5, 80, 2)
  const margePct = randItem([20, 25, 30, 40, 50, 60, 75, 100])
  const verkoopprijs = rond(inkoop * (1 + margePct / 100), 2)

  return {
    vraag: `Een winkel rekent een marge van ${margePct}% bovenop de inkoopprijs (Verkoopprijs = Inkoopprijs × (1 + marge)). De inkoopprijs van een product is ${euro(inkoop)}. Wat is de verkoopprijs?`,
    antwoord: verkoopprijs,
    eenheid: '€',
    tolerantie: 0.02,
    categorie: 'formules',
    uitleg: `Verkoopprijs = Inkoopprijs × (1 + marge) = ${euro(inkoop)} × ${(1 + margePct / 100).toFixed(2)} = ${euro(verkoopprijs)}.`,
  }
}

// ---------- categorie: kosten, omzet & winst ----------

function somBreakEven() {
  const vasteKosten = randFloat(300, 3000, 0)
  const prijs = randFloat(8, 40, 2)
  const variabeleKosten = rond(prijs * randFloat(0.2, 0.6, 2), 2)
  const marge = rond(prijs - variabeleKosten, 2)
  const breakEven = Math.ceil(vasteKosten / marge)
  const bedrijf = randItem(BEDRIJVEN)

  return {
    vraag: `${bedrijf} heeft ${euro(vasteKosten)} vaste kosten per maand. Elk product wordt verkocht voor ${euro(prijs)} en kost ${euro(variabeleKosten)} aan variabele kosten (materiaal, verpakking). Hoeveel producten moeten minimaal verkocht worden om break-even te draaien (rond naar boven af op een heel aantal)?`,
    antwoord: breakEven,
    eenheid: 'stuks',
    tolerantie: 0,
    categorie: 'kosten-omzet-winst',
    uitleg: `Marge per product = verkoopprijs − variabele kosten = ${euro(prijs)} − ${euro(variabeleKosten)} = ${euro(marge)}. Break-even aantal = vaste kosten ÷ marge per product = ${euro(vasteKosten)} ÷ ${euro(marge)} ≈ ${breakEven} stuks (naar boven afgerond, want een half product kan niet).`,
  }
}

function somWinstPercentageVanOmzet() {
  const omzet = randFloat(1000, 9000, 2)
  const kosten = rond(omzet * randFloat(0.5, 0.85, 2), 2)
  const winst = rond(omzet - kosten, 2)
  const winstPct = rond((winst / omzet) * 100, 1)
  const bedrijf = randItem(BEDRIJVEN)

  return {
    vraag: `${bedrijf} had deze maand een omzet van ${euro(omzet)} en kosten van ${euro(kosten)}. Hoeveel procent van de omzet is winst? (rond af op één decimaal)`,
    antwoord: winstPct,
    eenheid: '%',
    tolerantie: 0.3,
    categorie: 'kosten-omzet-winst',
    uitleg: `Winst = Omzet − Kosten = ${euro(omzet)} − ${euro(kosten)} = ${euro(winst)}. Winstpercentage = (winst ÷ omzet) × 100% = (${euro(winst)} ÷ ${euro(omzet)}) × 100% ≈ ${winstPct}%.`,
  }
}

function somTotaleKostenPerStuk() {
  const aantal = randInt(50, 500)
  const vasteKosten = randFloat(200, 1500, 0)
  const variabelPerStuk = randFloat(2, 15, 2)
  const totaleKosten = rond(vasteKosten + variabelPerStuk * aantal, 2)
  const kostenPerStuk = rond(totaleKosten / aantal, 2)
  const bedrijf = randItem(BEDRIJVEN)

  return {
    vraag: `${bedrijf} maakt ${aantal} producten. De vaste kosten zijn ${euro(vasteKosten)} en de variabele kosten zijn ${euro(variabelPerStuk)} per product. Wat zijn de totale kosten per product (gemiddeld)?`,
    antwoord: kostenPerStuk,
    eenheid: '€',
    tolerantie: 0.02,
    categorie: 'kosten-omzet-winst',
    uitleg: `Totale kosten = vaste kosten + (variabele kosten per stuk × aantal) = ${euro(vasteKosten)} + (${euro(variabelPerStuk)} × ${aantal}) = ${euro(totaleKosten)}. Kosten per stuk = totale kosten ÷ aantal = ${euro(totaleKosten)} ÷ ${aantal} = ${euro(kostenPerStuk)}.`,
  }
}

// ---------- categorie: verhaalsommen (meerstaps) ----------

function somReiskostenGedeeld() {
  const km = randInt(80, 400)
  const verbruik = randFloat(1, 1.6, 2) // liter per 10 km
  const benzinePrijs = randFloat(1.8, 2.3, 2)
  const personen = randInt(2, 5)
  const liters = rond((km / 10) * verbruik, 2)
  const totaleKosten = rond(liters * benzinePrijs, 2)
  const perPersoon = rond(totaleKosten / personen, 2)
  const namen = randItem(NAMEN)

  return {
    vraag: `${namen} en vrienden rijden samen ${km} km naar een festival. De auto verbruikt ${verbruik} liter per 10 km en benzine kost ${euro(benzinePrijs)} per liter. Ze zijn met z'n ${personen}en en delen de benzinekosten gelijk. Hoeveel euro betaalt ieder persoon?`,
    antwoord: perPersoon,
    eenheid: '€',
    tolerantie: 0.05,
    categorie: 'verhaalsommen',
    uitleg: `Totaal aantal liters = (${km} ÷ 10) × ${verbruik} = ${liters} liter. Totale kosten = ${liters} × ${euro(benzinePrijs)} = ${euro(totaleKosten)}. Per persoon = ${euro(totaleKosten)} ÷ ${personen} = ${euro(perPersoon)}.`,
  }
}

function somAbonnementBesparing() {
  const maandprijs = randFloat(6, 20, 2)
  const jaarprijs = rond(maandprijs * 12 * randFloat(0.75, 0.9, 2), 2)
  const besparing = rond(maandprijs * 12 - jaarprijs, 2)
  const naam = randItem(NAMEN)

  return {
    vraag: `Een streamingdienst kost ${euro(maandprijs)} per maand, of ${euro(jaarprijs)} als je in één keer een heel jaar betaalt. Hoeveel euro bespaart ${naam} door het jaarabonnement te kiezen in plaats van 12 keer de maandprijs te betalen?`,
    antwoord: besparing,
    eenheid: '€',
    tolerantie: 0.05,
    categorie: 'verhaalsommen',
    uitleg: `Prijs bij 12 losse maanden = ${euro(maandprijs)} × 12 = ${euro(rond(maandprijs * 12, 2))}. Besparing = ${euro(rond(maandprijs * 12, 2))} − ${euro(jaarprijs)} = ${euro(besparing)}.`,
  }
}

function somImportheffing() {
  const waarde = randFloat(40, 300, 2)
  const heffingPct = randItem([5, 8, 12, 15])
  const verzendkosten = randFloat(5, 20, 2)
  const heffing = rond(waarde * (heffingPct / 100), 2)
  const totaal = rond(waarde + heffing + verzendkosten, 2)

  return {
    vraag: `${randItem(NAMEN)} bestelt buiten de EU een pakketje van ${euro(waarde)}. Er geldt ${heffingPct}% invoerrecht over de waarde van het pakket, plus vaste verzendkosten van ${euro(verzendkosten)}. Wat is het totale bedrag dat betaald moet worden?`,
    antwoord: totaal,
    eenheid: '€',
    tolerantie: 0.05,
    categorie: 'verhaalsommen',
    uitleg: `Invoerrecht = ${heffingPct}% van ${euro(waarde)} = ${euro(heffing)}. Totaal = pakketwaarde + invoerrecht + verzendkosten = ${euro(waarde)} + ${euro(heffing)} + ${euro(verzendkosten)} = ${euro(totaal)}.`,
  }
}

function somLoonstrookjeNetto() {
  const brutoUurloon = randFloat(11, 18, 2)
  const uren = randInt(8, 24)
  const brutoLoon = rond(brutoUurloon * uren, 2)
  const heffingPct = randItem([8, 10, 12, 15])
  const nettoLoon = rond(brutoLoon * (1 - heffingPct / 100), 2)
  const naam = randItem(NAMEN)

  return {
    vraag: `${naam} werkt ${uren} uur bij een bijbaan tegen een brutoloon van ${euro(brutoUurloon)} per uur. Over het brutoloon wordt ${heffingPct}% loonheffing ingehouden. Wat houdt ${naam} netto over?`,
    antwoord: nettoLoon,
    eenheid: '€',
    tolerantie: 0.05,
    categorie: 'verhaalsommen',
    uitleg: `Brutoloon = uurloon × uren = ${euro(brutoUurloon)} × ${uren} = ${euro(brutoLoon)}. Loonheffing = ${heffingPct}% van ${euro(brutoLoon)} = ${euro(rond(brutoLoon * (heffingPct / 100), 2))}. Nettoloon = ${euro(brutoLoon)} − ${euro(rond(brutoLoon * (heffingPct / 100), 2))} = ${euro(nettoLoon)}.`,
  }
}

// ---------- registratie per categorie ----------

const GENERATOREN = {
  procenten: [somBtw, somKorting, somProcentueleVerandering, somRenteOverJaar],
  breuken: [somBreukVanBedrag, somBreukVanOmzet],
  verhoudingen: [somVerdeelsleutel, somPrijsPerEenheid, somSchaalVerhouding],
  formules: [somOmzetFormuleNaarPrijs, somWinstFormuleNaarKosten, somMargeFormuleNaarVerkoopprijs],
  'kosten-omzet-winst': [somBreakEven, somWinstPercentageVanOmzet, somTotaleKostenPerStuk],
  verhaalsommen: [somReiskostenGedeeld, somAbonnementBesparing, somImportheffing, somLoonstrookjeNetto],
}

let laatsteCategorie = null

/**
 * Genereert een oneindige stroom aan willekeurige 3F-rekensommen.
 * @param {string} categorieFilter - key uit CATEGORIEEN, of 'alle'
 * @returns {{vraag: string, antwoord: number, eenheid: string, tolerantie: number, uitleg: string, categorie: string}}
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
  return { ...som, niveau: '3F' }
}

export default genereerSom
