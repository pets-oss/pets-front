import React from 'react';

import { Box, List, ListItem, styled, Typography } from '@mui/material';
import { Event } from '../../../graphql/types';
import EventCard from './EventCard';

const StyledList = styled(List)(() => ({
    width: '100%',
}));

interface AnimalEventListProps {
    events: Event[];
}

function AnimalEventList({ events }: AnimalEventListProps) {
    if (!events?.length) {
        return (
            <Box mt={2}>
                <Typography variant="body1">No events found.</Typography>
            </Box>
        );
    }

    return (
        <StyledList>
            {events.map(event => (
                <ListItem key={event.id} disableGutters>
                    <EventCard event={event} />
                </ListItem>
            ))}
        </StyledList>
    );
}

export default AnimalEventList;
