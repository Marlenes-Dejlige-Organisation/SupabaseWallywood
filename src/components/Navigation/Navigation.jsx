import React from 'react';
import styles from './Navigation.module.scss';
import { NavLink } from 'react-router-dom';
import vogn from '../../assets/images/shopping_cart_FILL0_wght400_GRAD0_opsz24.png';

export const Navigation = () => {
  const activeLink = "font-bold";

  return (
    <>
      <NavLink to="/cart" className={styles.ikon}>
        <img src={vogn} alt="vogn" />
      </NavLink>
      <nav className={styles.navWrapper}>
        <h1>WALLYWOOD</h1>
        <ul>
          <li><NavLink to="/" className={({ isActive }) => isActive ? styles.activeNavLink : styles.NavLink}>HOME</NavLink></li>
          <li><NavLink to="/plakater" className={({ isActive }) => isActive ? styles.activeNavLink : styles.NavLink}>PLAKATER</NavLink></li>
          <li><NavLink to="/about" className={({ isActive }) => isActive ? styles.activeNavLink : styles.NavLink}>OM OS</NavLink></li>
          <li><NavLink to="/contact" className={({ isActive }) => isActive ? styles.activeNavLink : styles.NavLink}>KONTAKT</NavLink></li>
          <li><NavLink to="/login" className={({ isActive }) => isActive ? styles.activeNavLink : styles.NavLink}>LOGIN</NavLink></li>
        </ul>
      </nav>
    </>
  );
};
