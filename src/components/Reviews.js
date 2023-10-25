import { useFetchReviews } from 'hooks';

export const Reviews = () => {
  const { reviews, isLoading, error } = useFetchReviews();

  return (
    <>
      {isLoading && <p>Loading...</p>}
      {error && <p>Something went wrong...</p>}
      <h1>Reviews</h1>
      {reviews.length > 0 ? (
        reviews.map(({ author, content, id }) => (
          <div key={id}>
            <h2>{author}</h2>
            <p>{content}</p>
          </div>
        ))
      ) : (
        <p>No reviews</p>
      )}
    </>
  );
};
