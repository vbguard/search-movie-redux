import React from 'react';
import PropTypes from 'prop-types';
import MovieItem from './Movie-item';
import styles from './styles.css';

const MovieList = ({ movies, onMoreInfo, onAdd }) => (
  <ul className={styles.ul}>
    {movies.map(movie => (
      <MovieItem
        key={movie.id}
        movie={movie}
        onMoreInfo={() => onMoreInfo(movie.id)}
        onAdd={() => onAdd(movie.id)}
      />
    ))}
  </ul>
);

MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
  onMoreInfo: PropTypes.func.isRequired,
  onAdd: PropTypes.func.isRequired,
};

export default MovieList;
