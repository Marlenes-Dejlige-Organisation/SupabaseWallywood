import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import styles from './JokeComp.module.scss';

const API_URL = 'https://official-joke-api.appspot.com/random_joke';

export const JokeComp = () => {
  // Initialiser state med 'Loading...' som standard for setup
  const [joke, setJoke] = useState({ setup: 'Loading...', punchline: '' });
  // Opret en ref for at spore om komponenten er monteret
  const isMounted = useRef(true);

  // Funktion til at hente en vittighed fra API'en
  const fetchJoke = async () => {
    try {
      // Foretag en GET-anmodning til API'en
      const response = await axios.get(API_URL);
      // Opdater state med den hentede vittighed
      setJoke(response.data);
    } catch (error) {
      // Håndter fejl og udskriv en fejlmeddelelse
      console.error('Error fetching joke:', error);
    }
  };

  // useEffect hook til at hente en vittighed ved komponentens opstart
  useEffect(() => {
    // Hvis komponenten er monteret, hent en vittighed
    if (isMounted.current) {
      fetchJoke();
      // Marker komponenten som ikke-monteret efter første opstart
      isMounted.current = false;
    }

    // Ryd op: Opret en returneringsfunktion for useEffect, der annullerer ref'en ved komponentens afmontering
    return () => {
      isMounted.current = false;
    };
  }, []); // Tom afhængighedsliste betyder, at dette kun udføres ved komponentens opstart

  // JSX-komponent for at vise vittigheden og knappen til at hente en ny vittighed
  return (
    <div className={styles.container}>
      <div className={styles.jokeContainer}>
        {/* Vis vittigheden, uanset hvad den indeholder (også 'Loading...') */}
        <>
          <p>{joke.setup}</p>
          <p>{joke.punchline}</p>
        </>
      </div>
      {/* Knappen til at hente en ny vittighed ved klik */}
      <button className={styles.button} onClick={fetchJoke}>
        Get Joke
      </button>
    </div>
  );
};
