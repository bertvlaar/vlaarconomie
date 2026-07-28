import React from 'react'
import PageShell from '../components/PageShell.jsx'

const planning = [
  { uur: 'Lesuur 1', inhoud: 'Les 5.1 (aandachtseconomie & schaarste) + start Fase 1 project (influencer/platform kiezen en onderzoeken)' },
  { uur: 'Lesuur 2', inhoud: 'Les 5.1 vervolg: opportunitykosten van schermtijd; Fase 1 afronden' },
  { uur: 'Lesuur 3', inhoud: 'Les 5.2 (reclamemodel vs. abonnementsmodel, freemium)' },
  { uur: 'Lesuur 4', inhoud: 'Les 5.3 (algoritmes & doelgroepmarketing, filterbubbels) + start Fase 2 project (berekeningen)' },
  { uur: 'Lesuur 5', inhoud: 'Les 5.3 vervolg: gebruikersdata & privacy-afweging; Fase 2 afronden' },
  { uur: 'Lesuur 6', inhoud: 'Les 5.4 (sponsoring, indirecte kostenoverdracht & #ad-regelgeving) + extra rekenopdrachten' },
  { uur: 'Lesuur 7', inhoud: 'Werktijd Fase 3 (standpunt formuleren) + tussentijdse feedback' },
  { uur: 'Lesuur 8', inhoud: 'Eindquiz (diagnostisch) + start Fase 4 (presentatie voorbereiden)' },
  { uur: 'Lesuur 9', inhoud: 'Presentaties Fase 4 + beoordeling met rubric' },
]

const kerndoelen = [
  {
    kd: 'Burgerschap · KD20A: Democratisch handelen (standpunt transparantie & regelgeving)',
    tekst: "leerlingen nemen een onderbouwd standpunt in over de vraag of huidige #ad-regels voldoende bescherming bieden aan jonge kijkers, en oefenen dit in Fase 3 van het project.",
  },
  {
    kd: 'Burgerschap · KD19A: Basiswaarden van de democratische rechtsstaat (eerlijkheid & transparantie)',
    tekst: 'leerlingen redeneren over eerlijke, herkenbare reclame versus verborgen reclame, en over de verantwoordelijkheid van influencers en platforms hierin (les 5.4).',
  },
  {
    kd: 'Digitale geletterdheid · KD21A/KD22A: Kritisch omgaan met algoritmes en online informatie',
    tekst: 'leerlingen leggen uit hoe algoritmes en doelgroepmarketing werken, en herkennen filterbubbels en gepersonaliseerde reclame in hun eigen mediagebruik (les 5.3).',
  },
  {
    kd: 'Rekenen/Wiskunde · KD10A: Getallen en grootheden (verhoudingen & procenten)',
    tekst: 'leerlingen rekenen met percentages en verhoudingen om CPM, klikratio\'s en marketingkosten te berekenen (les 5.4, extra rekenopdrachten, project).',
  },
]

