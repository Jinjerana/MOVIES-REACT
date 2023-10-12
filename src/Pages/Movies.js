import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Movies = () => {
  useEffect(() => {
    async function getUser() {
      try {
        const response = await axios.get(
          'https://api.themoviedb.org/3/movie/11?api_key=30f74636e08937577c41f8000490a2f5'
        );
        console.log(response);
      } catch (error) {
        console.error(error);
      }
    }
    //HTTP-запрос//
  }, []);

  //   path="/movies/:movieId"
  return (
    <div>
      {Movies.map(movie => {
        return (
          <Link key={movie} to={`${movie}`}>
            {movie}
          </Link>
        );
      })}
    </div>
  );
};

// state, isLoading, error

{
  /* <li>
    <Link to="cast">Cast</Link>
</li>
<li>
    <Link to="reviews">Reviews</Link>
</li> */
}

export default Movies;
