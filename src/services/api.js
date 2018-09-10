import axios from 'axios';

const API_KEY = process.env.REACT_APP_MOVIEDB_API_KEY;
const BASE_URL = process.env.REACT_APP_MOVIEDB_URL;

export const category = ({ categorySelected, onSuccess, onError, page }) => {
  axios
    .get(
      `${BASE_URL}/movie/${categorySelected}?api_key=${API_KEY}&language=en-US&page=${page}`,
    )
    .then(response => response.data)
    .then(onSuccess)
    .catch(onError);
};

export const title = ({ value, onSuccess, onError, page }) => {
  axios
    .get(
      `${BASE_URL}/search/movie?api_key=${API_KEY}&language=en-US&page=${page}&include_adult=false&query=${value}`,
    )
    .then(response => response.data)
    .then(onSuccess)
    .catch(onError);
};

export const getMore = ({
  isSearch,
  isCategory,
  isQuery,
  onSuccess,
  onError,
  page,
}) =>
  axios
    .get(
      `${BASE_URL}${isSearch}/movie${isCategory}?api_key=${API_KEY}&language=en-US&page=${page}&include_adult=false${isQuery}`,
    )
    .then(response => response.data)
    .then(onSuccess)
    .catch(onError);

export const movieDetail = ({ id, onSuccess, onError }) => {
  axios
    .get(`${BASE_URL}/movie/${id}?api_key=${API_KEY}&append_to_response=videos`)
    .then(response => response.data)
    .then(onSuccess)
    .catch(onError);
};
