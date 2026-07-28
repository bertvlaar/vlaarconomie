import React, { useState, useMemo } from 'react'

// Illustratieve, veelgebruikte vuistregel voor de opbouw van de verkoopprijs
// van een fast-fashion T-shirt. Docent: vervang of actualiseer met recenter
// onderzoek (bijvoorbeeld van de Clean Clothes Campagne) indien gewenst.
const ONDERDELEN = [
  { key: 'grondstof', label: 'Grondstof (katoen/polyester)', deel: 0.06, kleur: 'bg-amber-500' },
  { key: 'arbeid', label: 'Arbeid & naaien in de fabriek', deel: 0.04, kleur: 'bg-docent' },
  { key: 'transport', label: 'Transport & logistiek', deel: 0.05, kleur: 'bg-slate-400' },
  { key: 'marketing', label: 'Marketing & winkelkosten', deel: 0.35, kleur: 'bg-blue-400' },
  { key: 'winst', label: 'Winst van het merk', deel: 0.15, kleur: 'bg-green-500' },
  { key: 'belasting', label: 'Belasting (btw)', deel: 0.17, kleur: 'bg-purple-400' },
  { key: 'overig', label: 'Overige kosten (o.a. import, verpakking)', deel: 0.18, kleur: 'bg-pink-400' },
]

export default function KostprijsSimulator() {
  const [verkoopprijs, setVerkoopprijs] = useState(5)

  const bedragen = useMemo(
    () => ONDERDELEN.map((o) => ({ ...o, bedrag: verkoopprijs * o.deel })),
    [verkoopprijs],
  )

  const kostprijsAandeel = bedragen[0].bedrag + bedragen[1].bedrag + bedragen[2].bedrag
  const winstBedrag = bedragen.find((b) => b.key === 'winst').bedrag

  return (
    <div className="rounded-lg border border-border bg-pagebg p-5 lg:p-6">
      <label className="mb-1 block text-sm font-medium text-slate-700">
        Verkoopprijs van het T-shirt: <span className="font-semibold text-blue-700">€{verkoopprijs.toFixed(2)}</span>
      </label>
      <input
        type="range"
        min="3"
        max="40"
        step="1"
        value={verkoopprijs}
        onChange={(e) => setVerkoopprijs(Number(e.target.value))}
        className="w-full accent-blue-600"
      />
      <button
        onClick={() => setVerkoopprijs(5)}
        className="mt-2 text-sm font-semibold text-blue-700 underline underline-offset-2"
      >
        ↺ Reset naar €5 (fast fashion)
      </button>

      <div className="mt-5 flex h-8 w-full overflow-hidden rounded-md border border-border">
        {bedragen.map((b) => (
          <div
            key={b.key}
            className={b.kleur}
            style={{ width: `${b.deel * 100}%` }}
            title={`${b.label}: €${b.bedrag.toFixed(2)}`}
          />
        ))}
      </div>

      <div className="mt-4 space-y-1.5 rounded-md border border-border bg-white p-4 text-sm">
        {bedragen.map((b) => (
          <p key={b.key} className="flex items-center justify-between text-slate-700">
            <span className="flex items-center gap-2">
              <span className={`inline-block h-3 w-3 rounded-sm ${b.kleur}`} aria-hidden="true" />
              {b.label} ({(b.deel * 100).toFixed(0)}%)
            </span>
            <strong>€{b.bedrag.toFixed(2)}</strong>
          </p>
        ))}
      </div>

      <p className="mt-3 text-sm text-slate-600">
        Bij een verkoopprijs van €{verkoopprijs.toFixed(2)} gaat er slechts{' '}
        <strong>€{kostprijsAandeel.toFixed(2)}</strong> naar grondstof, arbeid en transport samen — de
        schakels die je T-shirt fysiek maken. Het merk houdt zelf <strong>€{winstBedrag.toFixed(2)}</strong>{' '}
        winst over, ook al lijkt een T-shirt van een paar euro nauwelijks winstgevend.
      </p>
    </div>
  )
}
