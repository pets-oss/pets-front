import React from 'react';

import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    TextField,
} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import NewEventAutocomplete from './DialogAutocomplete';

interface Props {
    typeOptions: string[];
    categoryOptions: string[];
    onCreate: () => void;
}

export function CreateNewEventDialog({ typeOptions, categoryOptions, onCreate }: Props) {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Button color="primary" variant="contained" startIcon={<AddIcon />} onClick={handleClickOpen}>
                Create
            </Button>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
                <DialogContent>
                    <form method="dialog" onSubmit={onCreate}>
                        <NewEventAutocomplete options={typeOptions} label="Type" />
                        <NewEventAutocomplete options={categoryOptions} label="Category" />
                        {/* <NewEventAutocomplete options={ } label="Expenses $" />
                    <NewEventAutocomplete options={ } label="Comments" /> */}

                        <DialogContentText>
                            To subscribe to this website, please enter your email address here. We will send updates
                            occasionally.
                        </DialogContentText>
                        <TextField autoFocus margin="dense" id="name" label="Email Address" type="email" fullWidth />
                    </form>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={handleClose} color="primary">
                        Create
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
