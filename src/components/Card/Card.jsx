import React from 'react';

const Card = (props) => {
  const { 
    id, title, body, 
    priority, status, createdBy, 
    assignedTo
  } = props;

  return (
    <div className="card">
      <div>{id}</div>
      <div>{title}</div>
      <div>{body}</div>
      <div>{priority}</div>
      <div>{status}</div>
      <div>{createdBy}</div>
      <div>{assignedTo}</div>
    </div>
  );
}

export default Card;