import React from 'react';

import { Fade } from '@material-ui/core';
import FavouritesListContainer from '../components/animal/FavouritesListContainer';
import Page from './Page';

function FavouritesPage() {
    return (
        <Fade in timeout={600}>
            <Page title="Favourites" topSection={<TopSection />}>
                <FavouritesListContainer />
            </Page>
        </Fade>
    );
}

function TopSection() {
    return <div>Animals list by user</div>;
}

export default FavouritesPage;
