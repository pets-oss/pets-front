import { loader } from 'graphql.macro';
import React from 'react';

import { useQuery } from '@apollo/client';
import Skeleton from '@material-ui/lab/Skeleton';
import { AnimalsConnection } from '../../graphql/types';
import AnimalsList from './AnimalsList';
import AnimalsTable from './AnimalsTable';
import { AnimalsViewType } from './ViewSelector';

const GET_ANIMALS_QUERY = loader('../../graphql/queries/animal-list.graphql');
const GET_FAVORITE_ANIMALS_QUERY = loader('../../graphql/queries/favorite-animal-list.graphql');

interface Response {
    animals: AnimalsConnection;
}

interface AnimalsListContainerProps {
    viewType: AnimalsViewType;
    setAnimalsCount: (value: number) => void;
    showFavoriteAnimalsOnly: boolean;
}

export default function AnimalsListContainer({
    viewType,
    setAnimalsCount,
    showFavoriteAnimalsOnly,
}: AnimalsListContainerProps) {
    const { loading, error, data } = useQuery<Response>(
        showFavoriteAnimalsOnly ? GET_FAVORITE_ANIMALS_QUERY : GET_ANIMALS_QUERY
    );

    if (loading) {
        return <Skeleton animation="wave" variant="rect" height={500} />;
    }

    if (error) {
        // TODO: replace with proper UI elements
        return <p>Error!</p>;
    }

    if (!data?.animals?.edges.length) {
        // TODO: replace with proper UI elements
        return <p>No data</p>;
    }

    setAnimalsCount(data?.animals.pageInfo.totalCount);

    if (viewType === AnimalsViewType.TABLE) {
        return <AnimalsTable animals={data.animals.edges} />;
    }

    return <AnimalsList animals={data.animals.edges} />;
}
