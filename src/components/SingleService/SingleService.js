import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

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
            <div className="card" style={{width: '18rem'}}>
                    <img src={singleUser?.img} className="card-img-top img-fluid" alt="..."/>
                
                    <div className="card-body">
                        <h5 className="card-title ">{singleUser?.name}</h5>
                        <p className="card-text">{singleUser?.description}</p>
                        <p className="card-text text-danger">{singleUser?.brands}</p>
                        <p className="card-text"> <span> ৳ </span> {singleUser?.price}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleService;