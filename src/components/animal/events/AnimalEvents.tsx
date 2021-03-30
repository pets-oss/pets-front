import React, { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { Box, Button, makeStyles, Typography } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import { Event } from '../../../graphql/types';
import AnimalEventFilters, { EVENT_FILTER_ALL, EventCategory } from './AnimalEventFilters';
import AnimalEventForm from './AnimalEventForm';
import AnimalEventList from './AnimalEventList';
import AnimalEventSorting, { EventSortingMode } from './AnimalEventSorting';

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
    const params = useParams<{ id: string }>();
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

    const [filteredEvents, setFilteredEvents] = useState([...events].sort(sortByDateComparator));

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

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
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

    const categories = ['General', 'Medical'];
    const handleCreate = formValues => {
        setFilteredEvents([
            ...filteredEvents,
            {
                id: Math.random(),
                animal: parseInt(params.id, 10),
                type: formValues.typeOption,
                expenses: formValues.expense,
                dateTime: formValues.date,
                comments: formValues.comment,
                category: formValues.category,
            },
        ]);
        handleClose();
    };
    return (
        <Box className={classes.root}>
            <AnimalEventForm
                handleCreate={handleCreate}
                handleClose={handleClose}
                open={open}
                typeOptions={typeOptions}
                categories={categories}
            />
            <Box mb={2} display="flex" justifyContent="space-between" alignItems="center">
                <Typography variant="h5" component="h3">
                    Events
                </Typography>
                <Button color="primary" variant="contained" startIcon={<AddIcon />} onClick={handleClickOpen}>
                    Create
                </Button>
            </Box>
            <AnimalEventFilters activeFilter={activeFilter} onChange={handleFilterChange} />
            <AnimalEventSorting sortingMode={activeSort} onChange={handleSortChange} />
            <AnimalEventList events={filteredEvents} />
        </Box>
    );
}

interface AnimalEventsProps {
    events: Event[];
}
