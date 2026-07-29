const rekenLes42 = [
  {
    nummer: 1,
    niveau: '2F',
    vraag:
      'Een fast-fashionwinkel verkoopt gemiddeld 4.000 T-shirts per maand, met een winst van €1,20 per T-shirt. Bereken de winst per maand.',
    antwoord: 4800,
    eenheid: '€',
    uitleg: '4.000 × €1,20 = €4.800.',
  },
  {
    nummer: 2,
    niveau: '2F',
    vraag:
      'Een slow-fashionwinkel verkoopt 150 shirts per maand, met een winst van €18 per shirt. Bereken de winst per maand.',
    antwoord: 2700,
    eenheid: '€',
    uitleg: '150 × €18 = €2.700.',
  },
  {
    nummer: 3,
    niveau: '2F',
    vraag:
      'De fast-fashionwinkel brengt 12 nieuwe collecties per jaar uit, de slow-fashionwinkel maar 2. Als beide winkels hun maandwinst uit vraag 1 en 2 het hele jaar door behalen, wat is dan het verschil in jaarwinst? (fast fashion − slow fashion, in hele euro\'s)',
    antwoord: 24600,
    eenheid: '€',
    uitleg: 'Fast fashion: €4.800 × 12 = €57.600. Slow fashion: €2.700 × 12 = €32.400. Verschil: €57.600 − €32.400 = €25.200. (Let op: als je in plaats van 12 maanden het aantal collecties gebruikt, kun je op een ander getal uitkomen — bereken hier de jaarwinst per maand × 12 maanden.)',
  },
  {
    nummer: 4,
    niveau: '2F',
    vraag: 'Een merk verhoogt de omloopsnelheid: in plaats van 6 collecties komen er 9 collecties per jaar, waarbij elke collectie een winst van €3.000 oplevert. Bereken de totale winststijging per jaar.',
    antwoord: 9000,
    eenheid: '€',
    uitleg: '(9 − 6) × €3.000 = 3 × €3.000 = €9.000.',
  },
  {
    nummer: 5,
    niveau: '3F',
    vraag:
      'Een fast-fashionmerk verkoopt 50.000 kledingstukken per maand met een winstmarge van 3%, bij een gemiddelde verkoopprijs van €8. Bereken de totale winst per maand.',
    antwoord: 12000,
    eenheid: '€',
    uitleg: 'Omzet: 50.000 × €8 = €400.000. Winst: 3% van €400.000 = €12.000.',
  },
  {
    nummer: 6,
    niveau: '3F',
    vraag:
      'Een slow-fashionmerk verkoopt 2.000 kledingstukken per maand met een winstmarge van 22%, bij een gemiddelde verkoopprijs van €45. Bereken de totale winst per maand.',
    antwoord: 19800,
    eenheid: '€',
    uitleg: 'Omzet: 2.000 × €45 = €90.000. Winst: 22% van €90.000 = €19.800.',
  },
  {
    nummer: 7,
    niveau: '3F',
    vraag:
      'Gebruik je antwoorden op vraag 5 en 6. Hoeveel procent hoger is de winst van het slow-fashionmerk vergeleken met de winst van het fast-fashionmerk? Rond af op één decimaal.',
    antwoord: 65,
    eenheid: '%',
    tolerantie: 1,
    uitleg: '(€19.800 − €12.000) / €12.000 × 100% = €7.800 / €12.000 × 100% = 65%.',
  },
  {
    nummer: 8,
    niveau: '3F',
    vraag:
      'Een fast-fashionmerk verlaagt de winstmarge van 3% naar 2,5% om de prijs te kunnen verlagen, maar verwacht daardoor 20% meer af te zetten. De omzet was €400.000 bij 3% marge. Bereken de nieuwe winst per maand na de prijsverlaging (bij 20% hogere omzet).',
    antwoord: 12000,
    eenheid: '€',
    uitleg:
      'Nieuwe omzet: €400.000 × 1,20 = €480.000. Nieuwe winst: 2,5% van €480.000 = €12.000. De winst blijft in dit voorbeeld toevallig (ongeveer) gelijk — een lagere marge kan dus door hoger volume worden gecompenseerd.',
  },
]

export default rekenLes42
