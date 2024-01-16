import React from 'react';
import { ContentWrapper } from "../../components/ContentWrapper/ContentWrapper";
import { List, array } from '../../components/List/List';
import { TheCompany } from "../../components/TheCompany/TheCompany";

export const Home = () => {
    return (
        <>
            <title>The Company</title>
            <ContentWrapper title={<><TheCompany/> lærer react</>}>
                Her er en liste:
                <List data={array} />
            </ContentWrapper>
        </>
    );
};
