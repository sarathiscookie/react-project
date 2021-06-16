import React, {useState} from "react";

import "./ProductForm.css";

function ProductForm(props) {

  // Note: default datatype of e.target.value always string. That's why useState('') defined ''.
 console.log(props.descriptionEventHandler)
  const [productname, setProductName] = useState('');

  const [quantity, setQuantity] = useState('');

  const [description, setDescription] = useState('');

  const productNameEventHandler = (e) => {
    setProductName(e.target.value);
  }

  const quantityEventHandler = (e) => {
    setQuantity(e.target.value);
  }

  const descriptionEventHandler = event => {
    setDescription(event.target.value);
  }

  const submitHandler = (e) => {
    e.preventDefault();

    const formData = {
      productName: productname,
      productQuantity: quantity,
      productDescription: description
    }

    setProductName('');
    setQuantity('');
    setDescription('');

    props.NewProduct(formData);
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
                <input type="text" className="form-control" id="product" value={productname} onInput={productNameEventHandler} />
              </div>
              <div className="mb-3">
                <label className="form-label">
                 Quantity
                </label>
                <input type="text" className="form-control" id="quantity" value={quantity} onInput={quantityEventHandler} />
              </div>
              <div className="mb-3">
                <label className="form-label">
                  Description
                </label>
                <textarea
                  className="form-control"
                  id="description"
                  rows="3"
                  value={description}
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

export default ProductForm;