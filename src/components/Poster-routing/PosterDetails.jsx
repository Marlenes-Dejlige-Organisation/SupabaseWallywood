import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./PosterDetails.scss";
import { useCart } from "../Cart/CartContext";
import { Cart } from "../Cart/Cart";

export const PosterDetails = () => {
  const { addToCart } = useCart(); // Use the useCart hook

  const [apiData, setApiData] = useState({});
  const [quantity, setQuantity] = useState(1);
  const { poster } = useParams();

  const getData = async () => {
    const endpoint = `http://localhost:3000/posters/${poster}`;
    const result = await axios.get(endpoint);
    setApiData(result.data);
  };

  useEffect(() => {
    getData();
  }, [poster]);

  const handleAddToCart = () => {
    if (apiData.stock >= quantity) {
      addToCart({
        id: apiData.id,
        title: apiData.name,
        price: apiData.price,
        quantity: quantity,
        image: apiData.image, 
      });
      alert('Varen er blevet tilføjet til din kurv!');
    } else {
      alert('Der er ikke nok varer på lager.');
    }
  };

  const handleQuantityChange = (e) => {
    const value = parseInt(e.target.value);
    setQuantity(isNaN(value) ? 1 : Math.max(1, value));
  };

  return (
    <div className="poster-details-container">
      <img src={apiData.image} alt={apiData.name} />
      <div>
        <h3>{apiData.name}</h3>
        <p dangerouslySetInnerHTML={{ __html: apiData.description }}></p>
        <p>Størrelse: {apiData.width} * {apiData.height} cm.</p>
        <p>Varenummer (SKU): {apiData.id}</p>
        <h4>Kr. {apiData.price},00</h4>
        <input
          type="number"
          placeholder="0"
          value={isNaN(quantity) ? "" : quantity} // Ensure value is a valid string
          onChange={handleQuantityChange}
        />
        <button onClick={handleAddToCart}>Læg i kurv</button>
        <div className="stock">
          <p>{apiData.stock} på lager</p>
        </div>
     
      </div>
    </div>
  );
};
