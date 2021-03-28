import React, { useState } from 'react';

import {
    Box,
    Button,
    DialogActions,
    DialogContent,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    TextField,
    Typography,
    useMediaQuery,
    useTheme,
} from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';

// const useStyles = makeStyles(theme => ({
//     root: {

//     },
// }));

const AnimalEventDialog = ({ dialogOpen, setDialogOpen, typeOptions, categories }) => {
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

    const [valueType, setValueType] = useState();
    const [valueCategory, setValueCategory] = useState();
    const [valueExpenses, setValueExpenses] = useState();
    const [valueComments, setValueComments] = useState();
    const [valueDate, setValueDate] = useState();
    const [valueCategoryError, setValueCategoryError] = useState(false);
    const [valueExpensesError, setValueExpensesError] = useState(false);
    const [valueCommentsError, setValueCommentsError] = useState(false);
    const [valueDateError, setValueDateError] = useState(false);
    const [errors, setErrors] = useState({
        valueType: false,
        valueCategory: false,
        valueExpenses: false,
        valueComments: false,
        valueDate: false,
    });

    const handleDialogClose = () => {
        setDialogOpen(false);
    };

    const handleCreate = () => {
        const values = { valueType, valueCategory, valueExpenses, valueComments, valueDate };
        const isValueValid = isValid(values);
        if (!isValueValid) return;
        setDialogOpen(false);
        const input = {
            valueType,
            valueCategory,
        };
    };

    function isValid(values) {
        values.map(value => {
            if (value === '') {
                setErrors(prevErrors => (prevErrors.value = true));
                return false;
            }
            return true;
        });
        return true;
    }

    const handleChangeType = event => {
        setValueType(event.target.value);
    };

    const handleChangeCategory = event => {
        setValueCategory(event.target.value);
    };

    const handleChangeExpenses = event => {
        setValueExpenses(event.target.value);
    };

    const handleChangeComments = event => {
        setValueComments(event.target.value);
    };

    const handleChangeDate = event => {
        setValueDate(event.target.value);
    };

    return (
        <Dialog fullWidth maxWidth="sm" open={dialogOpen} fullScreen={fullScreen} onClose={handleDialogClose}>
            <DialogContent>
                <Box display="flex" justifyContent="space-between" alignItems="center">
                    <Typography variant="h6">Create new event</Typography>
                </Box>
                <Box marginTop={2.5} marginBottom={2.5}>
                    <FormControl variant="outlined" fullWidth>
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
                    </FormControl>
                </Box>
                <Box marginTop={2.5} marginBottom={2.5}>
                    <FormControl variant="outlined" fullWidth>
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
                    </FormControl>
                </Box>
                <Box marginTop={2.5} marginBottom={2.5}>
                    <FormControl fullWidth>
                        <TextField
                            variant="outlined"
                            id="labelExpenses"
                            label="Expenses €"
                            value={valueExpenses ?? ''}
                            onChange={handleChangeExpenses}
                        />
                    </FormControl>
                </Box>
                <Box marginTop={2.5} marginBottom={2.5}>
                    <FormControl variant="outlined" fullWidth>
                        <TextField
                            id="labelComments"
                            label="Comments"
                            multiline
                            rows={4}
                            onChange={handleChangeComments}
                            defaultValue={valueComments}
                            variant="outlined"
                        />
                    </FormControl>
                </Box>
                <Box marginTop={2.5} marginBottom={2.5}>
                    <FormControl fullWidth>
                        <TextField
                            error
                            variant="outlined"
                            id="labelDate"
                            label="Date"
                            type="date"
                            defaultValue=""
                            value={valueDate}
                            onChange={handleChangeDate}
                            InputLabelProps={{
                                shrink: true,
                                required: true,
                            }}
                        />
                    </FormControl>
                </Box>
                <DialogActions>
                    <Button variant="outlined" onClick={handleDialogClose}>
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
