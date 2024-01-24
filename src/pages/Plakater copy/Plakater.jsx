import React, { useState } from 'react';
import { PosterDetails } from "../../components/PosterDetails/PosterDetails";
import { Gallery } from "../../components/Gallery/Gallery";
import { Genres } from "../../components/Genres/Genres";
import styles from './Plakater.module.scss';

export const Plakater = () => {
  const [selectedGenre, setSelectedGenre] = useState('');

  const handleSelectGenre = genreSlug => {
    setSelectedGenre(genreSlug);
  };

  return (
    <div className={styles.plakaterContainer}>
      <Genres onSelectGenre={handleSelectGenre} className={styles.genresContainer} />
      <Gallery selectedGenre={selectedGenre} className={styles.galleryContainer} />
      {/* Pass selectedGenre to PosterDetails */}
      {selectedGenre && <PosterDetails selectedGenre={selectedGenre} className={styles.posterDetailsContainer} />}
    </div>
  );
};
