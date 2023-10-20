import { useParams } from 'react-router-dom';
import { getMovieCredits } from 'services/API';
import { useEffect, useState } from 'react';

export const Cast = () => {
  const { movie_id } = useParams();
  const [actors, setActors] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!movie_id) {
      return;
    }

    const getActorsList = async () => {
      try {
        setLoading(true);
        setError(false);
        const { cast } = await getMovieCredits(movie_id);
        setActors(cast);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    getActorsList();
  }, [movie_id]);

  return (
    <div>
      Cast:{' '}
      {actors.map(({ profile_path, name, character, id }) => {
        return (
          <div key={id}>
            <div>
              <img
                src={`https://image.tmdb.org/t/p/w500/${profile_path}`}
                alt={name}
                width={200}
              />
            </div>
            <div>
              <p>{name}</p>
              <p>{character}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
