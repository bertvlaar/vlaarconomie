import React, { useState, useMemo } from 'react'

// Illustratieve kengetallen voor de vergelijking nieuw vs. tweedehands kledingstuk.
// Docent: vervang deze door recentere cijfers (bijvoorbeeld van Milieu Centraal of
// CBS) indien beschikbaar; de kern van de opdracht (procentuele besparing) blijft
// hetzelfde bij andere uitgangswaarden.
const CO2_PER_NIEUW_KLEDINGSTUK = 8 // kg CO2-uitstoot, illustratief gemiddelde
const GEM_NIEUWPRIJS = 25 // euro, illustratief gemiddelde prijs nieuw kledingstuk
const REBOUND_FACTOR = 0.3 // aandeel van de besparing dat als "extra aankopen" wordt teruggekocht

export default function HergebruikImpactSimulator() {
  const [aantal, setAantal] = useState(10)
  const [tweedehandsPrijsPct, setTweedehandsPrijsPct] = useState(50) // % van nieuwprijs
  const [reboundAan, setReboundAan] = useState(false)

  const { co2Bespaard, geldBespaard, effectieveCo2Besparing, reboundVerlies } = useMemo(() => {
    const nieuwprijsTotaal = aantal * GEM_NIEUWPRIJS
    const tweedehandsprijsTotaal = nieuwprijsTotaal * (tweedehandsPrijsPct / 100)
    const geldBespaard = nieuwprijsTotaal - tweedehandsprijsTotaal
    const co2Bespaard = aantal * CO2_PER_NIEUW_KLEDINGSTUK

    // Rebound-effect: een deel van het bespaarde geld wordt gebruikt om extra
    // kledingstukken te kopen, wat een deel van de CO2-besparing weer tenietdoet.
    const reboundVerlies = reboundAan ? co2Bespaard * REBOUND_FACTOR : 0
    const effectieveCo2Besparing = co2Bespaard - reboundVerlies

    return { co2Bespaard, geldBespaard, effectieveCo2Besparing, reboundVerlies }
  }, [aantal, tweedehandsPrijsPct, reboundAan])

  return (
    <div className="rounded-lg border border-border bg-pagebg p-5 lg:p-6">
      <div className="grid gap-6 lg:grid-cols-2">
        <div>
          <label className="mb-1 block text-sm font-medium text-slate-700">
            Aantal kledingstukken tweedehands gekocht (i.p.v. nieuw):{' '}
            <span className="font-semibold text-blue-700">{aantal} stuks</span>
          </label>
          <input
            type="range"
            min="1"
            max="40"
            step="1"
            value={aantal}
            onChange={(e) => setAantal(Number(e.target.value))}
            className="w-full accent-blue-600"
          />

          <label className="mb-1 mt-4 block text-sm font-medium text-slate-700">
            Gemiddelde tweedehandsprijs t.o.v. nieuwprijs:{' '}
            <span className="font-semibold text-blue-700">{tweedehandsPrijsPct}%</span>
          </label>
          <input
            type="range"
            min="10"
            max="90"
            step="5"
            value={tweedehandsPrijsPct}
            onChange={(e) => setTweedehandsPrijsPct(Number(e.target.value))}
            className="w-full accent-blue-600"
          />
          <p className="mt-1 text-xs text-slate-500">
            Uitgangspunt: gemiddelde nieuwprijs €{GEM_NIEUWPRIJS} en €{CO2_PER_NIEUW_KLEDINGSTUK} kg
            CO2-uitstoot per nieuw geproduceerd kledingstuk (illustratieve gemiddelden).
          </p>

          <label className="mt-4 flex items-center gap-2 text-sm font-medium text-slate-700">
            <input
              type="checkbox"
              checked={reboundAan}
              onChange={(e) => setReboundAan(e.target.checked)}
              className="h-4 w-4 accent-blue-600"
            />
            Houd rekening met het rebound-effect
          </label>

          <button
            onClick={() => {
              setAantal(10)
              setTweedehandsPrijsPct(50)
              setReboundAan(false)
            }}
            className="mt-4 text-sm font-semibold text-blue-700 underline underline-offset-2"
          >
            ↺ Reset simulator
          </button>
        </div>

        <div className="rounded-md border border-border bg-white p-4 text-sm">
          <p className="mb-2 font-semibold text-slate-900">Besparing op je portemonnee</p>
          <p className="mb-3 text-slate-700">
            {aantal} × €{GEM_NIEUWPRIJS} × {(100 - tweedehandsPrijsPct)}% korting ={' '}
            <strong>€{geldBespaard.toFixed(0)}</strong> minder uitgegeven dan bij nieuwe kleding
          </p>

          <p className="mb-2 font-semibold text-slate-900">CO2-besparing (vóór rebound-effect)</p>
          <p className="mb-3 text-slate-700">
            {aantal} × {CO2_PER_NIEUW_KLEDINGSTUK} kg = <strong>{co2Bespaard.toFixed(0)} kg CO2</strong>{' '}
            niet uitgestoten, omdat er geen nieuw kledingstuk geproduceerd hoefde te worden
          </p>

          {reboundAan && (
            <>
              <p className="mb-2 font-semibold text-slate-900">Rebound-effect</p>
              <p className="mb-3 text-slate-700">
                Doordat tweedehands kleding goedkoper is, wordt een deel van de besparing gebruikt
                voor extra aankopen: naar schatting <strong>{reboundVerlies.toFixed(0)} kg CO2</strong>{' '}
                van de besparing gaat hierdoor weer verloren.
              </p>
            </>
          )}

          <p className="mt-3 border-t border-border pt-3 text-lg font-bold text-blue-700">
            Effectieve CO2-besparing: {effectieveCo2Besparing.toFixed(0)} kg
          </p>
          <p className="mt-2 text-slate-600">
            {reboundAan
              ? 'Zelfs met het rebound-effect meegerekend, blijft tweedehands kopen per saldo CO2 besparen — alleen minder dan de brutobesparing zonder rebound-effect.'
              : 'Zet het rebound-effect aan om te zien hoe extra consumptie een deel van deze besparing kan tenietdoen.'}
          </p>
        </div>
      </div>
    </div>
  )
}
