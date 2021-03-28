import clsx from 'clsx';
import React, { useState } from 'react';

import { Card, CardContent, CardHeader, Collapse, IconButton, Typography } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import green from '@material-ui/core/colors/green';
import makeStyles from '@material-ui/core/styles/makeStyles';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { Event } from '../../../graphql/types';
import { getFormattedDate } from '../../../utils/date';

export default function EventCard({ event }: AnimalCardProps) {
    const classes = useStyles();
    const [expanded, setExpanded] = useState(false);
    const eventName = event.type?.type || '';
    const header = `Event type - ${eventName}`;
    const subHeader = `${event.dateTime ? getFormattedDate(event.dateTime) : '-'} / Author`;

    return (
        <Card
            className={clsx(classes.root, {
                'MuiPaper-elevation5': expanded,
            })}
        >
            <CardHeader
                avatar={
                    <Avatar className={clsx(expanded && classes.avatarExpanded)} aria-label="event" alt="event">
                        <LocalHospitalIcon />
                    </Avatar>
                }
                title={
                    <Typography component="h6" className={classes.headerText} noWrap>
                        {header}
                    </Typography>
                }
                subheader={subHeader}
                action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon />
                    </IconButton>
                }
                onClick={() => setExpanded(!expanded)}
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
        '&:hover': {
            backgroundColor: green[100],
        },
    },
    headerText: {
        maxWidth: 150,
        [theme.breakpoints.up('md')]: {
            maxWidth: 350,
        },
        [theme.breakpoints.up('lg')]: {
            maxWidth: 600,
        },
        fontSize: 20,
        lineHeight: '24px',
        fontWeight: 600,
    },
    content: {
        wordBreak: 'break-word',
    },
    label: {
        fontWeight: theme.typography.fontWeightBold,
    },
    avatarExpanded: {
        backgroundColor: theme.palette.primary.light,
    },
}));

interface AnimalCardProps {
    event: Event;
}
