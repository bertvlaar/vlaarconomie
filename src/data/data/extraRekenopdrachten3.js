const extraRekenopdrachten3 = [
  { nummer: 1, niveau: '2F', vraag: 'Een streamingdienst kost €9,99 per maand. Bereken de kosten per jaar, afgerond op twee decimalen.', antwoord: 119.88, eenheid: '€', uitleg: '€9,99 × 12 = €119,88.' },
  { nummer: 2, niveau: '2F', vraag: 'Een gezin heeft 4 abonnementen van gemiddeld €8 per maand. Bereken de totale kosten per maand.', antwoord: 32, eenheid: '€', uitleg: '4 × €8 = €32.' },
  { nummer: 3, niveau: '2F', vraag: 'Van de 5.000 gratis gebruikers van een app stapt 3% over naar de betaalde versie. Hoeveel gebruikers is dat?', antwoord: 150, eenheid: 'gebruikers', uitleg: '3% van 5.000 = 150.' },
  { nummer: 4, niveau: '2F', vraag: 'Een abonnement kost €15 per maand en wordt na een prijsstijging van 20% duurder. Bereken de nieuwe maandprijs.', antwoord: 18, eenheid: '€', uitleg: '€15 × 1,20 = €18.' },
  { nummer: 5, niveau: '2F', vraag: 'Een streamingdienst heeft 8.000.000 abonnees. Van hen zegt 5% deze maand op. Hoeveel abonnees zeggen op?', antwoord: 400000, eenheid: 'abonnees', uitleg: '5% van 8.000.000 = 400.000.' },
  { nummer: 6, niveau: '2F', vraag: 'Een los abonnement kost €12 per maand. Een bundel van drie van zulke diensten kost €30 per maand in plaats van €36. Hoeveel euro bespaar je per maand met de bundel?', antwoord: 6, eenheid: '€', uitleg: '36 − 30 = €6.' },
  { nummer: 7, niveau: '2F', vraag: 'Een sportschoolabonnement kost €25 per maand. Je gebruikt het gemiddeld 4 keer per maand. Bereken de kosten per bezoek.', antwoord: 6.25, eenheid: '€', uitleg: '25 ÷ 4 = €6,25.' },
  { nummer: 8, niveau: '2F', vraag: 'Een abonnement heeft een opzegtermijn van 1 maand en kost €10 per maand. Je zegt op, maar betaalt nog 1 maand door. Hoeveel euro betaal je nog na je opzegging?', antwoord: 10, eenheid: '€', uitleg: 'De opzegtermijn is 1 maand, dus je betaalt nog 1 × €10 = €10.' },

  { nummer: 1, niveau: '3F', vraag: 'Een abonnement heeft een churn van 4% per maand en kost €13 per maand. Bereken de Customer Lifetime Value (CLV), afgerond op hele euro\'s.', antwoord: 325, eenheid: '€', tolerantie: 2, uitleg: 'Gemiddelde duur: 1 ÷ 0,04 = 25 maanden. CLV: €13 × 25 = €325.' },
  { nummer: 2, niveau: '3F', vraag: 'Een introductieprijs van €4 per maand stijgt na 4 maanden met 75% naar de normale prijs. Bereken de nieuwe maandprijs.', antwoord: 7, eenheid: '€', uitleg: '€4 × 1,75 = €7.' },
  { nummer: 3, niveau: '3F', vraag: 'Gebruik de nieuwe prijs uit de vorige vraag. Bereken de totale kosten over een heel jaar (4 maanden introductieprijs van €4, daarna 8 maanden de nieuwe prijs).', antwoord: 72, eenheid: '€', uitleg: '4 × €4 = €16. 8 × €7 = €56. Totaal: €16 + €56 = €72.' },
  { nummer: 4, niveau: '3F', vraag: 'Een bedrijf verlaagt de churn van 8% naar 4% per maand, bij een maandprijs van €12. Met hoeveel euro stijgt de CLV?', antwoord: 150, eenheid: '€', uitleg: 'CLV bij 8% churn: €12 × (1÷0,08) = €150. CLV bij 4% churn: €12 × (1÷0,04) = €300. Verschil: €300 − €150 = €150.' },
  { nummer: 5, niveau: '3F', vraag: 'Van de 200.000 gratis gebruikers van een freemium-app stapt 2% over naar de betaalde versie van €6 per maand. Bereken de maandelijkse omzet uit betalende gebruikers.', antwoord: 24000, eenheid: '€', uitleg: '2% van 200.000 = 4.000 betalende gebruikers. 4.000 × €6 = €24.000.' },
  { nummer: 6, niveau: '3F', vraag: 'Een consument heeft 6 abonnementen van gemiddeld €11,50 per maand. Bereken de totale jaarlasten, afgerond op hele euro\'s.', antwoord: 828, eenheid: '€', uitleg: '6 × €11,50 × 12 = €828.' },
]

export default extraRekenopdrachten3
