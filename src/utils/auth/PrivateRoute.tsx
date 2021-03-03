import React from 'react';
import { Route, RouteProps } from 'react-router-dom';

import { withAuthenticationRequired } from '@auth0/auth0-react';

export default function PrivateRoute({ component, ...otherProps }: RouteProps) {
    if (!component) {
        return null;
    }

    return <Route component={withAuthenticationRequired(component as React.ComponentType<any>)} {...otherProps} />;
}
