import React, { useEffect, useState } from 'react';

import { Fade, Grid } from '@material-ui/core';
import useTheme from '@material-ui/core/styles/useTheme';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import AnimalsListContainer, { AnimalPageType } from '../components/animal/AnimalsListContainer';
import AnimalFiltersChips from '../components/animal/filters/AnimalFilterChips';
import AnimalFiltersDialog from '../components/animal/filters/AnimalFiltersDialog';
import ViewSelector, { AnimalsViewType } from '../components/animal/ViewSelector';
import Page from './Page';

function FavoritesPage() {
    const theme = useTheme();
    // TODO: extract selectedViewType to context or localStore
    const [viewType, setViewType] = useState<AnimalsViewType>(AnimalsViewType.LIST);
    const mobile = useMediaQuery(theme.breakpoints.down('sm'));

    useEffect(() => {
        if (mobile && viewType === AnimalsViewType.TABLE) {
            setViewType(AnimalsViewType.LIST);
        }
    }, [mobile, viewType]);

    const handleViewChange = () => {
        setViewType(viewType === AnimalsViewType.TABLE ? AnimalsViewType.LIST : AnimalsViewType.TABLE);
    };

    return (
        <Fade in timeout={600}>
            <Page
                title="Favorites"
                topSection={<TopSection viewType={viewType} onChange={handleViewChange} mobile={mobile} />}
            >
                <AnimalsListContainer viewType={viewType} pageType={AnimalPageType.FAVORITES} />
            </Page>
        </Fade>
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
