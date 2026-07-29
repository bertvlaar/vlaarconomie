import React, { useState, useMemo } from 'react'

const OPTIES = [
  { key: 'sparen', label: 'Spaarrekening', rendementPerJaar: 2, kleur: 'bg-slate-400' },
  { key: 'aandelen', label: 'Aandelen (lange termijn gemiddeld)', rendementPerJaar: 7, kleur: 'bg-docent' },
  { key: 'guru', label: 'Belofte van de "guru"', rendementPerJaar: null, kleur: 'bg-red-500' },
]

export default function RendementSimulator() {
  const [inleg, setInleg] = useState(500)
  const [maanden, setMaanden] = useState(12)
  const [guruPercentagePerWeek, setGuruPercentagePerWeek] = useState(20)

  const resultaten = useMemo(() => {
    const weken = (maanden / 12) * 52

    const sparen = inleg * Math.pow(1 + 2 / 100, maanden / 12)
    const aandelen = inleg * Math.pow(1 + 7 / 100, maanden / 12)
    const guru = inleg * Math.pow(1 + guruPercentagePerWeek / 100, weken)

    return { sparen, aandelen, guru }
  }, [inleg, maanden, guruPercentagePerWeek])

  const formatEuro = (n) => {
    if (!isFinite(n) || n > 1e15) return 'astronomisch (> 1.000 biljard €)'
    return '€' + n.toLocaleString('nl-NL', { maximumFractionDigits: 0 })
  }

  return (
    <div className="rounded-lg border border-border bg-pagebg p-5 lg:p-6">
      <div className="space-y-5">
        <div>
          <label className="mb-1 block text-sm font-medium text-slate-700">
            Startinleg: <span className="font-semibold text-blue-700">€{inleg}</span>
          </label>
          <input
            type="range"
            min="100"
            max="5000"
            step="100"
            value={inleg}
            onChange={(e) => setInleg(Number(e.target.value))}
            className="w-full accent-blue-600"
          />
        </div>

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
            Beloofd rendement van de "guru":{' '}
            <span className="font-semibold text-red-600">{guruPercentagePerWeek}% per week</span>
          </label>
          <input
            type="range"
            min="1"
            max="20"
            step="1"
            value={guruPercentagePerWeek}
            onChange={(e) => setGuruPercentagePerWeek(Number(e.target.value))}
            className="w-full accent-red-500"
          />
        </div>
      </div>

      <div className="mt-5 space-y-3">
        <div className="rounded-md border border-border bg-white p-4 text-sm">
          <div className="flex items-center justify-between">
            <span className="flex items-center gap-2 font-medium text-slate-700">
              <span className="inline-block h-3 w-3 rounded-sm bg-slate-400" /> Spaarrekening (2% per jaar)
            </span>
            <strong className="text-slate-900">{formatEuro(resultaten.sparen)}</strong>
          </div>
        </div>
        <div className="rounded-md border border-border bg-white p-4 text-sm">
          <div className="flex items-center justify-between">
            <span className="flex items-center gap-2 font-medium text-slate-700">
              <span className="inline-block h-3 w-3 rounded-sm bg-docent" /> Aandelen (7% per jaar, lange termijn)
            </span>
            <strong className="text-slate-900">{formatEuro(resultaten.aandelen)}</strong>
          </div>
        </div>
        <div className="rounded-md border border-red-200 bg-red-50 p-4 text-sm">
          <div className="flex items-center justify-between">
            <span className="flex items-center gap-2 font-medium text-red-700">
              <span className="inline-block h-3 w-3 rounded-sm bg-red-500" /> Belofte van de "guru" ({guruPercentagePerWeek}% per week)
            </span>
            <strong className="text-red-800">{formatEuro(resultaten.guru)}</strong>
          </div>
        </div>
      </div>

      <p className="mt-3 text-sm text-slate-600">
        Zelfs bij een "bescheiden" belofte van {guruPercentagePerWeek}% per week loopt jouw inleg van €
        {inleg} binnen {maanden} maanden op tot een bedrag dat economisch onmogelijk is. Geen enkele legale
        belegging ter wereld haalt dit structureel — en dat is precies waarom dit soort beloften een teken
        van fraude zijn, geen kans.
      </p>
    </div>
  )
}
