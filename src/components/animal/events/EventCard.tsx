import React, { useState } from 'react';

import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Avatar, Card, CardContent, CardHeader, Collapse, IconButton, styled, Typography } from '@mui/material';
import { Event } from '../../../graphql/types';
import { getFormattedDate } from '../../../utils/date';
import { getEventDetails } from '../../../utils/events';
import ParamTable from '../ParamTable';

const PREFIX = 'EventCard';
const classes = {
    headerText: `${PREFIX}-headerText`,
    content: `${PREFIX}-content`,
};
const StyledCard = styled(Card)(({ theme }) => ({
    width: '100%',
    [classes.headerText]: {
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
    [classes.content]: {
        wordBreak: 'break-word',
    },
}));

export default function EventCard({ event }: AnimalCardProps) {
    const [expanded, setExpanded] = useState(false);
    const eventName = event.type || '';
    const header = `Event type - ${eventName}`;
    const subHeader = `${event.dateTime ? getFormattedDate(event.dateTime) : '-'} / Author`;
    const eventDetails = getEventDetails(event);

    return (
        <StyledCard>
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
                    <ParamTable details={eventDetails} />
                </CardContent>
            </Collapse>
        </StyledCard>
    );
}

interface AnimalCardProps {
    event: Event;
}
