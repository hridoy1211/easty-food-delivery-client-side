import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './AddServices.css'

const AddServices = () => {
    
        const { register, handleSubmit, reset } = useForm();
        const onSubmit = data => {

            axios.post('https://still-savannah-46685.herokuapp.com/addServices', data)
            .then(res => {
                console.log(res);

                if(res?.data?.insertedId){
                    alert('Successfully Added an Service')
                    reset();
                }
            })

        };
    return (
        <div className='add-services'>
            <h1 className='text-center my-4'>Please Add a Services</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("name", { required: true, maxLength: 20 })} placeholder="Name" />
            <textarea {...register("description")} placeholder="Description" />
            <input {...register("img")}  placeholder="Image URL"/>
            <input type="submit" />
            </form>
        </div>
    );
};

export default AddServices;