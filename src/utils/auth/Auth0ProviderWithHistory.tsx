import React, { ReactChild } from 'react';
import { useHistory } from 'react-router-dom';

import { Auth0Provider } from '@auth0/auth0-react';
import config from '../../config';

const Auth0ProviderWithHistory = ({ children }: { children: ReactChild }) => {
    const history = useHistory();

    const onRedirectCallback = (appState: any) => {
        history.push(appState?.returnTo || window.location.pathname);
    };

    return (
        <Auth0Provider
            domain={config.AUTH0_DOMAIN}
            clientId={config.AUTH0_CLIENT_ID}
            redirectUri={window.location.origin}
            onRedirectCallback={onRedirectCallback}
        >
            {children}
        </Auth0Provider>
    );
};

export default Auth0ProviderWithHistory;
