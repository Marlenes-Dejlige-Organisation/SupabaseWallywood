import styles from './Navigation.module.scss';
import { NavLink } from 'react-router-dom';

export const Navigation = () => {
  return (
    <nav className={styles.navWrapper}>
      <ul>
        <li><NavLink to="/"className={styles.NavLink}>HOME</NavLink></li>
        <li><NavLink to="/plakater"className={styles.NavLink}>PLAKATER</NavLink></li>

        <li><NavLink to="/about"className={styles.NavLink}>OM OS</NavLink></li>
        <li><NavLink to="/contact"className={styles.NavLink}>KONTAKT</NavLink></li>
        <li><NavLink to="/login"className={styles.NavLink}>LOGIN</NavLink></li>
      </ul>
    </nav>
  );
};
