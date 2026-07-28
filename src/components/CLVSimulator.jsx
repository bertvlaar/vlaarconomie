import React, { useState, useMemo } from 'react'

export default function CLVSimulator() {
  const [maandprijs, setMaandprijs] = useState(12)
  const [churn, setChurn] = useState(5)

  const { gemiddeldeLooptijd, clv } = useMemo(() => {
    const churnFractie = churn / 100
    const gemiddeldeLooptijd = churnFractie > 0 ? 1 / churnFractie : 0
    const clv = maandprijs * gemiddeldeLooptijd
    return { gemiddeldeLooptijd, clv }
  }, [maandprijs, churn])

  return (
    <div className="rounded-lg border border-border bg-pagebg p-5 lg:p-6">
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="space-y-5">
          <div>
            <label className="mb-1 block text-sm font-medium text-slate-700">
              Maandprijs van het abonnement: <span className="font-semibold text-blue-700">€{maandprijs}</span>
            </label>
            <input
              type="range"
              min="3"
              max="40"
              step="1"
              value={maandprijs}
              onChange={(e) => setMaandprijs(Number(e.target.value))}
              className="w-full accent-blue-600"
            />
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium text-slate-700">
              Churn: percentage abonnees dat per maand opzegt:{' '}
              <span className="font-semibold text-blue-700">{churn}%</span>
            </label>
            <input
              type="range"
              min="1"
              max="20"
              step="1"
              value={churn}
              onChange={(e) => setChurn(Number(e.target.value))}
              className="w-full accent-blue-600"
            />
          </div>

          <button
            onClick={() => {
              setMaandprijs(12)
              setChurn(5)
            }}
            className="text-sm font-semibold text-blue-700 underline underline-offset-2"
          >
            ↺ Reset calculator
          </button>
        </div>

        <div className="rounded-md border border-border bg-white p-4 text-sm">
          <p className="mb-1 text-slate-500">Gemiddelde abonnementsduur (1 ÷ churn)</p>
          <p className="mb-4 text-2xl font-bold text-slate-900">
            {gemiddeldeLooptijd.toFixed(1)} maanden
          </p>

          <p className="mb-1 text-slate-500">Customer Lifetime Value (CLV)</p>
          <p className="mb-4 text-2xl font-bold text-blue-700">€{clv.toFixed(2)}</p>

          <p className="text-slate-600">
            Bij een churn van {churn}% blijft een gemiddelde abonnee ongeveer{' '}
            {gemiddeldeLooptijd.toFixed(1)} maanden. In die tijd levert deze abonnee het bedrijf gemiddeld
            €{clv.toFixed(2)} op. Hoe lager de churn, hoe langer klanten blijven en hoe hoger de CLV — daarom
            investeren bedrijven zoveel moeite in het lastig maken van opzeggen.
          </p>
        </div>
      </div>
    </div>
  )
}
