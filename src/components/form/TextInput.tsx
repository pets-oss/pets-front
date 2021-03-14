import React, { useEffect, useState } from 'react';
import { FieldError, useFormContext } from 'react-hook-form';

import { BaseTextFieldProps } from '@material-ui/core';
import makeStyles from '@material-ui/core/styles/makeStyles';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

export default function TextInput({
    label,
    id,
    name,
    placeholder,
    defaultValue,
    fullWidth = false,
    rightHelperText,
    showLettersCount = false,
    maxLength = 25,
    required = false,
    type = 'text',
    InputLabelProps,
}: TextInputProps) {
    const classes = useStyles();
    const { register, errors } = useFormContext();
    const [value, setValue] = useState('');
    const [error, setError] = useState<FieldError | undefined>(undefined);

    const handleChange = (val: string) => {
        if (val.length <= maxLength) {
            setValue(val.trim());
        }
    };

    useEffect(() => {
        if (!name.includes('.')) {
            setError(errors[name]);
            return;
        }
        const [obj, property] = name.split('.');
        setError(errors[obj] ? errors[obj][property] : undefined);
    }, [errors, name]);

    return (
        <>
            <TextField
                label={label}
                id={id}
                type={type}
                color="secondary"
                placeholder={placeholder}
                variant="outlined"
                fullWidth={fullWidth}
                margin="dense"
                name={name}
                error={!!error}
                helperText={error?.message ?? required ? 'Required' : 'Optional'}
                InputLabelProps={InputLabelProps}
                value={value}
                onChange={e => handleChange(e.target.value)}
                defaultValue={defaultValue}
                inputRef={register({ required: required ? 'Required' : false })}
            />
            {(showLettersCount || rightHelperText) && (
                <Typography variant="caption" color="textSecondary" className={classes.rightHelper}>
                    {rightHelperText ?? `${value.length}/${maxLength}`}
                </Typography>
            )}
        </>
    );
}

const useStyles = makeStyles(() => ({
    rightHelper: {
        position: 'absolute',
        right: 12,
        bottom: 12,
    },
}));

interface TextInputProps extends BaseTextFieldProps {
    name: string;
    showLettersCount?: boolean;
    maxLength?: number;
    rightHelperText?: string;
    required?: boolean;
}
