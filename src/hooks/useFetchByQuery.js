import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getSearchMovies } from 'services/API';

export const useFetchByQuery = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const query = searchParams.get('q')
    if(!query) return 
    setIsLoading(true);

    const fetchData = async () => {
      try {
        const data = await getSearchMovies(query);
        setMovies(data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [searchParams]);

  const onHandleSubmit = value => {
    setSearchParams({q:value})
  }

  return {
    movies,
    isLoading,
    error,
    onHandleSubmit
  };
};
