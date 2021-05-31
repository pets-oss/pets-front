import React from 'react';

import { Chip, Grid, makeStyles } from '@material-ui/core';
import { EventGroup } from '../../../graphql/types';

export const EVENT_FILTER_ALL = 'All';

export type EventCategory = EventGroup | 'All';

const useStyles = makeStyles(() => ({
    button: {
        border: 'none',
        backgroundColor: 'transparent',
    },
}));

export default function AnimalEventFilters({ activeFilter, onChange }: AnimalEventFiltersProps) {
    return (
        <Grid container spacing={2}>
            <Filter
                label={EVENT_FILTER_ALL}
                active={activeFilter === EVENT_FILTER_ALL}
                onClick={() => onChange(EVENT_FILTER_ALL)}
            />
            {Object.keys(EventGroup).map(category => (
                <Filter
                    key={category}
                    label={category}
                    active={activeFilter === EventGroup[category]}
                    onClick={() => onChange(EventGroup[category])}
                />
            ))}
        </Grid>
    );
}

function Filter({ label, active, onClick }: FilterProps) {
    const classes = useStyles();

    return (
        <Grid item>
            <button className={classes.button} type="button" onClick={() => onClick(label as any)}>
                <Chip label={label} clickable color={active ? 'primary' : 'default'} />
            </button>
        </Grid>
    );
}

interface AnimalEventFiltersProps {
    activeFilter: EventCategory;
    onChange: (value: EventCategory) => void;
}

interface FilterProps {
    label: string;
    active: boolean;
    onClick: (value: EventCategory) => void;
}
