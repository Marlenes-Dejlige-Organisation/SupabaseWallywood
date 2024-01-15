import React, { useState } from 'react';

export const GreetingComponent = () => {
  // Initialiserer state variabel 'name' med en startværdi
  const [name, setName] = useState('');

  // Funktion til at håndtere ændringer i input feltet
  const handleInputChange = (event) => {
    // Opdaterer 'name' med værdien fra input feltet
    setName(event.target.value);
  };

  return (
    <div>
      {/* Viser tekst med det dynamiske navn */}
      <p>Send en hilsen til {name ? name : ''}</p>

      {/* Input felt med onChange-handler, der udløser handleInputChange-funktionen */}
      <input
        type="text"
        placeholder="Indtast navn"
        value={name}
        onChange={handleInputChange}
      />
    </div>
  );
};


