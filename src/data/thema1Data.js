// src/data/thema1Data.js
//
// Thema 1 — Scams, Crypto-bros & Get-Rich-Quick
// Financiële geletterdheid & Oplichting
//
// Alle content in dit bestand hoort bij thema.slug === 'thema-1' uit data/themas.js.
// Structuur:
//   - titel, beschrijving
//   - paragrafen: 4 uitlegsecties (TikTok-cultuur, informatie-asymmetrie,
//     reëel investeren vs. Ponzi/piramidespelen)
//   - begrippen: kernbegrippen met definitie + herkenbaar voorbeeld
//   - oefenvragen: meerkeuzevragen met per optie een uitleg (juist/onjuist)

const thema1Data = {
  titel: 'Scams, Crypto-bros & Get-Rich-Quick',
  beschrijving:
    "Elke dag scrol je langs iemand die in een geleaste Lamborghini zweert dat jij ook 'financieel vrij' kunt zijn — als je maar op de link in zijn bio klikt. Dit thema laat zien waarom die belofte bijna altijd een leugen is, hoe piramidespelen en Ponzi-fraude precies werken, waarom de verkoper altijd meer weet dan jij, en hoe je jezelf leert beschermen tegen de oplichters van je eigen tijdlijn.",

  paragrafen: [
    {
      id: 'tiktok-cultuur',
      titel: '1. De TikTok-guru: rijk worden in 15 seconden',
      inhoud: [
        "Scroll drie minuten door TikTok of Instagram Reels en je komt hem vanzelf tegen: de 'guru' in een huurauto voor een huurvilla, die schreeuwt dat jij 'dom' bent als je nog steeds voor de kost werkt. Hij heeft altijd hetzelfde recept — crypto-trading, dropshipping, of een 'geheim' online casino-systeem — en altijd dezelfde belofte: snel, makkelijk en gegarandeerd geld.",
        "Dit is geen toeval. Het algoritme van social media beloont content die extreme emoties oproept: jaloezie, FOMO ('fear of missing out') en de droom van moeiteloos succes scoren nu eenmaal beter dan een saai filmpje over pensioensparen. Hoe extremer de claim, hoe meer views — en hoe meer views, hoe meer nieuwe slachtoffers de guru kan werven.",
        "Tieners zijn een aantrekkelijke doelgroep voor deze oplichters: veel jongeren hebben nog weinig ervaring met financiële producten, zijn gewend om beslissingen te nemen op basis van korte video's, en voelen sociale druk als leeftijdsgenoten online pronken met 'winst'. Precies die combinatie maakt het thema van dit hoofdstuk zo relevant: niet omdat jij dommer bent, maar omdat de scam speciaal is ontworpen om jouw brein te overtuigen.",
      ],
    },
    {
      id: 'risico-en-rendement',
      titel: '2. De wet die niemand kan omzeilen: risico en rendement',
      inhoud: [
        "In de economie bestaat een ijzeren regel: hoe hoger het rendement dat je wordt beloofd, hoe hoger het risico dat je je geld (deels of helemaal) kwijtraakt. Een spaarrekening geeft een laag, veilig rendement omdat het risico bijna nul is. Aandelen kunnen op lange termijn gemiddeld zo'n 5 à 9% per jaar opleveren, maar dan moet je ook accepteren dat de waarde in een slecht jaar flink kan dalen.",
        "Als iemand jou 'gegarandeerd 20% winst per week' belooft, klopt er wiskundig al iets niet: geen enkele legale belegging op de wereld haalt dat structureel, jaar in jaar uit, zonder risico. Zodra het woord 'gegarandeerd' samen met een torenhoog rendement opduikt, is dat geen kans — het is een rode vlag.",
        "Deze regel geldt ook voor de tijd die je erin moet steken: 'passief' 5 duizend euro per maand verdienen zonder kennis, netwerk of tijdsinvestering bestaat economisch gezien niet. Iemand moet ergens het echte risico of de echte arbeid dragen — en bij een scam ben jij dat.",
      ],
    },
    {
      id: 'ponzi-en-piramides',
      titel: '3. Reëel investeren versus Ponzi-fraude en piramidespelen',
      inhoud: [
        "Bij een reële investering (bijvoorbeeld aandelen, obligaties of een spaarrekening) verdient jouw geld winst omdat het ergens daadwerkelijk productief wordt ingezet: een bedrijf maakt en verkoopt producten, of een bank leent je geld uit tegen rente. Er zit een echte economische activiteit achter je rendement.",
        "Bij een piramidespel verdien je geld niet met een product, maar door nieuwe mensen te werven die op hun beurt weer geld inleggen. Bij Ponzi-fraude (genoemd naar oplichter Charles Ponzi uit de jaren '20) betaalt de organisator de 'winst' van bestaande deelnemers simpelweg uit het geld dat nieuwe deelnemers instoppen — er wordt nergens echt geïnvesteerd of verdiend.",
        "Het wiskundige probleem van beide constructies is hetzelfde: om iedereen uit te betalen heb je een oneindig groeiende stroom nieuwe deelnemers nodig. Omdat de wereldbevolking eindig is, stort zo'n systeem altijd in — het is nooit de vraag óf, maar wanneer. Historische voorbeelden als de crypto-'investeringsplatforms' BitConnect en OneCoin beloofden torenhoge, gegarandeerde rendementen en werden achteraf ontmaskerd als miljardenfraude waarbij vooral de laatste instappers alles verloren.",
        "Herkenningspunt voor jou: zodra jouw 'winst' afhankelijk is van het aantal mensen dat je nog moet overtuigen om ook in te stappen, zit je niet in een investering — je zit in een piramide, en de vraag is alleen hoe dicht bij de top jij staat wanneer hij instort.",
      ],
    },
    {
      id: 'informatie-asymmetrie-zelfbescherming',
      titel: '4. Informatie-asymmetrie: de guru weet meer dan jij',
      inhoud: [
        "Informatie-asymmetrie betekent dat de ene partij in een transactie veel meer relevante informatie heeft dan de andere — en dat verschil gebruikt in zijn eigen voordeel. Bij online scams is dit vaak extreem: de 'guru' weet precies hoeveel hij zelf verdient (namelijk aan het verkopen van zijn cursus of aan jouw inleg), terwijl jij alleen zijn gepolijste Instagram-verhaal ziet.",
        "Sterker nog: veel zogenaamde crypto- of trading-experts verdienen hun geld helemaal niet met traden, maar met het verkopen van dure 'mentorship-programma's', links met een commissie ('affiliate-marketing') of het werven van nieuwe deelnemers voor een piramidespel. Dat is informatie die ze je nooit zullen vertellen, want hun verdienmodel is jouw onwetendheid.",
        "Financiële zelfbescherming betekent dat jij die informatiekloof actief probeert te dichten voordat je ook maar één euro overmaakt: controleer of een aanbieder geregistreerd staat bij een toezichthouder (in Nederland de AFM of DNB), zoek onafhankelijke recensies buiten het platform van de verkoper zelf, en wees extra achterdochtig bij tijdsdruk ('nu instappen, morgen is de deal weg') en bij beloftes die met geen enkele andere legale belegging te evenaren zijn.",
        "De belangrijkste vuistregel blijft simpel: investeer nooit geld dat je niet kunt missen, en als iets te mooi klinkt om waar te zijn, is het dat vrijwel altijd ook.",
      ],
    },
  ],

  begrippen: [
    {
      term: 'Risico en rendement',
      definitie:
        'Het economische principe dat een hoger verwacht rendement altijd gepaard gaat met een hoger risico op verlies. Een laag risico betekent structureel ook een lager rendement.',
      voorbeeld:
        "Een spaarrekening (laag risico) geeft misschien 2% rente per jaar; een crypto-'guru' die 20% per week belooft, belooft dus impliciet ook een enorm risico — ook al zegt hij daar niets over.",
    },
    {
      term: 'Piramidespelen / Ponzi-fraude',
      definitie:
        "Een systeem waarbij deelnemers worden uitbetaald met het geld van nieuw geworven deelnemers, in plaats van met winst uit een echt product of echte investering. Het systeem stort onvermijdelijk in zodra de instroom van nieuwe deelnemers opdroogt.",
      voorbeeld:
        "Een 'investeringsplatform' dat je alleen uitbetaalt als je zelf drie nieuwe mensen aanbrengt, is geen belegging maar een piramidespel.",
    },
    {
      term: 'Informatie-asymmetrie',
      definitie:
        'Een situatie waarin de ene partij in een transactie (bijvoorbeeld de verkoper) veel meer relevante informatie heeft dan de andere partij (bijvoorbeeld jij als koper of belegger), waardoor er een oneerlijk voordeel ontstaat.',
      voorbeeld:
        "Een influencer die een 'trading-cursus' verkoopt weet zelf precies dat hij meer verdient aan de verkoop van die cursus dan aan het traden zelf — maar vertelt jou alleen over zijn vermeende beleggingssucces.",
    },
    {
      term: 'Financiële zelfbescherming',
      definitie:
        "Het bewust nemen van maatregelen om jezelf te beschermen tegen financiële risico's en fraude, zoals het controleren van vergunningen, het zoeken van onafhankelijke informatie en het wantrouwen van druk en te-mooi-om-waar-te-zijn beloftes.",
      voorbeeld:
        "Voordat je geld inlegt, checken of een aanbieder geregistreerd staat bij de AFM, en nooit instappen onder tijdsdruk ('nu of nooit').",
    },
  ],

  oefenvragen: [
    {
      id: 1,
      vraag:
        "Een Instagram-guru belooft: 'Stort €500 en ik verdubbel het gegarandeerd binnen twee weken met mijn geheime cryptostrategie.' Wat is hier economisch gezien het grootste alarmsignaal?",
      opties: [
        {
          tekst: "Het woord 'crypto', want alle cryptobeleggingen zijn illegaal.",
          correct: false,
          uitleg:
            'Onjuist: crypto zelf is niet illegaal en niet elke crypto-investering is fraude. Het alarmsignaal zit niet in het woord crypto, maar in de combinatie van garantie en extreem hoog rendement.',
        },
        {
          tekst:
            "De combinatie van 'gegarandeerd' en een enorm rendement in een zeer korte tijd, wat indruist tegen de wet van risico en rendement.",
          correct: true,
          uitleg:
            'Juist: geen enkele legale belegging kan een verdubbeling in twee weken garanderen zonder extreem risico. Zodra iemand hoog rendement mét garantie belooft, is dat economisch onmogelijk en dus een teken van fraude.',
        },
        {
          tekst: 'Het feit dat het via Instagram wordt aangeboden in plaats van via een bank.',
          correct: false,
          uitleg:
            'Onjuist: het kanaal (social media versus bank) zegt op zichzelf niets over betrouwbaarheid. Ook banken en erkende aanbieders adverteren via social media; het gaat om de inhoud van de belofte.',
        },
        {
          tekst: 'Dat er om maar €500 wordt gevraagd, want echte fraudeurs vragen altijd grotere bedragen.',
          correct: false,
          uitleg:
            'Onjuist: oplichters vragen juist vaak bewust kleine, "veilig aanvoelende" bedragen om de drempel voor het slachtoffer laag te houden. Het bedrag zegt niets over de betrouwbaarheid.',
        },
      ],
    },
    {
      id: 2,
      vraag:
        "Een klasgenoot vertelt enthousiast dat hij bij een 'investeringsplatform' zit waar je alleen wordt uitbetaald als je zelf minstens drie nieuwe deelnemers werft. Hoe noem je dit systeem economisch correct?",
      opties: [
        {
          tekst: 'Een indexfonds, omdat het risico wordt gespreid over meerdere deelnemers.',
          correct: false,
          uitleg:
            'Onjuist: bij een indexfonds wordt je geld belegd in een brede mix van echte bedrijven; er is geen enkele koppeling met het werven van nieuwe deelnemers.',
        },
        {
          tekst: 'Een piramidespel, omdat de uitbetaling afhangt van het werven van nieuwe deelnemers in plaats van een echt product of echte investering.',
          correct: true,
          uitleg:
            'Juist: zodra jouw uitbetaling afhangt van hoeveel nieuwe mensen je aanbrengt in plaats van een reëel product of dienst, is dit per definitie een piramidespel — en die storten altijd in.',
        },
        {
          tekst: "Een 'dividend-uitkering', zoals bij een normaal beursgenoteerd bedrijf.",
          correct: false,
          uitleg:
            'Onjuist: dividend is een deel van de winst van een echt bedrijf dat wordt uitgekeerd aan aandeelhouders. Hier is geen sprake van winst uit een bedrijfsactiviteit, maar van geld van nieuwe deelnemers.',
        },
        {
          tekst: 'Crowdfunding, omdat meerdere mensen samen geld inleggen voor hetzelfde doel.',
          correct: false,
          uitleg:
            'Onjuist: bij crowdfunding financieren mensen gezamenlijk een concreet project of product. Hier is de enige "activiteit" het werven van nieuwe deelnemers, wat het wezenlijke kenmerk van een piramidespel is.',
        },
      ],
    },
    {
      id: 3,
      vraag:
        "Waarom stort een Ponzi-fraude of piramidespel altijd vroeg of laat in elkaar, zelfs als de organisator niet wordt gepakt door de politie?",
      opties: [
        {
          tekst: 'Omdat de overheid dit soort systemen na een tijdje altijd automatisch stopzet.',
          correct: false,
          uitleg:
            'Onjuist: veel van dit soort fraudes lopen jaren door zonder ingrijpen van een overheid. Het instorten is een wiskundig, geen wettelijk gevolg.',
        },
        {
          tekst: 'Omdat het systeem een steeds groter wordende, uiteindelijk oneindige instroom van nieuwe deelnemers nodig heeft om iedereen uit te betalen, en die instroom eindig is.',
          correct: true,
          uitleg:
            'Juist: omdat uitbetalingen komen uit het geld van nieuwe deelnemers in plaats van uit echte winst, moet de groep deelnemers steeds sneller blijven groeien. Omdat de wereldbevolking eindig is, is instorting wiskundig onvermijdelijk.',
        },
        {
          tekst: 'Omdat crypto-koersen na verloop van tijd altijd dalen.',
          correct: false,
          uitleg:
            'Onjuist: dit gaat niet per se over echte crypto-koersen. Bij een Ponzi-fraude is er vaak helemaal geen onderliggende belegging — het "instorten" komt door het ontbreken van genoeg nieuwe instroom, niet door een koersdaling.',
        },
        {
          tekst: 'Omdat banken na een paar maanden altijd ingrijpen bij verdachte rekeningen.',
          correct: false,
          uitleg:
            'Onjuist: banken kunnen soms verdachte transacties signaleren, maar dit is geen wetmatigheid en zeker niet de reden waarom het systeem zelf wiskundig moet instorten.',
        },
      ],
    },
    {
      id: 4,
      vraag:
        "Een 'trading-coach' op TikTok blijkt zijn geld vooral te verdienen aan het verkopen van een dure online cursus, niet aan het beleggen zelf — maar dat vertelt hij nooit in zijn video's. Welk begrip past het beste bij deze situatie?",
      opties: [
        {
          tekst: 'Informatie-asymmetrie, omdat de coach cruciale informatie over zijn eigen verdienmodel achterhoudt.',
          correct: true,
          uitleg:
            'Juist: de coach weet iets essentieels dat jij niet weet (namelijk dat zijn echte inkomen uit cursusverkoop komt) en gebruikt dat kennisverschil in zijn eigen voordeel. Dat is de kern van informatie-asymmetrie.',
        },
        {
          tekst: 'Prijselasticiteit, omdat de cursusprijs afhangt van de vraag ernaar.',
          correct: false,
          uitleg:
            'Onjuist: prijselasticiteit gaat over hoe de gevraagde hoeveelheid verandert bij een prijsverandering. Dat is hier niet het onderwerp; het gaat om verborgen informatie over het verdienmodel.',
        },
        {
          tekst: 'Schaarste, omdat er maar een beperkt aantal plekken in de cursus zijn.',
          correct: false,
          uitleg:
            'Onjuist: kunstmatige schaarste kan wel als verkooptruc worden ingezet, maar het kernprobleem in deze situatie is dat de coach zijn echte verdienmodel verzwijgt — dat is informatie-asymmetrie.',
        },
        {
          tekst: 'Consumentensurplus, omdat leerlingen een goede deal denken te krijgen.',
          correct: false,
          uitleg:
            'Onjuist: consumentensurplus is het voordeel dat een koper haalt doordat hij minder betaalt dan hij maximaal bereid was te betalen. Dat gaat hier niet op; het probleem is het verborgen verdienmodel van de coach.',
        },
      ],
    },
    {
      id: 5,
      vraag:
        "Je ziet een advertentie: 'Laatste kans! Stort binnen 1 uur en krijg gegarandeerd 30% rendement per maand.' Wat is de verstandigste vorm van financiële zelfbescherming in deze situatie?",
      opties: [
        {
          tekst: 'Meteen instappen met een klein bedrag, want dan is het risico toch beperkt.',
          correct: false,
          uitleg:
            'Onjuist: ook een klein bedrag verliezen aan een piramidespel is geld kwijt zonder enige reële kans op rendement. "Klein instappen" is precies wat oplichters willen dat je denkt.',
        },
        {
          tekst: 'Niet ingaan op de tijdsdruk, zelf onafhankelijk onderzoek doen en controleren of de aanbieder geregistreerd staat bij een toezichthouder zoals de AFM.',
          correct: true,
          uitleg:
            'Juist: kunstmatige tijdsdruk is een klassieke scam-tactiek om je kritisch denken uit te schakelen. Zelf onderzoek doen en een vergunning controleren is precies wat financiële zelfbescherming inhoudt.',
        },
        {
          tekst: 'Wachten tot een vriend hetzelfde doet en pas dan meedoen, om het risico te delen.',
          correct: false,
          uitleg:
            'Onjuist: risico "delen" met een vriend maakt een piramidespel niet veiliger — jullie verliezen dan mogelijk allebei je inleg. Groepsdruk is juist een reden waarom veel mensen hierin trappen.',
        },
        {
          tekst: 'Reageren op de advertentie om te vragen om nog meer garanties op papier.',
          correct: false,
          uitleg:
            'Onjuist: een schriftelijke "garantie" van een oplichter is juridisch waardeloos als het bedrijf niet legaal en gereguleerd is. Papieren beloftes van een scam bieden geen enkele echte bescherming.',
        },
      ],
    },
    {
      id: 6,
      vraag:
        "Wat is het belangrijkste economische verschil tussen beleggen in een regulier indexfonds en instappen in een crypto-piramidespel?",
      opties: [
        {
          tekst: 'Bij een indexfonds ben je verzekerd tegen elk koersverlies, bij een piramidespel niet.',
          correct: false,
          uitleg:
            'Onjuist: ook een indexfonds kan in waarde dalen; er is geen garantie tegen verlies. Het verschil zit niet in garanties, maar in of er een echte onderliggende waarde is.',
        },
        {
          tekst: "Bij een indexfonds komt het rendement voort uit de winst van echte bedrijven; bij een piramidespel komt de 'winst' van de inleg van nieuwe deelnemers.",
          correct: true,
          uitleg:
            'Juist: dit is het fundamentele verschil tussen reëel investeren en Ponzi-/piramidefraude. Bij een indexfonds zit er een echte economische activiteit achter je rendement; bij een piramidespel niet.',
        },
        {
          tekst: 'Een indexfonds is altijd duurder om in te stappen dan een crypto-piramidespel.',
          correct: false,
          uitleg:
            'Onjuist: instapkosten zeggen niets over de betrouwbaarheid van een aanbieder. Piramidespelen vragen vaak juist lage instapbedragen om zoveel mogelijk deelnemers te werven.',
        },
        {
          tekst: 'Een indexfonds levert altijd een hoger rendement op dan crypto.',
          correct: false,
          uitleg:
            'Onjuist: rendementen van legale beleggingen wisselen en niemand kan vooraf garanderen welke hoger uitpakt. Het kernverschil gaat over de bron van het rendement (echte economische activiteit versus inleg van nieuwe deelnemers), niet over de hoogte ervan.',
        },
      ],
    },
  ],
}

export default thema1Data
