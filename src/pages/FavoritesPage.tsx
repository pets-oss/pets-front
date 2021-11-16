import React from 'react';

import { Fade } from '@material-ui/core';
import AnimalsListContainer, { AnimalPageType } from '../components/animal/AnimalsListContainer';
import { AnimalsViewType } from '../components/animal/ViewSelector';
import Page from './Page';

function FavoritesPage() {
    const viewType = AnimalsViewType.LIST;

    return (
        <Fade in timeout={600}>
            <Page title="Favorites" topSection={<TopSection />}>
                <AnimalsListContainer viewType={viewType} pageType={AnimalPageType.FAVORITES} />
            </Page>
        </Fade>
    );
}

function TopSection() {
    // todo: add filters
    return <div>Total: ...</div>;
}

export default FavoritesPage;
