import React from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';

import { useAuth0 } from '@auth0/auth0-react';

export default function PrivateRoute(props: RouteProps) {
    const { isAuthenticated } = useAuth0();

    return isAuthenticated ? <Route {...props} /> : <Redirect to="/" />;
}
