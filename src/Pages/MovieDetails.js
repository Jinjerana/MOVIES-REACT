// import { useEffect } from 'react';
// import { getMovieById } from API

import { Link, Outlet, useParams } from 'react-router-dom';

// export const MovieDetails = () => {
//   const { id } = useParams();
//   const movie = getMovieById(id);
//   useEffect;
//   get;

//   return (
//     <main>
//       <img />
//       <div>
//         <h2>
//           Movie - {movie.name} - {id}
//         </h2>
//         <p>About movie</p>
//       </div>
//     </main>
//   );
// };
const MovieDetails = () => {
  const { movieId } = useParams();

  //   useEffect(() => {
  //     HTTP запрос
  //   }, [])
  //   записиваем в state, рендерим разметку

  return (
    <>
      <h1>MovieDetails: {movieId}</h1>
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Outlet />
    </>
  );
};

export default MovieDetails;
