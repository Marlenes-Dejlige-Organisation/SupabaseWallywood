import { ContentWrapper } from "../../components/ContentWrapper/ContentWrapper"

import { TheCompany } from "../../components/TheCompany/TheCompany";

export const About =() =>{
    return(
        <>
   
        <ContentWrapper title="Om">
            <h3>Hej! Jeg er <TheCompany/> og jeg er ved at lære React. </h3>
            <p>React blev udviklet af Facebook og er designet til at gøre det lettere at opbygge effektive og genanvendelige brugergrænseflader i webapplikationer.</p>
            <p>Selvom React i sig selv ikke er et framework, bruges det ofte sammen med andre værktøjer og biblioteker som Redux for tilstandsstyring eller React Router for navigering. Sammen med disse kan React danne kernen i udviklingen af moderne, dynamiske webapplikationer.</p>
        </ContentWrapper>
        </>
    )
}