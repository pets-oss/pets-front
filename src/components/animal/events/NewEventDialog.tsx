import React from 'react';

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
        width: '5ch', // KOREGUOTI
    },
});

export interface SimpleDialogProps {
    open: boolean;
    category: string[];
    onClose: () => void;
    types: string[];
}

export default function NewEventDialog(props: SimpleDialogProps) {
    // eslint-disable-next-line
    const classes = useStyles();
    const { open, category, onClose, types } = props;

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
                    // value={age}
                    //   onChange={handleChange}
                >
                    {types.map(type => (
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
                    // value={age}
                    //   onChange={handleChange}
                >
                    {category.map(cat => (
                        <MenuItem value={cat}>{cat}</MenuItem>
                    ))}
                </Select>
                <TextField fullWidth id="expenses" label="Expenses $" margin="dense" variant="outlined" />
                <TextField
                    fullWidth
                    id="comments"
                    label="Comments..."
                    margin="dense"
                    multiline
                    rows={4}
                    variant="outlined"
                />
                <TextField
                    fullWidth
                    id="date"
                    label="Date"
                    margin="dense"
                    type="date"
                    variant="outlined"
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={() => onClose()} color="primary" variant="outlined">
                    Cancel
                </Button>
                {/* KITOKS FUNKCIONALUMAS TURETU BUTI */}
                <Button onClick={() => onClose()} color="primary" variant="contained">
                    Create
                </Button>
            </DialogActions>
        </Dialog>
    );
}
