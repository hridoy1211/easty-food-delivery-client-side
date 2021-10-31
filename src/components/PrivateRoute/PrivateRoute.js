import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../../hooks/useAuth';

const PrivateRoute = (props) => {
    const {children , ...rest} = props;
    const {user, isLoadding} = useAuth()

    if(isLoadding){
        return <div class="d-flex justify-content-center mt-3">
        <div class="spinner-border text-danger" style={{width: '3rem', height: '3rem'}} role="status">
          <span class="visually-hidden ">Loading...</span>
        </div>
      </div>
    }

    return (
        <Route
      {...rest}
      render={({ location }) => user.email ? (children) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
    );
};

export default PrivateRoute;