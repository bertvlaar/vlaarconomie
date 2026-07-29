// src/data/thema6Data.js
//
// Thema 6 — De Winstfabriek: Hoe runt een bedrijf een gezonde zaak?
// Bedrijfseconomische kern
//
// Dit bestand bevat de algemene thema-informatie (titel, intro, lesoverzicht
// met leerdoelen) en de kerngetallen van het doorlopende praktijkvoorbeeld dat
// in alle vier de lessen en in de WinstSimulator wordt gebruikt: sneakerwinkel
// "SoleZone". De begrippen, oefenbanken, rekenopdrachten en eindquizvragen
// staan (net als bij Thema 8/9/10) in eigen bestanden, gegroepeerd per les:
//   - begrippenThema6.js
//   - oefenbankLes61.js t/m oefenbankLes64.js
//   - rekenLes63.js (rekenoefeningen bij de WinstSimulator in les 6.3)
//   - extraRekenopdrachten6.js
//   - eindquizVragen6.js
//
// Doorlopend voorbeeld: sneakerwinkel "SoleZone".
// Verkoopprijs: € 120 per paar sneakers.
// Inkoopprijs: € 70 per paar sneakers (inkoopwaarde van de omzet per stuk).
// Afzet: 150 paar per maand.
// Vaste kosten: € 3.000 per maand (huur, personeel, verzekering, afschrijving).
//
// Omzet             = 150 × € 120        = € 18.000
// Inkoopwaarde omzet = 150 × € 70        = €  10.500
// Brutowinst         = € 18.000 − € 10.500 = €  7.500
// Nettowinst         = € 7.500 − € 3.000    = €  4.500

const thema6Data = {
  titel: 'De Winstfabriek: Hoe runt een bedrijf een gezonde zaak?',
  subtitel: 'Bedrijfseconomische kern',
  beschrijving:
    'Wat maakt het verschil tussen een bedrijf dat overleeft en een bedrijf dat omvalt? In dit thema kruip je in de huid van de eigenaar van sneakerwinkel "SoleZone" en ontdek je hoe omzet, kosten, brutowinst en nettowinst met elkaar samenhangen. Je leert een resultatenrekening lezen en opstellen, speelt met de cijfers in een interactieve winst-simulator en buigt je aan het einde over de vraag hoe een ondernemer zijn zaak gezonder kan maken.',

  bedrijfsvoorbeeld: {
    naam: 'SoleZone',
    omschrijving: 'een sneakerwinkel in het centrum van de stad',
    verkoopprijs: 120,
    inkoopprijs: 70,
    afzet: 150,
    vasteKosten: 3000,
  },

  lessen: [
    {
      id: 1,
      to: '/thema-6/les-6-1',
      titel: 'Les 6.1',
      ondertitel: 'Omzet en afzet: wat levert verkopen eigenlijk op?',
      leerdoel:
        'Je legt uit wat afzet en omzet zijn, en berekent de omzet van een bedrijf met de formule Omzet = Verkoopprijs × Afzet.',
    },
    {
      id: 2,
      to: '/thema-6/les-6-2',
      titel: 'Les 6.2',
      ondertitel: 'Vaste kosten, variabele kosten en de inkoopwaarde van de omzet',
      leerdoel:
        'Je herkent het verschil tussen vaste kosten, variabele kosten en de inkoopwaarde van de omzet, en berekent deze voor een bedrijf.',
    },
    {
      id: 3,
      to: '/thema-6/les-6-3',
      titel: 'Les 6.3',
      ondertitel: 'De resultatenrekening: brutowinst en nettowinst berekenen',
      leerdoel:
        'Je stelt een eenvoudige resultatenrekening op en berekent hiermee de brutowinst en de nettowinst van een bedrijf.',
    },
    {
      id: 4,
      to: '/thema-6/les-6-4',
      titel: 'Les 6.4',
      ondertitel: 'Een gezonde zaak runnen: hoe verbeter je de nettowinst?',
      leerdoel:
        'Je beoordeelt verschillende maatregelen waarmee een ondernemer de nettowinst kan verbeteren, en onderbouwt welke maatregel jij het verstandigst vindt.',
    },
  ],
}

export default thema6Data
