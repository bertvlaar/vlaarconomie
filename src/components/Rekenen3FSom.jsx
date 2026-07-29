import React, { useEffect, useState } from 'react'
import SmileyReflectie from './SmileyReflectie.jsx'

const CATEGORIE_LABELS = {
  procenten: 'Procenten',
  breuken: 'Breuken',
  verhoudingen: 'Verhoudingen',
  formules: 'Formules omschrijven',
  'kosten-omzet-winst': 'Kosten, omzet & winst',
  verhaalsommen: 'Verhaalsom',
}

/**
 * Toont één gegenereerde 3F-som met invoerveld, "Nakijken"-knop en
 * (bij fout of op verzoek) een stapsgewijze uitwerking.
 */
export default function Rekenen3FSom({ nummer, som, onVolgende }) {
  const [invoer, setInvoer] = useState('')
  const [status, setStatus] = useState(null) // null | 'goed' | 'fout' (al berekend, nog niet per se zichtbaar)
  const [inschatting, setInschatting] = useState(null) // null | 'twijfel' | 'redelijk' | 'zeker'
  const [toonUitleg, setToonUitleg] = useState(false)

  // Reset het invoerveld zodra er een nieuwe som binnenkomt
  useEffect(() => {
    setInvoer('')
    setStatus(null)
    setInschatting(null)
    setToonUitleg(false)
  }, [som])

  const nakijken = () => {
    const normalized = invoer.replace(',', '.').replace(/[^\d.\-]/g, '')
    const waarde = parseFloat(normalized)
    setInschatting(null)
    setToonUitleg(false)
    if (isNaN(waarde)) {
      setStatus('fout')
      return
    }
    if (Math.abs(waarde - som.antwoord) <= (som.tolerantie ?? 0.01)) {
      setStatus('goed')
    } else {
      setStatus('fout')
    }
  }

  const eenheidIsPrefix = som.eenheid === '€' || som.eenheid === '€ per kg'

  return (
    <div className="rounded-lg border border-border bg-white p-5">
      <div className="mb-3 flex items-start justify-between gap-2">
        <p className="font-medium text-slate-800">
          <span className="mr-1 text-slate-400">{nummer}.</span> {som.vraag}
        </p>
        <div className="flex shrink-0 flex-col items-end gap-1">
          <span className="rounded-full bg-purple-100 px-2.5 py-0.5 text-xs font-bold text-purple-800">3F</span>
          {som.categorie && (
            <span className="whitespace-nowrap rounded-full bg-slate-100 px-2 py-0.5 text-[11px] font-medium text-slate-500">
              {CATEGORIE_LABELS[som.categorie] ?? som.categorie}
            </span>
          )}
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-2">
        {eenheidIsPrefix && <span className="text-sm text-slate-500">{som.eenheid}</span>}
        <input
          type="text"
          inputMode="decimal"
          value={invoer}
          onChange={(e) => {
            setInvoer(e.target.value)
            setStatus(null)
            setInschatting(null)
          }}
          onKeyDown={(e) => {
            if (e.key === 'Enter') nakijken()
          }}
          placeholder="jouw antwoord"
          className="w-36 rounded-md border border-border bg-pagebg p-2 text-sm text-slate-800 focus:border-blue-500"
        />
        {!eenheidIsPrefix && som.eenheid && <span className="text-sm text-slate-500">{som.eenheid}</span>}
        <button
          onClick={nakijken}
          className="rounded-md bg-action px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-blue-700"
        >
          Nakijken
        </button>
      </div>

      {status && !inschatting && <SmileyReflectie onKiezen={setInschatting} />}

      {status === 'goed' && inschatting && (
        <div className="mt-3 rounded-md border border-green-200 bg-green-50 p-3 text-sm text-green-800">
          <p className="font-medium">✅ Goed! Dat klopt.</p>
          <button
            onClick={() => setToonUitleg((v) => !v)}
            className="mt-2 text-xs font-semibold text-green-700 underline underline-offset-2"
          >
            {toonUitleg ? 'Verberg uitwerking' : 'Bekijk uitwerking'}
          </button>
          {toonUitleg && <p className="mt-2 text-slate-700">{som.uitleg}</p>}
        </div>
      )}

      {status === 'fout' && inschatting && (
        <div className="mt-3 rounded-md border border-red-200 bg-red-50 p-3 text-sm text-red-800">
          <p className="font-medium">❌ Nog niet helemaal goed. Controleer je berekening.</p>
          <button
            onClick={() => setToonUitleg((v) => !v)}
            className="mt-2 text-xs font-semibold text-red-700 underline underline-offset-2"
          >
            {toonUitleg ? 'Verberg uitwerking' : 'Toon uitwerking'}
          </button>
          {toonUitleg && <p className="mt-2 text-slate-700">{som.uitleg}</p>}
        </div>
      )}

      <div className="mt-4 flex justify-end">
        <button
          onClick={onVolgende}
          className="inline-flex items-center gap-1 rounded-md border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-600 transition-colors hover:bg-slate-100"
        >
          Volgende som
          <span aria-hidden="true">→</span>
        </button>
      </div>
    </div>
  )
}
