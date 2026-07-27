import React, { useState, useMemo } from 'react'

// Uitgangspunten (zie doorlopend voorbeeld familie De Vries, les 10.2):
// vóór de schok € 0,90 per m³, jaarverbruik instelbaar tussen 400 en 2.000 m³.
const PRIJS_VOOR = 0.9

export default function GasprijsSchokSimulator() {
  const [verbruik, setVerbruik] = useState(1200)
  const [prijsNa, setPrijsNa] = useState(2.4)
  const [zonAandeel, setZonAandeel] = useState(0) // % van elektriciteitsdeel zelf opgewekt

  const { kostenVoor, kostenNaZonder, kostenNaMet, schok, besparingDoorZon } = useMemo(() => {
    const kostenVoor = verbruik * PRIJS_VOOR
    const kostenNaZonder = verbruik * prijsNa
    // Zonnepanelen verlagen alleen het deel van het verbruik dat je zelf opwekt;
    // dat deel betaal je niet meer tegen de (hoge) wereldmarktprijs.
    const kostenNaMet = kostenNaZonder * (1 - zonAandeel / 100)
    const schok = kostenNaZonder - kostenVoor
    const besparingDoorZon = kostenNaZonder - kostenNaMet
    return { kostenVoor, kostenNaZonder, kostenNaMet, schok, besparingDoorZon }
  }, [verbruik, prijsNa, zonAandeel])

  return (
    <div className="rounded-lg border border-border bg-pagebg p-5 lg:p-6">
      <div className="grid gap-6 lg:grid-cols-2">
        <div>
          <label className="mb-1 block text-sm font-medium text-slate-700">
            Jaarverbruik huishouden: <span className="font-semibold text-blue-700">{verbruik} m³</span>
          </label>
          <input
            type="range"
            min="400"
            max="2000"
            step="50"
            value={verbruik}
            onChange={(e) => setVerbruik(Number(e.target.value))}
            className="w-full accent-blue-600"
          />

          <label className="mb-1 mt-4 block text-sm font-medium text-slate-700">
            Wereldmarktprijs ná de geopolitieke schok:{' '}
            <span className="font-semibold text-blue-700">€{prijsNa.toFixed(2)} per m³</span>
          </label>
          <input
            type="range"
            min="0.9"
            max="4"
            step="0.1"
            value={prijsNa}
            onChange={(e) => setPrijsNa(Number(e.target.value))}
            className="w-full accent-blue-600"
          />
          <p className="mt-1 text-xs text-slate-500">Prijs vóór de schok: vast op €0,90 per m³.</p>

          <p className="mb-1 mt-4 text-sm font-medium text-slate-700">
            Aandeel zelf opgewekt met zonnepanelen: <span className="font-semibold text-blue-700">{zonAandeel}%</span>
          </p>
          <div className="flex flex-wrap gap-2">
            {[0, 10, 33, 50].map((p) => (
              <button
                key={p}
                onClick={() => setZonAandeel(p)}
                className={`rounded-md border px-3 py-1.5 text-sm font-medium transition-colors ${
                  zonAandeel === p
                    ? 'border-blue-500 bg-blue-50 text-blue-700'
                    : 'border-border bg-white text-slate-600 hover:bg-slate-50'
                }`}
              >
                {p === 0 ? 'geen' : `${p}%`}
              </button>
            ))}
          </div>

          <button
            onClick={() => {
              setVerbruik(1200)
              setPrijsNa(2.4)
              setZonAandeel(0)
            }}
            className="mt-4 text-sm font-semibold text-blue-700 underline underline-offset-2"
          >
            ↺ Reset simulator
          </button>
        </div>

        <div className="rounded-md border border-border bg-white p-4 text-sm">
          <p className="mb-2 font-semibold text-slate-900">Vóór de schok</p>
          <p className="mb-3 text-slate-700">
            {verbruik} m³ × €0,90 = <strong>€{kostenVoor.toFixed(0)}</strong> per jaar
          </p>
          <p className="mb-2 font-semibold text-slate-900">Ná de schok, zonder zonnepanelen</p>
          <p className="mb-3 text-slate-700">
            {verbruik} m³ × €{prijsNa.toFixed(2)} = <strong>€{kostenNaZonder.toFixed(0)}</strong> per jaar
          </p>
          {zonAandeel > 0 && (
            <>
              <p className="mb-2 font-semibold text-slate-900">Ná de schok, mét {zonAandeel}% zonnepanelen</p>
              <p className="mb-3 text-slate-700">
                <strong>€{kostenNaMet.toFixed(0)}</strong> per jaar (bespaart €{besparingDoorZon.toFixed(0)}{' '}
                door dat aandeel niet tegen de hoge wereldmarktprijs te hoeven kopen)
              </p>
            </>
          )}
          <p className="mt-3 border-t border-border pt-3 text-lg font-bold text-blue-700">
            Extra kosten door de schok: €{schok.toFixed(0)} per jaar
          </p>
          <p className="mt-2 text-slate-600">
            Dat is een stijging van <strong>{((schok / kostenVoor) * 100).toFixed(0)}%</strong> ten
            opzichte van vóór de schok — puur door de wereldmarktprijs, zonder dat het huishouden zelf
            meer is gaan verbruiken.
          </p>
        </div>
      </div>
    </div>
  )
}
