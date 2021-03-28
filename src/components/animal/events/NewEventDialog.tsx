import React, { useState } from 'react';

import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    InputLabel,
    MenuItem,
    Select,
    TextField,
} from '@material-ui/core';

interface NewEventDialogProps {
    categoryOptions: string[];
    onCancel: () => void;
    onCreate: any;
    open: boolean;
    typeOptions: string[];
}

export default function NewEventDialog(props: NewEventDialogProps) {
    const { categoryOptions, onCancel, onCreate, open, typeOptions } = props;

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
    };

    const resetInputs = () => {
        setSelectedType('');
        setSelectedCategory('');
        setExpenses('');
        setComments('');
        setSelectedDate('');
    };

    const handleCancel = () => {
        resetInputs();
        onCancel();
    };

    const handleCreate = () => {
        if (
            selectedType !== '' &&
            selectedCategory !== '' &&
            expenses !== '' &&
            comments !== '' &&
            selectedDate !== ''
        ) {
            const date = new Date(selectedDate).getTime().toString();
            const newEvent = {
                id: 123456,
                type: { __typename: 'EventType', id: typeOptions.indexOf(selectedType), type: selectedType },
                expenses,
                category: selectedCategory,
                comments,
                dateTime: date,
            };
            onCreate(newEvent);
            resetInputs();
            onCancel();
        }
    };

    return (
        <Dialog aria-labelledby="dialog-title" open={open}>
            <DialogTitle id="dialog-title">Create new event</DialogTitle>
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
                    {categoryOptions.map(category => (
                        <MenuItem value={category}>{category}</MenuItem>
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
                <Button onClick={handleCancel} color="primary" variant="outlined">
                    Cancel
                </Button>
                <Button onClick={handleCreate} color="primary" variant="contained">
                    Create
                </Button>
            </DialogActions>
        </Dialog>
    );
}
