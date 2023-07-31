import { useNavigate } from 'react-router-dom';
import '../components/ContactForm.css'
import Swal from 'sweetalert2'

export function AddForm() {

        const navigate = useNavigate;
        let imgBase64;

          

    const aBase64 = (file) =>{
       console.log(file);
       
       const fileReader = new FileReader();
        fileReader.onload = function(e) {
            imgBase64 = e.target.result;            
        }
        fileReader.readAsDataURL(file);           
        
    }   
    
    const addDibujo = (e) => {
        e.preventDefault();

       
        let data = {
            "name" : e.target.name.value,
            "year" : e.target.year.value,
            "description" : e.target.year.description,
            "img" : imgBase64
        }

        fetch("/company/register", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(data),
        })
            .then((response) => {
                if (response.ok) {
                    return response;
                } else if (response.status === 404) {
                    alert("Dibujo no subido")
                } else {
                    alert("error no dibujo");
                }
            })
            .then((data) => {
                alert("dibujo insertado");
                navigate('/');
            });


    }
              
         
    return (
        <div className="contacto">      

        <div className="form-container">
            <div className="contacto-p">
                Sube un dibujo nuevo a tu base de datos
            </div>

            <form id="Addform" className="form" onSubmit={addDibujo}>

                <label htmlFor="name">Nombre:</label>
                <input type="text" name="name" id="name" required />

                <label htmlFor="year">Año:</label>
                <input type="text" name="year" id="year" />

                <label htmlFor="description">Descripcción:</label>
                <textarea name="description" id="description" rows="4" required></textarea>

                <label htmlFor="Imagen">Imagen:</label>
                <input type='file'onChange={(e)=>aBase64(e.target.files[0])}/>

                <input type="submit" id="button" value="Enviar mensaje" />
            </form>
        </div>


    </div>
    )
}
