import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"
import './Detalle.css'
import { BotonVolver } from "../components/BotonVolver";
import { Loading } from '../components/Loading';


export function Detalle() {

    const [dibujo, setDibujo] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const {id} = useParams();

    useEffect(() => {
      setIsLoading(true);
        fetch(`https://saraland-server.up.railway.app/dibujo/${id}`)
          .then((response) => response.json())  
          .then((res) => {
            setDibujo(res[0]); 
            setIsLoading(false);
          })
          .catch((err) => console.log(err));   
  
      }, [id]);

    return (


        <>
          <h1>Detalles de la obra</h1>
          {isLoading? <Loading /> : ""}
            <div className="detalle">             
              
              <div className="detalle-container">
                <img className='detalle-img' src={dibujo?.img} alt={dibujo?.nombre} />
                
                <div className="detalles">
                  <div><strong>Título: </strong><br/>{dibujo?.name}</div>
                  <div><strong>Descripción: </strong> <br/>{dibujo?.description}</div>
                  <div><strong>Año de creación:</strong> <br/>{dibujo?.year}</div>
                </div>
              </div>
              
              <BotonVolver />
              
            </div>
        </>
            
        
    )
}
