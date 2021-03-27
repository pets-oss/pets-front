import React, { useState } from 'react';

import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import AddIcon from '@material-ui/icons/Add';

function EventDialog() {
    const [eventType, setEventType] = useState('');
    const [eventCategory, setEventCategory] = useState('');
    const [eventComment, setEventComment] = useState('');
    const [eventExpenses, setEventExpenses] = useState(0);
    const [eventDate, setEventDate] = useState('');
    const [open, setOpen] = useState(false);

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

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleEventCreate = () => {
        alert('New event created');
    };

    return (
        <>
            <Button color="primary" variant="contained" onClick={handleClickOpen} startIcon={<AddIcon />}>
                Create
            </Button>
            <Dialog open={open} fullWidth maxWidth="sm">
                <DialogTitle id="create-new-event">
                    <Typography variant="h3" component="h2">
                        Create new event
                    </Typography>
                </DialogTitle>
                <DialogContent>
                    <Box marginTop={2.5} marginBottom={2.5}>
                        <FormControl variant="outlined" fullWidth>
                            <InputLabel id="type" htmlFor="type" color="secondary">
                                Type
                            </InputLabel>
                            <Select
                                labelId="type"
                                id="type"
                                label="Event type"
                                color="secondary"
                                required
                                value={eventType ?? ''}
                                onChange={event => handleEventTypeChange(event.target.value as string)}
                            />
                        </FormControl>
                    </Box>
                    <Box marginTop={2.5} marginBottom={2.5}>
                        <FormControl variant="outlined" fullWidth>
                            <InputLabel id="category" htmlFor="category" color="secondary">
                                Category
                            </InputLabel>
                            <Select
                                color="secondary"
                                labelId="category"
                                id="category"
                                label="Event category"
                                required
                                value={eventCategory ?? ''}
                                onChange={event => handleEventCategoryChange(event.target.value as string)}
                            />
                        </FormControl>
                    </Box>
                    <Box marginTop={2.5} marginBottom={2.5}>
                        <TextField
                            id="Expenses"
                            label="Expenses $"
                            fullWidth
                            type="number"
                            variant="outlined"
                            color="secondary"
                            value={eventExpenses}
                            onChange={event => handleExpensesChange(parseFloat(event?.target.value))}
                        />
                    </Box>
                    <Box marginTop={2.5} marginBottom={2.5}>
                        <TextField
                            id="Comments"
                            label="Comments"
                            variant="outlined"
                            color="secondary"
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
                            InputLabelProps={{ shrink: true }}
                            color="secondary"
                        />
                    </Box>
                </DialogContent>
                <DialogActions>
                    <Button variant="outlined" color="secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button variant="contained" type="submit" color="secondary" autoFocus onClick={handleEventCreate}>
                        Create
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
}
export default EventDialog;
