import { FavoriteColor } from "../../components/FavColor/FavColor"
import {ClickCounter} from '../../components/ClickCounter/ClickCounter';
import { GreetingComponent } from "../../components/Greeting/Greeting";
import {CustomHook} from '../../components/CustomHook/CustomHook'
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
        <h2>CustomHook:</h2>
        <CustomHook/>
    </div>
        </>
    )
}