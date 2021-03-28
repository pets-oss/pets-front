import React from 'react';

import { Button, Dialog, DialogActions, DialogContent, DialogTitle, FormControl } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import { Category, Event } from '../../../graphql/types';
import AutocompleteWithOptions from './inputs/AutocompleteWithOptions';
import InputWithoutOptions from './inputs/InputWithoutOptions';

interface Props {
    typeOptions: string[];
    categoryOptions: string[];
    onCreate: (event: Omit<Event, 'animal'>) => void;
}

export function CreateNewEventDialog({ typeOptions, categoryOptions, onCreate }: Props) {
    const [open, setOpen] = React.useState<boolean>(false);
    const [type, setType] = React.useState<string | null>('');
    const [category, setCategory] = React.useState<Category | null>(null);
    const [expenses, setExpenses] = React.useState<number | null>(null);
    const [comments, setComments] = React.useState<string | null>('');
    const [dateTime, setDateTime] = React.useState<string | null>(null);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleTypeChange = (value: string | null) => {
        if (value) setType(value);
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

    console.log(type);
    console.log(category);
    console.log(expenses);
    console.log(comments);
    console.log(dateTime);

    const handleCreateAndReset = () => {
        handleClose();
        // if (type) {
        //     const typeObj: EventType = { type, id: 2589 };
        //     onCreate({
        //         id: 12345,
        //         type: typeObj,
        //         expenses,
        //         dateTime,
        //         comments,
        //         category,
        //     });
        // }
    };

    return (
        <div>
            <Button color="primary" variant="contained" startIcon={<AddIcon />} onClick={handleClickOpen}>
                Create
            </Button>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Create new event</DialogTitle>
                <DialogContent>
                    {/* <form method="dialog" onSubmit={onCreate}> */}
                    <FormControl>
                        <AutocompleteWithOptions
                            options={typeOptions}
                            label="Type"
                            onChange={value => handleTypeChange(value)}
                        />
                        <AutocompleteWithOptions
                            options={categoryOptions}
                            label="Category"
                            onChange={value => handleCategoryChange(value as Category)}
                        />
                        <InputWithoutOptions
                            inputType="number"
                            label="Expenses $"
                            onChange={value => handleExpensesChange(value as number)}
                        />
                        <InputWithoutOptions
                            inputType="text"
                            label="Comments"
                            onChange={value => handleCommentsChange(value as string)}
                            customStyles={{ height: '130px' }}
                        />
                        <InputWithoutOptions
                            inputType="date"
                            label="Date"
                            onChange={value => handleDateTimeChange(value as string)}
                        />
                    </FormControl>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="secondary" variant="outlined">
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
