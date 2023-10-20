import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'services/API';
import { useEffect, useState } from 'react';

export const Reviews = () => {
  const { movie_id } = useParams();
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!movie_id) {
      return;
    }

    const reviewList = async () => {
      try {
        setLoading(true);
        setError(false);
        const { results } = await getMovieReviews(movie_id);
        setReviews(results);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    reviewList();
  }, [movie_id]);

  return (
    <div>
      {reviews.length > 0 ? (
        <div>
          {reviews.map(({ author, content, id }) => {
            return (
              <li key={id}>
                <div>
                  <h2>{author}</h2>
                  <p>{content}</p>
                </div>
              </li>
            );
          })}
        </div>
      ) : (
        <p>No reviews</p>
      )}
    </div>
  );
};
