import { MoviesList } from 'components/MoviesList';
import { useFetchByQuery } from 'hooks/useFetchByQuery';

const Movies = () => {
  const { movies, isLoading, error, onHandleSubmit } = useFetchByQuery();

  const handleSubmit = e => {
    e.preventDefault();

    const value = e.target.query.value.toLowerCase().trim();
    onHandleSubmit(value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text/" name="query" />
        <button type="submit">Search</button>
      </form>
      {isLoading && <p>Loading...</p>}
      {error && <p>Something went wrong...</p>}
      {movies.length > 0 && <MoviesList movies={movies} />}
    </div>
  );
};

export default Movies;
