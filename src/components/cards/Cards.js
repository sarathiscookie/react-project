import React, {useState} from 'react';

import './Cards.css';

function Cards(props) {

  const [price, setPrice] = useState(props.price);

  const calculatePriceHandler = () => {
    setPrice(props.price * props.quantity);
  }

  return (
    <div>
      <div className="card text-dark bg-light mb-3 maxWidthClass">
        <div className="card-header">Product</div>
        <div className="card-body">
          <h5 className="card-title">{props.name}</h5>
          <h6>Quantity: {props.quantity}</h6>
          <h6>Price: ${price}</h6>
          Description: {props.description}
        </div>
        <div className="card-footer">
          <button className="btn btn-primary btn-sm" onClick={calculatePriceHandler}>Calculate Price</button>
        </div>
      </div>
      
    </div>
  );
}


export default Cards;