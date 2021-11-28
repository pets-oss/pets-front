import { loader } from 'graphql.macro';
import React from 'react';

import { useQuery } from '@apollo/client';
import { Box, Skeleton, styled, Typography } from '@mui/material';
import { Event } from '../../graphql/types';
import { sortEventsByDate } from '../../utils/events';
import AnimalEventList from '../animal/events/AnimalEventList';

const GET_EVENTS_QUERY = loader('../../graphql/queries/events-list.graphql');

interface Response {
    events: Event[];
}

const PREFIX = 'RecentEventsContainer';

const classes = {
    root: `${PREFIX}-root`,
    title: `${PREFIX}-title`,
};

const Root = styled('div')(() => ({
    [classes.root]: {
        width: '100%',
    },
    [classes.title]: {
        fontWeight: 500,
        marginBottom: '-8px',
    },
}));

export default function RecentEventsContainer() {
    const { loading, error, data } = useQuery<Response>(GET_EVENTS_QUERY);
    if (loading) {
        return <Skeleton animation="wave" height="70vh" width="100%" />;
    }
    if (error) {
        // TODO: replace with proper UI elements
        return <p>Error!</p>;
    }
    if (!data?.events.length) {
        // TODO: replace with proper UI elements
        return <p>No data</p>;
    }

    const events = [...data.events].sort(sortEventsByDate);

    return (
        <Root>
            <Box className={classes.root} mt={5}>
                <Typography noWrap variant="h4" color="textPrimary" className={classes.title}>
                    Recent events
                </Typography>
                <AnimalEventList events={events} />
            </Box>
        </Root>
    );
}
