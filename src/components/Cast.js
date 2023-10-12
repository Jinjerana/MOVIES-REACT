import { useParams } from 'react-router-dom';

export const Cast = () => {
  const { movieId } = useParams();
  //     useEffect;
  // //   get;

  return <div>Cast: {movieId}</div>;
};
