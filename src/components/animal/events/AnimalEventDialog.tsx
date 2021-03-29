import React, { useState } from 'react';

import {
    Box,
    Button,
    DialogActions,
    DialogContent,
    FormControl,
    FormHelperText,
    InputLabel,
    MenuItem,
    Select,
    TextField,
    Typography,
    useMediaQuery,
    useTheme,
} from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';

const AnimalEventDialog = ({ dialogOpen, setDialogOpen, typeOptions, categories, onCreate, handleDialogClose }) => {
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

    const [valueType, setValueType] = useState();
    const [valueCategory, setValueCategory] = useState();
    const [valueExpenses, setValueExpenses] = useState();
    const [valueComments, setValueComments] = useState();
    const [valueDate, setValueDate] = useState();
    const [errors, setErrors] = useState({
        valueTypeError: false,
        valueCategoryError: false,
        valueExpensesError: false,
        valueCommentsError: false,
        valueDateError: false,
    });
    const [errorMessages, setErrorMessages] = useState({
        valueTypeErrorMessage: '',
        valueCategoryErrorMessage: '',
        valueExpensesErrorMessage: '',
        valueCommentsErrorMessage: '',
        valueDateErrorMessage: '',
    });

    const handleChangeType = event => {
        setValueType(event.target.value);
        checkValues({ valueType: event.target.value });
    };

    const handleChangeCategory = event => {
        setValueCategory(event.target.value);
        checkValues({ valueCategory: event.target.value });
    };

    const handleChangeExpenses = event => {
        setValueExpenses(event.target.value);
        checkValues({ valueExpenses: event.target.value });
    };

    const handleChangeComments = event => {
        setValueComments(event.target.value);
        checkValues({ valueComments: event.target.value });
    };

    const handleChangeDate = event => {
        setValueDate(event.target.value);
        checkValues({ valueDate: event.target.value });
    };

    const handleCreate = () => {
        const values = { valueType, valueCategory, valueExpenses, valueComments, valueDate };
        const isValid = checkValues(values);

        if (!isValid) return;

        setDialogOpen(false);

        const thisEvent = {
            id: 12345,
            animal: 1,
            type: {
                id: 1,
                valueType,
            },
            category: valueCategory,
            expenses: valueExpenses,
            comments: valueComments,
            dateTime: valueDate,
        };

        onCreate(thisEvent);

        clearDialog();
    };

    const clearDialog = () => {
        setValueType(undefined);
        setValueCategory(undefined);
        setValueExpenses(undefined);
        setValueComments(undefined);
        setValueDate(undefined);
    };

    function checkValues(values) {
        const thisKeys = Object.keys(values);
        const thisValues = Object.values(values);
        let isValid = true;

        const handleSetErrors = ({ callback, key, value }) => {
            callback(previous => ({
                ...previous,
                [key]: value,
            }));
        };

        thisValues.map((thisValue, index) => {
            if (thisValue === '' || thisValue === undefined) {
                handleSetErrors({ callback: setErrors, key: [`${thisKeys[index]}Error`], value: true });
                handleSetErrors({
                    callback: setErrorMessages,
                    key: [`${thisKeys[index]}ErrorMessage`],
                    value: 'Please fill this field',
                });

                isValid = false;
            } else {
                handleSetErrors({ callback: setErrors, key: [`${thisKeys[index]}Error`], value: false });
                handleSetErrors({
                    callback: setErrorMessages,
                    key: [`${thisKeys[index]}ErrorMessage`],
                    value: '',
                });
            }

            return null;
        });

        if (values.valueExpenses) {
            const regex = /^[0-9]\d*(((,\d{1,2})|(\.\d{1,2}))?)$/;

            if (regex.test(values.valueExpenses)) {
                handleSetErrors({ callback: setErrors, key: 'valueExpensesError', value: false });
                handleSetErrors({
                    callback: setErrorMessages,
                    key: 'valueExpensesErrorMessage',
                    value: '',
                });
            } else {
                handleSetErrors({ callback: setErrors, key: 'valueExpensesError', value: true });
                handleSetErrors({
                    callback: setErrorMessages,
                    key: 'valueExpensesErrorMessage',
                    value: 'Please correct this field',
                });
            }
        }

        return isValid;
    }

    const handleThisDialogClose = () => {
        clearDialog();
        handleDialogClose();
    };

    return (
        <Dialog fullWidth maxWidth="sm" open={dialogOpen} fullScreen={fullScreen} onClose={handleThisDialogClose}>
            <DialogContent>
                <Box display="flex" justifyContent="space-between" alignItems="center">
                    <Typography variant="h6">Create new event</Typography>
                </Box>
                <Box marginTop={2.5} marginBottom={2.5}>
                    <FormControl variant="outlined" fullWidth error={errors.valueTypeError}>
                        <InputLabel id="labelType" htmlFor="Type">
                            Type
                        </InputLabel>
                        <Select
                            labelId="labelType"
                            id="Type"
                            label="Type"
                            value={valueType ?? ''}
                            onChange={handleChangeType}
                        >
                            {typeOptions.map(typeOption => {
                                return (
                                    <MenuItem key={typeOption} value={typeOption}>
                                        {typeOption}
                                    </MenuItem>
                                );
                            })}
                        </Select>
                        <FormHelperText>{errorMessages.valueTypeErrorMessage ?? ''}</FormHelperText>
                    </FormControl>
                </Box>
                <Box marginTop={2.5} marginBottom={2.5}>
                    <FormControl variant="outlined" fullWidth error={errors.valueCategoryError}>
                        <InputLabel id="labelCategory" htmlFor="Category">
                            Category
                        </InputLabel>
                        <Select
                            labelId="labelCategory"
                            id="Category"
                            label="Category"
                            value={valueCategory ?? ''}
                            onChange={handleChangeCategory}
                        >
                            {categories.map(category => {
                                return (
                                    <MenuItem key={category} value={category}>
                                        {category}
                                    </MenuItem>
                                );
                            })}
                        </Select>
                        <FormHelperText>{errorMessages.valueCategoryErrorMessage ?? ''}</FormHelperText>
                    </FormControl>
                </Box>
                <Box marginTop={2.5} marginBottom={2.5}>
                    <FormControl fullWidth>
                        <TextField
                            error={errors.valueExpensesError}
                            variant="outlined"
                            id="Expenses"
                            label="Expenses €"
                            value={valueExpenses ?? ''}
                            onChange={handleChangeExpenses}
                        />
                        <FormHelperText error={errors.valueExpensesError}>
                            {errorMessages.valueExpensesErrorMessage ?? ''}
                        </FormHelperText>
                    </FormControl>
                </Box>
                <Box marginTop={2.5} marginBottom={2.5}>
                    <FormControl variant="outlined" fullWidth>
                        <TextField
                            error={errors.valueCommentsError}
                            id="Comments"
                            label="Comments"
                            multiline
                            rows={4}
                            onChange={handleChangeComments}
                            defaultValue={valueComments}
                            variant="outlined"
                        />
                        <FormHelperText error={errors.valueCommentsError}>
                            {errorMessages.valueCommentsErrorMessage ?? ''}
                        </FormHelperText>
                    </FormControl>
                </Box>
                <Box marginTop={2.5} marginBottom={2.5}>
                    <FormControl fullWidth>
                        <TextField
                            error={errors.valueDateError}
                            variant="outlined"
                            id="Date"
                            label="Date"
                            type="date"
                            defaultValue=""
                            value={valueDate}
                            onChange={handleChangeDate}
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                        <FormHelperText error={errors.valueDateError}>
                            {errorMessages.valueDateErrorMessage ?? ''}
                        </FormHelperText>
                    </FormControl>
                </Box>
                <DialogActions>
                    <Button variant="outlined" onClick={handleThisDialogClose}>
                        Cancel
                    </Button>
                    <Button variant="contained" onClick={handleCreate} color="secondary" autoFocus>
                        Create
                    </Button>
                </DialogActions>
            </DialogContent>
        </Dialog>
    );
};

export default AnimalEventDialog;
