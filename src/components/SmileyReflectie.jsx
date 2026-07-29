import React from 'react'

/**
 * Verplichte reflectie-tussenstap (metacognitie) vóórdat het antwoord of de
 * feedback zichtbaar wordt. De leerling schat eerst zelf in hoe zeker hij/zij
 * is, en klikt dan pas één van de drie smileys aan om het echte antwoord
 * vrij te geven.
 *
 * `onKiezen(niveau)` wordt aangeroepen met 'twijfel' | 'redelijk' | 'zeker'.
 */
const NIVEAUS = [
  { key: 'twijfel', emoji: '😟', label: 'Twijfelachtig, de kans is klein' },
  { key: 'redelijk', emoji: '😐', label: 'Redelijk, het kan beide kanten op' },
  { key: 'zeker', emoji: '😄', label: 'Zeker weten van wel!' },
]

export default function SmileyReflectie({ onKiezen }) {
  return (
    <div className="mt-3 rounded-md border border-blue-200 bg-blue-50 p-4">
      <p className="mb-3 text-sm font-medium text-blue-900">
        🤔 Hoe groot is de kans dat je de vraag goed beantwoord hebt?
      </p>
      <div className="flex flex-wrap gap-2" role="group" aria-label="Zelfinschatting">
        {NIVEAUS.map((n) => (
          <button
            key={n.key}
            type="button"
            onClick={() => onKiezen(n.key)}
            title={n.label}
            aria-label={n.label}
            className="flex flex-1 min-w-[92px] flex-col items-center gap-1 rounded-md border border-blue-200 bg-white px-3 py-2 text-sm font-semibold text-blue-900 transition-colors hover:border-blue-400 hover:bg-blue-100"
          >
            <span className="text-2xl leading-none" aria-hidden="true">
              {n.emoji}
            </span>
          </button>
        ))}
      </div>
      <p className="mt-2 text-xs text-blue-700/80">
        Kies eerst je inschatting. Daarna zie je het antwoord en de feedback.
      </p>
    </div>
  )
}
