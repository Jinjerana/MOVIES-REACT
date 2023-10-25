import { Link, useLocation } from 'react-router-dom';

const defaultImg =
  'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

export const MoviesList = ({ movies }) => {
  const location = useLocation();

  return (
    <ul>
      {movies.map(({ id, poster_path, title, name, original_title }) => (
        <Link key={id} to={`/movies/${id}`} state={{ from: location }}>
          <li>
            <img
              src={
                poster_path
                  ? `https://image.tmdb.org/t/p/w500/${poster_path}`
                  : defaultImg
              }
              width={250}
              alt={title || name || original_title}
            />
            <h1>{title || name || original_title}</h1>
          </li>
        </Link>
      ))}
    </ul>
  );
};
