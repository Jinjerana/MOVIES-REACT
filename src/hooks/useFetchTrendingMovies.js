import { useEffect, useState } from 'react';
import { getTrendingMovies } from 'services/API';

export const useFetchTrendingMovies = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);

    const fetchData = async () => {
      try {
        const data = await getTrendingMovies();
        setMovies(data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  return {
    movies,
    isLoading,
    error,
  };
};
