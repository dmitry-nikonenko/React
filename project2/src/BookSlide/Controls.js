import React from 'react';

const Controls = ({ onIncrement, onDecrement }) => (
  <section className="controls">
    <button type="button" onClick={onDecrement} className="button">
      назад
    </button>
    <button type="button" onClick={onIncrement} className="button">
      вперед
    </button>
  </section>
);

export default Controls;
