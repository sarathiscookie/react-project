import React, {useState} from "react";

import "./NewProduct.css";

function NewProduct() {

  // Note: default datatype of e.target.value always string. That's why useState('') defined ''.

  const [productname, productNameNew] = useState('');
  const [quantity, quantityNew] = useState('');
  const [description, descriptionNew] = useState('');

  const productNameEventHandler = (e) => {
    productNameNew(e.target.value);
  }

  const quantityEventHandler = (e) => {
    quantityNew(e.target.value);
  }

  const descriptionEventHandler = event => {
    descriptionNew(event.target.value);
  }

  const submitHandler = (e) => {
    e.preventDefault();

    const formData = {
      productName: productname,
      productQuantity: quantity,
      productDescription: description
    }
    
    console.log(formData);
  }

  

  return (
    <div>
      <div className="card cardBottom">
        <div className="card-header">Add Product</div>
        <div className="card-body">

          <form onSubmit={submitHandler}>
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
