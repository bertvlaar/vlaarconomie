// src/data/thema4Data.js
//
// Thema 4 — Fast-fashion, Greenwashing & De kledingkast van de toekomst
// Bedrijfseconomie & Duurzaamheid
//
// Alle content in dit bestand hoort bij thema.slug === 'thema-4' uit data/themas.js.
// Structuur:
//   - titel, beschrijving
//   - paragrafen: 4 uitlegsecties (transparantie in de keten, marketing vs.
//     realiteit/greenwashing, consumentenvertrouwen, de economische waarde
//     van een keurmerk)
//   - begrippen: kernbegrippen met definitie + herkenbaar voorbeeld
//   - oefenvragen: meerkeuzevragen met per optie een uitleg (juist/onjuist)

const thema4Data = {
  titel: 'Fast-fashion, Greenwashing & De kledingkast van de toekomst',
  beschrijving:
    "Een T-shirt van €4,99 met het label 'eco collection' erop: hoe kan iets zó goedkoop én duurzaam tegelijk zijn? Meestal kan dat niet — en dat is precies waar greenwashing om de hoek komt kijken. Dit thema laat zien hoe kledingmerken beweren dat ze 'groen' zijn zonder dat aan te kunnen tonen, waarom de productieketen achter je kleding vaak bewust ondoorzichtig is, en hoe een eerlijk keurmerk economisch gezien pas écht waarde heeft.",

  paragrafen: [
    {
      id: 'transparantie-in-de-keten',
      titel: '1. De productieketen: van katoenveld tot kledingrek',
      inhoud: [
        "Voordat een kledingstuk in de winkel hangt, doorloopt het een lange keten: grondstoffen (zoals katoen of polyester) worden geproduceerd, versponnen tot garen, geweven tot stof, genaaid tot kleding en vervolgens vervoerd naar winkels over de hele wereld. Elke schakel in deze keten zit vaak in een ander land, met andere lonen, arbeidsomstandigheden en milieuregels.",
        "Transparantie in de keten betekent dat een bedrijf openlijk laat zien waar en hoe elk onderdeel van dit proces plaatsvindt: welke fabriek het kledingstuk maakte, onder welke arbeidsvoorwaarden, en met welke grondstoffen. Voor consumenten is dit vaak volledig onzichtbaar — op het label staat hooguit 'made in' een land, zonder enige informatie over de fabriek, de lonen of de milieu-impact.",
        "Deze ondoorzichtigheid is voor bedrijven economisch gezien vaak juist voordelig: hoe minder consumenten weten over de werkelijke productieomstandigheden, hoe makkelijker het is om lage prijzen te combineren met een 'duurzaam' imago, zonder dat iemand dat kan controleren.",
      ],
    },
    {
      id: 'marketing-vs-realiteit-greenwashing',
      titel: '2. Greenwashing: marketing vs. realiteit',
      inhoud: [
        "Greenwashing is het bewust overdrijven, verdraaien of verzinnen van de duurzaamheid van een product of bedrijf, met als doel milieubewuste consumenten aan te trekken zonder daadwerkelijk substantieel duurzamer te zijn. Denk aan vage termen als 'eco', 'groen' of 'bewust' op een label, zonder dat daar een controleerbare, onafhankelijke onderbouwing achter zit.",
        "Een klassiek voorbeeld: een kledingmerk lanceert een 'conscious collection' die beweert van gerecycled materiaal te zijn gemaakt, terwijl die collectie slechts een klein percentage van de totale (niet-duurzame) productie van het bedrijf uitmaakt. De marketing suggereert dat het hele merk duurzaam bezig is, terwijl de realiteit is dat het om een klein, goed vermarkt uitzonderingslijntje gaat.",
        "Het economische mechanisme hierachter is simpel: duurzaamheid is voor veel consumenten een reden om meer te willen betalen of een merk te verkiezen boven een ander. Als een bedrijf het imago van duurzaamheid kan claimen zonder de bijbehorende (vaak hogere) productiekosten te dragen, profiteert het van het beste van twee werelden — hogere prijzen of meer verkoop, tegen dezelfde lage kosten.",
      ],
    },
    {
      id: 'consumentenvertrouwen',
      titel: '3. Consumentenvertrouwen: een kwetsbare, waardevolle grondstof',
      inhoud: [
        "Consumentenvertrouwen is de mate waarin kopers geloven dat de informatie die een bedrijf over zijn producten geeft, klopt. Vertrouwen is voor bedrijven economisch buitengewoon waardevol: vertrouwen klanten een merk, dan zijn ze sneller geneigd (opnieuw) te kopen, een hogere prijs te accepteren en het merk aan anderen aan te bevelen.",
        "Tegelijk is vertrouwen kwetsbaar: zodra bekend wordt dat een 'duurzame' claim niet klopt, kan dat leiden tot een reputatieschade die veel groter is dan de kortetermijnwinst van de misleidende marketing. Onderzoeksbureaus en journalisten die greenwashing blootleggen, zorgen er bovendien voor dat consumenten steeds kritischer worden op dit soort claims.",
        "Voor jou als consument betekent dit dat gezonde scepsis loont: een vage kreet als 'eco-friendly' op een label is geen bewijs, maar een marketingclaim. Pas als een claim controleerbaar en onafhankelijk gecontroleerd is, wordt vertrouwen ook daadwerkelijk verdiend in plaats van alleen beweerd.",
      ],
    },
    {
      id: 'economische-waarde-keurmerk',
      titel: '4. Waarom een eerlijk keurmerk economische waarde heeft',
      inhoud: [
        "Een keurmerk is een onafhankelijk toegekend label dat aangeeft dat een product aan bepaalde, vooraf vastgestelde eisen voldoet — bijvoorbeeld op het gebied van arbeidsomstandigheden, milieu-impact of materiaalgebruik. Het cruciale verschil met een eigen marketingclaim ('100% eco!') is dat een keurmerk wordt gecontroleerd door een externe, onafhankelijke partij die het bedrijf zelf niet betaalt om een gunstig oordeel te geven.",
        "Economisch gezien lost een goed keurmerk het probleem van informatie-asymmetrie op: jij als consument kunt zelf niet controleren onder welke omstandigheden een kledingstuk is gemaakt, maar een betrouwbaar keurmerk doet dat namens jou. Daardoor kun je sneller en met meer vertrouwen een aankoopbeslissing nemen, zonder zelf de hele productieketen te hoeven natrekken.",
        "Niet elk 'keurmerk' is echter evenveel waard: sommige labels zijn door de industrie zelf bedacht en gecontroleerd, zonder strenge, onafhankelijke toetsing — dat wordt ook wel een 'zelfbenoemd' keurmerk genoemd. De economische waarde van een keurmerk hangt dus volledig af van de geloofwaardigheid en onafhankelijkheid van de organisatie die het uitreikt, niet van hoe officieel het logo eruitziet.",
      ],
    },
  ],

  begrippen: [
    {
      term: 'Transparantie in de keten',
      definitie:
        'De mate waarin een bedrijf openlijk en controleerbaar inzicht geeft in elke stap van zijn productieproces, van grondstof tot eindproduct, inclusief arbeidsomstandigheden en milieu-impact.',
      voorbeeld:
        "Een kledingmerk dat exact publiceert in welke fabriek een kledingstuk is gemaakt en welk loon de arbeiders daar verdienen, in plaats van alleen 'made in' een land op het label te zetten.",
    },
    {
      term: 'Marketing vs. realiteit (greenwashing)',
      definitie:
        'Het bewust overdrijven, verdraaien of verzinnen van de duurzaamheid van een product of bedrijf in marketinguitingen, zonder dat dit overeenkomt met de daadwerkelijke productieomstandigheden.',
      voorbeeld:
        "Een label met 'eco collection' erop, terwijl het kledingstuk grotendeels bestaat uit hetzelfde materiaal en dezelfde productiemethode als de rest van de (niet-duurzame) collectie.",
    },
    {
      term: 'Consumentenvertrouwen',
      definitie:
        'De mate waarin kopers geloven dat de informatie die een bedrijf verstrekt over zijn producten of duurzaamheid daadwerkelijk klopt, wat direct invloed heeft op koopgedrag en merkloyaliteit.',
      voorbeeld:
        "Zodra bekend wordt dat een 'duurzame' claim niet klopt, kan het vertrouwen van klanten in een merk sterk dalen, met gevolgen voor de verkoop.",
    },
    {
      term: 'Economische waarde van een keurmerk',
      definitie:
        'De meerwaarde die een onafhankelijk gecontroleerd label toevoegt door informatie-asymmetrie tussen consument en producent te verminderen, waardoor consumenten sneller en met meer vertrouwen een aankoopbeslissing kunnen nemen.',
      voorbeeld:
        'Een onafhankelijk gecontroleerd keurmerk voor eerlijke arbeidsomstandigheden geeft consumenten een controleerbaar signaal, in plaats van dat ze op het woord van het merk zelf moeten vertrouwen.',
    },
  ],

  oefenvragen: [
    {
      id: 1,
      vraag:
        "Een T-shirt kost €4,99 en heeft een label met 'eco collection' erop. Wat is economisch gezien de belangrijkste reden om hier kritisch naar te kijken?",
      opties: [
        {
          tekst: 'Omdat duurzame kleding altijd minstens €50 moet kosten om echt te zijn.',
          correct: false,
          uitleg:
            'Onjuist: er bestaat geen vaste minimumprijs waarboven kleding automatisch duurzaam is. De prijs alleen zegt niets zeker over duurzaamheid; het gaat om de onderbouwing van de claim.',
        },
        {
          tekst:
            "Omdat een echt duurzame productiewijze doorgaans hogere kosten met zich meebrengt, wat lastig te combineren is met een zeer lage verkoopprijs zonder onderbouwing.",
          correct: true,
          uitleg:
            'Juist: eerlijke lonen, duurzamere materialen en strengere milieu-eisen brengen doorgaans hogere kosten met zich mee. Een zeer lage prijs zonder enige onafhankelijke onderbouwing is daarom een signaal voor mogelijke greenwashing.',
        },
        {
          tekst: "Omdat het woord 'eco' wettelijk verboden is op kledinglabels.",
          correct: false,
          uitleg:
            "Onjuist: het gebruik van het woord 'eco' is niet in algemene zin verboden. Het probleem is dat de term vaak vaag en niet-gecontroleerd wordt gebruikt, niet dat hij illegaal zou zijn.",
        },
        {
          tekst: 'Omdat alle T-shirts onder de €10 altijd van slechte kwaliteit stof zijn gemaakt.',
          correct: false,
          uitleg:
            'Onjuist: prijs zegt iets over kosten, maar is geen betrouwbare, directe maatstaf voor materiaalkwaliteit. Het kernprobleem in deze vraag gaat over de ongeloofwaardige combinatie van lage prijs en duurzaamheidsclaim, niet over stofkwaliteit.',
        },
      ],
    },
    {
      id: 2,
      vraag:
        "Een kledingmerk brengt een kleine 'conscious'-lijn uit van gerecycled materiaal, terwijl 95% van de rest van de collectie op dezelfde manier wordt geproduceerd als voorheen. De reclame suggereert dat het hele merk duurzaam bezig is. Hoe noem je dit?",
      opties: [
        {
          tekst: 'Transparantie in de keten, omdat het merk laat zien welk materiaal er is gebruikt.',
          correct: false,
          uitleg:
            "Onjuist: het tonen van één materiaalkeuze voor een klein deel van de collectie is geen volledige transparantie over de hele productieketen. Hier is juist sprake van een misleidende suggestie over het hele merk.",
        },
        {
          tekst:
            "Greenwashing, omdat de marketing een duurzaam imago voor het hele merk suggereert, terwijl de werkelijke productie grotendeels ongewijzigd blijft.",
          correct: true,
          uitleg:
            'Juist: dit is een schoolvoorbeeld van greenwashing — een klein, goed vermarkt "duurzaam" lijntje wordt gebruikt om het imago van het hele merk groener te doen lijken dan de daadwerkelijke productie rechtvaardigt.',
        },
        {
          tekst: "Consumentensurplus, omdat klanten een 'groen' gevoel krijgen bij hun aankoop.",
          correct: false,
          uitleg:
            'Onjuist: consumentensurplus gaat over het prijsvoordeel dat een koper ervaart, niet over een misleidend duurzaamheidsimago. Dat begrip past hier niet bij het beschreven mechanisme.',
        },
        {
          tekst: 'Een keurmerk, omdat de collectie apart wordt aangeduid als "conscious".',
          correct: false,
          uitleg:
            "Onjuist: een interne, zelfbedachte naam als 'conscious' is geen onafhankelijk gecontroleerd keurmerk. Zonder externe controle is dit slechts een marketingterm.",
        },
      ],
    },
    {
      id: 3,
      vraag:
        "Waarom is het voor een fast-fashionmerk economisch aantrekkelijk om de productieketen ondoorzichtig te houden?",
      opties: [
        {
          tekst: 'Omdat wetgeving in de meeste landen transparantie over de keten verbiedt.',
          correct: false,
          uitleg:
            'Onjuist: er bestaat geen algemeen verbod op het delen van informatie over de productieketen. Sommige landen stimuleren of verplichten juist meer transparantie.',
        },
        {
          tekst:
            "Omdat minder inzicht in de werkelijke productieomstandigheden het makkelijker maakt om lage prijzen te combineren met een gunstig imago, zonder dat consumenten dit kunnen controleren.",
          correct: true,
          uitleg:
            'Juist: zolang consumenten niet kunnen zien onder welke omstandigheden kleding echt wordt gemaakt, is het voor een bedrijf makkelijker om lage kosten te behouden terwijl het toch een positief of duurzaam imago claimt.',
        },
        {
          tekst: 'Omdat transparantie de productiekosten van kleding automatisch verdubbelt.',
          correct: false,
          uitleg:
            'Onjuist: het delen van informatie over de keten kost op zichzelf relatief weinig; het is niet de transparantie zelf die de kosten verhoogt, maar eventuele verbeteringen in arbeidsomstandigheden die eruit kunnen volgen.',
        },
        {
          tekst: 'Omdat consumenten sowieso nooit geïnteresseerd zijn in productieomstandigheden.',
          correct: false,
          uitleg:
            "Onjuist: onderzoek en de opkomst van keurmerken laten juist zien dat een groeiende groep consumenten wél waarde hecht aan productieomstandigheden. Dat is precies waarom greenwashing voor bedrijven aantrekkelijk kan zijn: het speelt in op die interesse zonder de bijbehorende kosten te dragen.",
        },
      ],
    },
    {
      id: 4,
      vraag:
        "Wat is het belangrijkste verschil tussen een onafhankelijk keurmerk en een zelfbedachte marketingterm zoals 'eco collection' op een label?",
      opties: [
        {
          tekst: 'Een keurmerk is altijd duurder om te verkrijgen dan het bedenken van een eigen marketingterm.',
          correct: false,
          uitleg:
            'Onjuist: de kosten van een keurmerk zijn niet het kernverschil. Het gaat om wíé controleert of de claim klopt, niet om de prijs van het label zelf.',
        },
        {
          tekst:
            "Een keurmerk wordt toegekend en gecontroleerd door een onafhankelijke partij op basis van vaste eisen, terwijl een marketingterm door het bedrijf zelf wordt bedacht zonder externe controle.",
          correct: true,
          uitleg:
            'Juist: dit is precies het verschil dat een keurmerk economische waarde geeft — een externe, onafhankelijke controle in plaats van een claim die het bedrijf simpelweg zelf verzint.',
        },
        {
          tekst: 'Een keurmerk garandeert altijd de laagste prijs voor de consument.',
          correct: false,
          uitleg:
            'Onjuist: een keurmerk zegt iets over hoe een product is gemaakt (bijvoorbeeld arbeidsomstandigheden of milieu-impact), niet over de prijs die de consument uiteindelijk betaalt.',
        },
        {
          tekst: "Een marketingterm zoals 'eco collection' is wettelijk hetzelfde als een officieel keurmerk.",
          correct: false,
          uitleg:
            "Onjuist: een marketingterm heeft geen enkele onafhankelijke toetsing achter zich, terwijl een erkend keurmerk aan vooraf vastgestelde, controleerbare eisen moet voldoen. Dat verschil is juridisch en economisch aanzienlijk.",
        },
      ],
    },
    {
      id: 5,
      vraag:
        "Er komt in het nieuws dat een populair kledingmerk een duurzaamheidsclaim niet kan onderbouwen. Wat is het meest waarschijnlijke economische gevolg voor het merk, volgens dit thema?",
      opties: [
        {
          tekst: 'Er verandert vrijwel niets, want consumenten controleren zulke claims toch nooit.',
          correct: false,
          uitleg:
            'Onjuist: onderzoeksjournalistiek en toenemende consumentkritiek zorgen er juist voor dat dit soort onthullingen wel degelijk gevolgen kunnen hebben voor het vertrouwen in en de verkoop van een merk.',
        },
        {
          tekst:
            "Mogelijke schade aan het consumentenvertrouwen, wat op de langere termijn de verkoop en reputatie van het merk kan schaden.",
          correct: true,
          uitleg:
            'Juist: consumentenvertrouwen is economisch waardevol maar kwetsbaar. Zodra een duurzaamheidsclaim wordt ontkracht, kan dat vertrouwen (en daarmee de bereidheid om te kopen of een hogere prijs te betalen) flink dalen.',
        },
        {
          tekst: 'Het merk krijgt automatisch een boete opgelegd ter hoogte van de jaarwinst.',
          correct: false,
          uitleg:
            'Onjuist: eventuele boetes verschillen sterk per land en situatie en zijn niet automatisch gekoppeld aan de jaarwinst. Het besproken gevolg in dit thema is vooral reputatie- en vertrouwensschade.',
        },
        {
          tekst: 'De aandelenkoers van het merk stijgt juist, omdat de aandacht de naamsbekendheid vergroot.',
          correct: false,
          uitleg:
            'Onjuist: negatieve aandacht rond een ontkrachte duurzaamheidsclaim wordt in de regel geassocieerd met reputatieschade, niet met een positief effect op vertrouwen of waardering.',
        },
      ],
    },
    {
      id: 6,
      vraag:
        "Welke actie helpt jou als consument het beste om greenwashing te herkennen, volgens dit thema?",
      opties: [
        {
          tekst: "Altijd het duurste kledingstuk in de winkel kiezen, want dat is per definitie het meest duurzaam.",
          correct: false,
          uitleg:
            'Onjuist: een hogere prijs is geen garantie voor duurzaamheid. Ook duur geprijsde kleding kan met misleidende duurzaamheidsclaims worden verkocht.',
        },
        {
          tekst:
            "Controleren of een duurzaamheidsclaim wordt ondersteund door een onafhankelijk, controleerbaar keurmerk in plaats van alleen een vage term op het label.",
          correct: true,
          uitleg:
            'Juist: dit is precies de manier om het verschil te zien tussen een oprechte, gecontroleerde duurzaamheidsclaim en een niet-onderbouwde marketingterm.',
        },
        {
          tekst: "Afgaan op de kleur van het label, want groene labels zijn altijd betrouwbaarder.",
          correct: false,
          uitleg:
            'Onjuist: de kleur van een label heeft geen enkele juridische of feitelijke betekenis. Groen gebruiken in de opmaak is juist een veelgebruikte, ongegronde marketingtruc bij greenwashing.',
        },
        {
          tekst: "Ervan uitgaan dat elk kledingmerk dat 'duurzaam' zegt te zijn, dat ook automatisch waarmaakt.",
          correct: false,
          uitleg:
            'Onjuist: dit is precies de aanname die greenwashing zo effectief maakt. Een claim zonder onafhankelijke controle is geen bewijs, maar slechts een bewering.',
        },
      ],
    },
  ],
}

export default thema4Data
