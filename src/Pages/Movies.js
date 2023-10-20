import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getSearchMovies } from 'services/API';
// import { MoviesList } from 'components/MoviesList';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get('query') ?? '';

  useEffect(() => {
    if (!query) return;

    const searchMovies = async () => {
      try {
        setLoading(true);
        setError(false);
        const data = await getSearchMovies();
        setMovies(data.results);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    searchMovies();
  }, [query]);

  const handleSubmit = e => {
    e.preventDefault();

    const value = e.target.query.value.toLowerCase();

    if (value === '') {
      setSearchParams({});
      return;
    }
    setSearchParams({ query: value });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text/" name="query" />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default Movies;
