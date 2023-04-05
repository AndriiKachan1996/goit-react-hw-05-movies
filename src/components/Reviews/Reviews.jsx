import { getMovieReviews } from 'api/moviedb-api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { RewContent, RewList, RewTitle } from './Reviews.styled';

const Review = () => {
  const [reviews, setReview] = useState(null);
  const { moveID } = useParams();

  useEffect(() => {
    if (!reviews) {
      getMovieReviews(moveID).then(response => {
        setReview(response);
      });
    }
  }, [moveID, reviews]);

  if (reviews?.length !== 0)
    return (
      <RewList>
        {reviews &&
          reviews.map(review => (
            <li key={review.id}>
              <RewTitle>Author:{review.author}</RewTitle>
              <RewContent>{review.content}</RewContent>
            </li>
          ))}
      </RewList>
    );
  if (reviews?.length === 0)
    return <h1>We don't have any reviews for this movie</h1>;
};

export default Review;
