import React from 'react';

import { Box, Typography } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import SortIcon from '@material-ui/icons/Sort';

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
