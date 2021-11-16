/* eslint no-console: ["error", { allow: ["log", "warn", "error"] }] */

import { loader } from 'graphql.macro';

import { createSlice } from '@reduxjs/toolkit';
import { AnimalFormData } from '../components/animal/create-update/AnimalForm';
import { CreateAnimalInput, PageInfo, QueryAnimalsArgs, UpdateAnimalInput } from '../graphql/types';
import { AnimalsFiltersFormData, PagedAnimalsState } from './types-definitions';

const DEFAULT_PAGE_SIZE = 12;

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
    pageSize: DEFAULT_PAGE_SIZE,
    currentPage: 0,
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
        animalsContextAll: (state, action) => {
            state.pageContext = action.payload;
        },
        animalsPageSizeAll: (state, action) => {
            state.pageSize = action.payload;
        },
        animalsCurrentPageAll: (state, action) => {
            state.currentPage = action.payload;
        },
        animalsQueryVarsFavoriteAll: (state, action) => {
            state.queryVars.isFavoriteOnly = action.payload;
        },
        animalsQueryVarsFiltersAll: (state, action) => {
            const { breed, gender, species } = action.payload;
            const newValue = { ...state.queryVars, breed, gender, species };
            for (const propName in newValue) {
                if (newValue[propName] === null || newValue[propName] === undefined) {
                    delete newValue[propName];
                }
            }
            state.queryVars = newValue;
        },
        animalsQueryVarsPaginationAll: (state, action) => {
            const { first, after, last, before } = action.payload;
            const newValue = { ...state.queryVars, first, after, last, before };
            for (const propName in newValue) {
                if (newValue[propName] === null || newValue[propName] === undefined) {
                    delete newValue[propName];
                }
            }
            state.queryVars = newValue;
        },
    },
});

export default slice.reducer;

/* IMPORTANT:
 * All the reloading/refetching logic should be here. Not in the view.
 * View is only calling named actions (without params).
 */

// Actions

const {
    animalsSuccessAll,
    startLoadingAll,
    hasErrorAll,
    animalsContextAll,
    animalsPageSizeAll,
    animalsCurrentPageAll,
    animalsQueryVarsFavoriteAll,
    animalsQueryVarsFiltersAll,
    animalsQueryVarsPaginationAll,
} = slice.actions;

export const forceReFetchAnimalsForSameContext = (context: string) => (dispatch, getState) => {
    const { animalsAll } = getState();
    const { pageContext } = animalsAll;
    if (context === pageContext) {
        dispatch(fetchAnimals());
    }
};

export const loadAnimalsFirstPage = () => (dispatch, getState) => {
    const { animalsAll } = getState();
    const { pageSize } = animalsAll;

    dispatch(startLoadingAll());

    const firstPageQueryVars: QueryAnimalsArgs = {
        first: pageSize,
        after: '',
        last: undefined,
        before: undefined,
    };

    dispatch(animalsQueryVarsPaginationAll(firstPageQueryVars));
    dispatch(fetchAnimals());
};

export const loadAnimalsNextPage = () => (dispatch, getState) => {
    const { animalsAll } = getState();
    const { pageSize, page } = animalsAll;
    dispatch(startLoadingAll());

    const nextPageQueryVars: QueryAnimalsArgs = {
        first: pageSize,
        after: page.info.endCursor,
        last: undefined,
        before: undefined,
    };

    dispatch(animalsQueryVarsPaginationAll(nextPageQueryVars));
    dispatch(fetchAnimals());
};

export const loadAnimalsPreviousPage = () => (dispatch, getState) => {
    const { animalsAll } = getState();
    const { pageSize, page } = animalsAll;
    dispatch(startLoadingAll());

    const previousPageQueryVars: QueryAnimalsArgs = {
        first: undefined,
        after: undefined,
        last: pageSize,
        before: page.info.startCursor,
    };

    dispatch(animalsQueryVarsPaginationAll(previousPageQueryVars));
    dispatch(fetchAnimals());
};

export const setAnimalsPageContext = (context: string) => dispatch => {
    dispatch(animalsContextAll(context));
    if (context === '/favorites') {
        dispatch(animalsQueryVarsFavoriteAll(true));
    } else {
        dispatch(animalsQueryVarsFavoriteAll(false));
    }
};

export const setAnimalsPageSize = (size: number) => dispatch => {
    dispatch(animalsPageSizeAll(size));
    dispatch(animalsCurrentPageAll(0));
    dispatch(loadAnimalsFirstPage());
};

export const setAnimalsCurrentPage = (number: number) => dispatch => {
    dispatch(animalsCurrentPageAll(number));
};

export const setAnimalsPagination = (queryArgs: QueryAnimalsArgs) => dispatch => {
    dispatch(animalsQueryVarsPaginationAll(queryArgs));
    dispatch(fetchAnimals());
};

export const setAnimalsFilters = (formData: AnimalsFiltersFormData) => dispatch => {
    dispatch(animalsQueryVarsFiltersAll(formData));
    dispatch(fetchAnimals());
};

export const fetchAnimals =
    () =>
    async (dispatch, getState, { apolloClient }) => {
        const { animalsAll } = getState();
        const { queryVars } = animalsAll;

        try {
            const { data } = await apolloClient.query({
                query: GET_ANIMALS_QUERY,
                fetchPolicy: 'no-cache',
                variables: queryVars,
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
            }
        } catch (error: any) {
            dispatch(hasErrorAll(error.message));
        }
    };

export const createOrUpdateAnimal =
    (formData: AnimalFormData, actionCb: (error: any) => void) =>
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
                actionCb(null);
                dispatch(fetchAnimals());
            }
        } catch (error: any) {
            actionCb(error);
            dispatch(hasErrorAll(error.message));
        }
    };

const makeAnimalInputFromAnimalForm = (formData: AnimalFormData): CreateAnimalInput | UpdateAnimalInput => {
    const result: CreateAnimalInput = {
        name: formData.name,
        comments: formData.comments,
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
