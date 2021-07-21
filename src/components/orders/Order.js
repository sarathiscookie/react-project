import React, {useState} from 'react';

import AddOrder from './AddOrder';

import OrderList from './OrderList';

export default function Order() {
    const [ordersList, setOrdersList] = useState([]);

    const addOrderHandler = ordersList => {
        setOrdersList((prevOrders)=> {
            return [ordersList, ...prevOrders];
        })
    }
    return (
        <div>
            <AddOrder onAddOrder={addOrderHandler}/>
            <OrderList orders={ordersList}/>
        </div>
    )
}
