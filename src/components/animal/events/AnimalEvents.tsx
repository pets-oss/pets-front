import React, { useCallback, useEffect, useMemo, useState } from 'react';

import AddIcon from '@mui/icons-material/Add';
import { Box, Button, styled, Typography } from '@mui/material';
import { Event } from '../../../graphql/types';
import AnimalEventDialog from './AnimalEventDialog';
import AnimalEventFilters, { EVENT_FILTER_ALL, EventCategory } from './AnimalEventFilters';
import AnimalEventList from './AnimalEventList';
import AnimalEventSorting, { EventSortingMode } from './AnimalEventSorting';

const StyledBox = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.tertiary.main,
    // Full bleed effect on mobile
    marginTop: theme.spacing(2),
    marginLeft: -theme.spacing(2),
    marginRight: -theme.spacing(2),
    [theme.breakpoints.up('lg')]: {
        margin: 0,
    },
}));

const TYPE_OPTIONS = [
    'Ženklinimas ir įregistravimas',
    'Laikytojo pasikeitimas',
    'Laikymo vietos pasikeitimas',
    'Savininko pasikeitimas',
    'Dingimas',
    'Suradimas',
    'Nugaišimas',
    'Nugaišinimas',
    'Išvežimas',
    'Vakcinavimas',
    'Augintinio agresyvumas',
];

const CATEGORY_OPTIONS = ['General', 'Medical'];

export default function AnimalEvents({ events }: AnimalEventsProps) {
    const [activeFilter, setActiveFilter] = useState<EventCategory>(EVENT_FILTER_ALL);
    const [activeSort, setActiveSort] = useState<EventSortingMode>(EventSortingMode.DESCENDING);
    const [dialogOpen, setDialogOpen] = useState(false);

    const handleDialogOpen = () => {
        setDialogOpen(true);
    };

    const sortByDateComparator = useCallback(
        (event1: Event, event2: Event) => {
            if (!event1 || !event2) {
                return 0;
            }

            const date1 = parseInt(event1.dateTime as string, 10);
            const date2 = parseInt(event2.dateTime as string, 10);
            if (activeSort === EventSortingMode.DESCENDING) {
                return date2 - date1;
            }
            return date1 - date2;
        },
        [activeSort]
    );

    const memoizedEvents = useMemo(() => {
        return [...events].sort(sortByDateComparator);
    }, [events, sortByDateComparator]);

    const [filteredEvents, setFilteredEvents] = useState(memoizedEvents);

    const handleFilterChange = (value: EventCategory) => {
        setActiveFilter(value);
    };

    const handleSortChange = (sortingMode: EventSortingMode) => {
        setActiveSort(sortingMode);
    };

    useEffect(() => {
        setFilteredEvents(
            memoizedEvents.filter(event => event.group === activeFilter || activeFilter === EVENT_FILTER_ALL)
        );
    }, [activeFilter, memoizedEvents]);

    return (
        <StyledBox>
            <Box mb={2} display="flex" justifyContent="space-between" alignItems="center">
                <Typography variant="h2">Events</Typography>
                <Button color="secondary" variant="contained" startIcon={<AddIcon />} onClick={handleDialogOpen}>
                    Create
                </Button>
                <AnimalEventDialog
                    dialogOpen={dialogOpen}
                    categoryOptions={CATEGORY_OPTIONS}
                    typeOptions={TYPE_OPTIONS}
                    onCancel={showDialog => {
                        setDialogOpen(showDialog);
                    }}
                    onCreate={eventObject => {
                        setFilteredEvents([...filteredEvents, eventObject]);
                    }}
                />
            </Box>
            <AnimalEventFilters activeFilter={activeFilter} onChange={handleFilterChange} />
            <AnimalEventSorting sortingMode={activeSort} onChange={handleSortChange} />
            <AnimalEventList events={filteredEvents} />
        </StyledBox>
    );
}

interface AnimalEventsProps {
    events: Event[];
}
