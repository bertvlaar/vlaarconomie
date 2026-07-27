// src/data/thema7Data.js
//
// Thema 7 — Pretparken & Dynamic Pricing: Waarom kost een kaartje soms meer?
// Prijsbeleid & Marktvraag
//
// Alle content in dit bestand hoort bij thema.slug === 'thema-7' uit data/themas.js.
// Structuur:
//   - titel, beschrijving
//   - paragrafen: 4 uitlegsecties (vraag en aanbod over tijd, prijselasticiteit
//     van de vraag, capaciteitsbenutting en piekbelasting, en een doorgerekend
//     dynamic-pricing praktijkvoorbeeld)
//   - begrippen: kernbegrippen met definitie + herkenbaar voorbeeld
//   - oefenvragen: meerkeuzevragen (deels rekenkundig) met per optie een uitleg
//
// Doorlopend voorbeeld in dit thema: pretpark "Fantasialand".
// Maximale capaciteit: 20.000 bezoekers per dag.
// Vaste (niet-dynamische) toegangsprijs: € 40 per kaartje.
// Op een populaire zonnige zaterdag zou de vraag bij € 40 oplopen tot 25.000
// bezoekers — 5.000 méér dan het park aankan. Door de prijs te verhogen naar
// € 50 (+25%) daalt de vraag naar precies 20.000 bezoekers (−20% t.o.v. 25.000).
// Prijselasticiteit van de vraag: −20% ÷ 25% = −0,8 (inelastisch: de vraag
// daalt relatief minder hard dan de prijs stijgt).

