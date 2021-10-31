import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import './Cart.css'

const Cart = () => {
    const { register, handleSubmit, reset } = useForm();
        const onSubmit = data => {

            axios.post('https://still-savannah-46685.herokuapp.com/cart',data)
            .then(res => {
                console.log(res);
            })

        };
    return (
        <div>
            <div className='cart-services'>
            <h1 className='text-center my-4'>Your Orders</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name", { required: true, maxLength: 20 })} placeholder="Name" />
                <input type='email' {...register("email")} placeholder="Email" />
                <textarea {...register("adress")} placeholder="Address" />
                <input {...register("phone", { required: true, maxLength: 20 })} placeholder="Contact Number" />
                <input type='number' {...register("amount")} placeholder="Amount" />
                <input type='number' {...register("payment")} placeholder="Your cost is..." />

                <div class="d-grid gap-2">
                    <Link to='/myOrder'>
                            <button className='btn btn-warning btn-lg' type="submit">Order</button>
                    </Link>
                </div>
            </form>
        </div>
        </div>
        
    );
};

export default Cart;