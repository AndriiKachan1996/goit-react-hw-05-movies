import { getTrendsMovies } from 'api/moviedb-api';
import HomePageITEM from 'components/HomePageITEM/HomePageITEM';
import HomePageList from 'components/HomePageList/HomePageList';
import { Container, Section } from 'components/common.styled';
import { useEffect, useState } from 'react';

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
        <h1>Movies Week Trending</h1>
        {status === appStatus.RESOLVED && movies?.length !== 0 && (
          <HomePageList movies={movies}></HomePageList>
        )}
        {/* {status === appStatus.REJECTED && (
          <MessageBox>Error - {error.message}</MessageBox>
        )}

        {status === appStatus.RESOLVED && movies?.length === 0 && (
          <MessageBox>Information not found</MessageBox>
        )} */}
      </Container>
    </Section>
  );
};
export default HomePage;