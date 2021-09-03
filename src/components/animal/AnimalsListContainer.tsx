import React, { useEffect, useState } from 'react';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

import Skeleton from '@material-ui/lab/Skeleton';
import { Animal, QueryAnimalsArgs } from '../../graphql/types';
import { fetchAnimals, fetchAnimalsIfNewContext } from '../../store/animalsAll';
import AnimalCardList from './AnimalCardList';
import AnimalsTable from './AnimalsTable';
import PaginationRounded from './PaginationRounded';
import { AnimalsViewType } from './ViewSelector';

const DEFAULT_PAGE_SIZE = 4;
interface AnimalsListContainerProps {
    viewType: AnimalsViewType;
    setAnimalsCount: (value: number) => void;
}

export default function AnimalsListContainer({ viewType, setAnimalsCount }: AnimalsListContainerProps) {
    const { pathname } = useLocation();

    const [pageSize, setPageSize] = useState(DEFAULT_PAGE_SIZE);
    const [currentPage, setCurrentPage] = useState(0);
    const dispatch = useDispatch();

    const { page, isLoading, error } = useSelector((state: RootStateOrAny) => state.animalsAll);
    const animalObjs: Animal[] = page.objs;

    function filterArgs(args: QueryAnimalsArgs): QueryAnimalsArgs {
        if (pathname === '/favorites') {
            return { isFavoriteOnly: true, ...args };
        }
        return args;
    }

    useEffect(() => {
        dispatch(
            fetchAnimalsIfNewContext(
                filterArgs({
                    first: pageSize,
                    after: '',
                }),
                pathname
            )
        );
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [pageSize]);

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
            fetchAnimals(
                filterArgs({
                    first,
                    after: '',
                })
            )
        );
    }

    function loadNextPage() {
        dispatch(
            fetchAnimals(
                filterArgs({
                    first: pageSize,
                    after: page.info.endCursor,
                })
            )
        );
    }

    function loadPreviousPage() {
        dispatch(
            fetchAnimals(
                filterArgs({
                    first: undefined,
                    after: undefined,
                    last: pageSize,
                    before: page.info.startCursor,
                })
            )
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
