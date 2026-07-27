import React, { useState, useMemo } from 'react'

export default function TerugverdientijdSimulator() {
  const [studieduur, setStudieduur] = useState(4)
  const [directeKostenPerJaar, setDirecteKostenPerJaar] = useState(2000)
  const [loonZonderStudie, setLoonZonderStudie] = useState(20000)
  const [loonMetStudie, setLoonMetStudie] = useState(28000)

  const { directeKosten, gederfdeInkomsten, totaleInvestering, loonpremie, terugverdientijd } = useMemo(() => {
    const directeKosten = studieduur * directeKostenPerJaar
    const gederfdeInkomsten = studieduur * loonZonderStudie
    const totaleInvestering = directeKosten + gederfdeInkomsten
    const loonpremie = loonMetStudie - loonZonderStudie
    const terugverdientijd = loonpremie > 0 ? totaleInvestering / loonpremie : null
    return { directeKosten, gederfdeInkomsten, totaleInvestering, loonpremie, terugverdientijd }
  }, [studieduur, directeKostenPerJaar, loonZonderStudie, loonMetStudie])

  return (
    <div className="rounded-lg border border-border bg-pagebg p-5 lg:p-6">
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="space-y-4">
          <div>
            <label className="mb-1 block text-sm font-medium text-slate-700">
              Studieduur: <span className="font-semibold text-blue-700">{studieduur} jaar</span>
            </label>
            <input
              type="range"
              min="1"
              max="6"
              step="1"
              value={studieduur}
              onChange={(e) => setStudieduur(Number(e.target.value))}
              className="w-full accent-blue-600"
            />
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium text-slate-700">
              Directe kosten (collegegeld/boeken) per jaar:{' '}
              <span className="font-semibold text-blue-700">€{directeKostenPerJaar}</span>
            </label>
            <input
              type="range"
              min="0"
              max="10000"
              step="250"
              value={directeKostenPerJaar}
              onChange={(e) => setDirecteKostenPerJaar(Number(e.target.value))}
              className="w-full accent-blue-600"
            />
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium text-slate-700">
              Jaarloon zónder de studie (bv. direct werken):{' '}
              <span className="font-semibold text-blue-700">€{loonZonderStudie}</span>
            </label>
            <input
              type="range"
              min="15000"
              max="35000"
              step="500"
              value={loonZonderStudie}
              onChange={(e) => setLoonZonderStudie(Number(e.target.value))}
              className="w-full accent-blue-600"
            />
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium text-slate-700">
              Jaarloon mét de studie (na afstuderen):{' '}
              <span className="font-semibold text-blue-700">€{loonMetStudie}</span>
            </label>
            <input
              type="range"
              min="15000"
              max="60000"
              step="500"
              value={loonMetStudie}
              onChange={(e) => setLoonMetStudie(Number(e.target.value))}
              className="w-full accent-blue-600"
            />
          </div>

          <button
            onClick={() => {
              setStudieduur(4)
              setDirecteKostenPerJaar(2000)
              setLoonZonderStudie(20000)
              setLoonMetStudie(28000)
            }}
            className="text-sm font-semibold text-blue-700 underline underline-offset-2"
          >
            ↺ Reset naar Yasmin &amp; Bram
          </button>
        </div>

        <div className="rounded-md border border-border bg-white p-4 text-sm">
          <p className="mb-2 font-semibold text-slate-900">Directe kosten</p>
          <p className="mb-3 text-slate-700">
            {studieduur} jaar × €{directeKostenPerJaar} = <strong>€{directeKosten.toLocaleString('nl-NL')}</strong>
          </p>
          <p className="mb-2 font-semibold text-slate-900">Gederfde inkomsten</p>
          <p className="mb-3 text-slate-700">
            {studieduur} jaar × €{loonZonderStudie.toLocaleString('nl-NL')} ={' '}
            <strong>€{gederfdeInkomsten.toLocaleString('nl-NL')}</strong>
          </p>
          <p className="mb-2 font-semibold text-slate-900">Totale investering</p>
          <p className="mb-3 text-slate-700">
            €{directeKosten.toLocaleString('nl-NL')} + €{gederfdeInkomsten.toLocaleString('nl-NL')} ={' '}
            <strong>€{totaleInvestering.toLocaleString('nl-NL')}</strong>
          </p>
          <p className="mb-2 font-semibold text-slate-900">Loonpremie per jaar</p>
          <p className="mb-3 text-slate-700">
            €{loonMetStudie.toLocaleString('nl-NL')} − €{loonZonderStudie.toLocaleString('nl-NL')} ={' '}
            <strong>€{loonpremie.toLocaleString('nl-NL')}</strong> per jaar
          </p>
          <div className="mt-3 border-t border-border pt-3">
            {terugverdientijd !== null ? (
              <>
                <p className="text-lg font-bold text-blue-700">
                  Terugverdientijd: {terugverdientijd.toFixed(1)} jaar
                </p>
                <p className="mt-2 text-slate-600">
                  Na ongeveer {Math.ceil(terugverdientijd)} jaar werken heeft de studie zichzelf via het
                  hogere loon terugbetaald. Elk jaar daarna is pure financiële winst ten opzichte van
                  direct gaan werken.
                </p>
              </>
            ) : (
              <p className="text-lg font-bold text-red-700">
                Deze studie verdient zich in dit scenario nooit terug: het loon mét studie is niet hoger
                dan het loon zónder studie.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
