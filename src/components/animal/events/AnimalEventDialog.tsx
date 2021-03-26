import React, { useCallback, useState } from 'react';
import { useParams } from 'react-router';

import {
    Box,
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    FormControl,
    FormHelperText,
    InputLabel,
    makeStyles,
    MenuItem,
    Select,
    TextField,
    Theme,
    Typography,
    useMediaQuery,
    useTheme,
} from '@material-ui/core';
import { Event } from '../../../graphql/types';

export default function AnimalEventDialog({ onCancel, onCreate, dialogOpen }: AnimalEventDialogProps) {
    const theme = useTheme();
    const classes = useStyles();
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
    const { id: animalID } = useParams<{ id: string }>();

    const initialValues = {
        id: Math.floor(Math.random() * 100) + 1,
        animal: animalID,
    };

    const [inputs, setInputs] = useState<any>(initialValues);
    const [error, setErrors] = useState({});

    const onInputChange = useCallback(
        event =>
            setInputs(state => {
                return {
                    ...state,
                    [event.target.name]: event.target.value,
                };
            }),
        []
    );

    const isEmpty = input => {
        if (!input) {
            return true;
        }
        return false;
    };

    const isFloat = input => {
        if (input % 1 === 0) {
            return true;
        }
        return false;
    };

    const validate = (insertedInputs: Event) => {
        const errors = {};
        inputsNames.forEach(name => {
            if (isEmpty(insertedInputs[name])) {
                errors[name] = `${name} field is empty.`;
            }
            if (name === inputsNames[2]) {
                if (isFloat(parseFloat(insertedInputs[name]))) {
                    errors[name] = `${name} should be a float.`;
                }
            }
        });
        setErrors(errors);
        return errors;
    };

    const handleFormSubmit = () => {
        const validatedErrors = validate(inputs);
        if (Object.keys(validatedErrors).length === 0) {
            setErrors({});
            const eventInput: Event = {
                id: Math.random(),
                animal: 2,
                type: { id: Math.floor(Math.random() * 100) + 1, type: inputs.type },
                category: inputs.category,
                expenses: inputs.expenses,
                comments: inputs.comments,
                dateTime: Date.parse(inputs.dateTime).toString(),
            };
            onCreate(eventInput);
            setInputs(initialValues);
        }
    };

    const cancelForm = () => {
        setErrors({});
        onCancel();
    };

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

    const Category = ['General', 'Medical'];

    const dropdownList = [
        {
            name: 'type',
            label: 'Type',
            value: inputs[0],
            options: TypeOptions,
        },
        {
            name: 'category',
            label: 'Category',
            value: inputs[1],
            options: Category,
        },
    ];

    const textFieldList = [
        {
            name: 'expenses',
            value: inputs[2],
            label: 'Expenses $',
            type: 'number',
        },
        {
            name: 'comments',
            value: inputs[3],
            label: 'Comments',
            multiline: true,
            rows: '4',
        },
        {
            name: 'dateTime',
            type: 'datetime-local',
        },
    ];

    const joinedArrays = [...dropdownList, ...textFieldList];
    const inputsNames = joinedArrays.map(object => {
        return object.name;
    });

    return (
        <Dialog fullWidth maxWidth="sm" open={dialogOpen} fullScreen={fullScreen} onClose={onCancel}>
            <DialogContent>
                <Typography className={classes.label}>Create new event</Typography>
                <Box display="flex" flexDirection="column" justifyContent="space-between" alignItems="center">
                    {dropdownList.map(formInput => (
                        <FormControl
                            variant="outlined"
                            className={classes.dropdown}
                            key={formInput.name}
                            error={error[formInput.name] !== '' && error[formInput.name] !== undefined}
                        >
                            <InputLabel id={formInput.name}>{formInput.label}</InputLabel>
                            <Select
                                name={formInput.name}
                                value={formInput.value}
                                onChange={onInputChange}
                                label={formInput.name}
                                defaultValue=""
                            >
                                {formInput.options.map(name => (
                                    <MenuItem value={name} key={name}>
                                        {name}
                                    </MenuItem>
                                ))}
                            </Select>
                            {error[formInput.name] !== '' && error[formInput.name] !== undefined && (
                                <FormHelperText>{error[formInput.name] !== '' && error[formInput.name]}</FormHelperText>
                            )}
                        </FormControl>
                    ))}
                    {textFieldList.map(formInput => (
                        <TextField
                            label={formInput.label}
                            name={formInput.name}
                            type={formInput.type}
                            variant="outlined"
                            fullWidth
                            value={formInput.value}
                            onChange={onInputChange}
                            className={classes.input}
                            multiline={formInput.multiline}
                            rows={formInput.rows}
                            key={formInput.name}
                            defaultValue=""
                            error={error[formInput.name] !== '' && error[formInput.name] !== undefined}
                            helperText={error[formInput.name] !== '' && error[formInput.name]}
                        />
                    ))}
                </Box>
            </DialogContent>
            <DialogActions>
                <Button variant="outlined" onClick={cancelForm}>
                    Cancel
                </Button>
                <Button variant="contained" onClick={handleFormSubmit} color="secondary" autoFocus>
                    Create
                </Button>
            </DialogActions>
        </Dialog>
    );
}

const useStyles = makeStyles((theme: Theme) => ({
    input: {
        marginTop: theme.spacing(2),
    },
    dropdown: {
        marginTop: theme.spacing(2),
        minWidth: 450,
    },
    label: {
        fontWeight: theme.typography.fontWeightBold,
        fontSize: 18,
    },
}));

interface AnimalEventDialogProps {
    onCancel: () => void;
    onCreate: (inputs: Event) => void;
    dialogOpen: boolean;
}
