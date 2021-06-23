import React from "react";

import './FilterProduct.css'

export default function FilterProduct() {
  return (
    <div>
      <div className="card">
        <div className="card-body">
        <h5 className="card-title">Filter</h5>
          <div className="row">
            <div className="col-sm-4">
              <select
                className="form-select"
                aria-label="Default select example"
              >
                <option>Filter by price</option>
                <option value="25000">25000</option>
                <option value="50000">50000</option>
                <option value="100000">100000</option>
              </select>
            </div>
            <div className="col-sm-4">
              <select
                className="form-select"
                aria-label="Default select example"
              >
                <option>Filter by model</option>
                <option value="Iphone 12">Iphone 12</option>
                <option value="Samsung A3">Samsung A3</option>
                <option value="Iphone 11">Iphone 11</option>
              </select>
            </div>
            <div className="col-sm-4">
              <select
                className="form-select"
                aria-label="Default select example"
              >
                <option>Filter by year</option>
                <option value="2018">2018</option>
                <option value="2019">2019</option>
                <option value="2020">2020</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
