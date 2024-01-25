// PosterDetails.jsx
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./PosterDetails.scss"; // Import your SCSS file


export const PosterDetails = () => {
  const [apiData, setApiData] = useState({});
  const { poster } = useParams();

  const getData = async () => {
    const endpoint = `http://localhost:3000/posters/${poster}`;
    const result = await axios.get(endpoint);
   
    setApiData(result.data);
  };

  useEffect(() => {
    getData();
  }, [poster]);

  return (
    <div className="poster-details-container" >
        
      <img src={apiData.image} alt={apiData.name} />
      <div>
        <h3>{apiData.name}</h3>
        <p dangerouslySetInnerHTML={{__html: apiData.description}}></p>
        <p>Størrelse: {apiData.width} * {apiData.height} cm.</p>
        <p >Varenummer (SKU): {apiData.id}</p>
        <h4>Kr. {apiData.price},00</h4>
        <input type="number" placeholder="0"/>
        <button>Læg i kurv</button>
        <div className="stock">
        <p>{apiData.stock} på lager</p>
        </div>
      </div>
    </div>
  );
};
