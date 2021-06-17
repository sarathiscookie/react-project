import React from 'react';

import './Cards.css';

function Cards(props) {

  return (
    <div>
      <div className="card text-dark bg-light mb-3 maxWidthClass">{props.children}</div>
    </div>
  );
}


export default Cards;