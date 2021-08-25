/* eslint no-console: ["error", { allow: ["warn", "error"] }] */

import { loader } from 'graphql.macro';

import { createSlice } from '@reduxjs/toolkit';
import { PageInfo, QueryAnimalsArgs } from '../graphql/types';

const GET_ANIMALS_QUERY = loader('../graphql/queries/animal-list.graphql');

export type AnimalsPaginatedSubState = {
    page: {
        ids: number[];
        info: PageInfo;
    };
    isLoading: boolean;
    error: boolean;
};

export type AnimalsState = {
    all: AnimalsPaginatedSubState;
};

const initialSubState: AnimalsPaginatedSubState = {
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
};

const initialState: AnimalsState = {
    all: initialSubState,
};

// Slice

const slice = createSlice({
    name: 'animals',
    initialState,
    reducers: {
        startLoadingAll: state => {
            state.all.isLoading = true;
        },
        hasErrorAll: (state, action) => {
            state.all.error = action.payload;
            state.all.isLoading = false;
        },
        allAnimalsSuccess: (state, action) => {
            state.all.page.ids = action.payload.ids;
            state.all.page.info = action.payload.info;
            state.all.isLoading = false;
        },
    },
});

export default slice.reducer;

// Actions

const { allAnimalsSuccess, startLoadingAll, hasErrorAll } = slice.actions;

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
            let info;
            if (data.animals.edges) {
                ids = data.animals.edges.map(item => item.node.id);
            }
            if (data.animals.pageInfo) {
                info = data.animals.pageInfo;
            }
            dispatch(allAnimalsSuccess({ ids, info }));
        }
    } catch (error) {
        dispatch(hasErrorAll(error.message));
    }
};
