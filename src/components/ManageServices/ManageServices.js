import React, { useEffect, useState } from 'react';

const ManageServices = () => {

    const [manage, setManage] = useState([])
    const [isDeleted, setIsDeleted] = useState(false)
    
    useEffect(() =>{
        fetch('https://still-savannah-46685.herokuapp.com/services')
        .then(res => res.json())
        .then(data => setManage(data))
    },[isDeleted])

    const handleDelete = id =>{
        const url = `https://still-savannah-46685.herokuapp.com/deletedServices/${id}`
        fetch(url, {
            method : 'DELETE',
            headers : {'content-type' : 'application/json'}
        })
        .then(res => res.json())
        .then(data => {

            if(data){
                window.confirm('Are you sure to delete this Service ?')
                setIsDeleted(data)
            }
        })
    }

    return (
        <div className='container margin-adjust'>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {
                    manage.map(pd => 
                    <div key={pd._id} className="col">
                        <div className="card h-100">
                            <img src={pd.img} className="card-img-top img-fluid p-4" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title text-center">{pd.name}</h5>
                            <div className="button-style">
                            <div className="d-grid gap-2 ">
                                    <button onClick={() => handleDelete(pd._id)} className="btn btn-design" type="button">Delete</button>
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

export default ManageServices;