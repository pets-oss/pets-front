import { loader } from 'graphql.macro';
import React from 'react';

import { useQuery } from '@apollo/client';
import Box from '@material-ui/core/Box';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Typography from '@material-ui/core/Typography';
import Skeleton from '@material-ui/lab/Skeleton';
import { Event } from '../../graphql/types';
import { sortEventsByDate } from '../../utils/events';
import AnimalEventList from '../animal/events/AnimalEventList';

const GET_EVENTS_QUERY = loader('../../graphql/queries/events-list.graphql');

interface EventsResponseItem {
    all: Event[];
}

interface Response {
    events: EventsResponseItem[];
}

export default function RecentEventsContainer() {
    const classes = useStyles();
    const { loading, error, data } = useQuery<Response>(GET_EVENTS_QUERY, { variables: { language: 'lt' } });
    if (loading) {
        return <Skeleton animation="wave" height="70vh" />;
    }
    if (error) {
        // TODO: replace with proper UI elements
        return <p>Error!</p>;
    }
    if (!data?.events.length || !data.events[0].all?.length) {
        // TODO: replace with proper UI elements
        return <p>No data</p>;
    }

    const events = [...data.events[0].all].sort(sortEventsByDate);

    return (
        <Box className={classes.root} mt={5}>
            <Typography noWrap variant="h4" color="textPrimary" className={classes.title}>
                Recent events
            </Typography>
            <AnimalEventList events={events} />
        </Box>
    );
}

const useStyles = makeStyles(() => ({
    root: {
        width: '100%',
    },
    title: {
        fontWeight: 500,
        marginBottom: '-8px',
    },
}));
