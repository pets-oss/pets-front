import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';

import TextField from '@material-ui/core/TextField';
import Autocomplete, { createFilterOptions } from '@material-ui/lab/Autocomplete';
import { capitalizeFirstLetter } from '../../utils/string';

const OPTIONS_LIMIT = 100;

export default function Selector({
    options,
    name,
    defaultValue,
    disabled,
    optionsLimit = OPTIONS_LIMIT,
    label,
    required = false,
}: SelectorProps) {
    const { control, errors } = useFormContext();

    const limitOptions = (opts, state) =>
        createFilterOptions<DynamicSelectorOption | string>()(opts, state).slice(0, optionsLimit);

    return (
        <Controller
            defaultValue={defaultValue ?? null}
            rules={{ required: required ? 'Required' : false }}
            render={props => (
                <Autocomplete<DynamicSelectorOption | string>
                    {...props}
                    value={props.value ?? null}
                    options={options ?? []}
                    filterOptions={limitOptions}
                    getOptionLabel={option => (typeof option === 'string' ? option : option.value)}
                    getOptionSelected={(option, value) =>
                        typeof option === 'string'
                            ? option === value
                            : (option as DynamicSelectorOption)?.id === (value as DynamicSelectorOption)?.id
                    }
                    onChange={(_, option) => {
                        props.onChange(option);
                    }}
                    disabled={disabled}
                    renderInput={params => (
                        <TextField
                            {...params}
                            variant="outlined"
                            color="secondary"
                            margin="dense"
                            error={!!errors[name]}
                            label={label ?? capitalizeFirstLetter(name)}
                            helperText={errors[name]?.message ?? required ? 'Required' : 'Optional'}
                        />
                    )}
                />
            )}
            name={name}
            control={control}
        />
    );
}

export interface SelectorProps {
    options?: string[] | DynamicSelectorOption[];
    name: string;
    disabled?: boolean;
    defaultValue?: string | undefined;
    optionsLimit?: number;
    label?: string;
    helperText?: string;
    required?: boolean;
}

export interface DynamicSelectorOption {
    id: string;
    value: string;
}
