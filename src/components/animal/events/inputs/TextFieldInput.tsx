import React, { ChangeEvent } from 'react';

import { makeStyles, TextField } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
        marginBottom: theme.spacing(2),
        width: 327,
    },
}));

export default function TextFieldInput({
    inputType,
    label,
    onChange,
    customStyles,
    isError,
    multiline,
    rowsNum,
    onFocus,
    onBlur,
}: Props) {
    const classes = useStyles();
    return (
        <TextField
            id={`${label}`}
            className={`${classes.root}`}
            color="secondary"
            fullWidth
            style={customStyles}
            variant="outlined"
            multiline={!!multiline}
            rows={rowsNum}
            label={label}
            type={inputType}
            onChange={(event: ChangeEvent<HTMLInputElement>) => onChange(event.target.value)}
            error={isError}
            required
            helperText={isError ? 'Required field' : null}
            onFocus={onFocus}
            onBlur={onBlur}
        />
    );
}

interface Props {
    inputType: string;
    label: string;
    onChange: (value: unknown) => void;
    customStyles?: any;
    isError: boolean;
    multiline?: boolean;
    rowsNum?: number;
    onFocus?: () => void;
    onBlur?: () => void;
}
