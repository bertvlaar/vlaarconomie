import React, { useState, useMemo } from 'react'

// Vuistregel: 1000 'Gems' = €10 (net als bij veel echte in-gamevaluta's is de
// wisselkoers bewust niet rond, waardoor er bijna altijd een klein restje
// overblijft dat je niet kunt gebruiken zonder opnieuw bij te kopen).
const WISSELKOERS = 100 // 'Gems' per euro

const PAKKETTEN = [
  { gems: 500, prijsEuro: 4.99 },
  { gems: 1000, prijsEuro: 9.99 },
  { gems: 2500, prijsEuro: 22.99 },
  { gems: 6000, prijsEuro: 49.99 },
]

export default function VirtueleValutaSimulator() {
  const [itemPrijsGems, setItemPrijsGems] = useState(1350)
  const [gekozenPakket, setGekozenPakket] = useState(1)

  const { pakket, restant, extraNodig, werkelijkeEuroPrijs } = useMemo(() => {
    const pakket = PAKKETTEN[gekozenPakket]
    const nodigePakketten = Math.ceil(itemPrijsGems / pakket.gems)
    const gekochteGems = nodigePakketten * pakket.gems
    const restant = gekochteGems - itemPrijsGems
    const extraNodig = restant > 0
    const werkelijkeEuroPrijs = nodigePakketten * pakket.prijsEuro
    return { pakket, restant, extraNodig, werkelijkeEuroPrijs }
  }, [itemPrijsGems, gekozenPakket])

  const itemPrijsEuro = itemPrijsGems / WISSELKOERS

  return (
    <div className="rounded-lg border border-border bg-pagebg p-5 lg:p-6">
      <div className="space-y-5">
        <div>
          <label className="mb-1 block text-sm font-medium text-slate-700">
            Prijs van de skin: <span className="font-semibold text-blue-700">{itemPrijsGems} Gems</span>{' '}
            <span className="text-slate-500">(= €{itemPrijsEuro.toFixed(2)})</span>
          </label>
          <input
            type="range"
            min="200"
            max="6000"
            step="50"
            value={itemPrijsGems}
            onChange={(e) => setItemPrijsGems(Number(e.target.value))}
            className="w-full accent-blue-600"
          />
        </div>

        <div>
          <p className="mb-2 text-sm font-medium text-slate-700">Kies een Gems-pakket om te kopen:</p>
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
            {PAKKETTEN.map((p, i) => (
              <button
                key={p.gems}
                onClick={() => setGekozenPakket(i)}
                className={`rounded-md border p-2 text-center text-sm transition-colors ${
                  gekozenPakket === i ? 'border-blue-400 bg-blue-50 font-semibold' : 'border-border bg-white'
                }`}
              >
                {p.gems} Gems
                <br />
                <span className="text-slate-500">€{p.prijsEuro}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-5 rounded-md border border-border bg-white p-4 text-sm">
        <p className="mb-1 text-slate-500">Prijs die je op het scherm ziet</p>
        <p className="mb-4 text-xl font-bold text-slate-900">{itemPrijsGems} Gems</p>

        <p className="mb-1 text-slate-500">Werkelijke prijs in euro's, met dit pakket</p>
        <p className="mb-4 text-xl font-bold text-blue-700">€{werkelijkeEuroPrijs.toFixed(2)}</p>

        {extraNodig && (
          <p className="text-slate-600">
            Met dit pakket koop je meer Gems dan je nodig hebt: er blijft <strong>{restant} Gems</strong>{' '}
            (ongeveer €{(restant / WISSELKOERS).toFixed(2)}) ongebruikt over — vaak net genoeg om je bij een
            volgend "koopje" te verleiden.
          </p>
        )}
      </div>

      <p className="mt-3 text-sm text-slate-600">
        Zie je liever meteen "€{itemPrijsEuro.toFixed(2)}" op je scherm staan in plaats van "
        {itemPrijsGems} Gems"? Veel mensen ervaren dat euro-bedrag als een grotere uitgave, ook al is het
        exact hetzelfde geld.
      </p>
    </div>
  )
}
