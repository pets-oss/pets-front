import React, { useState } from 'react';

import { Card, CardContent, CardHeader, Collapse, IconButton, Typography, Paper } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import purple from '@material-ui/core/colors/purple';
import makeStyles from '@material-ui/core/styles/makeStyles';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { Event } from '../../../graphql/types';
import { getFormattedDate } from '../../../utils/date';
import ParamsTable from '../ParamsTable';

export default function EventCard({ event }: AnimalCardProps) {
    const classes = useStyles();
    const [expanded, setExpanded] = useState(false);
    const eventName = event.type?.type || '';
    const header = `Event type - ${eventName}`;
    const subHeader = `${event.dateTime ? getFormattedDate(event.dateTime) : '-'} / Author`;
    const dynamicElevation = expanded ? 5 : 1;

    const values = [
                        {title: 'Expenses:', value: event.expenses || '-'},
                        {title: 'Comments:', value: event.comments || '-'},
                        {title: 'Author:', value: '-'}
                    ]

    return (
        <Paper className={classes.root} component={Card} elevation={dynamicElevation}>
            <CardHeader
                avatar={
                    <Avatar aria-label="event" alt="event">
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
                    <ParamsTable items={values} />
                </CardContent>
            </Collapse>
        </Paper>
    );
}

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        '&:hover': {
            backgroundColor: purple[100],
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
}));

interface AnimalCardProps {
    event: Event;
}
