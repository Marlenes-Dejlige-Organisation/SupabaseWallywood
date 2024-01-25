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
    console.log(result.data);
    setApiData(result.data);
  };

  useEffect(() => {
    getData();
  }, [poster]);

  return (
    <div className="poster-details-container">
      <img src={apiData.image} alt={apiData.name} />
      <div>
        <h2>{apiData.name}</h2>
        <p>{apiData.description}</p>
        <p>Pris: {apiData.price}</p>
      </div>
    </div>
  );
};
