import React from 'react';

import { Grid, Skeleton } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../store';
import { loadNextPage, loadPreviousPage, setPageSize } from '../../store/queryArgs';
import AnimalCard from './AnimalCard';
import AnimalsTable from './AnimalsTable';
import PaginationRounded from './PaginationRounded';
import { AnimalsViewType } from './ViewSelector';

export default function AnimalsListContainer({ viewType }: AnimalsListContainerProps) {
    const dispatch = useAppDispatch();

    const { loading, entities, pageInfo } = useAppSelector(state => state.animals);
    const { currentPage, pageSize } = useAppSelector(state => state.queryArgs);

    // const animalObjs: Animal[] = animalsConnection.edges;
    const totalPageSize = pageInfo?.totalCount || 0;

    if (loading === 'pending') {
        return <Skeleton animation="wave" variant="rectangular" height={500} width="100%" />;
    }

    if (totalPageSize === 0) {
        // TODO: replace with proper UI elements
        return <p>No data</p>;
    }

    function handlePageSizeChange(size) {
        dispatch(setPageSize(size));
    }

    function handlePageChange(newPage) {
        if (newPage > currentPage) {
            dispatch(loadNextPage(pageInfo));
        } else {
            dispatch(loadPreviousPage(pageInfo));
        }
    }

    return (
        <>
            {viewType === AnimalsViewType.TABLE ? (
                <AnimalsTable animals={entities} />
            ) : (
                <Grid container component="ul" spacing={2} justifyContent="center">
                    {entities.map(animal => (
                        <AnimalCard key={animal.id} animal={animal} />
                    ))}
                </Grid>
            )}
            <PaginationRounded
                count={totalPageSize}
                page={currentPage}
                onPageChange={handlePageChange}
                pageSize={pageSize}
                onPageSizeChange={handlePageSizeChange}
            />
        </>
    );
}

interface AnimalsListContainerProps {
    viewType: AnimalsViewType;
}
