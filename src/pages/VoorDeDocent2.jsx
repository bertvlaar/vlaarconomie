import React from 'react'
import PageShell from '../components/PageShell.jsx'

const planning = [
  { uur: 'Lesuur 1', inhoud: 'Les 2.1 (freemium-model, whales, koopmomenten) + start Fase 1 project (bestaande freemium-game onderzoeken)' },
  { uur: 'Lesuur 2', inhoud: 'Les 2.1 vervolg + oefenbank' },
  { uur: 'Lesuur 3', inhoud: 'Les 2.2 (kunstmatige schaarste, virtuele economie) + VirtueleValutaSimulator' },
  { uur: 'Lesuur 4', inhoud: 'Fase 1 afronden (bronnenonderzoek); rekenopdrachten les 2.2' },
  { uur: 'Lesuur 5', inhoud: 'Les 2.3 (dark patterns, lootboxes, wetgeving) + LootboxKansSimulator + start Fase 2 project' },
  { uur: 'Lesuur 6', inhoud: 'Les 2.4 (payment pain, FOMO, verliesaversie, weerbaarheid)' },
  { uur: 'Lesuur 7', inhoud: 'Werktijd Fase 3 (eerlijk herontwerp) + tussentijdse feedback' },
  { uur: 'Lesuur 8', inhoud: 'Eindquiz (diagnostisch) + start Fase 4 (presentatie voorbereiden)' },
  { uur: 'Lesuur 9', inhoud: 'Presentaties Fase 4 + beoordeling met rubric' },
]

const kerndoelen = [
  {
    kd: 'Rekenen/Wiskunde · KD10A: Getallen en grootheden (verhoudingen & procenten)',
    tekst: 'leerlingen rekenen met verhoudingen en percentages om de werkelijke prijs van virtuele goederen en de verwachte kosten van lootboxes te berekenen (les 2.2, 2.3, extra rekenopdrachten).',
  },
  {
    kd: 'Rekenen/Wiskunde · KD11A: Verbanden (kansrekenen)',
    tekst: 'leerlingen leggen het verband tussen dropkans, aantal pogingen en verwachte kosten, en interpreteren hoe deze grootheden samenhangen (les 2.3).',
  },
  {
    kd: 'Burgerschap · KD19A: Basiswaarden van de democratische rechtsstaat (bescherming van kwetsbare groepen)',
    tekst: 'leerlingen nemen een onderbouwd standpunt in over de bescherming van jongeren tegen kansspelachtige mechanismen in games (les 2.3).',
  },
  {
    kd: 'Mens & Maatschappij · KD26A: Consumeren en produceren (markt en prijsvorming)',
    tekst: 'leerlingen leggen uit hoe freemium-verdienmodellen en virtuele economieën werken, en hoe kunstmatige schaarste de prijsvorming van digitale goederen beïnvloedt (les 2.1, 2.2).',
  },
  {
    kd: 'Mens & Maatschappij · KD27A: Consumentengedrag en financiële zelfredzaamheid',
    tekst: 'leerlingen herkennen dark patterns en psychologische technieken (payment pain, FOMO, verliesaversie), en ontwikkelen strategieën om weerbaarder te worden tegen impulsief koopgedrag (les 2.3, 2.4).',
  },
]

export default function VoorDeDocent2() {
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
          <li>uitleggen wat het freemium-verdienmodel inhoudt, en waarom een gratis game toch winstgevend kan zijn;</li>
          <li>uitleggen wat kunstmatige schaarste in digitale werelden inhoudt, en de werkelijke prijs van virtuele goederen berekenen;</li>
          <li>dark patterns en lootboxes herkennen, en de verwachte kosten van een lootbox-aankoop berekenen;</li>
          <li>de wettelijke discussie rondom lootboxes en kansspelwetgeving in Nederland benoemen;</li>
          <li>uitleggen hoe payment pain, FOMO en verliesaversie het koopgedrag in games beïnvloeden;</li>
          <li>een concrete strategie toepassen om weerbaarder te worden tegen dark patterns in games en apps.</li>
        </ul>
      </section>

      <section className="mb-10 rounded-xl border border-red-100 bg-white p-6 lg:p-8">
        <h2 className="mb-4 text-slate-900">Lesplanning (± 5 weken · 9 lesuren)</h2>
        <p className="mb-4 text-sm text-slate-500">
          Les 2.1 t/m 2.4 kunnen ieder in één lesuur, mits de simulatoren in les 2.2 en 2.3 kort en gericht
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
          Dit thema is voor veel leerlingen zeer herkenbaar en biedt een laagdrempelige ingang tot
          bedrijfseconomische begrippen als verdienmodel, marginale kosten en prijsvorming, die in latere
          thema's (zoals het thema over abonnementen of fast fashion) verder worden uitgediept. Les 2.3
          sluit goed aan bij burgerschapsdoelen rond consumentenbescherming en kan gecombineerd worden met
          een les over de rol van de Kansspelautoriteit en ACM.
        </p>
      </section>

      <section className="mb-10 rounded-xl border border-red-100 bg-white p-6 lg:p-8">
        <h2 className="mb-4 text-slate-900">Toetsing</h2>
        <p className="text-slate-700">
          De <strong>eindquiz</strong> is diagnostisch (geen cijfer); het <strong>project</strong> telt als
          praktische opdracht/SO via de rubric op de projectpagina. Overweeg een aparte theorietoets over de
          begrippen in de infoboxen, inclusief de begrippenlijst, en over de rekenvaardigheden uit les 2.2 en
          2.3 (werkelijke prijs en verwachte kosten bij kansen).
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
          De cijfers in dit thema (wisselkoersen, dropkansen en verwachte kosten) zijn illustratief en
          bedoeld om de rekenmethodes helder te maken. De juridische status van lootboxes in Nederland is
          volop in beweging: na de uitspraak van de Raad van State in 2022 blijkt uit recent onderzoek dat
          naleving van bestaande richtlijnen door gamebedrijven in de praktijk laag is. Controleer voor de
          les actuele voorbeelden en recente nieuwsberichten van de Kansspelautoriteit, ACM of
          Consumentenbond over lootboxes en dark patterns, en pas de infoboxen hierop aan voordat het thema
          live gaat.
        </p>
      </section>
    </PageShell>
  )
}
