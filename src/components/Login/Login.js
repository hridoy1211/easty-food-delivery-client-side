import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';


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
        <div>
            <button onClick={handleGoogleSingIn}>Google SignIn</button>
        </div>
    );
};

export default Login;