import React, { useState } from 'react';
import {
    Box,
    Button,
    DialogContent,
    DialogTitle,
    makeStyles,
    TextField,
    useMediaQuery,
    useTheme,
} from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import AddIcon from '@material-ui/icons/Add';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles(() => ({
    dialog: {
        position: 'absolute',
        left: '0%',
        right: '0%',
        top: '0%',
        bottom: '0%',
        background: '#FFFFFF',
        boxShadow:
            '0px 24px 38px rgba(0, 0, 0, 0.14), 0px 9px 46px rgba(0, 0, 0, 0.12), 0px 11px 15px rgba(0, 0, 0, 0.2)',
        borderRadius: '4px',
    },
    underline: {
        '&&&:before': {
            borderBottom: 'none',
        },
        '&&:after': {
            borderBottom: 'none',
        },
    },
}));

const typeOptions: string[] = [
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

export default function NewEventDialog() {
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

    const [openDialog, setOpenDialog] = useState(false);
    const [selectedType, setSelectedType] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');
    const [selectedExpenses, setSelectedExpenses] = useState(0);
    const [eventComments, setEventComments] = useState('');
    const [selectedDate, setSelectedDate] = useState('');

    const displayDialog = () => {
        setOpenDialog(true);
    };
    const handleClickClose = () => {
        setOpenDialog(false);
    };
    const handleChangeType = (type: string) => {
        setSelectedType(type);
    };
    const handleChangeCategory = (category: string) => {
        setSelectedCategory(category);
    };
    const handleChangeExpenses = (expenses: number) => {
        setSelectedExpenses(expenses);
    };
    const handleChangeComments = (comments: string) => {
        setEventComments(comments);
    };
    const handleChangeDate = (date: string) => {
        setSelectedDate(date);
    };
    const classes = useStyles();
    return (
        <div>
            <Button color="primary" variant="contained" startIcon={<AddIcon />} onClick={displayDialog}>
                Create
            </Button>
            <Dialog
                className={classes.dialog}
                open={openDialog}
                aria-labelledby="form-dialog-title"
                fullWidth
                maxWidth="sm"
                fullScreen={fullScreen}
            >
                <DialogTitle id="form-dialog-title">Create new event</DialogTitle>
                <DialogContent>
                    <Box marginTop={2.5} marginBottom={2.5}>
                        <FormControl variant="outlined" fullWidth>
                            <InputLabel id="type" style={{ position: 'absolute' }}>
                                Type
                            </InputLabel>
                            <Select
                                labelId="type"
                                id="type"
                                placeholder="type"
                                value={selectedType}
                                onChange={event => handleChangeType(event.target.value as string)}
                                required
                            >
                                {typeOptions.map((typeOption, index) => (
                                    <MenuItem value={typeOption} key={index}>
                                        {typeOption}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </Box>
                    <Box marginTop={2.5} marginBottom={2.5}>
                        <FormControl variant="outlined" fullWidth>
                            <InputLabel id="category" style={{ position: 'absolute' }}>
                                Category
                            </InputLabel>
                            <Select
                                labelId="category"
                                id="category"
                                placeholder="category"
                                value={selectedCategory}
                                onChange={event => handleChangeCategory(event.target.value as string)}
                                required
                            >
                                {categoryList.map((category, index) => (
                                    <MenuItem value={category} key={index}>
                                        {category}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </Box>
                    <Box
                        marginTop={2.5}
                        marginBottom={2.5}
                        border={1}
                        borderColor="grey.500"
                        borderRadius="borderRadius"
                        p={1}
                    >
                        <FormControl variant="outlined" fullWidth>
                            <TextField
                                id="Expenses"
                                label="Expenses"
                                fullWidth
                                type="number"
                                placeholder="Expenses €"
                                value={selectedExpenses}
                                onChange={event => handleChangeExpenses(parseFloat(event.target.value))}
                                InputProps={{ classes }}
                            />
                        </FormControl>
                    </Box>
                    <Box
                        marginTop={2.5}
                        marginBottom={2.5}
                        border={1}
                        borderColor="grey.500"
                        borderRadius="borderRadius"
                        p={1}
                    >
                        <FormControl variant="outlined" fullWidth>
                            <TextField
                                id="comments"
                                placeholder="Comments..."
                                fullWidth
                                multiline
                                value={eventComments}
                                rows={5}
                                onChange={event => handleChangeComments(event.target.value)}
                                InputProps={{ classes }}
                            />
                        </FormControl>
                    </Box>
                    <Box
                        marginTop={2.5}
                        marginBottom={2.5}
                        border={1}
                        borderColor="grey.500"
                        borderRadius="borderRadius"
                        p={1}
                    >
                        <TextField
                            id="date"
                            placeholder="Date"
                            fullWidth
                            type="date"
                            value={selectedDate}
                            InputProps={{ classes }}
                            onChange={event => handleChangeDate(event.target.value)}
                        />
                    </Box>
                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={handleClickClose} color="primary">
                        Cancel
                    </Button>
                    <Button color="primary">Create</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
