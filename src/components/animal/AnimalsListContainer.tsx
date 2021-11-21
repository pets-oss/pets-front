import React, { useEffect } from 'react';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';

import Skeleton from '@material-ui/lab/Skeleton';
import { Animal } from '../../graphql/types';
import {
    loadAnimalsFirstPage,
    loadAnimalsNextPage,
    loadAnimalsPreviousPage,
    setAnimalsPageContext,
    setAnimalsPageSize,
} from '../../store/animalsAll';
import AnimalCardList from './AnimalCardList';
import AnimalsTable from './AnimalsTable';
import PaginationRounded from './PaginationRounded';
import { AnimalsViewType } from './ViewSelector';

export default function AnimalsListContainer({ viewType, pageType = AnimalPageType.ALL }: AnimalsListContainerProps) {
    const dispatch = useDispatch();

    const { page, pageSize, currentPage, isLoading, error } = useSelector((state: RootStateOrAny) => state.animalsAll);
    const animalObjs: Animal[] = page.objs;

    useEffect(() => {
        switch (pageType) {
            case AnimalPageType.ALL:
                dispatch(setAnimalsPageContext('/animal-list'));
                break;
            case AnimalPageType.FAVORITES:
                dispatch(setAnimalsPageContext('/favorites'));
                break;
        }
        loadFirstPage();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

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

    function loadFirstPage() {
        dispatch(loadAnimalsFirstPage());
    }

    function loadNextPage() {
        dispatch(loadAnimalsNextPage());
    }

    function loadPreviousPage() {
        dispatch(loadAnimalsPreviousPage());
    }

    function handlePageSizeChange(size) {
        dispatch(setAnimalsPageSize(size));
    }

    function handlePageChange(newPage) {
        if (newPage > currentPage) {
            loadNextPage();
        } else {
            loadPreviousPage();
        }
    }

    return (
        <>
            {viewType === AnimalsViewType.TABLE ? (
                <AnimalsTable animals={animalObjs} />
            ) : (
                <AnimalCardList animals={animalObjs} />
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

interface AnimalsListContainerProps {
    viewType: AnimalsViewType;
    pageType?: AnimalPageType;
}

export enum AnimalPageType {
    ALL,
    FAVORITES,
}
