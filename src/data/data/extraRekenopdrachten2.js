const extraRekenopdrachten2 = [
  { nummer: 1, niveau: '2F', vraag: 'Een pakket van 2000 Gems kost €18,99. Bereken de prijs van 1 Gem in euro\'s, afgerond op vier decimalen.', antwoord: 0.0095, eenheid: '€', tolerantie: 0.0005, uitleg: '€18,99 ÷ 2000 ≈ €0,0095 per Gem.' },
  { nummer: 2, niveau: '2F', vraag: 'Een skin kost 800 V-Bucks. Bij een wisselkoers van 100 V-Bucks per euro, wat is de werkelijke prijs?', antwoord: 8, eenheid: '€', uitleg: '800 ÷ 100 = €8.' },
  { nummer: 3, niveau: '2F', vraag: 'Van de 3.000.000 spelers van een freemium-game koopt 4% een battle pass van €9. Hoeveel spelers kopen de battle pass?', antwoord: 120000, eenheid: 'spelers', uitleg: '4% van 3.000.000 = 120.000.' },
  { nummer: 4, niveau: '2F', vraag: 'Gebruik het aantal uit de vorige vraag. Bereken de totale omzet uit de verkoop van de battle pass.', antwoord: 1080000, eenheid: '€', uitleg: '120.000 × €9 = €1.080.000.' },
  { nummer: 5, niveau: '2F', vraag: 'Een lootbox kost €2 en heeft 5% kans op een zeldzaam item. Hoeveel lootboxes moet je gemiddeld openen om het item te krijgen?', antwoord: 20, eenheid: 'lootboxes', uitleg: '100 ÷ 5 = 20 lootboxes gemiddeld.' },
  { nummer: 6, niveau: '2F', vraag: 'Gebruik het aantal uit de vorige vraag. Bereken de gemiddeld verwachte kosten om het zeldzame item te krijgen.', antwoord: 40, eenheid: '€', uitleg: '20 × €2 = €40.' },
  { nummer: 7, niveau: '2F', vraag: 'Een speler koopt 3 pakketten van 1000 Gems (€9,99 per pakket) om een item van 2700 Gems te kopen. Hoeveel Gems houdt de speler over?', antwoord: 300, eenheid: 'Gems', uitleg: '3 × 1000 = 3000 Gems gekocht. 3000 − 2700 = 300 Gems over.' },
  { nummer: 8, niveau: '2F', vraag: 'Een speler geeft in één maand €45 uit aan een freemium-game. Bereken de kosten per jaar, als dit bedrag elke maand gelijk blijft.', antwoord: 540, eenheid: '€', uitleg: '€45 × 12 = €540.' },

  { nummer: 1, niveau: '3F', vraag: 'Een gamebedrijf verkoopt 500.000 exemplaren van een skin voor €12,50 per stuk. De ontwikkelkosten waren €75.000 en de marginale kosten per exemplaar zijn vrijwel €0. Bereken de totale winst.', antwoord: 6175000, eenheid: '€', uitleg: 'Omzet: 500.000 × €12,50 = €6.250.000. Winst: €6.250.000 − €75.000 = €6.175.000.' },
  { nummer: 2, niveau: '3F', vraag: 'Van de 10.000.000 spelers van een game koopt 2,5% een item van €6. Bereken de totale omzet uit dit item.', antwoord: 1500000, eenheid: '€', uitleg: '2,5% van 10.000.000 = 250.000 spelers. 250.000 × €6 = €1.500.000.' },
  { nummer: 3, niveau: '3F', vraag: 'Een lootbox kost €1,50 met 3% kans op het zeldzame item. Bereken de gemiddeld verwachte kosten om het item te krijgen, afgerond op hele euro\'s.', antwoord: 50, eenheid: '€', tolerantie: 1, uitleg: 'Gemiddeld aantal lootboxes: 100 ÷ 3 ≈ 33,3. Kosten: 33,3 × €1,50 ≈ €50.' },
  { nummer: 4, niveau: '3F', vraag: 'Een gamebedrijf verlaagt de dropkans van een item van 5% naar 2%, bij een prijs van €2 per lootbox. Met hoeveel euro stijgen de gemiddeld verwachte kosten om het item te krijgen?', antwoord: 60, eenheid: '€', uitleg: 'Bij 5%: (100÷5) × €2 = €40. Bij 2%: (100÷2) × €2 = €100. Verschil: €100 − €40 = €60.' },
  { nummer: 5, niveau: '3F', vraag: 'Een speler heeft een item van 2350 Gems nodig en kan alleen pakketten van 1000 Gems kopen (€9,99 per pakket). Bereken hoeveel euro\'s "verspild" worden aan ongebruikte Gems, afgerond op twee decimalen.', antwoord: 6.49, eenheid: '€', tolerantie: 0.05, uitleg: '3 pakketten nodig (3000 Gems). Restant: 3000 − 2350 = 650 Gems. 650 Gems × (€9,99 ÷ 1000) ≈ €6,49.' },
]

export default extraRekenopdrachten2
