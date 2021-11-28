import React, { useEffect, useState } from 'react';
import { useLocation, useMatch } from 'react-router-dom';

import { Grid, useMediaQuery, useTheme } from '@mui/material';
import AnimalsListContainer from '../components/animal/AnimalsListContainer';
import AnimalFiltersChips from '../components/animal/filters/AnimalFilterChips';
import AnimalFiltersDialog from '../components/animal/filters/AnimalFiltersDialog';
import ViewSelector, { AnimalsViewType } from '../components/animal/ViewSelector';
import { useAppDispatch, useAppSelector } from '../store';
import { fetchAnimals } from '../store/animals';
import { resetQuery } from '../store/queryArgs';
import Page from './Page';

function FavoritesPage() {
    const theme = useTheme();
    const dispatch = useAppDispatch();

    // TODO: extract selectedViewType to context or localStore
    const [viewType, setViewType] = useState<AnimalsViewType>(AnimalsViewType.LIST);
    const mobile = useMediaQuery(theme.breakpoints.down('sm'));

    const match = useMatch('/favorites');
    const location = useLocation();

    const { query: queryArgs } = useAppSelector(state => state.queryArgs);
    const { favoriteChangeRequestId } = useAppSelector(state => state.animals);

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
            dispatch(fetchAnimals({ isFavoriteOnly: true }));
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dispatch, queryArgs, favoriteChangeRequestId]);

    return (
        <Page
            title="Favorites"
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

export default FavoritesPage;

interface TopSectionProps {
    viewType: AnimalsViewType;
    onChange: () => void;
    mobile: boolean;
}
