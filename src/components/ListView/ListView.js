import React from 'react';
import { useFetch } from './hooks';

function ListView() {
  const [data, loading] = useFetch('https://case.radon.works/photos.json');

  console.log(data);
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
            {data.map(({ id, alt_description, urls }) => (
              <li key={`photo-${id}`}>
                <img alt={alt_description} src={urls.small} />
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}
export default ListView;
