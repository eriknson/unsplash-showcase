import React from 'react';

function ListItem(props) {
  return (
    <div className="listitem">
      <a href={props.unsplash_link} target="_blank" rel="noopener noreferrer">
        <div className="hover-text">
          <p>VIEW IMAGE</p>
        </div>
      </a>
      <img src={props.src} alt={props.alt_description} />
      <a href={props.user_link} target="_blank" rel="noopener noreferrer">
        <p className="listitem-name">{props.user}</p>
      </a>
      {/*       <p>
        <strong>{props.likes}</strong>
      </p>
      <p>{props.date}</p> */}
    </div>
  );
}
export default ListItem;
