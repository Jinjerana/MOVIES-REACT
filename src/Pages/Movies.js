import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getSearchMovies } from 'services/API';
// import { Loader } from 'components/Loader';
// import { Report } from 'notiflix/build/notiflix-report-aio';
import { MoviesList } from 'components/MoviesList';

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
      {/* {loading && <Loader />} */}
      {
        error && !loading
        // &&
        // Report.warning('You enter invalid Input. Try again.')
      }
      <form onSubmit={handleSubmit}>
        <input type="text/" name="query" />
        <button type="submit">Search</button>
      </form>
      <h1>Movies</h1>
      <MoviesList movies={movies} />
    </div>
  );
};

export default Movies;
