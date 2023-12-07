import React, { useEffect, useState } from 'react';
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';

import './Gallery.scss';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { projetsData } from '../../data/projetsData';

function Projets() {
  useEffect(() => {
    Aos.init();
  }, []);

    const [activeCategory, setActiveCategory] = useState('TOUT'); 

    const filteredProjects = projetsData.filter((projet) => {
      const isProjectInSelectedCategory =
        activeCategory === 'TOUT' ||
        projet.category_id.includes(activeCategory);
  
      return isProjectInSelectedCategory;
    });

  const backgroundImageStyle = (imageSrc) => ({
    backgroundImage: `url(${imageSrc})`,
  });

  return (
    <section className='projetsSection' id='gallery'>
      <h2>MES PROJETS</h2>
      <div className='projetsCategories'>
        <ul className='projetsUl'>
          <li 
            onClick={() => setActiveCategory('TOUT')} 
            className={activeCategory === 'TOUT' ? 'active' : ''}
          >
            TOUT
          </li>
          <li 
            onClick={() => setActiveCategory('D')} 
            className={activeCategory === 'D' ? 'active' : ''}
          >
            WEB DESIGN
          </li>
          <li 
            onClick={() => setActiveCategory('W')} 
            className={activeCategory === 'W' ? 'active' : ''}
          >
            WEB DEV
          </li>
          <li 
            onClick={() => setActiveCategory('P')} 
            className={activeCategory === 'P' ? 'active' : ''}
          >
            PRINT
          </li>
          <li 
            onClick={() => setActiveCategory('L')} 
            className={activeCategory === 'L' ? 'active' : ''}
          >
            LOGO
          </li>
        </ul>
      </div>
      <div className='projetsGalerie'>
        {filteredProjects.map((projet) => (
          <Link to={`/projet/${projet.id}`} key={projet.id} data-aos='fade-up' className='projetsGalerieCard' style={backgroundImageStyle(projet.pictures[0])}>
            <div className='cardTitle'>
              <h3>{projet.title}</h3>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default Projets;