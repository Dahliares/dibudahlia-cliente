import '../components/Grid.css'

export function Dibujo({ dibujo }) {
 
    return (

        <div className="dibujo">
            <img src={""} alt={dibujo.nombre} />
            <h3 className="nombre">{dibujo.name}</h3>
            <div className="fecha">{dibujo.year}</div>
            <div className="descripcion">{dibujo.description}</div>
        </div>


    )
}
