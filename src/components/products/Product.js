import React, { useState } from "react";

import "./Product.css";

function Product(props) {
  const [price, setPrice] = useState("");

  const product = {
    name: "Iphone 12",
    price: 95000,
    tax: 1000,
    description: "Mobile",
  };

  const calculatePriceHandler = () => {
    setPrice(product.price + product.tax);
  };

  return (
    <div>
      <div className="card text-dark bg-light mb-3 maxWidthClass">
        <div className="card-header">Product</div>
        <div className="card-body">
          <h6 className="card-title">{product.name}</h6>
          <h6>TAX: ${product.tax}</h6>
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
