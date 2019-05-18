import React from 'react';

const Card = (props) => {
  const {
    // id,
    title,
    body, 
    priority, 
    createdBy, 
    assignedTo,
    // deleteFunction
  } = props; 

  return (
    <div className="card">
      <h3>{title}</h3>
      <p>{body}</p>
      <p>{priority}</p>
      <p>{createdBy}</p>
      <p>{assignedTo}</p>
      {/* <button onClick={deleteFunction}>Delete</button> */}
    </div>
  );
}

export default Card;