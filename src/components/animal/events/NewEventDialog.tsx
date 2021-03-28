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

// interface NewEventProps { }

function NewEventDialog({ onCancel, onCreate, open, setOpen, typeOptions }: any) {
    const [type, setType] = useState<any>('');
    const [category, setCategory] = useState('');
    const [expenses, setExpenses] = useState(null);
    const [comments, setComments] = useState('');
    const [date, setDate] = useState('');

    const handleClose = () => {
        setOpen(false);
    };

    const handleTypeChange = (event: React.ChangeEvent<{ name?: string; value: unknown }>) => {
        setType(event.target.value);
    };

    // const handleCategoryChange = (event: React.ChangeEvent<{ name?: string; value: unknown }>) => {
    //     setCategory(event.target.value);
    // };

    return (
        <div>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">
                    <Typography variant="h6">Create new event</Typography>
                </DialogTitle>
                <DialogContent>
                    <FormControl variant="outlined" color="secondary" fullWidth>
                        <InputLabel htmlFor="type">Type</InputLabel>
                        <Select
                            value={type}
                            onChange={handleTypeChange}
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
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Expenses"
                        type="email"
                        fullWidth
                        variant="outlined"
                        color="secondary"
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={onCancel} color="secondary" variant="outlined">
                        Cancel
                    </Button>
                    <Button onClick={onCreate} color="secondary" variant="contained">
                        Create
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default NewEventDialog;
