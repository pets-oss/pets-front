import { loader } from 'graphql.macro';
import React, { useContext, useEffect } from 'react';

import { useQuery } from '@apollo/client';
import Skeleton from '@material-ui/lab/Skeleton';
import { AnimalsConnection } from '../../graphql/types';
import { OutdatedPageContext } from '../../utils/OutdatedPageContextProvider';
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
    const { loading, error, data, refetch } = useQuery<Response>(GET_ANIMALS_QUERY, { fetchPolicy: 'no-cache' });
    const { isPageOutdated, setIsPageOutdated } = useContext(OutdatedPageContext);

    useEffect(() => {
        if (isPageOutdated.animalsPage) {
            refetch();
            setIsPageOutdated({ animalsPage: false, favoritesPage: false });
        }
    }, [isPageOutdated, setIsPageOutdated, refetch]);

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
