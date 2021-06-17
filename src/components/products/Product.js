import React, { useState } from "react";

import ProductStore from "./ProductStore";

import ProductList from "./ProductList";

function Product(props) {
  const products = [
    {
      name: "Iphone 12",
      quantity: 5,
      price: 95000,
      tax: 1000,
      description: "Mobile",
    },
    {
      name: "Samsung A3",
      quantity: 4,
      price: 55000,
      tax: 1000,
      description: "Mobile",
    },
    {
      name: "Iphone 11",
      quantity: 2,
      price: 65000,
      tax: 1000,
      description: "Mobile",
    }
  ];

  return (
    <div>
      <ProductStore />
      {products.map(product => <ProductList name={product.name} quantity={product.quantity} price={product.price} tax={product.tax} description={product.description} />)}
    </div>
  );
}

export default Product;
