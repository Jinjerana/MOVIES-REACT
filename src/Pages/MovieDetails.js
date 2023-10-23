import { Link, Outlet, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
// import { Loader } from 'components/Loader';
// import { Report } from 'notiflix/build/notiflix-report-aio';
import { getSearchMovies } from 'services/API';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [loading, setLoading] = useState(false);
  const [movieInfo, setMovieInfo] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!movieId) return;

    const getMovieInfoById = async () => {
      try {
        setLoading(true);
        setError(false);
        const data = await getSearchMovies(movieId);
        setMovieInfo(data);
      } catch (error) {
        setError(true);
        // Report.warning('You enter invalid Input. Try again.');
      } finally {
        setLoading(false);
      }
    };
    getMovieInfoById();
  }, [movieId]);

  return (
    <div>
      {/* {loading && <Loader />} */}
      {
        error && !loading
        //  &&
        // Report.warning('You enter invalid Input. Try again.')
      }
      {movieInfo && <div movieInfo={movieInfo} />}
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};

export default MovieDetails;
