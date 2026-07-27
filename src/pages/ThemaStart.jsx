import { useOutletContext } from 'react-router-dom'

export default function ThemaStart() {
  const { thema } = useOutletContext()

  if (!thema) {
    return <p>Dit thema bestaat nog niet.</p>
  }

  return (
    <section className="space-y-6">
      <div>
        <span className="text-sm font-mono text-flashdark">Thema {thema.id}</span>
        <h1 className="font-display text-3xl font-bold text-header mt-1">
          {thema.titel}
        </h1>
        <p className="text-slate-500 mt-1">{thema.subtitel}</p>
      </div>

      {thema.context && (
        <div className="rounded-xl border border-border bg-white p-5">
          <h2 className="font-display text-lg font-semibold text-header mb-2">
            Aansprekende context
          </h2>
          <p className="text-slate-700">{thema.context}</p>
        </div>
      )}

      {thema.koppeling && (
        <div className="rounded-xl border border-border bg-white p-5">
          <h2 className="font-display text-lg font-semibold text-header mb-2">
            Economische koppeling
          </h2>
          <p className="text-slate-700">{thema.koppeling}</p>
        </div>
      )}
    </section>
  )
}
