import {ListaComments} from './ListaComments'
import {CommentForm} from './CommentForm'

export function Comentarios({id}) {
    return (
        <div>
            <h2>Comentarios</h2>
            <ListaComments id={id}/>
            <h3>Deja tu comentario para ayudar a la artista con tu opinión</h3>
            <CommentForm id={id}/>
        </div>
    )
}
