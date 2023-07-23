import './CommentForm.css'

export function CommentForm() {
    return (
        <form className='comment-form'>
            <label htmlFor="nombre">Tu nombre </label>
            <input type="text" name="nombre" id="nombre" />
            <label htmlFor="comentario">Comentario: </label>
            <textarea name="comentario" id="comentario" rows="5"></textarea>
            <input className="btn-enviar" type="submit" value="Enviar" />
        </form>
    )
}
