import React from 'react'
import PageShell from '../components/PageShell.jsx'

const planning = [
  { uur: 'Lesuur 1', inhoud: 'Les 3.1 (van eigendom naar gebruik, recurring revenue, vaste lasten) + CLVSimulator + start Fase 1 project (bestaande dienst onderzoeken)' },
  { uur: 'Lesuur 2', inhoud: 'Les 3.1 vervolg (CLV-rekenopdrachten) + oefenbank' },
  { uur: 'Lesuur 3', inhoud: 'Les 3.2 (freemium-model, conversie en upsell)' },
  { uur: 'Lesuur 4', inhoud: 'Fase 1 afronden (bronnenonderzoek); start Les 3.3 (subscription trap, opzeggen)' },
  { uur: 'Lesuur 5', inhoud: 'Les 3.3 vervolg (Wet van Dam, informatie-asymmetrie) + start Fase 2 project (eigen verdienmodel ontwerpen)' },
  { uur: 'Lesuur 6', inhoud: 'Les 3.4 (bundelen, drip pricing) + AbonnementenOverzichtSimulator' },
  { uur: 'Lesuur 7', inhoud: 'Werktijd Fase 3 (eerlijk aanmeld- en opzegproces ontwerpen) + tussentijdse feedback' },
  { uur: 'Lesuur 8', inhoud: 'Eindquiz (diagnostisch) + start Fase 4 (presentatie voorbereiden)' },
  { uur: 'Lesuur 9', inhoud: 'Presentaties Fase 4 + beoordeling met rubric' },
]

const kerndoelen = [
  {
    kd: 'Rekenen/Wiskunde · KD10A: Getallen en grootheden (verhoudingen & procenten)',
    tekst: 'leerlingen rekenen met percentages en verhoudingen om jaarlasten, churn en de Customer Lifetime Value van abonnementen te berekenen (les 3.1, 3.4, extra rekenopdrachten).',
  },
  {
    kd: 'Rekenen/Wiskunde · KD11A: Verbanden (functies en grafieken)',
    tekst: 'leerlingen leggen het verband tussen churn, gemiddelde abonnementsduur en de totale opbrengst per klant, en interpreteren hoe deze grootheden elkaar beïnvloeden (les 3.1, 3.2).',
  },
  {
    kd: 'Burgerschap · KD19A: Basiswaarden van de democratische rechtsstaat (eerlijkheid)',
    tekst: 'leerlingen nemen een onderbouwd standpunt in over de eerlijkheid van subscription traps en beoordelen de wettelijke bescherming van consumenten bij opzeggen (les 3.3).',
  },
  {
    kd: 'Mens & Maatschappij · KD26A: Consumeren en produceren (markt en prijsvorming)',
    tekst: 'leerlingen leggen uit hoe het abonnementenmodel, freemium-modellen en bundeling als verdienmodel werken, en welke rol terugkerende omzet daarin speelt (les 3.1 t/m 3.4).',
  },
  {
    kd: 'Mens & Maatschappij · KD27A: Consumentengedrag en financiële zelfredzaamheid',
    tekst: 'leerlingen reflecteren kritisch op hun eigen (of het gezins-)abonnementengedrag en maken een bewust overzicht van vaste lasten (les 3.1, 3.4).',
  },
]

export default function VoorDeDocent3() {
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
          <li>uitleggen wat de verschuiving van eigendom naar gebruik inhoudt, en waarom recurring revenue waardevol is voor bedrijven;</li>
          <li>de Customer Lifetime Value van een abonnee berekenen op basis van maandprijs en churn;</li>
          <li>uitleggen wat een freemium-model is, en hoe conversie en upselling hierbinnen werken;</li>
          <li>het begrip subscription trap herkennen en de wettelijke bescherming (Wet van Dam) bij het opzeggen van abonnementen benoemen;</li>
          <li>rekenen met percentages, jaarlasten en samengestelde berekeningen binnen abonnementsvraagstukken (niveau 2F/3F);</li>
          <li>kritisch reflecteren op eigen abonnementskeuzes, met begrippen als bundelen, drip pricing en verzonken kosten.</li>
        </ul>
      </section>

      <section className="mb-10 rounded-xl border border-red-100 bg-white p-6 lg:p-8">
        <h2 className="mb-4 text-slate-900">Lesplanning (± 5 weken · 9 lesuren)</h2>
        <p className="mb-4 text-sm text-slate-500">
          Les 3.1 t/m 3.4 kunnen ieder in één lesuur, mits de simulatoren in les 3.1 en 3.4 kort en gericht
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
          Dit thema staat inhoudelijk redelijk op zichzelf, maar de begrippen kostprijs, marge en
          verdienmodel keren terug in andere bedrijfseconomische thema's (zoals het thema over fast fashion).
          Les 3.1 (recurring revenue, CLV) biedt een goede basis voor elk later thema waarin verdienmodellen
          van bedrijven centraal staan. Les 3.3 sluit aan bij burgerschapsdoelen rond consumentenbescherming
          en kan gecombineerd worden met een les over de rol van de ACM en de Consumentenbond.
        </p>
      </section>

      <section className="mb-10 rounded-xl border border-red-100 bg-white p-6 lg:p-8">
        <h2 className="mb-4 text-slate-900">Toetsing</h2>
        <p className="text-slate-700">
          De <strong>eindquiz</strong> is diagnostisch (geen cijfer); het <strong>project</strong> telt als
          praktische opdracht/SO via de rubric op de projectpagina. Overweeg een aparte theorietoets over de
          begrippen in de infoboxen, inclusief de begrippenlijst, en over de rekenvaardigheden uit les 3.1 en
          3.4 (CLV en jaarlasten).
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
          De cijfers in dit thema (maandprijzen, churn-percentages en jaarlasten) zijn illustratief en
          bedoeld om de rekenmethodes helder te maken. De regelgeving rond opzeggen is volop in beweging:
          naast de bestaande Wet van Dam (opzeggen net zo makkelijk als aanmelden, max. 1 maand
          opzegtermijn) verplicht een Europese richtlijn vanaf 2026 een duidelijke "opzegknop" bij online
          afgesloten contracten. Controleer voor de les actuele voorbeelden van prijsstijgingen bij
          streamingdiensten en recente nieuwsberichten van de ACM of Consumentenbond over opzegdrempels, en
          pas de infoboxen hierop aan voordat het thema live gaat.
        </p>
      </section>
    </PageShell>
  )
}
