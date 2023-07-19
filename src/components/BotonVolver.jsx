import { Link } from 'react-router-dom'
import './BotonVolver.css'

export function BotonVolver() {
    return (
        <Link to='/' >
            <button className='volver'>
                Volver
            </button>
        </Link>
    )
}
