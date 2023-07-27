import {ListaComments} from './ListaComments';


export function Comentarios({id}) {

    

    return (
        <div>
            <h2>Comentarios</h2>
            <ListaComments id={id}/>
            
        </div>
    )
}
