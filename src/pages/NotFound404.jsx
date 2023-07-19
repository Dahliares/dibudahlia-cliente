import ToadGif from '../img/toad.gif'
import '../components/Loading.css'

export function NotFound404() {
    return (
        <div className='loading'>
            <h1>Página no encontrada!!!!</h1>
            <img src={ToadGif} alt="loading"/>
        </div>
    )
}
