import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

import { ListItemCard, ListWrapp } from './HomePageList.styled';
import HomePageITEM from 'components/HomePageITEM/HomePageITEM';

const HomePageList = ({ movies }) => {
  const location = useLocation();

  return (
    <ListWrapp>
      {movies &&
        movies.map(item => (
          <ListItemCard key={item.id}>
            <Link
              to={`${location.pathname === '/' ? 'movies/' : ''}${item.id}`}
              state={{ from: location }}
            >
              <HomePageITEM
                movieName={item.name}
                movieImage={item.poster_path}
              />
            </Link>
          </ListItemCard>
        ))}
    </ListWrapp>
  );
};

HomePageList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      poster_path: PropTypes.string,
    })
  ),
};
export default HomePageList;
