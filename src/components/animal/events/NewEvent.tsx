import React, { useState } from 'react';

import {
    Box,
    Button,
    DialogActions,
    DialogContent,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    TextField,
    Typography,
} from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import { Event, EventType } from '../../../graphql/types';

export default function NewEvent({ showDialog, typeOptions, categoryOptions, onCancel, onCreate }: NewEventProps) {
    const [type, setType] = useState({} as EventType);
    const [category, setCategory] = useState('');
    const [expenses, setExpenses] = useState(0);
    const [comments, setComments] = useState('');
    const [dateTime, setDateTime] = useState('');
    const [errorText, setErrorText] = useState('');
    const [expensesErrorText, setExpensesErrorText] = useState('');

    const handleDialogClose = () => {
        onCancel();
    };

    const handleDialogSubmit = () => {
        if (Object.keys(type).length && category && expenses && comments && dateTime) {
            setErrorText('');
            const event = {
                id: 1234,
                animal: 12345,
                type,
                category,
                expenses,
                comments,
                dateTime,
            } as Event;
            handleDialogClose();
            onCreate(event);

            // reset Event attributes
            setType({} as EventType);
            setCategory('');
            setExpenses(0);
            setComments('');
            setDateTime('');
        } else {
            setErrorText('* Please fill in all the required fields.');
        }
    };

    const handleTypeChange = e => {
        const eventType = { id: 123456, type: e.target.value } as EventType;
        setType(eventType);
    };

    const handleCategoryChange = e => {
        setCategory(e.target.value);
    };

    const handleExpensesChange = e => {
        if (e.target.value.length > 0 && !Number(e.target.value)) {
            setExpensesErrorText('* Please enter a valid number expression.');
            setExpenses(0);
        } else if (Number(e.target.value) < 0) {
            setExpensesErrorText('* Expenses cannot be a negative number.');
            setExpenses(0);
        } else {
            setExpensesErrorText('');
            setExpenses(parseFloat(e.target.value));
        }
    };

    const handleCommentsChange = e => {
        setComments(e.target.value);
    };

    const handleDateTimeChange = e => {
        setDateTime(String(Date.parse(e.target.value)));
    };

    return (
        <Dialog open={showDialog} fullWidth maxWidth="sm">
            <DialogContent>
                <Box marginTop={2.5} marginBottom={2.5}>
                    <Typography variant="h6">Create a new event</Typography>
                </Box>
                <Box marginTop={2.5} marginBottom={2.5}>
                    <Typography variant="caption" color="error">
                        {errorText}
                    </Typography>
                </Box>
                <Box marginTop={2.5} marginBottom={2.5}>
                    <FormControl variant="outlined" fullWidth>
                        <InputLabel required error={errorText.length !== 0 && Object.keys(type).length === 0}>
                            Type
                        </InputLabel>
                        <Select
                            onChange={handleTypeChange}
                            label="type"
                            required
                            error={errorText.length !== 0 && Object.keys(type).length === 0}
                        >
                            {typeOptions.map((typeOption, index) => (
                                <MenuItem key={index} value={typeOption}>
                                    {typeOption}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </Box>
                <Box marginTop={2.5} marginBottom={2.5}>
                    <FormControl variant="outlined" fullWidth>
                        <InputLabel required error={errorText.length !== 0 && !category}>
                            Category
                        </InputLabel>
                        <Select
                            onChange={handleCategoryChange}
                            label="category"
                            required
                            error={errorText.length !== 0 && !category}
                        >
                            {categoryOptions.map((categoryOption, index) => (
                                <MenuItem key={index} value={categoryOption}>
                                    {categoryOption}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </Box>
                <Box marginTop={2.5} marginBottom={2.5}>
                    <TextField
                        label="Expenses $"
                        variant="outlined"
                        fullWidth
                        required
                        error={expensesErrorText.length !== 0 || (errorText.length !== 0 && !expenses)}
                        helperText={expensesErrorText}
                        onChange={handleExpensesChange}
                    />
                </Box>
                <Box marginTop={2.5} marginBottom={2.5}>
                    <TextField
                        label="Comments..."
                        variant="outlined"
                        multiline
                        rows={5}
                        fullWidth
                        required
                        error={errorText.length !== 0 && !comments}
                        onChange={handleCommentsChange}
                    />
                </Box>
                <Box marginTop={2.5} marginBottom={2.5}>
                    <TextField
                        label="Date"
                        type="date"
                        variant="outlined"
                        fullWidth
                        InputLabelProps={{
                            shrink: true,
                        }}
                        required
                        error={errorText.length !== 0 && !dateTime}
                        onChange={handleDateTimeChange}
                    />
                </Box>
            </DialogContent>
            <DialogActions>
                <Button variant="outlined" onClick={handleDialogClose}>
                    Cancel
                </Button>
                <Button variant="contained" onClick={handleDialogSubmit} color="secondary">
                    Create
                </Button>
            </DialogActions>
        </Dialog>
    );
}

interface NewEventProps {
    showDialog: boolean;
    typeOptions: string[];
    categoryOptions: string[];
    onCancel: () => void;
    onCreate: (event: Event) => void;
}
