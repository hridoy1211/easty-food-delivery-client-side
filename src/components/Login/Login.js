import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import loginImg from '../../Images/login/login.jpg'


const Login = () => {
    const{user, signInGoogle} = useAuth()
    const location = useLocation()
    const history = useHistory()
    const redirect_uri = location.state?.from || '/home';
    console.log('came from',location.state?.from);


    const handleGoogleSingIn = () =>{
        signInGoogle()
        .then(result =>{
            history.push(redirect_uri)
        })
    }

    return (
        <div className='container'>
            <div className='row g-3'>
                <div className="col-md-6 d-flex justify-content-center align-items-center">
                    <div>
                    <h1>Please Login</h1>
                    <button className='btn btn-warning text-white' onClick={handleGoogleSingIn}>Google Sign in</button>
                    </div>
                </div>
                <div className="col-md-6 d-flex justify-content-center">
                    <img src={loginImg} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Login;