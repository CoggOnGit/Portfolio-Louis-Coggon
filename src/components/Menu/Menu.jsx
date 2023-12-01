import React, { useState, useEffect } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import './Menu.scss';
import githubIcon from '../../assets/logos/github-icon.webp';
import cvIcon from '../../assets/logos/cv-icon.webp';


function Menu({ setIsLoggedIn }) {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedInLocal] = useState(!!localStorage.getItem('userToken'));

  useEffect(() => {
    setIsLoggedInLocal(!!localStorage.getItem('userToken'));
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('userToken');
    setIsLoggedInLocal(false); 
    setIsLoggedIn(false); 
    navigate('/'); 
  };

  function handleScrollToSection(event, sectionId) {
    event.preventDefault(); 
  
    const section = document.getElementById(sectionId);
    if (section) {
      const yOffset = 100; 
      const y = section.getBoundingClientRect().top + window.pageYOffset - yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  }
  
  return (
    <>
      <input id="menu__toggle" type="checkbox" />
      <label className="menu__btn" htmlFor="menu__toggle">
        <span></span>
      </label>

      <div className="menu__box">
        <ul className='menu-ul'>
            <li><a className="menu__item" href="#about" onClick={(event) => handleScrollToSection(event, "about")}>À PROPOS</a></li>
            <li><a className="menu__item" href="#gallery" onClick={(event) => handleScrollToSection(event, "gallery")}>PROJETS</a></li>
            <li><a className="menu__item" href="#skills" onClick={(event) => handleScrollToSection(event, "skills")}>COMPÉTENCES</a></li>
            <li><a className="menu__item" href="#contact" onClick={(event) => handleScrollToSection(event, "contact")}>CONTACT</a></li>
        </ul>

        <div className='menuLinks'>
        <a className='menuLinksBtn' href='https://github.com/CoggOnGit?tab=repositories'>
          <span className='menuTag'>GitHub</span>
          <img className='menuLinksBtnImg' src={githubIcon} alt="Github link" />
        </a>
        <a className='menuLinksBtn' href='https://github.com/CoggOnGit/my-portfolio/releases/download/cv/CV_Louis_COGGON.jpg' download="CV_Louis_COGGON.jpg" type="application/jpg">
          <span className='menuTag'>C V</span>
          <img className='menuLinksBtnImg' src={cvIcon} alt="CV" />
        </a>
      </div>
      <div className='menuConnexion'>
                {isLoggedIn ? (
                    <Link className='connexionLink' to={`/connexion`}>
                    <button className='logoutMenuBtn' onClick={handleLogout}>Se déconnecter</button>
                    </Link>
                ) : (
                    <Link className='connexionLink' to={`/connexion`}>
                        <button className='loginMenuBtn'>Se connecter</button>
                    </Link>
                )}
            </div>
      </div>
    </>
  );
}

export default Menu;


