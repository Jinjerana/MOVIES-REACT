import { useEffect, useState } from 'react';
import { MoviesList } from 'components/MoviesList';
// import { Link } from 'react-router-dom';
import { getTrendingMovies } from 'services/API';
// import { Loader } from 'components/Loader';
// import { Report } from 'notiflix/build/notiflix-report-aio';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const trendingMovies = async () => {
      try {
        setLoading(true);
        setError(false);
        const data = await getTrendingMovies();
        setMovies(data.results);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    trendingMovies();
  }, []);

  return (
    <div>
      {/* {loading && <Loader />} */}
      {
        error && !loading
        //  &&
        // Report.warning('You enter invalid Input. Try again.')
      }
      <h1>Movies</h1>
      <MoviesList movies={movies} />
    </div>
  );
};

export default Home;
