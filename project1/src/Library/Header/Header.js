import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => (
  <header className={styles.header}>
    <nav className={styles.navigation}>
      <NavLink
        exact
        activeClassName={styles.linkActive}
        className={styles.link}
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        activeClassName={styles.linkActive}
        className={styles.link}
        to="/about"
      >
        About
      </NavLink>
    </nav>
  </header>
);
export default Header;
