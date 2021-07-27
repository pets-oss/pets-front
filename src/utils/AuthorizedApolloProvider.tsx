import React, { ReactChild } from 'react';

import { ApolloClient, ApolloProvider, createHttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { useAuth0 } from '@auth0/auth0-react';
import config from '../config';

const AuthorizedApolloProvider = ({ children }: { children: ReactChild }) => {
    const { getAccessTokenSilently } = useAuth0();

    const httpLink = createHttpLink({
        uri: config.GRAPHQL_URL, // your URI here...
    });

    const authLink = setContext(async () => {
        const token = await getAccessTokenSilently();
        return {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        };
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

    return <ApolloProvider client={apolloClient}>{children}</ApolloProvider>;
};

export default AuthorizedApolloProvider;
