import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

const API_KEY = '30f74636e08937577c41f8000490a2f5';

export const getTrendingMovies = async () => {
  try {
    const { data } = await axios.get(
      `/trending/movie/day?api_key=${API_KEY}&language=en-US`
    );
    return data.results;
  } catch (error) {
    throw new Error('Oops! Try more');
  }
};

export const getMovieDetails = async movieId => {
  try {
    const { data } = await axios.get(
      `/movie/${movieId}?api_key=${API_KEY}&language=en-US`
    );
    return data;
  } catch (error) {
    throw new Error('Oops! Try again');
  }
};

export const getSearchMovies = async query => {
  try {
    const {data} = await axios.get(
      `/search/movie?api_key=${API_KEY}&language=en-US&page=1&query=${query}&include_adult=true`
    );
    return data.results;
  } catch (error) {
    throw new Error('Oops! Try again');
  }
};

export const getMovieCredits = async movieId => {
  try {
    const { data } = await axios.get(
      `/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`
    );
    return data.cast;
  } catch (error) {
    throw new Error('Oops! Try again');
  }
};

export const getMovieReviews = async movieId => {
  try {
    const { data } = await axios.get(
      `/movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US`
    );
    return data.results;
  } catch (error) {
    throw new Error('Oops! Try again');
  }
};
