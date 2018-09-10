import React from 'react';
import PropTypes from 'prop-types';
import WatchListItem from './Watch-item';
import styles from './styles.css';

const WatchList = ({ watchlist, onMoreInfo, onDelete }) => (
  <div className={styles.WatchListWrap}>
    <h2 className={styles.WatchListTitle}>WatchList</h2>
    <ul className={styles.watchList}>
      {watchlist.map(item => (
        <li key={item.id} className={styles.watchListItem}>
          <WatchListItem
            item={item}
            onMoreInfo={() => onMoreInfo(item.id)}
            onDelete={() => onDelete(item.id)}
          />
        </li>
      ))}
    </ul>
  </div>
);

WatchList.propTypes = {
  watchlist: PropTypes.arrayOf(PropTypes.object).isRequired,
  onMoreInfo: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default WatchList;
