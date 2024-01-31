import { Link } from "react-router-dom";
import styles from './PosterItem.module.scss'

export const PosterItem = ({ name, image, price, slug }) => {
    return (
      <>
        <div className={styles.ItemContainer}>
          
           <img src={image} alt={name} />
           <h3>{name}</h3>
          <p>pris: {price},00 DKK</p>
          <button>
          <Link to={`${slug}`}>Læs mere &raquo;</Link>
          </button>
        </div>
      </>
    );
  };
  