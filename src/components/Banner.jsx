import './Banner.css'
import Oferta from '../img/oferta.gif'

export function Banner() {
    return (
        <div className="banner">
            <img src={Oferta} alt="banner-oferta" />
            <h2>Estamos de rebajas de verano, todos los dibujos a <span className='euro'>1€</span> <br/>
            No dudes es llevarte a casa un "Dahlia" original y presume de cuadro nuevo en tu salón!</h2>
            
            
            
        </div>
    )
}
