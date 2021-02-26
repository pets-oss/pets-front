import React, { useEffect, useState } from 'react';

import { Grid } from '@material-ui/core';
import useTheme from '@material-ui/core/styles/useTheme';
import Typography from '@material-ui/core/Typography';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import AnimalsListContainer from '../components/animal/AnimalsListContainer';
import ViewSelector, { AnimalsViewType } from '../components/animal/ViewSelector';
import Page from './Page';

function AnimalsPage() {
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
            <Grid item xs={10}>
                <Typography>Filters</Typography>
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
