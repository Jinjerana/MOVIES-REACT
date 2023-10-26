// import Home from 'Pages/Home';
// import MovieDetails from 'Pages/MovieDetails';
// import Movies from 'Pages/Movies';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';
import { Cast } from './Cast';
import { Reviews } from './Reviews';
import { lazy } from 'react';

const Home = lazy(() => import('../Pages/Home'));
const MovieDetails = lazy(() => import('../Pages/MovieDetails'));
const Movies = lazy(() => import('../Pages/Movies'));
// const Cast = lazy(() => import('../components/Cast'));
// const Reviews = lazy(() => import('../components/Reviews'));

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
};
