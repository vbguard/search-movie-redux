import React from 'react';
import './bookmark.svg';

const Icon = props => (
  <svg className="icon icon-list-add">
    <use xlinkHref={props} />
  </svg>
);

export default Icon;
