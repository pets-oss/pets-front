import React, { useCallback, useEffect, useState } from 'react';

import { Box, makeStyles } from '@material-ui/core';
import { Event } from '../../../graphql/types';
import AnimalEventFilters, { EVENT_FILTER_ALL, EventCategory } from './AnimalEventFilters';
import AnimalEventList from './AnimalEventList';
import AnimalEventSorting, { EventSortingMode } from './AnimalEventSorting';
import EventDialog from './EventDialog';

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

export default function AnimalEvents({ events }: AnimalEventsProps) {
    const classes = useStyles();
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
            <EventDialog onCreate={event => setFilteredEvents([...filteredEvents, event])} />
            <AnimalEventFilters activeFilter={activeFilter} onChange={handleFilterChange} />
            <AnimalEventSorting sortingMode={activeSort} onChange={handleSortChange} />
            <AnimalEventList events={filteredEvents} />
        </Box>
    );
}

interface AnimalEventsProps {
    events: Event[];
}
