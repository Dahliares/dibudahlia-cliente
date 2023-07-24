import { useState, useEffect} from "react";
import { Comentario } from './Comentario';
import './ListaComments.css'

export function ListaComments({id}) {

    
    const [comentarios, setComentarios] = useState();

    useEffect(() => {
       
          fetch(`https://saraland-server.up.railway.app/comentarios/${id}`)
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
