import React, {useState} from "react";

import ProductStore from "./ProductStore";

import ProductList from "./ProductList";

function Product() {

  const initalProducts = [
    {
      id: 1,
      name: "Iphone 12",
      quantity: 5,
      price: 95000,
      tax: 1000,
      description: "Mobile",
    },
    { id: 2,
      name: "Samsung A3",
      quantity: 4,
      price: 55000,
      tax: 1000,
      description: "Mobile",
    },
    {
      id: 3,
      name: "Iphone 11",
      quantity: 2,
      price: 65000,
      tax: 1000,
      description: "Mobile",
    }
  ];

  const [products, setProducts] = useState(initalProducts);

  const addProductHandler = product => {
    setProducts((preProducts) => {
      return [product, ...preProducts];
    });
  };

  return (
    <div>
      <ProductStore onAddProduct={addProductHandler} />
      {products.map(item => <ProductList key={item.id} name={item.name} quantity={item.quantity} price={item.price} tax={item.tax} description={item.description} />)}
    </div>
  );
}

export default Product;
