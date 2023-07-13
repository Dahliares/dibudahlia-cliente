import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"


export function Detalle() {

    const [dibujo, setDibujo] = useState(null);
    const {id} = useParams();

    useEffect(() => {
        fetch('http://localhost:3333/'+ id)
          .then((response) => response.json())  
          .then((res) => setDibujo(res[0]))
          .catch((err) => console.log(err));   
  
      }, [id]);

    return (
        
             
             
                 
                <div>hola</div>
              
                
            
            
        
    )
}
