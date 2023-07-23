export function Comentario({comentario}) {

    return (
        <div className="comentario">
            <div><strong>Nombre:</strong> {comentario.user}</div>
            <div>{comentario.comentario}</div>
        </div>
    )
}
