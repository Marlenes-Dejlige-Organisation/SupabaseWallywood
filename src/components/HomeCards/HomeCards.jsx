import React, { useEffect, useState } from 'react';
import styles from './HomeCards.module.scss';
import axios from 'axios';

export const HomeCards = () => {
  const [allPosters, setAllPosters] = useState([]);
  const [latestPosters, setLatestPosters] = useState([]);
  const [selectedPoster, setSelectedPoster] = useState(null);
  




  useEffect(() => {
    // Fetch all posters
    fetch('http://localhost:3000/posters')
      .then((response) => response.json())
      .then((data) => setAllPosters(data))
      .catch((error) => console.error('Error fetching posters:', error));
  }, []);

  useEffect(() => {
    // Filter the two latest posters from all posters
    const sortedPosters = [...allPosters].sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
    const latestTwoPosters = sortedPosters.slice(0, 2);
    setLatestPosters(latestTwoPosters);
  }, [allPosters]);

  const handleReadMoreClick = (poster) => {
    // Vis modalen og gem den valgte plakat
    setSelectedPoster(poster);

    // Hent detaljerne for den valgte plakat
    getData(poster.id);
  };

  const handleCloseModal = () => {
    // Luk modalen og nulstil den valgte plakat
    setSelectedPoster(null);

  };

  return (
    <div className={styles.homecards}>
      {latestPosters.map((poster) => (
        <div key={poster.id} className={styles.card}>
          <div>
            <img src={poster.image} alt={poster.name} />
          </div>
          <div>
            <h4>{poster.name}</h4>
            <p>En fed plakat. Virkelig frisk og tiltalende. Den er ny i butikken. Den oplagte julegave. Der står noget mere her. Og en sidste lille kommentar.</p>

            {poster.genres && <p>Genre: {poster.genres.map((genre) => genre.title).join(', ')}</p>}

            {/* Brug Link i stedet for en button */}
            <button onClick={() => handleReadMoreClick(poster)}>Læs mere</button>
          </div>
        </div>
      ))}

      {/* Modal */}
      
      {selectedPoster && (
        
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <img src={selectedPoster.image} alt={selectedPoster.name} />
            <div>
              <h4>{selectedPoster.name}</h4>
    <p>Details about this very niiice poster</p>
                  <p>Varenummer (SKU): {selectedPoster.id}</p>
                  <h4>Kr. {selectedPoster.price},00</h4>
                  {/* Tilføj flere detaljer efter behov */}

              <button onClick={handleCloseModal}>Luk modal</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
