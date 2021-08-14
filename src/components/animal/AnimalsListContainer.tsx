import { loader } from 'graphql.macro';
import React, { useContext, useEffect, useState } from 'react';

import { useQuery } from '@apollo/client';
import Skeleton from '@material-ui/lab/Skeleton';
import { AnimalsConnection } from '../../graphql/types';
import { OutdatedPageContext } from '../../utils/OutdatedPageContextProvider';
import AnimalsList from './AnimalsList';
import AnimalsTable from './AnimalsTable';
import PaginationRounded from './PaginationRounded';
import { AnimalsViewType } from './ViewSelector';

const GET_ANIMALS_QUERY = loader('../../graphql/queries/animal-list.graphql');
const DEFAULT_PAGE_SIZE = 12;

interface Response {
    animals: AnimalsConnection;
}

interface AnimalsListContainerProps {
    viewType: AnimalsViewType;
    setAnimalsCount: (value: number) => void;
}

export default function AnimalsListContainer({ viewType, setAnimalsCount }: AnimalsListContainerProps) {
    const [pageSize, setPageSize] = useState(DEFAULT_PAGE_SIZE);

    const { loading, error, data, refetch, fetchMore } = useQuery<Response>(GET_ANIMALS_QUERY, {
        fetchPolicy: 'no-cache',
        variables: {
            first: pageSize,
        },
    });

    const { isPageOutdated, setIsPageOutdated } = useContext(OutdatedPageContext);

    useEffect(() => {
        if (isPageOutdated.animalsPage) {
            refetch();
            setIsPageOutdated({ animalsPage: false, favoritesPage: false });
        }
    }, [isPageOutdated, setIsPageOutdated, refetch]);

    useEffect(() => {
        setAnimalsCount(data?.animals.pageInfo.totalCount ?? 0);
    }, [setAnimalsCount, data?.animals.pageInfo.totalCount]);

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

    function loadNextPage() {
        fetchMore({
            variables: {
                first: pageSize,
                after: data?.animals.pageInfo.endCursor,
            },
        });
    }

    function loadFirstPage(first: number) {
        fetchMore({
            variables: {
                first,
                after: '',
            },
        });
    }

    function loadPreviousPage() {
        fetchMore({
            variables: {
                first: undefined,
                after: undefined,
                last: pageSize,
                before: data?.animals.pageInfo.startCursor,
            },
        });
    }

    return (
        <>
            {viewType === AnimalsViewType.TABLE ? (
                <AnimalsTable animals={data.animals.edges} />
            ) : (
                <AnimalsList animals={data.animals.edges} />
            )}
            <PaginationRounded
                count={data?.animals.pageInfo.totalCount ?? 0}
                nextPage={loadNextPage}
                prevPage={loadPreviousPage}
                firstPage={loadFirstPage}
                pageSize={pageSize}
                onPageSizeChange={setPageSize}
            />
        </>
    );
}
