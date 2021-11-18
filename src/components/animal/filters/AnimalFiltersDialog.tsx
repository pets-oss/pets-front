import React, { useEffect, useRef, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';

import {
    Box,
    Button,
    DialogActions,
    DialogContent,
    DialogTitle,
    Grid,
    IconButton,
    useMediaQuery,
    useTheme,
} from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import FilterListIcon from '@material-ui/icons/FilterList';
import { setAnimalsFiltersWithFilterObjs } from '../../../store/animalsAll';
import { AnimalsFiltersFormDataInput, AnimalsFiltersObjs } from '../../../store/types-definitions';
import AnimalFiltersDialogContents from './AnimalFiltersDialogContents';

export default function AnimalFiltersDialog() {
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

    const [dialogOpen, setDialogOpen] = useState(false);
    const dispatch = useDispatch();
    const { queryVarsFilterObjs, page } = useSelector((state: RootStateOrAny) => state.animalsAll);

    const methods = useForm({ defaultValues: makeSingleDefaultFormValuesFromMultipleQueryVars(queryVarsFilterObjs) });
    const { handleSubmit, reset } = methods;
    const formRef = useRef<HTMLFormElement>(null);

    useEffect(() => {
        reset(makeSingleDefaultFormValuesFromMultipleQueryVars(queryVarsFilterObjs));
    }, [queryVarsFilterObjs, reset]);

    const count = page.info?.totalCount;

    const handleDialogOpen = () => {
        setDialogOpen(true);
    };

    const handleDialogClose = () => {
        setDialogOpen(false);
    };

    const onResetFilters = () => {
        reset({});
        dispatch(setAnimalsFiltersWithFilterObjs({}));
    };

    const onSubmit = formData => {
        handleDialogClose();
        console.log('onSubmit with raw formData', formData);
        const preparedFilterObjs = makeMultipleFromSingleFilterProps(formData);
        console.log('onSubmit with', preparedFilterObjs);
        dispatch(setAnimalsFiltersWithFilterObjs(preparedFilterObjs));
    };

    return (
        <Grid container alignItems="center" spacing={1}>
            <Grid item>{count}</Grid>
            <Grid item>
                <IconButton aria-label="filter animal list" aria-haspopup="true" onClick={handleDialogOpen}>
                    <FilterListIcon />
                </IconButton>
            </Grid>
            <Dialog
                fullWidth
                maxWidth="sm"
                open={dialogOpen}
                fullScreen={fullScreen}
                onClose={handleDialogClose}
                aria-labelledby="filter-dialog-title"
            >
                <FormProvider {...methods}>
                    <Box display="flex" justifyContent="space-between" alignItems="center" marginRight={2.6}>
                        <DialogTitle id="filter-dialog-title">Search Filters</DialogTitle>
                        <Button onClick={onResetFilters}>RESET ALL</Button>
                    </Box>
                    <DialogContent>
                        <Grid component="form" ref={formRef}>
                            <AnimalFiltersDialogContents />
                        </Grid>
                    </DialogContent>
                    <Box marginBottom={2} marginRight={2}>
                        <DialogActions>
                            <Button variant="outlined" onClick={handleDialogClose}>
                                Cancel
                            </Button>
                            <Button variant="contained" onClick={handleSubmit(onSubmit)} color="secondary" autoFocus>
                                Apply
                            </Button>
                        </DialogActions>
                    </Box>
                </FormProvider>
            </Dialog>
        </Grid>
    );
}

const makeSingleDefaultFormValuesFromMultipleQueryVars = (queryVarsFilterObjs: AnimalsFiltersObjs) => {
    // NOTE: multiple value selection is not implemented, so converting
    const formData: AnimalsFiltersFormDataInput = {};
    // is filter prop single val?
    // convert to Species | Breed | Gender value
    if (queryVarsFilterObjs.species && Array.isArray(queryVarsFilterObjs.species)) {
        formData.species = queryVarsFilterObjs.species[0];
    }
    if (queryVarsFilterObjs.breed && Array.isArray(queryVarsFilterObjs.breed)) {
        formData.breed = queryVarsFilterObjs.breed[0];
    }
    if (queryVarsFilterObjs.gender && Array.isArray(queryVarsFilterObjs.gender)) {
        formData.gender = queryVarsFilterObjs.gender[0];
    }
    return formData;
};

const makeMultipleFromSingleFilterProps = filterProps => {
    // NOTE: multiple value selection is not implemented, just emulating
    const multipleFilterProps: AnimalsFiltersObjs = {
        species: filterProps.species ? [filterProps.species] : null,
        breed: filterProps.breed ? [filterProps.breed] : null,
        gender: filterProps.gender ? [filterProps.gender] : null,
    };
    return multipleFilterProps;
};
