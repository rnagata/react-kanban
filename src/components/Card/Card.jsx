import React from 'react';

const Card = (props) => {
  const { 
    id, title, body, 
    priority, status, createdBy, 
    assignedTo,
  } = props; // creates variables from keys in the props object

  return (
    <div className="card">
      <h3>{title}</h3>
      <p>{body}</p>
      <p>{priority}</p>
      <p>{createdBy}</p>
      <p>{assignedTo}</p>
    </div>
  );
}

export default Card;