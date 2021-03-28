import React from 'react';

import { makeStyles } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

const useStyles = makeStyles(theme => ({
    root: {
        marginBottom: theme.spacing(2),
        width: 327,
        '& input:valid + fieldset': {
            borderColor: 'green',
            borderWidth: 2,
        },
    },
}));

export default function AutocompleteWithOptions({ options, label, onChange }: Props) {
    const classes = useStyles();
    return (
        <Autocomplete
            id={`${label}`}
            className={classes.root}
            options={options}
            getOptionLabel={option => option}
            // eslint-disable-next-line @typescript-eslint/ban-types
            onChange={(event, value) => onChange(value)}
            renderInput={params => <TextField {...params} label={label} variant="outlined" />}
        />
    );
}

interface Props {
    options: string[];
    label: string;
    onChange: (value: string | null) => void;
}
