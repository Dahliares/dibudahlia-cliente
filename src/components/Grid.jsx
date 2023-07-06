import { useState, useEffect } from 'react';
import dibujosJson from '../img/dibujos.json';
import { Dibujo } from './Dibujo';
import '../components/Grid.css';


export function Grid(){

    const [dibujos, setDibujos] = useState(dibujosJson);
    const [data, setData] = useState();

    useEffect(() => {
      fetch("http://localhost:3333/all")
        .then((response) => response.json())  
	      .then((res) => setData(res))
        .catch((err) => console.log(err));   

    }, []);
    

    return(

        <div className='graella'>
          {data?.map((item) => (            
            <Dibujo key={item.id} dibujo={item}/>
          ))}
        </div>



    )

/*{dibujosJson.dibujos.map((dibujo) => (
          <Dibujo key={dibujo.id} dibujo={dibujo}/>
        ))}*/
}