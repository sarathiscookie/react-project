import React, { useState } from "react";

import ProductStore from './ProductStore';

function Product(props) {
  const [price, setPrice] = useState('');

  const product = {
    name: "Iphone 12",
    quantity: 5,
    price: 95000,
    tax: 1000,
    description: "Mobile",
  };

  const calculatePriceHandler = () => {
    setPrice(product.price + product.tax);
  };

  return (
    <div>
      <ProductStore />

      <div className="card text-dark bg-light mb-3 maxWidthClass">
        <div className="card-header">Product List</div>
        <div className="card-body">
          <h6 className="card-title">{product.name}</h6>
          <h6>Quantity: ${product.quantity}</h6>
          <h6>Tax: ${product.tax}</h6>
          <h6>Price: ${product.price}</h6>
          <h6>Description: {product.description}</h6>
        </div>
        <div className="card-footer">
          <button
            className="btn btn-primary btn-sm"
            onClick={calculatePriceHandler}
          >
            Calculate Price
          </button>
          <span>{price}</span>
        </div>
      </div>

    </div>
  );
}

export default Product;
