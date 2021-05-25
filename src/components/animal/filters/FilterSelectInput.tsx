import React from 'react';

import { Box, FormControl, InputLabel, MenuItem, Select } from '@material-ui/core';
import { FilterOption } from './Filter';

export function FilterSelectInput({ value, label, options, onChange }: FilterSelectInputProps) {
    const selectId = `${label}-select`;
    const labelId = `${selectId}-label`;

    return (
        <Box marginTop={2.5} marginBottom={2.5}>
            <FormControl variant="outlined" fullWidth size="small" color="secondary">
                <InputLabel id={labelId} htmlFor={selectId}>
                    {label}
                </InputLabel>
                <Select
                    labelId={labelId}
                    color="secondary"
                    id={selectId}
                    label={label}
                    value={value ?? ''}
                    onChange={event => onChange(event.target.value as string)}
                >
                    {options.map(option => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.title}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </Box>
    );
}

interface FilterSelectInputProps {
    value?: string;
    label: string;
    options: FilterOption[];
    onChange: (value: string) => void;
}
