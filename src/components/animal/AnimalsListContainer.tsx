import React from 'react';

import { ApolloError } from '@apollo/client/errors';
import Skeleton from '@material-ui/lab/Skeleton';
import { Animal } from '../../graphql/types';
import AnimalsList from './AnimalsList';
import AnimalsTable from './AnimalsTable';
import { AnimalsViewType } from './ViewSelector';

// const GET_ANIMALS_QUERY = loader('../../graphql/queries/animal-list.graphql');

interface Response {
    animals: Animal[];
}

interface AnimalsListContainerProps {
    viewType: AnimalsViewType;
    loading: boolean;
    error: ApolloError | undefined;
    data: Response | undefined;
}

export default function AnimalsListContainer({ loading, error, data, viewType }: AnimalsListContainerProps) {
    // const { loading, error, data } = useQuery<Response>(GET_ANIMALS_QUERY);
    if (loading) {
        return <Skeleton animation="wave" variant="rect" height={500} />;
    }

    if (error) {
        // TODO: replace with proper UI elements
        return <p>Error!</p>;
    }

    if (!data?.animals.length) {
        // TODO: replace with proper UI elements
        return <p>No data</p>;
    }

    if (viewType === AnimalsViewType.TABLE) {
        return <AnimalsTable animals={data.animals} />;
    }

    return <AnimalsList animals={data.animals} />;
}
