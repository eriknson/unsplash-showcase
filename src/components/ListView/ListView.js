import React from 'react';
import { useFetch } from './FetchImage';
import ListItem from './ListItem';

function ListView() {
  const [data, loading] = useFetch('https://case.radon.works/photos.json');
  return (
    <>
      <div className="listview">
        <h1>Textures & patterns</h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text.
        </p>
        {loading ? (
          'Loading...'
        ) : (
          <ul>
            {data.map(({ updated_at, user, id, alt_description, urls }) => (
              <li key={`photo-${id}`}>
                <ListItem
                  src={urls.small}
                  alt_description={alt_description}
                  user={user.name}
                  date={updated_at}
                />
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}
export default ListView;
