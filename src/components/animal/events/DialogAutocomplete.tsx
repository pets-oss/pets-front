import React from 'react';

import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

interface Props {
    options: string[];
    label: string;
}

export default function NewEventAutocomplete({ options, label }: Props) {
    return (
        <Autocomplete
            id={`${label}`}
            options={options}
            getOptionLabel={option => option}
            style={{ width: 300 }}
            renderInput={params => <TextField {...params} label={label} variant="outlined" />}
        />
    );
}
