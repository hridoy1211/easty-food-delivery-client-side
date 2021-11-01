import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Cart.css'

const Cart = () => {
    const { register, handleSubmit, reset } = useForm();

    const{user} = useAuth()

        const onSubmit = data => {

            axios.post('https://still-savannah-46685.herokuapp.com/cart', data)
            .then(res => {
                console.log(res);
                alert('Ordered Successfully')
                reset();
            })

        };
    return (
        <div>
            <div className='cart-services'>
            <h1 className='text-center my-4'>Your Orders</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input defaultValue={user.displayName} {...register("name", { required: true, maxLength: 20 })} placeholder="Name" />
                <input defaultValue={user.email} type='email' {...register("email")} placeholder="Email" />
                <textarea {...register("adress")} placeholder="Address" />
                <textarea {...register("city")} placeholder="City" />
                <input {...register("phone", { required: true, maxLength: 20 })} placeholder="Contact Number" />
                <input className='btn btn-warning btn-lg' type="submit" value='Order'/>
            </form>
        </div>
        </div>
        
    );
};

export default Cart;