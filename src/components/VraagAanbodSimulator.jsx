import React, { useState, useMemo } from 'react'

// Vereenvoudigd, lineair vraagmodel voor een pretpark-dagkaart:
// gevraagde hoeveelheid = 40.000 − 500 × prijs.
// Bij €40 is de gevraagde hoeveelheid dus 40.000 − 20.000 = 20.000 bezoekers.
// Het aanbod (de capaciteit) is op de korte termijn vast en instelbaar door de leerling.
const VRAAG_BIJ_NUL = 40000
const VRAAG_HELLING = 500 // afname in bezoekers per euro prijsstijging

function berekenVraag(prijs) {
  return Math.max(0, Math.round(VRAAG_BIJ_NUL - VRAAG_HELLING * prijs))
}

export default function VraagAanbodSimulator() {
  const [prijs, setPrijs] = useState(40)
  const [capaciteit, setCapaciteit] = useState(20000)

  const { vraag, verschil, status, evenwichtsprijs } = useMemo(() => {
    const vraag = berekenVraag(prijs)
    const verschil = vraag - capaciteit
    let status = 'evenwicht'
    if (verschil > 250) status = 'tekort'
    else if (verschil < -250) status = 'overschot'
    const evenwichtsprijs = (VRAAG_BIJ_NUL - capaciteit) / VRAAG_HELLING
    return { vraag, verschil, status, evenwichtsprijs }
  }, [prijs, capaciteit])

  return (
    <div className="rounded-lg border border-border bg-pagebg p-5 lg:p-6">
      <div className="grid gap-6 lg:grid-cols-2">
        <div>
          <label className="mb-1 block text-sm font-medium text-slate-700">
            Prijs van een dagkaart: <span className="font-semibold text-blue-700">€{prijs}</span>
          </label>
          <input
            type="range"
            min="20"
            max="80"
            step="1"
            value={prijs}
            onChange={(e) => setPrijs(Number(e.target.value))}
            className="w-full accent-blue-600"
          />

          <label className="mb-1 mt-4 block text-sm font-medium text-slate-700">
            Maximale capaciteit (aanbod): <span className="font-semibold text-blue-700">{capaciteit.toLocaleString('nl-NL')} bezoekers</span>
          </label>
          <input
            type="range"
            min="10000"
            max="30000"
            step="1000"
            value={capaciteit}
            onChange={(e) => setCapaciteit(Number(e.target.value))}
            className="w-full accent-blue-600"
          />
          <p className="mt-1 text-xs text-slate-500">
            De capaciteit staat op de korte termijn vrijwel vast; alleen de prijs kan snel worden aangepast.
          </p>

          <button
            onClick={() => setPrijs(Math.round(evenwichtsprijs))}
            className="mt-4 rounded-md border border-blue-300 bg-blue-50 px-3 py-1.5 text-sm font-medium text-blue-700 transition-colors hover:bg-blue-100"
          >
            🎯 Zet prijs op de evenwichtsprijs
          </button>
        </div>

        <div className="rounded-md border border-border bg-white p-4 text-sm">
          <p className="mb-2 font-semibold text-slate-900">Bij €{prijs} per kaartje</p>
          <p className="mb-3 text-slate-700">
            Gevraagde hoeveelheid: <strong>{vraag.toLocaleString('nl-NL')}</strong> bezoekers
            <br />
            Aangeboden hoeveelheid (capaciteit): <strong>{capaciteit.toLocaleString('nl-NL')}</strong> bezoekers
          </p>

          {status === 'tekort' && (
            <p className="mb-3 rounded-md border border-red-200 bg-red-50 p-3 text-red-800">
              ⚠️ <strong>Tekort van {(vraag - capaciteit).toLocaleString('nl-NL')} bezoekers.</strong> Er willen meer
              mensen naar binnen dan het park aankan: lange wachtrijen en een uitverkocht park liggen op de loer.
            </p>
          )}
          {status === 'overschot' && (
            <p className="mb-3 rounded-md border border-amber-200 bg-amber-50 p-3 text-amber-900">
              📉 <strong>Overschot van {(capaciteit - vraag).toLocaleString('nl-NL')} plekken.</strong> Er is meer
              capaciteit dan er vraag is: attracties en personeel blijven deels onbenut.
            </p>
          )}
          {status === 'evenwicht' && (
            <p className="mb-3 rounded-md border border-green-200 bg-green-50 p-3 text-green-900">
              ✅ <strong>(Vrijwel) evenwicht!</strong> De gevraagde hoeveelheid komt overeen met de aangeboden
              hoeveelheid: geen tekort en geen overschot.
            </p>
          )}

          <p className="mt-3 border-t border-border pt-3 text-slate-700">
            Bij deze capaciteit ligt de <strong>evenwichtsprijs</strong> rond de{' '}
            <strong className="text-blue-700">€{evenwichtsprijs.toFixed(0)}</strong> per kaartje.
          </p>
        </div>
      </div>
    </div>
  )
}
