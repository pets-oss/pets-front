/* eslint no-console: ["error", { allow: ["warn", "error"] }] */

import { loader } from 'graphql.macro';

import { createSlice } from '@reduxjs/toolkit';
import { PageInfo, QueryAnimalsArgs } from '../graphql/types';
import { PagedAnimalsState } from './types-definitions';

const GET_ANIMALS_QUERY = loader('../graphql/queries/animal-list.graphql');
const ADD_TO_FAVOURITE_ANIMALS_MUTATION = loader('../graphql/mutations/add-to-favourite-animals.graphql');
const REMOVE_FROM_FAVOURITE_ANIMALS_MUTATION = loader('../graphql/mutations/remove-from-favourite-animals.graphql');

// Slice

const initialState: PagedAnimalsState = {
    page: {
        ids: [],
        info: <PageInfo>{
            hasNextPage: false,
            hasPreviousPage: false,
            totalCount: 0,
            startCursor: '',
            endCursor: '',
        },
    },
    isLoading: false,
    error: false,
    queryVars: {},
};

const slice = createSlice({
    name: 'animalsFav',
    initialState,
    reducers: {
        startLoadingFav: state => {
            state.isLoading = true;
        },
        hasErrorFav: (state, action) => {
            state.error = action.payload;
            state.isLoading = false;
        },
        animalsSuccessFav: (state, action) => {
            state.page.ids = action.payload.ids;
            state.page.info = action.payload.info;
            state.isLoading = false;
        },
        lastQueryVarsFav: (state, action) => {
            state.queryVars = action.payload;
        },
    },
});

export default slice.reducer;

// Actions

const { animalsSuccessFav, startLoadingFav, hasErrorFav, lastQueryVarsFav } = slice.actions;

export const fetchAnimals = (incomingQueryArgs: QueryAnimalsArgs) => async (dispatch, getState, { apolloClient }) => {
    dispatch(startLoadingFav());

    const queryArgs = { isFavoriteOnly: true, ...incomingQueryArgs };

    try {
        const { data } = await apolloClient.query({
            query: GET_ANIMALS_QUERY,
            fetchPolicy: 'no-cache',
            variables: queryArgs,
        });
        if (data.animals) {
            let ids;
            let info;
            if (data.animals.edges) {
                ids = data.animals.edges.map(item => item.node.id);
            }
            if (data.animals.pageInfo) {
                info = data.animals.pageInfo;
            }
            dispatch(animalsSuccessFav({ ids, info }));
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
            const { queryVars } = getState();
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
            const { queryVars } = getState();
            dispatch(fetchAnimals(queryVars));
        }
    } catch (error) {
        dispatch(hasErrorFav(error.message));
    }
};

// todo - toggle action
