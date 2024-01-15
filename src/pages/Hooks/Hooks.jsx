import { FavoriteColor } from "../../components/FavColor/FavColor"
import {ClickCounter} from '../../components/ClickCounter/ClickCounter';
import { GreetingComponent } from "../../components/Greeting/Greeting";
export const Hooks =() =>{
    return(
        <>
        <h2>Button:</h2>
        <FavoriteColor />
        <div>
        <h2>Counter:</h2>
        <ClickCounter />
        <h2>Greeting:</h2>
        <GreetingComponent />
    </div>
        </>
    )
}