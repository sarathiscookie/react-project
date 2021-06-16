import React from "react";

import ProductForm from "./ProductCreate";

function NewProduct() {

  const saveProductHandler = (product) => {
    const productData = {
      ...product
    };

    console.log(productData);
  }

  return (
    <div>
      <ProductForm productDetails={saveProductHandler}/>
    </div>
  );
}

export default NewProduct;
