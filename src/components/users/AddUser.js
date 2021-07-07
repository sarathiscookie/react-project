import React from "react";

import Card from "./UI/Card";

import "./User.css";

import Button from "./UI/Button";

export default function AddUser() {
  const userFormEventHandler = (event) => {
    event.preventDefault();
    console.log("Form Submitted");
  };

  return (
    <div>
      <Card header="Create a new user">
        <form onSubmit={userFormEventHandler}>
          <div className="row marginBottom">
            <div className="col">
              <input
                type="text"
                className="form-control"
                placeholder="First name"
                id="firstName"
              />
            </div>
            <div className="col">
              <input
                type="text"
                className="form-control"
                placeholder="Last name"
                id="lastName"
              />
            </div>
          </div>

          <div className="row marginBottom">
            <div className="col">
              <input
                type="email"
                className="form-control"
                placeholder="Email"
                id="email"
              />
            </div>
            <div className="col">
              <input type="password" className="form-control" id="password" />
            </div>
          </div>

          <div className="row marginBottom">
            <div className="col-md-5">
              <input
                type="text"
                className="form-control"
                placeholder="City"
                id="inputCity"
              />
            </div>
            <div className="col-md-5">
              <select id="state" className="form-control">
                <option>Choose State</option>
                <option value="1">Cochin</option>
                <option value="2">Trivandrum</option>
                <option value="3">Calicut</option>
              </select>
            </div>
            <div className="col-md-2">
              <input
                type="text"
                className="form-control"
                id="zip"
                placeholder="Zip"
              />
            </div>
          </div>
          
          <Button type="submit" cssClass="btn btn-primary">Create User</Button>
        </form>
      </Card>
    </div>
  );
}
