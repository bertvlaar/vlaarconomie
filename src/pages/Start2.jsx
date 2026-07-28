import React from 'react'
import { Link } from 'react-router-dom'
import PageShell from '../components/PageShell.jsx'
import Section from '../components/Section.jsx'

const lessen = [
  { to: '/thema-2/les-2-1', titel: 'Les 2.1', ondertitel: 'Freemium: gratis instappen, duur eruit stappen' },
  { to: '/thema-2/les-2-2', titel: 'Les 2.2', ondertitel: "Digitale schaarste: waarom een skin 'zeldzaam' is" },
  { to: '/thema-2/les-2-3', titel: 'Les 2.3', ondertitel: 'Lootboxes, dark patterns en het kansspelelement in games' },
  { to: '/thema-2/les-2-4', titel: 'Les 2.4', ondertitel: 'Waarom jouw brein hier gevoelig voor is' },
]

export default function Start2() {
  return (
    <PageShell>
      <section className="mb-12 text-center">
        <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-blue-700">
          Economie · Havo/Vwo onderbouw · Thema 2
        </p>
        <h1 className="mb-4 text-slate-900">Gaming, Skins &amp; In-App Purchases</h1>
        <p className="mx-auto max-w-2xl text-lg text-slate-600">
          Een paars zwaard in Fortnite kost niks om te maken en je wordt er geen millimeter beter van in het
          spel — en toch betalen miljoenen tieners er honderden euro's voor. In dit thema ontdek je hoe
          gamebedrijven een complete virtuele economie bouwen, hoe ze kunstmatige schaarste creëren voor
          dingen die oneindig te kopiëren zijn, en met welke psychologische trucs ("dark patterns") ze
          ervoor zorgen dat jij toch dat ene setje V-Bucks koopt.
        </p>
      </section>

      <Section title="🎬 Introductievideo (± 3 min.)">
        <div className="aspect-video w-full overflow-hidden rounded-lg border border-border">
          <iframe
            className="h-full w-full"
            src="https://www.youtube.com/embed/JKxD9ba4P-Q"
            title="Steeds meer games moedigen jongeren aan om 'lootboxes' te kopen - RTL Nieuws"
            allowFullScreen
          />
        </div>
        <p className="mt-3 text-sm text-slate-500">
          Docent: vervang deze video indien gewenst door een recentere of eigen uitleg over lootboxes en
          in-app aankopen.
        </p>

        <h3 className="mb-3 mt-6 text-slate-900">Kijkvragen</h3>
        <ol className="list-decimal space-y-2 pl-5 text-slate-700">
          <li>Welk probleem wordt in de video beschreven rondom lootboxes?</li>
          <li>Waarom voelen deze aankopen soms aan als een verslaving, volgens de video?</li>
          <li>Heb jij, of iemand die je kent, weleens geld uitgegeven aan iets vergelijkbaars? Wat gebeurde er?</li>
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
          to="/thema-2/begrippenlijst"
          className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-blue-700 hover:text-blue-800"
        >
          📚 Bekijk de begrippenlijst van dit thema
        </Link>
      </Section>
    </PageShell>
  )
}
