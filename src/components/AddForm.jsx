
import '../components/ContactForm.css'


export function AddForm() {

   


    return (
        <div className="contacto">

            <div className="form-container">
                <div className="contacto-p">
                    Sube un dibujo nuevo a tu base de datos
                </div>

                <form id="Addform" method='post' action='http://localhost:3333/add' enctype="multipart/form-data" className="form">

                    <label htmlFor="name">Nombre:</label>
                    <input type="text" name="name" id="name" required />

                    <label htmlFor="year">Año:</label>
                    <input type="text" name="year" id="year" />

                    <label htmlFor="description">Descripcción:</label>
                    <textarea name="description" id="description" rows="4" required></textarea>

                    <label htmlFor="file">Imagen:</label>
                    <input type='file' name='file' id='file' />

                    <input type="submit" id="button" value="Añadir dibujo" />
                </form>
            </div>


        </div>
    )
}
