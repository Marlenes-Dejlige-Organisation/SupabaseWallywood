// Plakater.jsx
import React, { useState } from 'react';
import styles from './Plakater.module.scss';
import { GenreNav } from '../../components/Poster-routing/GenreNav';
import { ContentWrapper } from "../../components/ContentWrapper/ContentWrapper";
import { Outlet, useNavigate } from "react-router-dom";
import { PosterList } from '../../components/Poster-routing/PosterList';

export const Plakater = () => {
  const [defaultGenre, setDefaultGenre] = useState(null);
  const navigate = useNavigate();

  const handleDefaultGenreSelected = (genre) => {
    setDefaultGenre(genre);
    navigate(`/plakater/${genre}`);
  };

  return (
    <ContentWrapper title="Plakater">
      <div className={styles.pageContainer}>
        <div className={styles.ListContainer}>
          <GenreNav onDefaultGenreSelected={handleDefaultGenreSelected} />
        </div>
        <div className={styles.posterContainer}>
          <Outlet />
        </div>
      </div>
    </ContentWrapper>
  );
};
