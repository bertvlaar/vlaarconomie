const rekenLes31 = [
  {
    nummer: 1,
    niveau: '2F',
    vraag: 'Een streamingdienst kost €11,99 per maand. Bereken de kosten per jaar (12 maanden), afgerond op twee decimalen.',
    antwoord: 143.88,
    eenheid: '€',
    uitleg: '€11,99 × 12 = €143,88.',
  },
  {
    nummer: 2,
    niveau: '2F',
    vraag: 'Een abonnee heeft gemiddeld 8 maanden een abonnement van €9,99 per maand. Bereken de totale opbrengst (CLV) van deze abonnee.',
    antwoord: 79.92,
    eenheid: '€',
    uitleg: '€9,99 × 8 = €79,92.',
  },
  {
    nummer: 3,
    niveau: '2F',
    vraag: 'Van de 10.000 abonnees zegt 4% per maand op. Hoeveel abonnees zeggen deze maand op?',
    antwoord: 400,
    eenheid: 'abonnees',
    uitleg: '4% van 10.000 = 400.',
  },
  {
    nummer: 4,
    niveau: '3F',
    vraag: 'Een abonnement kent een churn van 8% per maand. Bereken de gemiddelde abonnementsduur in maanden (1 ÷ churn), afgerond op één decimaal.',
    antwoord: 12.5,
    eenheid: 'maanden',
    tolerantie: 0.2,
    uitleg: '1 ÷ 0,08 = 12,5 maanden.',
  },
  {
    nummer: 5,
    niveau: '3F',
    vraag: 'Bij een churn van 5% per maand en een maandprijs van €14, wat is de Customer Lifetime Value (CLV), afgerond op hele euro\'s?',
    antwoord: 280,
    eenheid: '€',
    tolerantie: 2,
    uitleg: 'Gemiddelde duur: 1 ÷ 0,05 = 20 maanden. CLV: €14 × 20 = €280.',
  },
  {
    nummer: 6,
    niveau: '3F',
    vraag: 'Een bedrijf verlaagt de churn van 10% naar 5% per maand, bij een maandprijs van €10. Met hoeveel euro stijgt de CLV?',
    antwoord: 100,
    eenheid: '€',
    uitleg: 'CLV bij 10% churn: €10 × (1÷0,10) = €100. CLV bij 5% churn: €10 × (1÷0,05) = €200. Verschil: €200 − €100 = €100.',
  },
]

export default rekenLes31
