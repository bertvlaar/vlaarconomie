import React from 'react'
import PageShell from '../components/PageShell.jsx'

const planning = [
  { uur: 'Lesuur 1', inhoud: 'Les 8.1 (C2C-markten & platformeconomie) + start Fase 1 project (platform kiezen en onderzoeken)' },
  { uur: 'Lesuur 2', inhoud: 'Les 8.1 vervolg: transactiekosten en informatie-asymmetrie; Fase 1 afronden' },
  { uur: 'Lesuur 3', inhoud: 'Les 8.2 (fast fashion & circulaire economie) + HergebruikImpactSimulator' },
  { uur: 'Lesuur 4', inhoud: 'Les 8.2 vervolg: rebound-effect; start Fase 2 project (waardebepaling van producten)' },
  { uur: 'Lesuur 5', inhoud: 'Les 8.3 (afschrijving & restwaarde) + TweedehandsWaardeCalculator en rekenoefeningen' },
  { uur: 'Lesuur 6', inhoud: 'Les 8.4 (onderhandelen, verzendkosten & winstmarges) + Debathal' },
  { uur: 'Lesuur 7', inhoud: 'Werktijd Fase 3 (standpunt formuleren) + tussentijdse feedback' },
  { uur: 'Lesuur 8', inhoud: 'Eindquiz (diagnostisch) + start Fase 4 (presentatie voorbereiden)' },
  { uur: 'Lesuur 9', inhoud: 'Presentaties Fase 4 + beoordeling met rubric' },
]

const kerndoelen = [
  {
    kd: 'Burgerschap · KD20A: Democratisch handelen (standpunt duurzaamheid & regelgeving)',
    tekst: 'leerlingen nemen een onderbouwd standpunt in over de duurzaamheidswinst van C2C-handel en over regelgeving rondom belasting en platformverantwoordelijkheid, en oefenen dit in de Debathal (les 8.4).',
  },
  {
    kd: 'Burgerschap · KD19A: Basiswaarden van de democratische rechtsstaat (eerlijkheid & bescherming)',
    tekst: 'leerlingen redeneren over eerlijke verdeling van verantwoordelijkheid tussen platforms, kopers en verkopers bij risico\'s zoals oplichting (les 8.1, 8.4).',
  },
  {
    kd: 'Rekenen/Wiskunde · KD10A: Getallen en grootheden (verhoudingen & procenten)',
    tekst: 'leerlingen rekenen met percentages, verhoudingen en opeenvolgende afschrijvingen om restwaarde en winstmarges te berekenen (les 8.3, 8.4, extra rekenopdrachten).',
  },
  {
    kd: 'Mens & Maatschappij · KD24A: Duurzaamheid en verantwoord consumentengedrag',
    tekst: 'leerlingen leggen uit hoe circulaire economie, fast fashion en het rebound-effect samenhangen met verantwoord consumentengedrag (les 8.2, project).',
  },
]

export default function VoorDeDocent8() {
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
          <li>uitleggen wat een C2C-markt is, en hoe deze verschilt van een gewone winkel (B2C);</li>
          <li>transactiekosten en het risico van informatie-asymmetrie herkennen bij tweedehandshandel;</li>
          <li>uitleggen wat het verschil is tussen een lineaire en een circulaire economie, en hoe fast fashion en het rebound-effect hierbij een rol spelen;</li>
          <li>afschrijving en restwaarde berekenen en toepassen op eigen of fictieve tweedehands producten;</li>
          <li>rekenen met percentages, verhoudingen en winstmarges binnen tweedehandshandel (niveau 2F/3F);</li>
          <li>een onderbouwd standpunt innemen over veilig, eerlijk en duurzaam handelen op C2C-platforms.</li>
        </ul>
      </section>

      <section className="mb-10 rounded-xl border border-red-100 bg-white p-6 lg:p-8">
        <h2 className="mb-4 text-slate-900">Lesplanning (± 5 weken · 9 lesuren)</h2>
        <p className="mb-4 text-sm text-slate-500">
          Les 8.1 t/m 8.4 kunnen ieder in één lesuur, mits de Debathal in Les 8.4 wordt beperkt tot één
          stelling per klas in plaats van alle drie.
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
        <h2 className="mb-4 text-slate-900">🔗 Aansluiting bij eerdere thema's</h2>
        <p className="text-slate-700">
          Dit thema bouwt voort op begrippen uit eerdere thema's en past ze toe op een herkenbare,
          alledaagse context voor leerlingen. Les 8.1 sluit aan bij eerdere lessen over vraag, aanbod en
          markten, maar dan toegepast op een consument-tot-consumentmarkt in plaats van een gewone
          winkel. Les 8.4 bouwt voort op eerdere lessen over kosten en opbrengsten (bijvoorbeeld thema 6),
          nu toegepast op de kleine, persoonlijke schaal van tweedehandshandel. Is een eerder markt- of
          bedrijfseconomie-thema nog niet behandeld, dan werkt dit thema ook prima op zichzelf; is het al
          wel behandeld, benut dan vooral de vergelijkingsvragen in de oefenbank van les 8.1 en 8.4 om de
          transfer tussen beide contexten te laten maken.
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
          De cijfers in dit thema (platformkosten, gemiddelde kledingprijzen, CO2-kengetallen en
          afschrijvingspercentages) zijn illustratief en gebaseerd op de stand van zaken begin/medio
          2026. Servicekosten van platforms en de precieze milieu-impact van kleding veranderen
          regelmatig. Controleer voor de les de meest actuele cijfers, bijvoorbeeld via de websites van
          Vinted en Marktplaats en publicaties van Milieu Centraal of het CBS, en pas de infoboxen en de
          simulatoren hierop aan voordat het thema live gaat.
        </p>
      </section>
    </PageShell>
  )
}
