import PropTypes from 'prop-types';
import { getImagePath } from 'api/moviedb-api';
import {
  Image,
  ImageWrapp,
  InfoWrapp,
  MovieCardWrapp,
} from './MovieCard.styled';
import MovieCardINFO from 'components/MovieCardINFO/MovieCardINFO';

const MovieCard = ({ movieInfo }) => {
  const createGenre = genres => {
    return genres.map(genre => genre.name).join(', ');
  };

  const getReleaseYear = releaseDate => {
    return releaseDate !== '' ? `(${new Date(releaseDate).getFullYear()})` : '';
  };
  return (
    <MovieCardWrapp>
      <ImageWrapp>
        <Image
          src={
            movieInfo.poster_path
              ? getImagePath(movieInfo.poster_path)
              : 'https://via.placeholder.com/300x400/bdc5f2/2b2323?text=Image+not+found'
          }
        ></Image>
      </ImageWrapp>
      <InfoWrapp>
        <h1>
          {movieInfo.title} {getReleaseYear(movieInfo.release_date)}
        </h1>
        <p>{movieInfo.tagline}</p>
        <MovieCardINFO title="Vote:" description={movieInfo.vote_average} />
        <MovieCardINFO title="Popularity:" description={movieInfo.popularity} />
        <MovieCardINFO title="Overview:" description={movieInfo.overview} />
        <MovieCardINFO
          title="Genre:"
          description={createGenre(movieInfo.genres)}
        />
      </InfoWrapp>
    </MovieCardWrapp>
  );
};

MovieCard.propTypes = {
  movieInfo: PropTypes.shape({
    genres: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
      })
    ),
    id: PropTypes.number.isRequired,
    overview: PropTypes.string,
    popularity: PropTypes.number.isRequired,
    poster_path: PropTypes.string,
    release_date: PropTypes.string.isRequired,
    tagline: PropTypes.string,
    title: PropTypes.string.isRequired,
    vote_average: PropTypes.number.isRequired,
  }),
};

export default MovieCard;
