/* eslint no-console: ["error", { allow: ["log", "warn", "error"] }] */

import { loader } from 'graphql.macro';

import { createSlice } from '@reduxjs/toolkit';
import { AnimalFormData } from '../components/animal/create-update/AnimalForm';
import { Breed, CreateAnimalInput, Gender, QueryAnimalsArgs, Species, UpdateAnimalInput } from '../graphql/types';
import {
    AnimalsFiltersFormDataOutput,
    AnimalsFiltersQueryVars,
    GenericFilter,
    PagedAnimalsState,
} from './types-definitions';

const DEFAULT_PAGE_SIZE = 12;

const GET_ANIMALS_QUERY = loader('../graphql/queries/animal-list.graphql');

const CREATE_ANIMAL_MUTATION = loader('../graphql/mutations/create-animal.graphql');
const UPDATE_ANIMAL_MUTATION = loader('../graphql/mutations/update-animal.graphql');

// Slice

const initialState: PagedAnimalsState = {
    page: {
        ids: [],
        objs: [],
        info: {
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
    queryVarsFilterObjs: {},
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
            // clear previous error state
            state.error = false;
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
        animalsQueryVarsFilterObjsAll: (state, action) => {
            state.queryVarsFilterObjs = action.payload;
        },
        deleteAnimalFilterWithFilterObjsAll: (state, action) => {
            if (!state.queryVarsFilterObjs) {
                return;
            }
            const queryObj = state.queryVarsFilterObjs;
            const filter = action.payload as GenericFilter;
            const filterType = filter.__typename.toLowerCase();

            const filterList = queryObj[filterType]?.filter(prop => prop.id !== filter.id);

            if (filterList && filterList.length > 0) {
                queryObj[filterType] = filterList;
            } else {
                delete queryObj[filterType];
            }
            state.queryVarsFilterObjs = queryObj;
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
    animalsQueryVarsFilterObjsAll,
    deleteAnimalFilterWithFilterObjsAll,
    animalsQueryVarsPaginationAll,
} = slice.actions;

const setAnimalsQueryVarsFirstPage = () => (dispatch, getState) => {
    const { animalsAll } = getState();
    const { pageSize } = animalsAll;
    const firstPageQueryVars: QueryAnimalsArgs = {
        first: pageSize,
        after: '',
        last: undefined,
        before: undefined,
    };
    dispatch(animalsQueryVarsPaginationAll(firstPageQueryVars));
};

const setAnimalsQueryVarsNextPage = () => (dispatch, getState) => {
    const { animalsAll } = getState();
    const { pageSize, page } = animalsAll;
    const nextPageQueryVars: QueryAnimalsArgs = {
        first: pageSize,
        after: page.info.endCursor,
        last: undefined,
        before: undefined,
    };
    dispatch(animalsQueryVarsPaginationAll(nextPageQueryVars));
};

const setAnimalsQueryVarsPrevPage = () => (dispatch, getState) => {
    const { animalsAll } = getState();
    const { pageSize, page } = animalsAll;
    const previousPageQueryVars: QueryAnimalsArgs = {
        first: undefined,
        after: undefined,
        last: pageSize,
        before: page.info.startCursor,
    };
    dispatch(animalsQueryVarsPaginationAll(previousPageQueryVars));
};

const setAnimalsCurrentPage = (number: number) => dispatch => {
    dispatch(animalsCurrentPageAll(number));
};

export const forceReFetchAnimalsForSameContext = (context: string) => (dispatch, getState) => {
    const { animalsAll } = getState();
    const { pageContext } = animalsAll;
    if (context === pageContext) {
        dispatch(startLoadingAll());
        dispatch(fetchAnimals());
    }
};

export const loadAnimalsFirstPage = () => async (dispatch, getState) => {
    dispatch(setAnimalsQueryVarsFirstPage());
    dispatch(startLoadingAll());
    await dispatch(fetchAnimals());
    const {
        animalsAll: { isLoading, error },
    } = getState();
    if (!isLoading && !error) {
        dispatch(setAnimalsCurrentPage(0));
    }
};

export const loadAnimalsNextPage = () => async (dispatch, getState) => {
    dispatch(setAnimalsQueryVarsNextPage());
    dispatch(startLoadingAll());
    await dispatch(fetchAnimals());
    const {
        animalsAll: { isLoading, error, currentPage },
    } = getState();
    if (!isLoading && !error) {
        dispatch(setAnimalsCurrentPage(currentPage + 1));
    }
};

export const loadAnimalsPreviousPage = () => async (dispatch, getState) => {
    dispatch(setAnimalsQueryVarsPrevPage());
    dispatch(startLoadingAll());
    await dispatch(fetchAnimals());
    const {
        animalsAll: { isLoading, error, currentPage },
    } = getState();
    if (!isLoading && !error) {
        dispatch(setAnimalsCurrentPage(currentPage - 1));
    }
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

const setAnimalsFilters = (queryArgs: QueryAnimalsArgs) => dispatch => {
    // Not intended for calling directly from UI

    dispatch(animalsQueryVarsFiltersAll(queryArgs));
    // IMPORTANT. After filters are set, should load the first page again
    dispatch(loadAnimalsFirstPage());
};

export const setAnimalsFiltersWithFilterObjs = (queryArgsFilterObjs: AnimalsFiltersFormDataOutput) => dispatch => {
    // this is mapping action (formData Objs -> queryVars)

    dispatch(animalsQueryVarsFilterObjsAll(queryArgsFilterObjs));

    const queryArgs = convertFilterObjsToQueryVars(queryArgsFilterObjs);
    dispatch(setAnimalsFilters(queryArgs));
};

export const removeAnimalsFilterWithFilterObj =
    (queryArgsFilterObj: Species | Breed | Gender) => (dispatch, getState) => {
        dispatch(deleteAnimalFilterWithFilterObjsAll(queryArgsFilterObj));

        const { animalsAll } = getState();
        const { queryVarsFilterObjs } = animalsAll;
        const queryArgs = convertFilterObjsToQueryVars(queryVarsFilterObjs);
        dispatch(setAnimalsFilters(queryArgs));
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
            speciesId: formData.details?.species?.id,
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

const convertFilterObjsToQueryVars = (filterObjsArr: AnimalsFiltersFormDataOutput) => {
    // IMPORTANT: this is meaningful as long as filters work in NON multiple selection mode.
    // and we need to convert to queryVars array format
    const filterQueryVars: AnimalsFiltersQueryVars = {};

    if (filterObjsArr?.species && filterObjsArr.species?.length > 0) {
        filterQueryVars.species = filterObjsArr.species.map(item => item.id);
    }
    if (filterObjsArr?.breed && filterObjsArr.breed.length > 0) {
        filterQueryVars.breed = filterObjsArr.breed.map(item => item.id);
    }
    if (filterObjsArr?.gender && filterObjsArr.gender.length > 0) {
        filterQueryVars.gender = filterObjsArr.gender.map(item => item.id);
    }
    return filterQueryVars;
};
