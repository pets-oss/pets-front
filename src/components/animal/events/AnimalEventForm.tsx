import React from 'react';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles({
    margin: {
        marginBottom: 24,
        marginLeft: 15,
        marginRight: 16,
    },
    title: {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 500,
        fontSize: 18,
        lineHeight: 24,
        letterSpacing: 0.15,
        width: 360,
    },
    cancel: {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 500,
        fontSize: 14,
        lineHeight: 16,
        textAlign: 'center',
        letterSpacing: 1.25,
        textTransform: 'uppercase',
        color: '#13493B',
    },
    create: {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 500,
        fontSize: 14,
        lineHeight: 16,
        letterSpacing: 1.25,
        textTransform: 'uppercase',
        color: '#FFFFFF',
    },
});

export default function AnimalEventForm({ open, handleClose, typeOptions, categories, handleCreate }) {
    const classes = useStyles();
    const [values, setFormValues] = React.useState({
        typeOption: null,
        category: null,
        expense: null,
        comment: null,
        date: null,
    });
    const handleChange = e => {
        e.preventDefault();
        setFormValues({
            ...values,
            [e.target.name]: e.target.value,
        });
    };
    const onCreate = () => {
        handleCreate(values);
    };
    const isValid =
        values.typeOption != null &&
        values.category != null &&
        values.expense != null &&
        values.comment != null &&
        values.date != null;

    return (
        <div>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle className={classes.title}>Create new event</DialogTitle>
                <FormControl variant="outlined" className={classes.margin}>
                    <InputLabel htmlFor="outlined-age-native-simple">Type</InputLabel>
                    <Select
                        value={values.typeOption}
                        onChange={handleChange}
                        label="Type"
                        inputProps={{
                            name: 'typeOption',
                            id: 'typeOption-id',
                        }}
                    >
                        {typeOptions.map(typeOption => (
                            <MenuItem value={typeOption}>{typeOption}</MenuItem>
                        ))}
                    </Select>
                </FormControl>
                <FormControl variant="outlined" className={classes.margin}>
                    <InputLabel htmlFor="outlined-age-native-simple">Category</InputLabel>
                    <Select
                        value={values.category}
                        onChange={handleChange}
                        label="Category"
                        inputProps={{
                            name: 'category',
                            id: 'category-id',
                        }}
                    >
                        {categories.map(category => (
                            <MenuItem value={category}>{category}</MenuItem>
                        ))}
                    </Select>
                </FormControl>
                <FormControl className={classes.margin}>
                    <TextField
                        id="expenses"
                        label="Expenses $"
                        type="number"
                        variant="outlined"
                        value={values.expense}
                        onChange={handleChange}
                        inputProps={{
                            name: 'expense',
                            id: 'expense-id',
                        }}
                    />
                </FormControl>
                <FormControl className={classes.margin}>
                    <TextField
                        id="comments"
                        label="Comments"
                        type="text"
                        variant="outlined"
                        value={values.comment}
                        onChange={handleChange}
                        inputProps={{
                            name: 'comment',
                            id: 'comment-id',
                        }}
                    />
                </FormControl>
                <FormControl className={classes.margin}>
                    <TextField
                        id="date"
                        defaultValue=""
                        type="date"
                        variant="outlined"
                        value={values.date}
                        onChange={handleChange}
                        inputProps={{
                            name: 'date',
                            id: 'date-id',
                        }}
                    />
                </FormControl>
                <DialogActions>
                    <Button onClick={handleClose} color="primary" variant="outlined">
                        Cancel
                    </Button>
                    <Button onClick={onCreate} color="primary" disabled={!isValid} variant="contained">
                        Create
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
