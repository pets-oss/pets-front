import React from 'react';

import DoneIcon from '@mui/icons-material/Done';
import { Chip, Grid } from '@mui/material';
import { EventGroup } from '../../../graphql/types';

export const EVENT_FILTER_ALL = 'All';

export type EventCategory = EventGroup | 'All';

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
    return (
        <Grid item>
            <button
                style={{
                    border: 'none',
                    backgroundColor: 'transparent',
                }}
                type="button"
                onClick={() => onClick(label as any)}
            >
                <Chip
                    label={label}
                    variant="outlined"
                    clickable
                    color="secondary"
                    icon={active ? <DoneIcon /> : undefined}
                    sx={{ fontWeight: active ? 'bold' : 'regular' }}
                />
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
