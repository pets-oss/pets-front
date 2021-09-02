import { Animal, PageInfo, QueryAnimalsArgs } from '../graphql/types';

export type PagedAnimalsState = {
    page: {
        ids: number[];
        objs?: Animal[];
        info: PageInfo;
    };
    isLoading: boolean;
    error: boolean;
    queryVars: QueryAnimalsArgs;
    pageContext?: string;
};
