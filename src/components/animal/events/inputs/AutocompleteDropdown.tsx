import React from 'react';

import { makeStyles } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

const useStyles = makeStyles(theme => ({
    root: {
        marginBottom: theme.spacing(2),
        width: 327,
    },
}));

export default function AutocompleteDropdown({ options, label, onChange, isError }: Props) {
    const classes = useStyles();
    return (
        <Autocomplete
            id={`${label}`}
            className={classes.root}
            options={options}
            getOptionLabel={option => option}
            onChange={(_, value) => onChange(value)}
            renderInput={params => (
                <TextField
                    {...params}
                    label={label}
                    variant="outlined"
                    color="secondary"
                    error={isError}
                    required
                    helperText={isError ? 'Šis laukas yra privalomas' : null}
                />
            )}
        />
    );
}

interface Props {
    options: string[];
    label: string;
    onChange: (value: string | null) => void;
    isError: boolean;
}
