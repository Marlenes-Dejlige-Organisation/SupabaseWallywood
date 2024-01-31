import React, { useEffect, useState } from 'react';
import styles from './HomeCards.module.scss';
import axios from 'axios';

export const HomeCards = () => {
  // State til at gemme alle plakater, de seneste plakater, den valgte plakat og detaljerne for den valgte plakat
  const [allPosters, setAllPosters] = useState([]);
  const [latestPosters, setLatestPosters] = useState([]);
  const [selectedPoster, setSelectedPoster] = useState(null);
  const [selectedPosterDetails, setSelectedPosterDetails] = useState(null);

  // useEffect hook til at hente alle plakater ved opstart af komponenten
  useEffect(() => {
    // Erstattes {{portnumber}} med det faktiske portnummer, hvor din server kører
    const apiUrl = 'http://localhost:3000/posters';

    // Hent alle plakater
    axios.get(apiUrl)
      .then((response) => setAllPosters(response.data))
      .catch((error) => console.error('Fejl ved hentning af plakater:', error));
  }, []);

  // useEffect hook til at filtrere de to seneste plakater fra alle plakater
  useEffect(() => {
    // Sorter alle plakater efter oprettelsesdato i faldende rækkefølge
    const sortedPosters = [...allPosters].sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
    // Vælg de to seneste plakater
    const latestTwoPosters = sortedPosters.slice(0, 2);
    // Opdater state med de seneste plakater
    setLatestPosters(latestTwoPosters);
  }, [allPosters]);

  // Funktion til at hente detaljerne for den valgte plakat
  const fetchPosterDetails = (posterSlug) => {
    // Erstattes {{portnumber}} med det faktiske portnummer, hvor din server kører
    const apiUrl = `http://localhost:3000/posters/${posterSlug}`;

    // Hent detaljer for den valgte plakat
    axios.get(apiUrl)
      .then((response) => setSelectedPosterDetails(response.data))
      .catch((error) => console.error('Fejl ved hentning af plakatdetaljer:', error));
  };

  // Funktion, der kaldes, når "Læs mere" knappen klikkes for en plakat
  const handleReadMoreClick = (poster) => {
    // Åbn modalen og indstil den valgte plakat
    setSelectedPoster(poster);

    // Hent detaljer for den valgte plakat
    fetchPosterDetails(poster.slug);
  };

  // Funktion, der kaldes, når "Luk modal" knappen klikkes
  const handleCloseModal = () => {
    // Luk modalen og nulstil den valgte plakat og detaljer
    setSelectedPoster(null);
    setSelectedPosterDetails(null);
  };

  // JSX, der repræsenterer komponenten
  return (
    <div className={styles.homecards}>
      {/* Kort for de seneste plakater */}
      {latestPosters.map((poster) => (
  <div key={poster.id} className={styles.card}>
    <div>
      <img src={poster.image} alt={poster.name} />
    </div>
    <div>
      <h4>{poster.name}</h4>
      <p>Lorem ipsum dolor sit amet consectenda reprehenderit fuga commodi, nostrum minus sequi ullam sapiente nemo numquam?</p>
      {/* Hent genren fra den første genre i arrayet (hvis den findes) */}
      <p>Genre: {poster.genres.length > 0 ? poster.genres[0].title : 'Genre ikke tilgængelig'}</p>
      {/* Andre detaljer for plakaten */}
      <button onClick={() => handleReadMoreClick(poster)}>Læs mere</button>
    </div>
  </div>
))}

      {/* Modal for detaljer om den valgte plakat */}
      {selectedPoster && selectedPosterDetails && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            
            <img src={selectedPosterDetails.image} alt={selectedPosterDetails.name} />
            <div>
              <h3>{selectedPosterDetails.name}</h3>
              <p>Lorem ipsum, dolor sit amet id. Lorem ipsum, dolor sit amet id</p>
              <p>Bredde: {selectedPosterDetails.width} cm.</p>
              <p>Højde: {selectedPosterDetails.height} cm.</p>
              <p>Pris: {selectedPosterDetails.price},00 kr.</p>
              {selectedPosterDetails.genres && (
                <p>Genre: {selectedPosterDetails.genres.map((genre) => genre.title).join(', ')}</p>
              )}
              <div className="stock">
              <p>På lager: {selectedPosterDetails.stock}</p>
              </div>
              <input type="number" placeholder="0"/>
        <button>Læg i kurv</button>
              <button className={styles.modalclose} onClick={handleCloseModal}>X</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
