import React, { ChangeEvent } from 'react';

import { makeStyles, TextField } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
        marginBottom: theme.spacing(2),
        width: 327,
    },
}));

export default function InputWithoutOptions({ inputType, label, onChange, customStyles }: Props) {
    const classes = useStyles();
    return (
        <TextField
            id={`${label}`}
            className={classes.root}
            style={customStyles}
            variant="outlined"
            label={label}
            type={inputType}
            placeholder=""
            onChange={(event: ChangeEvent<HTMLInputElement>) => onChange(event.target.value)}
        />
    );
}

interface Props {
    inputType: 'text' | 'number' | 'date';
    label: string;
    onChange: (value: unknown) => void;
    customStyles?: any;
}
