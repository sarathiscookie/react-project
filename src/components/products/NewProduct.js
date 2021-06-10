import React from "react";

import "./NewProduct.css";

function NewProduct() {
  
  const productNameEventHandler = (e) => {
    console.log(e.target.value);
  }

  return (
    <div>
      <div className="card cardBottom">
        <div className="card-header">Add Product</div>
        <div className="card-body">

          <form>
              <div className="mb-3">
                <label className="form-label">
                  Product Name
                </label>
                <input type="text" className="form-control" id="product" onInput={productNameEventHandler}/>
              </div>
              <div className="mb-3">
                <label className="form-label">
                 Quantity
                </label>
                <input type="text" className="form-control" id="quantity" />
              </div>
              <div className="mb-3">
                <label className="form-label">
                  Description
                </label>
                <textarea
                  className="form-control"
                  id="description"
                  rows="3"
                ></textarea>
              </div>
              <button className="btn btn-primary">Create Product</button>
          </form>

        </div>
      </div>
    </div>
  );
}

export default NewProduct;
