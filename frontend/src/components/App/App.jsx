import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from '../AuthContext/AuthContext.jsx';
import { projetsData } from '../../data/projetsData';
import React, { useState, useEffect } from 'react';

import Nav from '../Nav/Nav.jsx';   
import Accueil from '../../pages/Accueil/Accueil.jsx';
import Projet from '../../pages/Projet/Projet.jsx';
import Connexion from '../../pages/Connexion/Connexion.jsx';
//import Register from '../../pages/Register/Register.jsx';
import ModaleAdmin from '../../pages/ModaleAdmin/ModaleAdmin.jsx';
import Error from '../../pages/Error/Error.jsx';
import Footer from '../Footer/Footer.jsx';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(!!sessionStorage.getItem("loggedIn"));

  useEffect(() => {
    setIsLoggedIn(!!sessionStorage.getItem("loggedIn"));
  }, []);


  return (
    <AuthProvider>
      <BrowserRouter basename="/portfolio-louis-coggon">
        <header>
        <Nav isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Accueil />} />
            <Route path="/projet/:id" element= {<Projet data={projetsData}/>} />
            <Route path="*" element={<Error />} />
            <Route path="/connexion" element={<Connexion setIsLoggedIn={setIsLoggedIn}/>} />
            {/* <Route path="/register" element={<Register />} /> */}
            <Route path="/modifier" element={<ModaleAdmin />} />
          </Routes>
        </main>

        <footer>
          <Footer />
        </footer>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App
