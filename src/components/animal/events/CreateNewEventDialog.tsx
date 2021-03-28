import React, { useState } from 'react';

import { Button, Dialog, DialogActions, DialogContent, DialogTitle, FormControl } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import { Category, Event, EventType } from '../../../graphql/types';
import AutocompleteDropdown from './inputs/AutocompleteDropdown';
import TextFieldInput from './inputs/TextFieldInput';

interface Props {
    typeOptions: string[];
    categoryOptions: string[];
    onCreate: (event: Omit<Event, 'animal'>) => void;
}

export function CreateNewEventDialog({ typeOptions, categoryOptions, onCreate }: Props) {
    const [open, setOpen] = useState<boolean>(false);
    const [type, setType] = useState<string>('');
    const [category, setCategory] = useState<Category | null>(null);
    const [expenses, setExpenses] = useState<number | null>(null);
    const [comments, setComments] = useState<string>('');
    const [dateTime, setDateTime] = useState<string>('');
    const [isValidated, setIsValidated] = useState<boolean>(false);
    const [dateInputFocused, setDateInputFocused] = useState<boolean>(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleTypeChange = (value: string) => {
        setType(value);
    };

    const handleCategoryChange = (value: Category) => {
        setCategory(value);
    };

    const handleExpensesChange = (value: number) => {
        setExpenses(value);
    };

    const handleCommentsChange = (value: string) => {
        setComments(value);
    };

    const handleDateTimeChange = (value: string) => {
        setDateTime(value);
    };

    const resetValues = () => {
        setType('');
        setCategory(null);
        setExpenses(null);
        setComments('');
        setDateTime('');
        setIsValidated(false);
    };

    const onCancel = () => {
        handleClose();
        resetValues();
    };

    const areInputsValid = () => {
        setIsValidated(true);
        const isExpensesFloat = typeof expenses === 'number';
        if (type && category && comments && dateTime && isExpensesFloat && expenses) {
            return true;
        }
        return false;
    };

    const handleCreateAndReset = () => {
        const areValid = areInputsValid();
        const typeObj: EventType = {
            type,
            id: 2589,
        };
        if (areValid) {
            handleClose();
            onCreate({
                id: 12345,
                type: typeObj,
                expenses,
                dateTime,
                comments,
                category,
            });
            resetValues();
        }
    };

    return (
        <div>
            <Button color="primary" variant="contained" startIcon={<AddIcon />} onClick={handleClickOpen}>
                Create
            </Button>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Create new event</DialogTitle>
                <DialogContent>
                    <FormControl>
                        <AutocompleteDropdown
                            options={typeOptions}
                            label="Type"
                            onChange={value => handleTypeChange(value as string)}
                            isError={!!(isValidated && !type)}
                        />
                        <AutocompleteDropdown
                            options={categoryOptions}
                            label="Category"
                            onChange={value => handleCategoryChange(value as Category)}
                            isError={!!(isValidated && !category)}
                        />
                        <TextFieldInput
                            inputType="number"
                            label="Expenses $"
                            onChange={value => handleExpensesChange(value as number)}
                            isError={!!(isValidated && !expenses)}
                        />
                        <TextFieldInput
                            inputType="text"
                            label="Comments"
                            onChange={value => handleCommentsChange(value as string)}
                            isError={!!(isValidated && !comments)}
                            multiline
                            rowsNum={5}
                        />
                        <TextFieldInput
                            inputType={`${dateInputFocused ? 'date' : 'text'}`}
                            label="Date"
                            onChange={value => handleDateTimeChange(value as string)}
                            isError={!!(isValidated && !dateTime)}
                            onFocus={() => setDateInputFocused(true)}
                            onBlur={() => setDateInputFocused(false)}
                        />
                    </FormControl>
                </DialogContent>
                <DialogActions>
                    <Button onClick={onCancel} color="secondary" variant="outlined">
                        Cancel
                    </Button>
                    <Button onClick={handleCreateAndReset} color="secondary" variant="contained">
                        Create
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
