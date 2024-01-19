// HomeCards.jsx
import React, { useEffect, useState } from 'react';
import styles from './HomeCards.module.scss';

export const HomeCards = () => {
  const [allPosters, setAllPosters] = useState([]);
  const [latestPosters, setLatestPosters] = useState([]);

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

  return (
    <div className={styles.homecards}>
      {latestPosters.map((poster) => (
        <div key={poster.id} className={styles.card}>
          <div>
            <img src={poster.image} alt={poster.name} />
          </div>
          <div>
            <h4>{poster.name}</h4>
            <p>{poster.slug}</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab, doloremque et! In tota natus! Beatae ratione nemo dolore dolores culpa, aperiam excepturi ex!</p>
            {poster.genres && (
              <p>Genre: {poster.genres.map((genre) => genre.title).join(', ')}</p>
            )}
            <button>Læs mere</button>
          </div>
        </div>
      ))}
    </div>
  );
};
