import PropTypes from 'prop-types';
import { InfoLineWrapp, Title } from './MovieCardINFO.styled';

const MovieCardINFO = ({ title, description }) => {
  return (
    <InfoLineWrapp>
      <Title>{title}</Title>
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
