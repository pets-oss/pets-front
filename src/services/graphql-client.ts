import { ApolloClient, InMemoryCache } from '@apollo/client';
import config from '../config';

export function createGraphQlClient() {
    return new ApolloClient({
        uri: config.GRAPHQL_URL,
        cache: new InMemoryCache(),
    });
}
