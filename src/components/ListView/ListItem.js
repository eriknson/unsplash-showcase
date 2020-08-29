import React from 'react';

function ListItem(props) {
  return (
    <div className="listitem">
      <img src={props.src} alt={props.alt_description} />
      <p>{props.user}</p>
      <p>{props.date}</p>
      <p>
        <strong>{props.likes}</strong>
      </p>
    </div>
  );
}
export default ListItem;
