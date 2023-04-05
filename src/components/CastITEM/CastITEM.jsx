import PropTypes from 'prop-types';
import {
  CastBox,
  CastCharacter,
  CastDesc,
  CastImage,
  CastItemdWrapp,
  CastName,
} from './CastITEM.styled';

const CastCard = ({ cast }) => {
  return (
    <CastItemdWrapp>
      <CastBox>
        <CastImage src={cast.profile_path} alt="" />
      </CastBox>
      <CastDesc>
        <CastName>{cast.name}</CastName>
        <CastCharacter>Character: {cast.character}</CastCharacter>
      </CastDesc>
    </CastItemdWrapp>
  );
};

CastCard.propTypes = {
  cast: PropTypes.shape({
    profile_path: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    character: PropTypes.string.isRequired,
  }),
};

export default CastCard;
