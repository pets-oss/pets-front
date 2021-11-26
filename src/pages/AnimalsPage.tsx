import React, { useEffect, useState } from 'react';
import { useHistory, useRouteMatch } from 'react-router-dom';

import { Fade, Grid } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import useTheme from '@material-ui/core/styles/useTheme';
import useMediaQuery from '@material-ui/core/useMediaQuery';
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
    const match = useRouteMatch('/animal-list');
    const history = useHistory();

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
    }, [dispatch, history.location.pathname]);

    useEffect(() => {
        if (match) {
            dispatch(fetchAnimals());
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dispatch, queryArgs]);

    return (
        <Fade in timeout={600}>
            <Page
                title="Animals List"
                topSection={<TopSection viewType={viewType} onChange={handleViewChange} mobile={mobile} />}
            >
                <AnimalsListContainer viewType={viewType} />
            </Page>
        </Fade>
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
