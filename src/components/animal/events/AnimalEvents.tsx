import React, { useCallback, useEffect, useMemo, useState } from 'react';

import { Box, Button, makeStyles, Typography } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import { Event } from '../../../graphql/types';
import AnimalEventFilters, { EVENT_FILTER_ALL, EventCategory } from './AnimalEventFilters';
import AnimalEventList from './AnimalEventList';
import AnimalEventSorting, { EventSortingMode } from './AnimalEventSorting';
import NewEventDialog from './NewEventDialog';

const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: theme.palette.tertiary.main,
        // Full bleed effect on mobile
        marginTop: theme.spacing(2),
        marginLeft: -theme.spacing(2),
        marginRight: -theme.spacing(2),
        [theme.breakpoints.up('lg')]: {
            margin: 0,
        },
    },
}));

const TypeOptions = [
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

const Category = ['General', 'Medical'];

export default function AnimalEvents({ events }: AnimalEventsProps) {
    const classes = useStyles();
    const [newEventDialogVisible, setNewEventDialogVisible] = useState<boolean>(false);
    const [activeFilter, setActiveFilter] = useState<EventCategory>(EVENT_FILTER_ALL);
    const [activeSort, setActiveSort] = useState<EventSortingMode>(EventSortingMode.DESCENDING);

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

    const [filteredEvents, setFilteredEvents] = useState(events.sort(sortByDateComparator));

    const showNewEventDialog = useCallback(() => setNewEventDialogVisible(true), []);
    const hideNewEventDialog = useCallback(() => setNewEventDialogVisible(false), []);
    const onCreateNewEvent = useCallback(
        newEvent => {
            setFilteredEvents(oldEvents => [...oldEvents, newEvent]);
            hideNewEventDialog();
        },
        [hideNewEventDialog]
    );

    const newEventDialogOptions = useMemo(() => ({ types: TypeOptions, categories: Category }), []);

    const handleFilterChange = (value: EventCategory) => {
        setActiveFilter(value);
    };

    const handleSortChange = (sortingMode: EventSortingMode) => {
        setActiveSort(sortingMode);
    };

    useEffect(() => {
        setFilteredEvents(
            events
                .filter(event => event.category === activeFilter || activeFilter === EVENT_FILTER_ALL)
                .sort(sortByDateComparator)
        );
    }, [activeFilter, events, sortByDateComparator]);

    return (
        <Box className={classes.root}>
            <Box mb={2} display="flex" justifyContent="space-between" alignItems="center">
                <Typography variant="h5" component="h3">
                    Events
                </Typography>
                <Button onClick={showNewEventDialog} color="primary" variant="contained" startIcon={<AddIcon />}>
                    Create
                </Button>
            </Box>
            <AnimalEventFilters activeFilter={activeFilter} onChange={handleFilterChange} />
            <AnimalEventSorting sortingMode={activeSort} onChange={handleSortChange} />
            <AnimalEventList events={filteredEvents} />
            <NewEventDialog
                visible={newEventDialogVisible}
                options={newEventDialogOptions}
                onCreate={onCreateNewEvent}
                onCancel={hideNewEventDialog}
            />
        </Box>
    );
}

interface AnimalEventsProps {
    events: Event[];
}
