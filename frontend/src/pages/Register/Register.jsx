import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import ScrollToTop from '../../components/ScrollToTop/ScrollToTop';
import '../Connexion/Connexion';


function Register() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [apiResponse, setApiResponse] = useState("");

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post("http://localhost:8000/api/user/register.php", {
        username: username,
        password: password,
      })
      .then((response) => {
        console.log(response);
        setApiResponse(response.data.message);
      })
      .catch((error) => {
        console.error(error);
        setApiResponse(error.response.data.message);
      });
  };
    
    
    return (
        <section className='connexionSection'>
            <ScrollToTop />
            <h2>INSCRIPTION</h2>

            <form className='connexionForm' method='POST' onSubmit={handleSubmit}>
                {apiResponse && (
                    <Alert
                    severity={apiResponse.includes("success") ? "success" : "error"}
                    >
                    {apiResponse}
                    </Alert>
                )}
                <div className='connexionFormDiv'>
                    <label htmlFor='username'>Nom d'utilisateur :</label>
                    <input type='text' name='username' id='username' className='form-control' onChange={handleUsernameChange} value={username} required />
                </div>
                <div className='connexionFormDiv'>
                    <label htmlFor='password'>Mot de passe :</label>
                    <input type='password' name='password' id='password' className='form-control' onChange={handlePasswordChange} value={password} required />
                </div>
                <input className='connexionBtn' type="submit" name='submit' value="S'INSCRIRE"  />
            </form>
        </section>
    );
}

export default Register;
