import React, { useState } from 'react';

export const ClickCounter = () => {
  // Initialiserer state variabel 'count' med værdien 0
  const [count, setCount] = useState(0);

  // Funktion til at håndtere klik på knappen
  const handleClick = () => {
    // Opdaterer 'count' ved at tilføje 1 til den aktuelle værdi
    setCount(count + 1);
  };

  return (
    <div>
      {/* Viser teksten med det dynamiske tal */}
      <p>Du har klikket på knappen {count} antal gange.</p>

      {/* Knap med onClick-handler, der udløser handleClick-funktionen */}
      <button onClick={handleClick}>Klik her</button>
    </div>
  );
};


