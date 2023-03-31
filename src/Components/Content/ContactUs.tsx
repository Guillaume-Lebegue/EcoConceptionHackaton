import React from 'react'
import './Contact.css';

export default function ContactUs() {
  return (
    <div className='contactUs'>
      <h3>Nous contacter</h3>
      <div className='boxContact'>
        <div className='form'>
          <p>
            Pour toute réservation nous vous invitons à contacter directement le restaurant pas téléphone.
            <br/><br/>
            <big>Par mail.</big>
        </p>
        <div className='buttonMail'>
          <a href={`mailto:adresse@exemple.com?subject=Demande d'information&cc=contact@exemple.com&body=${encodeURIComponent("Bonjour je vous contacte pour vous poser une question vis à vis de votre boulangerie")}`}>Envoyer un e-mail</a>
        </div>
      </div>
      <div className='coord'>
        <h4>Nos coordonnées</h4>
        <big>Siège Lugnac</big>
        <p>4 rue Censier, Paris 7<br/><br/>+33 1 42 56 11 26</p>
      </div>
      </div>
    </div>
  )
}
