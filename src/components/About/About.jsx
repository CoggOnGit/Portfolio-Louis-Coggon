import './About.scss';
import Lottie from 'lottie-react';
import aboutAnimation from '../../assets/animations/animation_lnyhjgzv.json';

function About() {

  return (
    <section className='about' id='about'>
      <div className='aboutTitle'>
        <hr className='ligneTitle' />
        <h2>À PROPOS</h2>
        <hr className='ligneTitle' />
      </div>
      <div className='aboutInfo'>
        <Lottie className='aboutAnimation' animationData={aboutAnimation} aria-label="Animation d'un process de développement"/>
        <div className='aboutTexte'>
          <p>Bienvenue sur mon univers créatif ! Je suis Louis Coggon, un passionné de design et de développement.</p>
          {/* <p>En tant qu'auto-entrepreneur, je mets à profit mon expérience diversifiée pour offrir des solutions complètes en design graphique, développement web, print et bien plus encore. Ma boîte à outils créative comprend des logiciels tels qu'Illustrator, Photoshop, AdobeXD, Indesign, et Figma, me permettant de donner vie à vos idées ! En tant que développeur, je suis à l'aise avec les langages tels que HTML/CSS, JS, React, et SASS, ainsi que l'intégration avec divers CMS.</p> */}
          <p>En tant qu'auto-entrepreneur, je mets à profit l'expérience que j'ai acquis durant mes formations de développeur web chez OpenClassrooms et de web designer chez Pop School pour offrir des solutions complètes en design graphique, développement web, print et bien plus encore. Ma boîte à outils créative comprend des logiciels tels qu'Illustrator, Photoshop, AdobeXD, Indesign, et Figma, me permettant de donner vie à vos idées ! En tant que développeur, je suis à l'aise avec les langages tels que HTML/CSS, JS, React, et SASS, ainsi que l'intégration avec divers CMS.</p>
          <p>Explorez mes compétences polyvalentes et découvrez comment je peux donner vie à vos projets. N'hésitez pas à me contacter pour discuter de vos besoins spécifiques.</p>
        </div>
      </div>
    </section>
  );
}

export default About;