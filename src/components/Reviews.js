import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'services/API';
import { useEffect, useState } from 'react';
import { Loader } from 'components/Loader';
// import { Report } from 'notiflix/build/notiflix-report-aio';

export const Reviews = () => {
  const { movieID } = useParams();
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!movieID) return;

    const reviewList = async () => {
      setLoading(true);
      setError(false);
      try {
        const { results } = await getMovieReviews(movieID);
        setReviews(results);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    reviewList();
  }, [movieID]);

  return (
    <div>
      {loading && <Loader />}
      {
        error && !loading
        //  &&
        // Report.warning('You enter invalid Input. Try again.')
      }
      <h1>Reviews</h1>
      {reviews && reviews.length > 0 ? (
        reviews.map(({ author, content, id }) => (
          <div key={id}>
            <h2>{author}</h2>
            <p>{content}</p>
          </div>
        ))
      ) : (
        <p>No reviews</p>
      )}
    </div>
  );
};
