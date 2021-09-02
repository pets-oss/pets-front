/* eslint no-console: ["error", { allow: ["warn", "error"] }] */

import { loader } from 'graphql.macro';

import { createSlice } from '@reduxjs/toolkit';
import { PageInfo, QueryAnimalsArgs } from '../graphql/types';
import { PagedAnimalsState } from './types-definitions';

const GET_ANIMALS_QUERY = loader('../graphql/queries/animal-list.graphql');

// Slice

const initialState: PagedAnimalsState = {
    page: {
        ids: [],
        objs: [],
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
    pageContext: '',
};

const slice = createSlice({
    name: 'animalsAll',
    initialState,
    reducers: {
        startLoadingAll: state => {
            state.isLoading = true;
        },
        hasErrorAll: (state, action) => {
            state.error = action.payload;
            state.isLoading = false;
        },
        animalsSuccessAll: (state, action) => {
            state.page.ids = action.payload.ids;
            state.page.objs = action.payload.objs;
            state.page.info = action.payload.info;
            state.isLoading = false;
        },
        lastQueryVarsAll: (state, action) => {
            state.queryVars = action.payload;
        },
        animalsContextAll: (state, action) => {
            state.pageContext = action.payload;
        },
    },
});

export default slice.reducer;

// Actions

const { animalsSuccessAll, startLoadingAll, hasErrorAll, lastQueryVarsAll, animalsContextAll } = slice.actions;

export const fetchAnimalsIfNewContext = (queryArgs: QueryAnimalsArgs, context: string) => (dispatch, getState) => {
    dispatch(animalsContextAll(context));
    const { pageContext } = getState();
    if (context !== pageContext) {
        dispatch(fetchAnimals(queryArgs));
    }
};

export const forceReFetchAnimalsForSameContext = (context: string) => (dispatch, getState) => {
    const { animalsAll } = getState();
    const { queryVars, pageContext } = animalsAll;
    if (context === pageContext) {
        dispatch(fetchAnimals(queryVars));
    }
};

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
