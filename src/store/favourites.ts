/* eslint no-console: ["error", { allow: ["warn", "error"] }] */

import { loader } from 'graphql.macro';

import { createSlice } from '@reduxjs/toolkit';

const GET_FAVOURITE_ANIMALS_QUERY = loader('../graphql/queries/favourite-animals.graphql');
const ADD_TO_FAVOURITE_ANIMALS_MUTATION = loader('../graphql/mutations/add-to-favourite-animals.graphql');
const REMOVE_FROM_FAVOURITE_ANIMALS_MUTATION = loader('../graphql/mutations/remove-from-favourite-animals.graphql');

export type FavouritesState = {
    favouriteAnimalsIds: [];
    isLoading: boolean;
    error: boolean;
};

const initialState: FavouritesState = {
    favouriteAnimalsIds: [],
    isLoading: false,
    error: false,
};

// Slice

const slice = createSlice({
    name: 'favourites',
    initialState,
    reducers: {
        startLoading: state => {
            state.isLoading = true;
        },
        hasError: (state, action) => {
            state.error = action.payload;
            state.isLoading = false;
        },
        favouritesSuccess: (state, action) => {
            state.favouriteAnimalsIds = action.payload;
            state.isLoading = false;
        },
    },
});

export default slice.reducer;

// Actions

const { favouritesSuccess, startLoading, hasError } = slice.actions;

export const fetchFavourites = () => async (dispatch, getState, { apolloClient }) => {
    dispatch(startLoading());

    try {
        const { data } = await apolloClient.query({
            query: GET_FAVOURITE_ANIMALS_QUERY,
            fetchPolicy: 'no-cache',
            variables: {},
        });
        if (data.favoriteAnimals) {
            const list = data.favoriteAnimals.map(item => item.id);
            dispatch(favouritesSuccess(list));
        }
    } catch (error) {
        dispatch(hasError(error.message));
    }
};

export const addToFavourites = (id: number) => async (dispatch, getState, { apolloClient }) => {
    dispatch(startLoading());

    try {
        const result = await apolloClient.mutate({
            mutation: ADD_TO_FAVOURITE_ANIMALS_MUTATION,
            variables: { animalId: id },
        });
        if (result) {
            dispatch(fetchFavourites());
        }
    } catch (error) {
        dispatch(hasError(error.message));
    }
};

export const removeFromFavourites = (id: number) => async (dispatch, getState, { apolloClient }) => {
    dispatch(startLoading());

    try {
        const result = await apolloClient.mutate({
            mutation: REMOVE_FROM_FAVOURITE_ANIMALS_MUTATION,
            variables: { animalId: id },
        });
        if (result) {
            dispatch(fetchFavourites());
        }
    } catch (error) {
        dispatch(hasError(error.message));
    }
};
