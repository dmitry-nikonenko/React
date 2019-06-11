import React from 'react';
import MovieGridItem from '../MovieGridItem/MovieGridItem';
import styles from './MovieGrid.module.css';

const MovieGrid = ({ data }) => (
  <div className={styles['movie-grid']}>
    {data.map(item => (
      <MovieGridItem data={item} />
    ))}
  </div>
);

export default MovieGrid;
