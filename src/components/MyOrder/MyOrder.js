import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import './MyOrder.css'

const MyOrder = () => {
    const [myOrders, setMyOrders] = useState([])
    const [deleteOrder, setDeleteOrder] = useState(false)
    const {user} = useAuth()

    useEffect(() =>{
        fetch(`https://still-savannah-46685.herokuapp.com/cart?email=${user.email}`)
        .then(res => res.json())
        .then(data => {
            
            setMyOrders(data)
            console.log(data);
        })
    },[deleteOrder])


    const handleOrderDelete = id =>{
        const url =`https://still-savannah-46685.herokuapp.com/deletedOrder/${id}`
        fetch(url, {
            method : 'DELETE',
            headers : {'content-type' : 'application/json'}
        })
        .then( res => res.json())
        .then(data => {
            if(data){
                window.confirm('Are you sure to delete this order?')
                setDeleteOrder(data)
            }
        })
    }

    return (
        <div>
            <h1 className='text-center mb-4'>You have placed {myOrders.length} order</h1>
            <div>
                {
                    myOrders.map(myOrder => 
                    <div key={myOrder._id} className='orderDesign'>    
                        <p className='text-danger'>{myOrder?.createdAt}</p>
                        <h4>{myOrder?.email}</h4>
                        <p>{myOrder?.adress}</p>
                        <button onClick={() => handleOrderDelete(myOrder._id)} className="btn btn-design" type="button">Delete</button>
                    </div> )
                }
            </div>
        </div>
    );
};

export default MyOrder;