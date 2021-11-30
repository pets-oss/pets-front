import React, { useEffect, useState } from 'react';
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
} from '@mui/material';
import { Event } from '../../../graphql/types';

interface AnimalEventDialogProps {
    dialogOpen: boolean;
    categoryOptions: string[];
    typeOptions: string[];
    onCancel: (showDialog: boolean) => void;
    onCreate: (eventObject: Event) => void;
}

export default function AnimalEventDialog({
    dialogOpen,
    categoryOptions,
    typeOptions,
    onCancel,
    onCreate,
}: AnimalEventDialogProps) {
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
    const { id: animalID } = useParams();

    const [type, setType] = useState('');
    const [category, setCategory] = useState('');
    const [expenses, setExpenses] = useState('');
    const [comment, setComment] = useState('');
    const [date, setDate] = useState('');
    const [typeError, setTypeError] = useState(false);
    const [categoryError, setCategoryError] = useState(false);
    const [expensesError, setExpensesError] = useState(false);
    const [commentsError, setCommentsError] = useState(false);
    const [dateError, setDateError] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        if (!typeError && !categoryError && !expensesError && !commentsError && !dateError) {
            setError(false);
        }
    }, [typeError, categoryError, expensesError, commentsError, dateError]);

    const handleEventTypeChange = event => {
        setTypeError(false);
        setType(event.target.value);
    };

    const handleEventCategoryChange = event => {
        setCategoryError(false);
        setCategory(event.target.value);
    };

    const handleEventExpensesChange = event => {
        setExpensesError(false);
        setExpenses(event.target.value);
    };

    const handleEventCommentsChange = event => {
        setCommentsError(false);
        setComment(event.target.value);
    };

    const handleEventDateChange = event => {
        setDateError(false);
        setDate(event.target.value);
    };

    const handleCreate = () => {
        if (!type || !category || !expenses || !comment || !date) {
            setError(true);
            if (!type) {
                setTypeError(true);
            }
            if (!category) {
                setCategoryError(true);
            }
            if (!expenses) {
                setExpensesError(true);
            }
            if (!comment) {
                setCommentsError(true);
            }
            if (!date) {
                setDateError(true);
            }
            return;
        }
        const newEventObject = createEvent(type, category, expenses, comment, date);
        onCreate(newEventObject);
        cleanup();
    };

    const handleCancel = () => {
        cleanup();
    };

    const cleanup = () => {
        setType('');
        setCategory('');
        setExpenses('');
        setComment('');
        setDate('');
        setTypeError(false);
        setCategoryError(false);
        setExpensesError(false);
        setCommentsError(false);
        setDateError(false);
        setError(false);
        onCancel(false);
    };

    const createEvent = (_type, _group, _expenses, _comment, _date): Event => {
        return {
            author: {
                id: '1',
            },
            createTime: '',
            id: 123456,
            animalId: +(animalID || 0),
            group: _group,
            type: _type,
            details: {
                comments: _comment,
            },
            dateTime: Date.parse(_date).toString(),
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
                    <FormControl variant="outlined" color="secondary" fullWidth size="small">
                        <InputLabel id="type">Type</InputLabel>
                        <Select
                            labelId="type"
                            label="Type"
                            value={type}
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
                    <FormControl variant="outlined" color="secondary" fullWidth size="small">
                        <InputLabel id="category">Category</InputLabel>
                        <Select
                            labelId="category"
                            label="Category"
                            value={category}
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
                        value={expenses}
                        onChange={handleEventExpensesChange}
                        variant="outlined"
                        fullWidth
                        color="secondary"
                        type="number"
                        error={expensesError}
                        size="small"
                    />
                </Box>
                <Box marginTop={2.5} marginBottom={2.5}>
                    <TextField
                        id="comment"
                        label="Comments"
                        value={comment}
                        onChange={handleEventCommentsChange}
                        variant="outlined"
                        fullWidth
                        color="secondary"
                        multiline
                        rows={4}
                        error={commentsError}
                    />
                </Box>
                <Box marginTop={2.5} marginBottom={2.5}>
                    <TextField
                        id="date"
                        label="Date"
                        value={date}
                        onChange={handleEventDateChange}
                        variant="outlined"
                        fullWidth
                        color="secondary"
                        type="date"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        error={dateError}
                        size="small"
                    />
                </Box>
            </DialogContent>
            <Box marginBottom={2} marginRight={2}>
                <DialogActions>
                    <Box flex="1" marginLeft={2}>
                        {error && (
                            <Typography variant="body1" color="error">
                                Please fill in all blank fields
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
