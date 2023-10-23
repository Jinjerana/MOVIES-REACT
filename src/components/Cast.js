import { useParams } from 'react-router-dom';
import { getMovieCredits } from 'services/API';
import { useEffect, useState } from 'react';
import { Loader } from 'components/Loader';
import { Report } from 'notiflix/build/notiflix-report-aio';

export const Cast = () => {
  const { movieID } = useParams();
  const [actors, setActors] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!movieID) {
      return;
    }

    const getActorsList = async () => {
      try {
        setLoading(true);
        setError(false);
        const { cast } = await getMovieCredits(movieID);
        setActors(cast);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    getActorsList();
  }, [movieID]);

  return (
    <div>
      {loading && <Loader />}
      {error &&
        !loading &&
        Report.warning('You enter invalid Input. Try again.')}
      <div>
        Cast:{''}
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
    </div>
  );
};
