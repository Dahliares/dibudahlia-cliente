import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"
import './Detalle.css'
import { BotonVolver } from "../components/BotonVolver";


export function Detalle() {

    const [dibujo, setDibujo] = useState(null);
    const {id} = useParams();

    useEffect(() => {
        fetch(`http://localhost:3333/dibujo/${id}`)
          .then((response) => response.json())  
          .then((res) => setDibujo(res[0]))
          .catch((err) => console.log(err));   
  
      }, [id]);

    return (
        
          <div className="detalle">
            <h1>Detalles de la obra</h1>
            
            <div><strong>Título: </strong><br/>{dibujo?.name}</div>

            <div><strong>Descripción: </strong> <br/>{dibujo?.description}</div>
            <div><strong>Año de creación:</strong> <br/>{dibujo?.year}</div>
            <img src={dibujo?.img} alt={dibujo?.nombre} />
            <BotonVolver />
            
          </div>
            
        
    )
}
