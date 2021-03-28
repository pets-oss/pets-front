import { loader } from 'graphql.macro';
import React, { useEffect, useState } from 'react';

import { useQuery } from '@apollo/client';
import { Grid } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import useTheme from '@material-ui/core/styles/useTheme';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import AnimalsListContainer from '../components/animal/AnimalsListContainer';
import CreateButton from '../components/animal/create/CreateButton';
import AnimalFiltersChips from '../components/animal/filters/AnimalFilterChips';
import AnimalFilters from '../components/animal/filters/AnimalFilters';
import Filter, { FilterOption } from '../components/animal/filters/Filter';
import ViewSelector, { AnimalsViewType } from '../components/animal/ViewSelector';
import { Animal } from '../graphql/types';
import Page from './Page';

const GET_ANIMALS_QUERY = loader('../graphql/queries/animal-list.graphql');

interface Response {
    animals: Animal[];
}

function AnimalsPage() {
    const theme = useTheme();
    // TODO: extract selectedViewType to context or localStore
    const [viewType, setViewType] = useState<AnimalsViewType>(AnimalsViewType.LIST);
    const mobile = useMediaQuery(theme.breakpoints.down('sm'));
    const [filters, setFilters] = useState<Filter[]>(INITIAL_FILTERS);

    const { loading, error, data } = useQuery<Response>(GET_ANIMALS_QUERY);

    useEffect(() => {
        if (mobile && viewType === AnimalsViewType.TABLE) {
            setViewType(AnimalsViewType.LIST);
        }
    }, [mobile, viewType]);

    const handleViewChange = () => {
        setViewType(viewType === AnimalsViewType.TABLE ? AnimalsViewType.LIST : AnimalsViewType.TABLE);
    };

    const handleClearAllFilters = (emptyFilters: Filter[]) => {
        setFilters(emptyFilters);
        handleSubmitFilters(emptyFilters);
    };

    const handleRemoveFilter = (filter: Filter) => {
        const index = filters.indexOf(filter);
        filter.value = undefined;
        filter.displayValue = undefined;
        const newFilters = [...filters.slice(0, index), filter, ...filters.slice(index + 1)];
        setFilters(newFilters);
        handleSubmitFilters(newFilters);
    };

    const handleApplyFilters = (activeFilters: Filter[]) => {
        setFilters(activeFilters);
        handleSubmitFilters(activeFilters);
    };

    const handleSubmitFilters = (activeFilters: Filter[]) => {
        // eslint-disable-next-line no-console
        console.log('Updating animals based on active filters...');
        // eslint-disable-next-line no-console
        console.log(activeFilters.filter(filter => filter.value));
    };

    return (
        <Page
            title="Animals List"
            topSection={
                <TopSection
                    viewType={viewType}
                    onChange={handleViewChange}
                    mobile={mobile}
                    filters={filters}
                    onFiltersClear={handleClearAllFilters}
                    onFiltersApply={handleApplyFilters}
                    onFilterRemove={handleRemoveFilter}
                    data={data}
                />
            }
        >
            <AnimalsListContainer viewType={viewType} loading={loading} error={error} data={data} />
        </Page>
    );
}

function TopSection({
    viewType,
    onChange,
    mobile,
    filters,
    onFiltersClear,
    onFiltersApply,
    onFilterRemove,
    data,
}: TopSectionProps) {
    return (
        <Grid container spacing={2} alignItems="center">
            <Grid container item xs={10} alignItems="center" spacing={2}>
                <CreateButton />
                {!mobile && (
                    <>
                        <Grid item />
                        <Divider flexItem orientation="vertical" />
                    </>
                )}
                <Grid item>
                    <AnimalFilters
                        filters={filters}
                        onReset={onFiltersClear}
                        onApply={onFiltersApply}
                        count={data?.animals.length ?? 0}
                    />
                </Grid>
                <Grid item>
                    <AnimalFiltersChips filters={filters} onDelete={onFilterRemove} onClearFilters={onFiltersClear} />
                </Grid>
            </Grid>
            {!mobile && (
                <Grid item xs={2} style={{ textAlign: 'right' }}>
                    <ViewSelector value={viewType} onChange={onChange} />
                </Grid>
            )}
        </Grid>
    );
}

export default AnimalsPage;

interface TopSectionProps {
    viewType: AnimalsViewType;
    onChange: () => void;
    mobile: boolean;
    filters: Filter[];
    onFiltersClear: (filters: Filter[]) => void;
    onFiltersApply: (filters: Filter[]) => void;
    onFilterRemove: (filter: Filter) => void;
    data: Response | undefined;
}

const SPECIES: FilterOption[] = [
    {
        value: 'dog',
        title: 'Dog',
    },
    {
        value: 'cat',
        title: 'Cat',
    },
];

const GENDERS: FilterOption[] = [
    {
        value: 'male',
        title: 'Male',
    },
    {
        value: 'female',
        title: 'Female',
    },
];

const COLORS: FilterOption[] = [
    {
        value: 'green',
        title: 'Green',
    },
    {
        value: 'black',
        title: 'Black',
    },
    {
        value: 'red',
        title: 'Red',
    },
];

const BREEDS: FilterOption[] = [
    {
        value: 'german_shephard',
        title: 'German Shephard',
    },
    {
        value: 'bulldog',
        title: 'Bulldog',
    },
    {
        value: 'poodle',
        title: 'Poodle',
    },
    {
        value: 'labdaror_retriever',
        title: 'Labrador Retriever',
    },
];

// can provide any possible dynamic filters from the backend
const INITIAL_FILTERS: Filter[] = [
    {
        name: 'Species',
        options: SPECIES,
    },
    {
        name: 'Gender',
        options: GENDERS,
    },
    {
        name: 'Color',
        options: COLORS,
    },
    {
        name: 'Breed',
        options: BREEDS,
    },
];
