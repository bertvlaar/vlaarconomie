import React, { useState, useMemo } from 'react'

export default function LootboxKansSimulator() {
  const [dropkans, setDropkans] = useState(2)
  const [prijsPerBox, setPrijsPerBox] = useState(1.5)
  const [geopend, setGeopend] = useState(0)
  const [gekregen, setGekregen] = useState(false)
  const [pogingen, setPogingen] = useState(0)

  const verwachtAantalBoxes = useMemo(() => (100 / dropkans).toFixed(0), [dropkans])
  const verwachteKosten = useMemo(
    () => ((100 / dropkans) * prijsPerBox).toFixed(2),
    [dropkans, prijsPerBox],
  )

  const openLootbox = () => {
    setPogingen((p) => p + 1)
    const kans = Math.random() * 100
    setGeopend((g) => g + 1)
    if (kans < dropkans) {
      setGekregen(true)
    }
  }

  const reset = () => {
    setGeopend(0)
    setGekregen(false)
    setPogingen(0)
  }

  const totaleKosten = geopend * prijsPerBox

  return (
    <div className="rounded-lg border border-border bg-pagebg p-5 lg:p-6">
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="space-y-5">
          <div>
            <label className="mb-1 block text-sm font-medium text-slate-700">
              Kans op het zeldzame item per lootbox:{' '}
              <span className="font-semibold text-blue-700">{dropkans}%</span>
            </label>
            <input
              type="range"
              min="0.5"
              max="20"
              step="0.5"
              value={dropkans}
              onChange={(e) => {
                setDropkans(Number(e.target.value))
                reset()
              }}
              className="w-full accent-blue-600"
            />
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium text-slate-700">
              Prijs per lootbox: <span className="font-semibold text-blue-700">€{prijsPerBox.toFixed(2)}</span>
            </label>
            <input
              type="range"
              min="0.5"
              max="5"
              step="0.5"
              value={prijsPerBox}
              onChange={(e) => {
                setPrijsPerBox(Number(e.target.value))
                reset()
              }}
              className="w-full accent-blue-600"
            />
          </div>

          <div className="rounded-md border border-border bg-white p-4 text-sm">
            <p className="text-slate-500">Gemiddeld verwacht aantal lootboxes nodig</p>
            <p className="text-xl font-bold text-slate-900">{verwachtAantalBoxes} boxes</p>
            <p className="mt-2 text-slate-500">Gemiddeld verwachte kosten voor het zeldzame item</p>
            <p className="text-xl font-bold text-blue-700">€{verwachteKosten}</p>
          </div>
        </div>

        <div className="rounded-md border border-border bg-white p-4 text-sm">
          <p className="mb-3 text-slate-700">
            Klik hieronder om (virtueel, gratis) lootboxes te "openen" en zie zelf hoe lang het duurt voordat
            je het zeldzame item krijgt.
          </p>
          <button
            onClick={openLootbox}
            disabled={gekregen}
            className="mb-4 w-full rounded-md bg-action px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
          >
            🎁 Open een lootbox
          </button>

          <div className="space-y-1 text-slate-700">
            <p>
              Geopende lootboxes: <strong>{geopend}</strong>
            </p>
            <p>
              Uitgegeven bedrag: <strong>€{totaleKosten.toFixed(2)}</strong>
            </p>
          </div>

          {gekregen && (
            <p className="mt-3 rounded-md border border-green-200 bg-green-50 p-3 font-medium text-green-800">
              🎉 Je hebt het zeldzame item gekregen na {geopend} lootbox(en), voor €{totaleKosten.toFixed(2)}.
            </p>
          )}

          <button onClick={reset} className="mt-3 text-sm font-semibold text-blue-700 underline underline-offset-2">
            ↺ Opnieuw beginnen
          </button>
        </div>
      </div>
    </div>
  )
}
