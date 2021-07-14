import React from "react";

import Card from "./UI/Card";

export default function UserList(props) {
  return (
    <div>
      {props.users.map((user) => (
        <Card header="User Details" key={user.id}>
          <div className="card-body">
            <h6>First name: {user.firstName}</h6>
            <h6>Last name: {user.lastName}</h6>
            <h6>Age: {user.age} years old</h6>
            <h6>email: {user.email}</h6>
            <h6>city: {user.city}</h6>
            <h6>state: {user.state}</h6>
            <h6>zip: {user.zip}</h6>
          </div>
        </Card>
      ))}
    </div>
  );
}
