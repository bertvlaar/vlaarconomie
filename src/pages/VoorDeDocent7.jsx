import React from 'react'
import PageShell from '../components/PageShell.jsx'

const planning = [
  { uur: 'Lesuur 1', inhoud: 'Les 7.1 (vraag en aanbod, evenwichtsprijs) + VraagAanbodSimulator + start Fase 1 project (bedrijf/evenement kiezen)' },
  { uur: 'Lesuur 2', inhoud: 'Les 7.2 (prijselasticiteit van de vraag) + rekenopdrachten elasticiteit' },
  { uur: 'Lesuur 3', inhoud: 'Fase 1 afronden (bronnenonderzoek); start Les 7.3 (dynamic pricing in de praktijk)' },
  { uur: 'Lesuur 4', inhoud: 'Les 7.3 vervolg + DynamicPricingSimulator' },
  { uur: 'Lesuur 5', inhoud: 'Les 7.4 (psychologische prijzen, kostprijs & marge)' },
  { uur: 'Lesuur 6', inhoud: 'Les 7.4 vervolg + start Fase 2 project (analyse vraag, aanbod en huidige prijsstrategie)' },
  { uur: 'Lesuur 7', inhoud: 'Werktijd Fase 3 (eigen prijsstrategie ontwerpen) + tussentijdse feedback' },
  { uur: 'Lesuur 8', inhoud: 'Eindquiz (diagnostisch) + start Fase 4 (presentatie voorbereiden)' },
  { uur: 'Lesuur 9', inhoud: 'Presentaties Fase 4 + beoordeling met rubric' },
]

const kerndoelen = [
  {
    kd: 'Rekenen/Wiskunde · KD10A: Getallen en grootheden (verhoudingen & procenten)',
    tekst: 'leerlingen rekenen met percentages en verhoudingen om procentuele veranderingen, prijselasticiteit, kostprijzen en marges te berekenen (les 7.2, 7.4, extra rekenopdrachten).',
  },
  {
    kd: 'Rekenen/Wiskunde · KD11A: Verbanden (functies en grafieken)',
    tekst: 'leerlingen leggen het verband tussen prijs en gevraagde hoeveelheid, en interpreteren hoe een verandering in de ene grootheid de andere beïnvloedt (les 7.1, 7.2, 7.3).',
  },
  {
    kd: 'Burgerschap · KD19A: Basiswaarden van de democratische rechtsstaat (eerlijkheid)',
    tekst: 'leerlingen nemen een onderbouwd standpunt in over de eerlijkheid van dynamic pricing en surge pricing, bijvoorbeeld in noodsituaties (les 7.3).',
  },
  {
    kd: 'Mens & Maatschappij · KD26A: Consumeren en produceren (markt en prijsvorming)',
    tekst: 'leerlingen leggen uit hoe vraag, aanbod en de evenwichtsprijs tot stand komen, en hoe bedrijven hierop inspelen met prijsstrategieën (les 7.1 t/m 7.4).',
  },
]

export default function VoorDeDocent7() {
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
          <li>uitleggen wat vraag, aanbod en de evenwichtsprijs zijn, en dit toepassen op een markt met een (bijna) vaste capaciteit;</li>
          <li>de prijselasticiteit van de vraag berekenen en beoordelen of de vraag elastisch of inelastisch is;</li>
          <li>uitleggen wat dynamic pricing is, en dit herkennen in verschillende sectoren (pretparken, vliegtickets, hotels, Uber);</li>
          <li>het verschil uitleggen tussen vaste kosten en variabele kosten, en de kostprijs en marge berekenen;</li>
          <li>rekenen met percentages en verhoudingen binnen prijselasticiteit en kostenberekeningen (niveau 2F/3F);</li>
          <li>psychologische prijsstrategieën herkennen en een onderbouwd standpunt innemen over de eerlijkheid daarvan.</li>
        </ul>
      </section>

      <section className="mb-10 rounded-xl border border-red-100 bg-white p-6 lg:p-8">
        <h2 className="mb-4 text-slate-900">Lesplanning (± 5 weken · 9 lesuren)</h2>
        <p className="mb-4 text-sm text-slate-500">
          Les 7.1 t/m 7.4 kunnen ieder in één lesuur, mits de simulatoren in les 7.1 en 7.3 kort en gericht
          worden ingezet (bijvoorbeeld twee scenario's per klas in plaats van vrij spelen).
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
          Dit thema bouwt voort op begrippen uit eerdere thema's over consumentengedrag en bedrijfseconomie.
          Les 7.1 herhaalt en verdiept het begrip <strong>vraag en aanbod</strong>, dat mogelijk al zijdelings
          aan bod is gekomen bij eerdere thema's over consumentenmarkten. Les 7.4 sluit direct aan bij Thema 6
          (De Winstfabriek), waar kosten, opbrengsten en de winst- en verliesrekening centraal stonden: dit
          thema past die kennis toe op vaste en variabele kosten binnen een prijsstrategie. Is Thema 6 nog
          niet behandeld, dan werkt dit thema ook prima op zichzelf; is het al wel behandeld, benut dan vooral
          de rekenopdrachten in les 7.4 om de transfer tussen beide thema's te laten maken.
        </p>
      </section>

      <section className="mb-10 rounded-xl border border-red-100 bg-white p-6 lg:p-8">
        <h2 className="mb-4 text-slate-900">Toetsing</h2>
        <p className="text-slate-700">
          De <strong>eindquiz</strong> is diagnostisch (geen cijfer); het <strong>project</strong> telt als
          praktische opdracht/SO via de rubric op de projectpagina. Overweeg een aparte theorietoets over de
          begrippen in de infoboxen, inclusief de begrippenlijst, en over de rekenvaardigheden uit les 7.2 en
          7.4.
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
          De cijfers in dit thema (het Fantasialand-voorbeeld, prijselasticiteiten en kostprijzen) zijn
          illustratief en bedoeld om de rekenmethodes helder te maken. De praktijk van dynamic pricing bij
          pretparken, vliegtuigmaatschappijen, hotels en platforms als Uber verandert regelmatig, bijvoorbeeld
          door nieuwe regelgeving rond prijstransparantie. Controleer voor de les actuele voorbeelden,
          bijvoorbeeld via de prijskalender van een pretpark in de buurt of recente nieuwsberichten over
          surge pricing, en pas de infoboxen en de simulatoren hierop aan voordat het thema live gaat.
        </p>
      </section>
    </PageShell>
  )
}
