import './ListaComments.css'

export function Comentario({comentario}) {

    return (
        <div className="comentario">
            <div><strong>{comentario.user}</strong> </div>
            <div>{comentario.comentario}</div>
        </div>
    )
}
