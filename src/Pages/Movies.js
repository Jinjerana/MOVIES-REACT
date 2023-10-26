import { MoviesList } from 'components/MoviesList';
import { useFetchByQuery } from 'hooks/useFetchByQuery';

const styles = {
  container: {
    display: 'flex',
    gap: 40,
    alignItems: 'center',
    height: 200,
    justifyContent: 'center',
  },
  input: {
    height: 30,
    width: 300,
    borderRadius: 5,
    borderColor: '#6b5b95',
    color: '#feb236',
  },
  button: {
    fontWeight: 700,
    fontSize: 18,
    height: 35,
    width: 100,
    cursor: 'pointer',
    borderRadius: 5,
    borderColor: '#6b5b95',
    color: '#feb236',
  },
};

const Movies = () => {
  const { movies, isLoading, error, onHandleSubmit } = useFetchByQuery();

  const handleSubmit = e => {
    e.preventDefault();

    const value = e.target.query.value.toLowerCase().trim();
    onHandleSubmit(value);
  };

  return (
    <div>
      <form style={styles.container} onSubmit={handleSubmit}>
        <input style={styles.input} type="text/" name="query" />
        <button style={styles.button} type="submit">
          Search
        </button>
      </form>
      {isLoading && <p>Loading...</p>}
      {error && <p>Something went wrong...</p>}
      {movies.length > 0 && <MoviesList movies={movies} />}
    </div>
  );
};

export default Movies;
