// import SharedLayout from 'components/SharedLayout/SharedLayout';
import Cast from 'components/Cast/Cast';
import SharedLayout from '..//SharedLayout/SharedLayout';
import HomePage from 'pages/Home/Home';
import MovieInfo from 'pages/MovieInfo/MovieInfo';
import Movies from 'pages/Movies/Movies';
import { Route, Routes } from 'react-router-dom';
import Reviews from 'components/Reviews/Reviews';

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
      </Route>
    </Routes>
    // <Routes>
    //   <Route path="/" element={<SharedLayout />}>
    //     <Route index element={<Home />} />
    //     <Route path="movies" element={<Movies />}></Route>
    // <Route path="movies/:moveID" element={<MovieInfo />}>
    //   <Route path="cast" element={<Cast />} />
    //   <Route path="review" element={<Review />} />
    // </Route>

    //     <Route path="*" element={<NoMatch />} />
    //   </Route>
    // </Routes>
  );
};

export default App;
