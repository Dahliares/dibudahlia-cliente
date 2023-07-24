import './CommentForm.css'

export function CommentForm({id}) {

    const ide = id;

    const handleSubmit = (e) => {
        
        

        e.preventDefault();

        let data = {
            "user": e.target.user.value,
            "comentario": e.target.comentario.value,
            "id": ide
        }

        
        console.log(data);
        console.log(e.target.comentario.value);

        fetch('https://saraland-server.up.railway.app/comentario', {         
            method: 'POST',
            headers: {
              Accept: 'application/form-data',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
          })
            .then((resp) => resp.json())
            .then((data) => {
            
            console.log(data);
            alert(data.mensaje);
            window.location.reload(true) ;
            
    })
            .catch((err) => console.log(err));
        

    }



    return (
        <form className='comment-form' onSubmit={handleSubmit}>
            <label htmlFor="user">Tu nombre </label>
            <input type="text" name="user" id="user" required />
            <label htmlFor="comentario">Comentario: </label>
            <textarea name="comentario" id="comentario" rows="5" required></textarea>
            <input className="btn-enviar" type="submit" value="Enviar" />
        </form>
    )
}
