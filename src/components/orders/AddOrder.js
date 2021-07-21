import React, { useState } from "react";

import Card from "./UI/Card";

import Button from "./UI/Button";

import "./Order.css";

export default function AddOrder(props) {

  const [orderPlacedDate, setOrderPlacedDate] = useState('');

  const [amount, setAmount] = useState('');

  const [shippedTo, setShippedTo] = useState('');

  const [customer, setCustomer] = useState('');

  const [orderStatus, setOrderStatus] = useState('');

  const [paymentStatus, setPaymentStatus] = useState('');

  const orderPlacedDateEventHandler = (event) => {
      setOrderPlacedDate(event.target.value);
  };

  const amountEventHandler = (event) => {
    setAmount(event.target.value);
  }

  const shippedToEventHandler = (event) => {
    setShippedTo(event.target.value);
  }

  const customerEventHandler = (event) => {
    setCustomer(event.target.value);
  }

  const orderStatusEventHandler = (event) => {
    setOrderStatus(event.target.value);
  }

  const paymentStatusEventHandler = (event) => {
    setPaymentStatus(event.target.value);
  }

  const createOrderFormEventHandler = (event) => {
    event.preventDefault();

    if (orderPlacedDate.trim().length === 0 || amount.trim().length === 0 || shippedTo.trim().length === 0 || customer.trim().length === 0 || orderStatus.trim().length === 0 || paymentStatus.trim().length === 0) {
        console.log('Fill all inputs');
        return;
    }

    if( +amount < 1) {
        console.log('Amount must be greater than zero');
        return;
    }

    const formData = {
        id: Math.random().toString(),
        orderPlacedDate: orderPlacedDate,
        amount: +amount,
        shippedTo: shippedTo,
        customer: customer,
        orderStatus: orderStatus,
        paymentStatus: paymentStatus
    };

    props.onAddOrder(formData);

    setOrderPlacedDate('');
    setAmount('');
    setShippedTo('');
    setCustomer('');
    setOrderStatus('');
    setPaymentStatus('');
  };

  return (
    <div>
      <Card header="Create Order">
        <form onSubmit={createOrderFormEventHandler}>
          <div className="row marginBottom">
            <div className="col">
              <input
                type="text"
                className="form-control"
                placeholder="Order Placed Date"
                id="orderPlacedDate"
                value={orderPlacedDate}
                onChange={orderPlacedDateEventHandler}
              />
            </div>
            <div className="col">
              <input
                type="number"
                className="form-control"
                placeholder="Amount"
                id="amount"
                value={amount}
                onChange={amountEventHandler}
              />
            </div>
            <div className="col">
              <input
                type="text"
                className="form-control"
                placeholder="Shipped To"
                id="shippedTo"
                value={shippedTo}
                onChange={shippedToEventHandler}
              />
            </div>
          </div>

          <div className="row marginBottom">
            <div className="col">
              <input
                type="text"
                className="form-control"
                placeholder="Customer"
                id="customer"
                value={customer}
                onChange={customerEventHandler}
              />
            </div>
            <div className="col">
              <select id="status" className="form-control" value={orderStatus} onChange={orderStatusEventHandler}>
                <option value="0">Choose order status</option>
                <option value="1">Open</option>
                <option value="2">Close</option>
              </select>
            </div>
            <div className="col">
              <select id="paymentStatus" className="form-control" value={paymentStatus} onChange={paymentStatusEventHandler}>
                <option value="0">Choose payment status</option>
                <option value="1">Paid</option>
                <option value="2">Not Paid</option>
              </select>
            </div>
          </div>
          <Button type="submit" cssClass="btn btn-primary">
            Create Order
          </Button>
        </form>
      </Card>
    </div>
  );
}
