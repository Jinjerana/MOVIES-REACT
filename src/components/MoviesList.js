// import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

export const MoviesList = ({ movies }) => {
  const location = useLocation();
  return (
    <div>
      {movies.map(({ id, title }) => {
        return (
          <li key={id}>
            <Link to={`/movies/${id}`} state={{ from: location }}>
              {title}
            </Link>
          </li>
        );
      })}
    </div>
  );

  // const products = getProducts();
  // useEffect;
  // get - запрос;
  // state;
  // State - props;
  // return (
  //   <main>
  //     <MoviesList movies={movies} />
  //   </main>
  // );
};
