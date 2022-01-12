import React, { useEffect, useRef, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import FilterListIcon from '@mui/icons-material/FilterList';
import {
    Box,
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Grid,
    IconButton,
    useMediaQuery,
    useTheme,
} from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../../store';
import { setFilters } from '../../../store/filters';
import AnimalFiltersDialogContents from './AnimalFiltersDialogContents';

export default function AnimalFiltersDialog() {
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

    const [dialogOpen, setDialogOpen] = useState(false);
    const dispatch = useAppDispatch();

    const filters = useAppSelector(state => state.filters);
    const { totalCount } = useAppSelector(state => state.animals.pageInfo || {});

    const methods = useForm({ defaultValues: filters });
    const { handleSubmit, reset } = methods;
    const formRef = useRef<HTMLFormElement>(null);

    useEffect(() => {
        reset(filters);
    }, [filters, reset]);

    const handleDialogOpen = () => {
        setDialogOpen(true);
    };

    const handleDialogClose = () => {
        setDialogOpen(false);
    };

    const onResetFilters = () => {
        reset({});
        // dispatch(setAnimalsFiltersWithFilterObjs({}));
    };

    const onSubmit = formData => {
        handleDialogClose();
        dispatch(setFilters(formData));
    };

    return (
        <Grid container alignItems="center" spacing={1}>
            <Grid item>{totalCount}</Grid>
            <Grid item>
                <IconButton aria-label="filter animal list" aria-haspopup="true" onClick={handleDialogOpen}>
                    <FilterListIcon color="primary" />
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
                        <Button onClick={onResetFilters} color="primary">
                            RESET ALL
                        </Button>
                    </Box>
                    <DialogContent>
                        <Grid component="form" ref={formRef}>
                            <AnimalFiltersDialogContents />
                        </Grid>
                    </DialogContent>
                    <Box marginBottom={2} marginRight={2}>
                        <DialogActions>
                            <Button variant="outlined" onClick={handleDialogClose} color="primary">
                                Cancel
                            </Button>
                            <Button variant="contained" onClick={handleSubmit(onSubmit)} color="primary" autoFocus>
                                Apply
                            </Button>
                        </DialogActions>
                    </Box>
                </FormProvider>
            </Dialog>
        </Grid>
    );
}
