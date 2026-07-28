import React, { useState, useMemo } from 'react'

// Doorlopend voorbeeld (zie les 7.3): pretpark "Fantasialand".
// Basisprijs vast op €40. De leerling stelt de verwachte vraag bij die
// basisprijs, de maximale capaciteit en de prijselasticiteit in, en de
// simulator berekent hoe hard de prijs omhoog (of omlaag) moet om de vraag
// precies op de capaciteit uit te laten komen.
const BASISPRIJS = 40

export default function DynamicPricingSimulator() {
  const [verwachteVraag, setVerwachteVraag] = useState(25000)
  const [capaciteit, setCapaciteit] = useState(20000)
  const [elasticiteit, setElasticiteit] = useState(-0.8)

  const { percentageVraagVerandering, percentagePrijsVerandering, nieuwePrijs, richting } = useMemo(() => {
    const percentageVraagVerandering = ((capaciteit - verwachteVraag) / verwachteVraag) * 100
    // elasticiteit = %ΔQ / %ΔP  ⇒  %ΔP = %ΔQ / elasticiteit
    const percentagePrijsVerandering = percentageVraagVerandering / elasticiteit
    const nieuwePrijs = BASISPRIJS * (1 + percentagePrijsVerandering / 100)
    const richting = percentagePrijsVerandering > 0.5 ? 'omhoog' : percentagePrijsVerandering < -0.5 ? 'omlaag' : 'gelijk'
    return { percentageVraagVerandering, percentagePrijsVerandering, nieuwePrijs, richting }
  }, [verwachteVraag, capaciteit, elasticiteit])

  return (
    <div className="rounded-lg border border-border bg-pagebg p-5 lg:p-6">
      <div className="grid gap-6 lg:grid-cols-2">
        <div>
          <label className="mb-1 block text-sm font-medium text-slate-700">
            Verwachte vraag bij de basisprijs van €{BASISPRIJS}:{' '}
            <span className="font-semibold text-blue-700">{verwachteVraag.toLocaleString('nl-NL')} bezoekers</span>
          </label>
          <input
            type="range"
            min="10000"
            max="30000"
            step="500"
            value={verwachteVraag}
            onChange={(e) => setVerwachteVraag(Number(e.target.value))}
            className="w-full accent-blue-600"
          />

          <label className="mb-1 mt-4 block text-sm font-medium text-slate-700">
            Maximale capaciteit: <span className="font-semibold text-blue-700">{capaciteit.toLocaleString('nl-NL')} bezoekers</span>
          </label>
          <input
            type="range"
            min="10000"
            max="30000"
            step="500"
            value={capaciteit}
            onChange={(e) => setCapaciteit(Number(e.target.value))}
            className="w-full accent-blue-600"
          />

          <p className="mb-1 mt-4 text-sm font-medium text-slate-700">
            Prijselasticiteit van de vraag: <span className="font-semibold text-blue-700">{elasticiteit.toFixed(1)}</span>
          </p>
          <div className="flex flex-wrap gap-2">
            {[-0.3, -0.8, -1.2, -1.6].map((e) => (
              <button
                key={e}
                onClick={() => setElasticiteit(e)}
                className={`rounded-md border px-3 py-1.5 text-sm font-medium transition-colors ${
                  elasticiteit === e
                    ? 'border-blue-500 bg-blue-50 text-blue-700'
                    : 'border-border bg-white text-slate-600 hover:bg-slate-50'
                }`}
              >
                {e.toFixed(1)}
              </button>
            ))}
          </div>
          <p className="mt-1 text-xs text-slate-500">
            Hoe dichter bij 0, hoe inelastischer de vraag: dan is een grotere prijsstijging nodig voor hetzelfde effect.
          </p>

          <button
            onClick={() => {
              setVerwachteVraag(25000)
              setCapaciteit(20000)
              setElasticiteit(-0.8)
            }}
            className="mt-4 text-sm font-semibold text-blue-700 underline underline-offset-2"
          >
            ↺ Reset simulator (Fantasialand-voorbeeld)
          </button>
        </div>

        <div className="rounded-md border border-border bg-white p-4 text-sm">
          <p className="mb-2 font-semibold text-slate-900">Benodigde aanpassing</p>
          <p className="mb-3 text-slate-700">
            Om de vraag van {verwachteVraag.toLocaleString('nl-NL')} bezoekers terug te brengen naar de capaciteit van{' '}
            {capaciteit.toLocaleString('nl-NL')}, moet de vraag met{' '}
            <strong>{percentageVraagVerandering.toFixed(1)}%</strong> {percentageVraagVerandering < 0 ? 'dalen' : 'stijgen'}.
          </p>
          <p className="mb-3 text-slate-700">
            Bij een prijselasticiteit van {elasticiteit.toFixed(1)} betekent dit dat de prijs met{' '}
            <strong>{Math.abs(percentagePrijsVerandering).toFixed(1)}%</strong> {richting} moet.
          </p>
          <p className="mt-3 border-t border-border pt-3 text-lg font-bold text-blue-700">
            Geadviseerde prijs: €{nieuwePrijs.toFixed(0)}
          </p>
          <p className="mt-2 text-slate-600">
            {richting === 'omhoog' &&
              'De prijs moet omhoog om piekbelasting te voorkomen: minder impulsieve bezoekers, precies genoeg om binnen de capaciteit te blijven.'}
            {richting === 'omlaag' &&
              'De prijs moet omlaag om extra bezoekers te trekken en de anders onbenutte capaciteit te benutten.'}
            {richting === 'gelijk' &&
              'De verwachte vraag komt al vrijwel overeen met de capaciteit: de basisprijs hoeft nauwelijks aangepast te worden.'}
          </p>
        </div>
      </div>
    </div>
  )
}
