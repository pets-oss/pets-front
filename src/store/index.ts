import { combineReducers } from 'redux';

import { configureStore } from '@reduxjs/toolkit';
import authorizedApolloClient from '../utils/authorizedApolloClient';
import animalsAll from './animalsAll';
import animalsFav from './animalsFav';

const reducer = combineReducers({
    animalsAll,
    animalsFav,
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
