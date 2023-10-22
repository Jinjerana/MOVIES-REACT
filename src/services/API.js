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

export const getSearchMovies = async movieId => {
  try {
    const response = await axios.get(
      `/search/${movieId}?api_key=${API_KEY}&include_adult=false&language=en-US&page=1`
    );
    return response.data;
  } catch (error) {
    throw new Error('Oops! Try again');
  }
};

export const getMovieDetails = async movieId => {
  try {
    const response = await axios.get(
      `/movie/${movieId}?api_key=${API_KEY}&language=en-US`
    );
    return response.data;
  } catch (error) {
    throw new Error('Oops! Try again');
  }
};

export const getMovieCredits = async movieId => {
  try {
    const response = await axios.get(
      `/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`
    );
    return response.data;
  } catch (error) {
    throw new Error('Oops! Try again');
  }
};

export const getMovieReviews = async movieId => {
  try {
    const response = await axios.get(
      `/movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US`
    );
    return response.data;
  } catch (error) {
    throw new Error('Oops! Try again');
  }
};
