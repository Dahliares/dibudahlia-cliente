import '../pages/Contacto.css'
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useNavigate } from 'react-router-dom';


export function Contacto() {


    const navigate = useNavigate();
    const form = useRef();
  
    const sendEmail = (e) => {
      e.preventDefault();

      emailjs.sendForm('default_service', 'template_wnqf9sh', form.current, 'mAyxNveNxqnZ_1nw8')
      .then((result) => {
          console.log(result.text);
          alert("Mensaje enviado!");
        navigate('/');
          
      }, (error) => {
          console.log(error.text);
      });
  };


    return (

        <div className="contacto">

            <h1 className="contacto-title">Enviame un mensaje!!</h1>

            <div className="form-container">
                <div className="contacto-p">
                    Si quieres enviarme un mensaje estaré encantada de leerlo y contestarte.
                    <br/>Ya sea solo para saludar, para dar alguna idea, o para comprar alguna de
                        mis obras.

                </div>

                <form id="form" className="form" ref={form} onSubmit={sendEmail}>

                    <label for="from_name">Tu nombre:</label>
                    <input type="text" name="from_name" id="from_name" required />

                    <label for="email">Tu e-mail (si tienes):</label>
                    <input type="text" name="email" id="email" />

                    <label for="message">Tu mensaje:</label>
                    <textarea name="message" id="message" rows="6" required></textarea>

                    <input type="submit" id="button" value="Enviar mensaje" />
                </form>
            </div>


        </div>



    )


}