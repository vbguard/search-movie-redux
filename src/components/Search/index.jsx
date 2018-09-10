import React from 'react';
import PropTypes from 'prop-types';

import SearchSelect from './Search-select';
import SearchByTitle from './Search-title';

const Search = ({ getCategory, titleValue }) => (
  <div>
    <SearchSelect getCategory={getCategory} />
    <SearchByTitle titleValue={titleValue} />
  </div>
);

Search.propTypes = {
  titleValue: PropTypes.string.isRequired,
  getCategory: PropTypes.func.isRequired,
};

export default Search;
