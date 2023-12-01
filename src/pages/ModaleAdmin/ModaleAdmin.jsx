import React, { useState } from 'react';
import './ModaleAdmin.scss';
import ScrollToTop from '../../components/ScrollToTop/ScrollToTop';
import ProjetAjouter from '../../components/ProjetAjouter/ProjetAjouter';
import ProjetSupprimer from '../../components/ProjetSupprimer/ProjetSupprimer';

function ModaleAdmin() {
    const [showAjouter, setShowAjouter] = useState(false);

    const toggleAjouter = () => {
        setShowAjouter(!showAjouter);
    };

    return (
        <section className='modaleSection'>
            <ScrollToTop />
            <h2>MODIFIER LES PROJETS</h2>
            <button type='button' className='addBtn' onClick={toggleAjouter}>
                {showAjouter ? 'Retour' : 'Ajouter un projet'}
            </button>
            {showAjouter ? <ProjetAjouter /> : <ProjetSupprimer />}
        </section>
    );
}

export default ModaleAdmin;