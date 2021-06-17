import React from "react";

import ProductCreate from "./ProductCreate";

function ProductStore() {

  const storeProductDataHandler = (product) => {
    const productData = {
      ...product,
      id: Math.random().toString()
    };
    console.log(productData);
  };

  return (
    <div>
      <ProductCreate onSaveProductData={storeProductDataHandler}/>
    </div>
  );
}

export default ProductStore;
