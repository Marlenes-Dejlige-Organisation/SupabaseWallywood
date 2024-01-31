import React, { useState, useEffect } from 'react';
import styles from './Gallery.module.scss';

export const Gallery = ({ selectedGenre }) => {
    const [posters, setPosters] = useState([]);
  
    useEffect(() => {
      // Fetch posters based on the selected genre
      const url = `http://localhost:3000/posters?genre=${selectedGenre}`;
      fetch(url)
        .then(response => response.json())
        .then(data => setPosters(data))
        .catch(error => console.error('Error fetching posters:', error));
    }, [selectedGenre]);
  
    return (
      <div className={styles.galleryContainer}>
        <h2 className={styles.galleryTitle}>Gallery - {selectedGenre}</h2>
        <div className={styles.galleryGrid}>
          {posters.map(poster => (
            <div key={poster.id} className={styles.posterItem}>
              <img src={poster.image} alt={poster.name} />
              <p>{poster.name}</p>
              <p>{poster.price}</p>
              {/* Add click handler to show poster details */}
            </div>
          ))}
        </div>
      </div>
    );
  };
  


