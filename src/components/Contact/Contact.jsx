import { useState } from 'react';
import './Contact.scss';

function Contact() {

  const [showConfirmation, setShowConfirmation] = useState(false);
  const handleCheckboxChange = () => {
    setShowConfirmation(!showConfirmation); 
  };

  return (
    <div className='contact' id='contact'>
      <h2>ME CONTACTER</h2>
      <form name='contact' method='post' className='contact__form'>
        <div className='formDiv'>
        <label for='email'>Email: </label>
        <input type="email" name='email'/>

        <label for='message'>Message: </label>
        <textarea name='message'></textarea>
        </div>

        <button type='submit'>Envoyer</button>
      </form>
    </div>
  );
}

export default Contact;