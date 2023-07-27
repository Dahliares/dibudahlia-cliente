import { useState, useEffect } from "react";
import { Comentario } from './Comentario';
import './ListaComments.css';
import './CommentForm.css';
import { CommentForm } from "./CommentForm";

export function ListaComments({ id }) {

    const SumarComentario = () => {
        setNumComentarios(numComentarios + 1);
    }
    const [comentarios, setComentarios] = useState();
    const [numComentarios, setNumComentarios] = useState();

    useEffect(() => {

        fetch(`https://saraland-server.up.railway.app/comentarios/${id}`)
            .then((response) => response.json())
            .then((res) => {
                setComentarios(res);
                setNumComentarios(res.length);

            })
            .catch((err) => console.log(err));

    }, [id, numComentarios]);

    console.log(numComentarios);



    return (
        <div className="lista-comentarios">
            {comentarios?.map((comentario) => (
                <Comentario key={comentario.id} comentario={comentario} />


            ))}
            <h3>Deja tu comentario para ayudar a la artista con tu opinión</h3>
            <CommentForm id={id} SumarComentario={SumarComentario}/>
        </div>
    )
}
