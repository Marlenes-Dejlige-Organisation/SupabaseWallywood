import React, { useState, useEffect } from 'react';

export const Genres = ({ onSelectGenre }) => {
    const [genres, setGenres] = useState([]);
  
    useEffect(() => {
      // Fetch genres from the API
      fetch('http://localhost:3000/genre')
        .then(response => response.json())
        .then(data => setGenres(data))
        .catch(error => console.error('Error fetching genres:', error));
    }, []);
  
    return (
      <div>
        <h2>Genres</h2>
        <ul>
          {genres.map(genre => (
            <li key={genre.id} onClick={() => onSelectGenre(genre.slug)}>
              {genre.title}
            </li>
          ))}
        </ul>
      </div>
    );
  };


