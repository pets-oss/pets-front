import React from 'react';

import { useAuth0 } from '@auth0/auth0-react';
import { screen } from '@testing-library/react';
import { navigation } from '../../navigation';
import renderWithRouter from '../../test-utils/RenderWithRouter';
import AppTopNavigation from './AppTopNavigation';

jest.mock('@auth0/auth0-react');

const user = {
    email: 'test@petbook.lt',
    email_verified: true,
    sub: 'google-oauth2|12345678901234',
};

test('displays login button when user is not logged in', () => {
    (useAuth0 as jest.Mock).mockReturnValue({
        isAuthenticated: false,
    });

    renderWithRouter(<AppTopNavigation />);

    navigation
        .filter(link => link.authRequired)
        .forEach(link => expect(screen.queryByText(link.title)).not.toBeInTheDocument());
    expect(screen.getByLabelText('login')).toBeInTheDocument();
});

test('displays logout button when user is not logged in', () => {
    (useAuth0 as jest.Mock).mockReturnValue({
        isAuthenticated: true,
        user,
    });

    renderWithRouter(<AppTopNavigation />);

    navigation
        .filter(link => link.authRequired)
        .forEach(link => expect(screen.getByText(link.title)).toBeInTheDocument());
    expect(screen.queryByLabelText('login')).not.toBeInTheDocument();
});
