import React from 'react';

const Column = (props) => {
  const {
    cards, title
  } = props;

  return (
    <div className="column">
      <div>{title}</div>
      <div>{cards}</div>
    </div>
  );
}

export default Column;