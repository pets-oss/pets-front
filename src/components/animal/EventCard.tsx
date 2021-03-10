import clsx from 'clsx';
import React, { useState } from 'react';

import { Card, CardContent, CardHeader, Collapse, IconButton, Typography } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import makeStyles from '@material-ui/core/styles/makeStyles';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Event } from '../../graphql/types';
import { getFormattedDate } from '../../utils/date';

export default function EventCard({ event }: AnimalCardProps) {
    const classes = useStyles();
    const [expanded, setExpanded] = useState(false);
    const eventName = event.type?.type || '';

    return (
        <Card className={classes.root}>
            <CardHeader
                avatar={
                    <Avatar aria-label="event" alt="event">
                        {eventName.charAt(0)}
                    </Avatar>
                }
                title={
                    <Typography noWrap className={classes.eventName}>
                        {eventName}
                    </Typography>
                }
                action={
                    <IconButton
                        className={clsx(classes.expand, {
                            [classes.expandOpen]: expanded,
                        })}
                        onClick={() => setExpanded(!expanded)}
                        aria-expanded={expanded}
                        aria-label="show more"
                    >
                        <ExpandMoreIcon />
                    </IconButton>
                }
                subheader={<Typography noWrap>{event.dateTime ? getFormattedDate(event.dateTime) : '-'}</Typography>}
            />
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent className={classes.content}>
                    <Typography color="textPrimary" className={classes.label}>
                        Expenses:
                    </Typography>
                    <Typography paragraph color="textSecondary">
                        {event.expenses || '-'}
                    </Typography>
                    <Typography color="textPrimary" className={classes.label}>
                        Comments:
                    </Typography>
                    <Typography paragraph color="textSecondary">
                        {event.comments || '-'}
                    </Typography>
                    <Typography color="textPrimary" className={classes.label}>
                        Author:
                    </Typography>
                    <Typography paragraph color="textSecondary">
                        -
                    </Typography>
                </CardContent>
            </Collapse>
        </Card>
    );
}

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    eventName: {
        maxWidth: 160,
        [theme.breakpoints.up('md')]: {
            maxWidth: 350,
        },
        [theme.breakpoints.up('lg')]: {
            maxWidth: 600,
        },
    },
    content: {
        wordBreak: 'break-word',
    },
    label: {
        fontWeight: theme.typography.fontWeightBold,
    },
}));

interface AnimalCardProps {
    event: Event;
}
