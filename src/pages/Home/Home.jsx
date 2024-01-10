import { ContentWrapper } from "../../components/ContentWrapper/ContentWrapper"
import { List, array } from '../../components/List/List'

export const Home =() =>{
    return(
        <ContentWrapper title="forside">
            <h1>velkommen til Home.jpx</h1>
            <List data={array} />
        </ContentWrapper>
    )
}