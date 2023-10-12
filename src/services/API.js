const getMovieById = () => {};

import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';

export async function getMovieById(searchImage, page = 1) {
  const parameteres = new URLSearchParams({
    key: '38446730-0a804bcdf38b62b4356b9bf9e',
    q: searchImage,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
    page: `${page}`,
    per_page: 40,
  });

  const { data } = await axios.get(`${BASE_URL}?${parameteres}`);

  return data;
}
