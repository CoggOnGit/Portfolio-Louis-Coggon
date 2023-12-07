import { projetsData } from '../../data/projetsData';
import './ProjetSupprimer.scss';

function ProjetSupprimer() {
    return (
      <section className='projetSupprimerSection'>
        
        {projetsData.map((projet) => (
          <div
            key={projet.id}
            style={{ backgroundImage: `url(${projet.pictures[0]})` }}
            className="projet-item"
            onClick={() => console.log(`Projet sélectionné : ${projet.id}`)} // Remplacez par votre logique de sélection
          >
            <button type='button' className='editBtn'>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.71 4.0425C18.1 3.6525 18.1 3.0025 17.71 2.6325L15.37 0.2925C15 -0.0975 14.35 -0.0975 13.96 0.2925L12.12 2.1225L15.87 5.8725M0 14.2525V18.0025H3.75L14.81 6.9325L11.06 3.1825L0 14.2525Z" fill="black"/>
                </svg>
            </button>
            <button type='button' className='deleteBtn'>
                <svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 18C2.45 18 1.97933 17.8043 1.588 17.413C1.19667 17.0217 1.00067 16.5507 1 16V3H0V1H5V0H11V1H16V3H15V16C15 16.55 14.8043 17.021 14.413 17.413C14.0217 17.805 13.5507 18.0007 13 18H3ZM5 14H7V5H5V14ZM9 14H11V5H9V14Z" fill="black"/>
                </svg>
            </button>
          </div>
        ))}
      </section>
    );
  }
  
  export default ProjetSupprimer;