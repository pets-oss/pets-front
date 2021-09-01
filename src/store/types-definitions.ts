import { Animal, PageInfo, QueryAnimalsArgs } from '../graphql/types';

export type AnimalsState = {
    page: {
        ids: number[];
        objs: Animal[];
        info: PageInfo;
    };
    isLoading: boolean;
    error: boolean;
    queryVars: QueryAnimalsArgs;
};

export const initialState: AnimalsState = {
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
};
