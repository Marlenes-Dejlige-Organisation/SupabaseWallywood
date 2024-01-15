import styles from './Navigation.module.scss';
import { NavLink } from 'react-router-dom';

export const Navigation = () => {
  return (
    <nav className={styles.navWrapper}>
      <ul>
        <li><NavLink to="/"className={styles.NavLink}>HJEM</NavLink></li>
        <li><NavLink to="/about"className={styles.NavLink}>OM</NavLink></li>
        <li><NavLink to="/todo"className={styles.NavLink}>TO DO</NavLink></li>
        <li><NavLink to="/hooks"className={styles.NavLink}>HOOKS</NavLink></li>
      </ul>
    </nav>
  );
};