export default function VoorDeDocent5() {
  return (
    <PageShell tint>
      <div className="mb-8 flex items-center gap-3">
        <span className="rounded-md bg-docent px-3 py-1 text-sm font-bold text-white">Docentenpagina</span>
      </div>
      <h1 className="mb-8 text-slate-900">🧑‍🏫 Voor de docent: leerdoelen, planning &amp; toetsing</h1>

      <section className="mb-10 rounded-xl border border-red-100 bg-white p-6 lg:p-8">
        <h2 className="mb-4 text-slate-900">Leerdoelen</h2>
        <p className="mb-3 text-slate-700">De leerling kan na dit thema:</p>
        <ul className="list-disc space-y-2 pl-5 text-slate-700">
          <li>uitleggen wat de aandachtseconomie is, en waarom aandacht een schaars economisch goed is;</li>
          <li>het reclamemodel en het abonnementsmodel van elkaar onderscheiden, en benoemen wie in elk model "de klant" is;</li>
          <li>uitleggen hoe algoritmes gebruikersdata inzetten voor doelgroepmarketing, en het risico van filterbubbels herkennen;</li>
          <li>uitleggen wat sponsoring en indirecte kostenoverdracht zijn, en waarom transparantie (#ad) wettelijk verplicht is;</li>
          <li>rekenen met CPM, klikratio's, percentages en marketingkosten binnen influencer-marketing (niveau 2F/3F);</li>
          <li>een onderbouwd standpunt innemen over transparantie en regelgeving rond influencer-marketing en algoritmes.</li>
        </ul>
      </section>

      <section className="mb-10 rounded-xl border border-red-100 bg-white p-6 lg:p-8">
        <h2 className="mb-4 text-slate-900">Lesplanning (± 5 weken · 9 lesuren)</h2>
        <p className="mb-4 text-sm text-slate-500">
          Les 5.1 t/m 5.4 kunnen ieder in één lesuur; les 5.3 leent zich goed voor een extra klassikaal
          gesprek over eigen ervaringen met aanbevelingsalgoritmes.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <tbody>
              {planning.map((p) => (
                <tr key={p.uur} className="border-b border-border">
                  <td className="w-40 py-3 pr-4 font-semibold text-docent">{p.uur}</td>
                  <td className="py-3 text-slate-700">{p.inhoud}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mb-10 rounded-xl border border-red-100 bg-white p-6 lg:p-8">
        <h2 className="mb-4 text-slate-900">🔗 Aansluiting bij eerdere en latere thema's</h2>
        <p className="text-slate-700">
          Dit thema bouwt voort op eerdere lessen over schaarste en vraag en aanbod, en past deze
          begrippen toe op een zeer herkenbare, alledaagse context: sociale media en influencers. Les
          5.2 sluit goed aan bij latere bedrijfseconomische thema's over verdienmodellen en
          kostenstructuren (bijvoorbeeld thema 6), en les 5.4 bouwt een brug naar consumentenbescherming
          en regelgeving die ook in latere thema's terugkomt. Is een eerder markt- of
          bedrijfseconomie-thema nog niet behandeld, dan werkt dit thema ook prima op zichzelf.
        </p>
      </section>

      <section className="mb-10 rounded-xl border border-red-100 bg-white p-6 lg:p-8">
        <h2 className="mb-4 text-slate-900">Toetsing</h2>
        <p className="text-slate-700">
          De <strong>eindquiz</strong> is diagnostisch (geen cijfer); het <strong>project</strong> telt
          als praktische opdracht/SO via de rubric op de projectpagina. Overweeg een aparte theorietoets
          over de begrippen in de infoboxen, inclusief de begrippenlijst.
        </p>
      </section>

      <section className="mb-10 rounded-xl border border-red-100 bg-white p-6 lg:p-8">
        <h2 className="mb-4 text-slate-900">📎 Aansluiting bij de nieuwe conceptkerndoelen onderbouw</h2>
        <p className="mb-4 text-slate-700">
          Deze module dekt (delen van) de volgende conceptkerndoelen onderbouw voortgezet onderwijs
          (SLO, i.o.v. het ministerie van OCW; Kerndoelen voortgezet onderwijs, derde druk, april 2026).
          De kerndoelnummers volgen de doorlopende landelijke nummering per leergebied (o.a. Nederlands
          KD1&ndash;9, Rekenen/Wiskunde KD10&ndash;17, Burgerschap KD18&ndash;20, Digitale geletterdheid
          KD21&ndash;23, Mens &amp; Maatschappij KD24&ndash;28); hieronder de kerndoelen waar dit thema
          expliciet aan raakt.
        </p>
        <ul className="space-y-3 text-slate-700">
          {kerndoelen.map((k) => (
            <li key={k.kd}>
              <strong>{k.kd}</strong>: {k.tekst}
            </li>
          ))}
        </ul>
      </section>

      <section className="rounded-xl border border-red-100 bg-white p-6 lg:p-8">
        <h2 className="mb-4 text-slate-900">📌 Actualiteit</h2>
        <p className="text-slate-700">
          De cijfers in dit thema (advertentietarieven, CPM's, commissiepercentages en voorbeeldregels
          rond #ad) zijn illustratief en gebaseerd op de stand van zaken begin/medio 2026. Regelgeving
          rond influencer-marketing en de werking van aanbevelingsalgoritmes veranderen regelmatig.
          Controleer voor de les de meest actuele richtlijnen, bijvoorbeeld via de Reclame Code
          Commissie, en pas de infoboxen hierop aan voordat het thema live gaat.
        </p>
      </section>
    </PageShell>
  )
}
