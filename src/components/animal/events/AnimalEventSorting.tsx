import React from 'react';

import SortIcon from '@mui/icons-material/Sort';
import { Box, IconButton, Typography } from '@mui/material';

export default function AnimalEventSorting({ sortingMode, onChange }: AnimalEventSortingProps) {
    const handleClick = () => {
        if (sortingMode === EventSortingMode.DESCENDING) {
            onChange(EventSortingMode.ASCENDING);
        } else {
            onChange(EventSortingMode.DESCENDING);
        }
    };

    return (
        <Box mt={1} display="flex" alignItems="center">
            <IconButton aria-label="Sort button" onClick={handleClick}>
                <SortIcon />
            </IconButton>
            <Typography variant="subtitle1">Sort by date ({sortingMode})</Typography>
        </Box>
    );
}

interface AnimalEventSortingProps {
    sortingMode: EventSortingMode;
    onChange: (value: EventSortingMode) => void;
}

export enum EventSortingMode {
    DESCENDING = 'descending',
    ASCENDING = 'ascending',
}
