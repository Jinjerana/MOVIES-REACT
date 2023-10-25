import React from 'react';

const defaultImg =
  'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

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
    <div>
      <img
        src={
          poster_path
            ? `https://image.tmdb.org/t/p/w500/${poster_path}`
            : defaultImg
        }
        width={250}
        alt={title || original_title}
      />

      <div>
        <h1>{title || original_title}</h1>
        <p>{release_date}</p>
        <h2>User Score </h2>
        <p>{vote_average}</p>
        <h2>Overview</h2>
        <p>{overview}</p>
        <h2>Genres</h2>
        <p>{allGenres}</p>
      </div>
    </div>
  );
};
