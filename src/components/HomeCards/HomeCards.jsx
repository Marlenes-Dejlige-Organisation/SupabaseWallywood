import React, { useEffect, useState, useRef } from 'react';
import styles from './HomeCards.module.scss';
import axios from 'axios';
import { useCart } from '../Cart/CartContext';

export const HomeCards = () => {
  const { addToCart } = useCart();
  const [allPosters, setAllPosters] = useState([]);
  const [latestPosters, setLatestPosters] = useState([]);
  const [selectedPoster, setSelectedPoster] = useState(null);
  const [selectedPosterDetails, setSelectedPosterDetails] = useState(null);
  const quantityInputRef = useRef(null);

  useEffect(() => {
    const apiUrl = 'http://localhost:3000/posters';

    axios.get(apiUrl)
      .then((response) => setAllPosters(response.data))
      .catch((error) => console.error('Fejl ved hentning af plakater:', error));
  }, []);

  useEffect(() => {
    const sortedPosters = [...allPosters].sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
    const latestTwoPosters = sortedPosters.slice(0, 2);
    setLatestPosters(latestTwoPosters);
  }, [allPosters]);

  const fetchPosterDetails = (posterSlug) => {
    const apiUrl = `http://localhost:3000/posters/${posterSlug}`;

    axios.get(apiUrl)
      .then((response) => setSelectedPosterDetails(response.data))
      .catch((error) => console.error('Fejl ved hentning af plakatdetaljer:', error));
  };

  const handleReadMoreClick = (poster) => {
    setSelectedPoster(poster);
    fetchPosterDetails(poster.slug);
  };

  const handleAddToCartClick = () => {
    const parsedQuantity = parseInt(quantityInputRef.current.value);

    if (
      selectedPosterDetails.stock >= parsedQuantity &&
      !isNaN(parsedQuantity) &&
      parsedQuantity > 0
    ) {
      addToCart({
        id: selectedPosterDetails.id,
        title: selectedPosterDetails.name,
        price: selectedPosterDetails.price,
        quantity: parsedQuantity,
        image: selectedPosterDetails.image,
      });

      const updatedStock = selectedPosterDetails.stock - parsedQuantity;

      // Opdater lageret på serveren ved at lave en PATCH-anmodning
      axios
        .patch(`http://localhost:3000/posters/${selectedPosterDetails.id}`, {
          stock: updatedStock,
        })
        .then(() => {
          setSelectedPosterDetails({
            ...selectedPosterDetails,
            stock: updatedStock,
          });
        })
        .catch((error) => console.error('Fejl ved opdatering af lager:', error));

      alert('Varen er blevet tilføjet til din kurv!');
    } else {
      alert('Der er ikke nok varer på lager, eller antallet er ugyldigt.');
    }
  };


  const handleCloseModal = () => {
    // Luk modalen og nulstil den valgte plakat og detaljer
    setSelectedPoster(null);
    setSelectedPosterDetails(null);
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
            <p>Lorem ipsum dolor sit amet consectenda reprehenderit fuga commodi, nostrum minus sequi ullam sapiente nemo numquam?</p>
            <p>Genre: {poster.genres.length > 0 ? poster.genres[0].title : 'Genre ikke tilgængelig'}</p>
            <button onClick={() => handleReadMoreClick(poster)}>Læs mere</button>
          </div>
        </div>
      ))}

      {/* MODAL */}
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
              <input type="number" placeholder="0" ref={quantityInputRef} />
              <button onClick={handleAddToCartClick}>Læg i kurv</button>
              <button className={styles.modalclose} onClick={handleCloseModal}>X</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
