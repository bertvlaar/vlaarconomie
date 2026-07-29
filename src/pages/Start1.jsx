import React from 'react'
import { Link } from 'react-router-dom'
import PageShell from '../components/PageShell.jsx'
import Section from '../components/Section.jsx'

const lessen = [
  { to: '/thema-1/les-1-1', titel: 'Les 1.1', ondertitel: 'De TikTok-guru: rijk worden in 15 seconden' },
  { to: '/thema-1/les-1-2', titel: 'Les 1.2', ondertitel: 'De wet die niemand kan omzeilen: risico en rendement' },
  { to: '/thema-1/les-1-3', titel: 'Les 1.3', ondertitel: 'Reëel investeren versus Ponzi-fraude en piramidespelen' },
  { to: '/thema-1/les-1-4', titel: 'Les 1.4', ondertitel: 'Informatie-asymmetrie: de guru weet meer dan jij' },
]

export default function Start1() {
  return (
    <PageShell>
      <section className="mb-12 text-center">
        <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-blue-700">
          Economie · Havo/Vwo onderbouw · Thema 1
        </p>
        <h1 className="mb-4 text-slate-900">Scams, Crypto-bros &amp; Get-Rich-Quick</h1>
        <p className="mx-auto max-w-2xl text-lg text-slate-600">
          Elke dag scrol je langs iemand die in een geleaste Lamborghini zweert dat jij ook "financieel
          vrij" kunt zijn — als je maar op de link in zijn bio klikt. Dit thema laat zien waarom die
          belofte bijna altijd een leugen is, hoe piramidespelen en Ponzi-fraude precies werken, waarom de
          verkoper altijd meer weet dan jij, en hoe je jezelf leert beschermen tegen de oplichters van je
          eigen tijdlijn.
        </p>
      </section>

      <Section title="🎬 Introductievideo (± 6 min.)">
        <div className="aspect-video w-full overflow-hidden rounded-lg border border-border">
          <iframe
            className="h-full w-full"
            src="https://www.youtube.com/embed/EW8XtAKi9TU"
            title="Makkelijk rijk of al je geld kwijt? | De waarheid over crypto"
            allowFullScreen
          />
        </div>
        <p className="mt-3 text-sm text-slate-500">
          Docent: vervang deze video indien gewenst door een recentere of eigen uitleg over crypto-scams en
          get-rich-quick-content.
        </p>

        <h3 className="mb-3 mt-6 text-slate-900">Kijkvragen</h3>
        <ol className="list-decimal space-y-2 pl-5 text-slate-700">
          <li>Waarom investeren volgens de video ook jongeren onder de 18 in crypto?</li>
          <li>Welke risico's worden in de video genoemd?</li>
          <li>Ken jij, of iemand in je omgeving, een verhaal over geld verdienen (of verliezen) met crypto?</li>
        </ol>
      </Section>

      <Section title="Vier lessen, één thema">
        <div className="grid gap-4 sm:grid-cols-2">
          {lessen.map((les) => (
            <Link
              key={les.to}
              to={les.to}
              className="rounded-lg border border-border bg-pagebg p-5 transition-colors hover:border-blue-300 hover:bg-blue-50/40"
            >
              <p className="text-sm font-semibold text-blue-700">{les.titel}</p>
              <p className="mt-1 font-medium text-slate-800">{les.ondertitel}</p>
            </Link>
          ))}
        </div>
        <Link
          to="/thema-1/begrippenlijst"
          className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-blue-700 hover:text-blue-800"
        >
          📚 Bekijk de begrippenlijst van dit thema
        </Link>
      </Section>
    </PageShell>
  )
}
