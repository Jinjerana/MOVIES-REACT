import { Link, useLocation } from 'react-router-dom';

const defaultImg =
  'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

const styles = {
  movies: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: 20,
    listStyleType: 'none',
    textDecoration: 'none',
  },
  item: {
    width: 200,
    height: 'auto',
  },
  title: {
    fontWeight: 500,
    fontSize: 22,
    color: '#feb236',
    textDecoration: 'none',
  },
};

export const MoviesList = ({ movies }) => {
  const location = useLocation();

  return (
    <ul style={styles.movies}>
      {movies.map(({ id, poster_path, title, name, original_title }) => (
        <Link key={id} to={`/movies/${id}`} state={{ from: location }}>
          <li style={styles.item}>
            <img
              src={
                poster_path
                  ? `https://image.tmdb.org/t/p/w500/${poster_path}`
                  : defaultImg
              }
              width={200}
              alt={title || name || original_title}
            />
            <h1 style={styles.title}>{title || name || original_title}</h1>
          </li>
        </Link>
      ))}
    </ul>
  );
};
