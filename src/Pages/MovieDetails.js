import { MovieInfo } from 'components/MovieInfo';
import { useFetchMovieInfo } from 'hooks';
import { Suspense, useRef } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';

const styles = {
  container: {
    display: 'block',
    marginLeft: 20,
  },
  title: {
    fontWeight: 700,
    fontSize: 26,
    color: '#feb236',
  },
  link: {
    fontWeight: 700,
    fontSize: 18,
    color: '#feb236',
    margin: 15,
  },
  button: {
    fontWeight: 300,
    fontSize: 14,
    height: 25,
    width: 80,
    marginTop: 20,
    justifyContent: 'center',
    cursor: 'pointer',
    borderRadius: 5,
    borderWidth: 2,
  },
};

const MovieDetails = () => {
  const { movie, isLoading, error } = useFetchMovieInfo();
  const location = useLocation();
  const goBackLink = useRef(location?.state?.from ?? '/');

  return (
    <div div style={styles.container}>
      <Link to={goBackLink.current}>
        <button style={styles.button} type="button">
          Go back
        </button>
      </Link>
      {isLoading && <p>Loading...</p>}
      {error && <p>Something went wrong...</p>}
      {movie && <MovieInfo movie={movie} />}

      <h1 style={styles.title}>Additional Info</h1>

      <ul>
        <li>
          <Link style={styles.link} to="cast">
            Cast
          </Link>
        </li>
        <li>
          <Link style={styles.link} to="reviews">
            Reviews
          </Link>
        </li>
      </ul>
      <Suspense fallback={<p>Loading...</p>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default MovieDetails;
