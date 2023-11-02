import './Menu.scss';
import githubIcon from '../../assets/logos/github-icon.webp';
import cvIcon from '../../assets/logos/cv-icon.webp';

function Menu() {

  function handleScrollToSection(event, sectionId) {
    event.preventDefault(); // Empêche le comportement de lien par défaut
  
    const section = document.getElementById(sectionId);
    if (section) {
      const yOffset = 100; // Décalage de 100 pixels
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
        <a className='menuLinksBtn' href='../../../public/CV_Louis_COGGON.jpg' download="CV_Louis_COGGON.jpg" type="application/jpg">
          <span className='menuTag'>C V</span>
          <img className='menuLinksBtnImg' src={cvIcon} alt="CV" />
        </a>
      </div>
      </div>
    </>
  );
}

export default Menu;


