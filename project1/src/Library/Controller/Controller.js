import React from 'react';
import styles from './Controller.module.css';

const files = [
  'fantasy',
  'thriller',
  'drama',
  'mystery',
  'horror',
  'satire',
  'computers',
];

const Controller = ({ onSubmit, inputCheck, selectChange }) => (
  <div className={styles.head}>
    <input onChange={inputCheck} className="input" type="text" name="" id="" />
    <select onChange={selectChange}>
      {files.map(el => (
        <option key={el} value={el}>
          {el}
        </option>
      ))}
    </select>
    <button type="button" onClick={onSubmit} className="button">
      Search
    </button>
  </div>
);

export default Controller;
