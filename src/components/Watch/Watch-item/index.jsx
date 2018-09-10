import React from 'react';
import PropTypes from 'prop-types';
import imageUrl from '../../../services/tmdb-image';
import styles from './styles.css';

const WatchListItem = ({ item, onMoreInfo, onDelete }) => (
  <div className={styles.wrapper}>
    <img src={imageUrl(item.poster_path)} alt="" className={styles.image} />
    <div className={styles.infoBox}>
      <h3 className={styles.title}>{item.title}</h3>
      <p className={styles.releaseDate}>{item.release_date}</p>
      <p className={styles.vote}>{item.vote_average}</p>
      <div className={styles.btnBox}>
        <button type="button" className={styles.btn} onClick={onDelete}>
          <svg className={styles.icon}>
            <use xlinkHref="#icon-bin2" />
            <symbol id="icon-bin2" viewBox="0 0 32 32">
              <title>bin2</title>
              <path d="M6 32h20l2-22h-24zM20 4v-4h-8v4h-10v6l2-2h24l2 2v-6h-10zM18 4h-4v-2h4v2z" />
            </symbol>
          </svg>
        </button>
        <button type="button" className={styles.btn} onClick={onMoreInfo}>
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
);

WatchListItem.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string.isRequired,
    poster_path: PropTypes.string.isRequired,
  }).isRequired,
  onMoreInfo: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default WatchListItem;
