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
import { EventType } from '../../../graphql/types';
import { getYMDDateFromTS } from '../../../utils/dateFormatters';

const useStyles = makeStyles((theme: Theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

export type NewEvent = {
    id: number;
    category: string;
    expenses: number;
    comments: string;
    dateTime: string;
    type: string;
};

interface Props {
    open: boolean;
    onClose: (value: string) => void;
    onCancel: () => void;
    onCreate: (newEvent: any) => void;
    typeOptions: string[];
    categories: string[];
    animalId: number;
}

function NewEventDialog({ open, onClose, onCancel, onCreate, typeOptions, categories, animalId }: Props) {
    const classes = useStyles();

    const [newEvent, setNewEvent] = React.useState<NewEvent>({
        id: animalId,
        type: '',
        category: '',
        expenses: 0,
        comments: '',
        dateTime: `${Date.now()}`,
    });

    const { type, category, expenses, comments, dateTime } = newEvent;

    const handleChange = (event: React.ChangeEvent<{ name?: string; value: unknown }>) => {
        const name = event.target.name as keyof typeof newEvent;
        setNewEvent({
            ...newEvent,
            id: 123456,
            [name]: event.target.value,
        });
    };

    const resetState = () => {
        setNewEvent({
            id: 0,
            type: '',
            category: '',
            expenses: 0,
            comments: '',
            dateTime: `${Date.now()}`,
        });
    };

    const handleCreate = () => {
        const eventTypeObj: EventType = {
            type,
            id: typeOptions.indexOf(type),
        };
        if (type && category && expenses && comments && dateTime) {
            onCreate({
                id: 12345,
                animal: animalId,
                type: eventTypeObj,
                expenses,
                dateTime,
                comments,
                category,
            });
        }
        resetState();
    };

    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle id="form-dialog-title">Create New Event</DialogTitle>
            <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel htmlFor="outlined-age-native-simple">Type</InputLabel>
                <Select
                    native
                    value={type}
                    onChange={handleChange}
                    label="Type"
                    inputProps={{
                        name: 'type',
                        id: 'outlined-age-native-simple',
                    }}
                >
                    <option aria-label="None" value="" />
                    {typeOptions.map(option => (
                        <option value={option} key={option}>
                            {option}
                        </option>
                    ))}
                </Select>
            </FormControl>
            <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel htmlFor="outlined-age-native-simple">Category</InputLabel>
                <Select
                    native
                    value={category}
                    onChange={handleChange}
                    label="Category"
                    inputProps={{
                        name: 'category',
                        id: 'outlined-age-native-simple',
                    }}
                >
                    <option aria-label="None" value="" />
                    {categories.map(option => (
                        <option value={option} key={option}>
                            {option}
                        </option>
                    ))}
                </Select>
            </FormControl>
            <FormControl variant="outlined" className={classes.formControl}>
                <TextField
                    autoFocus
                    margin="dense"
                    id="expenses"
                    label="Expenses $"
                    name="expenses"
                    type="number"
                    fullWidth
                    variant="outlined"
                    value={expenses}
                    onChange={handleChange}
                />
            </FormControl>

            <FormControl variant="outlined" className={classes.formControl}>
                <TextField
                    margin="dense"
                    label="Comments"
                    multiline
                    rows={4}
                    name="comments"
                    variant="outlined"
                    value={comments}
                    onChange={handleChange}
                />
            </FormControl>

            <FormControl variant="outlined" className={classes.formControl}>
                <TextField
                    id="date"
                    margin="dense"
                    label="Date"
                    fullWidth
                    type="date"
                    name="date"
                    value={getYMDDateFromTS(dateTime)}
                    variant="outlined"
                    onChange={handleChange}
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
            </FormControl>

            <DialogActions>
                <Button autoFocus onClick={onCancel} color="primary">
                    Cancel
                </Button>
                <Button onClick={handleCreate} color="primary">
                    Create
                </Button>
            </DialogActions>
        </Dialog>
    );
}

export default NewEventDialog;
