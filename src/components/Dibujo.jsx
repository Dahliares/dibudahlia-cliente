import '../components/Grid.css'
import {Link} from "react-router-dom";
import Vendido from '../img/vendido.png'

export function Dibujo({ dibujo }) {

     
    return (

        <Link to={`/dibujo/${dibujo.id}`}>
            <div className="dibujo">
                <img src={dibujo.img} alt={dibujo.name} />
                <div className='subtitulo'>{dibujo.name}</div>
                <img className="vendido" src={Vendido} alt="vendido" hidden={dibujo.vendido? false:true}/>
                
            </div>
        </Link>


    )
}
