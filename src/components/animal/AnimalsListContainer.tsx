import React, { useEffect, useState } from 'react';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';

import { Typography } from '@material-ui/core';
import Skeleton from '@material-ui/lab/Skeleton';
import { fetchAnimals } from '../../store/animals';
import AnimalsList from './AnimalsList';
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
    const animalIds: number[] = page.ids;

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
            {animalIds.map((item: number) => (
                <Typography key={item}>animal id:{item}</Typography>
            ))}
            <hr />

            {viewType === AnimalsViewType.TABLE ? <div>AnimalsTable</div> : <AnimalsList ids={animalIds} />}
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
