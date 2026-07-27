// src/data/thema6Data.js
//
// Thema 6 — De Winstfabriek: Hoe runt een bedrijf een gezonde zaak?
// Bedrijfseconomische kern
//
// Alle content in dit bestand hoort bij thema.slug === 'thema-6' uit data/themas.js.
// Structuur:
//   - titel, beschrijving
//   - paragrafen: 4 uitlegsecties (constante vs. variabele kosten, opbouw van
//     de winst- en verliesrekening, de break-evenanalyse, en een doorgerekend
//     praktijkvoorbeeld dat alles samenbrengt)
//   - begrippen: kernbegrippen met definitie + herkenbaar voorbeeld
//   - oefenvragen: meerkeuzevragen (deels rekenkundig) met per optie een uitleg
//
// Doorlopend voorbeeld in dit thema: broodjeszaak "Belegd & Bekeken".
// Vaste (constante) kosten: € 2.000 per maand (huur, verzekering, vaste loonkosten).
// Variabele kosten: € 3,00 per verkocht broodje (grondstoffen, verpakking).
// Verkoopprijs: € 7,00 per broodje.
// Dekkingsbijdrage per broodje: € 7,00 − € 3,00 = € 4,00.
// Break-evenpunt: € 2.000 / € 4,00 = 500 broodjes per maand.

