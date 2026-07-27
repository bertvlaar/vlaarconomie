// src/data/thema5Data.js
//
// Thema 5 — Influencers, Sponsoring & De aandachtseconomie
// Marketing & Verdienmodellen
//
// Alle content in dit bestand hoort bij thema.slug === 'thema-5' uit data/themas.js.
// Structuur:
//   - titel, beschrijving
//   - paragrafen: 4 uitlegsecties (aandacht als schaars goed, indirecte
//     verdienmodellen, de macht van algoritmes, wie er indirect voor betaalt)
//   - begrippen: kernbegrippen met definitie + herkenbaar voorbeeld
//   - oefenvragen: meerkeuzevragen met per optie een uitleg (juist/onjuist)

const thema5Data = {
  titel: 'Influencers, Sponsoring & De aandachtseconomie',
  beschrijving:
    "Een YouTuber die 'gewoon wat games speelt' verdient soms meer dan een chirurg. Dat klinkt gek, tot je beseft dat hij niet in games handelt, maar in iets veel schaarsers: jouw aandacht. Dit thema laat zien hoe de aandachtseconomie werkt, hoe influencers indirect worden betaald door adverteerders in plaats van door jou, en hoe algoritmes precies berekenen welke video, welke advertentie en welke influencer het best bij jou past — zonder dat jij daar ooit expliciet toestemming voor hebt gegeven.",

  paragrafen: [
    {
      id: 'aandachtseconomie',
      titel: '1. De aandachtseconomie: waarom jouw tijd het echte product is',
      inhoud: [
        "In de aandachtseconomie is niet geld of een fysiek product het schaarse goed, maar menselijke aandacht. Jij hebt maar 24 uur per dag, en elk platform, elke app en elke influencer strijdt om zoveel mogelijk van die uren voor zichzelf op te eisen. Hoe langer jij kijkt, scrolt of luistert, hoe meer waarde een platform of maker kan genereren — ook al betaal jij zelf niets voor de video.",
        "Economisch gezien is aandacht een schaars goed: er is een vaste, beperkte hoeveelheid beschikbaar (namelijk de wakkere uren van miljarden mensen), terwijl de vraag ernaar (van adverteerders, platforms en makers) vrijwel onbeperkt is. Zoals bij elk schaars goed ontstaat er dus concurrentie, en die concurrentie drijft de prijs op — niet in euro's die jij betaalt, maar in advertentie-euro's die bedrijven bereid zijn te betalen om die aandacht te kopen.",
        "Dit verklaart ook waarom content steeds pakkender, sneller en extremer wordt: hoe beter een video erin slaagt jouw aandacht vast te houden, hoe waardevoller die video wordt voor het platform en de maker — ongeacht of de inhoud jou ook daadwerkelijk iets oplevert.",
      ],
    },
    {
      id: 'indirecte-verdienmodellen',
      titel: '2. Wie betaalt de influencer eigenlijk? Reclame versus abonnementen',
      inhoud: [
        "De meeste influencers verdienen niet rechtstreeks aan jou als kijker, maar via indirecte verdienmodellen. Bij het reclamemodel betalen adverteerders het platform (en via het platform vaak ook de maker) per keer dat een advertentie wordt getoond of aangeklikt. Jij betaalt dus niet met geld, maar met je aandacht en je kijkgedrag, die vervolgens aan adverteerders wordt 'doorverkocht'.",
        "Daarnaast bestaan er directere betaalmodellen, zoals abonnementen (bijvoorbeeld een betaald lidmaatschap op een platform) waarbij fans rechtstreeks een vaste bijdrage betalen aan hun favoriete maker, zonder tussenkomst van adverteerders. Het belangrijkste economische verschil: bij reclame-inkomsten is de adverteerder de eigenlijke klant, en ben jij als kijker het 'product' dat wordt verkocht; bij een abonnementsmodel ben jij zelf de klant.",
        "Veel influencers combineren beide modellen: reclame-inkomsten van het platform zelf (bijvoorbeeld advertenties vóór een video), aparte betaalde samenwerkingen met merken (sponsoring), én een eigen abonneemodel voor exclusieve content. Elke inkomstenstroom heeft een andere 'klant' en dus een ander economisch belang.",
      ],
    },
    {
      id: 'algoritmes-en-doelgroepmarketing',
      titel: '3. De macht van algoritmes bij doelgroepmarketing',
      inhoud: [
        "Een algoritme is een set regels waarmee een platform automatisch bepaalt welke content, advertenties en aanbevelingen aan jou worden getoond. Deze algoritmes worden getraind op enorme hoeveelheden data over jouw gedrag: waar je op klikt, hoelang je kijkt, wanneer je scrolt en zelfs wanneer je juist stopt met kijken.",
        "Voor adverteerders is dit goud waard: in plaats van een advertentie breed aan iedereen te tonen (zoals vroeger op televisie), kan doelgroepmarketing via algoritmes een advertentie precies tonen aan de mensen die er statistisch gezien het meest gevoelig voor zijn. Dit maakt reclame veel efficiënter — en dus duurder per bereikte, relevante kijker — dan ongerichte advertenties.",
        "De keerzijde is dat dit systeem ook bepaalt welke influencers zichtbaar worden: een algoritme beloont content die mensen lang laat kijken of reageren, wat er in de praktijk toe leidt dat extreme, schokkende of aspirational content ('kijk naar mijn privévliegtuig') vaker wordt aanbevolen dan bijvoorbeeld genuanceerde of saaie, maar informatieve content.",
      ],
    },
    {
      id: 'wie-betaalt-indirect',
      titel: '4. Wie betaalt er eigenlijk voor die gratis video?',
      inhoud: [
        "De privéjet, de designerkleding en de peperdure horloges die je bij sommige influencers voorbij ziet komen, worden meestal niet rechtstreeks door jouw portemonnee betaald — maar dat betekent niet dat niemand ervoor betaalt. Adverteerders betalen voor de zichtbaarheid die een influencer hun bezorgt, en die kosten worden uiteindelijk grotendeels doorberekend in de verkoopprijs van de producten die zij verkopen.",
        "Met andere woorden: als jij een product koopt dat via een influencer wordt aangeprezen, betaal je als consument indirect mee aan de marketingkosten van dat product — inclusief het bedrag dat naar de influencer ging. Dit noemen economen wel een indirecte kostenoverdracht: de kosten van marketing verdwijnen niet, ze worden alleen verplaatst naar de prijs die uiteindelijk aan de consument wordt gevraagd.",
        "Dat maakt kritisch kijken belangrijk: een influencer die 'gewoon zijn mening geeft' over een product, kan tegelijkertijd (soms zonder duidelijke #ad-vermelding) betaald worden om dat product te promoten. Weten wie waarvoor betaalt, helpt je onderscheiden of je naar een eerlijke aanbeveling kijkt, of naar reclame die zich voordoet als persoonlijk advies.",
      ],
    },
  ],

  begrippen: [
    {
      term: 'De aandachtseconomie',
      definitie:
        'Een economisch systeem waarin menselijke aandacht (in plaats van geld of fysieke goederen) het schaarse goed is waar platforms, makers en adverteerders om concurreren, omdat de beschikbare tijd en aandacht van mensen beperkt is.',
      voorbeeld:
        'Twee video\u2019s die tegelijk om jouw aandacht strijden op je startpagina: alleen degene die jou het langst weet te boeien, verdient er daadwerkelijk aan.',
    },
    {
      term: 'Indirecte verdienmodellen (reclame vs. abonnementen)',
      definitie:
        'Verdienmodellen waarbij een maker of platform niet rechtstreeks door de kijker wordt betaald, maar door een derde partij (zoals een adverteerder) die betaalt voor toegang tot het bereik en de aandacht van die kijker; dit in tegenstelling tot een abonnementsmodel, waarbij de kijker zelf rechtstreeks betaalt.',
      voorbeeld:
        'Een gratis YouTube-video die wordt gefinancierd door advertenties vóór en tijdens de video, versus een betaald lidmaatschap zonder advertenties.',
    },
    {
      term: 'Algoritmes en doelgroepmarketing',
      definitie:
        'Geautomatiseerde systemen die op basis van gebruikersdata bepalen welke content en advertenties aan een specifieke gebruiker worden getoond, waardoor marketing veel gerichter (en voor adverteerders waardevoller) wordt dan ongerichte reclame.',
      voorbeeld:
        'Een advertentie voor sportschoenen die precies verschijnt bij mensen die recent filmpjes over hardlopen hebben bekeken.',
    },
    {
      term: 'Sponsoring en indirecte kostenoverdracht',
      definitie:
        'Een betaalde samenwerking waarbij een merk een influencer betaalt om een product te promoten, waarbij de kosten van deze marketing uiteindelijk grotendeels worden doorberekend in de verkoopprijs die de consument voor het product betaalt.',
      voorbeeld:
        'Een influencer die betaald wordt om een energiedrankje te promoten; die marketingkosten zitten indirect verwerkt in de prijs die jij voor het blikje betaalt.',
    },
  ],

  oefenvragen: [
    {
      id: 1,
      vraag:
        "Een YouTuber verdient miljoenen met video's waarin hij 'gewoon games speelt', zonder dat kijkers hem rechtstreeks betalen. Hoe kan dit economisch gezien?",
      opties: [
        {
          tekst: 'Omdat gamen an sich een product is dat automatisch geld oplevert voor wie ernaar kijkt.',
          correct: false,
          uitleg:
            'Onjuist: het spelen van games levert op zichzelf geen geld op. De inkomsten ontstaan doordat de aandacht van kijkers wordt "verkocht" aan adverteerders, niet door het gamen zelf.',
        },
        {
          tekst:
            "Omdat hij handelt in aandacht: hoe meer kijktijd hij genereert, hoe meer waarde hij kan bieden aan adverteerders die daarvoor betalen.",
          correct: true,
          uitleg:
            'Juist: dit is de kern van de aandachtseconomie. De YouTuber verdient niet aan de video zelf, maar aan de aandacht die hij weet vast te houden, die vervolgens waardevol is voor adverteerders.',
        },
        {
          tekst: 'Omdat elk platform verplicht is een vast bedrag per view uit te keren, ongeacht adverteerders.',
          correct: false,
          uitleg:
            'Onjuist: uitkeringen aan makers zijn direct afhankelijk van advertentie-inkomsten die het platform binnenkrijgt; er is geen vast, van reclame losstaand bedrag.',
        },
        {
          tekst: 'Omdat kijkers indirect belasting betalen die naar de maker van de video gaat.',
          correct: false,
          uitleg:
            'Onjuist: er bestaat geen belastingconstructie die kijkgeld doorsluist naar videomakers. De inkomsten komen van adverteerders, niet van een belastingsysteem.',
        },
      ],
    },
    {
      id: 2,
      vraag:
        "Waarom wordt aandacht in de economie beschouwd als een 'schaars goed', terwijl er dagelijks miljarden video's worden bekeken?",
      opties: [
        {
          tekst: 'Omdat er wereldwijd te weinig internetverbindingen zijn om video te kijken.',
          correct: false,
          uitleg:
            'Onjuist: internetinfrastructuur is niet de reden waarom aandacht schaars wordt genoemd. Het gaat om de beperkte tijd die mensen ter beschikking hebben, niet om technische beperkingen.',
        },
        {
          tekst:
            "Omdat de tijd en aandacht van mensen fysiek beperkt zijn (iedereen heeft maar 24 uur per dag), terwijl de vraag naar die aandacht van makers en adverteerders vrijwel onbeperkt is.",
          correct: true,
          uitleg:
            "Juist: schaarste ontstaat wanneer een beperkt aanbod (jouw beschikbare tijd) tegenover een veel grotere vraag staat (alle makers en adverteerders die om die tijd concurreren). Dat is precies het geval bij aandacht.",
        },
        {
          tekst: 'Omdat er wettelijk een maximumaantal uren per dag mag worden gekeken naar video\u2019s.',
          correct: false,
          uitleg:
            'Onjuist: er bestaat geen wettelijke kijktijdlimiet die deze schaarste veroorzaakt. De schaarste komt voort uit de natuurlijke, biologische beperking van 24 uur per dag per persoon.',
        },
        {
          tekst: 'Omdat er wereldwijd te weinig videomakers zijn om aan de vraag te voldoen.',
          correct: false,
          uitleg:
            'Onjuist: er is juist een overvloed aan content en makers; het schaarse element is niet het aanbod van video\u2019s, maar de beperkte aandacht van kijkers om al die content te bekijken.',
        },
      ],
    },
    {
      id: 3,
      vraag:
        "Wat is het belangrijkste economische verschil tussen een gratis, reclamegefinancierde video en een video achter een betaald abonnement?",
      opties: [
        {
          tekst: "Bij een gratis video is de kijker de klant; bij een abonnement is de adverteerder de klant.",
          correct: false,
          uitleg:
            "Onjuist: dit is precies andersom. Bij een gratis, reclamegefinancierde video is de adverteerder de eigenlijke klant en de kijker het 'product' dat wordt verkocht; bij een abonnement is de kijker zelf de klant.",
        },
        {
          tekst:
            "Bij een gratis video betaalt de adverteerder voor toegang tot jouw aandacht, terwijl je bij een abonnement zelf rechtstreeks betaalt zonder tussenkomst van een adverteerder.",
          correct: true,
          uitleg:
            'Juist: dit is het kernverschil tussen indirecte (reclame) en directe (abonnement) verdienmodellen. Bij reclame ben jij het "product" dat aan adverteerders wordt verkocht; bij een abonnement koop jij rechtstreeks toegang.',
        },
        {
          tekst: 'Een abonnementsvideo bevat wettelijk nooit enige vorm van sponsoring.',
          correct: false,
          uitleg:
            'Onjuist: ook binnen een betaald abonnement kan een maker nog steeds losse, betaalde samenwerkingen met merken hebben. Het is geen wettelijke garantie tegen sponsoring.',
        },
        {
          tekst: 'Bij een gratis video is de kwaliteit altijd lager dan bij een betaald abonnement.',
          correct: false,
          uitleg:
            'Onjuist: de kwaliteit van content hangt niet automatisch samen met het verdienmodel. Er bestaat zowel goede als slechte content binnen beide modellen.',
        },
      ],
    },
    {
      id: 4,
      vraag:
        "Een advertentie voor hardloopschoenen verschijnt precies bij jou, kort nadat je video's over hardlopen hebt bekeken. Welk begrip verklaart dit het beste?",
      opties: [
        {
          tekst: 'Indirecte verdienmodellen, omdat de advertentie een reclame-inkomstenbron is voor het platform.',
          correct: false,
          uitleg:
            'Onjuist: dat een advertentie inkomsten oplevert, verklaart niet waaróm juist deze advertentie aan jou wordt getoond. Dat is het gevolg van gerichte, data-gedreven targeting.',
        },
        {
          tekst:
            "Algoritmes en doelgroepmarketing, omdat platforms op basis van jouw kijkgedrag automatisch bepalen welke advertentie voor jou het meest relevant is.",
          correct: true,
          uitleg:
            'Juist: dit is precies wat doelgroepmarketing via algoritmes doet — jouw eerdere gedrag (video\u2019s over hardlopen) gebruiken om te voorspellen welke advertentie het meest waarschijnlijk relevant voor je is.',
        },
        {
          tekst: 'De aandachtseconomie, omdat schoenenmerken altijd meer aandacht krijgen dan andere merken.',
          correct: false,
          uitleg:
            'Onjuist: de aandachtseconomie beschrijft waarom aandacht waardevol is in het algemeen, maar verklaart niet waarom specifiek dít schoenenmerk aan jou wordt getoond. Dat is het werk van het targeting-algoritme.',
        },
        {
          tekst: 'Sponsoring, omdat het schoenenmerk een influencer heeft betaald om deze advertentie te maken.',
          correct: false,
          uitleg:
            'Onjuist: de vraag gaat over waaróm de advertentie specifiek bij jou verschijnt, niet over wie de advertentie heeft gemaakt of betaald. Dat is een kwestie van gerichte targeting, niet van sponsoring op zich.',
        },
      ],
    },
    {
      id: 5,
      vraag:
        "Een influencer draagt in een video 'toevallig' steeds dezelfde dure kledingmerken, zonder ooit te vermelden dat dit betaalde samenwerkingen zijn. Waarom is dit economisch en maatschappelijk problematisch?",
      opties: [
        {
          tekst: "Omdat kleding dragen in een video sowieso wettelijk verboden is zonder toestemming van het merk.",
          correct: false,
          uitleg:
            'Onjuist: het dragen van kleding in een video is niet het probleem; het probleem is het ontbreken van transparantie over een eventuele betaalde samenwerking.',
        },
        {
          tekst:
            "Omdat kijkers hierdoor mogelijk denken naar een eerlijke, onbetaalde mening te kijken, terwijl het in werkelijkheid (verborgen) reclame kan zijn die zij indirect meebetalen via de productprijs.",
          correct: true,
          uitleg:
            'Juist: zonder transparantie over sponsoring lijkt een aanbeveling oprecht, terwijl het in werkelijkheid betaalde marketing kan zijn — waarvan de kosten indirect weer in de verkoopprijs van het product terechtkomen.',
        },
        {
          tekst: 'Omdat het draagt van kleding in video\u2019s de aandachtseconomie volledig buiten werking stelt.',
          correct: false,
          uitleg:
            'Onjuist: dit heeft geen effect op de werking van de aandachtseconomie als geheel. Het probleem zit in de onduidelijkheid over sponsoring, niet in het bestaan van de aandachtseconomie zelf.',
        },
        {
          tekst: 'Omdat merken hierdoor nooit meer geld verdienen aan hun kledinglijn.',
          correct: false,
          uitleg:
            'Onjuist: merken profiteren juist financieel van dit soort (verborgen) promotie, wat precies is waarom ze ervoor betalen. Het probleem ligt bij het gebrek aan transparantie richting de kijker.',
        },
      ],
    },
    {
      id: 6,
      vraag:
        "Wat wordt bedoeld met 'indirecte kostenoverdracht' in de context van influencer-sponsoring?",
      opties: [
        {
          tekst: 'Dat de overheid de marketingkosten van bedrijven rechtstreeks vergoedt via subsidie.',
          correct: false,
          uitleg:
            'Onjuist: dit gaat niet over overheidssubsidies. Indirecte kostenoverdracht beschrijft hoe marketingkosten via de verkoopprijs bij de consument terechtkomen, niet via een subsidiestroom.',
        },
        {
          tekst:
            "Dat de kosten die een merk betaalt aan een influencer voor promotie, uiteindelijk grotendeels worden doorberekend in de prijs die de consument voor het product betaalt.",
          correct: true,
          uitleg:
            'Juist: dit is precies wat indirecte kostenoverdracht betekent — marketingkosten verdwijnen niet, maar worden verplaatst naar de uiteindelijke verkoopprijs die de consument betaalt.',
        },
        {
          tekst: 'Dat influencers hun inkomsten belastingvrij mogen doorgeven aan hun kijkers.',
          correct: false,
          uitleg:
            'Onjuist: dit gaat niet over belastingregels voor influencers, maar over hoe marketingkosten via de productprijs bij consumenten terechtkomen.',
        },
        {
          tekst: 'Dat kijkers verplicht zijn om zelf ook reclame te maken voor het product dat zij zien.',
          correct: false,
          uitleg:
            'Onjuist: kijkers hebben geen verplichting om zelf reclame te maken. Het begrip gaat over de verplaatsing van marketingkosten naar de verkoopprijs, niet over een verplichting voor kijkers.',
        },
      ],
    },
  ],
}

export default thema5Data
