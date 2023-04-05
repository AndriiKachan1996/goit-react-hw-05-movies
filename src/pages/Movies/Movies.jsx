import { getSearchMovie } from 'api/moviedb-api';
import HomePageList from 'components/HomePageList/HomePageList';
import SearchForm from 'components/SearchForm/SearchForm';
import { Container, Section } from 'components/common.styled';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
const appStatus = {
  IDLE: 0,
  PENDING: 1,
  RESOLVED: 2,
  REJECTED: 4,
};
const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState('');
  const [searchResult, setSearchResult] = useState(null);
  const [status, setStatus] = useState(appStatus.IDLE);
  const [error, setError] = useState(null);

  const queryStr = searchParams.get('query') ?? '';

  const onSearch = toSearch => {
    const newQuery = toSearch !== '' ? { query: toSearch } : {};
    setSearchParams(newQuery);
  };

  useEffect(() => {
    if (queryStr !== '' && queryStr !== query) {
      setStatus(appStatus.PENDING);
      getSearchMovie(queryStr)
        .then(response => {
          setSearchResult(response);
          setQuery(queryStr);
          setStatus(appStatus.RESOLVED);
          return;
        })
        .catch(error => {
          setStatus(appStatus.REJECTED);
          setSearchResult(null);
          setError(error);
        });
    }
    if (queryStr !== '' && queryStr === query) {
      setStatus(appStatus.RESOLVED);
      return;
    }
    if (queryStr === '') {
      setStatus(appStatus.IDLE);
      setQuery('');
      setSearchResult(null);
      return;
    }
  }, [query, setSearchResult, setStatus, queryStr, setQuery, setError]);

  return (
    <Section>
      <Container>
        <SearchForm query={queryStr} onSubmit={onSearch} />
        {status === appStatus.RESOLVED && searchResult && (
          <HomePageList movies={searchResult} />
        )}
        {status === appStatus.REJECTED && <h1>Error - {error.message}</h1>}

        {status === appStatus.RESOLVED && searchResult?.length === 0 && (
          <h1>Movies whith name "{query}" not found </h1>
        )}
      </Container>
    </Section>
  );
};

export default Movies;
