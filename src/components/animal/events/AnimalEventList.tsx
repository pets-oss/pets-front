import React from 'react';

import { Box, List, ListItem, Typography } from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { Event } from '../../../graphql/types';
import EventCard from './EventCard';

const useStyles = makeStyles(() =>
    createStyles({
        root: {
            width: '100%',
        },
    })
);

interface AnimalEventListProps {
    events: Event[];
}

function AnimalEventList({ events }: AnimalEventListProps) {
    const classes = useStyles();

    if (!events?.length) {
        return (
            <Box mt={2}>
                <Typography variant="body1">No events found.</Typography>
            </Box>
        );
    }

    return (
        <List className={classes.root}>
            {events.map(event => (
                <ListItem key={event.id} disableGutters>
                    <EventCard event={event} />
                </ListItem>
            ))}
        </List>
    );
}

export default AnimalEventList;
