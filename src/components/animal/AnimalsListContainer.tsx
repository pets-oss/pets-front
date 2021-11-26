import React from 'react';

import Skeleton from '@material-ui/lab/Skeleton';
import { useAppDispatch, useAppSelector } from '../../store';
import { loadNextPage, loadPreviousPage, setPageSize } from '../../store/queryArgs';
import AnimalCardList from './AnimalCardList';
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
        return <Skeleton animation="wave" variant="rect" height={500} width="100%" />;
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
                <AnimalCardList animals={entities} />
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
