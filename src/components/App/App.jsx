import { Routes, Route } from 'react-router-dom';

import Header from 'components/Header/Header';
import HomePage from 'pages/Home';
import MoviesPage from 'pages/Movies';
export const App = () => {
  return (
    <>
      <Header></Header>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
      </Routes>
    </>
  );
};
