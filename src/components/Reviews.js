import { useFetchReviews } from 'hooks';

const styles = {
  title: {
    fontWeight: 700,
    fontSize: 26,
    color: '#feb236',
  },
  author: {
    fontWeight: 700,
    fontSize: 22,
    color: '#feb236',
  },
};

const Reviews = () => {
  const { reviews, isLoading, error } = useFetchReviews();

  return (
    <>
      {isLoading && <p>Loading...</p>}
      {error && <p>Something went wrong...</p>}
      <h1 style={styles.title}>Reviews</h1>
      {reviews.length > 0 ? (
        reviews.map(({ author, content, id }) => (
          <div key={id}>
            <h2 style={styles.author}>{author}</h2>
            <p>{content}</p>
          </div>
        ))
      ) : (
        <p>No reviews</p>
      )}
    </>
  );
};

export default Reviews;
