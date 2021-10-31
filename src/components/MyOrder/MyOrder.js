import React, { useEffect, useState } from 'react';
import './MyOrder.css'

const MyOrder = () => {
    const [myOrders, setMyOrders] = useState([])

    useEffect(() =>{
        fetch('https://still-savannah-46685.herokuapp.com/cart')
        .then(res => res.json())
        .then(data => {
            
            setMyOrders(data)
            console.log(data);
        })
    },[])
    return (
        <div>
            <h1>My Orders</h1>
            <div>
                {
                    myOrders.map(myOrder => <div><h1>{myOrder?.email}</h1></div> )
                }
            </div>
        </div>
    );
};

export default MyOrder;