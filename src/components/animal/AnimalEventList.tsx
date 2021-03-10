import React from 'react';

import { List, ListItem } from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { Event } from '../../graphql/types';
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
    return (
        <List className={classes.root}>
            {events.map(event => (
                <ListItem key={event.id}>
                    <EventCard event={event} />
                </ListItem>
            ))}
        </List>
    );
}

export default AnimalEventList;
