import React from 'react'
import PageShell from '../components/PageShell.jsx'

const planning = [
  { uur: 'Lesuur 1', inhoud: 'Les 10.1 (primaire energiebronnen & schaarste) + start Fase 1 project (waardeketen kiezen en onderzoeken)' },
  { uur: 'Lesuur 2', inhoud: 'Les 10.2 (geopolitieke invloed & macro-economische schokken) + GasprijsSchokSimulator' },
  { uur: 'Lesuur 3', inhoud: 'Fase 1 afronden (bronnenonderzoek); start Les 10.3 (internationale arbeidsdeling)' },
  { uur: 'Lesuur 4', inhoud: 'Les 10.3 vervolg + IPhoneWaardeketenSimulator en rekenoefeningen' },
  { uur: 'Lesuur 5', inhoud: 'Les 10.4 (toegevoegde waarde & smiling curve)' },
  { uur: 'Lesuur 6', inhoud: 'Les 10.4 Debathal + start Fase 2 project (analyse eigen waardeketen)' },
  { uur: 'Lesuur 7', inhoud: 'Werktijd Fase 3 (standpunt formuleren) + tussentijdse feedback' },
  { uur: 'Lesuur 8', inhoud: 'Eindquiz (diagnostisch) + start Fase 4 (presentatie voorbereiden)' },
  { uur: 'Lesuur 9', inhoud: 'Presentaties Fase 4 + beoordeling met rubric' },
]

const kerndoelen = [
  {
    kd: 'Burgerschap · KD20A: Democratisch handelen (standpunt eerlijke verdeling)',
    tekst: 'leerlingen nemen een onderbouwd standpunt in over de eerlijkheid van de verdeling van toegevoegde waarde in wereldwijde waardeketens, en oefenen dit in de Debathal (les 10.4).',
  },
  {
    kd: 'Burgerschap · KD19A: Basiswaarden van de democratische rechtsstaat (gelijkwaardigheid)',
    tekst: 'leerlingen redeneren over de ongelijke verdeling van welvaart tussen landen en werknemers in dezelfde productieketen (les 10.3, 10.4).',
  },
  {
    kd: 'Rekenen/Wiskunde · KD10A: Getallen en grootheden (verhoudingen & procenten)',
    tekst: 'leerlingen rekenen met percentages, verhoudingen en opeenvolgende prijsstijgingen om energiekosten en toegevoegde-waardeverdelingen te berekenen (les 10.2, 10.3, 10.4, extra rekenopdrachten).',
  },
  {
    kd: 'Mens & Maatschappij · KD24A: Ruimtelijke inrichting en internationale verhoudingen',
    tekst: 'leerlingen leggen uit hoe geopolitieke gebeurtenissen en internationale arbeidsdeling de economische afhankelijkheid tussen landen bepalen (les 10.1, 10.2, 10.3).',
  },
]

export default function VoorDeDocent10() {
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
          <li>uitleggen wat primaire energiebronnen zijn, en waarom hun ongelijke verdeling landen van elkaar afhankelijk maakt;</li>
          <li>uitleggen wat geopolitieke invloed en macro-economische schokken zijn, en berekenen wat een gasprijsschok een huishouden kost;</li>
          <li>uitleggen wat internationale arbeidsdeling en wereldwijde waardeketens zijn, en dit toepassen op de productie van een smartphone;</li>
          <li>uitleggen wat toegevoegde waarde en de "smiling curve" zijn;</li>
          <li>rekenen met percentages en verhoudingen binnen energiekosten en waardeketens (niveau 2F/3F);</li>
          <li>een onderbouwd standpunt innemen over de eerlijkheid van de verdeling van toegevoegde waarde in wereldwijde waardeketens.</li>
        </ul>
      </section>

      <section className="mb-10 rounded-xl border border-red-100 bg-white p-6 lg:p-8">
        <h2 className="mb-4 text-slate-900">Lesplanning (± 5 weken · 9 lesuren)</h2>
        <p className="mb-4 text-sm text-slate-500">
          Les 10.1 t/m 10.4 kunnen ieder in één lesuur, mits de Debathal in Les 10.4 wordt beperkt tot één
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
          Dit afsluitende thema van leerjaar 3 bouwt voort op begrippen uit eerdere thema's en past ze
          toe op een internationale, actuele context. Les 10.1 herhaalt en verdiept het begrip{' '}
          <strong>schaarste</strong> uit eerdere thema's over markten, nu toegepast op energiebronnen.
          Les 10.2 en 10.3 sluiten aan bij eerdere lessen over vraag en aanbod, maar dan op wereldschaal.
          Is een eerder markt-thema nog niet behandeld, dan werkt dit thema ook prima op zichzelf; is het
          al wel behandeld, benut dan vooral de vergelijkingsvragen in de oefenbank van les 10.1 en 10.2
          om de transfer tussen beide contexten te laten maken.
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
          De cijfers in dit thema (gasprijzen, jaarverbruik en verdeling van de smartphone-waardeketen)
          zijn illustratief en gebaseerd op de stand van zaken begin/medio 2026. Energieprijzen en de
          verdeling van waarde in wereldwijde productieketens veranderen regelmatig door geopolitieke
          ontwikkelingen. Controleer voor de les de meest actuele cijfers, bijvoorbeeld via het CBS en
          nieuwsberichten over de energiemarkt, en pas de infoboxen en de simulatoren hierop aan
          voordat het thema live gaat.
        </p>
      </section>
    </PageShell>
  )
}
