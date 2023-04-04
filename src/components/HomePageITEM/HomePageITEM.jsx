import { Image, ImageBox } from './HomePageITEM.styled';

const HomePageITEM = ({ movieName, movieImage }) => {
  return (
    <>
      <ImageBox>
        <Image src={movieImage} alt={`Image for ${movieName}`}></Image>
      </ImageBox>

      <p>{movieName}</p>
    </>
  );
};

// HomePageITEM.propTypes = {
//   movieName: PropTypes.string.isRequired,
//   movieImage: PropTypes.string.isRequired,
// };
export default HomePageITEM;
