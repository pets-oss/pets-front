import { loader } from 'graphql.macro';
import React from 'react';

import { useQuery } from '@apollo/client';
import Skeleton from '@material-ui/lab/Skeleton';
import { AnimalsConnection } from '../../graphql/types';
import AnimalsList from './AnimalsList';
import AnimalsTable from './AnimalsTable';
import { AnimalsViewType } from './ViewSelector';

const GET_ANIMALS_QUERY = loader('../../graphql/queries/animal-list.graphql');

interface Response {
    animals: AnimalsConnection;
}

interface AnimalsListContainerProps {
    viewType: AnimalsViewType;
    setAnimalsCount: (value: number) => void;
}

export default function AnimalsListContainer({ viewType, setAnimalsCount }: AnimalsListContainerProps) {
    const { loading, error, data } = useQuery<Response>(GET_ANIMALS_QUERY);
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

    setAnimalsCount(data.animals.edges.length);

    if (viewType === AnimalsViewType.TABLE) {
        return <AnimalsTable animals={data.animals.edges} />;
    }

    return <AnimalsList animals={data.animals.edges} />;
}
