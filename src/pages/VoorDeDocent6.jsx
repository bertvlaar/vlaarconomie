import React from 'react'
import PageShell from '../components/PageShell.jsx'

const planning = [
  { uur: 'Lesuur 1', inhoud: 'Les 6.1 (omzet en afzet) + rekenopdrachten + start Fase 1 project (bedrijf kiezen)' },
  { uur: 'Lesuur 2', inhoud: 'Les 6.2 (vaste kosten, variabele kosten, inkoopwaarde van de omzet) + rekenopdrachten' },
  { uur: 'Lesuur 3', inhoud: 'Les 6.3 (resultatenrekening, brutowinst en nettowinst) + WinstSimulator' },
  { uur: 'Lesuur 4', inhoud: 'Les 6.3 vervolg (rekenopdrachten) + start Fase 2 project (resultatenrekening berekenen)' },
  { uur: 'Lesuur 5', inhoud: 'Les 6.4 (nettowinst verbeteren, nettowinstmarge) + Debathal-stellingen' },
  { uur: 'Lesuur 6', inhoud: 'Fase 3 project (verbetervoorstel bedenken en doorrekenen) + tussentijdse feedback' },
  { uur: 'Lesuur 7', inhoud: 'Eindquiz (diagnostisch) + start Fase 4 (presentatie voorbereiden)' },
  { uur: 'Lesuur 8', inhoud: 'Presentaties Fase 4 + beoordeling met rubric' },
]

const kerndoelen = [
  {
    kd: 'Rekenen/Wiskunde · KD10A: Getallen en grootheden (verhoudingen & procenten)',
    tekst: 'leerlingen rekenen met verhoudingen en percentages om omzet, inkoopwaarde, brutowinst, nettowinst en de nettowinstmarge te berekenen (les 6.1 t/m 6.4, extra rekenopdrachten).',
  },
  {
    kd: 'Rekenen/Wiskunde · KD12A: Verhoudingen (rekenen met formules)',
    tekst: 'leerlingen passen de formules Omzet = Verkoopprijs × Afzet, Brutowinst = Omzet − Inkoopwaarde van de omzet en Nettowinst = Brutowinst − Overige kosten correct toe in verschillende situaties (les 6.1 t/m 6.3).',
  },
  {
    kd: 'Burgerschap · KD19A: Basiswaarden van de democratische rechtsstaat (eerlijkheid)',
    tekst: 'leerlingen wegen in de Debathal verschillende belangen (ondernemer, klant, personeel) af bij maatregelen om de nettowinst te verbeteren (les 6.4).',
  },
  {
    kd: 'Mens & Maatschappij · KD26A: Consumeren en produceren (bedrijfsvoering)',
    tekst: 'leerlingen leggen uit hoe een bedrijf omzet, kosten en winst met elkaar in verband brengt via een resultatenrekening, en welke maatregelen een ondernemer kan nemen om de nettowinst te verbeteren (les 6.1 t/m 6.4).',
  },
]

export default function VoorDeDocent6() {
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
          <li>uitleggen wat afzet en omzet zijn, en de omzet van een bedrijf berekenen;</li>
          <li>het verschil uitleggen tussen vaste kosten, variabele kosten en de inkoopwaarde van de omzet, en deze berekenen;</li>
          <li>een eenvoudige resultatenrekening opstellen en hiermee de brutowinst en de nettowinst berekenen;</li>
          <li>rekenen met percentages en verhoudingen binnen kosten- en winstberekeningen (niveau 2F/3F);</li>
          <li>verschillende maatregelen beoordelen waarmee een ondernemer de nettowinst kan verbeteren, en hierover een onderbouwd standpunt innemen.</li>
        </ul>
      </section>

      <section className="mb-10 rounded-xl border border-red-100 bg-white p-6 lg:p-8">
        <h2 className="mb-4 text-slate-900">Lesplanning (± 4 weken · 8 lesuren)</h2>
        <p className="mb-4 text-sm text-slate-500">
          Les 6.1 t/m 6.4 kunnen ieder in één lesuur, mits de WinstSimulator in les 6.3 kort en gericht wordt
          ingezet (bijvoorbeeld twee scenario's per klas in plaats van vrij spelen).
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
        <h2 className="mb-4 text-slate-900">🔗 Aansluiting bij andere thema's</h2>
        <p className="text-slate-700">
          Dit thema vormt de bedrijfseconomische basis voor Thema 7 (Pretparken &amp; Dynamic Pricing), waar
          vaste en variabele kosten, kostprijs en marge terugkomen in de context van prijsstrategieën. Is
          Thema 7 al behandeld, benut dan vooral les 6.2 en 6.3 om de eerder geïntroduceerde begrippen vaste
          en variabele kosten opnieuw te koppelen aan een volledige resultatenrekening. Is Thema 7 nog niet
          behandeld, dan werkt dit thema ook prima op zichzelf als eerste kennismaking met
          bedrijfseconomische kernbegrippen.
        </p>
      </section>

      <section className="mb-10 rounded-xl border border-red-100 bg-white p-6 lg:p-8">
        <h2 className="mb-4 text-slate-900">Toetsing</h2>
        <p className="text-slate-700">
          De <strong>eindquiz</strong> is diagnostisch (geen cijfer); het <strong>project</strong> telt als
          praktische opdracht/SO via de rubric op de projectpagina. Overweeg een aparte theorietoets over de
          begrippen in de infoboxen, inclusief de begrippenlijst, en over de rekenvaardigheden uit les 6.1
          t/m 6.4 (in het bijzonder het opstellen van een volledige resultatenrekening).
        </p>
      </section>

      <section className="mb-10 rounded-xl border border-red-100 bg-white p-6 lg:p-8">
        <h2 className="mb-4 text-slate-900">📎 Aansluiting bij de nieuwe conceptkerndoelen onderbouw</h2>
        <p className="mb-4 text-slate-700">
          Deze module dekt (delen van) de volgende conceptkerndoelen onderbouw voortgezet onderwijs (SLO,
          i.o.v. het ministerie van OCW; Kerndoelen voortgezet onderwijs, derde druk, april 2026). De
          kerndoelnummers volgen de doorlopende landelijke nummering per leergebied (o.a. Nederlands
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
          De cijfers in dit thema (het SoleZone-voorbeeld, verkoopprijzen, inkoopprijzen en vaste kosten)
          zijn illustratief en bedoeld om de rekenmethodes helder te maken. Vervang het praktijkvoorbeeld
          gerust door een winkel of horecazaak uit de eigen omgeving van de klas, of laat leerlingen in het
          project zelf actuele prijzen opzoeken (bijvoorbeeld huurprijzen of inkoopprijzen via een
          groothandelswebsite), zodat de resultatenrekening actueel en herkenbaar blijft.
        </p>
      </section>
    </PageShell>
  )
}
