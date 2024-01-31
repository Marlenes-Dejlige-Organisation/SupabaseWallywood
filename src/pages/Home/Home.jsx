import React from 'react';

import { ContentWrapper } from "../../components/ContentWrapper/ContentWrapper";
import  Curtains from '../../assets/images/curtains.jpg'
import styles from './Home.module.scss'
import { HomeCards } from '../../components/HomeCards/HomeCards';

export const Home = () => {
    return (
        <>
            <title>WALLYWOOD</title>
            <header> <img src={Curtains} alt="gardiner" /></header>
            <ContentWrapper title={<>Sidste nyt...</>}>
                <HomeCards/>
               
            </ContentWrapper>
        </>
    );
};
