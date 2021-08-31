/* eslint no-console: ["error", { allow: ["warn", "error"] }] */

import { loader } from 'graphql.macro';

import { createSlice } from '@reduxjs/toolkit';
import { QueryAnimalsArgs } from '../graphql/types';
import { AnimalsState, initialSubState } from './types-definitions';

const GET_ANIMALS_QUERY = loader('../graphql/queries/animal-list.graphql');

const initialState: AnimalsState = {
    all: initialSubState,
};

// Slice

const slice = createSlice({
    name: 'animalsAll',
    initialState,
    reducers: {
        startLoadingAll: state => {
            state.all.isLoading = true;
        },
        hasErrorAll: (state, action) => {
            state.all.error = action.payload;
            state.all.isLoading = false;
        },
        animalsSuccessAll: (state, action) => {
            state.all.page.ids = action.payload.ids;
            state.all.page.objs = action.payload.objs;
            state.all.page.info = action.payload.info;
            state.all.isLoading = false;
        },
        lastQueryVarsAll: (state, action) => {
            state.all.queryVars = action.payload;
        },
    },
});

export default slice.reducer;

// Actions

const { animalsSuccessAll, startLoadingAll, hasErrorAll, lastQueryVarsAll } = slice.actions;

export const fetchAnimals = (queryArgs: QueryAnimalsArgs) => async (dispatch, getState, { apolloClient }) => {
    dispatch(startLoadingAll());

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
            dispatch(animalsSuccessAll({ ids, objs, info }));
            dispatch(lastQueryVarsAll(queryArgs));
        }
    } catch (error) {
        dispatch(hasErrorAll(error.message));
    }
};
