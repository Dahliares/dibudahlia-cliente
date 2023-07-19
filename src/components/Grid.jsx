import { useState, useEffect } from 'react';
import { Dibujo } from './Dibujo';
import { Loading } from './Loading';



export function Grid() {

  const [dibujos, setDibujos] = useState();
  
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch("https://saraland-server.up.railway.app",{
      'mode': 'cors',
      'headers': {
          'Access-Control-Allow-Origin': '*',
      }})
      .then((response) => response.json())
      .then((res) => {
        setDibujos(res);
        setIsLoading(false);
      }
      )
      .catch((err) => console.log(err));


  }, []);


  return (
    <>
      {isLoading? <Loading /> : ""}
      <div className='graella'>
        
        {dibujos?.map((item) => (
          <Dibujo key={item.id} dibujo={item} />
        ))}
      </div>
    </>



  )


}