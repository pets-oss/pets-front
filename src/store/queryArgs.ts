import { createAction, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PageInfo, QueryAnimalsArgs } from '../graphql/types';
import { setFilters } from './filters';
import { defaultQuery } from './util';

export const setPageSize = createAction<number>('setPageSize');
export const resetQuery = createAction<void>('resetQuery');

interface QueryArgsState {
    query: QueryAnimalsArgs;
    pageSize: number;
    currentPage: number;
}

const initialQuery = defaultQuery();

const initialState: QueryArgsState = {
    query: initialQuery,
    pageSize: initialQuery.first,
    currentPage: 0,
};

const updatePageSize = (state, pageSize: number) => {
    delete state.query.last;
    delete state.query.after;
    delete state.query.before;
    state.query.first = pageSize;

    state.currentPage = 0;
    state.pageSize = pageSize;
};
const slice = createSlice({
    name: 'queryArgs',
    initialState,
    reducers: {
        loadNextPage: (state, action: PayloadAction<PageInfo>) => {
            const cursor = action.payload?.endCursor;
            const query: QueryAnimalsArgs = {
                ...state.query,
                ...initialQuery,
                first: undefined,
            };
            query.first = state.pageSize;
            query.after = cursor;

            state.query = query;
            state.currentPage++;
        },
        loadPreviousPage: (state, action) => {
            const cursor = action.payload?.startCursor;
            const query: QueryAnimalsArgs = {
                ...state.query,
                ...initialQuery,
                first: undefined,
            };
            query.last = state.pageSize;
            query.before = cursor;

            // going backwards
            state.query = query;
            state.currentPage--;
        },
    },
    extraReducers: builder => {
        builder
            .addCase(setPageSize, (state, action) => {
                updatePageSize(state, action.payload);
            })
            .addCase(resetQuery, state => {
                updatePageSize(state, state.pageSize);
            })
            .addCase(setFilters, (state, action) => {
                updatePageSize(state, state.pageSize);
                state.query = {
                    ...state.query,
                    breed: intToArray(action.payload.breed?.id),
                    species: intToArray(action.payload.species?.id),
                    gender: intToArray(action.payload.gender?.id),
                };
            });
    },
});

const intToArray = (numb?: number) => {
    return numb ? [numb] : null;
};

export const { loadNextPage, loadPreviousPage } = slice.actions;
export default slice.reducer;
