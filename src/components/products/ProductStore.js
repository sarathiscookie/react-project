import React from "react";

import ProductCreate from "./ProductCreate";

function ProductStore() {

  const storeProductDataHandler = productDetails => {
    const productData = {
      ...productDetails,
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
