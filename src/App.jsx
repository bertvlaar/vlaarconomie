import { Routes, Route } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop.jsx'
import ThemaLayout from './components/ThemaLayout.jsx'
import ThemaStart from './pages/ThemaStart.jsx'
import Thema1 from './pages/Thema1.jsx'
import Thema2 from './pages/Thema2.jsx'
import Thema3 from './pages/Thema3.jsx'
import Thema4 from './pages/Thema4.jsx'
import Thema5 from './pages/Thema5.jsx'
import Thema6 from './pages/Thema6.jsx'
import Thema7 from './pages/Thema7.jsx'
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
        <Route path="/thema-2" element={<ThemaLayout />}>
          <Route index element={<Thema2 />} />
        </Route>
        <Route path="/thema-3" element={<ThemaLayout />}>
          <Route index element={<Thema3 />} />
        </Route>
        <Route path="/thema-4" element={<ThemaLayout />}>
          <Route index element={<Thema4 />} />
        </Route>
        <Route path="/thema-5" element={<ThemaLayout />}>
          <Route index element={<Thema5 />} />
        </Route>
        <Route path="/thema-6" element={<ThemaLayout />}>
          <Route index element={<Thema6 />} />
        </Route>
        <Route path="/thema-7" element={<ThemaLayout />}>
          <Route index element={<Thema7 />} />
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
