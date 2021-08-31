/* eslint no-console: ["error", { allow: ["warn", "error"] }] */

import { loader } from 'graphql.macro';

import { createSlice } from '@reduxjs/toolkit';
import { QueryAnimalsArgs } from '../graphql/types';
import { AnimalsState, initialSubState } from './types-definitions';

const GET_ANIMALS_QUERY = loader('../graphql/queries/animal-list.graphql');
const ADD_TO_FAVOURITE_ANIMALS_MUTATION = loader('../graphql/mutations/add-to-favourite-animals.graphql');
const REMOVE_FROM_FAVOURITE_ANIMALS_MUTATION = loader('../graphql/mutations/remove-from-favourite-animals.graphql');

const initialState: AnimalsState = {
    all: initialSubState,
};

// Slice

const slice = createSlice({
    name: 'animalsFav',
    initialState,
    reducers: {
        startLoadingFav: state => {
            state.all.isLoading = true;
        },
        hasErrorFav: (state, action) => {
            state.all.error = action.payload;
            state.all.isLoading = false;
        },
        animalsSuccessFav: (state, action) => {
            state.all.page.ids = action.payload.ids;
            state.all.page.objs = action.payload.objs;
            state.all.page.info = action.payload.info;
            state.all.isLoading = false;
        },
        lastQueryVarsFav: (state, action) => {
            state.all.queryVars = action.payload;
        },
    },
});

export default slice.reducer;

// Actions

const { animalsSuccessFav, startLoadingFav, hasErrorFav, lastQueryVarsFav } = slice.actions;

export const fetchAnimals = (incomingQueryArgs: QueryAnimalsArgs) => async (dispatch, getState, { apolloClient }) => {
    dispatch(startLoadingFav());

    const queryArgs = { isFavouriteOnly: true, ...incomingQueryArgs };

    try {
        const { data } = await apolloClient.query({
            query: GET_ANIMALS_QUERY,
            fetchPolicy: 'no-cache',
            variables: queryArgs,
        });
        if (data.animals) {
            let ids;
            let objs;
            let info;
            if (data.animals.edges) {
                ids = data.animals.edges.map(item => item.node.id);
                objs = data.animals.edges.map(item => item.node);
            }
            if (data.animals.pageInfo) {
                info = data.animals.pageInfo;
            }
            dispatch(animalsSuccessFav({ ids, objs, info }));
            dispatch(lastQueryVarsFav(queryArgs));
        }
    } catch (error) {
        dispatch(hasErrorFav(error.message));
    }
};

export const addToFavourites = (id: number) => async (dispatch, getState, { apolloClient }) => {
    dispatch(startLoadingFav());

    try {
        const result = await apolloClient.mutate({
            mutation: ADD_TO_FAVOURITE_ANIMALS_MUTATION,
            variables: { animalId: id },
        });
        if (result) {
            const { all } = getState();
            const { queryVars } = all;
            dispatch(fetchAnimals(queryVars));
        }
    } catch (error) {
        dispatch(hasErrorFav(error.message));
    }
};

export const removeFromFavourites = (id: number) => async (dispatch, getState, { apolloClient }) => {
    dispatch(startLoadingFav());

    try {
        const result = await apolloClient.mutate({
            mutation: REMOVE_FROM_FAVOURITE_ANIMALS_MUTATION,
            variables: { animalId: id },
        });
        if (result) {
            const { all } = getState();
            const { queryVars } = all;
            dispatch(fetchAnimals(queryVars));
        }
    } catch (error) {
        dispatch(hasErrorFav(error.message));
    }
};
