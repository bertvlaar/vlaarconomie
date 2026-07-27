import React, { useState, useMemo } from 'react'

// Illustratieve verdeling van de verkoopprijs van een smartphone over de
// schakels van de wereldwijde waardeketen, gebaseerd op het doorlopend
// voorbeeld uit dit thema (iPhone van € 1.000). Docent: vervang of
// actualiseer met recent onderzoek indien beschikbaar.
const VERDELING = [
  { key: 'grondstoffen', label: 'Grondstoffen (kobalt/coltan uit Congo)', deel: 0.02, kleur: 'bg-amber-500' },
  { key: 'assemblage', label: 'Assemblage in Chinese fabrieken', deel: 0.03, kleur: 'bg-docent' },
  { key: 'chips', label: 'Chips & schermen uit Zuid-Korea/Taiwan', deel: 0.25, kleur: 'bg-blue-400' },
  { key: 'winst', label: 'Winst, marges & distributie elders', deel: 0.2, kleur: 'bg-slate-400' },
  { key: 'ontwerp', label: 'Ontwerp, software, merk & marketing (VS)', deel: 0.5, kleur: 'bg-green-500' },
]

export default function IPhoneWaardeketenSimulator() {
  const [prijs, setPrijs] = useState(1000)

  const bedragen = useMemo(
    () => VERDELING.map((v) => ({ ...v, bedrag: prijs * v.deel })),
    [prijs],
  )

  const fysiekAandeel = bedragen[0].bedrag + bedragen[1].bedrag
  const kennisAandeel = bedragen[4].bedrag

  return (
    <div className="rounded-lg border border-border bg-pagebg p-5 lg:p-6">
      <label className="mb-1 block text-sm font-medium text-slate-700">
        Verkoopprijs van de smartphone: <span className="font-semibold text-blue-700">€{prijs}</span>
      </label>
      <input
        type="range"
        min="300"
        max="1600"
        step="50"
        value={prijs}
        onChange={(e) => setPrijs(Number(e.target.value))}
        className="w-full accent-blue-600"
      />

      <div className="mt-5 flex h-8 w-full overflow-hidden rounded-md border border-border">
        {bedragen.map((b) => (
          <div
            key={b.key}
            className={b.kleur}
            style={{ width: `${b.deel * 100}%` }}
            title={`${b.label}: €${b.bedrag.toFixed(0)}`}
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
            <strong>€{b.bedrag.toFixed(0)}</strong>
          </p>
        ))}
      </div>

      <p className="mt-3 text-sm text-slate-600">
        Bij een verkoopprijs van €{prijs} nemen grondstofwinning en assemblage samen (de fysiek
        zwaarste schakels) slechts <strong>€{fysiekAandeel.toFixed(0)}</strong> voor hun rekening,
        terwijl ontwerp, software en merk alleen al <strong>€{kennisAandeel.toFixed(0)}</strong>{' '}
        aan toegevoegde waarde vertegenwoordigen: de "smiling curve" in actie.
      </p>
    </div>
  )
}
