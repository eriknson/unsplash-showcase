import React, { useState, useRef } from 'react';
import { useFetch } from './FetchImage';
import ListItem from './ListItem';

function ListView() {
  const [data, loading] = useFetch('https://case.radon.works/photos.json');
  const [count, setCount] = useState(8);
  const [sortLatest, setSortByDate] = useState(true);
  const listviewRef = useRef(null);
  const executeScroll = () => window.scrollTo(0, listviewRef.current.offsetTop);

  if (sortLatest) {
    data.sort((a, b) => (a.updated_at > b.updated_at ? -1 : 1));
  }
  // Assumption: Sort on likes if sortLatest===false
  else {
    data.sort((a, b) => (a.likes > b.likes ? -1 : 1));
  }

  return (
    <>
      <div id="listview" className="standard-component" ref={listviewRef}>
        <div className="listview-intro">
          <h2>Textures & patterns</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text.
          </p>
        </div>
        <div className="listview-top-buttons-container">
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
        </div>
        {loading ? (
          'Loading 🥰'
        ) : (
          <ul>
            {data.slice(0, count).map((i) => (
              <li className="listitem-container" key={`photo-${i.id}`}>
                <ListItem
                  src={i.urls.small}
                  alt_description={i.alt_description}
                  user={i.user.name}
                  date={i.updated_at}
                  likes={i.likes}
                  unsplash_link={i.links.html}
                  user_link={i.user.links.html}
                />
              </li>
            ))}
          </ul>
        )}
        <div className="listview-bottom-buttons-container">
          <button onClick={() => setCount(count + 4)}>Load more images</button>
          <button id="back-to-top-button" onClick={executeScroll}>
            Back to top
          </button>
        </div>
      </div>
    </>
  );
}
export default ListView;
