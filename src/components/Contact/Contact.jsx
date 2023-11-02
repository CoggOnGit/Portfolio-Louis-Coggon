import './Contact.scss';

function Contact() {
  return (
    <div className='contact' id='contact'>
      <h2>ME CONTACTER</h2>
      <form action="/envoyer" method="post">
        <div className='formDiv'>
          <label htmlFor="email">E-mail :</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className='formDiv'>
          <label htmlFor="message">Message :</label>
          <textarea id="message" name="message" rows="4" required />
        </div>

        <div className='contactBtn'>
          <button id="submit" type="submit">Envoyer</button>
        </div>
      </form>
    </div>
  );
}

export default Contact;