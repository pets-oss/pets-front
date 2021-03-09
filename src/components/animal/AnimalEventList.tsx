import React from 'react';

import { List, ListItem } from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import EventCard from './EventCard';

const useStyles = makeStyles(() =>
    createStyles({
        root: {
            width: '100%',
        },
    })
);

function AnimalEventList() {
    const classes = useStyles();
    return (
        <List className={classes.root}>
            {[0, 1, 2, 3].map((id: number) => {
                return (
                    <ListItem key={id} disableGutters>
                        <EventCard
                            eventName={`Event${id}`}
                            date={`2020-01-0${id}`}
                            author={`Author${id}`}
                            description={`Description${id}`}
                        />
                    </ListItem>
                );
            })}
        </List>
    );
}

export default AnimalEventList;