const thema7Data = {
  titel: 'Pretparken & Dynamic Pricing: Waarom kost een kaartje soms meer?',
  beschrijving:
    "Een dagje Efteling kost in de zomervakantie op een zonnige zaterdag zomaar het dubbele van een regenachtige dinsdag in november. Toeval is dat niet: pretparken gebruiken dynamic pricing om vraag en aanbod slim op elkaar af te stemmen. In dit thema ontdek je waarom de vraag naar attractieparken voortdurend verandert, hoe je met prijselasticiteit meet hoe gevoelig bezoekers zijn voor prijsveranderingen, en hoe parken hun (vaste) capaciteit zo goed mogelijk benutten zonder dat het op piekdagen helemaal vastloopt.",

  paragrafen: [
    {
      id: 'vraag-en-aanbod-over-tijd',
      titel: '1. Vraag en aanbod over tijd: waarom de drukte per dag verschilt',
      inhoud: [
        'Bij een pretpark is het aanbod op de korte termijn vrijwel vast: het aantal attracties, personeelsleden en de maximale capaciteit van het park veranderen niet zomaar van dag tot dag. De vraag daarentegen schommelt enorm, afhankelijk van het weer, het seizoen, schoolvakanties en of het weekend is. Op een zonnige zaterdag in de zomervakantie willen veel meer mensen naar binnen dan op een regenachtige dinsdag in november.',
        'Dit verschil tussen een stabiel aanbod en een sterk wisselende vraag is precies waarom pretparken hun prijzen laten meebewegen. Bij een vaste, ongewijzigde prijs zou een park op drukke dagen de vraag ver zien overstijgen wat het aankan, terwijl er op rustige dagen juist onbenutte capaciteit overblijft — lege attracties en personeel dat weinig te doen heeft.',
        'Door de prijs te verhogen op momenten van hoge vraag (en te verlagen op momenten van lage vraag) probeert een park de vraag dichter bij het beschikbare aanbod te brengen: minder impulsieve bezoekers op piekdagen, en juist een prikkel om op rustige dagen te komen.',
      ],
    },
    {
      id: 'prijselasticiteit-van-de-vraag',
      titel: '2. Prijselasticiteit van de vraag: hoe gevoelig zijn bezoekers voor prijs?',
      inhoud: [
        'De prijselasticiteit van de vraag meet hoe sterk de gevraagde hoeveelheid van een product verandert als reactie op een prijsverandering. De formule is: Prijselasticiteit = Procentuele verandering in gevraagde hoeveelheid ÷ Procentuele verandering in prijs. Omdat een prijsstijging normaal gesproken tot een daling in de vraag leidt, is de uitkomst meestal negatief.',
        'Is de uitkomst (in absolute waarde) groter dan 1, dan spreken we van een elastische vraag: de gevraagde hoeveelheid reageert relatief sterk op een prijsverandering. Is de uitkomst kleiner dan 1, dan is de vraag inelastisch: bezoekers blijven relatief trouw komen, ook al stijgt de prijs.',
        'Bij pretparken is de vraag vaak relatief inelastisch voor bezoekers die hun dagje al lang van tevoren hebben gepland (bijvoorbeeld rond een verjaardag of de enige vrije zaterdag in de vakantie): zij komen toch wel, ook bij een hogere prijs. Voor spontane, weersafhankelijke bezoekers is de vraag juist elastischer: zij haken bij een hogere prijs sneller af, of wachten op een goedkopere dag.',
      ],
    },
    {
      id: 'capaciteitsbenutting-en-piekbelasting',
      titel: '3. Capaciteitsbenutting en piekbelasting: waarom "vol" ook een probleem is',
      inhoud: [
        'Capaciteitsbenutting geeft aan hoeveel van de maximale capaciteit van een bedrijf daadwerkelijk wordt gebruikt, meestal uitgedrukt in een percentage: Capaciteitsbenutting = (Aantal bezoekers ÷ Maximale capaciteit) × 100%. Een lage benutting betekent verspilde capaciteit (personeel en attracties die onbenut blijven); een benutting van (bijna) 100% betekent dat een bedrijf tegen zijn grenzen aan loopt.',
        'Piekbelasting ontstaat wanneer de vraag op bepaalde momenten (een zomerse zaterdag, de meivakantie) de beschikbare capaciteit overstijgt of er dicht tegenaan zit. Dit klinkt op het eerste gezicht positief — veel klanten! — maar brengt ook problemen met zich mee: lange wachtrijen, overvolle paden, ontevreden bezoekers en soms zelfs veiligheidsrisico\u2019s.',
        'Voor een pretpark is voortdurende piekbelasting dus niet per se wenselijk: te veel bezoekers op één dag verlaagt de kwaliteit van de ervaring en kan zelfs klanten voor de toekomst afschrikken. Prijsbeleid is daarom niet alleen een manier om extra te verdienen op drukke dagen, maar ook om de piekbelasting binnen beheersbare grenzen te houden.',
      ],
    },
    {
      id: 'dynamic-pricing-praktijkvoorbeeld',
      titel: '4. Dynamic pricing doorgerekend: het voorbeeld van Fantasialand',
      inhoud: [
        'Pretpark "Fantasialand" heeft een maximale capaciteit van 20.000 bezoekers per dag. Bij de vaste prijs van € 40 zou de vraag op een zonnige zomerzaterdag oplopen tot 25.000 bezoekers — 5.000 méér dan het park aankan. Om dit te voorkomen verhoogt het park de prijs op zulke piekdagen naar € 50 per kaartje, een stijging van 25%.',
        'Door deze prijsverhoging daalt de vraag van 25.000 naar precies 20.000 bezoekers: een daling van 5.000 ÷ 25.000 = 20%. De prijselasticiteit van de vraag is dan: −20% ÷ 25% = −0,8. Omdat de absolute waarde (0,8) kleiner is dan 1, is de vraag hier inelastisch: bezoekers laten zich niet evenredig afschrikken door de hogere prijs, maar wel genoeg om precies op de maximale capaciteit uit te komen.',
        'Op de rustige regenachtige dinsdag in november verlaagt Fantasialand de prijs juist naar € 25, om extra bezoekers te trekken en de anders lege capaciteit alsnog te benutten. Zo gebruikt het park dynamic pricing als sturingsinstrument: hoge prijzen op piekmomenten om overbelasting te voorkomen, lage prijzen op rustige momenten om de capaciteitsbenutting te verhogen.',
      ],
    },
  ],

  begrippen: [
    {
      term: 'Vraag en aanbod over tijd',
      definitie:
        'Het verschijnsel dat de vraag naar een product of dienst per moment (dag, seizoen, weersomstandigheden) sterk kan verschillen, terwijl het aanbod (bijvoorbeeld de capaciteit van een pretpark) op de korte termijn grotendeels vaststaat.',
      voorbeeld:
        'Fantasialand heeft elke dag dezelfde maximale capaciteit, maar op een zonnige zaterdag in juli willen veel meer mensen naar binnen dan op een regenachtige dinsdag in november.',
    },
    {
      term: 'Prijselasticiteit van de vraag',
      definitie:
        'Een maatstaf die aangeeft hoe sterk de gevraagde hoeveelheid van een product verandert als reactie op een prijsverandering, berekend als de procentuele verandering in de gevraagde hoeveelheid gedeeld door de procentuele verandering in de prijs.',
      voorbeeld:
        'Stijgt de prijs van een kaartje met 25% en daalt de vraag daardoor met 20%, dan is de prijselasticiteit −20% ÷ 25% = −0,8 (inelastisch).',
    },
    {
      term: 'Capaciteitsbenutting',
      definitie:
        'Het percentage van de maximale capaciteit van een bedrijf dat daadwerkelijk wordt gebruikt, berekend als (aantal bezoekers of klanten ÷ maximale capaciteit) × 100%.',
      voorbeeld:
        'Komen er op een rustige dinsdag 5.000 van de maximaal 20.000 bezoekers, dan is de capaciteitsbenutting die dag (5.000 ÷ 20.000) × 100% = 25%.',
    },
    {
      term: 'Piekbelasting',
      definitie:
        'De situatie waarin de vraag naar een product of dienst op bepaalde momenten de beschikbare capaciteit overstijgt of daar dicht tegenaan zit, met als mogelijke gevolgen lange wachttijden, overvolle voorzieningen en een lagere klanttevredenheid.',
      voorbeeld:
        'In de meivakantie loopt Fantasialand tegen zijn maximale capaciteit aan, met lange wachtrijen bij de populairste attracties als gevolg.',
    },
    {
      term: 'Dynamic pricing',
      definitie:
        'Een prijsstrategie waarbij de verkoopprijs van een product of dienst voortdurend wordt aangepast aan de actuele vraag en beschikbare capaciteit, met als doel de vraag beter te laten aansluiten op het aanbod.',
      voorbeeld:
        'Fantasialand vraagt € 50 per kaartje op een drukke zomerzaterdag, maar slechts € 25 op een rustige dinsdag in november, om de bezoekersstroom over de dagen te spreiden.',
    },
  ],

  oefenvragen: [
    {
      id: 1,
      vraag:
        'Waarom past pretpark "Fantasialand" zijn prijzen aan tussen een zonnige zaterdag en een regenachtige dinsdag, in plaats van elke dag dezelfde prijs te vragen?',
      opties: [
        {
          tekst: 'Omdat de aanbieder daarmee ontsnapt aan wettelijke regels over vaste prijzen.',
          correct: false,
          uitleg:
            'Onjuist: er bestaat geen wettelijke verplichting om elke dag dezelfde prijs te vragen. Prijsvariatie heeft hier een economische, geen juridische reden.',
        },
        {
          tekst:
            'Omdat het aanbod (de capaciteit) grotendeels vaststaat, terwijl de vraag sterk wisselt per dag, en de prijs helpt om vraag en aanbod dichter bij elkaar te brengen.',
          correct: true,
          uitleg:
            'Juist: capaciteit is op korte termijn vast, maar de vraag schommelt sterk met weer, seizoen en dag van de week. Door de prijs aan te passen, stuurt het park de vraag richting het beschikbare aanbod.',
        },
        {
          tekst: 'Omdat het park op regenachtige dagen extra personeelskosten heeft die moeten worden terugverdiend.',
          correct: false,
          uitleg:
            'Onjuist: op regenachtige, rustige dagen zijn er juist minder bezoekers, waardoor extra personeelskosten niet de reden zijn voor de prijsaanpassing. De prijs wordt dan zelfs verláágd, niet verhoogd.',
        },
        {
          tekst: 'Omdat bezoekers op regenachtige dagen wettelijk recht hebben op korting.',
          correct: false,
          uitleg:
            'Onjuist: er bestaat geen wettelijk recht op korting bij slecht weer. De prijsverlaging is een keuze van het park om de vraag op rustige dagen te stimuleren.',
        },
      ],
    },
    {
      id: 2,
      vraag:
        'De prijs van een dagkaart stijgt van € 40 naar € 50 (+25%). Hierdoor daalt de vraag van 25.000 naar 20.000 bezoekers. Hoe groot is deze daling in de vraag, procentueel?',
      opties: [
        {
          tekst: '5%, want dat is het verschil tussen 25.000 en 20.000 gedeeld door 100.000.',
          correct: false,
          uitleg:
            'Onjuist: de procentuele verandering bereken je door het verschil te delen door de oorspronkelijke hoeveelheid (25.000), niet door een willekeurig ander getal.',
        },
        {
          tekst: '20%, want (25.000 − 20.000) ÷ 25.000 × 100% = 20%.',
          correct: true,
          uitleg:
            'Juist: de daling is 5.000 bezoekers ten opzichte van de oorspronkelijke 25.000, dus 5.000 ÷ 25.000 × 100% = 20%.',
        },
        {
          tekst: '25%, want dat is toevallig gelijk aan het percentage waarmee de prijs is gestegen.',
          correct: false,
          uitleg:
            'Onjuist: de procentuele daling in de vraag hoeft niet gelijk te zijn aan de procentuele prijsstijging. Je moet de daling apart berekenen ten opzichte van de oorspronkelijke vraag van 25.000.',
        },
        {
          tekst: '50%, want de bezoekersaantallen zijn flink gedaald.',
          correct: false,
          uitleg:
            'Onjuist: dit is geen correcte berekening. De juiste formule is (oude vraag − nieuwe vraag) ÷ oude vraag × 100% = (25.000 − 20.000) ÷ 25.000 × 100% = 20%.',
        },
      ],
    },
    {
      id: 3,
      vraag:
        'De prijs stijgt met 25% en de vraag daalt met 20%. Wat is de prijselasticiteit van de vraag, en hoe moet je dit interpreteren?',
      opties: [
        {
          tekst:
            '−0,8; de vraag is inelastisch, want de vraag daalt relatief minder hard dan de prijs stijgt.',
          correct: true,
          uitleg:
            'Juist: Prijselasticiteit = −20% ÷ 25% = −0,8. Omdat de absolute waarde (0,8) kleiner is dan 1, reageert de vraag relatief zwak op de prijsverandering: de vraag is inelastisch.',
        },
        {
          tekst:
            '−1,25; de vraag is elastisch, want de vraag daalt harder dan de prijs stijgt.',
          correct: false,
          uitleg:
            'Onjuist: dit is de omgekeerde berekening (25% ÷ 20%). De juiste formule is procentuele verandering in de vraag gedeeld door procentuele verandering in de prijs: −20% ÷ 25% = −0,8.',
        },
        {
          tekst: '5; omdat je gewoon de twee percentages van elkaar aftrekt (25% − 20%).',
          correct: false,
          uitleg:
            'Onjuist: prijselasticiteit bereken je door te delen, niet door af te trekken. De juiste berekening is −20% ÷ 25% = −0,8.',
        },
        {
          tekst: '−0,8; de vraag is elastisch, omdat er toch 5.000 bezoekers minder komen.',
          correct: false,
          uitleg:
            'Onjuist: de uitkomst −0,8 klopt, maar de interpretatie niet. Omdat |−0,8| kleiner is dan 1, is de vraag juist inelastisch — niet elastisch — ondanks dat er in absolute aantallen wel minder bezoekers komen.',
        },
      ],
    },
    {
      id: 4,
      vraag:
        'Op een rustige dinsdag in november komen 5.000 van de maximaal 20.000 bezoekers naar Fantasialand. Hoe groot is de capaciteitsbenutting die dag?',
      opties: [
        {
          tekst: '5%, want dat is het aantal bezoekers gedeeld door 1.000.',
          correct: false,
          uitleg:
            'Onjuist: capaciteitsbenutting bereken je door het aantal bezoekers te delen door de máximale capaciteit (20.000), niet door 1.000.',
        },
        {
          tekst: '15.000%, want je vermenigvuldigt bezoekers en capaciteit met elkaar.',
          correct: false,
          uitleg:
            'Onjuist: capaciteitsbenutting is geen vermenigvuldiging van bezoekers en capaciteit, maar een verhouding: bezoekers gedeeld door capaciteit, keer 100%.',
        },
        {
          tekst: '25%, want (5.000 ÷ 20.000) × 100% = 25%.',
          correct: true,
          uitleg:
            'Juist: Capaciteitsbenutting = (Aantal bezoekers ÷ Maximale capaciteit) × 100% = (5.000 ÷ 20.000) × 100% = 25%.',
        },
        {
          tekst: '75%, want dat is het percentage van de capaciteit dat leeg blijft.',
          correct: false,
          uitleg:
            'Onjuist: 75% is inderdaad het ongebruikte deel van de capaciteit, maar de vráág was naar de capaciteitsbenutting zelf, en die is 25% — niet het onbenutte deel.',
        },
      ],
    },
    {
      id: 5,
      vraag:
        'Waarom is voortdurende piekbelasting (een park dat structureel tegen zijn maximale capaciteit aanloopt) niet per se goed nieuws voor een pretpark?',
      opties: [
        {
          tekst:
            'Omdat meer bezoekers per definitie minder omzet betekenen voor het park.',
          correct: false,
          uitleg:
            'Onjuist: meer bezoekers betekenen doorgaans juist meer omzet, niet minder. Het probleem bij piekbelasting zit niet in de omzet, maar in de klantervaring en de druk op de capaciteit.',
        },
        {
          tekst:
            'Omdat lange wachtrijen, overvolle paden en een lagere klanttevredenheid bezoekers kunnen afschrikken, ook al is de dag zelf drukbezocht.',
          correct: true,
          uitleg:
            'Juist: bij structurele piekbelasting loopt de kwaliteit van de bezoekerservaring terug (wachtrijen, drukte), wat toekomstige bezoeken kan ontmoedigen — ook al lijkt een volle dag op het eerste gezicht positief.',
        },
        {
          tekst: 'Omdat pretparken wettelijk verplicht zijn om nooit meer dan 50% van hun capaciteit te gebruiken.',
          correct: false,
          uitleg:
            'Onjuist: zo\u2019n wettelijke grens van 50% bestaat niet. Het probleem bij piekbelasting is een economisch/praktisch probleem (drukte, wachttijden), geen wettelijke beperking.',
        },
        {
          tekst: 'Omdat piekbelasting altijd automatisch tot een prijsdaling leidt.',
          correct: false,
          uitleg:
            'Onjuist: bij piekbelasting (hoge vraag t.o.v. capaciteit) verhogen bedrijven juist vaak de prijs, in plaats van deze te verlagen.',
        },
      ],
    },
    {
      id: 6,
      vraag:
        'Welke bewering over dynamic pricing bij pretparken klopt het beste?',
      opties: [
        {
          tekst:
            'Dynamic pricing betekent dat de prijs elke dag willekeurig verandert, zonder enig verband met vraag of capaciteit.',
          correct: false,
          uitleg:
            'Onjuist: dynamic pricing is geen willekeurige prijsverandering, maar juist een bewuste aanpassing van de prijs op basis van de actuele vraag en beschikbare capaciteit.',
        },
        {
          tekst:
            'Dynamic pricing past de prijs aan op basis van de actuele vraag en capaciteit, met als doel vraag en aanbod beter op elkaar af te stemmen.',
          correct: true,
          uitleg:
            'Juist: dit is precies de kern van dynamic pricing — hogere prijzen bij hoge vraag (om piekbelasting te beperken), lagere prijzen bij lage vraag (om capaciteit beter te benutten).',
        },
        {
          tekst:
            'Dynamic pricing wordt alleen toegepast als de vraag perfect elastisch is.',
          correct: false,
          uitleg:
            'Onjuist: dynamic pricing wordt juist toegepast bij zowel elastische als inelastische vraag; de mate van elasticiteit bepaalt hoe sterk een prijsverandering de vraag beïnvloedt, maar is geen voorwaarde om dynamic pricing te kunnen gebruiken.',
        },
        {
          tekst:
            'Dynamic pricing zorgt ervoor dat een pretpark nooit meer met piekbelasting te maken krijgt.',
          correct: false,
          uitleg:
            'Onjuist: dynamic pricing beperkt piekbelasting, maar sluit het niet volledig uit — op extreem populaire dagen kan de vraag ook bij hogere prijzen nog altijd de capaciteit benaderen of overstijgen.',
        },
      ],
    },
  ],
}

export default thema7Data
