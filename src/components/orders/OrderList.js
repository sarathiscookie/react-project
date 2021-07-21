import React from "react";

import Card from "./UI/Card";

export default function OrderList(props) {
  return (
    <div>
      {props.orders.map((order) => (
        <Card header="Order Details" key={order.id}>
          <div className="card-body">
            <h6>Order Places Date: {order.orderPlacedDate}</h6>
            <h6>Amount: {order.amount}</h6>
            <h6>Shipped To: {order.shippedTo} years old</h6>
            <h6>Customer: {order.customer}</h6>
            <h6>Order Status: {order.orderStatus === '1' ? 'Open' : 'Close'}</h6>
            <h6>Payment Status: {order.paymentStatus === '1' ? 'Paid' : 'Not Paid'}</h6>
          </div>
        </Card>
      ))}
    </div>
  );
}
