import { useFetchCast } from 'hooks';

const defaultImg =
  'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

export const Cast = () => {
  const { cast, isLoading, error } = useFetchCast();
  return (
    <>
      {isLoading && <p>Loading...</p>}
      {error && <p>Something went wrong...</p>}
      <div>
        Cast:{''}
        {cast.map(({ profile_path, name, character, id }) => {
          return (
            <div key={id}>
              <div>
                <img
                  src={
                    profile_path
                      ? `https://image.tmdb.org/t/p/w500/${profile_path}`
                      : defaultImg
                  }
                  width={250}
                  alt={name}
                />
              </div>
              <div>
                <div>{name}</div>
                <p>{character}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
