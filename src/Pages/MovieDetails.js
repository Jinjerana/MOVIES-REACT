import { MovieInfo } from 'components/MovieInfo';
import { useFetchMovieInfo } from 'hooks';
import { Suspense, useRef } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';

const MovieDetails = () => {
  const { movie, isLoading, error } = useFetchMovieInfo();
  const location = useLocation();
  const goBackLink = useRef(location?.state?.from ?? '/');

  return (
    <>
      <Link to={goBackLink.current}>
        <button type="button">Go back</button>
      </Link>
      {isLoading && <p>Loading...</p>}
      {error && <p>Something went wrong...</p>}
      {movie && <MovieInfo movie={movie} />}

      <h1>Additional Info</h1>

      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Suspense fallback={<p>Loading...</p>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieDetails;
