import { Grid } from '../components/Grid'
import dibujos from '../img/dibujos.json'
import '../components/Grid.css'
import { Banner } from '../components/Banner';
import oferta from './../img/oferta.webp'

export function Gallery() {

    console.log(dibujos);


    return (
        <div>
            <h1>Mis dibujos</h1>
            <Banner />
            <Grid />
               

        </div>
    )
}
