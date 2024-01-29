import styles from './Navigation.module.scss';
import { NavLink } from 'react-router-dom';
import vogn from '../../assets/images/shopping_cart_FILL0_wght400_GRAD0_opsz24.png';

export const Navigation = () => {
  return (
    <>
      <div className={styles.ikon}><img src={vogn} alt="vogn" /></div>
      <nav className={styles.navWrapper}>
        <h1>WALLYWOOD</h1>
        <ul>
          <li><NavLink exact to="/" className={styles.NavLink} activeclassname={styles.activeNavLink}>HOME</NavLink></li>
          <li><NavLink to="/plakater" className={styles.NavLink} activeclassname={styles.activeNavLink}>PLAKATER</NavLink></li>
          <li><NavLink to="/about" className={styles.NavLink} activeclassname={styles.activeNavLink}>OM OS</NavLink></li>
          <li><NavLink to="/contact" className={styles.NavLink} activeclassname={styles.activeNavLink}>KONTAKT</NavLink></li>
          <li><NavLink to="/login" className={styles.NavLink} activeclassname={styles.activeNavLink}>LOGIN</NavLink></li>
        </ul>
      </nav>
    </>
  );
};
