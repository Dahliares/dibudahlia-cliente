import { useState, useEffect } from 'react';
import { Dibujo } from './Dibujo';
import { Loading } from './Loading';



export function Grid() {

  const [dibujos, setDibujos] = useState();
  
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch("http://localhost:3333")
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