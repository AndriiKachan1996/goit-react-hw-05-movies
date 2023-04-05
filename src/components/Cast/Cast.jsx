import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCast } from 'api/moviedb-api';
import { CastList } from './Cast.styled';
import CastCard from 'components/CastITEM/CastITEM';

const Cast = () => {
  const { moveID } = useParams();
  const [casts, setCasts] = useState(null);

  useEffect(() => {
    getMovieCast(moveID).then(response => {
      const cast = response.map(item => {
        return {
          profile_path: item.profile_path,
          name: item.name ?? '',
          character: item.character ?? '',
          id: item.id,
        };
      });
      setCasts(cast);
    });
  }, [moveID]);
  if (casts?.length !== 0)
    return (
      <CastList>
        {casts && casts.map(cast => <CastCard key={cast.id} cast={cast} />)}
      </CastList>
    );
  if (casts?.length === 0) return <p>We don't have any casts for this movie</p>;
};

export default Cast;
