import React from 'react';

import { Button, DialogActions, DialogTitle } from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';

interface Props {
    open: boolean;
    onClose: (value: string) => void;
    onCancel: () => void;
    onCreate: () => void;
}

function NewEventDialog({ open, onClose, onCancel, onCreate }: Props) {
    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle id="form-dialog-title">Create New Event</DialogTitle>
            <DialogActions>
                <Button autoFocus onClick={onCancel} color="primary">
                    Cancel
                </Button>
                <Button onClick={onCreate} color="primary">
                    Create
                </Button>
            </DialogActions>
        </Dialog>
    );
}

export default NewEventDialog;
