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

export default function NewEvent(props) {
    const { showDialog, typeOptions, categoryOptions, onCancel, onCreate } = props;

    const [type, setType] = useState('');
    const [category, setCategory] = useState('');
    const [expenses, setExpenses] = useState(0);
    const [comments, setComments] = useState('');
    const [date, setDate] = useState(null);

    const handleDialogClose = () => {
        onCancel(false);
    };

    const handleDialogSubmit = () => {
        // TODO: update the properties of the new event
        const newEvent = null;
        handleDialogClose();
        onCreate(newEvent);
    };

    const handleTypeChange = e => {
        setType(e.currentTarget.value);
    };

    const handleCategoryChange = e => {
        setCategory(e.currentTarget.value);
    };

    const handleExpensesChange = e => {
        setExpenses(e.currentTarget.value);
    };

    const handleCommentsChange = e => {
        setComments(e.currentTarget.value);
    };

    const handleDateChange = e => {
        setDate(e.currentTarget.value);
    };

    return (
        <Dialog open={showDialog}>
            <DialogContent>
                <Box display="flex" justifyContent="space-between" marginTop={2.5} marginBottom={2.5}>
                    <Typography variant="h6">Create new event</Typography>
                </Box>
                <Box display="flex" justifyContent="space-between" marginTop={2.5} marginBottom={2.5}>
                    <FormControl variant="outlined" fullWidth /* className={classes.formControl} */>
                        <InputLabel id="demo-simple-select-outlined-label">Type</InputLabel>
                        <Select
                            labelId="demo-simple-select-outlined-label"
                            id="demo-simple-select-outlined"
                            onChange={handleTypeChange}
                            label="type"
                        >
                            {typeOptions.map((typeOption, index) => (
                                <MenuItem key={index} value={typeOption}>
                                    {typeOption}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </Box>
                <Box display="flex" justifyContent="space-between" marginTop={2.5} marginBottom={2.5}>
                    <FormControl variant="outlined" fullWidth /* className={classes.formControl} */>
                        <InputLabel id="demo-simple-select-outlined-label">Category</InputLabel>
                        <Select
                            labelId="demo-simple-select-outlined-label"
                            id="demo-simple-select-outlined"
                            onChange={handleCategoryChange}
                            label="category"
                        >
                            {categoryOptions.map((categoryOption, index) => (
                                <MenuItem key={index} value={categoryOption}>
                                    {categoryOption}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </Box>
                <Box display="flex" justifyContent="space-between" marginTop={2.5} marginBottom={2.5}>
                    <TextField
                        label="Expenses $"
                        variant="outlined"
                        type="number"
                        fullWidth
                        onChange={handleExpensesChange}
                    />
                </Box>
                <Box display="flex" justifyContent="space-between" marginTop={2.5} marginBottom={2.5}>
                    <TextField
                        label="Comments..."
                        variant="outlined"
                        multiline
                        rows={5}
                        fullWidth
                        onChange={handleCommentsChange}
                    />
                </Box>
                <Box display="flex" justifyContent="space-between" marginTop={2.5} marginBottom={2.5}>
                    <TextField
                        label="Date"
                        type="date"
                        variant="outlined"
                        fullWidth
                        InputLabelProps={{
                            shrink: true,
                        }}
                        onChange={handleDateChange}
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
