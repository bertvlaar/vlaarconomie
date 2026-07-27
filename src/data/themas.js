// Overzicht van de 10 thema's voor leerjaar 3.
// Let op: dit zijn thema 11 t/m 20 uit "20_Thema_s.docx", maar op de site
// (leerjaar 3, eigen routestructuur) genummerd als thema 1 t/m 10.
//
// - titel: hoofdtitel van het thema
// - subtitel: het economische hoofdthema tussen haakjes in het document
// - context: de 'aansprekende context' uit het document (herkenbare aanleiding voor leerlingen)
// - koppeling: de 'economische koppeling' (leerstofbegrippen die aan bod komen)

const themas = [
  {
    id: 1,
    slug: 'thema-1',
    titel: 'Scams, Crypto-bros & Get-Rich-Quick',
    subtitel: 'Financiële geletterdheid & Oplichting',
    context:
      "TikTok en Instagram staan vol met 'gurus' die beloven dat je rijk wordt met crypto, dropshipping of online casino's. Waarom is dit vaak te mooi om waar te zijn en hoe vallen tieners massaal voor online fraude?",
    koppeling:
      'Risico en rendement, piramidespelen/Ponzi-fraude, informatie-asymmetrie (de verkoper weet meer dan jij) en financiële zelfbescherming.',
  },
  {
    id: 2,
    slug: 'thema-2',
    titel: 'Gaming, Skins & In-App Purchases',
    subtitel: 'Consumentengedrag & Prijsmechanismen',
    context:
      "Waarom geven tieners honderden euro's uit aan V-Bucks in Fortnite of zeldzame skins in CS:GO die helemaal niet echt bestaan? En hoe manipuleren gamebouwers je brein om te blijven betalen?",
    koppeling:
      "Virtuele economieën, schaarste in digitale werelden, freemium-verdienmodellen, consumentenpsychologie en 'dark patterns' in marketing.",
  },
  {
    id: 3,
    slug: 'thema-3',
    titel: 'Abonnementenroof: Van Netflix tot HelloFresh',
    subtitel: 'De Abonnementsmaatschappij',
    context:
      "Je hoeft tegenwoordig bijna niks meer te 'bezitten': je least je telefoon, streamt je muziek, huurt je kleding en krijgt maaltijden bezorgd. Waarom stappen bedrijven massaal over op losse abo's en waarom is dat stiekem heel duur voor je portemonnee?",
    koppeling:
      "Van eigendom naar gebruik, terugkerende kasstromen (recurring revenue), vaste lasten en de psychologische valkuil van 'kleine maandelijkse bedragen'.",
  },
  {
    id: 4,
    slug: 'thema-4',
    titel: 'Fast-fashion, Greenwashing & De kledingkast van de toekomst',
    subtitel: 'Bedrijfseconomie & Duurzaamheid',
    context:
      "Merken roepen massaal dat ze 'eco-friendly' en 'duurzaam' zijn, maar is dat ook zo of is het gelogen marketingtaal? (Greenwashing). Hoe weet je of je kleding eerlijk is gemaakt?",
    koppeling:
      'Transparantie in de keten, marketing vs. realiteit, consumentenvertrouwen en de economische waarde van een keurmerk.',
  },
  {
    id: 5,
    slug: 'thema-5',
    titel: 'Influencers, Sponsoring & De aandachtseconomie',
    subtitel: 'Marketing & Verdienmodellen',
    context:
      "Hoe kan een YouTuber in een privévliegtuig stappen door alleen maar 'games te spelen' of 'pranks uit te halen'? Hoe verdienen influencers hun geld en wie betaalt dat eigenlijk indirect?",
    koppeling:
      'De aandachtseconomie als schaars goed, indirecte verdienmodellen (reclame-inkomsten vs. abonneemodellen) en de macht van algoritmes bij doelgroepmarketing.',
  },
  {
    id: 6,
    slug: 'thema-6',
    titel: 'De Winstfabriek: Hoe runt een bedrijf een gezonde zaak?',
    subtitel: 'Bedrijfseconomische kern',
    context:
      'Wat maakt het verschil tussen een bedrijf dat overleeft en een bedrijf dat omvalt? Een directe koppeling naar kosten, opbrengsten, de winst- en verliesrekening en break-evenanalyse, zodat leerlingen echte bedrijfseconomie proeven voor hun pakketkeuze.',
    koppeling:
      'Kosten en opbrengsten, winst- en verliesrekening, break-evenanalyse.',
  },
  {
    id: 7,
    slug: 'thema-7',
    titel: 'Pretparken & Dynamic Pricing: Waarom kost een kaartje soms meer?',
    subtitel: 'Prijsbeleid & Marktvraag',
    context:
      'Waarom betaal je voor een Efteling-ticket in het weekend of op een zonnige zomerdag veel meer dan op een regenachtige dinsdag in november?',
    koppeling:
      'Vraag en aanbod over tijd, prijselasticiteit van de vraag (hoe erg reageert de consument op een prijsverandering?), capaciteitsbenutting en piekbelasting.',
  },
  {
    id: 8,
    slug: 'thema-8',
    titel: 'Tweedehands is het nieuwe nieuw: Vinted & Marktplaats',
    subtitel: 'C2C-handel & Hergebruik',
    context:
      'Waarom verkopen tieners massaal hun oude kleren via Vinted in plaats van het weg te gooien, en hoe werkt deze peer-to-peer (C2C) markt eigenlijk?',
    koppeling:
      'Consument-tot-consumentmarkten, transactiekosten, restwaarde van goederen en de verschuiving naar een hergebruik-economie.',
  },
  {
    id: 9,
    slug: 'thema-9',
    titel: 'Kiezen voor je toekomst: Wat levert studeren op?',
    subtitel: 'Arbeidsmarkt & Menselijk Kapitaal',
    context:
      'Waarom duurt het zo lang voordat je geld verdient als je gaat studeren, en waarom krijg je later (gemiddeld) toch een hoger loon dan iemand die direct gaat werken?',
    koppeling:
      'Investeren in menselijk kapitaal (human capital), kosten-batenanalyse over de levensloop, studiefinanciering (lening vs. gift) en loonverschillen op de arbeidsmarkt.',
  },
  {
    id: 10,
    slug: 'thema-10',
    titel: 'Energie, Gasprijzen & De wereld achter je iPhone',
    subtitel: 'De Grote Wereld-afsluiter',
    context:
      'Waarom schoten de energierekeningen ineens door het dak na een conflict of crisis ergens anders in de wereld, en waarom hebben zonnepanelen op het dak invloed op je portemonnee? Hoe kan het dat onderdelen van jouw smartphone uit wel tien verschillende landen komen voordat hij in de winkel ligt? En waarom worden de ontwerpers in Californië rijk, terwijl de fabrieksarbeiders in China of de mijners in Congo achterblijven?',
    koppeling:
      'Primaire energiebronnen als schaars goed, geopolitieke invloed op prijzen, netwerkkosten, de impact van macro-economische schokken op het huishoudboekje, internationale arbeidsdeling, wereldwijde waardeketens, globalisering en de ongelijke verdeling van toegevoegde waarde over de wereld.',
  },
]

export default themas
