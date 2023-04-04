import PropTypes from 'prop-types';
import { Image, ItemWrapp, P, Thumb } from './HomePageITEM.styled';

const HomePageITEM = ({ movieName, movieImage }) => {
  return (
    <ItemWrapp>
      <Thumb>
        <Image src={movieImage} alt={`Image for ${movieName}`}></Image>
      </Thumb>

      <P>{movieName}</P>
    </ItemWrapp>
  );
};

HomePageITEM.propTypes = {
  movieName: PropTypes.string.isRequired,
  movieImage: PropTypes.string.isRequired,
};
export default HomePageITEM;
