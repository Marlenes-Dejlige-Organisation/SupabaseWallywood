// Plakater.jsx

import React, { useState, useEffect } from 'react';
import { ContentWrapper } from '../../components/ContentWrapper/ContentWrapper';
import styles from './Plakater.module.scss';

export const Plakater = () => {
  // 1. useState Hooks for at holde styr på tilstanden af genrer, den valgte genre og plakaterne.
  const [genrer, setGenrer] = useState([]);
  const [valgtGenre, setValgtGenre] = useState('');
  const [plakater, setPlakater] = useState([]);

  // 2. useEffect til Fetching af Genrer og default plakater ved indlæsning.
  useEffect(() => {
    fetch('http://localhost:3000/genre')
      .then((response) => response.json())
      .then((data) => {
        // 2a. Sorterer genrerne alfabetisk baseret på titlen.
        const sorteretGenrer = data.sort((a, b) => a.title.localeCompare(b.title));
        // 2b. Sætter genrer til det sorterede array.
        setGenrer(sorteretGenrer);

        // 2c. Henter plakater baseret på standardgenren ved indlæsning.
        if (sorteretGenrer.length > 0) {
          const initialGenreSlug = sorteretGenrer[0].slug;
          setValgtGenre(initialGenreSlug);

          fetch(`http://localhost:3000/posters/list_by_genre/${initialGenreSlug}`)
            .then((plakaterResponse) => plakaterResponse.json())
            .then((plakaterData) => setPlakater(plakaterData))
            .catch((error) => console.error('Error fetching plakater:', error));
        }
      })
      .catch((error) => console.error('Error fetching genrer:', error));
  }, []);

  // 3. useEffect til Fetching af Plakater baseret på den valgte genre.
  useEffect(() => {
    if (valgtGenre) {
      fetch(`http://localhost:3000/posters/list_by_genre/${valgtGenre}`)
        .then((response) => response.json())
        .then((data) => setPlakater(data))
        .catch((error) => console.error('Error fetching plakater:', error));
    }
  }, [valgtGenre]);

  // 4. Funktion til at håndtere ændring af den valgte genre.
  const handleGenreChange = (nyGenre) => {
    setValgtGenre(nyGenre);
  };

  // 5. Renderer indholdet, herunder en liste af genrer og plakater fra den valgte genre.
  return (
    <>
      <ContentWrapper title="Plakater">
        <div className={styles['plakater-container']}>
          {/* Venstre side med filtre og genrer */}
          <div className={styles['filter-side']}>
            <h2>Filtre</h2>
            <h3>Genre</h3>
            <ul>
              {/* 5a. Mapper gennem genrerne og opretter klikbare elementer. */}
              {genrer.map((genre) => (
                // Hvis den nuværende genre er den valgte, anvend en anden klasse
                <li
                  key={genre.id}
                  onClick={() => handleGenreChange(genre.slug)}
                  className={genre.slug === valgtGenre ? styles.active : ''}
                >
                  {genre.title}
                </li>
              ))}
            </ul>
          </div>

          {/* Højre side med plakater */}
          <div className={styles['plakat-side']}>
            <h2>Plakater</h2>
            <div className={styles['plakat-grid']}>
              {/* 5b. Mapper gennem plakater og opretter elementer til visning. */}
              {plakater.map((plakat) => (
                <div key={plakat.id}>
                  <img src={plakat.image} alt={plakat.name} />
                  <h3>{plakat.name}</h3>
                  <p>Pris: {plakat.price} kr.</p>
                  <button>Læg i kurv</button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </ContentWrapper>
    </>
  );
};
