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
    useMediaQuery,
    useTheme,
} from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import AddIcon from '@material-ui/icons/Add';

export default function EventDialog({ onCreate, onClose, typeOptions, categoryOptions }: EventDialogProps) {
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

    const [dialogOpen, setDialogOpen] = useState(false);
    const [eventType, setEventType] = useState('');
    const [eventCategory, setEventCategory] = useState('');
    const [eventComment, setEventComment] = useState('');
    const [eventExpenses, setEventExpenses] = useState(0);
    const [eventDate, setEventDate] = useState('');

    const handleDialogOpen = () => {
        const currentDate = new Date();
        setEventType('');
        setEventCategory('');
        setEventComment('');
        setEventExpenses(0);
        setEventDate(currentDate.toISOString().substr(0, 10));
        setDialogOpen(true);
    };

    const handleDialogClose = () => {
        onClose();
        setDialogOpen(false);
    };

    const handleEventTypeChange = (type: string) => {
        setEventType(type);
    };

    const handleEventCategoryChange = (category: string) => {
        setEventCategory(category);
    };

    const handleExpensesChange = (expenses: number) => {
        setEventExpenses(expenses);
    };

    const handleEventCommentChange = (comment: string) => {
        setEventComment(comment);
    };

    const handleEventDateChange = (date: string) => {
        setEventDate(date);
    };

    const handleEventCreate = () => {
        onCreate();
        alert('New event created');
    };

    return (
        <Box mb={2} display="flex" justifyContent="space-between" alignItems="center">
            <Typography variant="h5" component="h3">
                Events
            </Typography>
            <Button color="primary" variant="contained" startIcon={<AddIcon />} onClick={handleDialogOpen}>
                Create
            </Button>
            <Dialog fullWidth maxWidth="sm" open={dialogOpen} fullScreen={fullScreen} onClose={handleDialogClose}>
                <DialogContent>
                    <Typography variant="h6">Create new event</Typography>
                    <Box marginTop={2.5} marginBottom={2.5}>
                        <FormControl variant="outlined" fullWidth>
                            <InputLabel id="type" htmlFor="type">
                                Event type
                            </InputLabel>
                            <Select
                                labelId="type"
                                id="type"
                                label="Event type"
                                value={eventType ?? ''}
                                onChange={event => handleEventTypeChange(event.target.value as string)}
                                required
                            >
                                {typeOptions.map(option => (
                                    <MenuItem key={option} value={option}>
                                        {option}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </Box>
                    <Box marginTop={2.5} marginBottom={2.5}>
                        <FormControl variant="outlined" fullWidth>
                            <InputLabel id="category" htmlFor="category">
                                Event category
                            </InputLabel>
                            <Select
                                labelId="category"
                                id="category"
                                label="Event category"
                                value={eventCategory ?? ''}
                                onChange={event => handleEventCategoryChange(event.target.value as string)}
                                required
                            >
                                {categoryOptions.map(option => (
                                    <MenuItem key={option} value={option}>
                                        {option}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </Box>
                    <Box marginTop={2.5} marginBottom={2.5}>
                        <TextField
                            id="Expenses"
                            label="Expenses"
                            fullWidth
                            type="number"
                            required
                            variant="outlined"
                            value={eventExpenses}
                            onChange={event => handleExpensesChange(parseFloat(event?.target.value))}
                        />
                    </Box>
                    <Box marginTop={2.5} marginBottom={2.5}>
                        <TextField
                            id="Comments"
                            label="Comments"
                            variant="outlined"
                            fullWidth
                            value={eventComment}
                            multiline
                            rows={4}
                            onChange={event => handleEventCommentChange(event?.target.value)}
                        />
                    </Box>
                    <Box marginTop={2.5} marginBottom={2.5}>
                        <TextField
                            id="date"
                            label="Date"
                            type="date"
                            required
                            value={eventDate}
                            onChange={event => handleEventDateChange(event?.target.value)}
                            fullWidth
                        />
                    </Box>
                </DialogContent>
                <DialogActions>
                    <Button variant="outlined" onClick={handleDialogClose}>
                        Cancel
                    </Button>
                    <Button variant="contained" onClick={handleEventCreate} color="primary" autoFocus>
                        Apply
                    </Button>
                </DialogActions>
            </Dialog>
        </Box>
    );
}

interface EventDialogProps {
    onCreate: () => void;
    onClose: () => void;
    typeOptions: string[];
    categoryOptions: string[];
}
