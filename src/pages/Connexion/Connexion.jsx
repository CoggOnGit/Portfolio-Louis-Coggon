import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { testData } from '../../data/testData';
import ScrollToTop from '../../components/ScrollToTop/ScrollToTop';
import './Connexion.scss';

function Connexion({ setIsLoggedIn }) {
    const navigate = useNavigate();
    const [token, setToken] = useState(localStorage.getItem('userToken') || '');

    const handleSubmit = (event) => {
        event.preventDefault();
        const { name, password } = event.target.elements;
        const user = testData.find(user => user.user_name === name.value && user.user_password === password.value);
        
        if (user) {
            const userToken = 'someTokenValue';
            localStorage.setItem('userToken', userToken);
            setToken(userToken);
            setIsLoggedIn(true); // Met à jour l'état de connexion
            navigate('/'); // Redirige vers la page d'accueil
        } else {
            alert('Identifiants incorrects');
        }
    }

    return (
        <section className='connexionSection'>
            <ScrollToTop />
            <h2>CONNEXION</h2>

            <form className='connexionForm' onSubmit={handleSubmit}>
                <div className='connexionFormDiv'>
                    <label htmlFor='name'>Nom d'utilisateur :</label>
                    <input type='text' name='name' id='name' required />
                </div>
                <div className='connexionFormDiv'>
                    <label htmlFor='password'>Mot de passe :</label>
                    <input type='text' name='password' id='password' required />
                </div>
                <input className='connexionBtn' type="submit" value="SE CONNECTER"  />
            </form>
        </section>
    )
}

export default Connexion;