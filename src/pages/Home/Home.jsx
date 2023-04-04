import { getTrendsMovies } from 'api/moviedb-api';
// import HomePageITEM from 'components/HomePageITEM/HomePageITEM';
import HomePageList from 'components/HomePageList/HomePageList';
import { Container, Section } from 'components/common.styled';
import { useEffect, useState } from 'react';
import { HomeTitle } from './Home.styled';

const appStatus = {
  IDLE: 0,
  PENDING: 1,
  RESOLVED: 2,
  REJECTED: 4,
};
const HomePage = () => {
  const [movies, setMovies] = useState(null);

  const [status, setStatus] = useState(appStatus.IDLE);
  const [error, setError] = useState(null);
  useEffect(() => {
    if (movies) {
      setStatus(appStatus.RESOLVED);
      return;
    }

    setStatus(appStatus.PENDING);
    getTrendsMovies()
      .then(results => {
        setMovies(results);
        setStatus(appStatus.RESOLVED);
      })
      .catch(error => {
        setStatus(appStatus.REJECTED);
        setMovies(null);
        setError(error);
      });
  }, [movies]);

  return (
    <Section>
      <Container>
        <HomeTitle>Movies Week Trending</HomeTitle>
        {status === appStatus.RESOLVED && movies?.length !== 0 && (
          <HomePageList movies={movies}></HomePageList>
        )}
        {status === appStatus.REJECTED && <h1>Error - {error.message}</h1>}

        {status === appStatus.RESOLVED && movies?.length === 0 && (
          <h1>Information not found</h1>
        )}
      </Container>
    </Section>
  );
};
export default HomePage;
