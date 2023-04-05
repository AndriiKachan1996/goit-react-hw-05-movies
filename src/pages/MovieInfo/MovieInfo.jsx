import { Suspense, useEffect, useRef, useState } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import { getMovieDesc } from 'api/moviedb-api';
import { Container, Section } from 'components/common.styled';
import {
  BackLink,
  InfoContainer,
  InfoLink,
  InfoList,
  InfoTitle,
  MovieItem,
} from './MovieInfo.styled';
import MovieCard from 'components/MovieCard/MovieCard';

const MovieInfo = () => {
  const { moveID } = useParams();
  const [movieInfo, setMovieInfo] = useState(null);

  const location = useLocation();
  const backLinkHref = useRef(location.state?.from ?? '/');

  useEffect(() => {
    getMovieDesc(moveID).then(responce => {
      const {
        genres,
        id,
        overview,
        popularity,
        poster_path,
        release_date,
        tagline,
        title,
        vote_average,
      } = responce;

      setMovieInfo({
        genres,
        id,
        overview,
        popularity,
        poster_path,
        release_date,
        tagline,
        title,
        vote_average,
      });
    });
  }, [moveID]);

  return (
    <Section>
      <Container>
        <BackLink to={backLinkHref.current} state={{ from: location }}>
          ⬅️Go back
        </BackLink>
        {movieInfo && movieInfo.id && (
          <MovieCard movieInfo={movieInfo}></MovieCard>
        )}
        <InfoContainer>
          <InfoTitle>Additional information</InfoTitle>
          <InfoList>
            <MovieItem>
              <InfoLink to="cast">Cast</InfoLink>
            </MovieItem>
            <MovieItem>
              <InfoLink to="review">Review</InfoLink>
            </MovieItem>
          </InfoList>
        </InfoContainer>

        <Suspense fallback={<div>Loading page...</div>}>
          <Outlet />
        </Suspense>
      </Container>
    </Section>
  );
};

export default MovieInfo;
