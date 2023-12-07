import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import ScrollToTop from '../../components/ScrollToTop/ScrollToTop';
import './Connexion.scss';

function Connexion() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setError(""); 

    axios
      .post("http://localhost:8000/api/user/login.php", {
        username: username,
        password: password,
      })
      .then((response) => {
        console.log(response);
        if (response.data.status === "success") {
          sessionStorage.setItem("loggedIn", true);
          sessionStorage.setItem("userData", JSON.stringify(response.data.data));
          navigate("/");
        } else {
          setError(response.data.message);
        }
      })
      .catch((error) => {
        console.error(error);
        setError("Une erreur s'est produite lors de la tentative de connexion."); 
      });
  };

  return (
    <section className='connexionSection'>
      <ScrollToTop />
      <h2>CONNEXION</h2>

      {error && <div className="error-message">{error}</div>} 

      <form className='connexionForm' onSubmit={handleSubmit}>
        <div className='connexionFormDiv'>
          <label htmlFor='username'>Nom d'utilisateur :</label>
          <input 
            type='text' 
            name='username' 
            id='username' 
            className='form-control' 
            onChange={handleUsernameChange} 
            value={username} 
            required 
          />
        </div>
        <div className='connexionFormDiv'>
          <label htmlFor='password'>Mot de passe :</label>
          <input 
            type='password' 
            name='password' 
            id='password' 
            className='form-control' 
            onChange={handlePasswordChange} 
            value={password} 
            required 
          />
        </div>
        <input className='connexionBtn' type="submit" value="SE CONNECTER" />
      </form>
    </section>
  );
}

export default Connexion;