import { createAction, createSlice } from '@reduxjs/toolkit';
import { Breed, Gender, Maybe, Species } from '../graphql/types';

export const setFilters = createAction<FilterState>('filters/setFilters');

export interface DeleteFilterState {
    type: string;
    filter: Maybe<Gender> | Maybe<Breed> | Maybe<Species>;
}

interface FilterState {
    breed?: Maybe<Breed>;
    gender?: Maybe<Gender>;
    species?: Maybe<Species>;
}

const initialState: FilterState = {};

const slice = createSlice({
    name: 'filters',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(setFilters, (state, action) => {
            return action.payload;
        });
    },
});

export const deleteFilter = type => (dispatch, getState) => {
    const { filters } = getState();
    const obj = Object.assign({}, filters);
    delete obj[type];
    dispatch(setFilters(obj));
};

export const resetFilters = () => dispatch => {
    dispatch(setFilters(initialState));
};

export const {} = slice.actions;
export default slice.reducer;
