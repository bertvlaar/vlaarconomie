import React from 'react'
import PageShell from '../components/PageShell.jsx'

const planning = [
  { uur: 'Lesuur 1', inhoud: 'Les 1.1 (finfluencers, FOMO, algoritme) + start Fase 1 project (scam-voorbeeld onderzoeken)' },
  { uur: 'Lesuur 2', inhoud: 'Les 1.1 vervolg + oefenbank' },
  { uur: 'Lesuur 3', inhoud: 'Les 1.2 (risico en rendement) + RendementSimulator' },
  { uur: 'Lesuur 4', inhoud: 'Les 1.2 vervolg (rekenopdrachten samengestelde groei); Fase 1 afronden' },
  { uur: 'Lesuur 5', inhoud: 'Les 1.3 (piramidespelen, Ponzi-fraude) + PiramideSimulator + start Fase 2 project' },
  { uur: 'Lesuur 6', inhoud: 'Les 1.4 (informatie-asymmetrie, financiële zelfbescherming, provisieverbod)' },
  { uur: 'Lesuur 7', inhoud: 'Werktijd Fase 3 (trucs ontmaskeren, waarschuwingssignalen) + tussentijdse feedback' },
  { uur: 'Lesuur 8', inhoud: 'Eindquiz (diagnostisch) + start Fase 4 (presentatie en poster voorbereiden)' },
  { uur: 'Lesuur 9', inhoud: 'Presentaties Fase 4 + beoordeling met rubric' },
]

const kerndoelen = [
  {
    kd: 'Rekenen/Wiskunde · KD10A: Getallen en grootheden (verhoudingen & procenten)',
    tekst: 'leerlingen rekenen met percentages en samengestelde groei om beloofde rendementen en het benodigde aantal deelnemers bij piramidespelen te berekenen (les 1.2, 1.3, extra rekenopdrachten).',
  },
  {
    kd: 'Rekenen/Wiskunde · KD11A: Verbanden (exponentiële groei)',
    tekst: 'leerlingen herkennen en berekenen exponentiële groei bij samengestelde interest en bij de wervingsstructuur van piramidespelen (les 1.2, 1.3).',
  },
  {
    kd: 'Burgerschap · KD19A: Basiswaarden van de democratische rechtsstaat (bescherming tegen fraude)',
    tekst: 'leerlingen nemen een onderbouwd standpunt in over de verantwoordelijkheid van platforms en toezichthouders bij het tegengaan van financiële oplichting gericht op jongeren (les 1.1, 1.4).',
  },
  {
    kd: 'Digitale geletterdheid · KD22A: Kritisch omgaan met onlinecontent en algoritmes',
    tekst: 'leerlingen doorzien hoe aanbevelingsalgoritmes van social media financiële scam-content versterken, en beoordelen onlinecontent kritisch op betrouwbaarheid (les 1.1).',
  },
  {
    kd: 'Mens & Maatschappij · KD27A: Consumentengedrag en financiële zelfredzaamheid',
    tekst: 'leerlingen passen concrete strategieën van financiële zelfbescherming toe en herkennen informatie-asymmetrie bij financiële aanbiedingen (les 1.2 t/m 1.4).',
  },
]

export default function VoorDeDocent1() {
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
          <li>uitleggen wat een finfluencer is, en hoe het algoritme van social media financiële scams versterkt;</li>
          <li>het verband tussen risico en rendement toepassen om een beloofd rendement te beoordelen;</li>
          <li>het verschil tussen een reële investering en een piramidespel of Ponzi-fraude uitleggen;</li>
          <li>berekenen hoe snel piramidespelen wiskundig onhoudbaar worden (exponentiële groei);</li>
          <li>informatie-asymmetrie herkennen bij financiële aanbiedingen, en het provisieverbod uitleggen;</li>
          <li>concrete stappen van financiële zelfbescherming toepassen, waaronder het controleren van AFM/DNB-registratie.</li>
        </ul>
      </section>

      <section className="mb-10 rounded-xl border border-red-100 bg-white p-6 lg:p-8">
        <h2 className="mb-4 text-slate-900">Lesplanning (± 5 weken · 9 lesuren)</h2>
        <p className="mb-4 text-sm text-slate-500">
          Les 1.1 t/m 1.4 kunnen ieder in één lesuur, mits de simulatoren in les 1.2 en 1.3 kort en gericht
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
          Dit thema vormt een goede basis voor de rest van het vak: begrippen als risico, rendement en
          informatie-asymmetrie keren terug in vrijwel elk later bedrijfseconomisch thema. De nadruk op
          kritisch mediagebruik en herkennen van dark patterns sluit ook aan bij het thema over gaming en
          in-app aankopen, waarin vergelijkbare psychologische technieken (FOMO, tijdsdruk) aan bod komen.
        </p>
      </section>

      <section className="mb-10 rounded-xl border border-red-100 bg-white p-6 lg:p-8">
        <h2 className="mb-4 text-slate-900">Toetsing</h2>
        <p className="text-slate-700">
          De <strong>eindquiz</strong> is diagnostisch (geen cijfer); het <strong>project</strong> telt als
          praktische opdracht/SO via de rubric op de projectpagina. Overweeg een aparte theorietoets over de
          begrippen in de infoboxen, inclusief de begrippenlijst, en over de rekenvaardigheden uit les 1.2 en
          1.3 (samengestelde groei en exponentiële groei bij piramidespelen).
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
          De cijfers in dit thema (beloofde rendementen, wervingsaantallen) zijn illustratief en bedoeld om
          de rekenmethodes helder te maken. De AFM waarschuwt doorlopend voor nieuwe finfluencers en
          crypto-scams gericht op jongeren, en de handhaving hierop is volop in ontwikkeling. Controleer
          voor de les actuele voorbeelden en recente waarschuwingen op de website van de AFM (afm.nl) en
          pas de infoboxen hierop aan voordat het thema live gaat.
        </p>
      </section>
    </PageShell>
  )
}
