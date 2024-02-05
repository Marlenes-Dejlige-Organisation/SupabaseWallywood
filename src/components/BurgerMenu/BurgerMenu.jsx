import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './BurgerMenu.module.scss';

const BurgerMenu = () => {
  // State-hooks til styring af menuens synlighed og vinduets bredde
  const [isOpen, setIsOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Effekt-hook til at lytte efter vinduets størrelsesændringer
  useEffect(() => {
    // Funktion, der kaldes ved vinduets størrelsesændringer
    const handleResize = () => {
      // Opdaterer windowWidth med den aktuelle vinduesbredde
      setWindowWidth(window.innerWidth);
      // Lukker menuen ved ændring af vinduets størrelse
      setIsOpen(false);
    };

    // Lytter efter vinduets størrelsesændringer
    window.addEventListener('resize', handleResize);

    // Rydder op ved component-unmounting eller når effektens afhængigheder ændres
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // Tom afhængighedsliste betyder, at effekten kun køres ved mount og unmount

  // Funktion til at invertere værdien af isOpen (åbner/lukker menuen)
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Returnerer JSX for burgermenuen
  return (
    <div className={`${styles.burgerMenu} ${windowWidth <= 634 ? styles.visible : ''}`}>
      <div className={styles.burgerIcon} onClick={toggleMenu}>
        {/* Burgerikon med tre stænger, hvor stylingen ændres ved åbning/lukning af menuen */}
        <div className={`${styles.bar} ${isOpen ? styles.barOpen : ''}`} />
        <div className={`${styles.bar} ${isOpen ? styles.barOpen : ''}`} />
        <div className={`${styles.bar} ${isOpen ? styles.barOpen : ''}`} />
      </div>
      {/* Viser menuen kun hvis isOpen er sand */}
      {isOpen && (
        <div className={styles.menu}>

          <NavLink to="/" className={({ isActive }) => isActive ? styles.activeNavLink : styles.menuLink} onClick={toggleMenu}>HOME</NavLink>
          <NavLink to="/plakater" className={({ isActive }) => isActive ? styles.activeNavLink : styles.menuLink} onClick={toggleMenu}>PLAKATER</NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? styles.activeNavLink : styles.menuLink} onClick={toggleMenu}>OM OS</NavLink>
          <NavLink to="/contact" className={({ isActive }) => isActive ? styles.activeNavLink : styles.menuLink} onClick={toggleMenu}>KONTAKT</NavLink>
          <NavLink to="/login" className={({ isActive }) => isActive ? styles.activeNavLink : styles.menuLink} onClick={toggleMenu}>LOGIN</NavLink>
        </div>
      )}
    </div>
  );
};

export default BurgerMenu;
