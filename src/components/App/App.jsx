import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import SharedLayout from '..//SharedLayout/SharedLayout';

const HomePage = lazy(() => import('..//..//pages/Home/Home'));
const Movies = lazy(() => import('..//..//pages/Movies/Movies'));
const MovieInfo = lazy(() => import('..//..//pages/MovieInfo/MovieInfo'));
const Cast = lazy(() => import('..//Cast/Cast'));
const Reviews = lazy(() => import('..//Reviews/Reviews'));
const InvalidUrl = lazy(() => import('..//NotValidUrl/NotValidUrl'));

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:moveID" element={<MovieInfo />}>
          <Route path="cast" element={<Cast />} />
          <Route path="review" element={<Reviews />} />
        </Route>
      <Route path="*" element={<InvalidUrl />}></Route>

      </Route>
    </Routes>
  );
};

export default App;
