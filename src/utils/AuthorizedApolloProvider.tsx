import React, { ReactChild } from 'react';

import { ApolloProvider } from '@apollo/client';
import authorizedApolloClient from './authorizedApolloClient';

const AuthorizedApolloProvider = ({ children }: { children: ReactChild }) => {
    return <ApolloProvider client={authorizedApolloClient}>{children}</ApolloProvider>;
};

export default AuthorizedApolloProvider;
