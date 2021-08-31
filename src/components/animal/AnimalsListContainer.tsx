import React, { useEffect, useState } from 'react';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';

import Skeleton from '@material-ui/lab/Skeleton';
import { Animal } from '../../graphql/types';
import { fetchAnimals as fetchAllAnimals } from '../../store/animalsAll';
import { fetchAnimals as fetchFavouriteAnimals } from '../../store/animalsFav';
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
    const [currentPage, setCurrentPage] = useState(0);
    const dispatch = useDispatch();

    const { page, isLoading, error } = useSelector((state: RootStateOrAny) => state.animalsAll.all);
    const animalObjs: Animal[] = page.objs;

    useEffect(() => {
        dispatch(
            fetchAllAnimals({
                first: pageSize,
                after: '',
            })
        );
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [pageSize]);

    useEffect(() => {
        dispatch(fetchFavouriteAnimals({}));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        setAnimalsCount(page.info.totalCount ?? 0);
    }, [setAnimalsCount, page.info.totalCount]);

    if (isLoading) {
        return <Skeleton animation="wave" variant="rect" height={500} width="100%" />;
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
            fetchAllAnimals({
                first,
                after: '',
            })
        );
    }

    function loadNextPage() {
        dispatch(
            fetchAllAnimals({
                first: pageSize,
                after: page.info.endCursor,
            })
        );
    }

    function loadPreviousPage() {
        dispatch(
            fetchAllAnimals({
                first: undefined,
                after: undefined,
                last: pageSize,
                before: page.info.startCursor,
            })
        );
    }

    function handlePageSizeChange(size) {
        setCurrentPage(0);
        setPageSize(size);
        loadFirstPage(size);
    }

    function handlePageChange(newPage) {
        if (newPage > currentPage) {
            loadNextPage();
        } else {
            loadPreviousPage();
        }
        setCurrentPage(newPage);
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
                page={currentPage}
                onPageChange={handlePageChange}
                pageSize={pageSize}
                onPageSizeChange={handlePageSizeChange}
            />
        </>
    );
}
