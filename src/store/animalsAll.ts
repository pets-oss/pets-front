/* eslint no-console: ["error", { allow: ["log", "warn", "error"] }] */

import { loader } from 'graphql.macro';

import { createSlice } from '@reduxjs/toolkit';
import { AnimalFormData } from '../components/animal/create-update/AnimalForm';
import { CreateAnimalInput, PageInfo, QueryAnimalsArgs, UpdateAnimalInput } from '../graphql/types';
import { PagedAnimalsState } from './types-definitions';

const GET_ANIMALS_QUERY = loader('../graphql/queries/animal-list.graphql');

const CREATE_ANIMAL_MUTATION = loader('../graphql/mutations/create-animal.graphql');
const UPDATE_ANIMAL_MUTATION = loader('../graphql/mutations/update-animal.graphql');

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
        stopLoadingAll: state => {
            state.isLoading = false;
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
    const { animalsAll } = getState();
    const { pageContext } = animalsAll;
    if (context !== pageContext) {
        dispatch(startLoadingAll());
        dispatch(fetchAnimals(queryArgs));
    }
    dispatch(animalsContextAll(context));
};

export const forceReFetchAnimalsForSameContext = (context: string) => (dispatch, getState) => {
    const { animalsAll } = getState();
    const { queryVars, pageContext } = animalsAll;
    if (context === pageContext) {
        dispatch(fetchAnimals(queryVars));
    }
};

export const fetchAnimals =
    (queryArgs: QueryAnimalsArgs) =>
    async (dispatch, getState, { apolloClient }) => {
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
        } catch (error: any) {
            dispatch(hasErrorAll(error.message));
        }
    };

export const createOrUpdateAnimal =
    (formData: AnimalFormData) =>
    async (dispatch, getState, { apolloClient }) => {
        dispatch(startLoadingAll());

        const mutation = formData.id ? UPDATE_ANIMAL_MUTATION : CREATE_ANIMAL_MUTATION;
        const animalInput = makeAnimalInputFromAnimalForm(formData);

        try {
            const result = await apolloClient.mutate({
                mutation,
                variables: { input: animalInput },
            });
            if (result) {
                const { animalsAll } = getState();
                const { queryVars } = animalsAll;
                dispatch(fetchAnimals(queryVars));
            }
        } catch (error: any) {
            dispatch(hasErrorAll(error.message));
        }
    };

const makeAnimalInputFromAnimalForm = (formData: AnimalFormData): CreateAnimalInput | UpdateAnimalInput => {
    const result: CreateAnimalInput = {
        name: formData.name,
        comments: formData.comments,
        registration: {
            registrationNo: 'no registration',
        },
        details: {
            // todo - should let to send speciesId without breedId being set.
            // problem due to backend architecture solutions

            //speciesId: formData.details?.species?.id,
            breedId: formData.details?.breed?.id,
            genderId: formData.details?.gender?.id,
            colorId: formData.details?.color?.id,
            birthDate: formData.details?.birthDate,
        },
    };
    if (formData.id) {
        return { ...result, id: formData.id } as UpdateAnimalInput;
    }
    return result;
};
