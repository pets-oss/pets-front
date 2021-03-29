import React, { useState } from 'react';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Alert } from '@material-ui/lab';
import { EventDialogProps } from '../../../interface/EventDialogInterface';
import { GenerateUUID } from '../../../utils/UUIDGeneratorUtils';

export default function AnimalEventModal({ open, onClose, onCreate, categoryOptions, typeOptions }: EventDialogProps) {
    const classes = useStyles();
    const [type, setType] = useState('');
    const [formError, setFormError] = useState(false);
    const [typeError, setTypeError] = useState(false);
    const [category, setCategory] = useState('');
    const [categoryError, setCategoryError] = useState(false);
    const [expenses, setExpenses] = useState('');
    const [expensesError, setExpensesError] = useState(false);
    const [comment, setComment] = useState('');
    const [commentError, setCommentError] = useState(false);
    const [date, setDate] = useState('');
    const [dateError, setDateError] = useState(false);

    const handleTypeChange = event => {
        setType(event.target.value);
    };

    const handleCategoryChange = event => {
        setCategory(event.target.value);
    };

    const handleExpensesChange = event => {
        if (typeof event.target.value === 'number') {
            setExpensesError(true);
        }

        setExpenses(event.target.value);
    };

    const handleDateChange = event => {
        setDate(event.target.value);
    };

    const handleCommentChange = event => {
        setComment(event.target.value);
    };

    const handleClose = () => {
        onClose();
    };

    const handleFormValuesCheck = () => {
        if (!type) {
            setTypeError(true);
            return false;
        }

        if (!category) {
            setCategoryError(true);
            return false;
        }

        if (!expenses) {
            setExpensesError(true);
            return false;
        }

        if (!comment) {
            setCommentError(true);
            return false;
        }

        if (!date) {
            setDateError(true);
            return false;
        }

        return true;
    };

    const handleFormValidate = () => {
        if (!handleFormValuesCheck()) {
            setFormError(true);
        }

        return true;
    };

    const handleCreate = () => {
        if (handleFormValidate()) {
            const newEventRecord = {
                id: GenerateUUID,
                type: { id: typeOptions.indexOf(type), type },
                expenses,
                category,
                comment,
                dateTime: new Date(date).getTime().toString(),
            };

            onCreate(newEventRecord);
            handleClose();
        } else {
            setFormError(true);
        }
    };

    return (
        <div>
            <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open} fullWidth>
                <DialogTitle id="form-dialog-title">Create new event</DialogTitle>
                <DialogContent className={classes.root}>
                    <div>
                        {formError && (
                            <Alert className={classes.error} severity="error">
                                Error processing submitted values
                            </Alert>
                        )}
                        <TextField
                            id="type"
                            select
                            label="Type"
                            defaultValue="Type"
                            variant="outlined"
                            fullWidth
                            value={type}
                            onChange={handleTypeChange}
                            InputLabelProps={{
                                shrink: true,
                            }}
                        >
                            {typeOptions.map(option => (
                                <MenuItem key={option} value={option}>
                                    {option}
                                </MenuItem>
                            ))}
                        </TextField>
                        {typeError && (
                            <Alert className={classes.error} severity="error">
                                Type is required
                            </Alert>
                        )}
                        <TextField
                            id="categories"
                            select
                            label="Category"
                            defaultValue="Category"
                            value={category}
                            variant="outlined"
                            fullWidth
                            onChange={handleCategoryChange}
                            InputLabelProps={{
                                shrink: true,
                            }}
                        >
                            {categoryOptions.map(option => (
                                <MenuItem key={option} value={option}>
                                    {option}
                                </MenuItem>
                            ))}
                        </TextField>
                        {categoryError && (
                            <Alert className={classes.error} severity="error">
                                Category is required
                            </Alert>
                        )}
                        <TextField
                            id="expenses"
                            label="Expenses $"
                            type="number"
                            variant="outlined"
                            fullWidth
                            onKeyUp={handleExpensesChange}
                            error={expensesError}
                        />
                        {expensesError && (
                            <Alert className={classes.error} severity="error">
                                Unsupported value
                            </Alert>
                        )}
                        <TextField
                            id="comment"
                            label="Komentarai"
                            rows={4}
                            multiline
                            variant="outlined"
                            fullWidth
                            onChange={handleCommentChange}
                        />
                        {commentError && (
                            <Alert className={classes.error} severity="error">
                                Comment is required
                            </Alert>
                        )}
                        <TextField
                            id="date"
                            label="Data"
                            type="date"
                            value={date}
                            variant="outlined"
                            fullWidth
                            InputLabelProps={{
                                shrink: true,
                            }}
                            onChange={handleDateChange}
                        />
                        {dateError && (
                            <Alert className={classes.error} severity="error">
                                Date is required
                            </Alert>
                        )}
                    </div>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} variant="outlined" color="default">
                        Cancel
                    </Button>
                    <Button onClick={handleCreate} variant="contained" color="primary">
                        Create
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

const useStyles = makeStyles(theme => ({
    root: {
        '& .MuiTextField-root': {
            marginBottom: theme.spacing(3),
        },
    },
    error: {
        marginBottom: theme.spacing(2),
    },
}));
