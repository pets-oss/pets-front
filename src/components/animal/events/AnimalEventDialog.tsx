import React from 'react';

import {
    Box,
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    FormControl,
    FormHelperText,
    InputLabel,
    MenuItem,
    Select,
    TextField,
    Typography,
} from '@material-ui/core';
import { Category, Event } from '../../../graphql/types';

const getCategory = (category: string) => {
    switch (category.toLowerCase()) {
        case Category.Medical.toLowerCase():
            return Category.Medical;
        default:
            return Category.General;
    }
};

export default function AnimalEventDialog({ open, typeOptions, categories, onCancel, onCreate }) {
    const date = new Date();
    const [eventType, setEventType] = React.useState('');
    const [eventCategory, setEventCategory] = React.useState('');
    const [eventExpenses, setEventExpenses] = React.useState(NaN);
    const [eventComments, setEventComments] = React.useState('');
    const [eventDate, setEventDate] = React.useState(date.toISOString().substr(0, 10));
    const [typeErr, setTypeErr] = React.useState(false);
    const [categoryErr, setCategoryErr] = React.useState(false);
    const [expensesErr, setExpensesErr] = React.useState(false);
    const [commentsErr, setCommentsErr] = React.useState(false);
    const [errText, setErrText] = React.useState('');

    const handleTypeChange = (type: string) => {
        setEventType(type);
    };

    const handleCategoryChange = (category: string) => {
        setEventCategory(category);
    };

    const handleExpensesChange = (expenses: number) => {
        setEventExpenses(expenses);
        validateExpenses(expenses);
    };

    const handleCommentsChange = (comment: string) => {
        setEventComments(comment);
        validateComments(comment);
    };

    const handleDateChange = (dt: string) => {
        setEventDate(dt);
    };

    const validateType = () => {
        if (eventType === '') {
            setTypeErr(true);
            setErrText('All fields are required.');
        } else {
            setTypeErr(false);
            setErrText('');
        }
    };

    const validateCategory = () => {
        if (eventCategory === '') {
            setCategoryErr(true);
            setErrText('All fields are required.');
        } else {
            setCategoryErr(false);
            setErrText('');
        }
    };

    const validateExpenses = expenses => {
        if (!expenses) {
            setExpensesErr(true);
            setErrText('All fields are required.');
        } else {
            setExpensesErr(false);
            setErrText('');
        }
    };

    const validateComments = comment => {
        if (!comment) {
            setCommentsErr(true);
            setErrText('All fields are required.');
        } else {
            setCommentsErr(false);
            setErrText('');
        }
    };

    const handleCancel = () => {
        onCancel();
        setEventType('');
        setEventCategory('');
        setEventExpenses(NaN);
        setEventComments('');
        setEventDate(date.toISOString().substr(0, 10));
        setTypeErr(false);
        setCategoryErr(false);
        setExpensesErr(false);
        setCommentsErr(false);
        setErrText('');
    };

    const handleCreate = () => {
        const d = new Date(eventDate).getTime().toString();
        const newEvent: Event = {
            id: 123456,
            type: {
                type: eventType,
                id: 1,
            },
            category: getCategory(eventCategory),
            expenses: eventExpenses,
            comments: eventComments,
            dateTime: d,
            animal: 1,
        };
        onCreate(newEvent);
        handleCancel();
    };

    return (
        <Dialog fullWidth maxWidth="sm" open={open} onClose={onCancel} aria-labelledby="form-dialog-title">
            <DialogContent>
                <Box>
                    <Typography variant="h6">Create new event</Typography>
                </Box>
                <Box my={2.5}>
                    <FormControl fullWidth variant="outlined" color="secondary">
                        <InputLabel id="type" htmlFor="type">
                            Type
                        </InputLabel>
                        <Select
                            labelId="type"
                            id="type"
                            label="Type"
                            value={eventType}
                            onChange={event => handleTypeChange(event?.target.value as string)}
                            onBlur={validateType}
                            required
                            error={typeErr}
                        >
                            <MenuItem value="" disabled>
                                Type
                            </MenuItem>
                            {typeOptions.map((option: string) => (
                                <MenuItem key={option} value={option}>
                                    {option}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </Box>
                <Box my={2.5}>
                    <FormControl fullWidth variant="outlined" color="secondary">
                        <InputLabel id="category" htmlFor="category">
                            Category
                        </InputLabel>
                        <Select
                            labelId="category"
                            id="category"
                            label="Category"
                            value={eventCategory}
                            onChange={event => handleCategoryChange(event?.target.value as string)}
                            onBlur={validateCategory}
                            required
                            error={categoryErr}
                        >
                            <MenuItem value="" disabled>
                                Category
                            </MenuItem>
                            {categories.map((cat: string) => (
                                <MenuItem key={cat} value={cat}>
                                    {cat}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </Box>
                <Box my={2.5}>
                    <TextField
                        id="expenses"
                        label="$ Expenses"
                        type="number"
                        value={eventExpenses}
                        onChange={event => handleExpensesChange(parseFloat(event?.target.value))}
                        onBlur={event => validateExpenses(event?.target.value)}
                        variant="outlined"
                        color="secondary"
                        fullWidth
                        required
                        error={expensesErr}
                    />
                </Box>
                <Box my={2.5}>
                    <TextField
                        id="comments"
                        label="Comments..."
                        value={eventComments}
                        onChange={event => handleCommentsChange(event?.target.value)}
                        onBlur={event => validateComments(event?.target.value)}
                        multiline
                        rows={4}
                        variant="outlined"
                        color="secondary"
                        fullWidth
                        required
                        error={commentsErr}
                    />
                </Box>
                <Box mt={2.5}>
                    <TextField
                        id="date"
                        type="date"
                        value={eventDate}
                        onChange={event => handleDateChange(event?.target.value)}
                        variant="outlined"
                        color="secondary"
                        fullWidth
                        required
                    />
                    <FormHelperText error>{errText}</FormHelperText>
                </Box>
            </DialogContent>
            <Box mr={2} mb={2}>
                <DialogActions>
                    <Button variant="outlined" color="secondary" onClick={handleCancel}>
                        CANCEL
                    </Button>
                    <Button variant="contained" color="secondary" type="submit" autoFocus onClick={handleCreate}>
                        CREATE
                    </Button>
                </DialogActions>
            </Box>
        </Dialog>
    );
}
