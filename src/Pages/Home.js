import { MoviesList } from 'components/MoviesList';
import { useFetchTrendingMovies } from 'hooks';

const Home = () => {
  const { movies, isLoading, error } = useFetchTrendingMovies();
  
  return (
    <>
    {isLoading && <p>Loading...</p>}
    {error && <p>Something went wrong...</p>}
    {movies.length > 0 && <MoviesList movies={movies} />} 
      
    </>
  );
};

export default Home;
