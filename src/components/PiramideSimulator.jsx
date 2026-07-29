import React, { useState, useMemo } from 'react'

export default function PiramideSimulator() {
  const [wervingPerPersoon, setWervingPerPersoon] = useState(3)
  const [niveaus, setNiveaus] = useState(8)

  const { totaalDeelnemers, perNiveau, nlBevolking, stort } = useMemo(() => {
    const nlBevolking = 17_800_000
    let perNiveau = []
    let totaal = 1 // de bedenker
    let huidigNiveau = 1
    for (let i = 1; i <= niveaus; i++) {
      huidigNiveau = huidigNiveau * wervingPerPersoon
      perNiveau.push(huidigNiveau)
      totaal += huidigNiveau
    }
    return {
      totaalDeelnemers: totaal,
      perNiveau,
      nlBevolking,
      stort: totaal > nlBevolking,
    }
  }, [wervingPerPersoon, niveaus])

  return (
    <div className="rounded-lg border border-border bg-pagebg p-5 lg:p-6">
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="space-y-5">
          <div>
            <label className="mb-1 block text-sm font-medium text-slate-700">
              Elke deelnemer werft: <span className="font-semibold text-blue-700">{wervingPerPersoon} nieuwe mensen</span>
            </label>
            <input
              type="range"
              min="2"
              max="6"
              step="1"
              value={wervingPerPersoon}
              onChange={(e) => setWervingPerPersoon(Number(e.target.value))}
              className="w-full accent-blue-600"
            />
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium text-slate-700">
              Aantal niveaus (rondes van werving):{' '}
              <span className="font-semibold text-blue-700">{niveaus}</span>
            </label>
            <input
              type="range"
              min="1"
              max="15"
              step="1"
              value={niveaus}
              onChange={(e) => setNiveaus(Number(e.target.value))}
              className="w-full accent-blue-600"
            />
          </div>
        </div>

        <div className="rounded-md border border-border bg-white p-4 text-sm">
          <p className="text-slate-500">Totaal aantal benodigde deelnemers</p>
          <p className="mb-3 text-2xl font-bold text-slate-900">
            {totaalDeelnemers.toLocaleString('nl-NL')}
          </p>

          <p className="text-slate-500">Ter vergelijking: inwoners van Nederland</p>
          <p className="mb-3 text-lg font-semibold text-slate-700">
            {nlBevolking.toLocaleString('nl-NL')}
          </p>

          {stort ? (
            <p className="rounded-md border border-red-200 bg-red-50 p-3 font-medium text-red-800">
              💥 Bij niveau {niveaus} zijn er al meer deelnemers nodig dan heel Nederland telt. Het systeem
              kán niet blijven bestaan.
            </p>
          ) : (
            <p className="rounded-md border border-amber-200 bg-amber-50 p-3 text-amber-800">
              Nog binnen de bevolking van Nederland — maar reken door naar meer niveaus en zie hoe snel dit
              omslaat.
            </p>
          )}
        </div>
      </div>

      <p className="mt-4 text-sm text-slate-600">
        Bij elk extra niveau wordt het aantal benodigde nieuwe deelnemers vermenigvuldigd met{' '}
        {wervingPerPersoon}. Dit heet exponentiële groei: in het begin lijkt het beheersbaar, maar binnen
        een handvol niveaus is er al een onmogelijk groot aantal mensen nodig om iedereen uit te betalen.
      </p>
    </div>
  )
}
