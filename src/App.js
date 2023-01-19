
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './assets/scss/style.scss';

import Home from './pages/Home';

import Mangas from './pages/Mangas';
import Animes from './pages/Animes';

// import ArticleManga from './pages/ArticleManga';
// import ArticleAnime from './pages/ArticleAnime';

import Inscription from './pages/Inscription';
import Connexion from './pages/Connexion';
import EspaceAdmin from './pages/EspaceAdmin';
import EspaceUser from './pages/EspaceUser';

import ActuMangas from './pages/ActuMangas';
import ActuAnimes from './pages/ActuAnimes';

import PlanDuSite from './pages/PlanDuSite';
import QuiSommesNous from './pages/QuiSommesNous';
import NousContacter from './pages/NousContacter';
import PolitiqueDeConfidentialite from './pages/PolitiqueDeConfidentialite';
import Cookies from './pages/Cookies';
import MentionsLegales from './pages/MentionsLegales';



function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />} />

          <Route path="/mangas" element={<Mangas />} />
          <Route path="/animes" element={<Animes />} />

          {/* <Route path="/article-manga" element={<ArticleManga />} />
          <Route path="/article-anime" element={<ArticleAnime />} /> */}

          <Route path="/inscription" element={<Inscription />} />
          <Route path="/connexion" element={<Connexion />} />

          <Route path="/espace-admin" element={<EspaceAdmin />} />
          <Route path="/espace-user" element={<EspaceUser />} />

          <Route path="/actu-mangas" element={<ActuMangas />} />
          <Route path="/actu-animes" element={<ActuAnimes />} />

          <Route path="/plan-du-site" element={<PlanDuSite />} />
          <Route path="/qui-sommes-nous" element={<QuiSommesNous />} />
          <Route path="/nous-contacter" element={<NousContacter />} />
          <Route path="/politique-de-confidentialite" element={<PolitiqueDeConfidentialite />} />
          <Route path="/cookies" element={<Cookies />} />
          <Route path="/mentions-legales" element={<MentionsLegales />} />
        </Routes>
      </BrowserRouter>
    </>
    
  );
}

export default App;
