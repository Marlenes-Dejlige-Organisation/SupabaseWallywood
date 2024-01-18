import { ContentWrapper } from "../../components/ContentWrapper/ContentWrapper"



export const About =() =>{
    return(
        <>
   
        <ContentWrapper title="Om os">
            <img src="" alt="billede af en stjerne" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia atque nulla harum quidem dolore quasi unde. Dolorum deserunt voluptatum natus aut suscipit. Earum iste ratione eum molestias explicabo iure quisquam.</p>
            <p>React blev udviklet af Facebook og er designet til at gøre det lettere at opbygge effektive og genanvendelige brugergrænseflader i webapplikationer.</p>
            <p>Selvom React i sig selv ikke er et framework, bruges det ofte sammen med andre værktøjer og biblioteker som Redux for tilstandsstyring eller React Router for navigering. Sammen med disse kan React danne kernen i udviklingen af moderne, dynamiske webapplikationer.</p>
        </ContentWrapper>
        </>
    )
}