import React from 'react';
import styles from './SearchBar.module.css';

const SearchBar = ({ onChange }) => (
  <input
    onChange={onChange}
    type="text"
    className={styles.input}
    name="filter"
  />
);

export default SearchBar;
