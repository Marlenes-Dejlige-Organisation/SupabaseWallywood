import React from 'react';
import { FaFacebookSquare, FaPinterestSquare, FaInstagram } from 'react-icons/fa';
import { FaSquareTwitter } from 'react-icons/fa6';
import { ContentWrapper } from '../../components/ContentWrapper/ContentWrapper';
import Facebook from '../../assets/images/vektor/facebook.png';
import styles from './Footer.module.scss';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div>
        <p className={styles.p2}>WALLYWOOD</p>
        <p>
          Øster Uttrupvej 1 <br />
          9000 Aalborg
        </p>
      </div>
      <div>
        <p>
          CVR: 12345678 <br />
          MAIL: info@plakatshoppen.dk <br />
          MOBIL: +45 9812 3456
        </p>
      </div>
      <div className={styles.ikoner}>
        <FaFacebookSquare style={{ fontSize: '1.7rem' }} />
        <FaSquareTwitter style={{ fontSize: '1.7rem' }} />
        <FaPinterestSquare style={{ fontSize: '1.7rem' }} />
        <FaInstagram style={{ fontSize: '1.7rem' }} />
      </div>
    </footer>
  );
};
