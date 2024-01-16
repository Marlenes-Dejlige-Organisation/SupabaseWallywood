import React, { useState, useEffect } from 'react';
import styles from './Counter.module.scss';

// En React-komponent kaldet Counter, der fungerer som et stopur
export const Counter = () => {
    // State-hooks til at håndtere stopurets tilstand
    const [isRunning, setIsRunning] = useState(false); // Indikerer om stopuret er i gang
    const [time, setTime] = useState(0); // Holder styr på den aktuelle tid i millisekunder
  
    // useEffect-hook, der håndterer urets opførsel baseret på isRunning
    useEffect(() => {
      let interval;
  
      // Håndtering af urets opførsel baseret på isRunning
      if (isRunning) {
        interval = setInterval(() => {
          // Opdaterer tiden hvert 10. millisekund, når uret kører
          setTime((prevTime) => prevTime + 10);
        }, 10);
      } else {
        // Ryd intervallet, når uret stopper
        clearInterval(interval);
      }
  
      // Rengøringseffekt: Ryd intervallet, når komponenten unmounts eller isRunning ændres
      return () => clearInterval(interval);
    }, [isRunning]);
  
    // Funktion til at starte eller stoppe uret
    const handleToggle = () => {
      setIsRunning((prevIsRunning) => !prevIsRunning);
    };
  
    // Funktion til at nulstille uret
    const handleReset = () => {
      setTime(0); // Nulstiller tiden
      setIsRunning(false); // Stopper uret
    };
  
    // Hjælpefunktion til at formatere millisekunder som mm:ss:SS
    const formatTime = (milliseconds) => {
      const minutes = Math.floor(milliseconds / 60000);
      const seconds = Math.floor((milliseconds % 60000) / 1000);
      const millis = (milliseconds % 1000).toString().padStart(3, '0');
      return `${minutes}:${seconds}:${millis}`;
    };
  
    // JSX-struktur for stopur-komponenten med tilhørende styling-klasse fra Counter.module.scss
    return (
        <div className={styles.container}>
        <div className={styles.stopwatch}>
          <h1 className={styles.header}>STOPUR</h1>
          <div className={styles.display}>
            <p>{formatTime(time)}</p>
          </div>
          <div className={styles.buttons}>
            <button className={styles.toggleButton} onClick={handleToggle}>
              {isRunning ? 'Stop' : 'Start'}
            </button>
            <button className={styles.resetButton} onClick={handleReset}>
              Reset
            </button>
          </div>
        </div>
        </div>
      );
};


