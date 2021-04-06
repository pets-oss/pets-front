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
import { Category, Event } from '../../../graphql/types';

export default function NewEventDialog({ onCancel, onCreate, open, typeOptions, categories }: NewEventDialogProps) {
    const initialInputState = {
        type: '',
        category: undefined,
        expenses: undefined,
        comments: '',
        date: '',
    };
    const [inputs, setInputs] = useState<InputTypes>(initialInputState);

    const handleInputChange = (e: any) => {
        setInputs(prevInputs => ({ ...prevInputs, [e.target.name]: e.target.value }));
    };

    const resetState = () => {
        setInputs(initialInputState);
    };

    const handleCreate = () => {
        const { type, expenses, category, date, comments } = inputs;

        if (type && expenses && date && comments && category) {
            onCreate({
                id: 123456,
                animal: 123456,
                type: { id: 3, type },
                expenses,
                dateTime: Date.parse(date).toString(),
                comments: comments.trim(),
                category,
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
            <Dialog open={open} onClose={onCancel} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">
                    <Typography variant="h6">Create new event</Typography>
                </DialogTitle>

                <DialogContent>
                    <FormControl variant="outlined" color="secondary" fullWidth margin="dense">
                        <InputLabel htmlFor="type">Type</InputLabel>
                        <Select
                            value={inputs.type}
                            onChange={handleInputChange}
                            label="Type"
                            inputProps={{
                                name: 'type',
                                id: 'type',
                            }}
                        >
                            {typeOptions.map(option => (
                                <MenuItem value={option}>{option}</MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                    <FormControl variant="outlined" color="secondary" fullWidth margin="dense">
                        <InputLabel htmlFor="category">Category</InputLabel>
                        <Select
                            value={inputs.category}
                            onChange={handleInputChange}
                            label="Category"
                            inputProps={{
                                name: 'category',
                                id: 'category',
                            }}
                        >
                            {categories.map(category => (
                                <MenuItem value={category}>{category}</MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                    <TextField
                        id="expenses"
                        name="expenses"
                        value={inputs.expenses}
                        onChange={handleInputChange}
                        label="Expenses $"
                        type="number"
                        margin="dense"
                        fullWidth
                        variant="outlined"
                        color="secondary"
                    />
                    <TextField
                        id="comments"
                        name="comments"
                        value={inputs.comments}
                        onChange={handleInputChange}
                        label="Comments..."
                        multiline
                        rows={4}
                        margin="dense"
                        fullWidth
                        variant="outlined"
                        color="secondary"
                    />
                    <TextField
                        id="date"
                        name="date"
                        value={inputs.date}
                        onChange={handleInputChange}
                        label="Date"
                        type="date"
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

interface InputTypes {
    type: string;
    category: Category | undefined;
    expenses: number | undefined;
    comments: string;
    date: string;
}

interface NewEventDialogProps {
    onCancel: () => void;
    onCreate: (newEvent: Event) => void;
    open: boolean;
    typeOptions: string[];
    categories: string[];
}
