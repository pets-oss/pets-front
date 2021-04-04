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
import { NewEvent } from '../../../graphql/types';

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
    onCreate: (object: NewEvent) => void;
    typeOptions: string[];
    categories: string[];
    newEvent: NewEvent;
    handleChange: (e: any) => void;
}

function NewEventDialog({ open, onClose, onCancel, onCreate, typeOptions, categories, newEvent, handleChange }: Props) {
    const classes = useStyles();

    const { type, category, expenses, comments, date } = newEvent;

    // const [state, setState] = React.useState<NewEvent>({
    //     id: null,
    //     type: '',
    //     category: '',
    //     expenses: null,
    //     comments: '',
    //     date: getYMDDateFromTS(`${Date.now()}`),
    // });

    // const handleChange = (event: React.ChangeEvent<{ name?: string; value: unknown }>) => {
    //     const name = event.target.name as keyof typeof state;
    //     setState({
    //         ...state,
    //         id: 123456,
    //         [name]: event.target.value,
    //     });
    // };

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
                    value={parseFloat(`${expenses}`)}
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
                    value={date}
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
                <Button onClick={() => onCreate(newEvent)} color="primary">
                    Create
                </Button>
            </DialogActions>
        </Dialog>
    );
}

export default NewEventDialog;
