import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { projetsData } from '../../data/projetsData';

import Nav from '../Nav/Nav.jsx';   
import Accueil from '../../pages/Accueil/Accueil.jsx';
import Projet from '../../pages/Projet/Projet.jsx';
import Error from '../../pages/Error/Error.jsx';
import Footer from '../Footer/Footer.jsx';
import './App.scss';

function App() {

  return (
    <BrowserRouter basename="/Portfolio-Louis-Coggon">
      <header>
        <Nav />
      </header>

      <main>
        <Routes>
          <Route path="/" element= {<Accueil />} />
          <Route path="/projet/:id" element= {<Projet data={projetsData}/>} />
          <Route path="*" element={<Error />} />
        </Routes>
      </main>

      <footer>
        <Footer />
      </footer>
    </BrowserRouter>
  )
}

export default App
