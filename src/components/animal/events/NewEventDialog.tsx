import React from 'react';

import {
    Button,
    DialogActions,
    DialogTitle,
    FormControl,
    InputLabel,
    makeStyles,
    Select,
    TextField,
    Theme,
} from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';

const useStyles = makeStyles((theme: Theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

interface Props {
    open: boolean;
    onClose: (value: string) => void;
    onCancel: () => void;
    onCreate: () => void;
    typeOptions: string[];
    category: string[];
}

function NewEventDialog({ open, onClose, onCancel, onCreate, typeOptions, category }: Props) {
    const classes = useStyles();

    const [state, setState] = React.useState<{ type: string | number; name: string }>({
        type: '',
        name: 'hai',
    });

    const handleChange = (event: React.ChangeEvent<{ name?: string; value: unknown }>) => {
        const name = event.target.name as keyof typeof state;
        setState({
            ...state,
            [name]: event.target.value,
        });
    };

    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle id="form-dialog-title">Create New Event</DialogTitle>
            <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel htmlFor="outlined-age-native-simple">Type</InputLabel>
                <Select
                    native
                    value={state.type}
                    onChange={handleChange}
                    label="Type"
                    inputProps={{
                        name: 'type',
                        id: 'outlined-age-native-simple',
                    }}
                >
                    <option aria-label="None" value="" />
                    {typeOptions.map(option => (
                        <option value={option}>{option}</option>
                    ))}
                </Select>
            </FormControl>
            <TextField autoFocus margin="dense" id="name" label="Email Address" type="email" fullWidth />

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
