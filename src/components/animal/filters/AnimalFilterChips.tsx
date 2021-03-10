import React from 'react';

import { Button, Chip, Grid } from '@material-ui/core';
import Filter from './Filter';

export default function AnimalFiltersChips({ filters, onDelete, onClearFilters }: AnimalFiltersChipsProps) {
    const hasFilters = filters.some(filter => filter.value);

    if (!hasFilters) {
        return null;
    }

    const handleClearFilters = () => {
        const newFilters = [...filters];
        newFilters.forEach(filter => {
            filter.value = undefined;
            filter.displayValue = undefined;
        });
        onClearFilters(newFilters);
    };

    return (
        <Grid container spacing={1}>
            {filters
                .filter(filter => filter.value)
                .map(filter => (
                    <Grid item key={filter.name}>
                        <Chip label={filter.displayValue} onDelete={() => onDelete(filter)} />
                    </Grid>
                ))}
            <Button onClick={handleClearFilters}>Clear</Button>
        </Grid>
    );
}

interface AnimalFiltersChipsProps {
    filters: Filter[];
    onDelete: (filter: Filter) => void;
    onClearFilters: (filters: Filter[]) => void;
}
