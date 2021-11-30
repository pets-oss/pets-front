import React from 'react';

import ReorderIcon from '@mui/icons-material/Reorder';
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import { ToggleButton, ToggleButtonGroup } from '@mui/material';

interface ViewSelectorProps {
    value: AnimalsViewType;
    onChange: (type: AnimalsViewType) => void;
}

export default function ViewSelector({ value, onChange }: ViewSelectorProps) {
    return (
        <ToggleButtonGroup
            size="small"
            exclusive
            value={value}
            onChange={(e, val) => onChange(val as AnimalsViewType)}
            aria-label="view selector"
        >
            <ToggleButton value={AnimalsViewType.LIST} aria-label={AnimalsViewType.LIST}>
                <ViewModuleIcon />
            </ToggleButton>
            <ToggleButton value={AnimalsViewType.TABLE} aria-label={AnimalsViewType.TABLE}>
                <ReorderIcon />
            </ToggleButton>
        </ToggleButtonGroup>
    );
}

export enum AnimalsViewType {
    LIST = 'list',
    TABLE = 'table',
}
