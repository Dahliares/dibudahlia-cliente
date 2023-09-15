
import '../components/ContactForm.css';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';


export function AddForm() {

    const form = useRef(null);
    const navigate = useNavigate();

    const handleSubmit = (e) => {

        e.preventDefault();
    
        let data = new FormData(form.current);
    
    
        fetch('https://saraland-server.up.railway.app/add', {
          method: 'POST',
          body: data,
    
        })
          .then(res => res.json())
          .then(res => {
            console.log(res);
            alert("Dibujo guardado correctamente");
            navigate('/');
          })
          .catch(err => console.log(err))
    
      }


    return (
        <div className="contacto">

            <div className="form-container">
                <div className="contacto-p">
                    Sube un dibujo nuevo a tu base de datos
                </div>

                <form id="Addform" ref={form} encType="multipart/form-data" className="form">

                    <label htmlFor="name">Nombre:</label>
                    <input type="text" name="name" id="name" required />

                    <label htmlFor="year">Año:</label>
                    <input type="text" name="year" id="year" />

                    <label htmlFor="description">Descripcción:</label>
                    <textarea name="description" id="description" rows="4" required></textarea>

                    <label htmlFor="file">Imagen:</label>
                    <input type='file' name='file' id='file' />

                    <input type="submit" id="button" value="Añadir dibujo" onClick={handleSubmit}/>
                </form>
            </div>


        </div>
    )
}
