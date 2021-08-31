import { Animal, PageInfo, QueryAnimalsArgs } from '../graphql/types';

export type AnimalsPagedSubState = {
    page: {
        ids: number[];
        objs: Animal[];
        info: PageInfo;
    };
    isLoading: boolean;
    error: boolean;
    queryVars: QueryAnimalsArgs;
};

export type AnimalsState = {
    all: AnimalsPagedSubState;
};

export const initialSubState: AnimalsPagedSubState = {
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
