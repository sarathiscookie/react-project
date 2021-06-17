import React, { useState } from "react";

import Cards from '../cards/Cards';

function ProductList(props) {

    const [price, setPrice] = useState('');

    const calculatePriceEventHandler = () => {
        setPrice(props.price + props.tax);
    };

  return (
    <div>
      <Cards>
        <div className="card-header">Product List</div>
        <div className="card-body">
          <h6 className="card-title">{props.name}</h6>
          <h6>Quantity: ${props.quantity}</h6>
          <h6>Tax: ${props.tax}</h6>
          <h6>Price: ${props.price}</h6>
          <h6>Description: {props.description}</h6>
        </div>
        <div className="card-footer">
          <button
            className="btn btn-primary btn-sm"
            onClick={calculatePriceEventHandler}
          >
            Calculate Price
          </button>
          <span>{price}</span>
        </div>
      </Cards>
    </div>
  );
}

export default ProductList;
