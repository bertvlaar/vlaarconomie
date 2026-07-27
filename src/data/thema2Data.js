// src/data/thema2Data.js
//
// Thema 2 — Gaming, Skins & In-App Purchases
// Consumentengedrag & Prijsmechanismen
//
// Alle content in dit bestand hoort bij thema.slug === 'thema-2' uit data/themas.js.
// Structuur:
//   - titel, beschrijving
//   - paragrafen: 4 uitlegsecties (freemium-model, kunstmatige schaarste,
//     dark patterns zoals lootboxes en FOMO)
//   - begrippen: kernbegrippen met definitie + herkenbaar voorbeeld
//   - oefenvragen: meerkeuzevragen met per optie een uitleg (juist/onjuist)

const thema2Data = {
  titel: 'Gaming, Skins & In-App Purchases',
  beschrijving:
    "Een paars zwaard in Fortnite kost je niks om te maken en je wordt er geen millimeter beter van in het spel — en toch betalen miljoenen tieners er honderden euro's voor. Dit thema legt uit hoe gamebedrijven een complete virtuele economie bouwen, hoe ze kunstmatige schaarste creëren voor dingen die met één druk op de knop oneindig te kopiëren zijn, en met welke psychologische trucs ('dark patterns') ze ervoor zorgen dat jij net dat ene setje V-Bucks tóch koopt.",

  paragrafen: [
    {
      id: 'freemium-model',
      titel: '1. Freemium: gratis instappen, duur eruit stappen',
      inhoud: [
        "Fortnite, League of Legends en de meeste mobiele games zijn 'gratis om te spelen' — je betaalt niets om te starten. Dat is het freemium-model: free + premium. Het spel zelf is de lokfunctie; het echte geld wordt verdiend aan een klein percentage spelers dat wél gaat betalen voor extra's zoals skins, battle passes of in-game valuta.",
        "Dit verdienmodel is economisch slim, omdat het de drempel om te beginnen wegneemt: hoe meer mensen gratis spelen, hoe groter de groep potentiële betalers. Uit onderzoek van gameanalisten blijkt keer op keer dat slechts een klein deel van de spelers (vaak enkele procenten, de zogenoemde 'whales') verantwoordelijk is voor het grootste deel van de omzet.",
        "Het addertje onder het gras: omdat de game zelf gratis is, wordt de winst niet gehaald uit de verkoopprijs, maar uit het spelgedrag zelf. Dat betekent dat het bedrijf er financieel belang bij heeft dat jij zo lang en zo vaak mogelijk speelt en op zoveel mogelijk momenten een koopmoment tegenkomt — de game is niet alleen ontworpen om leuk te zijn, maar ook om winstgevend te zijn.",
      ],
    },
    {
      id: 'schaarste-en-virtuele-economie',
      titel: "2. Digitale schaarste: waarom een skin 'zeldzaam' is terwijl hij oneindig kopieerbaar is",
      inhoud: [
        "In de 'echte' economie ontstaat schaarste vaak vanzelf: er is maar een beperkte hoeveelheid goud, land of tijd. Bij een digitale skin is dat compleet anders — een gamebedrijf kan met één druk op de knop letterlijk oneindig veel exemplaren van hetzelfde 'zeldzame' item aanmaken. Schaarste in games is dus vrijwel altijd kunstmatig: bewust door de ontwikkelaar gecreëerd, niet door de natuur opgelegd.",
        "Toch werkt dit, omdat spelers de virtuele economie van een game behandelen als een echte markt: er ontstaan rangordes ('legendary', 'mythic', 'limited edition'), er wordt buiten het spel om verhandeld (bijvoorbeeld CS:GO-skins op marktplaatsen) en spelers ervaren evenveel status- en bezitsgevoel bij een digitaal zwaard als bij een fysiek collector's item.",
        "Door items slechts 'tijdelijk verkrijgbaar' te maken (bijvoorbeeld een skin die na 48 uur nooit meer terugkomt), simuleren ontwikkelaars precies dezelfde schaarste-dynamiek als bij een beperkte oplage sneakers: niet omdat het item moeilijk te maken is, maar omdat kunstmatige schaarste de vraag en dus de betalingsbereidheid opdrijft.",
      ],
    },
    {
      id: 'dark-patterns-lootboxes',
      titel: '3. Lootboxes, FOMO en andere dark patterns',
      inhoud: [
        "Een dark pattern is een bewust ontworpen interface- of spelmechaniek die je gedrag stuurt richting een keuze die vooral in het voordeel is van het bedrijf, niet per se van jou — vaak door gebruik te maken van psychologische zwakke plekken in plaats van eerlijke overtuiging.",
        "De bekendste dark pattern in gaming is de lootbox: een virtueel 'kistje' dat je koopt zonder te weten wat erin zit, met een kleine kans op een zeldzaam item. Dit werkt volgens hetzelfde beloningsmechanisme als een gokautomaat (variabele, onvoorspelbare beloning), wat verklaart waarom sommige landen lootboxes inmiddels als kansspel classificeren en aan strenge regels onderwerpen.",
        "Andere veelvoorkomende dark patterns: kunstmatige tijdsdruk ('deze deal verloopt over 2 uur!'), sociale druk via ranglijsten en cosmetische statussymbolen, het omrekenen van euro's naar een eigen munteenheid (V-Bucks, Robux) zodat de werkelijke prijs minder concreet aanvoelt, en 'gratis' dagelijkse beloningen die je terug de app in lokken op het moment dat je er bijna mee zou stoppen.",
        "Het slimme (en riskante) van deze technieken is dat ze meestal niet liegen — er staat nergens een onwaarheid — maar wél je brein sturen richting een beslissing die je bij helder nadenken misschien niet zou nemen. Dat is precies waarom herkenning van deze patronen zo belangrijk is: je kunt een truc pas weerstaan als je hem hebt leren zien.",
      ],
    },
    {
      id: 'consumentenpsychologie',
      titel: '4. Waarom jouw brein hier gevoelig voor is',
      inhoud: [
        "Consumentenpsychologie bestudeert hoe mensen in de praktijk keuzes maken — vaak minder rationeel dan klassieke economische modellen veronderstellen. Game-ontwikkelaars gebruiken kennis over impulsgedrag, verliesaversie (het gevoel dat een gemiste kans erger voelt dan een gewone aankoop) en sociale vergelijking om aankoopmomenten zo aantrekkelijk mogelijk te maken.",
        "Een concreet voorbeeld: door prijzen weer te geven in V-Bucks in plaats van euro's, wordt het 'pijngevoel' van betalen (in de gedragseconomie 'payment pain' genoemd) kleiner. Je voelt minder weerstand om 1500 V-Bucks uit te geven dan om €11,99 over te maken, ook al is het exact hetzelfde bedrag.",
        "Het goede nieuws: dit gedrag is aan te leren herkennen. Vraag jezelf bij elke in-game aankoop drie dingen af: wat kost dit werkelijk in euro's, waarom voel ik nu tijdsdruk of FOMO, en zou ik dit ook kopen als ik een dag moest wachten? Die simpele denkstap ontneemt dark patterns het grootste deel van hun kracht.",
      ],
    },
  ],

  begrippen: [
    {
      term: 'Virtuele economieën',
      definitie:
        'Een systeem van digitale goederen, valuta, handel en waarde binnen een game of platform, dat qua werking sterk lijkt op een echte economie, maar volledig door de ontwikkelaar wordt gecontroleerd en gemanipuleerd.',
      voorbeeld:
        'De markt voor CS:GO-wapenskins, waar spelers items met echt geld kopen, verkopen en ruilen alsof het verhandelbare goederen zijn.',
    },
    {
      term: 'Schaarste in digitale werelden',
      definitie:
        'Kunstmatig gecreëerde beperking van de beschikbaarheid van een digitaal item (bijvoorbeeld qua tijd of aantal), terwijl het technisch gezien oneindig gekopieerd zou kunnen worden. Deze schaarste bestaat alleen omdat de ontwikkelaar ervoor kiest.',
      voorbeeld:
        "Een 'limited edition' skin die maar 48 uur in de winkel staat, terwijl de code ervoor voor altijd op de servers van het spel blijft staan.",
    },
    {
      term: 'Freemium-verdienmodellen',
      definitie:
        'Een verdienmodel waarbij de basisversie van een product of dienst gratis is, maar geld wordt verdiend aan een klein percentage gebruikers dat betaalt voor extra functies, voordelen of virtuele goederen.',
      voorbeeld:
        'Fortnite is gratis te spelen, maar de ontwikkelaar Epic Games verdient miljarden aan de verkoop van skins en de Battle Pass.',
    },
    {
      term: 'Consumentenpsychologie',
      definitie:
        'De studie van hoe psychologische factoren zoals emotie, gewoonte, sociale druk en verliesaversie het koopgedrag van consumenten beïnvloeden, vaak los van een puur rationele afweging van kosten en baten.',
      voorbeeld:
        "Prijzen tonen in V-Bucks in plaats van euro's, zodat een aankoop minder als 'echt geld uitgeven' aanvoelt.",
    },
    {
      term: 'Dark patterns',
      definitie:
        "Bewust ontworpen interface- of spelmechanieken die gebruikers sturen richting keuzes die vooral in het voordeel zijn van het bedrijf, vaak door psychologische zwakke plekken (zoals FOMO of gokprikkels) uit te buiten.",
      voorbeeld:
        'Een lootbox met onbekende inhoud en een kleine kans op een zeldzaam item, vergelijkbaar met een gokautomaat.',
    },
  ],

  oefenvragen: [
    {
      id: 1,
      vraag:
        "Een game is 'gratis om te spelen', maar verdient miljoenen aan de verkoop van skins en een Battle Pass. Hoe heet dit verdienmodel?",
      opties: [
        {
          tekst: 'Abonnementsmodel, omdat je maandelijks moet betalen om te kunnen spelen.',
          correct: false,
          uitleg:
            'Onjuist: bij een abonnementsmodel moet je structureel betalen om toegang te krijgen. Hier is de game zelf gratis; het verdienmodel zit in optionele extra aankopen.',
        },
        {
          tekst:
            'Freemium, omdat het spel gratis is maar geld wordt verdiend aan optionele, betaalde extra\u2019s.',
          correct: true,
          uitleg:
            'Juist: dit is de kern van freemium — een gratis basisproduct dat winst maakt via een klein deel betalende gebruikers die kiezen voor premium extra\u2019s zoals skins of een Battle Pass.',
        },
        {
          tekst: 'Monopolie, omdat er maar één bedrijf is dat dit spel mag verkopen.',
          correct: false,
          uitleg:
            'Onjuist: een monopolie gaat over marktmacht van één aanbieder in een hele markt, niet over hoe een los product zijn omzet verdient.',
        },
        {
          tekst: 'Ruilhandel, omdat spelers items met elkaar uitwisselen.',
          correct: false,
          uitleg:
            'Onjuist: ruilhandel (goederen tegen goederen zonder geld) is niet het verdienmodel van de ontwikkelaar. Het bedrijf verdient primair aan verkoop tegen geld, niet aan ruil tussen spelers.',
        },
      ],
    },
    {
      id: 2,
      vraag:
        "Een 'legendary' skin kost €15 en is technisch gezien met één druk op de knop oneindig te kopiëren door de gamemaker. Waarom voelt hij toch 'zeldzaam' aan?",
      opties: [
        {
          tekst: 'Omdat de skin echt maar in een beperkt aantal exemplaren bestaat, net als bij goud.',
          correct: false,
          uitleg:
            'Onjuist: digitale bestanden kunnen zonder extra grondstoffen of moeite oneindig worden gekopieerd. Er is geen natuurlijke schaarste zoals bij goud.',
        },
        {
          tekst:
            'Omdat de ontwikkelaar bewust kunstmatige schaarste creëert, bijvoorbeeld door het item maar tijdelijk beschikbaar te maken.',
          correct: true,
          uitleg:
            'Juist: dit is precies wat kunstmatige schaarste in digitale werelden inhoudt — de beperking bestaat alleen omdat de ontwikkelaar dat zo besluit, niet door een technische of natuurlijke grens.',
        },
        {
          tekst: 'Omdat elke speler een uniek exemplaar van het item krijgt dat niemand anders kan hebben.',
          correct: false,
          uitleg:
            'Onjuist: in de meeste games kunnen duizenden spelers exact dezelfde skin bezitten. Uniciteit per speler is hier niet het mechanisme.',
        },
        {
          tekst: 'Omdat de servers van het spel maar een beperkte hoeveelheid opslagruimte hebben voor skins.',
          correct: false,
          uitleg:
            'Onjuist: opslagruimte voor een skin-bestand is verwaarloosbaar klein vergeleken met de rest van een game en is nooit de reden voor "zeldzaamheid" van een item.',
        },
      ],
    },
    {
      id: 3,
      vraag:
        "Een game verkoopt een 'mysterie-kistje' voor €3: je weet vooraf niet wat erin zit, met een kleine kans op een zeldzaam item. Welk begrip past hier het beste bij?",
      opties: [
        {
          tekst: 'Freemium, omdat de kist een optionele extra aankoop is.',
          correct: false,
          uitleg:
            'Onjuist: freemium beschrijft het bredere verdienmodel (gratis spel + betaalde extra\u2019s). De onvoorspelbare, gokachtige beloning van dit specifieke kistje is een dark pattern, namelijk een lootbox.',
        },
        {
          tekst:
            'Een dark pattern (lootbox), omdat de onvoorspelbare beloning werkt volgens hetzelfde principe als een gokautomaat.',
          correct: true,
          uitleg:
            'Juist: een lootbox met onbekende inhoud en een kleine winstkans is het klassieke voorbeeld van een dark pattern dat inspeelt op dezelfde psychologie als kansspelen.',
        },
        {
          tekst: 'Ruilhandel, omdat je met andere spelers kunt ruilen wat je uit de kist krijgt.',
          correct: false,
          uitleg:
            'Onjuist: of je het item achteraf kunt ruilen, is niet waar de vraag over gaat. Het mechanisme van de kist zelf — onbekende inhoud tegen betaling — maakt het een dark pattern.',
        },
        {
          tekst: 'Prijselasticiteit, omdat de vraag naar de kist verandert als de prijs verandert.',
          correct: false,
          uitleg:
            'Onjuist: prijselasticiteit gaat over hoe de gevraagde hoeveelheid reageert op prijsveranderingen. Dat is hier niet het onderwerp; het gaat om het gokachtige beloningsmechanisme.',
        },
      ],
    },
    {
      id: 4,
      vraag:
        "Een winkel in een mobiele game toont prijzen alleen in 'Gems' (1 Gem = ongeveer €0,01) in plaats van in euro's. Welk psychologisch effect wordt hiermee vooral bereikt?",
      opties: [
        {
          tekst: "Het maakt reken-sommen makkelijker voor spelers die net wiskunde hebben geleerd.",
          correct: false,
          uitleg:
            'Onjuist: het omrekenen naar een vreemde munteenheid maakt het juist lastiger, niet makkelijker, om snel te zien hoeveel iets in euro\u2019s kost.',
        },
        {
          tekst:
            "Het verkleint het 'pijngevoel' van het uitgeven van echt geld, waardoor een aankoop minder als een grote uitgave aanvoelt.",
          correct: true,
          uitleg:
            'Juist: dit is een bekende dark pattern uit de consumentenpsychologie. Door in een eigen munteenheid te rekenen, voelt betalen minder als "echt geld uitgeven", ook al verandert de werkelijke prijs niet.',
        },
        {
          tekst: 'Het is verplicht vanuit de wet, omdat games geen directe eurobedragen mogen tonen.',
          correct: false,
          uitleg:
            'Onjuist: er bestaat geen wettelijke verplichting om prijzen in een eigen munteenheid te tonen. Dit is een bewuste keuze van de ontwikkelaar, geen wettelijke regel.',
        },
        {
          tekst: 'Het zorgt ervoor dat de game in elk land dezelfde prijs kan hanteren.',
          correct: false,
          uitleg:
            'Onjuist: prijzen per land kunnen ook prima in lokale valuta worden aangepast zonder een tussenmunt. Het echte doel van een eigen munteenheid is psychologisch, niet technisch.',
        },
      ],
    },
    {
      id: 5,
      vraag:
        "Waarom classificeren sommige landen lootboxes tegenwoordig (deels) als kansspel?",
      opties: [
        {
          tekst: "Omdat lootboxes altijd een negatief saldo op je bankrekening kunnen veroorzaken.",
          correct: false,
          uitleg:
            'Onjuist: een lootbox kost een vooraf vastgesteld bedrag; dat bedrag kan niet vanzelf tot een negatief banksaldo leiden. Dat is niet de reden voor de classificatie als kansspel.',
        },
        {
          tekst:
            'Omdat je betaalt voor een onzekere uitkomst met een kans op een waardevolle beloning, net als bij een gokautomaat.',
          correct: true,
          uitleg:
            'Juist: het kenmerk "betalen voor een onzekere kans op een waardevolle uitkomst" is precies de definitie die kansspelwetgeving gebruikt — daarom worden lootboxes in sommige landen daaronder geschaard.',
        },
        {
          tekst: 'Omdat lootboxes altijd duurder zijn dan het los kopen van hetzelfde item.',
          correct: false,
          uitleg:
            'Onjuist: de prijs-vergelijking met losse verkoop is niet de juridische reden. De classificatie draait om het kansspel-element (onzekere uitkomst tegen betaling), niet om de prijs.',
        },
        {
          tekst: 'Omdat kinderen wettelijk geen enkel spel meer mogen spelen met virtuele valuta.',
          correct: false,
          uitleg:
            'Onjuist: virtuele valuta in games is niet in algemene zin verboden voor minderjarigen. Discussie en regelgeving richten zich specifiek op het gokachtige lootbox-mechanisme.',
        },
      ],
    },
    {
      id: 6,
      vraag:
        "Wat is de beste manier om jezelf te wapenen tegen dark patterns in games, volgens dit hoofdstuk?",
      opties: [
        {
          tekst: 'Nooit meer freemium-games spelen, want elk gratis spel is een scam.',
          correct: false,
          uitleg:
            'Onjuist: freemium is een legaal en veelgebruikt verdienmodel, geen scam op zich. Het probleem zit in specifieke manipulatieve technieken (dark patterns), niet in het freemium-model als geheel.',
        },
        {
          tekst:
            'Voor elke aankoop bewust nagaan wat het item werkelijk in euro\u2019s kost en jezelf afvragen of tijdsdruk of FOMO je beslissing beïnvloedt.',
          correct: true,
          uitleg:
            'Juist: door de werkelijke prijs in euro\u2019s te checken en bewust stil te staan bij kunstmatige tijdsdruk, doorbreek je precies het mechanisme waarop dark patterns leunen — automatisch, impulsief beslissen.',
        },
        {
          tekst: 'Altijd de duurste optie kiezen, want die is meestal het eerlijkst geprijsd.',
          correct: false,
          uitleg:
            'Onjuist: de prijs van een item zegt niets over hoeveel manipulatie erachter zit. Ook dure items kunnen met dark patterns verkocht worden.',
        },
        {
          tekst: 'Alleen kopen als vrienden hetzelfde item ook al hebben gekocht.',
          correct: false,
          uitleg:
            'Onjuist: dit is juist een voorbeeld van de sociale druk waarmee dark patterns werken, en geen bescherming ertegen.',
        },
      ],
    },
  ],
}

export default thema2Data
