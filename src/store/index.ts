import { combineReducers } from 'redux';

import { configureStore } from '@reduxjs/toolkit';
import authorizedApolloClient from '../utils/authorizedApolloClient';
import animals from './animals';
import favourites from './favourites';

const reducer = combineReducers({
    animals,
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
