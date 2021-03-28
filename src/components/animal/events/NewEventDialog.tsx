import React, { useState } from 'react';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles({
    root: {
        width: '5ch', // KOREGUOTI, DAR NEŽINAU KAIP VEIKIA
    },
});

interface NewEventDialogProps {
    categoryOptions: string[];
    open: boolean;
    onCancel: () => void;
    typeOptions: string[];
}

export default function NewEventDialog(props: NewEventDialogProps) {
    // eslint-disable-next-line
    const classes = useStyles();
    const { categoryOptions, open, onCancel, typeOptions } = props;

    const [selectedType, setSelectedType] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');
    const [expenses, setExpenses] = useState('');
    const [comments, setComments] = useState('');
    const [selectedDate, setSelectedDate] = useState('');

    const handleTypeChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        setSelectedType(event.target.value as string);
    };

    const handleCategoryChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        setSelectedCategory(event.target.value as string);
    };

    const handleExpensesChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setExpenses(event.target.value);
    };

    const handleCommentsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setComments(event.target.value);
    };

    const handleDateChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        setSelectedDate(event.target.value as string);
        // eslint-disable-next-line
        // console.log(event.target.value);
    };

    const handleCreate = () => {
        if (
            selectedType !== '' &&
            selectedCategory !== '' &&
            expenses !== '' &&
            comments !== '' &&
            selectedDate !== ''
        ) {
            const newEvent = {
                id: 123456,
                type: { __typename: 'EventType', id: typeOptions.indexOf(selectedType), selectedType },
                expenses,
                category: selectedCategory,
                comments,
                dateTime: selectedDate,
            };
            // eslint-disable-next-line
            console.log(newEvent);
        }
    };

    return (
        <Dialog aria-labelledby="form-dialog-title" open={open}>
            <DialogTitle id="form-dialog-title">Create new event</DialogTitle>
            <DialogContent>
                <InputLabel id="input-type">Type</InputLabel>
                <Select
                    fullWidth
                    id="select-type"
                    labelId="input-type"
                    margin="dense"
                    variant="outlined"
                    value={selectedType}
                    onChange={handleTypeChange}
                >
                    {typeOptions.map(type => (
                        <MenuItem value={type}>{type}</MenuItem>
                    ))}
                </Select>
                <InputLabel id="input-category">Category</InputLabel>
                <Select
                    fullWidth
                    id="select-category"
                    labelId="input-category"
                    margin="dense"
                    variant="outlined"
                    value={selectedCategory}
                    onChange={handleCategoryChange}
                >
                    {categoryOptions.map(cat => (
                        <MenuItem value={cat}>{cat}</MenuItem>
                    ))}
                </Select>
                <TextField
                    fullWidth
                    id="expenses"
                    label="Expenses $"
                    margin="dense"
                    variant="outlined"
                    value={expenses}
                    onChange={handleExpensesChange}
                />

                <TextField
                    fullWidth
                    id="comments"
                    label="Comments..."
                    margin="dense"
                    multiline
                    rows={4}
                    variant="outlined"
                    value={comments}
                    onChange={handleCommentsChange}
                />
                <TextField
                    fullWidth
                    id="date"
                    label="Date"
                    margin="dense"
                    type="date"
                    variant="outlined"
                    value={selectedDate}
                    onChange={handleDateChange}
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={() => onCancel()} color="primary" variant="outlined">
                    Cancel
                </Button>
                <Button onClick={handleCreate} color="primary" variant="contained">
                    Create
                </Button>
            </DialogActions>
        </Dialog>
    );
}
