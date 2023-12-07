import About from '../../components/About/About'         
import Skills from '../../components/Skills/Skills.jsx';
import Gallery from '../../components/Gallery/Gallery.jsx';
import Header from '../../components/Header/Header.jsx'; 
import Contact from '../../components/Contact/Contact.jsx';



function Accueil() {

    return (
        <>
        <Header />
        <About/>
        <Gallery/>
        <Skills/>      
        <Contact/>
        </>
    );
}

export default Accueil;