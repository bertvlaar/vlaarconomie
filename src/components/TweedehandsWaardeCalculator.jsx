import React, { useState, useMemo } from 'react'

// Conditiefactoren: hoeveel van de (na afschrijving berekende) waarde een
// product nog behoudt, afhankelijk van de fysieke staat. Illustratieve
// vuistregels, bedoeld om het principe van waardebepaling te oefenen.
const CONDITIES = [
  { key: 'nieuw', label: 'Nieuw (met prijskaartje)', factor: 1.0 },
  { key: 'licht', label: 'Licht gebruikt', factor: 0.8 },
  { key: 'gebruikt', label: 'Gebruikt, met sporen', factor: 0.6 },
  { key: 'sleets', label: 'Sleets / duidelijke slijtage', factor: 0.4 },
]

export default function TweedehandsWaardeCalculator() {
  const [nieuwwaarde, setNieuwwaarde] = useState(120)
  const [leeftijd, setLeeftijd] = useState(2)
  const [afschrijvingPct, setAfschrijvingPct] = useState(20)
  const [conditie, setConditie] = useState('licht')

  const { waardeNaAfschrijving, restwaarde, conditieFactor, verliesTotal, verliesPct } = useMemo(() => {
    const factor = CONDITIES.find((c) => c.key === conditie)?.factor ?? 1
    const waardeNaAfschrijving = nieuwwaarde * Math.pow(1 - afschrijvingPct / 100, leeftijd)
    const restwaarde = waardeNaAfschrijving * factor
    const verliesTotal = nieuwwaarde - restwaarde
    const verliesPct = (verliesTotal / nieuwwaarde) * 100
    return { waardeNaAfschrijving, restwaarde, conditieFactor: factor, verliesTotal, verliesPct }
  }, [nieuwwaarde, leeftijd, afschrijvingPct, conditie])

  return (
    <div className="rounded-lg border border-border bg-pagebg p-5 lg:p-6">
      <div className="grid gap-6 lg:grid-cols-2">
        <div>
          <label className="mb-1 block text-sm font-medium text-slate-700">
            Nieuwwaarde: <span className="font-semibold text-blue-700">€{nieuwwaarde}</span>
          </label>
          <input
            type="range"
            min="10"
            max="400"
            step="5"
            value={nieuwwaarde}
            onChange={(e) => setNieuwwaarde(Number(e.target.value))}
            className="w-full accent-blue-600"
          />

          <label className="mb-1 mt-4 block text-sm font-medium text-slate-700">
            Leeftijd van het product: <span className="font-semibold text-blue-700">{leeftijd} jaar</span>
          </label>
          <input
            type="range"
            min="0"
            max="6"
            step="1"
            value={leeftijd}
            onChange={(e) => setLeeftijd(Number(e.target.value))}
            className="w-full accent-blue-600"
          />

          <label className="mb-1 mt-4 block text-sm font-medium text-slate-700">
            Afschrijving per jaar: <span className="font-semibold text-blue-700">{afschrijvingPct}%</span>
          </label>
          <input
            type="range"
            min="5"
            max="50"
            step="5"
            value={afschrijvingPct}
            onChange={(e) => setAfschrijvingPct(Number(e.target.value))}
            className="w-full accent-blue-600"
          />
          <p className="mt-1 text-xs text-slate-500">
            Merken met een hoog waardebehoud schrijven doorgaans minder snel af per jaar (bijvoorbeeld
            10%), snel verouderende producten juist sneller (bijvoorbeeld 30–40%).
          </p>

          <p className="mb-1 mt-4 text-sm font-medium text-slate-700">Conditie van het product:</p>
          <div className="flex flex-wrap gap-2">
            {CONDITIES.map((c) => (
              <button
                key={c.key}
                onClick={() => setConditie(c.key)}
                className={`rounded-md border px-3 py-1.5 text-sm font-medium transition-colors ${
                  conditie === c.key
                    ? 'border-blue-500 bg-blue-50 text-blue-700'
                    : 'border-border bg-white text-slate-600 hover:bg-slate-50'
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>

          <button
            onClick={() => {
              setNieuwwaarde(120)
              setLeeftijd(2)
              setAfschrijvingPct(20)
              setConditie('licht')
            }}
            className="mt-4 text-sm font-semibold text-blue-700 underline underline-offset-2"
          >
            ↺ Reset calculator
          </button>
        </div>

        <div className="rounded-md border border-border bg-white p-4 text-sm">
          <p className="mb-2 font-semibold text-slate-900">Stap 1 · Afschrijving door leeftijd</p>
          <p className="mb-3 text-slate-700">
            €{nieuwwaarde} × (1 − {afschrijvingPct}%)<sup>{leeftijd}</sup> ={' '}
            <strong>€{waardeNaAfschrijving.toFixed(0)}</strong> na {leeftijd} jaar
          </p>

          <p className="mb-2 font-semibold text-slate-900">Stap 2 · Correctie voor conditie</p>
          <p className="mb-3 text-slate-700">
            €{waardeNaAfschrijving.toFixed(0)} × {(conditieFactor * 100).toFixed(0)}% ={' '}
            <strong>€{restwaarde.toFixed(0)}</strong> geschatte restwaarde
          </p>

          <p className="mt-3 border-t border-border pt-3 text-lg font-bold text-blue-700">
            Geschatte verkoopprijs: €{restwaarde.toFixed(0)}
          </p>
          <p className="mt-2 text-slate-600">
            Dat is een totaal waardeverlies van <strong>€{verliesTotal.toFixed(0)}</strong> (
            {verliesPct.toFixed(0)}% van de nieuwwaarde), door een combinatie van leeftijd én conditie.
          </p>
        </div>
      </div>
    </div>
  )
}
