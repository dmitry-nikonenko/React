import React from 'react';
import styles from './MovieGridItem.module.css';

const MovieGridItem = ({ data }) => (
  <div className={styles['movie-card']}>
    <img src={data.posterUrl} alt="" />
    <div className={styles['content']}>
      <h2>{data.title}</h2>
      <p>{data.overview}</p>
    </div>
  </div>
);

export default MovieGridItem;
