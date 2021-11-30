import React, { useEffect, useState } from 'react';
import { useLocation, useMatch } from 'react-router-dom';

import { Divider, Grid, useMediaQuery, useTheme } from '@mui/material';
import AnimalsListContainer from '../components/animal/AnimalsListContainer';
import CreateButton from '../components/animal/create-update/CreateButton';
import AnimalFiltersChips from '../components/animal/filters/AnimalFilterChips';
import AnimalFiltersDialog from '../components/animal/filters/AnimalFiltersDialog';
import ViewSelector, { AnimalsViewType } from '../components/animal/ViewSelector';
import { useAppDispatch, useAppSelector } from '../store';
import { fetchAnimals } from '../store/animals';
import { resetQuery } from '../store/queryArgs';
import Page from './Page';

function AnimalsPage() {
    const dispatch = useAppDispatch();
    const theme = useTheme();
    // TODO: extract selectedViewType to context or localStore
    const [viewType, setViewType] = useState<AnimalsViewType>(AnimalsViewType.LIST);

    const { query: queryArgs } = useAppSelector(state => state.queryArgs);
    const mobile = useMediaQuery(theme.breakpoints.down('sm'));
    const match = useMatch('/animal-list');
    const location = useLocation();

    useEffect(() => {
        if (mobile && viewType === AnimalsViewType.TABLE) {
            setViewType(AnimalsViewType.LIST);
        }
    }, [mobile, viewType]);

    const handleViewChange = () => {
        setViewType(viewType === AnimalsViewType.TABLE ? AnimalsViewType.LIST : AnimalsViewType.TABLE);
    };

    useEffect(() => {
        dispatch(resetQuery());
    }, [dispatch, location.pathname]);

    useEffect(() => {
        if (match) {
            dispatch(fetchAnimals());
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dispatch, queryArgs]);

    return (
        <Page
            title="Animals List"
            topSection={<TopSection viewType={viewType} onChange={handleViewChange} mobile={mobile} />}
        >
            <AnimalsListContainer viewType={viewType} />
        </Page>
    );
}

function TopSection({ viewType, onChange, mobile }: TopSectionProps) {
    return (
        <Grid container spacing={2} alignItems="center">
            <Grid container item xs={10} alignItems="center" spacing={2}>
                <CreateButton />
                {!mobile && (
                    <>
                        <Grid item />
                        <Divider flexItem orientation="vertical" />
                    </>
                )}
                <Grid item>
                    <AnimalFiltersDialog />
                </Grid>
                <Grid item>
                    <AnimalFiltersChips />
                </Grid>
            </Grid>
            {!mobile && (
                <Grid item xs={2} style={{ textAlign: 'right' }}>
                    <ViewSelector value={viewType} onChange={onChange} />
                </Grid>
            )}
        </Grid>
    );
}

export default AnimalsPage;

interface TopSectionProps {
    viewType: AnimalsViewType;
    onChange: () => void;
    mobile: boolean;
}
