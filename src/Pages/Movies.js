import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Movies = () => {
  //   useEffect(() => {
  //     //HTTP-запрос//
  //   }, []);

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
