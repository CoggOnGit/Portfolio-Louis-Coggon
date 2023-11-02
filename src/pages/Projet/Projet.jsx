import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Error from '../Error/Error';
import './Projet.scss';
import GitLogo from '../../assets/logos/github-logo.webp';

function Projet({ data }) {
  const { id } = useParams();
  const [selectedCard, setSelectedCard] = useState(null);
  const [visibleBoxIndex, setVisibleBoxIndex] = useState(0);

  useEffect(() => {
    const card = data.find((projet) => projet.id === id);
    setSelectedCard(card);
  }, [id, data]);

  if (!selectedCard) {
    return <Error />;
  }

  const backgroundImageStyle = (imageSrc) => ({
    backgroundImage: `url(${imageSrc})`,
  });

  const showPreviousBox = () => {
    if (visibleBoxIndex === 0) {
      setVisibleBoxIndex(selectedCard.pictures.length - 1); 
    } else {
      setVisibleBoxIndex((prevIndex) => prevIndex - 1);
    }
  };

  const showNextBox = () => {
    if (visibleBoxIndex === selectedCard.pictures.length - 1) {
      setVisibleBoxIndex(0); 
    } else {
      setVisibleBoxIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <div className="projetSection">
      <h1>{selectedCard.title}</h1>
      <a href={selectedCard.lien} alt="Lien vers repo GitHub du projet">
        <img src={GitLogo} alt="Logo GitHub" className="logoGit" />
      </a>

      <div className="tags">
        {selectedCard.tags.map((tag, index) => (
          <span key={index} className={`tag ${tag.toLowerCase()}`}>
            {tag}
          </span>
        ))}
      </div>

      <div className="carouselContainer">
        <button className="carouselBtn" onClick={showPreviousBox}>
          <div className="carouselBtnL"></div>
        </button>
        <div className="carouselProjet">
          {selectedCard.pictures.map((image, index) => (
            <div
              key={index}
              className={`box box1 ${index === visibleBoxIndex ? 'visible' : ''}`}
              style={backgroundImageStyle(image)}
            ></div>
          ))}
        </div>
        <button className="carouselBtn" onClick={showNextBox}>
          <div className="carouselBtnD"></div>
        </button>
      </div>

      <div className="projetAbout">
        <p className="projetDescription">{selectedCard.description}</p>
        <p className="projetDescription">{selectedCard.contraintes}</p>
      </div>
    </div>
  );
}

export default Projet;