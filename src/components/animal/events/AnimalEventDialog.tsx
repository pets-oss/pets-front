import React, { useState } from 'react';
import { useParams } from 'react-router';

import {
    Box,
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    TextField,
    Typography,
    useMediaQuery,
    useTheme,
} from '@material-ui/core';
import { Event } from '../../../graphql/types';

interface RouterParams {
    id: string;
}

export default function AnimalEventDialog({ dialogOpen, categoryOptions, typeOptions, onCancel, onCreate }) {
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
    const params: RouterParams = useParams();
    const { id: animalID } = params;

    const [eventType, setEventType] = useState('');
    const [eventCategory, setEventCategory] = useState('');
    const [eventExpenses, setEventExpenses] = useState('');
    const [eventComments, setEventComments] = useState('');
    const [eventDate, setEventDate] = useState('');
    const [typeError, setTypeError] = useState(false);
    const [categoryError, setCategoryError] = useState(false);
    const [expensesError, setExpensesError] = useState(false);
    const [commentsError, setCommentsError] = useState(false);
    const [dateError, setDateError] = useState(false);
    const [error, setError] = useState(false);

    const handleEventTypeChange = event => {
        setTypeError(false);
        setEventType(event.target.value);
    };

    const handleEventCategoryChange = event => {
        setCategoryError(false);
        setEventCategory(event.target.value);
    };

    const handleEventExpensesChange = event => {
        setExpensesError(false);
        setEventExpenses(event.target.value);
    };

    const handleEventCommentsChange = event => {
        setCommentsError(false);
        setEventComments(event.target.value);
    };

    const handleEventDateChange = event => {
        setDateError(false);
        setEventDate(event.target.value);
    };

    const handleCreate = () => {
        if (
            eventType === '' ||
            eventCategory === '' ||
            eventExpenses === '' ||
            eventComments === '' ||
            eventDate === ''
        ) {
            setError(true);
            if (eventType === '') {
                setTypeError(true);
            }
            if (eventCategory === '') {
                setCategoryError(true);
            }
            if (eventExpenses === '') {
                setExpensesError(true);
            }
            if (eventComments === '') {
                setCommentsError(true);
            }
            if (eventDate === '') {
                setDateError(true);
            }
            return;
        }
        const newEventObject = createObject(eventType, eventCategory, eventExpenses, eventComments, eventDate);
        console.log(newEventObject);
        onCreate(newEventObject);
        cleanup();
    };

    const handleCancel = () => {
        cleanup();
    };

    const cleanup = () => {
        setEventType('');
        setEventCategory('');
        setEventExpenses('');
        setEventComments('');
        setEventDate('');
        setTypeError(false);
        setCategoryError(false);
        setExpensesError(false);
        setCommentsError(false);
        setDateError(false);
        setError(false);
        onCancel(false);
    };

    const createObject = (type, category, expenses, comments, date): Event => {
        return {
            id: 123456,
            animal: +animalID,
            type: { id: typeOptions.indexOf(eventType), type },
            category,
            expenses: +expenses,
            comments,
            dateTime: Date.parse(date).toString(),
        };
    };

    return (
        <Dialog
            fullWidth
            maxWidth="sm"
            open={dialogOpen}
            onClose={handleCancel}
            fullScreen={fullScreen}
            aria-labelledby="event-dialog-title"
        >
            <DialogTitle id="event-dialog-title">Create new event</DialogTitle>
            <DialogContent>
                <Box marginTop={2.5} marginBottom={2.5}>
                    <FormControl variant="outlined" color="secondary" fullWidth>
                        <InputLabel id="type">Type</InputLabel>
                        <Select
                            labelId="type"
                            label="Type"
                            value={eventType ?? ''}
                            onChange={handleEventTypeChange}
                            error={typeError}
                        >
                            {typeOptions.map((option, index) => (
                                <MenuItem key={index} value={option}>
                                    {option}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </Box>
                <Box marginTop={2.5} marginBottom={2.5}>
                    <FormControl variant="outlined" color="secondary" fullWidth>
                        <InputLabel id="category">Category</InputLabel>
                        <Select
                            labelId="category"
                            label="Category"
                            value={eventCategory ?? ''}
                            onChange={handleEventCategoryChange}
                            error={categoryError}
                        >
                            {categoryOptions.map((option, index) => (
                                <MenuItem key={index} value={option}>
                                    {option}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </Box>
                <Box marginTop={2.5} marginBottom={2.5}>
                    <TextField
                        id="expenses"
                        label="Expenses $"
                        value={eventExpenses ?? ''}
                        onChange={handleEventExpensesChange}
                        variant="outlined"
                        fullWidth
                        color="secondary"
                        type="number"
                        error={expensesError}
                    />
                </Box>
                <Box marginTop={2.5} marginBottom={2.5}>
                    <TextField
                        id="comments"
                        label="Comments"
                        value={eventComments ?? ''}
                        onChange={handleEventCommentsChange}
                        variant="outlined"
                        fullWidth
                        color="secondary"
                        multiline
                        rows={4}
                        rowsMax={8}
                        error={commentsError}
                    />
                </Box>
                <Box marginTop={2.5} marginBottom={2}>
                    <TextField
                        id="date"
                        label="Date"
                        value={eventDate ?? ''}
                        onChange={handleEventDateChange}
                        variant="outlined"
                        fullWidth
                        color="secondary"
                        type="date"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        error={dateError}
                    />
                </Box>
            </DialogContent>
            <Box marginBottom={2} marginRight={2}>
                <DialogActions>
                    <Box flex="1" marginLeft={2}>
                        {error && (
                            <Typography variant="body1" color="error">
                                Please fill all the fields
                            </Typography>
                        )}
                    </Box>

                    <Button variant="outlined" onClick={handleCancel} color="secondary">
                        Cancel
                    </Button>
                    <Button onClick={handleCreate} color="secondary" variant="contained">
                        Create
                    </Button>
                </DialogActions>
            </Box>
        </Dialog>
    );
}
