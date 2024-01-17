import { useState, useEffect } from 'react';

// Custom hook: useFetch
export const useFetch = (url) => {
  // State-hooks til at holde data, loading-status og fejl
  const [data, setData] = useState(null); // Data fra API'en
  const [loading, setLoading] = useState(true); // Indikerer om data hentes
  const [error, setError] = useState(null); // Fejl, hvis der opstår en under hentning

  // useEffect køres, når komponenten mounts, og når URL'en ændrer sig
  useEffect(() => {
    // Funktion til at hente data fra API'en
    const fetchData = async () => {
      try {
        // Udfør en HTTP GET-anmodning til den angivne URL
        const response = await fetch(url);

        // Vis en fejl, hvis netværksresponset ikke er "OK" (status 200-299)
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        // Konverter JSON-data fra responsen
        const result = await response.json();

        // Opdater state med de hentede data
        setData(result);
      } catch (error) {
        // Håndter fejl og opdater state med fejlinformation
        setError(error);
      } finally {
        // Uanset udfald, sæt loading til false for at indikere afslutning af anmodningen
        setLoading(false);
      }
    };

    // Kald fetchData-funktionen
    fetchData();
  }, [url]); // useEffect afhænger af URL'en, så den kan reagere på ændringer

  // Returnér state som et objekt, der kan bruges af komponenten, der kalder useFetch
  return { data, loading, error };
};

// Eksempelkomponent: CustomHook
export const CustomHook = () => {
  // Brug useFetch-hook til at hente data fra API'en
  const { data, loading, error } = useFetch('https://jsonplaceholder.typicode.com/posts');

  // Håndter fejl
  if (error) {
    return <div>Error: {error.message}</div>;
  }

  // Håndter loading
  if (loading) {
    return <div>Loading...</div>;
  }

  // Vist data
  return (
    <div>
      <h3>Data from API:</h3>
      {/* Brug JSON.stringify til at formatere og vise data i en <pre>-tag */}
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};
