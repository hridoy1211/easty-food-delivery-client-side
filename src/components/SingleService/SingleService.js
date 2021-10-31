import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const SingleService = () => {
    const {id} = useParams();

    const[singleUser, setSingleUser] = useState({})

    useEffect(() => {
        const url = `https://still-savannah-46685.herokuapp.com/services/${id}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setSingleUser(data))
    },[])

    return (
        <div className='d-flex justify-content-center mt-4'>
            <div>
            <div class="card" style={{width: '18rem'}}>
                    <img src={singleUser?.img} class="card-img-top img-fluid" alt="..."/>
                
                    <div class="card-body">
                        <h5 class="card-title ">{singleUser?.name}</h5>
                        <p class="card-text">{singleUser?.description}</p>
                        <p class="card-text text-danger">{singleUser?.brands}</p>
                        <p class="card-text"> <span> ৳ </span> {singleUser?.price}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleService;