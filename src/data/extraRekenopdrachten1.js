const extraRekenopdrachten1 = [
  { nummer: 1, niveau: '2F', vraag: 'Je zet €300 op een spaarrekening met 2% rente per jaar. Bereken het bedrag na 1 jaar.', antwoord: 306, eenheid: '€', uitleg: '€300 × 1,02 = €306.' },
  { nummer: 2, niveau: '2F', vraag: 'Je belegt €300 in aandelen met een gemiddeld rendement van 8% per jaar. Bereken het bedrag na 1 jaar.', antwoord: 324, eenheid: '€', uitleg: '€300 × 1,08 = €324.' },
  { nummer: 3, niveau: '2F', vraag: 'Een "guru" belooft 15% winst per week op een inleg van €300. Bereken het beloofde bedrag na 1 week.', antwoord: 345, eenheid: '€', uitleg: '€300 × 1,15 = €345.' },
  { nummer: 4, niveau: '2F', vraag: 'Bij een piramidespel werft elke deelnemer 2 nieuwe mensen. Hoeveel nieuwe deelnemers ontstaan er op niveau 3 (te beginnen bij 1 persoon op niveau 0)?', antwoord: 8, eenheid: 'deelnemers', uitleg: '2³ = 8 nieuwe deelnemers op niveau 3.' },
  { nummer: 5, niveau: '2F', vraag: 'Een finfluencer krijgt 10% commissie over elk bedrag dat via zijn link wordt ingelegd. Bij €50.000 ingelegd bedrag, hoeveel commissie ontvangt hij?', antwoord: 5000, eenheid: '€', uitleg: '10% van €50.000 = €5.000.' },
  { nummer: 6, niveau: '2F', vraag: 'Een aanbieder belooft 4% rendement per maand. Bereken het beloofde rendement per jaar, als dit elke maand simpelweg wordt opgeteld (zonder samengestelde groei).', antwoord: 48, eenheid: '%', uitleg: '4% × 12 = 48%.' },
  { nummer: 7, niveau: '2F', vraag: 'Van de 10.000 mensen die een scam-advertentie zien, klikt 2% door naar de website. Hoeveel mensen is dat?', antwoord: 200, eenheid: 'mensen', uitleg: '2% van 10.000 = 200.' },
  { nummer: 8, niveau: '2F', vraag: 'Iemand belegt €1.000 en verliest hiervan 80% bij het instorten van een piramidespel. Hoeveel euro houdt deze persoon over?', antwoord: 200, eenheid: '€', uitleg: '€1.000 × (1 − 0,80) = €200.' },

  { nummer: 1, niveau: '3F', vraag: 'Een "guru" belooft 15% winst per week op een inleg van €300. Bereken het beloofde bedrag na 4 weken (met samengestelde groei), afgerond op hele euro\'s.', antwoord: 525, eenheid: '€', tolerantie: 2, uitleg: '€300 × 1,15⁴ ≈ €525.' },
  { nummer: 2, niveau: '3F', vraag: 'Bij een piramidespel werft elke deelnemer 4 nieuwe mensen. Bereken het totaal aantal deelnemers (inclusief de bedenker) na 5 niveaus.', antwoord: 1365, eenheid: 'deelnemers', uitleg: '1 + 4 + 16 + 64 + 256 + 1024 = 1.365.' },
  { nummer: 3, niveau: '3F', vraag: 'Een aanbieder belooft 4% rendement per maand, met samengestelde groei. Bereken het werkelijke rendement per jaar, afgerond op één decimaal.', antwoord: 60.1, eenheid: '%', tolerantie: 0.5, uitleg: '1,04¹² ≈ 1,601, dus een rendement van ongeveer 60,1% per jaar (in plaats van de "simpele" 48%).' },
  { nummer: 4, niveau: '3F', vraag: 'Twee finfluencers verdienen samen €800.000 aan commissie van 10% over het totaal ingelegde bedrag. Bereken het totaal ingelegde bedrag van de gedupeerde beleggers.', antwoord: 8000000, eenheid: '€', uitleg: '€800.000 ÷ 0,10 = €8.000.000.' },
  { nummer: 5, niveau: '3F', vraag: 'Een piramidespel heeft na 6 niveaus 4.096 nieuwe deelnemers nodig (elke deelnemer werft 4 nieuwe mensen: 4⁶). Hoeveel procent van de Nederlandse bevolking (17.800.000) is dit, afgerond op twee decimalen?', antwoord: 0.02, eenheid: '%', tolerantie: 0.01, uitleg: '4.096 ÷ 17.800.000 × 100% ≈ 0,02%.' },
]

export default extraRekenopdrachten1
