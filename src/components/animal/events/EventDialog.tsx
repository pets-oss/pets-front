import React, { useState } from 'react';
import { useParams } from 'react-router';

import {
    Box,
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    FormControl,
    FormHelperText,
    InputLabel,
    MenuItem,
    Select,
    TextField,
    useMediaQuery,
    useTheme,
} from '@material-ui/core';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { Category, Event } from '../../../graphql/types';

export default function EventDialog({ openEventDialog, onCancel, onCreate }: EventDialogProps) {
    const classes = useStyles();
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
    const { id: animalId } = useParams<{ id: string }>();
    // state
    const [type, setType] = useState<string>('');
    const [category, setCategory] = useState<string>('');
    const [expenses, setExpenses] = useState<string>('');
    const [comment, setComment] = useState<string>('');
    const [date, setDate] = useState<string>('');
    const [inputErrors, setInputErrors] = useState<Partial<IInputErrors>>({
        type: '',
        category: '',
        expenses: '',
        comment: '',
        date: '',
    });

    const handleCreate = () => {
        setInputErrors({
            type: '',
            category: '',
            expenses: '',
            comment: '',
            date: '',
        });
        const invalidForm = validateForm(type, category, expenses, comment, date);
        if (invalidForm) return;
        const newEvent: Event = {
            type: { id: TypeOptions.indexOf(type), type },
            id: 123456,
            animal: Number(animalId),
            category: category as Category,
            expenses: parseInt(expenses, 10),
            comments: comment,
            dateTime: Date.parse(date).toString(),
        };
        onCreate(newEvent);
        close();
    };

    const close = () => {
        setInputErrors({
            type: '',
            category: '',
            expenses: '',
            comment: '',
            date: '',
        });
        onCancel();
    };

    const validateForm = (
        typeValue: string,
        categoryValue: string,
        expensesValue: string,
        commentValue: string,
        dateValue: string
    ) => {
        const error: Partial<IInputErrors> = {};
        if (!typeValue.length) {
            error.type = 'Required';
        }
        if (!categoryValue.length) {
            error.category = 'Required';
        }
        if (!expensesValue.length) {
            error.expenses = 'Required';
        } else {
            const isValidNumber = parseFloat(expensesValue);
            if (!isValidNumber) {
                error.expenses = 'Must be a floating number';
            }
        }
        if (!commentValue.length) {
            error.comment = 'Required';
        }
        if (!dateValue.length) {
            error.date = 'Required';
        }
        if (Object.keys(error).length) {
            setInputErrors(error);
            return true;
        }
        return false;
    };

    return (
        <Dialog
            fullWidth
            maxWidth="xs"
            open={openEventDialog}
            fullScreen={fullScreen}
            classes={{
                paper: classes.dialogPaper,
            }}
        >
            <DialogTitle id="event-dialog-title">Create new event</DialogTitle>
            <DialogContent>
                <Box marginTop={2.5} marginBottom={2.5}>
                    <FormControl variant="outlined" color="secondary" fullWidth>
                        <InputLabel id="type">Type</InputLabel>
                        <Select
                            labelId="type"
                            label="Type"
                            value={type}
                            onChange={e => setType(e.target.value as string)}
                            error={!!inputErrors.type}
                        >
                            {TypeOptions.map((option, index) => (
                                <MenuItem key={index} value={option}>
                                    {option}
                                </MenuItem>
                            ))}
                        </Select>
                        {!!inputErrors.type && <FormHelperText>{inputErrors.type}</FormHelperText>}
                    </FormControl>
                </Box>
                <Box marginTop={2.5} marginBottom={2.5}>
                    <FormControl variant="outlined" color="secondary" fullWidth>
                        <InputLabel id="category">Category</InputLabel>
                        <Select
                            labelId="category"
                            label="Category"
                            value={category}
                            onChange={e => setCategory(e.target.value as string)}
                            error={!!inputErrors.category}
                        >
                            {CategoryOptions.map((option, index) => (
                                <MenuItem key={index} value={option}>
                                    {option}
                                </MenuItem>
                            ))}
                        </Select>
                        {!!inputErrors.category && <FormHelperText>{inputErrors.category}</FormHelperText>}
                    </FormControl>
                </Box>
                <Box marginTop={2.5} marginBottom={2.5}>
                    <TextField
                        id="expenses"
                        label="Expenses $"
                        value={expenses}
                        onChange={e => setExpenses(e.target.value)}
                        variant="outlined"
                        fullWidth
                        color="secondary"
                        type="number"
                        error={!!inputErrors.expenses}
                        helperText={inputErrors.expenses ? inputErrors.expenses : ''}
                    />
                </Box>
                <Box marginTop={2.5} marginBottom={2.5}>
                    <TextField
                        id="comment"
                        label="Comments"
                        value={comment}
                        onChange={e => setComment(e.target.value as string)}
                        variant="outlined"
                        fullWidth
                        color="secondary"
                        multiline
                        rows={4}
                        rowsMax={8}
                        error={!!inputErrors.comment}
                        helperText={inputErrors.comment ? inputErrors.comment : ''}
                    />
                </Box>
                <Box marginTop={2.5} marginBottom={2}>
                    <TextField
                        id="date"
                        label="Date"
                        value={date}
                        onChange={e => setDate(e.target.value as string)}
                        variant="outlined"
                        fullWidth
                        color="secondary"
                        type="date"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        error={!!inputErrors.date}
                        helperText={inputErrors.date ? inputErrors.date : ''}
                    />
                </Box>
            </DialogContent>
            <DialogActions>
                <Button variant="outlined" onClick={close}>
                    Cancel
                </Button>
                <Button variant="contained" color="secondary" autoFocus onClick={handleCreate}>
                    Create
                </Button>
            </DialogActions>
        </Dialog>
    );
}

const TypeOptions = [
    'Ženklinimas ir įregistravimas',
    'Laikytojo pasikeitimas',
    'Laikymo vietos pasikeitimas',
    'Savininko pasikeitimas',
    'Dingimas',
    'Suradimas',
    'Nugaišimas',
    'Nugaišinimas',
    'Išvežimas',
    'Vakcinavimas',
    'Augintinio agresyvumas',
];

const CategoryOptions = ['General', 'Medical'];

const useStyles = makeStyles(theme => ({
    buttonContainer: {
        width: '100%',
    },
    dialogPaper: {
        maxWidth: 360,
        [theme.breakpoints.up('xl')]: {
            maxWidth: 500,
        },
    },
}));

interface IInputErrors {
    type: string;
    category: string;
    expenses: string;
    comment: string;
    date: string;
}

interface EventDialogProps {
    openEventDialog: boolean;
    onCancel: () => void;
    onCreate: (event: Event) => void;
}
