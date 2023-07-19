import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useNavigate } from 'react-router-dom';

export function ContactForm() {

    const SERVICE_ID = process.env.REACT_APP_SERVICE_ID;
    const TEMPLATE_ID = process.env.REACT_APP_TEMPLATE_ID;
    const PUBLIC_KEY = process.env.REACT_APP_PUBLIC_KEY;
    
        const navigate = useNavigate();
        const form = useRef();
      
        const sendEmail = (e) => {
          e.preventDefault();
    
          emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
          .then((result) => {
              console.log(result.text);
              alert("Mensaje enviado!");
            navigate('/');
              
          }, (error) => {
              console.log(error.text);
              alert("Error, mensaje no enviado!");
          });
      };

    return (
        <div className="contacto">      

        <div className="form-container">
            <div className="contacto-p">
                Si quieres enviarme un mensaje estaré encantada de leerlo y contestarte.
                <br/>Ya sea solo para saludar, para dar alguna idea, o para comprar alguna de
                    mis obras.

            </div>

            <form id="form" className="form" ref={form} onSubmit={sendEmail}>

                <label htmlFor="from_name">Tu nombre:</label>
                <input type="text" name="from_name" id="from_name" required />

                <label htmlFor="email">Tu e-mail (si tienes):</label>
                <input type="text" name="email" id="email" />

                <label htmlFor="message">Tu mensaje:</label>
                <textarea name="message" id="message" rows="4" required></textarea>

                <input type="submit" id="button" value="Enviar mensaje" />
            </form>
        </div>


    </div>
    )
}
