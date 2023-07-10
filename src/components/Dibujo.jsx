import '../components/Grid.css'

export function Dibujo({ dibujo }) {
 
    return (

        <div className="dibujo">
            <img src={dibujo.img} alt={dibujo.nombre} />
        </div>


    )
}
