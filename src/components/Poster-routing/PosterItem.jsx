import { Link } from "react-router-dom";

export const PosterItem = ({ name, image, price, slug }) => {
    return (
      <>
        <div>
          <h3>{name}</h3>
          {/* <img src={image} alt={name} /> */}
          <p>pris: {price},00 DKK</p>
          <Link to={`${slug}`}>Læs mere &raquo;</Link>
        </div>
      </>
    );
  };
  