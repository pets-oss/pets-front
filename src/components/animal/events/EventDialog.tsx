import React, { useState } from 'react';

import {
    Box,
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    FormControl,
    Grid,
    InputLabel,
    MenuItem,
    Select,
    TextField,
    Typography,
} from '@material-ui/core';

export default function EventDialog({ categories, onOpen, typeOptions, onCancel, onCreate }: EventDialogProps) {
    const [type, setType] = useState('');
    const [category, setCategory] = useState('');
    const [expenses, setExpenses] = useState(0);
    const [comments, setComments] = useState('');
    const [date, setDate] = useState('');
    const [typeError, setTypeError] = useState(false);
    const [categoryError, setCategoryError] = useState(false);
    const [expensesError, setExpensesError] = useState(false);
    const [commentsError, setCommentsError] = useState(false);
    const [dateError, setDateError] = useState(false);

    const handletypeChange = (value: string) => {
        if (value !== '') {
            setType(value);
            setTypeError(false);
        } else {
            setTypeError(true);
        }
    };
    const handleCategoryChange = (value: string) => {
        if (value !== '') {
            setCategory(value);
            setCategoryError(false);
        } else {
            setCategoryError(true);
        }
    };
    const handleExpensesChange = value => {
        if (value !== '') {
            setExpenses(parseFloat(value));
            setExpensesError(false);
        } else {
            setExpensesError(true);
        }
    };
    const handleCommentsChange = (value: string) => {
        if (value !== '') {
            setComments(value);
            setCommentsError(false);
        } else {
            setCommentsError(true);
        }
    };
    const handleDateChange = (value: string) => {
        if (value !== '') {
            setDate(value);
            setDateError(false);
        } else {
            setDateError(true);
        }
    };

    const resetValues = () => {
        setType('');
        setCategory('');
        setExpenses(0);
        setComments('');
        setDate('');
        setExpensesError(false);
        setTypeError(false);
        setCategoryError(false);
        setCommentsError(false);
        setDateError(false);
    };

    const handleClose = () => {
        onCancel();
        resetValues();
    };

    const handleCreate = () => {
        if (!typeError && !categoryError && !expensesError && !commentsError && !dateError) {
            if (type !== '' && category !== '' && comments !== '' && date !== '') {
                const d = new Date(date).getTime().toString();
                const categoryConverted = category.toUpperCase();
                const newEvent = {
                    id: 123456,
                    type: { __typename: 'EventType', id: typeOptions.indexOf(type), type },
                    expenses,
                    category: categoryConverted,
                    comments,
                    dateTime: d,
                };
                onCreate(newEvent);
                handleClose();
            } else {
                if (type === '') {
                    setTypeError(true);
                }
                if (category === '') {
                    setCategoryError(true);
                }
                if (comments === '') {
                    setCommentsError(true);
                }
                if (date === '') {
                    setDateError(true);
                }
            }
        }
    };

    const SelectInput = ({ value, label, options, onChange, color, error }) => {
        return (
            <Box marginTop={1.5} marginBottom={1.5}>
                <FormControl variant="outlined" fullWidth>
                    <InputLabel id={`${label}-select-label`} htmlFor={`${label}-select`}>
                        {label}
                    </InputLabel>
                    <Select
                        color={color}
                        labelId={`${label}-select-label`}
                        id={`${label}-select`}
                        label={label}
                        value={value ?? ''}
                        onChange={event => onChange(event.target.value as string)}
                        error={error}
                        required
                        fullWidth
                    >
                        {options.map(option => (
                            <MenuItem key={option} value={option}>
                                {option}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </Box>
        );
    };

    return (
        <Grid container alignItems="center" spacing={1}>
            <Dialog open={onOpen}>
                <DialogContent>
                    <Box display="flex" flexDirection="column" justifyContent="space-between">
                        <Typography variant="h6">Create new event</Typography>
                        <SelectInput
                            color="secondary"
                            key="Type"
                            value={type}
                            label="Type"
                            options={typeOptions}
                            onChange={event => handletypeChange(event)}
                            error={typeError}
                        />

                        <SelectInput
                            color="secondary"
                            key="Category"
                            value={category}
                            label="Category"
                            options={categories}
                            onChange={event => handleCategoryChange(event)}
                            error={categoryError}
                        />

                        <Box marginTop={1.5} marginBottom={1.5}>
                            <TextField
                                error={expensesError}
                                color="secondary"
                                id="outlined-basic"
                                type="number"
                                label="Expenses $"
                                variant="outlined"
                                helperText={expensesError && 'This field is mandatory'}
                                onChange={event => handleExpensesChange(event.target.value)}
                                required
                                fullWidth
                            />
                        </Box>

                        <Box marginTop={1.5} marginBottom={1.5}>
                            <TextField
                                error={commentsError}
                                color="secondary"
                                id="outlined-textarea"
                                label="Comments"
                                placeholder="Comments..."
                                variant="outlined"
                                rows={4}
                                multiline
                                helperText={commentsError && 'This field is mandatory'}
                                onChange={event => handleCommentsChange(event.target.value)}
                                required
                                fullWidth
                            />
                        </Box>
                        <Box marginTop={1.5} marginBottom={1.5}>
                            <TextField
                                error={dateError}
                                color="secondary"
                                id="outlined-basic"
                                type="date"
                                variant="outlined"
                                helperText={dateError && 'This field is mandatory'}
                                onChange={event => handleDateChange(event.target.value)}
                                required
                                fullWidth
                            />
                        </Box>
                    </Box>
                </DialogContent>
                <DialogActions>
                    <Button variant="outlined" color="secondary" onClick={handleClose}>
                        CANCEL
                    </Button>
                    <Button variant="contained" color="secondary" onClick={handleCreate}>
                        CREATE
                    </Button>
                </DialogActions>
            </Dialog>
        </Grid>
    );
}

interface EventDialogProps {
    onOpen: boolean;
    typeOptions: string[];
    categories: string[];
    onCancel: () => void;
    onCreate: any;
}
