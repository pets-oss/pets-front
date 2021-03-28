/* eslint-disable max-len */
/* eslint-disable prettier/prettier */
import React, { useState } from 'react';

import {
    Box,
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
    useMediaQuery,
    useTheme,
} from '@material-ui/core';

const typeOptionsList: string[] = [
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

const categoryList: string[] = ['General', 'Medical'];

export default function EventDialog({ onCreate }: any) {
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
    const [dialogOpen, setDialogOpen] = useState(false);
    const [type, setType] = useState('');
    const [category, setCategory] = useState('');
    const [expenses, setExpenses] = useState(0);
    const [date, setdate] = useState('');
    const [comments, setComments] = useState('');
    function displayDialog() {
        setDialogOpen(true);
        setType('');
        setCategory('');
        setExpenses(0);
        setdate('');
        setComments('');
    }
    function handleClickClose() {
        setDialogOpen(false);
    }
    function handleClickCreate() {
        if (validateInputs()) {
            const newEvent = {
                id: 123456,
                type,
                expenses,
                category,
                comments,
                dateTime: date,
            };
            onCreate(newEvent);
            handleClickClose();
        } else {
            // error message
        }
    }
    function handleChangeType(newType: string) {
        setType(newType);
    }
    function handleChangeCategoty(newCategory: string) {
        setCategory(newCategory);
    }
    function handleChangeExpenses(expences: number) {
        const temp = Number(expences.toFixed(2));
        setExpenses(temp);
    }
    function handleChangeDate(newDate: string) {
        setdate(newDate);
    }
    function handleChangeComments(newComments: string) {
        setComments(newComments);
    }
    function validateInputs() {
        if (type !== "" && category !== "" && date !== "" && comments !== "" && typeof (expenses) === "number")
            return true
        return false
    }
    return (
        <>
            <Box mb={2} display="flex" justifyContent="space-between" alignItems="center">
                <Typography variant="h5" component="h3">
                    Create new event
                </Typography>
                <Button color="primary" variant="contained" onClick={displayDialog}>
                    Create
                </Button>
            </Box>
            <Dialog
                fullWidth
                disableBackdropClick
                disableEscapeKeyDown
                maxWidth="sm"
                fullScreen={fullScreen}
                aria-labelledby="confirmation-dialog-title"
                open={dialogOpen}
            >
                <DialogTitle id="confirmation-dialog-title">Create Event</DialogTitle>
                <DialogContent>
                    <Box marginTop={2.5} marginBottom={2.5}>
                        <FormControl variant="outlined" fullWidth>
                            <InputLabel id="type" htmlFor="type">
                                Type
                            </InputLabel>
                            <Select
                                labelId="type"
                                id="type"
                                label="type"
                                value={type}
                                onChange={event => handleChangeType(event.target.value as string)}
                                required
                            >
                                {typeOptionsList.map(option => (
                                    <MenuItem key={option} value={option}>
                                        {option}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </Box>
                    <Box marginTop={2.5} marginBottom={2.5}>
                        <FormControl variant="outlined" fullWidth>
                            <InputLabel id="category" htmlFor="category">
                                Category
                            </InputLabel>
                            <Select
                                labelId="category"
                                id="category"
                                label="category"
                                value={category}
                                onChange={event => handleChangeCategoty(event.target.value as string)}
                                required
                            >
                                {categoryList.map(option => (
                                    <MenuItem key={option} value={option}>
                                        {option}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </Box>
                    <Box marginTop={2.5} marginBottom={2.5}>
                        <TextField
                            id="Expenses"
                            label="Expenses $"
                            fullWidth
                            variant="outlined"
                            type="number"
                            value={expenses}
                            onChange={event => handleChangeExpenses(parseFloat(event.target.value))}
                        />
                    </Box>
                    <Box marginTop={2.5} marginBottom={2.5}>
                        <TextField
                            id="comments"
                            label="Comments"
                            fullWidth
                            variant="outlined"
                            multiline
                            value={comments}
                            rows={4}
                            onChange={event => handleChangeComments(event.target.value)}
                        />
                    </Box>
                    <Box marginTop={2.5} marginBottom={2.5}>
                        <TextField
                            id="date"
                            label="Date"
                            fullWidth
                            variant="outlined"
                            type="date"
                            InputLabelProps={{ shrink: true }}
                            value={date}
                            onChange={event => handleChangeDate(event.target.value)}
                        />
                    </Box>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClickClose} variant="outlined" color="secondary">
                        Cancel
                    </Button>
                    <Button onClick={handleClickCreate} variant="contained" color="secondary" autoFocus>Create</Button>
                </DialogActions>
            </Dialog>
        </>
    );
}
