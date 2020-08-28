import React, { useState } from 'react';
import { useFetch } from './FetchImage';
import ListItem from './ListItem';

function ListView() {
  const [data, loading] = useFetch('https://case.radon.works/photos.json');
  const [count, setCount] = useState(2);

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
            {data
              .slice(0, count)
              .sort((a, b) => (a.updated_at > b.updated_at ? -1 : 1))
              .map((i) => (
                <li key={`photo-${i.id}`}>
                  <ListItem
                    src={i.urls.small}
                    alt_description={i.alt_description}
                    user={i.user.name}
                    date={i.updated_at}
                  />
                </li>
              ))}
          </ul>
        )}
        <button onClick={() => setCount(count + 2)}>Load more!</button>
      </div>
    </>
  );
}
export default ListView;
