import React from 'react';
import { MemoryRouter, RouteProps, Switch } from 'react-router-dom';

import { useAuth0 } from '@auth0/auth0-react';
import { render, screen } from '@testing-library/react';
import UserProfile from '../../pages/UserProfile';
import PrivateRoute from './PrivateRoute';

jest.mock('@auth0/auth0-react');

const user = {
    email: 'test@petbook.lt',
    email_verified: true,
    sub: 'google-oauth2|12345678901234',
};

test('authed user has access to private route', async () => {
    (useAuth0 as jest.Mock).mockReturnValue({
        isAuthenticated: true,
        user,
    });
    const props = {
        path: '/user-profile',
        component: UserProfile,
    };

    render(
        <MemoryRouter initialEntries={[props.path]}>
            <Switch>
                <TestComponent {...props} />
            </Switch>
        </MemoryRouter>
    );

    expect(screen.getByText(user.email)).toBeInTheDocument();
});

test('not authed user gets sent to homepage', () => {
    (useAuth0 as jest.Mock).mockReturnValue({
        isAuthenticated: false,
    });

    const props = {
        path: '/user-profile',
        component: UserProfile,
    };

    render(
        <MemoryRouter initialEntries={[props.path]}>
            <Switch>
                <TestComponent {...props} />
            </Switch>
        </MemoryRouter>
    );

    expect(screen.queryByText(user.email)).not.toBeInTheDocument();
});

function TestComponent(props: RouteProps) {
    return <PrivateRoute {...props} />;
}
