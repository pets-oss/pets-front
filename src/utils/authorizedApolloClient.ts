import { createUploadLink } from 'apollo-upload-client';

import { ApolloClient, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { Auth0Client } from '@auth0/auth0-spa-js';
import config from '../config';

const auth0 = new Auth0Client({
    domain: config.AUTH0_DOMAIN,
    client_id: config.AUTH0_CLIENT_ID,
    redirect_uri: window.location.origin,
    audience: config.AUTH0_AUDIENCE_URL,
});

const httpLink = createUploadLink({
    uri: config.GRAPHQL_URL,
});

const authLink = setContext(async () => {
    try {
        const token = await auth0.getTokenSilently();
        return {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        };
    } catch (error: any) {
        // eslint-disable-next-line no-console
        console.error('auth0.getTokenSilently error', error);
    }
    return {};
});

const apolloClient = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache({
        typePolicies: {
            Query: {
                fields: {
                    animals: {
                        keyArgs: [],
                        merge(existing, incoming) {
                            return incoming;
                        },
                    },
                },
            },
        },
    }),
    connectToDevTools: true,
});

export default apolloClient;
