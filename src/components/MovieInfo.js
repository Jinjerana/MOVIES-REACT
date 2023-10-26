import React from 'react';

const defaultImg =
  'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

const styles = {
  container: {
    display: 'flex',
    gap: 20,
    marginTop: 20,
  },
  item: {
    width: 'auto',
    height: 'auto',
  },
  movieTitle: {
    fontWeight: 700,
    fontSize: 26,
    color: '#feb236',
  },
  title: {
    fontWeight: 500,
    fontSize: 22,
    color: '#feb236',
    textDecoration: 'none',
  },
};

export const MovieInfo = ({
  movie: {
    genres,
    overview,
    poster_path,
    release_date,
    vote_average,
    title,
    original_title,
  },
}) => {
  const allGenres = genres.map(genre => genre.name).join(', ');
  return (
    <div style={styles.container}>
      <div style={styles.item}>
        <img
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/w500/${poster_path}`
              : defaultImg
          }
          width={300}
          alt={title || original_title}
        />
      </div>
      <div>
        <h1 style={styles.movieTitle}>{title || original_title}</h1>
        <p>{release_date}</p>
        <h2 style={styles.title}>User Score </h2>
        <p>{vote_average}</p>
        <h2 style={styles.title}>Overview</h2>
        <p>{overview}</p>
        <h2 style={styles.title}>Genres</h2>
        <p>{allGenres}</p>
      </div>
    </div>
  );
};
