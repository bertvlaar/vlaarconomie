const rekenLes22 = [
  {
    nummer: 1,
    niveau: '2F',
    vraag: 'Een pakket van 1000 Gems kost €9,99. Hoeveel euro is 1 Gem waard, afgerond op vier decimalen?',
    antwoord: 0.0100,
    eenheid: '€',
    tolerantie: 0.0005,
    uitleg: '€9,99 ÷ 1000 ≈ €0,01 per Gem.',
  },
  {
    nummer: 2,
    niveau: '2F',
    vraag: 'Een skin kost 1350 Gems. Bij een wisselkoers van 100 Gems per euro, wat is de werkelijke prijs in euro\'s?',
    antwoord: 13.5,
    eenheid: '€',
    uitleg: '1350 ÷ 100 = €13,50.',
  },
  {
    nummer: 3,
    niveau: '2F',
    vraag: 'Je hebt een skin nodig van 1350 Gems, maar kunt alleen pakketten van 1000 Gems kopen (€9,99 per pakket). Hoeveel pakketten moet je minimaal kopen?',
    antwoord: 2,
    eenheid: 'pakketten',
    uitleg: '1 pakket (1000 Gems) is niet genoeg; met 2 pakketten (2000 Gems) heb je wel genoeg.',
  },
  {
    nummer: 4,
    niveau: '3F',
    vraag: 'Bij de situatie in de vorige vraag: hoeveel Gems houd je over na aankoop van de skin, en hoeveel euro is dat "verspilde" restant waard (bij €9,99 per 1000 Gems, afgerond op twee decimalen)?',
    antwoord: 6.49,
    eenheid: '€',
    tolerantie: 0.05,
    uitleg: '2000 − 1350 = 650 Gems over. 650 Gems × (€9,99 ÷ 1000) ≈ €6,49.',
  },
  {
    nummer: 5,
    niveau: '3F',
    vraag: 'Een gamebedrijf verkoopt 200.000 exemplaren van een skin voor €13,50 per stuk. De eenmalige ontwikkelkosten van de skin waren €40.000, en de marginale kosten per exemplaar zijn vrijwel €0. Bereken de totale winst.',
    antwoord: 2660000,
    eenheid: '€',
    uitleg: 'Omzet: 200.000 × €13,50 = €2.700.000. Winst: €2.700.000 − €40.000 = €2.660.000.',
  },
]

export default rekenLes22
