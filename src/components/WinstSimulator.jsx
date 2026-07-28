import React, { useState, useMemo } from 'react'

// Doorlopend voorbeeld uit dit thema: sneakerwinkel "SoleZone" (zie
// data/thema6Data.js). Standaardwaarden komen overeen met een gewone maand:
// 150 paar sneakers × €120 verkoopprijs, €70 inkoopprijs, €3.000 vaste kosten.
const STANDAARD = {
  afzet: 150,
  verkoopprijs: 120,
  inkoopprijs: 70,
  vasteKosten: 3000,
}

function formatEuro(bedrag) {
  return bedrag.toLocaleString('nl-NL', { maximumFractionDigits: 0 })
}

export default function WinstSimulator() {
  const [afzet, setAfzet] = useState(STANDAARD.afzet)
  const [verkoopprijs, setVerkoopprijs] = useState(STANDAARD.verkoopprijs)
  const [inkoopprijs, setInkoopprijs] = useState(STANDAARD.inkoopprijs)
  const [vasteKosten, setVasteKosten] = useState(STANDAARD.vasteKosten)

  const { omzet, inkoopwaarde, brutowinst, nettowinst, nettowinstmarge } = useMemo(() => {
    const omzet = afzet * verkoopprijs
    const inkoopwaarde = afzet * inkoopprijs
    const brutowinst = omzet - inkoopwaarde
    const nettowinst = brutowinst - vasteKosten
    const nettowinstmarge = omzet > 0 ? (nettowinst / omzet) * 100 : 0
    return { omzet, inkoopwaarde, brutowinst, nettowinst, nettowinstmarge }
  }, [afzet, verkoopprijs, inkoopprijs, vasteKosten])

  // Voor de balk: inkoopwaarde, vaste kosten en (netto)winst als aandeel van de omzet.
  // Bij verlies wordt de balk anders opgebouwd (zie renderBalk hieronder).
  const isVerlies = nettowinst < 0
  const inkoopAandeel = omzet > 0 ? Math.min(100, (inkoopwaarde / omzet) * 100) : 0
  const vasteKostenAandeel = omzet > 0 ? Math.min(100 - inkoopAandeel, (vasteKosten / omzet) * 100) : 0
  const winstAandeel = Math.max(0, 100 - inkoopAandeel - vasteKostenAandeel)

  const reset = () => {
    setAfzet(STANDAARD.afzet)
    setVerkoopprijs(STANDAARD.verkoopprijs)
    setInkoopprijs(STANDAARD.inkoopprijs)
    setVasteKosten(STANDAARD.vasteKosten)
  }

  return (
    <div className="rounded-lg border border-border bg-pagebg p-5 lg:p-6">
      <div className="grid gap-6 lg:grid-cols-2">
        {/* Bediening */}
        <div>
          <label className="mb-1 block text-sm font-medium text-slate-700">
            Afzet (aantal verkochte paar sneakers per maand):{' '}
            <span className="font-semibold text-emerald-700">{afzet}</span>
          </label>
          <input
            type="range"
            min="0"
            max="400"
            step="10"
            value={afzet}
            onChange={(e) => setAfzet(Number(e.target.value))}
            className="w-full accent-emerald-600"
          />

          <label className="mb-1 mt-4 block text-sm font-medium text-slate-700">
            Verkoopprijs per paar: <span className="font-semibold text-emerald-700">€{verkoopprijs}</span>
          </label>
          <input
            type="range"
            min="40"
            max="220"
            step="5"
            value={verkoopprijs}
            onChange={(e) => setVerkoopprijs(Number(e.target.value))}
            className="w-full accent-emerald-600"
          />

          <label className="mb-1 mt-4 block text-sm font-medium text-slate-700">
            Inkoopprijs per paar: <span className="font-semibold text-emerald-700">€{inkoopprijs}</span>
          </label>
          <input
            type="range"
            min="10"
            max="200"
            step="5"
            value={inkoopprijs}
            onChange={(e) => setInkoopprijs(Number(e.target.value))}
            className="w-full accent-emerald-600"
          />

          <label className="mb-1 mt-4 block text-sm font-medium text-slate-700">
            Vaste kosten per maand:{' '}
            <span className="font-semibold text-emerald-700">€{formatEuro(vasteKosten)}</span>
          </label>
          <input
            type="range"
            min="0"
            max="10000"
            step="100"
            value={vasteKosten}
            onChange={(e) => setVasteKosten(Number(e.target.value))}
            className="w-full accent-emerald-600"
          />

          <button
            onClick={reset}
            className="mt-4 text-sm font-semibold text-emerald-700 underline underline-offset-2"
          >
            ↺ Reset naar SoleZone-voorbeeld
          </button>
        </div>

        {/* Uitkomst: resultatenrekening */}
        <div className="rounded-md border border-border bg-white p-4 text-sm">
          <p className="mb-3 font-semibold text-slate-900">Resultatenrekening (per maand)</p>

          <div className="space-y-1.5">
            <p className="flex items-center justify-between text-slate-700">
              <span>Omzet ({afzet} × €{verkoopprijs})</span>
              <strong>€{formatEuro(omzet)}</strong>
            </p>
            <p className="flex items-center justify-between text-slate-700">
              <span>Inkoopwaarde van de omzet ({afzet} × €{inkoopprijs})</span>
              <strong>− €{formatEuro(inkoopwaarde)}</strong>
            </p>
            <p className="flex items-center justify-between border-t border-border pt-1.5 font-semibold text-slate-900">
              <span>Brutowinst</span>
              <span>€{formatEuro(brutowinst)}</span>
            </p>
            <p className="flex items-center justify-between text-slate-700">
              <span>Overige (vaste) kosten</span>
              <strong>− €{formatEuro(vasteKosten)}</strong>
            </p>
            <p
              className={`flex items-center justify-between border-t border-border pt-1.5 text-base font-bold ${
                isVerlies ? 'text-red-700' : 'text-emerald-700'
              }`}
            >
              <span>{isVerlies ? 'Verlies' : 'Nettowinst'}</span>
              <span>€{formatEuro(Math.abs(nettowinst))}</span>
            </p>
          </div>

          {/* Visuele balk: hoe verdeelt de omzet zich? */}
          <div className="mt-4 flex h-6 w-full overflow-hidden rounded-md border border-border">
            <div
              className="bg-slate-400"
              style={{ width: `${inkoopAandeel}%` }}
              title={`Inkoopwaarde van de omzet: €${formatEuro(inkoopwaarde)}`}
            />
            <div
              className="bg-amber-400"
              style={{ width: `${vasteKostenAandeel}%` }}
              title={`Vaste kosten: €${formatEuro(vasteKosten)}`}
            />
            <div
              className={isVerlies ? 'bg-red-500' : 'bg-emerald-500'}
              style={{ width: `${winstAandeel}%` }}
              title={`${isVerlies ? 'Verlies' : 'Nettowinst'}: €${formatEuro(Math.abs(nettowinst))}`}
            />
          </div>
          <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-xs text-slate-500">
            <span className="flex items-center gap-1">
              <span className="inline-block h-2.5 w-2.5 rounded-sm bg-slate-400" aria-hidden="true" />
              Inkoopwaarde omzet
            </span>
            <span className="flex items-center gap-1">
              <span className="inline-block h-2.5 w-2.5 rounded-sm bg-amber-400" aria-hidden="true" />
              Vaste kosten
            </span>
            <span className="flex items-center gap-1">
              <span
                className={`inline-block h-2.5 w-2.5 rounded-sm ${isVerlies ? 'bg-red-500' : 'bg-emerald-500'}`}
                aria-hidden="true"
              />
              {isVerlies ? 'Verlies' : 'Nettowinst'}
            </span>
          </div>

          <p className="mt-4 border-t border-border pt-3 text-slate-600">
            Nettowinstmarge:{' '}
            <strong className={isVerlies ? 'text-red-700' : 'text-emerald-700'}>
              {nettowinstmarge.toFixed(1)}%
            </strong>{' '}
            van de omzet blijft over als (netto)winst.
          </p>
        </div>
      </div>
    </div>
  )
}
