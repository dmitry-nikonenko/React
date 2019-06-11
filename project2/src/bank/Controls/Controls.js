import React from 'react';
import styles from './Controls.module.css';

const Controls = ({ onChange, onClick }) => (
  <section class="controls">
    <input onChange={onChange} type="number" />
    <button onClick={onClick} type="button">
      Deposit
    </button>
    <button onClick={onClick} type="button">
      Withdraw
    </button>
  </section>
);

export default Controls;
