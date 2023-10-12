import { useParams } from 'react-router-dom';

export const Reviews = () => {
  const { movieId } = useParams();
  //     useEffect;
  // //   get;

  return <div>Reviews: {movieId}</div>;
};
