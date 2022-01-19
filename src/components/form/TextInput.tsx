import clsx from 'clsx';
import React, { useEffect, useState } from 'react';
import { Controller, FieldError, useFormContext, useWatch } from 'react-hook-form';

import { BaseTextFieldProps, styled, TextField, Typography } from '@mui/material';

const StyledTypography = styled(Typography)(({ theme }) => ({
    position: 'absolute',
    right: 12,
    bottom: 12,
    '&.Mui-error': {
        color: theme.palette.error.main,
    },
}));

export default function TextInput({
    label,
    id,
    name,
    placeholder,
    defaultValue,
    fullWidth = false,
    helperText,
    rightHelperText,
    showLettersCount = false,
    maxLength = 25,
    required = false,
    validate,
    type = 'text',
    InputLabelProps,
}: TextInputProps) {
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
                rules={{ required: required ? 'Required' : false, maxLength, validate }}
                render={({ field: { onChange, value } }) => (
                    <TextField
                        label={label}
                        id={id}
                        type={type}
                        color="primary"
                        placeholder={placeholder}
                        variant="outlined"
                        fullWidth={fullWidth}
                        margin="dense"
                        name={name}
                        error={!!error}
                        helperText={error?.message || helperText}
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
                <StyledTypography variant="caption" color="textSecondary" className={clsx({ ['Mui-error']: error })}>
                    {rightHelperText ?? `${localValue?.length || 0}/${maxLength}`}
                </StyledTypography>
            )}
        </>
    );
}

interface TextInputProps extends BaseTextFieldProps {
    name: string;
    showLettersCount?: boolean;
    maxLength?: number;
    rightHelperText?: string;
    required?: boolean;
    validate?: (input: string) => string | boolean;
}
