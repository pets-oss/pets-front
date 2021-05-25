import React, { useState } from 'react';

import {
    Box,
    Button,
    DialogActions,
    DialogContent,
    DialogTitle,
    Grid,
    useMediaQuery,
    useTheme,
} from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import FilterListIcon from '@material-ui/icons/FilterList';
import Filter from './Filter';
import { FilterSelectInput } from './FilterSelectInput';

export default function AnimalFilters({ filters, onReset, onApply, count }: AnimalFiltersProps) {
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

    const [dialogOpen, setDialogOpen] = useState(false);
    const [activeFilters, setActiveFilters] = useState(filters);

    const handleDialogOpen = () => {
        setDialogOpen(true);
    };

    const handleDialogClose = () => {
        setDialogOpen(false);
    };

    const handleFilterChange = (filter: Filter, value: string) => {
        const index = activeFilters.indexOf(filter);
        filter.value = value;
        filter.displayValue = filter.options.filter(option => option.value === value)[0].title;
        setActiveFilters([...activeFilters.slice(0, index), filter, ...activeFilters.slice(index + 1)]);
    };

    const handleResetFilters = () => {
        const newFilters = [...activeFilters];
        newFilters.forEach(filter => {
            filter.value = undefined;
            filter.displayValue = undefined;
        });
        setActiveFilters(newFilters);
        onReset(newFilters);
    };

    const handleApplyFilters = () => {
        handleDialogClose();
        onApply(activeFilters);
    };

    return (
        <Grid container alignItems="center" spacing={1}>
            <Grid item>{count}</Grid>
            <Grid item>
                <FilterListIcon onClick={handleDialogOpen} />
            </Grid>
            <Dialog
                fullWidth
                maxWidth="sm"
                open={dialogOpen}
                fullScreen={fullScreen}
                onClose={handleDialogClose}
                aria-labelledby="filter-dialog-title"
            >
                <Box display="flex" justifyContent="space-between" alignItems="center" marginRight={2.6}>
                    <DialogTitle id="filter-dialog-title">Search Filters</DialogTitle>
                    <Button onClick={handleResetFilters}>RESET ALL</Button>
                </Box>
                <DialogContent>
                    {filters.map(filter => (
                        <FilterSelectInput
                            key={filter.name}
                            value={filter.value}
                            label={filter.name}
                            options={filter.options}
                            onChange={value => handleFilterChange(filter, value)}
                        />
                    ))}
                </DialogContent>
                <Box marginBottom={2} marginRight={2}>
                    <DialogActions>
                        <Button variant="outlined" onClick={handleDialogClose}>
                            Cancel
                        </Button>
                        <Button variant="contained" onClick={handleApplyFilters} color="secondary" autoFocus>
                            Apply
                        </Button>
                    </DialogActions>
                </Box>
            </Dialog>
        </Grid>
    );
}

interface AnimalFiltersProps {
    filters: Filter[];
    onReset: (filters: Filter[]) => void;
    onApply: (filters: Filter[]) => void;
    count: number;
}
