import '../components/Grid.css'
import {Link} from "react-router-dom";

export function Dibujo({ dibujo }) {

     
    return (

        <Link to={`/dibujo/${dibujo.id}`}>
            <div className="dibujo">
                <img src={dibujo.img} alt={dibujo.nombre} />
            </div>
        </Link>


    )
}
