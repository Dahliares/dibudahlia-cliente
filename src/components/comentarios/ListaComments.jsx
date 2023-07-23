import { useState, useEffect} from "react";
import { Comentario } from './Comentario';
import './ListaComments.css'

export function ListaComments() {

    const id = 1;
    const [comentarios, setComentarios] = useState();

    useEffect(() => {
       
          fetch(`http://localhost:3333/comentarios/${id}`)
            .then((response) => response.json())  
            .then((res) => {
                setComentarios(res); 
                console.log(res);
            })
            .catch((err) => console.log(err));   
    
        }, [id]);


    return (
        <div className="lista-comentarios">
            {comentarios?.map((comentario) => (
          <Comentario key={comentario.id} comentario={comentario} />
          
         
        ))}
        </div>
    )
}
