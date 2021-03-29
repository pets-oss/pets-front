import 'date-fns';
import React, { Dispatch, SetStateAction, useState } from 'react';

import DateFnsUtils from '@date-io/date-fns';
import {
    Box,
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    makeStyles,
    MenuItem,
    TextField,
} from '@material-ui/core';
import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';

export interface AnimalEventDialogProps {
    showEventDialog: boolean;
    setShowEventDialog: Dispatch<SetStateAction<boolean>>;
    TypeOptions: Array<string>;
    CategoryOptions: Array<string>;
    setFilteredEvents: (event: any) => void;
    filteredEvents: Array<any>;
}

export default function AnimalEventDialog({
    showEventDialog,
    setShowEventDialog,
    TypeOptions,
    CategoryOptions,
    setFilteredEvents,
    filteredEvents,
}: AnimalEventDialogProps) {
    const classes = useStyles();

    const handleDialogClose = () => {
        setShowEventDialog(false);
    };

    const [type, setType] = useState('Type');
    const [category, setCategory] = useState('Category');
    const [expenses, setExpenses] = useState('');
    const [comments, setComments] = useState('');
    const [selectedDate, setSelectedDate] = React.useState<Date | null>(new Date('2014-08-18T21:11:54'));
    const [id, setId] = useState(8);
    const [errorType, setErrorType] = useState('');
    const [errorCategory, setErrorCategory] = useState('');
    const [errorExpenses, setErrorExpenses] = useState('');
    const [errorComments, setErrorComments] = useState('');

    const handleTypeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setType(event.target.value);
        setId(Date.now());
    };

    const handleCategoryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCategory(event.target.value);
    };

    const handleExpensesChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setExpenses(event.target.value);
    };

    const handleCommentsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setComments(event.target.value);
    };

    const handleDateChange = (date: Date | null) => {
        setSelectedDate(date);
    };

    const handleApplyDialog = () => {
        if (!type || !category || !(parseFloat(expenses) > 0) || !comments || !selectedDate) {
            if (!type || type === 'Type') {
                setErrorType('Pls fill type');
            }
            if (!category || category === 'Category') {
                setErrorCategory('Pls fill category');
            }
            if (!(parseFloat(expenses) > 0)) {
                setErrorExpenses('Pls fill expenses');
            }
            if (!comments) {
                setErrorComments('Pls fill comments');
            }
        } else {
            const event = {
                id,
                type: { __typename: 'EventType', id: Date.now(), type },
                category: category.toUpperCase(),
                expenses: parseInt(expenses, 10),
                comments,
                dateTime: String(selectedDate.getTime()),
            };
            setShowEventDialog(false);
            setFilteredEvents([...filteredEvents, event]);
        }
    };

    return (
        <Box>
            <Dialog open={showEventDialog} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Create new event</DialogTitle>
                <DialogContent>
                    <TextField
                        style={{ marginBottom: 8 }}
                        fullWidth
                        select
                        label="Type"
                        value={type}
                        onChange={handleTypeChange}
                        variant="outlined"
                        helperText={errorType}
                    >
                        {TypeOptions.map(option => (
                            <MenuItem key={option} value={option}>
                                {option}
                            </MenuItem>
                        ))}
                    </TextField>
                    <TextField
                        fullWidth
                        select
                        label="Category"
                        value={category}
                        onChange={handleCategoryChange}
                        variant="outlined"
                        helperText={errorCategory}
                    >
                        {CategoryOptions.map(option => (
                            <MenuItem key={option} value={option}>
                                {option}
                            </MenuItem>
                        ))}
                    </TextField>
                    <TextField
                        placeholder="expenses $"
                        fullWidth
                        margin="normal"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        variant="outlined"
                        onChange={handleExpensesChange}
                        helperText={errorExpenses}
                    />
                    <TextField
                        placeholder="Comments..."
                        fullWidth
                        margin="normal"
                        rows={5}
                        multiline
                        InputLabelProps={{
                            shrink: true,
                        }}
                        variant="outlined"
                        onChange={handleCommentsChange}
                        helperText={errorComments}
                    />
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <KeyboardDatePicker
                            disableToolbar
                            variant="inline"
                            format="MM/dd/yyyy"
                            margin="normal"
                            id="date-picker-outline"
                            label="Date picker inline"
                            value={selectedDate}
                            onChange={handleDateChange}
                            KeyboardButtonProps={{
                                'aria-label': 'change date',
                            }}
                        />
                    </MuiPickersUtilsProvider>
                </DialogContent>
                <DialogActions>
                    <Button className={classes.dialogButtonCreate} variant="contained" onClick={handleApplyDialog}>
                        Create
                    </Button>
                    <Button className={classes.dialogButtonCancel} variant="contained" onClick={handleDialogClose}>
                        Cancel
                    </Button>
                </DialogActions>
            </Dialog>
        </Box>
    );
}

const useStyles = makeStyles(() => ({
    dialogButtonCancel: {
        background: '#13493B',
        color: '#fff',
        height: '38px',
        margin: '0 15px 15px 15px',
        width: '80px',
    },
    dialogButtonCreate: {
        border: '1px solid #13493B',
        height: '38px',
        margin: '0 0 15px 0',
        width: '80px',
    },
}));
