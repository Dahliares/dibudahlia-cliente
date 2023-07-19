import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"
import { Loading } from '../components/Loading';
import { BotonVolver } from "../components/BotonVolver";
import './Detalles.css'

export function Detalles() {

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
         {isLoading ? 
         <Loading /> :          
         <div className="detalle">
        
             <div className="detalle-container">
                 <img className='detalle-img' src={dibujo?.img} alt={dibujo?.nombre} />
        
                 <div className="detalles">
                     <div><strong>Título: </strong><br />{dibujo?.name}</div>
                     <div><strong>Descripción: </strong> <br />{dibujo?.description}</div>
                     <div><strong>Año de creación:</strong> <br />{dibujo?.year}</div>
                     <div><strong>{dibujo.vendido? "VENDIDO":""}</strong></div>
                 </div>
             </div>
             <BotonVolver />
         </div>
         }       
         
       </>
    )
}
