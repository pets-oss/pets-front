import { combineReducers } from 'redux';

import { configureStore } from '@reduxjs/toolkit';
import authorizedApolloClient from '../utils/authorizedApolloClient';
import favourites from './favourites';

const reducer = combineReducers({
    favourites,
});

const store = configureStore({
    reducer,
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            thunk: {
                extraArgument: { apolloClient: authorizedApolloClient },
            },
            serializableCheck: false,
        }),
});

export default store;
