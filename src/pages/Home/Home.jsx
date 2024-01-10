import { ContentWrapper } from "../../components/ContentWrapper/ContentWrapper"
import { List, array } from '../../components/List/List'
import { Helmet } from 'react-helmet';

export const Home =() =>{
    return(<>
        <Helmet>
        <title>The Company</title>
      </Helmet>
        <ContentWrapper title="Home">
            <List data={array} />
        </ContentWrapper>
        </>
    )
}