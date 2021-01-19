import React, { useEffect, useState } from 'react';

import useTheme from '@material-ui/core/styles/useTheme';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import AnimalsListContainer from '../components/animal/AnimalsListContainer';
import ViewSelector, { AnimalsViewType } from '../components/animal/ViewSelector';
import Page from './Page';

function Animals() {
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
        <Page title="Animals List" action={!mobile && <ViewSelector value={viewType} onChange={handleViewChange} />}>
            <AnimalsListContainer viewType={viewType} />
        </Page>
    );
}

export default Animals;
