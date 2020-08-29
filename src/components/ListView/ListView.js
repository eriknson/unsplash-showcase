import React, { useState } from 'react';
import { useFetch } from './FetchImage';
import ListItem from './ListItem';

function ListView() {
  const [data, loading] = useFetch('https://case.radon.works/photos.json');
  const [count, setCount] = useState(8);
  const [sortLatest, setSortByDate] = useState(true);

  let visibleImages = data.slice(0, count);

  if (sortLatest === true) {
    visibleImages.sort((a, b) => (a.updated_at > b.updated_at ? -1 : 1));
  } else {
    visibleImages.sort((a, b) => (a.likes > b.likes ? -1 : 1));
  }

  return (
    <>
      <div className="listview">
        <h1>Textures & patterns</h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text.
        </p>
        <button
          onClick={() => setSortByDate(sortLatest === false ? true : true)}
        >
          Latest
        </button>
        <button
          onClick={() => setSortByDate(sortLatest === true ? false : false)}
        >
          Popular
        </button>
        {loading ? (
          'Loading 🥰'
        ) : (
          <ul>
            {visibleImages.map((i) => (
              <li key={`photo-${i.id}`}>
                <ListItem
                  src={i.urls.small}
                  alt_description={i.alt_description}
                  user={i.user.name}
                  date={i.updated_at}
                  likes={i.likes}
                />
              </li>
            ))}
          </ul>
        )}
        <button onClick={() => setCount(count + 4)}>Load more!</button>
      </div>
    </>
  );
}
export default ListView;
