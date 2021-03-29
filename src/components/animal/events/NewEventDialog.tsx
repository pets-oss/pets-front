import React, { useState } from 'react';

import {
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
} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import { Category, Event } from '../../../graphql/types';

export default function NewEventDialog({
    onCancel,
    onCreate,
    open,
    setOpen,
    typeOptions,
    categories,
}: NewEventDialogProps) {
    const [typeValue, setTypeValue] = useState<string>('');
    const [categoryValue, setCategoryValue] = useState<Category | ''>('');
    const [expensesValue, setExpensesValue] = useState<number | null>(null);
    const [commentsValue, setCommentsValue] = useState<string>('');
    const [dateValue, setDateValue] = useState<string>('');

    const handleEventDialogOpen = () => {
        setOpen(true);
    };

    const handleTypeChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        setTypeValue(event.target.value as string);
    };

    const handleCategoryChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        setCategoryValue(event.target.value as Category);
    };

    const handleExpensesChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        setExpensesValue(event.target.value as number);
    };

    const handleCommentsChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        setCommentsValue(event.target.value as string);
    };

    const handleDateChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        setDateValue(event.target.value as string);
    };

    const resetState = () => {
        setTypeValue('');
        setCategoryValue('');
        setExpensesValue(null);
        setCommentsValue('');
        setDateValue('');
    };

    const handleCreate = () => {
        if (typeValue && expensesValue && dateValue && commentsValue && categoryValue) {
            onCreate({
                id: 123456,
                animal: 123456,
                type: { id: 3, type: typeValue },
                expenses: expensesValue,
                dateTime: Date.parse(dateValue).toString(),
                comments: commentsValue.trim(),
                category: categoryValue,
            });
            resetState();
        }
    };

    const handleCancel = () => {
        resetState();
        onCancel();
    };

    return (
        <>
            <Button color="primary" variant="contained" startIcon={<AddIcon />} onClick={handleEventDialogOpen}>
                Create
            </Button>

            <Dialog open={open} onClose={onCancel} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">
                    <Typography variant="h6">Create new event</Typography>
                </DialogTitle>

                <DialogContent>
                    <FormControl variant="outlined" color="secondary" fullWidth margin="dense">
                        <InputLabel htmlFor="new-event-type">Type</InputLabel>
                        <Select
                            value={typeValue}
                            onChange={handleTypeChange}
                            label="Type"
                            inputProps={{
                                name: 'new-event-type',
                                id: 'new-event-type',
                            }}
                        >
                            {typeOptions.map(option => (
                                <MenuItem value={option}>{option}</MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                    <FormControl variant="outlined" color="secondary" fullWidth margin="dense">
                        <InputLabel htmlFor="new-event-category">Category</InputLabel>
                        <Select
                            value={categoryValue}
                            onChange={handleCategoryChange}
                            label="Category"
                            inputProps={{
                                name: 'new-event-category',
                                id: 'new-event-category',
                            }}
                        >
                            {categories.map(category => (
                                <MenuItem value={category}>{category}</MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                    <TextField
                        id="new-event-expenses"
                        value={expensesValue}
                        onChange={handleExpensesChange}
                        label="Expenses $"
                        type="number"
                        margin="dense"
                        fullWidth
                        variant="outlined"
                        color="secondary"
                    />
                    <TextField
                        id="new-event-comments"
                        value={commentsValue}
                        onChange={handleCommentsChange}
                        label="Comments..."
                        multiline
                        rows={4}
                        margin="dense"
                        fullWidth
                        variant="outlined"
                        color="secondary"
                    />
                    <TextField
                        id="new-event-date"
                        value={dateValue}
                        onChange={handleDateChange}
                        label="Date"
                        type="datetime-local"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        margin="dense"
                        fullWidth
                        variant="outlined"
                        color="secondary"
                    />
                </DialogContent>

                <DialogActions>
                    <Button onClick={handleCancel} color="secondary" variant="outlined">
                        Cancel
                    </Button>
                    <Button onClick={handleCreate} color="secondary" variant="contained">
                        Create
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
}

interface NewEventDialogProps {
    onCancel: () => void;
    onCreate: (newEvent: Event) => void;
    open: boolean;
    setOpen: (open: boolean) => void;
    typeOptions: string[];
    categories: string[];
}
