import React, { useEffect, useState } from 'react';
import styles from './PlakatVisning.module.scss';
import { FilterContainer } from '../FilterContainer/FilterContainer';

export const PlakatVisning = () => {
   // 1. State Hooks til at håndtere tilstanden af genrer, den valgte genre, og plakaterne.
   const [genrer, setGenrer] = useState([]);
   const [valgtGenre, setValgtGenre] = useState('');
   const [plakater, setPlakater] = useState([]);
   const [minPris, setMinPris] = useState(0);
   const [maxPris, setMaxPris] = useState(0);
 
  
 
   // 2. useEffect til at hente genrer og standard plakater ved indlæsning af komponenten.
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
             .catch((error) => console.error('Fejl ved hentning af plakater:', error));
         }
       })
       .catch((error) => console.error('Fejl ved hentning af genrer:', error));
   }, []);
 
   // 3. useEffect til at hente plakater baseret på den valgte genre
   useEffect(() => {
     if (valgtGenre) {
       let url = `http://localhost:3000/posters/list_by_genre/${valgtGenre}`;
 
       // 3b. Henter plakater fra den opbyggede URL.
       fetch(url)
         .then((response) => response.json())
         .then((data) => setPlakater(data))
         .catch((error) => console.error('Fejl ved hentning af plakater:', error));
     }
   }, [valgtGenre]);
 
 
   // 4. Funktion til at håndtere ændring af den valgte genre.
   const handleGenreChange = (nyGenre) => {
     setValgtGenre(nyGenre);
   };

  // 5. Render indholdet, inklusive en liste af genrer og plakater fra den valgte genre.
  return (
    <div className={styles['plakater-container']}>
      <FilterContainer genrer={genrer} valgtGenre={valgtGenre} handleGenreChange={handleGenreChange} />
      <PlakatContainer valgtGenre={valgtGenre} />
    </div>
  );
};
