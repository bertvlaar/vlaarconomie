// src/data/thema3Data.js
//
// Thema 3 — Abonnementenroof: Van Netflix tot HelloFresh
// De Abonnementsmaatschappij
//
// Alle content in dit bestand hoort bij thema.slug === 'thema-3' uit data/themas.js.
// Structuur:
//   - titel, beschrijving
//   - paragrafen: 4 uitlegsecties (van eigendom naar gebruik, recurring revenue,
//     vaste lasten, de psychologische valkuil van 'kleine' maandbedragen)
//   - begrippen: kernbegrippen met definitie + herkenbaar voorbeeld
//   - oefenvragen: meerkeuzevragen met per optie een uitleg (juist/onjuist)

const thema3Data = {
  titel: "Abonnementenroof: Van Netflix tot HelloFresh",
  beschrijving:
    "Je Spotify, Netflix, iCloud-opslag, sportschool, HelloFresh-box en misschien zelfs je telefoon: stuk voor stuk 'maar een paar euro per maand'. Los lijkt elk bedrag onschuldig, maar bij elkaar opgeteld verdwijnt er iedere maand een verrassend groot deel van je geld richting bedrijven — vaak zonder dat je het echt merkt. Dit thema legt uit waarom bedrijven massaal overstappen van eenmalige verkoop naar abonnementen, en waarom dat businessmodel voor hén fantastisch is en voor jouw portemonnee een sluipend gevaar.",

  paragrafen: [
    {
      id: 'van-eigendom-naar-gebruik',
      titel: '1. Van bezitten naar gebruiken: de nieuwe standaard',
      inhoud: [
        "Vroeger kocht je een cd, een dvd of een telefoon en was hij van jou. Tegenwoordig stream je muziek via Spotify, kijk je series via Netflix, lease je een telefoon in plaats van hem te kopen en huur je zelfs kleding via verhuurplatforms. Deze verschuiving heet de overgang van eigendom naar gebruik: je betaalt niet meer voor het bezit van een product, maar voor toegang tot een dienst zolang je blijft betalen.",
        "Voor jou als consument voelt dit vaak prettig: geen grote uitgave ineens, direct toegang, en je kunt altijd overstappen. Maar er zit een cruciaal verschil in vergeleken met vroeger kopen: zodra je stopt met betalen, ben je alles kwijt. Bij een gekochte cd blijf je eigenaar, ook al betaal je nooit meer iets; bij een gestreamd muziekabonnement heb je op het moment dat je stopt met betalen helemaal niets meer in handen.",
        "Deze verschuiving is niet toevallig ontstaan: het is een bewuste strategische keuze van bedrijven, omdat een abonnementenmodel financieel enorm veel voordeliger is dan losse verkoop — voor het bedrijf, wel te verstaan.",
      ],
    },
    {
      id: 'recurring-revenue',
      titel: '2. Recurring revenue: waarom bedrijven dol zijn op abonnementen',
      inhoud: [
        "Recurring revenue (terugkerende omzet) betekent dat een bedrijf niet één keer geld verdient aan jou, maar iedere maand opnieuw, automatisch, zonder dat jij er telkens actief voor hoeft te kiezen. Dit is voor bedrijven enorm waardevol: het maakt de omzet voorspelbaar, waardoor ze makkelijker kunnen plannen, investeren en zelfs geld kunnen lenen bij een bank op basis van hun verwachte toekomstige inkomsten.",
        "Vergelijk twee verdienmodellen: een winkel die een keer een broek verkoopt voor €40, versus een streamingdienst die €10 per maand incasseert. Na vier maanden heeft de streamingdienst evenveel verdiend, maar blijft daarna maand na maand geld binnenkomen van dezelfde klant, zonder dat er iets extra's hoeft te worden geproduceerd of verkocht.",
        "Bedrijven sturen dan ook actief op twee dingen: zoveel mogelijk nieuwe abonnees werven, én bestaande abonnees zo lang mogelijk vasthouden ('churn', het aantal opzeggende klanten, zo laag mogelijk houden). Vandaar de vaak ingewikkelde opzegprocedures, terwijl aanmelden meestal in twee klikken kan.",
      ],
    },
    {
      id: 'vaste-lasten',
      titel: '3. Vaste lasten: de stille aanslag op je maandbudget',
      inhoud: [
        "Vaste lasten zijn kosten die maandelijks terugkeren, ongeacht hoeveel je een dienst daadwerkelijk gebruikt: huur, verzekeringen, en steeds vaker ook abonnementen. Het probleem met vaste lasten is dat ze structureel je beschikbare (vrije) budget verkleinen, ook in maanden waarin je bijvoorbeeld nauwelijks Netflix hebt gekeken of geen enkele HelloFresh-box hebt geopend.",
        "Uit onderzoek naar huishoudbudgetten blijkt dat mensen structureel onderschatten hoeveel abonnementen ze eigenlijk hebben lopen en wat die gezamenlijk kosten. Vijf abonnementen van €9,99 per maand lijken elk apart onschuldig, maar tellen op tot bijna €50 per maand — €600 per jaar — voor diensten die je soms nauwelijks gebruikt.",
        "Het gevaar van vaste lasten zit in het woord 'vast': in tegenstelling tot een eenmalige aankoop, waarbij jij elke keer opnieuw bewust een keuze maakt, loopt een abonnement door totdat je actief actie onderneemt om het stop te zetten. Niet opzeggen is de standaardoptie, en dat werkt in het voordeel van het bedrijf.",
      ],
    },
    {
      id: 'psychologische-valkuil',
      titel: "4. De valkuil van 'maar een paar euro per maand'",
      inhoud: [
        "Waarom voelt €9,99 per maand zoveel onschuldiger aan dan €119,88 per jaar, terwijl het exact hetzelfde bedrag is? Dit is een bekend psychologisch effect: mensen beoordelen kleine, herhaalde bedragen milder dan één groot bedrag, ook al is de totale uitgave identiek. Bedrijven maken hier bewust gebruik van door prijzen altijd per maand te tonen in plaats van per jaar.",
        "Daarnaast speelt het 'set-and-forget'-effect: zodra een abonnement automatisch wordt afgeschreven van je rekening, verdwijnt het uit je actieve aandacht. Je herinnert je een eenmalige aankoop van €50 vaak nog wekenlang, maar een terugkerende afschrijving van €9,99 wordt al snel onzichtbaar tussen alle andere transacties.",
        "De beste bescherming tegen deze valkuil is simpel maar effectief: reken elk abonnement bewust om naar een jaarbedrag (dus €9,99 per maand wordt €119,88 per jaar), maak minstens één keer per kwartaal een overzicht van al je lopende abonnementen, en stel jezelf bij elk abonnement de vraag: zou ik dit ook aanschaffen als ik het bedrag nu in één keer moest overmaken?",
      ],
    },
  ],

  begrippen: [
    {
      term: 'Van eigendom naar gebruik',
      definitie:
        'De economische verschuiving waarbij consumenten steeds vaker betalen voor tijdelijke toegang tot een product of dienst (zolang ze blijven betalen), in plaats van het product blijvend in eigendom te verkrijgen.',
      voorbeeld:
        'Muziek streamen via Spotify in plaats van cd\u2019s kopen: zodra je stopt met betalen, heb je geen muziek meer in bezit.',
    },
    {
      term: 'Terugkerende kasstromen (recurring revenue)',
      definitie:
        'Inkomsten die een bedrijf automatisch en herhaaldelijk (bijvoorbeeld maandelijks) ontvangt van dezelfde klant, wat de omzet voorspelbaar en stabiel maakt in vergelijking met eenmalige verkopen.',
      voorbeeld:
        'Netflix int elke maand automatisch hetzelfde bedrag van miljoenen abonnees, zonder dat zij elke maand opnieuw actief hoeven te bestellen.',
    },
    {
      term: 'Vaste lasten',
      definitie:
        'Kosten die periodiek terugkeren en grotendeels onafhankelijk zijn van hoeveel een product of dienst daadwerkelijk wordt gebruikt, waardoor ze structureel het beschikbare budget verkleinen.',
      voorbeeld:
        'Een sportschoolabonnement dat je iedere maand betaalt, ook in de maanden dat je geen moment bent wezen sporten.',
    },
    {
      term: "De psychologische valkuil van 'kleine maandelijkse bedragen'",
      definitie:
        'Het verschijnsel dat mensen een klein, herhaald bedrag (bijvoorbeeld per maand) veel minder als een grote uitgave ervaren dan hetzelfde totaalbedrag in één keer, waardoor ze sneller akkoord gaan met abonnementen.',
      voorbeeld:
        "€9,99 per maand voelt onschuldig, terwijl hetzelfde abonnement neerkomt op bijna €120 per jaar — een bedrag dat je waarschijnlijk sneller zou afwegen als het in één keer werd gevraagd.",
    },
  ],

  oefenvragen: [
    {
      id: 1,
      vraag:
        "Je leased tegenwoordig je telefoon in plaats van hem te kopen. Wat is het belangrijkste economische verschil met vroeger?",
      opties: [
        {
          tekst: 'Een geleasede telefoon is technisch altijd beter dan een gekochte telefoon.',
          correct: false,
          uitleg:
            'Onjuist: de technische kwaliteit van een toestel hangt niet af van de manier van betalen (lease versus koop), maar van het model zelf.',
        },
        {
          tekst:
            'Bij lease betaal je voor gebruik zolang je blijft betalen, terwijl je bij koop blijvend eigenaar wordt, ook als je stopt met betalen aan iets anders.',
          correct: true,
          uitleg:
            'Juist: dit is de kern van de verschuiving van eigendom naar gebruik. Zodra je stopt met de leasebetalingen, ben je het gebruiksrecht kwijt; bij een gekocht toestel blijf je altijd eigenaar.',
        },
        {
          tekst: 'Leasen is altijd voordeliger dan kopen, omdat je nooit de volledige nieuwprijs betaalt.',
          correct: false,
          uitleg:
            'Onjuist: over de gehele looptijd bekeken is leasen vaak juist duurder dan contant kopen, omdat de aanbieder rente- en risicokosten in de maandprijs verwerkt.',
        },
        {
          tekst: 'Bij lease ben je vanaf de eerste betaling al volledig eigenaar van het toestel.',
          correct: false,
          uitleg:
            'Onjuist: bij lease blijft de aanbieder (of leasemaatschappij) in de regel eigenaar; jij betaalt voor het gebruiksrecht, niet voor eigendom.',
        },
      ],
    },
    {
      id: 2,
      vraag:
        "Waarom investeren streamingdiensten zoveel geld en moeite in het werven van nieuwe abonnees én het voorkomen dat bestaande abonnees opzeggen?",
      opties: [
        {
          tekst:
            "Omdat hun verdienmodel draait op terugkerende kasstromen: voorspelbare, maandelijkse inkomsten van een zo groot en stabiel mogelijke groep abonnees.",
          correct: true,
          uitleg:
            'Juist: recurring revenue is precies waarom het aantal actieve, betalende abonnees (en het zo laag mogelijk houden van opzeggingen, oftewel "churn") het belangrijkste financiële kompas van deze bedrijven is.',
        },
        {
          tekst: 'Omdat de wet hen verplicht een minimumaantal abonnees te hebben.',
          correct: false,
          uitleg:
            'Onjuist: er bestaat geen wettelijke verplichting voor een minimumaantal abonnees. Dit is een puur bedrijfseconomische keuze, gedreven door het verdienmodel.',
        },
        {
          tekst: 'Omdat meer abonnees automatisch een hogere kwaliteit series en films oplevert.',
          correct: false,
          uitleg:
            'Onjuist: het aantal abonnees zegt niets rechtstreeks over de kwaliteit van de contentbibliotheek. Meer abonnees betekent vooral meer voorspelbare, terugkerende omzet.',
        },
        {
          tekst: 'Omdat opzeggende klanten hun account daarna nooit meer opnieuw kunnen aanmaken.',
          correct: false,
          uitleg:
            'Onjuist: bij vrijwel alle streamingdiensten kun je na opzeggen gewoon later weer een nieuw abonnement afsluiten. Dat is niet de reden waarom bedrijven opzeggingen willen voorkomen.',
        },
      ],
    },
    {
      id: 3,
      vraag:
        "Wat maakt abonnementen, in tegenstelling tot losse aankopen, tot een risico voor je maandbudget, ook als je een dienst nauwelijks gebruikt?",
      opties: [
        {
          tekst: 'Abonnementen zijn per definitie duurder dan losse aankopen van hetzelfde product.',
          correct: false,
          uitleg:
            'Onjuist: een abonnement kan op korte termijn juist goedkoper zijn dan losse aankopen. Het probleem zit niet in de prijs per keer, maar in het structurele, doorlopende karakter van de kosten.',
        },
        {
          tekst:
            "Abonnementen vallen onder je vaste lasten: ze blijven doorlopen ongeacht je gebruik, terwijl een losse aankoop een eenmalige, bewuste keuze is.",
          correct: true,
          uitleg:
            'Juist: dit is precies het kenmerk van vaste lasten — ze zijn grotendeels losgekoppeld van je daadwerkelijke gebruik en verkleinen structureel je vrije budget, maand na maand.',
        },
        {
          tekst: 'Omdat abonnementen wettelijk nooit opgezegd mogen worden.',
          correct: false,
          uitleg:
            'Onjuist: in de meeste gevallen mag je een abonnement gewoon opzeggen (vaak wel met een opzegtermijn). Het risico zit niet in een opzegverbod, maar in het feit dat opzeggen actie van jou vereist.',
        },
        {
          tekst: 'Omdat streamingdiensten verplicht zijn om jaarlijks hun prijzen te verhogen.',
          correct: false,
          uitleg:
            'Onjuist: er is geen wettelijke verplichting tot jaarlijkse prijsverhogingen. Prijsverhogingen zijn een losse, aparte bedrijfskeuze en niet de reden waarom abonnementen als vaste last worden gezien.',
        },
      ],
    },
    {
      id: 4,
      vraag:
        "Een dienst adverteert met 'slechts €9,99 per maand' in plaats van '€119,88 per jaar', terwijl het om precies hetzelfde bedrag gaat. Welk begrip past hier het beste bij?",
      opties: [
        {
          tekst:
            "De psychologische valkuil van kleine maandelijkse bedragen, omdat mensen een klein, herhaald bedrag milder beoordelen dan hetzelfde totaal in één keer.",
          correct: true,
          uitleg:
            'Juist: dit is exact het mechanisme achter deze prijsweergave. Door in maandbedragen te communiceren, voelt de uitgave kleiner aan dan wanneer het totale jaarbedrag in één keer zou worden getoond.',
        },
        {
          tekst: 'Recurring revenue, omdat het bedrijf hiermee laat zien hoeveel omzet het jaarlijks maakt.',
          correct: false,
          uitleg:
            'Onjuist: recurring revenue beschrijft het verdienmodel van het bedrijf (terugkerende inkomsten), niet de psychologische manier waarop de prijs aan de klant wordt gepresenteerd.',
        },
        {
          tekst: 'Vaste lasten, omdat het bedrag elke maand hetzelfde blijft.',
          correct: false,
          uitleg:
            'Onjuist: vaste lasten beschrijven het gevolg voor jouw budget (een terugkerende kostenpost), niet de manier waarop het bedrijf de prijs psychologisch aantrekkelijk presenteert.',
        },
        {
          tekst: 'Van eigendom naar gebruik, omdat je nooit eigenaar wordt van de dienst.',
          correct: false,
          uitleg:
            'Onjuist: dat begrip gaat over het verschil tussen bezit en toegang tot een dienst, niet over de manier waarop een prijs wordt gepresenteerd om kleiner te lijken.',
        },
      ],
    },
    {
      id: 5,
      vraag:
        "Je hebt vijf abonnementen van elk €9,99 per maand lopen, maar gebruikt er twee van bijna nooit. Wat is de meest verstandige, in dit thema besproken vervolgstap?",
      opties: [
        {
          tekst: 'Niks doen, want €9,99 per maand is toch te weinig om je druk over te maken.',
          correct: false,
          uitleg:
            'Onjuist: precies deze gedachte is de psychologische valkuil die in dit thema wordt besproken. Vijf keer €9,99 per maand telt op tot bijna €50 per maand, oftewel €600 per jaar.',
        },
        {
          tekst:
            'Elk abonnement omrekenen naar een jaarbedrag, een overzicht maken van alle lopende abonnementen en bewust beslissen welke je daadwerkelijk gebruikt.',
          correct: true,
          uitleg:
            'Juist: dit is precies de aanpak die in dit thema wordt aanbevolen om de psychologische valkuil van kleine maandbedragen te doorbreken en grip te krijgen op je vaste lasten.',
        },
        {
          tekst: 'Alle vijf abonnementen meteen opzeggen, ongeacht of je ze gebruikt of niet.',
          correct: false,
          uitleg:
            'Onjuist: dit hoeft niet per se de beste keuze te zijn als je sommige diensten wel degelijk waardevol vindt. Het gaat om een bewuste afweging per abonnement, niet om automatisch alles wegdoen.',
        },
        {
          tekst: 'Een zesde abonnement afsluiten dat belooft je andere abonnementen te beheren.',
          correct: false,
          uitleg:
            'Onjuist: een extra betaald abonnement erbij nemen om je uitgaven aan abonnementen te beheersen, ondermijnt juist het doel van het verminderen van vaste lasten.',
        },
      ],
    },
    {
      id: 6,
      vraag:
        "Wat is het belangrijkste financiële voordeel van recurring revenue voor een bedrijf, vergeleken met alleen eenmalige verkopen?",
      opties: [
        {
          tekst: 'Het bedrijf hoeft nooit meer belasting te betalen over terugkerende inkomsten.',
          correct: false,
          uitleg:
            'Onjuist: belastingregels gelden ongeacht of inkomsten eenmalig of terugkerend zijn. Dit is geen fiscaal voordeel dat samenhangt met een abonnementenmodel.',
        },
        {
          tekst:
            "Terugkerende, voorspelbare inkomsten maken het voor het bedrijf makkelijker om te plannen, te investeren en eventueel geld te lenen op basis van verwachte toekomstige omzet.",
          correct: true,
          uitleg:
            'Juist: voorspelbaarheid van inkomsten is de belangrijkste financiële meerwaarde van recurring revenue, en maakt bedrijven aantrekkelijker voor investeerders en kredietverstrekkers.',
        },
        {
          tekst: 'Het bedrijf hoeft bij een abonnementenmodel nooit meer te adverteren voor nieuwe klanten.',
          correct: false,
          uitleg:
            'Onjuist: bedrijven met een abonnementenmodel blijven juist actief adverteren en werven, omdat groei van het abonneebestand cruciaal blijft voor hun omzet.',
        },
        {
          tekst: 'Klanten met een abonnement kunnen wettelijk niet meer overstappen naar een concurrent.',
          correct: false,
          uitleg:
            'Onjuist: klanten kunnen in principe altijd opzeggen en overstappen naar een concurrent (eventueel met een opzegtermijn). Dat is geen wettelijke beperking.',
        },
      ],
    },
  ],
}

export default thema3Data
