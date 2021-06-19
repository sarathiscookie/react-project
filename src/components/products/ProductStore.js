import React from "react";

import ProductCreate from "./ProductCreate";

function ProductStore(props) {

  const storeProductDataHandler = productDetails => {
    
    const productData = {
      ...productDetails,
      id: Math.random().toString()
    };

    props.onAddProduct(productData);
  };

  return (
    <div>
      <ProductCreate onSaveProductData={storeProductDataHandler}/>
    </div>
  );
}

export default ProductStore;
