import React from 'react';
import { Route } from 'react-router-dom';
import AdminLogin from './Layout/AdminLogin/AdminLogin';
import AdminSignUp from './Layout/AdminSignUp/AdminSignUp';
import AuthLayout from './Layout/Auth/AuthLayout';

const AdminInterface = props => {
    return (
        <React.Fragment >
            <Route exact={true} path={`${props.match.path}/dashboard`} component={AuthLayout} />
            <Route exact={true} path={`${props.match.path}/register`} component={AdminSignUp} />
            <Route exact={true} path={`${props.match.path}/`} component={AdminLogin} />
        </React.Fragment >
    )
}

export default AdminInterface;

