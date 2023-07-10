import { useState, useEffect } from 'react';
import dibujosJson from '../img/dibujos.json';
import { Dibujo } from './Dibujo';
import '../components/Grid.css';
import Loading from './../img/loading.gif'


export function Grid() {

  const [dibujos, setDibujos] = useState(dibujosJson);
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch("http://localhost:3333")
      .then((response) => response.json())
      .then((res) => {
        setData(res);
        setIsLoading(false);
      }
      )
      .catch((err) => console.log(err));


  }, []);


  return (
    <>
      <div className='loading'>{isLoading ? 
        <>
        <div>Cargando...</div>
        <img src={Loading} /> 
          
        </>
        : ""}</div>
      <div className='graella'>

        {data?.map((item) => (
          <Dibujo key={item.id} dibujo={item} />
        ))}
      </div>
    </>



  )

  /*{dibujosJson.dibujos.map((dibujo) => (
            <Dibujo key={dibujo.id} dibujo={dibujo}/>
          ))}*/
}