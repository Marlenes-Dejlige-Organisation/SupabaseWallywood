import { ContentWrapper } from "../../components/ContentWrapper/ContentWrapper"
import { Helmet } from 'react-helmet';
import { TheCompany } from "../../components/TheCompany/TheCompany";

export const About =() =>{
    return(
        <>
        <Helmet><title>About The Company</title></Helmet>
        <ContentWrapper title="About">
            <h3>we are <TheCompany/></h3>
        </ContentWrapper>
        </>
    )
}