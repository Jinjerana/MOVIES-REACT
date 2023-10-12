// const getMovieById = () => {};

import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

const API_KEY = '30f74636e08937577c41f8000490a2f5';

export const getTrendingMovies = async () => {
  try {
    const response = await axios.get(
      `/trending/movie/day?api_key=${API_KEY}&language=en-US`
    );
    return response.data;
  } catch (error) {
    throw new Error('Oops! Try more');
  }
};

export const getSearchMovies = async () => {
  try {
    const response = await axios.get(
      `/search/movie?api_key=${API_KEY}&include_adult=false&language=en-US&page=1`
    );
    return response.data;
  } catch (error) {
    throw new Error('Oops! Try again');
  }
};

export const getMovieDetails = async () => {
  try {
    const response = await axios.get(
      `/movie/movie_id?api_key=${API_KEY}&language=en-US`
    );
    return response.data;
  } catch (error) {
    throw new Error('Oops! Try again');
  }
};

export const getMovieCredits = async () => {
  try {
    const response = await axios.get(
      `/movie/movie_id/credits?api_key=${API_KEY}&language=en-US`
    );
    return response.data;
  } catch (error) {
    throw new Error('Oops! Try again');
  }
};

export const getMovieReviews = async () => {
  try {
    const response = await axios.get(
      `/movie/movie_id/reviews?api_key=${API_KEY}&language=en-US`
    );
    return response.data;
  } catch (error) {
    throw new Error('Oops! Try again');
  }
};

// export async function getMovieById(searchImage, page = 1) {
//   const parameteres = new URLSearchParams({
//     key: '30f74636e08937577c41f8000490a2f5',
//     q: searchImage,
//     image_type: 'photo',
//     orientation: 'horizontal',
//     safesearch: 'true',
//     page: `${page}`,
//     per_page: 40,
//   });

//   const { data } = await axios.get(`${BASE_URL}?${parameteres}`);

//   return data;
// }
