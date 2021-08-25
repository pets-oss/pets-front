import React, { useEffect, useState } from 'react';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';

import Skeleton from '@material-ui/lab/Skeleton';
import { Animal } from '../../graphql/types';
import { fetchAnimals } from '../../store/animals';
import AnimalsList from './AnimalsList';
import AnimalsTable from './AnimalsTable';
import PaginationRounded from './PaginationRounded';
import { AnimalsViewType } from './ViewSelector';

const DEFAULT_PAGE_SIZE = 12;

interface AnimalsListContainerProps {
    viewType: AnimalsViewType;
    setAnimalsCount: (value: number) => void;
}

export default function AnimalsListContainer({ viewType, setAnimalsCount }: AnimalsListContainerProps) {
    const [pageSize, setPageSize] = useState(DEFAULT_PAGE_SIZE);
    const dispatch = useDispatch();

    const { page, isLoading, error } = useSelector((state: RootStateOrAny) => state.animals.all);
    const animalObjs: Animal[] = page.objs;

    useEffect(() => {
        dispatch(
            fetchAnimals({
                first: pageSize,
                after: '',
            })
        );
        setAnimalsCount(page.info.totalCount ?? 0);
    }, [setAnimalsCount, page.info.totalCount, dispatch, pageSize]);

    if (isLoading) {
        return <Skeleton animation="wave" variant="rect" height={500} />;
    }

    if (error) {
        // TODO: replace with proper UI elements
        return <p>Error!</p>;
    }

    if (page.info.totalCount === 0) {
        // TODO: replace with proper UI elements
        return <p>No data</p>;
    }

    function loadFirstPage(first: number) {
        dispatch(
            fetchAnimals({
                first,
                after: '',
            })
        );
    }

    function loadNextPage() {
        dispatch(
            fetchAnimals({
                first: pageSize,
                after: page.info.endCursor,
            })
        );
    }

    function loadPreviousPage() {
        dispatch(
            fetchAnimals({
                first: undefined,
                after: undefined,
                last: pageSize,
                before: page.info.startCursor,
            })
        );
    }

    return (
        <>
            {viewType === AnimalsViewType.TABLE ? (
                <AnimalsTable animals={animalObjs} />
            ) : (
                <AnimalsList animals={animalObjs} />
            )}
            <PaginationRounded
                count={page.info.totalCount ?? 0}
                nextPage={loadNextPage}
                prevPage={loadPreviousPage}
                firstPage={loadFirstPage}
                pageSize={pageSize}
                onPageSizeChange={setPageSize}
            />
        </>
    );
}
