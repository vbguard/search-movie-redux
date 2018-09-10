import React from 'react';
import PropTypes from 'prop-types';
import ClampLines from 'react-clamp-lines';
import imageUrl from '../../../services/tmdb-image';
import styles from './styles.css';

const MovieItem = ({ movie, onAdd, onMoreInfo }) => (
  <li key={movie.id}>
    <div className={styles.Card}>
      <img src={imageUrl(movie.poster_path)} alt="" />
      <p className={styles.CardDate}>{movie.release_date}</p>
      <div className={styles.CardOverviewBox}>
        <ClampLines
          text={movie.overview}
          lines="3"
          ellipsis="..."
          className={styles.CardOverview}
          buttons={false}
        />
      </div>
      <div className={styles.CardInfo}>
        <span className={styles.CardVote}>{movie.vote_average}</span>
        <div className={styles.CardOption}>
          <button
            type="button"
            className={styles.AddToWatchlist}
            onClick={onAdd}
          >
            <svg className={styles.icon}>
              <use xlinkHref="#icon-list-add" />
              <symbol id="icon-list-add" viewBox="0 0 20 20">
                <title>list-add</title>
                <path d="M15 9h-3v2h3v3h2v-3h3v-2h-3v-3h-2v3zM0 3h10v2h-10v-2zM0 11h10v2h-10v-2zM0 7h10v2h-10v-2zM0 15h10v2h-10v-2z" />
              </symbol>
            </svg>
          </button>
          <button
            type="button"
            className={styles.MoreInfo}
            onClick={onMoreInfo}
          >
            <svg className={styles.icon}>
              <use xlinkHref="#icon-info" />
              <symbol id="icon-info" viewBox="0 0 32 32">
                <title>info</title>
                <path d="M14 9.5c0-0.825 0.675-1.5 1.5-1.5h1c0.825 0 1.5 0.675 1.5 1.5v1c0 0.825-0.675 1.5-1.5 1.5h-1c-0.825 0-1.5-0.675-1.5-1.5v-1z" />
                <path d="M20 24h-8v-2h2v-6h-2v-2h6v8h2z" />
              </symbol>
            </svg>
          </button>
        </div>
      </div>
    </div>
  </li>
);

MovieItem.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    overview: PropTypes.string.isRequired,
    release_date: PropTypes.string.isRequired,
    poster_path: PropTypes.string.isRequired,
  }).isRequired,
  onMoreInfo: PropTypes.func.isRequired,
  onAdd: PropTypes.func.isRequired,
};

export default MovieItem;
