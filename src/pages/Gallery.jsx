import { Grid } from '../components/Grid'
import dibujos from '../img/dibujos.json'
import '../components/Grid.css'



export function Gallery() {

    console.log(dibujos);


    return (
        <div>
            <h1>Mis dibujos</h1>           
            <Grid />
               

        </div>
    )
}
