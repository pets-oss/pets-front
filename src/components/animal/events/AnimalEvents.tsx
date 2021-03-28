import React, { useCallback, useEffect, useState } from 'react';

import { Box, makeStyles, Typography } from '@material-ui/core';
import { Event } from '../../../graphql/types';
import AnimalEventFilters, { EVENT_FILTER_ALL, EventCategory } from './AnimalEventFilters';
import AnimalEventList from './AnimalEventList';
import AnimalEventSorting, { EventSortingMode } from './AnimalEventSorting';
import { CreateNewEventDialog } from './CreateNewEventDialog';

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

const typeOptions = [
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

const category = ['General', 'Medical'];

export default function AnimalEvents({ events, animalId }: AnimalEventsProps) {
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

    const handleCreateNewEvent = (newEvent: Omit<Event, 'animal'>) => {
        const fullEvent = {
            ...newEvent,
            animal: animalId,
        };
        setFilteredEvents([...filteredEvents, fullEvent]);
    };

    return (
        <>
            <Box className={classes.root}>
                <Box mb={2} display="flex" justifyContent="space-between" alignItems="center">
                    <Typography variant="h5" component="h3">
                        Events
                    </Typography>
                    <CreateNewEventDialog
                        typeOptions={typeOptions}
                        categoryOptions={category}
                        onCreate={object => handleCreateNewEvent(object)}
                    />
                </Box>
                <AnimalEventFilters activeFilter={activeFilter} onChange={handleFilterChange} />
                <AnimalEventSorting sortingMode={activeSort} onChange={handleSortChange} />
                <AnimalEventList events={filteredEvents} />
            </Box>
        </>
    );
}

interface AnimalEventsProps {
    events: Event[];
    animalId: number;
}
