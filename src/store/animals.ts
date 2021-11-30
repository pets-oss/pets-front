import { loader } from 'graphql.macro';

import { createAsyncThunk, createSlice, SerializedError } from '@reduxjs/toolkit';
import { AnimalFormData } from '../components/animal/create-update/AnimalForm';
import {
    Animal,
    AnimalEdge,
    AnimalsConnection,
    CreateAnimalInput,
    PageInfo,
    QueryAnimalsArgs,
    UpdateAnimalInput,
} from '../graphql/types';
import apolloClient from '../utils/authorizedApolloClient';
import { RootState } from './index';

// First, create the thunk
const GET_ANIMALS_QUERY = loader('../graphql/queries/animal-list.graphql');
const ADD_TO_FAVORITE_ANIMALS_MUTATION = loader('../graphql/mutations/add-to-favorite-animals.graphql');
const REMOVE_FROM_FAVORITE_ANIMALS_MUTATION = loader('../graphql/mutations/remove-from-favorite-animals.graphql');

export const fetchAnimals = createAsyncThunk<
    AnimalsConnection,
    Partial<QueryAnimalsArgs> | void,
    {
        rejectValue: string;
    }
>('animals/fetchStatus', async (additionQueryArgs, { getState, requestId, rejectWithValue }) => {
    const { currentRequestId, loading } = (getState() as RootState).animals;
    const queryArgs = (getState() as RootState).queryArgs.query;
    if (loading !== 'pending' || requestId !== currentRequestId) {
        return;
    }
    try {
        const { data } = await apolloClient.query({
            query: GET_ANIMALS_QUERY,
            fetchPolicy: 'no-cache',
            variables: { ...queryArgs, ...additionQueryArgs },
        });

        return data.animals;
    } catch (error: any) {
        return rejectWithValue(error.message);
    }
});

const CREATE_ANIMAL_MUTATION = loader('../graphql/mutations/create-animal.graphql');
const UPDATE_ANIMAL_MUTATION = loader('../graphql/mutations/update-animal.graphql');

export const createOrUpdateAnimal = createAsyncThunk<
    Animal | null | undefined,
    AnimalFormData,
    {
        rejectValue: string;
    }
>('animals/CreateUpdate', async (formData, { rejectWithValue }) => {
    // (formData: AnimalFormData, actionCb: (error: any) => void) => async (dispatch, getState) => {
    const animalInput: CreateAnimalInput = {
        name: formData.name,
        comments: formData.comments,
        details: {
            speciesId: formData.details?.species?.id,
            breedId: formData.details?.breed?.id,
            genderId: formData.details?.gender?.id,
            colorId: formData.details?.color?.id,
            birthDate: formData.details?.birthDate,
        },
    };

    if (formData.id) {
        (animalInput as UpdateAnimalInput).id = formData.id;
    }

    const mutation = formData.id ? UPDATE_ANIMAL_MUTATION : CREATE_ANIMAL_MUTATION;

    try {
        const { data } = await apolloClient.mutate<Animal>({
            mutation,
            variables: { input: animalInput },
        });
        return data;
    } catch (error: any) {
        return rejectWithValue(error.message);
    }
});

export const toggleFavorite = createAsyncThunk<
    void,
    { id: number; favorite: boolean },
    {
        rejectValue: string;
    }
>('animals/toggleFavorite', async (data, { rejectWithValue }) => {
    try {
        await apolloClient.mutate({
            mutation: data.favorite ? ADD_TO_FAVORITE_ANIMALS_MUTATION : REMOVE_FROM_FAVORITE_ANIMALS_MUTATION,
            variables: { animalId: data.id },
        });
    } catch (error: any) {
        rejectWithValue(error.message);
    }
});

interface AnimalStoreState {
    entities: Animal[];
    pageInfo: PageInfo;
    loading: string;
    currentRequestId?: string;
    favoriteChangeRequestId?: string;
    error?: SerializedError;
}

const initialState: AnimalStoreState = {
    entities: [],
    pageInfo: {
        hasNextPage: false,
        hasPreviousPage: false,
        totalCount: 0,
    },
    loading: 'idle',
    currentRequestId: undefined,
    favoriteChangeRequestId: undefined,
    error: undefined,
};

const slice = createSlice({
    name: 'animals',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(toggleFavorite.fulfilled, (state, action) => {
                const { requestId } = action.meta;
                state.favoriteChangeRequestId = requestId;
            })
            .addCase(fetchAnimals.pending, (state, action) => {
                if (state.loading === 'idle') {
                    state.loading = 'pending';
                    state.currentRequestId = action.meta.requestId;
                }
            })
            .addCase(fetchAnimals.fulfilled, (state, action) => {
                const { requestId } = action.meta;
                if (state.loading === 'pending' && state.currentRequestId === requestId) {
                    state.loading = 'idle';
                    state.entities = getAnimals(action.payload.edges);
                    state.pageInfo = action.payload.pageInfo;
                    state.currentRequestId = undefined;
                }
            })
            .addCase(fetchAnimals.rejected, (state, action) => {
                const { requestId } = action.meta;
                if (state.loading === 'pending' && state.currentRequestId === requestId) {
                    state.loading = 'idle';
                    state.error = action.error;
                    state.currentRequestId = undefined;
                }
            });
    },
});

export const getAnimals = (edges?: Array<AnimalEdge>): Animal[] => {
    if (!edges) {
        return [];
    }
    return edges.map(item => item.node as Animal);
};

export const {} = slice.actions;
export default slice.reducer;
