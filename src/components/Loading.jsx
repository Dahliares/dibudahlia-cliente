import Pajaro from './../img/loading.gif';
import './Loading.css'

export function Loading() {



    return (

        
            <div className='loading'>
                <div>Cargando...</div>
                <img src={Pajaro} alt="loading" />
            </div>
        
    )
}




