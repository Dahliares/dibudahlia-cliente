import dahlia from '../img/dahlita.png'
import '../components/Profile.css'

export function Profile() {
    return (

        <div className="perfil">
            <div>
                <img src={dahlia} alt="dahlia" />

            </div>

            <div className="perfil-descripcion">
                Hola, mi nombre es <strong>Dahlia</strong> y tengo 8 años.<br /><br />
                Soy una niña alegre y divertida. Me fascina pintar, dibujar y explorar todo lo relacionado con cualquier
                actividad artística.
                Cuando cojo un pincel o un lápiz, siento que el mundo se llena de colores mágicos y posibilidades
                infinitas.<br /><br />
                Me encanta crear mis propias obras de arte, ya sea utilizando acuarelas, pasteles, crayones o cualquier
                otro material que me pongan a mano.
                Me gusta compartir mis creaciones con mi familia y amigos, y ver sus sonrisas cuando miran mis obras de
                arte.<br /><br />
                Sueño con convertirme en una artista famosa algún día y compartir mi pasión con el mundo.
            </div>
        </div>

    )
}
