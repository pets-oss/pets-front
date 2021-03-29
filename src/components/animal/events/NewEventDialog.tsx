import { getTime } from 'date-fns';
import React, { memo, useCallback, useState } from 'react';

import {
    Box,
    Button,
    DialogActions,
    DialogContent,
    DialogTitle,
    FormControl,
    FormHelperText,
    InputLabel,
    Select,
} from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import TextField from '@material-ui/core/TextField';
import { Category, Event } from '../../../graphql/types';

export interface NewEventProps {
    visible: boolean;
    onCancel?: () => void;
    onCreate?: (arg0: Event) => void;
    options: {
        types: string[];
        categories: string[];
    };
}

interface SelectorProps {
    label: string;
    id: string;
    error?: string;
    options: string[];
    selected: string | unknown;
    onChange: (key: string, value: string | undefined | unknown) => void;
}

interface TextInputProps {
    label: string;
    multiline?: boolean;
    type?: string; // TODO one of material TextField types
    defaultValue?: string;
    error?: string | undefined;
    id: string;
    onChange: (key: string, value: string | undefined | unknown) => void;
}

interface FormState {
    category?: Category;
    type?: string;
    expenses?: number;
    comments?: string;
    dateTime?: string;
}

interface ErrorsState {
    category?: string;
    type?: string;
    expenses?: string;
    comments?: string;
    dateTime?: string;
}

const SPACING = 2.5;

const FormItem: React.FC<{ error?: boolean }> = ({ error, children }) => (
    <Box marginY={SPACING}>
        <FormControl error={error} fullWidth variant="outlined">
            {children}
        </FormControl>
    </Box>
);

const TextInput: React.FC<TextInputProps> = memo(({ label, id, error, onChange, multiline, type, defaultValue }) => {
    const onInput = ({ target: { value } }) => {
        switch (type) {
            case 'number':
                return onChange(id, parseFloat(value) || 0);
            default:
                return onChange(id, value);
        }
    };

    return (
        <FormItem key={id}>
            <TextField
                id={id}
                error={!!error}
                helperText={error}
                multiline={multiline}
                rows={multiline ? 5 : undefined}
                defaultValue={defaultValue}
                type={type}
                color="secondary"
                variant="outlined"
                label={label}
                onChange={onInput}
            />
        </FormItem>
    );
});

const Selector: React.FC<SelectorProps> = memo(({ error, selected, label, id, options, onChange }) => {
    const selectorID = `${id}-selector`;
    return (
        <FormItem error={!!error} key={id}>
            <InputLabel htmlFor={selectorID}>{label}</InputLabel>
            <Select
                inputProps={{
                    name: id,
                    id: selectorID,
                }}
                color="secondary"
                native
                fullWidth
                onChange={({ target: { value } }) => onChange(id, value)}
                label={label}
            >
                {!selected && <option aria-label="None" value="" />}
                {options.map((value, index) => (
                    <option key={`${selectorID}-option-${index}`} value={value}>
                        {value}
                    </option>
                ))}
            </Select>
            {error && <FormHelperText>{error}</FormHelperText>}
        </FormItem>
    );
});

const CURRENT_DATE = new Date().toISOString().slice(0, 16);
const DEFAULT_FORM_VALUES = { dateTime: CURRENT_DATE };

export default memo(({ visible, onCancel, options, onCreate }: NewEventProps) => {
    const [errors, setErrors] = useState<ErrorsState>({});
    const [formValues, setFormValues] = useState<FormState>(DEFAULT_FORM_VALUES);

    const onInput = useCallback((key, value) => {
        return setFormValues(oldValues => ({ ...oldValues, [key]: value }));
    }, []);

    const clearValues = () => {
        setFormValues(DEFAULT_FORM_VALUES);
        setErrors({});
    };

    const onSubmit = () => {
        const required = ['type', 'category', 'dateTime', 'expenses'];
        const emptyField = required.find(id => !formValues[id]);
        if (emptyField) {
            setErrors({ [emptyField]: 'Field is required' });
        } else if (typeof formValues.expenses !== 'number') {
            setErrors({ expenses: 'Expenses is not valid number' });
        } else if (onCreate) {
            const { type = options.types[0], dateTime = CURRENT_DATE } = formValues;
            onCreate({
                ...formValues,
                id: 123,
                animal: 321,
                type: { type, id: options.types.indexOf(type) },
                dateTime: getTime(new Date(dateTime)).toString(), // getFormattedDate = (timestampString: string
            });
        }
    };

    return (
        <Dialog open={visible} fullWidth maxWidth="sm" onClose={onCancel} onExited={clearValues}>
            <DialogTitle>Create new event</DialogTitle>
            <DialogContent>
                <Selector
                    error={errors.type}
                    id="type"
                    selected={!!formValues.type}
                    label="Type"
                    onChange={onInput}
                    options={options.types}
                />
                <Selector
                    id="category"
                    error={errors.category}
                    selected={!!formValues.category}
                    label="Category"
                    onChange={onInput}
                    options={options.categories}
                />
                <TextInput error={errors.expenses} id="expenses" type="number" label="Expenses $" onChange={onInput} />
                <TextInput error={errors.comments} id="comments" multiline label="Comments..." onChange={onInput} />
                <TextInput
                    error={errors.dateTime}
                    id="dateTime"
                    label="Date & Time"
                    type="datetime-local"
                    defaultValue={formValues.dateTime ?? undefined}
                    onChange={onInput}
                />
            </DialogContent>
            <Box marginRight={SPACING} marginBottom={SPACING}>
                <DialogActions>
                    <Button variant="outlined" onClick={onCancel}>
                        Cancel
                    </Button>
                    <Button onClick={onSubmit} variant="contained" color="secondary" autoFocus>
                        Create
                    </Button>
                </DialogActions>
            </Box>
        </Dialog>
    );
});
