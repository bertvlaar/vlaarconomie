// src/pages/Thema5.jsx
//
// Pagina-component voor Thema 5 — Influencers, Sponsoring & De aandachtseconomie.
// Wordt gerenderd binnen <ThemaLayout /> (zie App.jsx: route "/thema-5").
// Haalt alle inhoud op uit src/data/thema5Data.js en toont daarnaast, indien
// beschikbaar, de context/koppeling uit src/data/themas.js via useOutletContext.

import { useMemo, useState } from 'react'
import { Link, useOutletContext } from 'react-router-dom'
import thema5Data from '../data/thema5Data.js'

export default function Thema5() {
  const outletContext = useOutletContext() || {}
  const { thema } = outletContext

  const { titel, beschrijving, paragrafen, begrippen, oefenvragen } = thema5Data

  // { [vraagId]: optieIndex } — bijhouden welk antwoord een leerling per vraag koos
  const [antwoorden, setAntwoorden] = useState({})

  const totaalVragen = oefenvragen.length

  const score = useMemo(() => {
    return oefenvragen.reduce((acc, vraag) => {
      const gekozenIndex = antwoorden[vraag.id]
      if (gekozenIndex === undefined) return acc
      return vraag.opties[gekozenIndex]?.correct ? acc + 1 : acc
    }, 0)
  }, [antwoorden, oefenvragen])

  const aantalBeantwoord = Object.keys(antwoorden).length

  const kiesAntwoord = (vraagId, optieIndex) => {
    setAntwoorden((huidig) => {
      // Eenmaal een vraag beantwoord? Dan blijft die keuze staan (geen "opnieuw gokken").
      if (huidig[vraagId] !== undefined) return huidig
      return { ...huidig, [vraagId]: optieIndex }
    })
  }

  const resetQuiz = () => setAntwoorden({})

  return (
    <section className="space-y-10 pb-16">
      {/* Terug-link */}
      <Link
        to="/"
        className="inline-flex items-center gap-1 text-sm font-medium text-slate-500 transition-colors hover:text-header"
      >
        <span aria-hidden="true">←</span>
        <span>Alle thema's</span>
      </Link>

      {/* Hero */}
      <div>
        <span className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-flashdark">
          Thema {thema?.id ?? 5} · Marketing &amp; Verdienmodellen
        </span>
        <h1 className="mt-2 font-display text-3xl font-bold leading-tight text-header sm:text-4xl">
          {titel}
        </h1>
        {thema?.subtitel && (
          <p className="mt-1 text-slate-500">{thema.subtitel}</p>
        )}
        <p className="mt-4 max-w-3xl text-slate-700">{beschrijving}</p>
      </div>

      {/* Context & economische koppeling (uit themas.js, indien beschikbaar) */}
      {(thema?.context || thema?.koppeling) && (
        <div className="grid gap-4 sm:grid-cols-2">
          {thema?.context && (
            <div className="rounded-xl border border-border bg-white p-5">
              <h2 className="font-display text-base font-semibold text-header">
                Herkenbare context
              </h2>
              <p className="mt-2 text-sm text-slate-600">{thema.context}</p>
            </div>
          )}
          {thema?.koppeling && (
            <div className="rounded-xl border border-border bg-white p-5">
              <h2 className="font-display text-base font-semibold text-header">
                Economische koppeling
              </h2>
              <p className="mt-2 text-sm text-slate-600">{thema.koppeling}</p>
            </div>
          )}
        </div>
      )}

      {/* Paragrafen */}
      <div className="space-y-6">
        <h2 className="font-display text-2xl font-bold text-header">Uitleg</h2>
        <div className="space-y-5">
          {paragrafen.map((paragraaf, index) => (
            <article
              key={paragraaf.id}
              className="rounded-xl border border-border bg-white p-6"
            >
              <div className="flex items-start gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-header font-mono text-sm font-bold text-white">
                  {index + 1}
                </span>
                <div className="space-y-3">
                  <h3 className="font-display text-lg font-semibold text-header">
                    {paragraaf.titel}
                  </h3>
                  {paragraaf.inhoud.map((tekst, i) => (
                    <p key={i} className="text-slate-700">
                      {tekst}
                    </p>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Begrippen */}
      <div className="space-y-6">
        <h2 className="font-display text-2xl font-bold text-header">Kernbegrippen</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {begrippen.map((begrip) => (
            <div
              key={begrip.term}
              className="flex flex-col rounded-xl border border-border bg-white p-5"
            >
              <h3 className="font-display text-base font-bold text-flashdark">
                {begrip.term}
              </h3>
              <p className="mt-2 text-sm text-slate-700">{begrip.definitie}</p>
              {begrip.voorbeeld && (
                <p className="mt-3 rounded-lg bg-pagebg p-3 text-sm italic text-slate-600">
                  Voorbeeld: {begrip.voorbeeld}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Oefenvragen / quiz */}
      <div className="space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h2 className="font-display text-2xl font-bold text-header">Oefenvragen</h2>
          <div className="flex items-center gap-3">
            <span className="rounded-full border border-slate-200 bg-white px-3 py-1 text-sm font-semibold text-slate-600">
              Score: {score} / {totaalVragen}
            </span>
            {aantalBeantwoord > 0 && (
              <button
                onClick={resetQuiz}
                className="rounded-full bg-header px-3 py-1 text-sm font-semibold text-white transition-colors hover:bg-slate-800"
              >
                Opnieuw beginnen
              </button>
            )}
          </div>
        </div>

        <div className="space-y-5">
          {oefenvragen.map((vraag, vraagIndex) => {
            const gekozenIndex = antwoorden[vraag.id]
            const isBeantwoord = gekozenIndex !== undefined

            return (
              <div
                key={vraag.id}
                className="rounded-xl border border-border bg-white p-6"
              >
                <p className="font-semibold text-header">
                  <span className="font-mono text-flashdark">
                    Vraag {vraagIndex + 1}.
                  </span>{' '}
                  {vraag.vraag}
                </p>

                <div className="mt-4 space-y-2">
                  {vraag.opties.map((optie, optieIndex) => {
                    const isGekozen = gekozenIndex === optieIndex
                    const toonAlsCorrect = isBeantwoord && optie.correct
                    const toonAlsFout = isBeantwoord && isGekozen && !optie.correct

                    let stijl =
                      'border-slate-200 bg-white hover:bg-slate-50 text-slate-700'
                    if (toonAlsCorrect) {
                      stijl = 'border-green-300 bg-green-50 text-green-800'
                    } else if (toonAlsFout) {
                      stijl = 'border-red-300 bg-red-50 text-red-800'
                    } else if (isBeantwoord) {
                      stijl = 'border-slate-200 bg-white text-slate-400'
                    }

                    return (
                      <button
                        key={optieIndex}
                        onClick={() => kiesAntwoord(vraag.id, optieIndex)}
                        disabled={isBeantwoord}
                        className={`w-full rounded-lg border px-4 py-2.5 text-left text-sm font-medium transition-colors disabled:cursor-default ${stijl}`}
                      >
                        {optie.tekst}
                      </button>
                    )
                  })}
                </div>

                {isBeantwoord && (
                  <div
                    className={`mt-4 rounded-lg border p-4 text-sm ${
                      vraag.opties[gekozenIndex]?.correct
                        ? 'border-green-200 bg-green-50 text-green-800'
                        : 'border-red-200 bg-red-50 text-red-800'
                    }`}
                  >
                    <p className="font-semibold">
                      {vraag.opties[gekozenIndex]?.correct
                        ? '✓ Goed gezien!'
                        : '✗ Niet helemaal — let op:'}
                    </p>
                    <p className="mt-1">{vraag.opties[gekozenIndex]?.uitleg}</p>
                    {!vraag.opties[gekozenIndex]?.correct && (
                      <p className="mt-2 border-t border-red-200 pt-2 text-slate-700">
                        <span className="font-semibold text-green-700">Juiste antwoord: </span>
                        {vraag.opties.find((o) => o.correct)?.tekst}
                        {' — '}
                        {vraag.opties.find((o) => o.correct)?.uitleg}
                      </p>
                    )}
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {aantalBeantwoord === totaalVragen && (
          <div className="rounded-xl border border-border bg-header p-6 text-white">
            <p className="font-display text-lg font-semibold">
              Je hebt {score} van de {totaalVragen} vragen goed!
            </p>
            <p className="mt-1 text-sm text-slate-300">
              Onthoud: als een video "gratis" is, ben jij vaak niet de klant maar het product —
              jouw aandacht wordt verkocht aan adverteerders. Klik op "Opnieuw beginnen" om de
              quiz nog eens te maken.
            </p>
          </div>
        )}
      </div>
    </section>
  )
}
