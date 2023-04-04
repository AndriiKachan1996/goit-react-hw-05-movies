import PropTypes from 'prop-types';
import { InfoLineWrapp } from './MovieCardINFO.styled';

const MovieCardINFO = ({ title, description }) => {
  return (
    <InfoLineWrapp>
      <span>{title}</span>
      <span>{description}</span>
    </InfoLineWrapp>
  );
};

MovieCardINFO.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.number.isRequired,
  ]),
};
export default MovieCardINFO;
