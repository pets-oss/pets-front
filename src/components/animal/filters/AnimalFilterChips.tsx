import React from 'react';

import { Button, Chip, Grid } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../../store';
import { deleteFilter, resetFilters } from '../../../store/filters';

const FILTER_PROPS = ['species', 'gender', 'breed'];

export default function AnimalFiltersChips() {
    const dispatch = useAppDispatch();
    const filters = useAppSelector(state => state.filters);

    const hasFilters = Object.keys(filters).filter(key => FILTER_PROPS.includes(key)).length > 0;

    const handleClearFilters = () => {
        dispatch(resetFilters());
    };

    const onDelete = type => {
        dispatch(deleteFilter(type));
    };

    const filterChip = (type, filter) => (
        <Grid item key={`${type}-${filter.id}`}>
            <Chip label={filter.value} variant="outlined" color="primary" onDelete={() => onDelete(type)} />
        </Grid>
    );

    if (hasFilters) {
        return (
            <Grid container spacing={1}>
                {Object.keys(filters).map(type => {
                    if (filters[type]) {
                        return filterChip(type, filters[type]);
                    }
                })}
                <Grid item>
                    <Button onClick={handleClearFilters} color="primary" size="small" sx={{ ml: 2 }}>
                        Clear
                    </Button>
                </Grid>
            </Grid>
        );
    } else {
        return null;
    }
}
