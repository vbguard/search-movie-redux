import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.css';
import imageUrl from '../../../services/tmdb-image';

const ModalMoreInfo = ({ movie, onClose }) => (
  <div className={styles.wrapper}>
    <div className={styles.box}>
      <img
        src={imageUrl(movie.poster_path)}
        alt={movie.tagline}
        className={styles.image}
      />
      <h2 className={styles.title}>{movie.title}</h2>
      <h3 className={styles.originTitle}>{movie.original_title}</h3>
      <div className={styles.genresWrap}>
        <h4 className={styles.genresListTitle}>Genres: </h4>
        <ul className={styles.genresList}>
          {movie.genres.map(item => (
            <li className={styles.genresItem} key={item.id}>
              {item.name}
            </li>
          ))}
        </ul>
      </div>
      <p className={styles.genresOverview}>{movie.overview}</p>
      <button
        type="button"
        onClick={onClose}
        onKey={onClose}
        className={styles.closeBtn}
      >
        <svg className={styles.btnIcon}>
          <use xlinkHref="#icon-cross" />
          <symbol id="icon-cross" viewBox="0 0 32 32">
            <path d="M31.708 25.708c-0-0-0-0-0-0l-9.708-9.708 9.708-9.708c0-0 0-0 0-0 0.105-0.105 0.18-0.227 0.229-0.357 0.133-0.356 0.057-0.771-0.229-1.057l-4.586-4.586c-0.286-0.286-0.702-0.361-1.057-0.229-0.13 0.048-0.252 0.124-0.357 0.228 0 0-0 0-0 0l-9.708 9.708-9.708-9.708c-0-0-0-0-0-0-0.105-0.104-0.227-0.18-0.357-0.228-0.356-0.133-0.771-0.057-1.057 0.229l-4.586 4.586c-0.286 0.286-0.361 0.702-0.229 1.057 0.049 0.13 0.124 0.252 0.229 0.357 0 0 0 0 0 0l9.708 9.708-9.708 9.708c-0 0-0 0-0 0-0.104 0.105-0.18 0.227-0.229 0.357-0.133 0.355-0.057 0.771 0.229 1.057l4.586 4.586c0.286 0.286 0.702 0.361 1.057 0.229 0.13-0.049 0.252-0.124 0.357-0.229 0-0 0-0 0-0l9.708-9.708 9.708 9.708c0 0 0 0 0 0 0.105 0.105 0.227 0.18 0.357 0.229 0.356 0.133 0.771 0.057 1.057-0.229l4.586-4.586c0.286-0.286 0.362-0.702 0.229-1.057-0.049-0.13-0.124-0.252-0.229-0.357z" />
          </symbol>
        </svg>
      </button>
    </div>
  </div>
);

ModalMoreInfo.propTypes = {
  onClose: PropTypes.func.isRequired,
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default ModalMoreInfo;
