const imageUrl = imgId => {
  const urlImg = `https://image.tmdb.org/t/p/w200${imgId}`;
  const emptyUrl = `https://image.tmdb.org/t/p/w200/`;
  if (imgId === null) {
    return emptyUrl;
  }
  return urlImg;
};

export default imageUrl;
