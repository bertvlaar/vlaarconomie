import React from 'react'
import PageShell from '../components/PageShell.jsx'

const planning = [
  { uur: 'Lesuur 1', inhoud: 'Les 4.1 (kostprijs en waardeketen) + KostprijsSimulator + start Fase 1 project (bestaand kledingmerk onderzoeken)' },
  { uur: 'Lesuur 2', inhoud: 'Les 4.1 vervolg (schaalvoordeel) + oefenbank' },
  { uur: 'Lesuur 3', inhoud: 'Les 4.2 (fast fashion vs. slow fashion) + rekenopdrachten verdienmodel' },
  { uur: 'Lesuur 4', inhoud: 'Fase 1 afronden (bronnenonderzoek); start Les 4.3 (greenwashing)' },
  { uur: 'Lesuur 5', inhoud: 'Les 4.3 vervolg + praktijkopdracht "greenwashing of geloofwaardig?"' },
  { uur: 'Lesuur 6', inhoud: 'Les 4.4 (circulaire economie) + HuurVsKopenSimulator + start Fase 2 project (kostprijs eigen kledingstuk)' },
  { uur: 'Lesuur 7', inhoud: 'Werktijd Fase 3 (eerlijke marketingtekst en keurmerk kiezen) + tussentijdse feedback' },
  { uur: 'Lesuur 8', inhoud: 'Eindquiz (diagnostisch) + start Fase 4 (presentatie voorbereiden)' },
  { uur: 'Lesuur 9', inhoud: 'Presentaties Fase 4 + beoordeling met rubric' },
]

const kerndoelen = [
  {
    kd: 'Rekenen/Wiskunde · KD10A: Getallen en grootheden (verhoudingen & procenten)',
    tekst: 'leerlingen rekenen met percentages en verhoudingen om kostprijzen, winstmarges en de kosten van huren versus kopen te berekenen (les 4.1, 4.2, 4.4, extra rekenopdrachten).',
  },
  {
    kd: 'Rekenen/Wiskunde · KD11A: Verbanden (functies en grafieken)',
    tekst: 'leerlingen leggen het verband tussen verkoopprijs, kostenposten en winst, en interpreteren hoe schaalvoordeel en volume de totale winst beïnvloeden (les 4.1, 4.2).',
  },
  {
    kd: 'Burgerschap · KD19A: Basiswaarden van de democratische rechtsstaat (eerlijkheid)',
    tekst: 'leerlingen nemen een onderbouwd standpunt in over de eerlijkheid van greenwashing en de verdeling van de verkoopprijs over de schakels in de keten (les 4.1, 4.3).',
  },
  {
    kd: 'Mens & Maatschappij · KD26A: Consumeren en produceren (markt en prijsvorming)',
    tekst: 'leerlingen leggen uit hoe de kostprijs en verkoopprijs van een product tot stand komen, en hoe bedrijven verschillende verdienmodellen (fast fashion, slow fashion, circulair) toepassen (les 4.1 t/m 4.4).',
  },
  {
    kd: 'Mens & Maatschappij · KD27A: Duurzaamheid en de rol van de consument',
    tekst: 'leerlingen beoordelen duurzaamheidsclaims kritisch en herkennen greenwashing, en wegen de kosten en baten van circulaire consumptiekeuzes (zoals kledingverhuur) af (les 4.3, 4.4).',
  },
]

export default function VoorDeDocent4() {
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
          <li>uitleggen wat de kostprijs en de waardeketen van een kledingstuk zijn, en de winstmarge berekenen;</li>
          <li>uitleggen hoe schaalvoordeel ervoor zorgt dat goedkope kleding toch winstgevend kan zijn;</li>
          <li>het verdienmodel van fast fashion (volume en omloopsnelheid) vergelijken met dat van slow fashion;</li>
          <li>greenwashing herkennen en de waarde van een onafhankelijk keurmerk beoordelen ten opzichte van een marketingclaim;</li>
          <li>uitleggen wat een circulaire economie in de mode inhoudt, en de kosten en baten van kleding huren versus kopen afwegen;</li>
          <li>rekenen met percentages, marges en verhoudingen binnen kostprijs- en verdienmodelvraagstukken (niveau 2F/3F).</li>
        </ul>
      </section>

      <section className="mb-10 rounded-xl border border-red-100 bg-white p-6 lg:p-8">
        <h2 className="mb-4 text-slate-900">Lesplanning (± 5 weken · 9 lesuren)</h2>
        <p className="mb-4 text-sm text-slate-500">
          Les 4.1 t/m 4.4 kunnen ieder in één lesuur, mits de simulatoren in les 4.1 en 4.4 kort en gericht
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
        <h2 className="mb-4 text-slate-900">🔗 Aansluiting bij eerdere en latere thema's</h2>
        <p className="text-slate-700">
          Dit thema bouwt voort op basisbegrippen uit eerdere thema's over kosten en opbrengsten van een
          bedrijf, en past deze toe op de herkenbare context van kleding. Les 4.1 en 4.2 sluiten aan bij
          thema's waarin kostprijs, omzet en winst al zijn geïntroduceerd: benut die voorkennis om sneller
          door de basisdefinities te gaan en meer tijd te besteden aan de toepassing op fast fashion. Les 4.3
          en 4.4 bouwen een brug naar latere thema's over duurzaamheid en de circulaire economie (zoals het
          thema over tweedehands kleding en platformen): de begrippen greenwashing, keurmerk en circulaire
          economie kunnen daar verder worden uitgediept.
        </p>
      </section>

      <section className="mb-10 rounded-xl border border-red-100 bg-white p-6 lg:p-8">
        <h2 className="mb-4 text-slate-900">Toetsing</h2>
        <p className="text-slate-700">
          De <strong>eindquiz</strong> is diagnostisch (geen cijfer); het <strong>project</strong> telt als
          praktische opdracht/SO via de rubric op de projectpagina. Overweeg een aparte theorietoets over de
          begrippen in de infoboxen, inclusief de begrippenlijst, en over de rekenvaardigheden uit les 4.1,
          4.2 en 4.4.
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
          De cijfers in dit thema (de T-shirtprijsopbouw, winstmarges en huur-versus-koopvoorbeelden) zijn
          illustratief en bedoeld om de rekenmethodes helder te maken. Wetgeving rond greenwashing en
          duurzaamheidsclaims in de kledingindustrie (zoals Europese regelgeving over "groene claims") is in
          ontwikkeling. Controleer voor de les actuele voorbeelden van kledingmerken, keurmerken en
          eventuele recente nieuwsberichten over fast fashion of greenwashing, en pas de infoboxen hierop aan
          voordat het thema live gaat.
        </p>
      </section>
    </PageShell>
  )
}
