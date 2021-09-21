import clsx from 'clsx';
import React, { useEffect, useState } from 'react';
import { Controller, FieldError, useFormContext, useWatch } from 'react-hook-form';

import { BaseTextFieldProps } from '@material-ui/core';
import { makeStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

interface TextInputProps extends BaseTextFieldProps {
    name: string;
    showLettersCount?: boolean;
    maxLength?: number;
    rightHelperText?: string;
    required?: boolean;
}

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
    const { control, formState } = useFormContext();

    const [localValue, setLocalValue] = useState<string | undefined>(undefined);
    const [error, setError] = useState<FieldError | undefined>(undefined);

    const formValue = useWatch({
        control,
        name,
        defaultValue: undefined,
    });

    useEffect(() => {
        setLocalValue(formValue);
    }, [formValue]);

    useEffect(() => {
        const { errors } = formState;
        if (!name.includes('.')) {
            setError(errors[name]);
            return;
        }

        const [obj, property] = name.split('.');
        setError(errors[obj] ? errors[obj][property] : undefined);
    }, [formState, name]);

    const handleChange = (e, callback) => {
        const { value } = e.target;
        setLocalValue(value);
        callback(e);
    };

    return (
        <>
            <Controller
                name={name}
                control={control}
                defaultValue={defaultValue}
                rules={{ required, maxLength }}
                render={({ field: { onChange, value } }) => (
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
                        onChange={e => {
                            handleChange(e, onChange);
                        }}
                        defaultValue={defaultValue}
                    />
                )}
            />
            {(showLettersCount || rightHelperText) && (
                <Typography
                    variant="caption"
                    color="textSecondary"
                    className={clsx({ ['Mui-error']: error }, classes.rightHelper)}
                >
                    {rightHelperText ?? `${localValue?.length || 0}/${maxLength}`}
                </Typography>
            )}
        </>
    );
}

const useStyles = makeStyles((theme: Theme) => ({
    rightHelper: {
        position: 'absolute',
        right: 12,
        bottom: 12,
        '&.Mui-error': {
            color: theme.palette.error.main,
        },
    },
}));
