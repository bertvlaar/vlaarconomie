import React, { useCallback, useState } from 'react'
import { Link } from 'react-router-dom'
import genereerSom, { CATEGORIEEN } from '../data/rekenen3fGenerator.js'
import Rekenen3FSom from '../components/Rekenen3FSom.jsx'

export default function Rekenen3F() {
  const [categorie, setCategorie] = useState('alle')
  const [som, setSom] = useState(() => genereerSom('alle'))
  const [score, setScore] = useState({ gemaakt: 0 })

  const volgendeSom = useCallback(
    (huidigeCategorie = categorie) => {
      setSom(genereerSom(huidigeCategorie))
      setScore((s) => ({ gemaakt: s.gemaakt + 1 }))
    },
    [categorie],
  )

  const kiesCategorie = (key) => {
    setCategorie(key)
    setSom(genereerSom(key))
  }

  return (
    <div className="min-h-screen bg-pagebg">
      {/* Eenvoudige, standalone header (geen thema-navigatie: dit is een losse tool) */}
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur-sm">
        <div className="mx-auto flex max-w-content items-center gap-3 px-4 py-3 lg:px-6">
          <Link
            to="/"
            className="flex shrink-0 items-center gap-1 text-sm font-medium text-slate-500 transition-colors hover:text-header"
          >
            <span aria-hidden="true">←</span>
            <span>Alle thema's</span>
          </Link>
          <span className="h-5 w-px shrink-0 bg-slate-200" aria-hidden="true" />
          <span className="shrink-0 text-base font-bold leading-none tracking-tight text-header">
            Rekenen 3F
          </span>
          <span className="ml-auto hidden shrink-0 rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-sm font-medium text-slate-500 sm:inline-block">
            {score.gemaakt} {score.gemaakt === 1 ? 'som gemaakt' : "sommen gemaakt"}
          </span>
        </div>
      </header>

      <main className="mx-auto max-w-content px-4 py-10 lg:px-6 lg:py-14">
        <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-flashdark">
          Rekenvaardigheid · Niveau 3F
        </p>
        <h1 className="mt-3 max-w-2xl font-display text-3xl font-bold leading-tight text-header sm:text-4xl">
          Oefen oneindig door met economisch rekenen
        </h1>
        <p className="mt-4 max-w-2xl text-slate-600">
          Deze oefenomgeving genereert steeds een nieuwe, willekeurige som op rekenniveau 3F:
          procenten, breuken, verhoudingen, formules omschrijven en kosten/omzet/winst-vraagstukken
          in realistische, economische situaties. Vul je antwoord in en klik op{' '}
          <span className="font-semibold text-header">Nakijken</span> om direct te zien of het klopt,
          inclusief een volledige uitwerking.
        </p>

        {/* Categorie-filter */}
        <div className="mt-6 flex flex-wrap gap-2">
          {CATEGORIEEN.map((c) => (
            <button
              key={c.key}
              onClick={() => kiesCategorie(c.key)}
              className={`rounded-full px-3 py-1.5 text-sm font-semibold transition-colors ${
                categorie === c.key
                  ? 'bg-header text-white'
                  : 'border border-slate-200 bg-white text-slate-600 hover:bg-slate-100'
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>

        <div className="mt-8 max-w-2xl">
          <Rekenen3FSom nummer={score.gemaakt + 1} som={som} onVolgende={() => volgendeSom()} />
        </div>

        <p className="mt-8 max-w-2xl text-sm text-slate-400">
          Er zijn geen vaste rondes: er blijven altijd nieuwe sommen komen zolang je op
          "Volgende som" klikt. Kies eventueel eerst een categorie hierboven om gericht op één
          onderdeel te oefenen.
        </p>
      </main>
    </div>
  )
}
