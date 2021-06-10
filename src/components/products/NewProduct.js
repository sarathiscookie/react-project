import React from "react";

import "./NewProduct.css";

function NewProduct() {

  // Note: default datatype of e.target is string.
  const productNameEventHandler = (e) => {
    console.log(e.target.value);
  }

  const quantityEventHandler = (e) => {
    console.log(e.target.value);
  }

  const descriptionEventHandler = event => {
    console.log(event.target.value);
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
                <input type="text" className="form-control" id="product" onInput={productNameEventHandler} />
              </div>
              <div className="mb-3">
                <label className="form-label">
                 Quantity
                </label>
                <input type="text" className="form-control" id="quantity" onInput={quantityEventHandler} />
              </div>
              <div className="mb-3">
                <label className="form-label">
                  Description
                </label>
                <textarea
                  className="form-control"
                  id="description"
                  rows="3"
                  onInput={descriptionEventHandler}
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
