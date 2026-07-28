import React, { useState, useMemo } from 'react'

const VOORBEELDEN = [
  { naam: 'Streamingdienst (bv. Netflix)', prijs: 12.99 },
  { naam: 'Muziekstreaming (bv. Spotify)', prijs: 11.99 },
  { naam: 'Cloudopslag (extra iCloud/Google-opslag)', prijs: 2.99 },
  { naam: 'Sportschoolabonnement', prijs: 29.95 },
  { naam: 'Maaltijdbox (bv. HelloFresh)', prijs: 49.0 },
  { naam: 'Gaming-abonnement', prijs: 9.99 },
]

export default function AbonnementenOverzichtSimulator() {
  const [aangevinkt, setAangevinkt] = useState(() =>
    Object.fromEntries(VOORBEELDEN.map((v, i) => [i, i < 3])),
  )

  const { maandtotaal, jaartotaal, aantal } = useMemo(() => {
    let maandtotaal = 0
    let aantal = 0
    VOORBEELDEN.forEach((v, i) => {
      if (aangevinkt[i]) {
        maandtotaal += v.prijs
        aantal += 1
      }
    })
    return { maandtotaal, jaartotaal: maandtotaal * 12, aantal }
  }, [aangevinkt])

  return (
    <div className="rounded-lg border border-border bg-pagebg p-5 lg:p-6">
      <p className="mb-4 text-sm font-medium text-slate-700">
        Vink aan welke abonnementen jij (of je gezin) hebt lopen, en bekijk wat ze samen kosten.
      </p>
      <div className="grid gap-2 sm:grid-cols-2">
        {VOORBEELDEN.map((v, i) => (
          <label
            key={v.naam}
            className={`flex cursor-pointer items-center justify-between gap-3 rounded-md border p-3 text-sm transition-colors ${
              aangevinkt[i] ? 'border-blue-300 bg-blue-50' : 'border-border bg-white'
            }`}
          >
            <span className="flex items-center gap-2 text-slate-700">
              <input
                type="checkbox"
                checked={!!aangevinkt[i]}
                onChange={() => setAangevinkt((a) => ({ ...a, [i]: !a[i] }))}
                className="accent-blue-600"
              />
              {v.naam}
            </span>
            <span className="font-semibold text-slate-800">€{v.prijs.toFixed(2)}</span>
          </label>
        ))}
      </div>

      <div className="mt-5 grid gap-4 rounded-md border border-border bg-white p-4 text-sm sm:grid-cols-3">
        <div>
          <p className="text-slate-500">Aantal abonnementen</p>
          <p className="text-xl font-bold text-slate-900">{aantal}</p>
        </div>
        <div>
          <p className="text-slate-500">Per maand</p>
          <p className="text-xl font-bold text-blue-700">€{maandtotaal.toFixed(2)}</p>
        </div>
        <div>
          <p className="text-slate-500">Per jaar</p>
          <p className="text-xl font-bold text-blue-700">€{jaartotaal.toFixed(2)}</p>
        </div>
      </div>

      <p className="mt-3 text-sm text-slate-600">
        Elk bedrag apart lijkt klein, maar samen kan dit oplopen tot honderden euro's per jaar — geld dat
        maandelijks automatisch wordt afgeschreven, ook in maanden dat je een dienst nauwelijks gebruikt.
      </p>
    </div>
  )
}
