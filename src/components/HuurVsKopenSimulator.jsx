import React, { useState, useMemo } from 'react'

export default function HuurVsKopenSimulator() {
  const [maanden, setMaanden] = useState(12)
  const [nieuweStukjesPerMaand, setNieuweStukjesPerMaand] = useState(3)
  const [prijsPerStuk, setPrijsPerStuk] = useState(12)
  const [abonnementPerMaand, setAbonnementPerMaand] = useState(30)

  const { kostenKopen, kostenHuren, verschil, kledingstukken } = useMemo(() => {
    const kledingstukken = maanden * nieuweStukjesPerMaand
    const kostenKopen = kledingstukken * prijsPerStuk
    const kostenHuren = maanden * abonnementPerMaand
    const verschil = kostenKopen - kostenHuren
    return { kostenKopen, kostenHuren, verschil, kledingstukken }
  }, [maanden, nieuweStukjesPerMaand, prijsPerStuk, abonnementPerMaand])

  return (
    <div className="rounded-lg border border-border bg-pagebg p-5 lg:p-6">
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="space-y-4">
          <div>
            <label className="mb-1 block text-sm font-medium text-slate-700">
              Periode: <span className="font-semibold text-blue-700">{maanden} maanden</span>
            </label>
            <input
              type="range"
              min="1"
              max="24"
              step="1"
              value={maanden}
              onChange={(e) => setMaanden(Number(e.target.value))}
              className="w-full accent-blue-600"
            />
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium text-slate-700">
              Nieuwe fast-fashion stuks per maand:{' '}
              <span className="font-semibold text-blue-700">{nieuweStukjesPerMaand}</span>
            </label>
            <input
              type="range"
              min="0"
              max="10"
              step="1"
              value={nieuweStukjesPerMaand}
              onChange={(e) => setNieuweStukjesPerMaand(Number(e.target.value))}
              className="w-full accent-blue-600"
            />
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium text-slate-700">
              Gemiddelde prijs per nieuw kledingstuk:{' '}
              <span className="font-semibold text-blue-700">€{prijsPerStuk}</span>
            </label>
            <input
              type="range"
              min="3"
              max="40"
              step="1"
              value={prijsPerStuk}
              onChange={(e) => setPrijsPerStuk(Number(e.target.value))}
              className="w-full accent-blue-600"
            />
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium text-slate-700">
              Kledingabonnement per maand:{' '}
              <span className="font-semibold text-blue-700">€{abonnementPerMaand}</span>
            </label>
            <input
              type="range"
              min="10"
              max="80"
              step="5"
              value={abonnementPerMaand}
              onChange={(e) => setAbonnementPerMaand(Number(e.target.value))}
              className="w-full accent-blue-600"
            />
          </div>

          <button
            onClick={() => {
              setMaanden(12)
              setNieuweStukjesPerMaand(3)
              setPrijsPerStuk(12)
              setAbonnementPerMaand(30)
            }}
            className="text-sm font-semibold text-blue-700 underline underline-offset-2"
          >
            ↺ Reset calculator
          </button>
        </div>

        <div className="rounded-md border border-border bg-white p-4 text-sm">
          <p className="mb-2 font-semibold text-slate-900">Scenario 1 · Steeds nieuwe kleding kopen</p>
          <p className="mb-3 text-slate-700">
            {kledingstukken} stuks × €{prijsPerStuk} = <strong>€{kostenKopen.toLocaleString('nl-NL')}</strong> in{' '}
            {maanden} maanden
          </p>

          <p className="mb-2 font-semibold text-slate-900">Scenario 2 · Kleding huren/leasen (abonnement)</p>
          <p className="mb-3 text-slate-700">
            {maanden} maanden × €{abonnementPerMaand} = <strong>€{kostenHuren.toLocaleString('nl-NL')}</strong>
          </p>

          <div className="mt-3 border-t border-border pt-3">
            {verschil > 0 ? (
              <>
                <p className="text-lg font-bold text-green-700">
                  Huren is €{verschil.toLocaleString('nl-NL')} goedkoper in deze periode
                </p>
                <p className="mt-2 text-slate-600">
                  Bij dit consumptiepatroon is een abonnement financieel voordeliger, en blijft het
                  kledingstuk bovendien in de kringloop in plaats van al na korte tijd bij het afval te
                  belanden.
                </p>
              </>
            ) : (
              <>
                <p className="text-lg font-bold text-red-700">
                  Kopen is €{Math.abs(verschil).toLocaleString('nl-NL')} goedkoper in deze periode
                </p>
                <p className="mt-2 text-slate-600">
                  Bij dit consumptiepatroon (weinig nieuwe stuks per maand) weegt het abonnement niet op
                  tegen het incidenteel kopen van nieuwe kleding.
                </p>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
