import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';
import './Services.css'

const Services = () => {
    const [services, setServices] = useState([])
    
    useEffect(() =>{
        fetch('https://still-savannah-46685.herokuapp.com/services')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])




    return (
        <div className='container'>
            <h1 className='my-5 text-center'>Biggest Offers</h1>
            <div class="row row-cols-1 row-cols-md-3 g-4">
                {
                    services.map(service => 
                    <div class="col">
                        <div class="card h-100">
                            <img src={service.img} class="card-img-top img-fluid p-4" alt="..."/>
                        <div class="card-body">
                            <h4 class="card-title text-center">{service.offer}</h4>
                            <h5 class="card-title text-center text-danger">{service.name}</h5>
                            <div className="button-style">
                                <div className="row">
                                    <div className="col-6">
                                        <Link to={`/singleService/${service._id}`}><div className="d-grid gap-2 ">
                                        <button className="btn btn-design" type="button">Details</button>
                                        </div>
                                        </Link>
                                    </div>
                                    <div className="col-6">
                                        <Link to='/cart' ><div className="d-grid gap-2 ">
                                        <button className="btn btn-design2" type="button">Purchase</button>
                                        </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                  </div>)
                }
            </div>
        </div>
    );
};

export default Services;