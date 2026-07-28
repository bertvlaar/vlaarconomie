import { Routes, Route } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop.jsx'
import ThemaLayout from './components/ThemaLayout.jsx'
import ThemaStart from './pages/ThemaStart.jsx'
import Thema1 from './pages/Thema1.jsx'
// Thema 2 heeft, net als Thema 3, 4, 5, 7, 8, 9 en 10, een volledig uitgewerkte
// les-structuur (Start, 4 lessen, begrippenlijst, extra rekenopdrachten,
// eindquiz, project en een docentenpagina) met een eigen Layout en Header,
// zie components/Thema2Layout.jsx en components/Header2.jsx.
import Thema2Layout from './components/Thema2Layout.jsx'
import Start2 from './pages/Start2.jsx'
import Les21 from './pages/Les21.jsx'
import Les22 from './pages/Les22.jsx'
import Les23 from './pages/Les23.jsx'
import Les24 from './pages/Les24.jsx'
import Begrippenlijst2 from './pages/Begrippenlijst2.jsx'
import ExtraRekenopdrachten2 from './pages/ExtraRekenopdrachten2.jsx'
import Eindquiz2 from './pages/Eindquiz2.jsx'
import Project2 from './pages/Project2.jsx'
import VoorDeDocent2 from './pages/VoorDeDocent2.jsx'
// Thema 3 heeft, net als Thema 4, 5, 7, 8, 9 en 10, een volledig uitgewerkte
// les-structuur (Start, 4 lessen, begrippenlijst, extra rekenopdrachten,
// eindquiz, project en een docentenpagina) met een eigen Layout en Header,
// zie components/Thema3Layout.jsx en components/Header3.jsx.
import Thema3Layout from './components/Thema3Layout.jsx'
import Start3 from './pages/Start3.jsx'
import Les31 from './pages/Les31.jsx'
import Les32 from './pages/Les32.jsx'
import Les33 from './pages/Les33.jsx'
import Les34 from './pages/Les34.jsx'
import Begrippenlijst3 from './pages/Begrippenlijst3.jsx'
import ExtraRekenopdrachten3 from './pages/ExtraRekenopdrachten3.jsx'
import Eindquiz3 from './pages/Eindquiz3.jsx'
import Project3 from './pages/Project3.jsx'
import VoorDeDocent3 from './pages/VoorDeDocent3.jsx'
// Thema 4 heeft, net als Thema 5, 7, 8, 9 en 10, een volledig uitgewerkte
// les-structuur (Start, 4 lessen, begrippenlijst, extra rekenopdrachten,
// eindquiz, project en een docentenpagina) met een eigen Layout en Header,
// zie components/Thema4Layout.jsx en components/Header4.jsx.
import Thema4Layout from './components/Thema4Layout.jsx'
import Start4 from './pages/Start4.jsx'
import Les41 from './pages/Les41.jsx'
import Les42 from './pages/Les42.jsx'
import Les43 from './pages/Les43.jsx'
import Les44 from './pages/Les44.jsx'
import Begrippenlijst4 from './pages/Begrippenlijst4.jsx'
import ExtraRekenopdrachten4 from './pages/ExtraRekenopdrachten4.jsx'
import Eindquiz4 from './pages/Eindquiz4.jsx'
import Project4 from './pages/Project4.jsx'
import VoorDeDocent4 from './pages/VoorDeDocent4.jsx'
// Thema 5 heeft, net als Thema 8, 9 en 10, een volledig uitgewerkte les-structuur
// (Start, 4 lessen, begrippenlijst, extra rekenopdrachten, eindquiz, project en
// een docentenpagina) met een eigen Layout en Header, zie
// components/Thema5Layout.jsx en components/Header5.jsx.
import Thema5Layout from './components/Thema5Layout.jsx'
import Start5 from './pages/Start5.jsx'
import Les51 from './pages/Les51.jsx'
import Les52 from './pages/Les52.jsx'
import Les53 from './pages/Les53.jsx'
import Les54 from './pages/Les54.jsx'
import Begrippenlijst5 from './pages/Begrippenlijst5.jsx'
import ExtraRekenopdrachten5 from './pages/ExtraRekenopdrachten5.jsx'
import Eindquiz5 from './pages/Eindquiz5.jsx'
import Project5 from './pages/Project5.jsx'
import VoorDeDocent5 from './pages/VoorDeDocent5.jsx'
// Thema 6 heeft, net als Thema 5, 7, 8, 9 en 10, een volledig uitgewerkte
// les-structuur (Start, 4 lessen, begrippenlijst, extra rekenopdrachten,
// eindquiz, project en een docentenpagina) met een eigen Layout en Header,
// zie components/Thema6Layout.jsx en components/Header6.jsx.
import Thema6Layout from './components/Thema6Layout.jsx'
import Start6 from './pages/Start6.jsx'
import Les61 from './pages/Les61.jsx'
import Les62 from './pages/Les62.jsx'
import Les63 from './pages/Les63.jsx'
import Les64 from './pages/Les64.jsx'
import Begrippenlijst6 from './pages/Begrippenlijst6.jsx'
import ExtraRekenopdrachten6 from './pages/ExtraRekenopdrachten6.jsx'
import Eindquiz6 from './pages/Eindquiz6.jsx'
import Project6 from './pages/Project6.jsx'
import VoorDeDocent6 from './pages/VoorDeDocent6.jsx'
// Thema 7 heeft, net als Thema 5, 8, 9 en 10, een volledig uitgewerkte
// les-structuur (Start, 4 lessen, begrippenlijst, extra rekenopdrachten,
// eindquiz, project en een docentenpagina) met een eigen Layout en Header,
// zie components/Thema7Layout.jsx en components/Header7.jsx.
import Thema7Layout from './components/Thema7Layout.jsx'
import Start7 from './pages/Start7.jsx'
import Les71 from './pages/Les71.jsx'
import Les72 from './pages/Les72.jsx'
import Les73 from './pages/Les73.jsx'
import Les74 from './pages/Les74.jsx'
import Begrippenlijst7 from './pages/Begrippenlijst7.jsx'
import ExtraRekenopdrachten7 from './pages/ExtraRekenopdrachten7.jsx'
import Eindquiz7 from './pages/Eindquiz7.jsx'
import Project7 from './pages/Project7.jsx'
import VoorDeDocent7 from './pages/VoorDeDocent7.jsx'
// Thema 9 heeft, net als Thema 8 en 10, een volledig uitgewerkte les-structuur
// (Start, 4 lessen, begrippenlijst, extra rekenopdrachten, eindquiz, project
// en een docentenpagina) met een eigen Layout en Header, zie
// components/Thema9Layout.jsx en components/Header9.jsx.
import Thema9Layout from './components/Thema9Layout.jsx'
import Start9 from './pages/Start9.jsx'
import Les91 from './pages/Les91.jsx'
import Les92 from './pages/Les92.jsx'
import Les93 from './pages/Les93.jsx'
import Les94 from './pages/Les94.jsx'
import Begrippenlijst9 from './pages/Begrippenlijst9.jsx'
import ExtraRekenopdrachten9 from './pages/ExtraRekenopdrachten9.jsx'
import Eindquiz9 from './pages/Eindquiz9.jsx'
import Project9 from './pages/Project9.jsx'
import VoorDeDocent9 from './pages/VoorDeDocent9.jsx'
import Thema10Layout from './components/Thema10Layout.jsx'
import Start10 from './pages/Start10.jsx'
import Les101 from './pages/Les101.jsx'
import Les102 from './pages/Les102.jsx'
import Les103 from './pages/Les103.jsx'
import Les104 from './pages/Les104.jsx'
import Begrippenlijst10 from './pages/Begrippenlijst10.jsx'
import ExtraRekenopdrachten10 from './pages/ExtraRekenopdrachten10.jsx'
import Eindquiz10 from './pages/Eindquiz10.jsx'
import Project10 from './pages/Project10.jsx'
import VoorDeDocent10 from './pages/VoorDeDocent10.jsx'
import Home from './pages/Home.jsx'
import Rekenen3F from './pages/Rekenen3F.jsx'

// Thema 8 heeft, net als Thema 10, een volledig uitgewerkte les-structuur
// (Start, 4 lessen, begrippenlijst, extra rekenopdrachten, eindquiz, project
// en een docentenpagina) met een eigen Layout en Header, zie
// components/Thema8Layout.jsx en components/Header8.jsx.
import Thema8Layout from './components/Thema8Layout.jsx'
import Start8 from './pages/Start8.jsx'
import Les81 from './pages/Les81.jsx'
import Les82 from './pages/Les82.jsx'
import Les83 from './pages/Les83.jsx'
import Les84 from './pages/Les84.jsx'
import Begrippenlijst8 from './pages/Begrippenlijst8.jsx'
import ExtraRekenopdrachten8 from './pages/ExtraRekenopdrachten8.jsx'
import Eindquiz8 from './pages/Eindquiz8.jsx'
import Project8 from './pages/Project8.jsx'
import VoorDeDocent8 from './pages/VoorDeDocent8.jsx'

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rekenen-3f" element={<Rekenen3F />} />

        {/* Thema 1 heeft inmiddels eigen, volledig uitgewerkte content (zie
            data/thema1Data.js en pages/Thema1.jsx) en krijgt daarom een eigen,
            specifiekere route. React Router geeft statische segmenten ("/thema-1")
            voorrang boven het dynamische ":themaSlug" hieronder, dus de volgorde
            van deze routes maakt verder niet uit. */}
        <Route path="/thema-1" element={<ThemaLayout />}>
          <Route index element={<Thema1 />} />
        </Route>
        {/* Thema 2 heeft, net als Thema 3, 4, 5, 7, 8, 9 en 10, een volledig
            uitgewerkte les-structuur (Start, 4 lessen, begrippenlijst, extra
            rekenopdrachten, eindquiz, project en een docentenpagina) met een
            eigen Layout en Header, zie components/Thema2Layout.jsx en
            components/Header2.jsx. */}
        <Route path="/thema-2" element={<Thema2Layout />}>
          <Route index element={<Start2 />} />
          <Route path="les-2-1" element={<Les21 />} />
          <Route path="les-2-2" element={<Les22 />} />
          <Route path="les-2-3" element={<Les23 />} />
          <Route path="les-2-4" element={<Les24 />} />
          <Route path="begrippenlijst" element={<Begrippenlijst2 />} />
          <Route path="extra-rekenopdrachten" element={<ExtraRekenopdrachten2 />} />
          <Route path="eindquiz" element={<Eindquiz2 />} />
          <Route path="project" element={<Project2 />} />
          <Route path="voor-de-docent" element={<VoorDeDocent2 />} />
        </Route>
        {/* Thema 3 heeft, net als Thema 4, 5, 7, 8, 9 en 10, een volledig
            uitgewerkte les-structuur (Start, 4 lessen, begrippenlijst, extra
            rekenopdrachten, eindquiz, project en een docentenpagina) met een
            eigen Layout en Header, zie components/Thema3Layout.jsx en
            components/Header3.jsx. */}
        <Route path="/thema-3" element={<Thema3Layout />}>
          <Route index element={<Start3 />} />
          <Route path="les-3-1" element={<Les31 />} />
          <Route path="les-3-2" element={<Les32 />} />
          <Route path="les-3-3" element={<Les33 />} />
          <Route path="les-3-4" element={<Les34 />} />
          <Route path="begrippenlijst" element={<Begrippenlijst3 />} />
          <Route path="extra-rekenopdrachten" element={<ExtraRekenopdrachten3 />} />
          <Route path="eindquiz" element={<Eindquiz3 />} />
          <Route path="project" element={<Project3 />} />
          <Route path="voor-de-docent" element={<VoorDeDocent3 />} />
        </Route>
        {/* Thema 4 heeft, net als Thema 5, 7, 8, 9 en 10, een volledig
            uitgewerkte les-structuur (Start, 4 lessen, begrippenlijst, extra
            rekenopdrachten, eindquiz, project en een docentenpagina) met een
            eigen Layout en Header, zie components/Thema4Layout.jsx en
            components/Header4.jsx. */}
        <Route path="/thema-4" element={<Thema4Layout />}>
          <Route index element={<Start4 />} />
          <Route path="les-4-1" element={<Les41 />} />
          <Route path="les-4-2" element={<Les42 />} />
          <Route path="les-4-3" element={<Les43 />} />
          <Route path="les-4-4" element={<Les44 />} />
          <Route path="begrippenlijst" element={<Begrippenlijst4 />} />
          <Route path="extra-rekenopdrachten" element={<ExtraRekenopdrachten4 />} />
          <Route path="eindquiz" element={<Eindquiz4 />} />
          <Route path="project" element={<Project4 />} />
          <Route path="voor-de-docent" element={<VoorDeDocent4 />} />
        </Route>
        {/* Thema 5 heeft, net als Thema 8, 9 en 10, een volledig uitgewerkte
            les-structuur (Start, 4 lessen, begrippenlijst, extra rekenopdrachten,
            eindquiz, project en een docentenpagina) met een eigen Layout en
            Header, zie components/Thema5Layout.jsx en components/Header5.jsx. */}
        <Route path="/thema-5" element={<Thema5Layout />}>
          <Route index element={<Start5 />} />
          <Route path="les-5-1" element={<Les51 />} />
          <Route path="les-5-2" element={<Les52 />} />
          <Route path="les-5-3" element={<Les53 />} />
          <Route path="les-5-4" element={<Les54 />} />
          <Route path="begrippenlijst" element={<Begrippenlijst5 />} />
          <Route path="extra-rekenopdrachten" element={<ExtraRekenopdrachten5 />} />
          <Route path="eindquiz" element={<Eindquiz5 />} />
          <Route path="project" element={<Project5 />} />
          <Route path="voor-de-docent" element={<VoorDeDocent5 />} />
        </Route>
        {/* Thema 6 heeft, net als Thema 5, 7, 8, 9 en 10, een volledig uitgewerkte
            les-structuur (Start, 4 lessen, begrippenlijst, extra rekenopdrachten,
            eindquiz, project en een docentenpagina) met een eigen Layout en
            Header, zie components/Thema6Layout.jsx en components/Header6.jsx. */}
        <Route path="/thema-6" element={<Thema6Layout />}>
          <Route index element={<Start6 />} />
          <Route path="les-6-1" element={<Les61 />} />
          <Route path="les-6-2" element={<Les62 />} />
          <Route path="les-6-3" element={<Les63 />} />
          <Route path="les-6-4" element={<Les64 />} />
          <Route path="begrippenlijst" element={<Begrippenlijst6 />} />
          <Route path="extra-rekenopdrachten" element={<ExtraRekenopdrachten6 />} />
          <Route path="eindquiz" element={<Eindquiz6 />} />
          <Route path="project" element={<Project6 />} />
          <Route path="voor-de-docent" element={<VoorDeDocent6 />} />
        </Route>
        {/* Thema 7 heeft, net als Thema 5, 8, 9 en 10, een volledig uitgewerkte
            les-structuur (Start, 4 lessen, begrippenlijst, extra rekenopdrachten,
            eindquiz, project en een docentenpagina) met een eigen Layout en
            Header, zie components/Thema7Layout.jsx en components/Header7.jsx. */}
        <Route path="/thema-7" element={<Thema7Layout />}>
          <Route index element={<Start7 />} />
          <Route path="les-7-1" element={<Les71 />} />
          <Route path="les-7-2" element={<Les72 />} />
          <Route path="les-7-3" element={<Les73 />} />
          <Route path="les-7-4" element={<Les74 />} />
          <Route path="begrippenlijst" element={<Begrippenlijst7 />} />
          <Route path="extra-rekenopdrachten" element={<ExtraRekenopdrachten7 />} />
          <Route path="eindquiz" element={<Eindquiz7 />} />
          <Route path="project" element={<Project7 />} />
          <Route path="voor-de-docent" element={<VoorDeDocent7 />} />
        </Route>
        {/* Thema 8 heeft, net als Thema 10, een volledig uitgewerkte les-structuur
            (Start, 4 lessen, begrippenlijst, extra rekenopdrachten, eindquiz,
            project en een docentenpagina) met een eigen Layout en Header, zie
            components/Thema8Layout.jsx en components/Header8.jsx. */}
        <Route path="/thema-8" element={<Thema8Layout />}>
          <Route index element={<Start8 />} />
          <Route path="les-8-1" element={<Les81 />} />
          <Route path="les-8-2" element={<Les82 />} />
          <Route path="les-8-3" element={<Les83 />} />
          <Route path="les-8-4" element={<Les84 />} />
          <Route path="begrippenlijst" element={<Begrippenlijst8 />} />
          <Route path="extra-rekenopdrachten" element={<ExtraRekenopdrachten8 />} />
          <Route path="eindquiz" element={<Eindquiz8 />} />
          <Route path="project" element={<Project8 />} />
          <Route path="voor-de-docent" element={<VoorDeDocent8 />} />
        </Route>
        {/* Thema 9 heeft, net als Thema 8 en 10, een volledig uitgewerkte
            les-structuur (Start, 4 lessen, begrippenlijst, extra rekenopdrachten,
            eindquiz, project en een docentenpagina) met een eigen Layout en
            Header, zie components/Thema9Layout.jsx en components/Header9.jsx. */}
        <Route path="/thema-9" element={<Thema9Layout />}>
          <Route index element={<Start9 />} />
          <Route path="les-9-1" element={<Les91 />} />
          <Route path="les-9-2" element={<Les92 />} />
          <Route path="les-9-3" element={<Les93 />} />
          <Route path="les-9-4" element={<Les94 />} />
          <Route path="begrippenlijst" element={<Begrippenlijst9 />} />
          <Route path="extra-rekenopdrachten" element={<ExtraRekenopdrachten9 />} />
          <Route path="eindquiz" element={<Eindquiz9 />} />
          <Route path="project" element={<Project9 />} />
          <Route path="voor-de-docent" element={<VoorDeDocent9 />} />
        </Route>
        {/* Thema 10 heeft, net als in de referentie, een volledig uitgewerkte
            les-structuur (Start, 4 lessen, begrippenlijst, extra rekenopdrachten,
            eindquiz, project en een docentenpagina) met een eigen Layout en
            Header, zie components/Thema10Layout.jsx en components/Header10.jsx. */}
        <Route path="/thema-10" element={<Thema10Layout />}>
          <Route index element={<Start10 />} />
          <Route path="les-10-1" element={<Les101 />} />
          <Route path="les-10-2" element={<Les102 />} />
          <Route path="les-10-3" element={<Les103 />} />
          <Route path="les-10-4" element={<Les104 />} />
          <Route path="begrippenlijst" element={<Begrippenlijst10 />} />
          <Route path="extra-rekenopdrachten" element={<ExtraRekenopdrachten10 />} />
          <Route path="eindquiz" element={<Eindquiz10 />} />
          <Route path="project" element={<Project10 />} />
          <Route path="voor-de-docent" element={<VoorDeDocent10 />} />
        </Route>

        {/* Eén dynamische route voor de overige thema's op basis van data/themas.js.
            Zodra een thema eigen lessen/begrippenlijst/eindquiz/project krijgt,
            kan dit worden uitgebreid naar per-thema Layout- en Les-bestanden,
            zoals in het leerjaar-2 project. */}
        <Route path="/:themaSlug" element={<ThemaLayout />}>
          <Route index element={<ThemaStart />} />
        </Route>
      </Routes>
    </>
  )
}
