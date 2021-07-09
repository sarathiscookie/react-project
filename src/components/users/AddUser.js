import React, { useState } from "react";

import Card from "./UI/Card";

import "./User.css";

import Button from "./UI/Button";

export default function AddUser() {
  const [firstName, setFirstName] = useState('');

  const [lastName, setLastName] = useState('');

  const [age, setAge] = useState('');

  const [email, setEmail] = useState('');

  const [password, setPassword] = useState('');

  const [city, setCity] = useState('');

  const [state, setState] = useState('');

  const [zip, setZip] = useState('');

  const userFormEventHandler = (event) => {
    event.preventDefault();

    if(firstName.trim().length === 0 || lastName.trim().length === 0 || age.trim().length === 0 || age < 1 || email.trim().length === 0 || password.trim().length === 0 || city.trim().length === 0 || state.trim().length === 0 || zip.trim().length === 0) {
        return;
    }

    console.log(firstName, lastName, age, email, password, city, state, zip);

    console.log("Form Submitted");

    setFirstName('');
    setLastName('');
    setAge('');
    setEmail('');
    setPassword('');
    setCity('');
    setState('');
    setZip('');
  };

  const firstNameEventHandler = (event) => {
    setFirstName(event.target.value);
  };

  const lastNameEventHandler = (event) => {
    setLastName(event.target.value);
  };

  const ageEventHandler = (event) => {
      setAge(event.target.value);
  };

  const emailEventhandler = (event) => {
      setEmail(event.target.value);
  };

  const passwordhandler = (event) => {
      setPassword(event.target.value);
  };

  const cityEventHandler = (event) => {
      setCity(event.target.value);
  };

  const stateEventHandler = (event) => {
      setState(event.target.value);
  };

  const zipEventHandler = (event) => {
      setZip(event.target.value);
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
                value={firstName}
                onChange={firstNameEventHandler}
              />
            </div>
            <div className="col">
              <input
                type="text"
                className="form-control"
                placeholder="Last name"
                id="lastName"
                value={lastName}
                onChange={lastNameEventHandler}
              />
            </div>
            <div className="col">
              <input
                type="number"
                className="form-control"
                placeholder="Age"
                id="age"
                value={age}
                onChange={ageEventHandler}
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
                value={email}
                onChange={emailEventhandler}
              />
            </div>
            <div className="col">
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Password"
                value={password}
                onChange={passwordhandler}
              />
            </div>
          </div>

          <div className="row marginBottom">
            <div className="col-md-5">
              <input
                type="text"
                className="form-control"
                placeholder="City"
                id="city"
                value={city}
                onChange={cityEventHandler}
              />
            </div>
            <div className="col-md-5">
              <select id="state" className="form-control" value={state} onChange={stateEventHandler} >
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
                value={zip}
                onChange={zipEventHandler}
              />
            </div>
          </div>

          <Button type="submit" cssClass="btn btn-primary">
            Create User
          </Button>
        </form>
      </Card>
    </div>
  );
}
