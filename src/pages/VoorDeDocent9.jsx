import React from 'react'
import PageShell from '../components/PageShell.jsx'

const planning = [
  { uur: 'Lesuur 1', inhoud: 'Les 9.1 (menselijk kapitaal) + start Fase 1 project (twee opleidingen kiezen en onderzoeken)' },
  { uur: 'Lesuur 2', inhoud: 'Les 9.1 vervolg: externe effecten van onderwijs; Fase 1 afronden' },
  { uur: 'Lesuur 3', inhoud: 'Les 9.2 (kosten-batenanalyse over de levensloop) + TerugverdientijdSimulator' },
  { uur: 'Lesuur 4', inhoud: 'Les 9.2 vervolg + start Fase 2 project (kosten en baten van beide opleidingen berekenen)' },
  { uur: 'Lesuur 5', inhoud: 'Les 9.3 (studiefinanciering: lening versus gift) + rekenoefeningen rente' },
  { uur: 'Lesuur 6', inhoud: 'Les 9.4 (loonverschillen doorgerekend) + Debathal' },
  { uur: 'Lesuur 7', inhoud: 'Werktijd Fase 3 (standpunt formuleren) + tussentijdse feedback' },
  { uur: 'Lesuur 8', inhoud: 'Eindquiz (diagnostisch) + start Fase 4 (presentatie voorbereiden)' },
  { uur: 'Lesuur 9', inhoud: 'Presentaties Fase 4 + beoordeling met rubric' },
]

const kerndoelen = [
  {
    kd: 'Burgerschap · KD20A: Democratisch handelen (standpunt studiefinanciering & studiekeuze)',
    tekst: 'leerlingen nemen een onderbouwd standpunt in over de vraag of financiële overwegingen zwaarder zouden moeten wegen dan persoonlijke interesse bij studiekeuze, en oefenen dit in de Debathal (les 9.4).',
  },
  {
    kd: 'Burgerschap · KD19A: Basiswaarden van de democratische rechtsstaat (toegankelijkheid van onderwijs)',
    tekst: 'leerlingen redeneren over de rol van studiefinanciering (gift versus lening) bij het toegankelijk houden van vervolgonderwijs voor iedereen (les 9.3).',
  },
  {
    kd: 'Rekenen/Wiskunde · KD10A: Getallen en grootheden (verhoudingen & procenten)',
    tekst: 'leerlingen rekenen met percentages, rente en verhoudingen om totale investeringen, loonpremies en terugverdientijden te berekenen (les 9.2, 9.3, 9.4, extra rekenopdrachten).',
  },
  {
    kd: 'Mens & Maatschappij · KD24A: Arbeidsmarkt en levensloopplanning',
    tekst: 'leerlingen leggen uit hoe menselijk kapitaal, opleidingskeuzes en loonverschillen samenhangen met de eigen levensloopplanning (les 9.1, 9.4, project).',
  },
]

export default function VoorDeDocent9() {
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
          <li>uitleggen wat menselijk kapitaal is, en waarom economen een opleiding vergelijken met een investering;</li>
          <li>de kosten (directe kosten en gederfde inkomsten) en baten van een studie over de hele levensloop tegen elkaar afwegen;</li>
          <li>het verschil uitleggen tussen studiefinanciering als gift en als lening, en rekenen met rente op een studieschuld;</li>
          <li>een compleet kosten-batenscenario van een studiekeuze doorrekenen, inclusief loonpremie en terugverdientijd;</li>
          <li>rekenen met percentages, rente en verhoudingen binnen studiekeuzes (niveau 2F/3F);</li>
          <li>een onderbouwd standpunt innemen over de vraag of financiële overwegingen altijd zwaarder zouden moeten wegen dan persoonlijke interesse.</li>
        </ul>
      </section>

      <section className="mb-10 rounded-xl border border-red-100 bg-white p-6 lg:p-8">
        <h2 className="mb-4 text-slate-900">Lesplanning (± 5 weken · 9 lesuren)</h2>
        <p className="mb-4 text-sm text-slate-500">
          Les 9.1 t/m 9.4 kunnen ieder in één lesuur, mits de Debathal in Les 9.4 wordt beperkt tot één
          stelling per klas in plaats van beide.
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
          Dit afsluitende arbeidsmarktthema van leerjaar 3 bouwt voort op begrippen uit eerdere thema's
          over kosten, opbrengsten en keuzes onder schaarste, en past ze toe op de eigen, persoonlijke
          levensloopplanning van leerlingen. Les 9.2 herhaalt en verdiept het begrip{' '}
          <strong>opportunitykosten</strong> uit eerdere thema's, nu toegepast op gederfde inkomsten
          tijdens een studie. Is een eerder thema over kosten en opbrengsten nog niet behandeld, dan
          werkt dit thema ook prima op zichzelf; is het al wel behandeld, benut dan vooral de
          vergelijkingsvragen in de oefenbank van les 9.2 om de transfer tussen beide contexten te laten
          maken.
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
          De cijfers in dit thema (collegegeld, gemiddelde startsalarissen en rentepercentages op
          studieleningen) zijn illustratief en gebaseerd op de stand van zaken begin/medio 2026.
          Collegegeld, beursbedragen en rentepercentages van DUO veranderen jaarlijks. Controleer voor de
          les de meest actuele cijfers, bijvoorbeeld via DUO.nl en het CBS, en pas de infoboxen en de
          simulator hierop aan voordat het thema live gaat.
        </p>
      </section>
    </PageShell>
  )
}
