import React, {useState} from 'react';

import './Cards.css';

function Cards(props) {

  const [name, setName] = useState(props.name);

  const [description, setDescription] = useState(props.description);

  const addQunatityHandler = () => {
    setName('Updated Name!');
  }

  const editContenthandler = () => {
    setDescription('Updated Description!');
  }

  return (
    <div>
      <div className="card text-dark bg-light mb-3 maxWidthClass">
        <div className="card-header">Product</div>
        <div className="card-body">
          <h5 className="card-title">{name} <button type="button" className="btn btn-primary btn-sm" onClick={addQunatityHandler}>Add Quantity</button></h5>
          <p className="card-text">
            {description} <button type="button" className="btn btn-primary btn-sm" onClick={editContenthandler}>Edit Content</button>
          </p>
        </div>
        <div className="card-footer">
          ${props.price}
        </div>
      </div>
      
    </div>
  );
}


export default Cards;