const thema6Data = {
  titel: 'De Winstfabriek: Hoe runt een bedrijf een gezonde zaak?',
  beschrijving:
    "Elke ondernemer stelt zich vroeg of laat dezelfde spannende vraag: hoeveel moet ik verkopen voordat ik geen verlies meer draai? Achter elk bedrijf — van een broodjeszaak op de hoek tot een groot modemerk — schuilt een rekensom van kosten, opbrengsten en winst. In dit thema ontleed je die rekensom: je leert het verschil tussen kosten die je toch al moet betalen en kosten die meebewegen met de verkoop, je leert een winst- en verliesrekening lezen en opstellen, en je berekent het break-evenpunt: het moment waarop een bedrijf precies quitte speelt.",

  paragrafen: [
    {
      id: 'constante-en-variabele-kosten',
      titel: '1. Constante en variabele kosten: welke kosten lopen altijd door?',
      inhoud: [
        'Elk bedrijf maakt kosten, maar niet alle kosten gedragen zich hetzelfde. Constante kosten (ook wel vaste kosten genoemd) zijn kosten die een bedrijf móet betalen, ongeacht hoeveel het verkoopt — zelfs als er in een maand helemaal niets wordt verkocht. Denk aan huur van het pand, verzekeringen, de vaste salarissen van het personeel en de afschrijving op machines. Deze kosten blijven op de korte termijn (bijvoorbeeld binnen één jaar) hetzelfde, of je nu 10 of 1.000 producten verkoopt.',
        'Variabele kosten daarentegen bewegen wél mee met de productie en verkoop: hoe meer een bedrijf produceert en verkoopt, hoe hoger deze kosten oplopen. Denk aan grondstoffen, verpakkingsmateriaal, verzendkosten of een verkoopprovisie per stuk. Verkoop je niets, dan maak je ook geen variabele kosten; verkoop je het dubbele, dan verdubbelen (ongeveer) ook je variabele kosten.',
        'Dit onderscheid is cruciaal voor elke ondernemer: constante kosten bepalen hoeveel "gewicht" een bedrijf sowieso torst, terwijl variabele kosten bepalen hoe duur elke extra verkoop precies is. Samen vormen ze de totale kosten van een bedrijf: Totale kosten = Constante kosten + Variabele kosten.',
      ],
    },
    {
      id: 'winst-en-verliesrekening',
      titel: '2. De winst- en verliesrekening: waar komt de winst vandaan?',
      inhoud: [
        'Een winst- en verliesrekening (ook wel resultatenrekening genoemd) is een overzicht waarin een bedrijf over een bepaalde periode (meestal een maand, kwartaal of jaar) precies laat zien wat het aan opbrengsten heeft binnengehaald en welke kosten daar tegenover stonden. Het resultaat onderaan die rekening is de winst (als opbrengsten hoger zijn dan kosten) of het verlies (als kosten hoger zijn dan opbrengsten).',
        'De basisformule is simpel: Totale opbrengst − Totale kosten = Winst (of Verlies). De totale opbrengst — vaak ook omzet genoemd — bereken je door de verkoopprijs per product te vermenigvuldigen met het aantal verkochte producten: Totale opbrengst = Prijs × Afzet. Van dat bedrag trek je vervolgens de totale kosten af, dus zowel de constante als de variabele kosten samen.',
        'Een winst- en verliesrekening is dus geen ingewikkeld boekhoudkundig geheim, maar in de kern een heldere rekensom die laat zien of een bedrijf gezond draait. Loopt de omzet structureel achter bij de kosten, dan teert een bedrijf in op zijn reserves en is ingrijpen nodig: hogere prijzen, meer verkopen, of kosten verlagen.',
      ],
    },
    {
      id: 'break-evenanalyse',
      titel: '3. De break-evenanalyse: bij hoeveel verkopen ben je uit de kosten?',
      inhoud: [
        'De break-evenanalyse berekent het break-evenpunt (ook wel omslagpunt genoemd): het aantal producten dat een bedrijf moet verkopen om precies quitte te spelen — dus geen winst, maar ook geen verlies. Op dit punt zijn de totale opbrengsten precies gelijk aan de totale kosten.',
        'Om dit punt te berekenen, heb je eerst de dekkingsbijdrage per product nodig: het deel van de verkoopprijs dat overblijft nadat de variabele kosten per stuk zijn afgetrokken. Dekkingsbijdrage per stuk = Verkoopprijs − Variabele kosten per stuk. Deze bijdrage wordt gebruikt om eerst de constante kosten te "dekken"; alles wat daarna nog overblijft, is pas echte winst.',
        'Het break-evenpunt (in aantal producten) bereken je vervolgens met de formule: Break-evenpunt = Constante kosten ÷ Dekkingsbijdrage per stuk. Verkoopt een bedrijf minder dan dit aantal, dan draait het verlies; verkoopt het meer, dan maakt het vanaf dat punt winst op elk extra verkocht product.',
      ],
    },
    {
      id: 'praktijkvoorbeeld',
      titel: '4. Alles bij elkaar: een broodjeszaak doorgerekend',
      inhoud: [
        'Broodjeszaak "Belegd & Bekeken" heeft per maand € 2.000 aan constante kosten (huur, verzekering, vaste loonkosten). Voor elk broodje dat wordt verkocht, maakt de zaak € 3,00 aan variabele kosten (beleg, brood, verpakking) en verkoopt het voor € 7,00 per stuk. De dekkingsbijdrage per broodje is dus € 7,00 − € 3,00 = € 4,00.',
        'Het break-evenpunt is € 2.000 ÷ € 4,00 = 500 broodjes per maand. Verkoopt de zaak in een maand precies 500 broodjes, dan is de omzet (500 × € 7,00 = € 3.500) precies gelijk aan de totale kosten (€ 2.000 constant + 500 × € 3,00 variabel = € 3.500): winst is dan € 0.',
        'Verkoopt de zaak 800 broodjes, dan is de omzet 800 × € 7,00 = € 5.600 en zijn de totale kosten € 2.000 + (800 × € 3,00) = € 4.400. De winst is dan € 5.600 − € 4.400 = € 1.200. Zo laat de break-evenanalyse in één oogopslag zien hoeveel "veiligheidsmarge" een bedrijf heeft boven het omslagpunt, en helpt het bij beslissingen over prijs, kosten en verkoopdoelen.',
      ],
    },
  ],

  begrippen: [
    {
      term: 'Constante kosten',
      definitie:
        'Kosten die een bedrijf op de korte termijn altijd moet betalen, ongeacht hoeveel er wordt geproduceerd of verkocht — ook bij een omzet van nul.',
      voorbeeld:
        'De maandelijkse huur van het bedrijfspand: die betaal je evengoed, of er nu 10 of 1.000 broodjes worden verkocht.',
    },
    {
      term: 'Variabele kosten',
      definitie:
        'Kosten die meebewegen met de hoeveelheid geproduceerde of verkochte producten: hoe meer een bedrijf verkoopt, hoe hoger deze kosten in totaal oplopen.',
      voorbeeld:
        'De inkoop van beleg en brood: verkoop je het dubbele aantal broodjes, dan koop je ook ongeveer het dubbele aan grondstoffen in.',
    },
    {
      term: 'Totale opbrengst (omzet)',
      definitie:
        'Het totale bedrag dat een bedrijf binnenkrijgt door de verkoop van producten of diensten, berekend als de verkoopprijs per product vermenigvuldigd met het aantal verkochte producten (Prijs × Afzet).',
      voorbeeld:
        'Verkoop je 500 broodjes voor € 7,00 per stuk, dan is de totale opbrengst 500 × € 7,00 = € 3.500.',
    },
    {
      term: 'Winst- en verliesrekening',
      definitie:
        'Een overzicht van de totale opbrengsten en totale kosten van een bedrijf over een bepaalde periode, waaruit blijkt of het bedrijf winst of verlies heeft gemaakt (Totale opbrengst − Totale kosten = Winst of Verlies).',
      voorbeeld:
        'Aan het einde van het jaar zet een bakkerij alle inkomsten en alle kosten onder elkaar om te zien of er netto winst is overgebleven.',
    },
    {
      term: 'Break-evenanalyse / Omslagpunt (break-evenpunt)',
      definitie:
        'Een berekening die aangeeft bij welk aantal verkochte producten de totale opbrengsten precies gelijk zijn aan de totale kosten, zodat een bedrijf geen winst maar ook geen verlies maakt (Break-evenpunt = Constante kosten ÷ Dekkingsbijdrage per stuk).',
      voorbeeld:
        'Bij € 2.000 constante kosten en een dekkingsbijdrage van € 4,00 per broodje ligt het break-evenpunt op 500 broodjes per maand.',
    },
  ],

  oefenvragen: [
    {
      id: 1,
      vraag:
        'Broodjeszaak "Belegd & Bekeken" betaalt elke maand € 800 huur voor het pand, ongeacht hoeveel broodjes er worden verkocht. Tot welke kostensoort behoort deze huur?',
      opties: [
        {
          tekst: 'Variabele kosten, omdat de huur elke maand opnieuw wordt betaald.',
          correct: false,
          uitleg:
            'Onjuist: het feit dat een kostenpost elke maand terugkeert, zegt niets over of hij variabel is. Variabele kosten bewegen mee met de verkoop — en dat doet deze huur juist niet.',
        },
        {
          tekst:
            'Constante kosten, omdat het bedrag hetzelfde blijft, ongeacht hoeveel broodjes er worden verkocht.',
          correct: true,
          uitleg:
            'Juist: huur is een klassiek voorbeeld van constante kosten. Of de zaak nu 10 of 1.000 broodjes verkoopt, de huur blijft € 800 per maand.',
        },
        {
          tekst: 'Totale opbrengst, omdat huur wordt meegeteld bij de omzet van de zaak.',
          correct: false,
          uitleg:
            'Onjuist: huur is een kostenpost, geen opbrengst. Totale opbrengst bestaat uit inkomsten via verkoop, niet uit kosten die een bedrijf betaalt.',
        },
        {
          tekst: 'Winst, omdat huur onderdeel is van het eindresultaat van de winst- en verliesrekening.',
          correct: false,
          uitleg:
            'Onjuist: huur is een kostenpost die júist van de opbrengst wordt afgetrokken om winst te berekenen. Het is zelf geen winst.',
        },
      ],
    },
    {
      id: 2,
      vraag:
        'Voor elk verkocht broodje geeft "Belegd & Bekeken" € 3,00 uit aan beleg, brood en verpakking. De verkoopprijs is € 7,00 per broodje. Hoe groot is de dekkingsbijdrage per broodje?',
      opties: [
        {
          tekst: '€ 3,00, want dat zijn de kosten per broodje.',
          correct: false,
          uitleg:
            'Onjuist: € 3,00 zijn de variabele kosten per broodje, niet de dekkingsbijdrage. De dekkingsbijdrage is wat er van de verkoopprijs overblíjft na aftrek van die kosten.',
        },
        {
          tekst: '€ 7,00, want dat is de volledige verkoopprijs.',
          correct: false,
          uitleg:
            'Onjuist: € 7,00 is de verkoopprijs, maar daarvan gaan eerst de variabele kosten per stuk af voordat je de dekkingsbijdrage overhoudt.',
        },
        {
          tekst: '€ 4,00, want dat is de verkoopprijs min de variabele kosten per stuk (€ 7,00 − € 3,00).',
          correct: true,
          uitleg:
            'Juist: dekkingsbijdrage per stuk = verkoopprijs − variabele kosten per stuk = € 7,00 − € 3,00 = € 4,00. Dit bedrag wordt gebruikt om de constante kosten te dekken.',
        },
        {
          tekst: '€ 10,00, want dat is de verkoopprijs plus de variabele kosten per stuk.',
          correct: false,
          uitleg:
            'Onjuist: de dekkingsbijdrage bereken je door variabele kosten van de verkoopprijs áf te trekken, niet erbij op te tellen.',
        },
      ],
    },
    {
      id: 3,
      vraag:
        '"Belegd & Bekeken" heeft € 2.000 constante kosten per maand en een dekkingsbijdrage van € 4,00 per broodje. Hoeveel broodjes moet de zaak minimaal per maand verkopen om break-even te draaien?',
      opties: [
        {
          tekst: '250 broodjes, want € 2.000 ÷ € 8,00.',
          correct: false,
          uitleg:
            'Onjuist: € 8,00 is niet de juiste dekkingsbijdrage. Deel de constante kosten door de gegeven dekkingsbijdrage van € 4,00 per broodje, niet door een verzonnen bedrag.',
        },
        {
          tekst: '500 broodjes, want € 2.000 ÷ € 4,00 = 500.',
          correct: true,
          uitleg:
            'Juist: het break-evenpunt bereken je met Constante kosten ÷ Dekkingsbijdrage per stuk = € 2.000 ÷ € 4,00 = 500 broodjes per maand.',
        },
        {
          tekst: '2.000 broodjes, want dat is gelijk aan het bedrag van de constante kosten.',
          correct: false,
          uitleg:
            'Onjuist: het aantal broodjes is niet gelijk aan het bedrag van de constante kosten in euro\u2019s. Je moet de constante kosten delen door de dekkingsbijdrage per stuk.',
        },
        {
          tekst: '700 broodjes, want € 2.000 ÷ € 4,00 afgerond naar boven op een rond honderdtal.',
          correct: false,
          uitleg:
            'Onjuist: € 2.000 ÷ € 4,00 komt precies op 500 uit; er is geen reden om naar 700 af te ronden.',
        },
      ],
    },
    {
      id: 4,
      vraag:
        'In een goede maand verkoopt "Belegd & Bekeken" 800 broodjes (verkoopprijs € 7,00, variabele kosten € 3,00 per stuk, constante kosten € 2.000). Wat is de winst deze maand?',
      opties: [
        {
          tekst:
            '€ 5.600, want dat is de totale opbrengst (800 × € 7,00) en de kosten worden hier niet van afgetrokken.',
          correct: false,
          uitleg:
            'Onjuist: € 5.600 is inderdaad de totale opbrengst, maar dat is nog geen winst. Winst bereken je pas na aftrek van álle kosten (zowel constant als variabel).',
        },
        {
          tekst:
            '€ 1.200, want de opbrengst (800 × € 7,00 = € 5.600) min de totale kosten (€ 2.000 + 800 × € 3,00 = € 4.400) is € 1.200.',
          correct: true,
          uitleg:
            'Juist: Totale opbrengst € 5.600 − Totale kosten € 4.400 (€ 2.000 constant + € 2.400 variabel) = € 1.200 winst.',
        },
        {
          tekst: '€ 3.200, want dat is de opbrengst min alleen de variabele kosten (800 × € 3,00).',
          correct: false,
          uitleg:
            'Onjuist: dit bedrag vergeet de constante kosten van € 2.000 mee te nemen. Voor de winst moet je álle kosten aftrekken, niet alleen de variabele.',
        },
        {
          tekst: '€ 2.000, want dat is toevallig gelijk aan de constante kosten.',
          correct: false,
          uitleg:
            'Onjuist: dit is puur toeval in de getallen en geen correcte berekening. Bereken de winst altijd via Totale opbrengst − Totale kosten.',
        },
      ],
    },
    {
      id: 5,
      vraag:
        "De eigenaar van 'Belegd & Bekeken' huurt een groter pand en de constante kosten stijgen van € 2.000 naar € 2.400 per maand. De verkoopprijs (€ 7,00) en variabele kosten (€ 3,00) blijven gelijk. Wat gebeurt er met het break-evenpunt?",
      opties: [
        {
          tekst: 'Het break-evenpunt daalt, omdat een groter pand meer klanten aantrekt.',
          correct: false,
          uitleg:
            'Onjuist: de break-evenformule houdt geen rekening met hoeveel klanten een groter pand ‘aantrekt’, maar puur met de verhouding tussen constante kosten en dekkingsbijdrage. Hogere constante kosten verhogen het break-evenpunt.',
        },
        {
          tekst:
            'Het break-evenpunt stijgt naar 600 broodjes, want € 2.400 ÷ € 4,00 = 600.',
          correct: true,
          uitleg:
            'Juist: bij hogere constante kosten (€ 2.400) en een gelijke dekkingsbijdrage (€ 4,00) stijgt het break-evenpunt naar € 2.400 ÷ € 4,00 = 600 broodjes per maand.',
        },
        {
          tekst: 'Het break-evenpunt blijft gelijk op 500 broodjes, omdat de verkoopprijs niet is veranderd.',
          correct: false,
          uitleg:
            'Onjuist: het break-evenpunt hangt niet alleen af van de verkoopprijs, maar ook van de constante kosten. Omdat die zijn gestegen, stijgt ook het break-evenpunt.',
        },
        {
          tekst: 'Het break-evenpunt daalt naar 400 broodjes, omdat hogere kosten sneller worden terugverdiend.',
          correct: false,
          uitleg:
            'Onjuist: hogere constante kosten worden juist niet sneller terugverdiend — er moet méér worden verkocht om ze te dekken, dus het break-evenpunt stijgt in plaats van daalt.',
        },
      ],
    },
    {
      id: 6,
      vraag:
        'Welke bewering over de winst- en verliesrekening klopt het beste?',
      opties: [
        {
          tekst:
            'De winst- en verliesrekening laat alleen de constante kosten van een bedrijf zien.',
          correct: false,
          uitleg:
            'Onjuist: een winst- en verliesrekening laat álle kosten zien (constant én variabel), naast de totale opbrengst — niet alleen de constante kosten.',
        },
        {
          tekst:
            'De winst- en verliesrekening toont de totale opbrengst en totale kosten over een periode, met als resultaat winst of verlies.',
          correct: true,
          uitleg:
            'Juist: dit is precies de kern van een winst- en verliesrekening — Totale opbrengst − Totale kosten = Winst (of Verlies) over een bepaalde periode.',
        },
        {
          tekst:
            'De winst- en verliesrekening is hetzelfde als het break-evenpunt van een bedrijf.',
          correct: false,
          uitleg:
            'Onjuist: het break-evenpunt is één specifiek verkoopaantal (waarbij winst = 0), terwijl de winst- en verliesrekening een breder overzicht is van opbrengsten en kosten over een hele periode.',
        },
        {
          tekst:
            'Een winst- en verliesrekening kan nooit een verlies laten zien, want dan zou een bedrijf meteen stoppen.',
          correct: false,
          uitleg:
            'Onjuist: bedrijven kunnen best (tijdelijk) verlies draaien, bijvoorbeeld in een opstartfase, en dit verlies wordt gewoon zichtbaar in de winst- en verliesrekening.',
        },
      ],
    },
  ],
}

export default thema6Data
