import { Animal, Breed, Gender, Maybe, PageInfo, QueryAnimalsArgs, Scalars, Species } from '../graphql/types';

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
    pageSize?: number;
    currentPage?: number;
    queryVarsFilterObjs?: AnimalsFiltersObjs;
};

export type AnimalsFiltersQueryVars = {
    breed?: Maybe<Array<Maybe<Scalars['Int']>>>;
    gender?: Maybe<Array<Maybe<Scalars['Int']>>>;
    species?: Maybe<Array<Maybe<Scalars['Int']>>>;
};

export type AnimalsFiltersFormDataInput = {
    breed?: Maybe<GenericFilter>;
    gender?: Maybe<GenericFilter>;
    species?: Maybe<GenericFilter>;
};

export type AnimalsFiltersFormDataOutput = {
    breed?: Maybe<Breed[]>;
    gender?: Maybe<Gender[]>;
    species?: Maybe<Species[]>;
};

export type GenericFilter = {
    __typename: 'Breed' | 'Gender' | 'Species';
    id: Scalars['Int'];
    value: Scalars['String'];
};

export type AnimalsFiltersObjs = {
    breed?: Maybe<Array<GenericFilter>>;
    gender?: Maybe<Array<GenericFilter>>;
    species?: Maybe<Array<GenericFilter>>;
    [index: string]: Maybe<Array<GenericFilter>> | undefined;
};
