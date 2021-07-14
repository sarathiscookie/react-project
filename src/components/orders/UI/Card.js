import React from "react";

import './Card.css';

export default function Card(props) {
  return (
    <div>
      <div className="card text-dark bg-light mb-3 maxWidthClass">
        <div className="card-header">{props.header}</div>
        <div className="card-body">{props.children}</div>
      </div>
    </div>
  );
}
