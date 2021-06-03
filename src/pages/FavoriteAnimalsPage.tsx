import React from 'react';

import { Fade } from '@material-ui/core';
import FavoriteAnimalsListContainer from '../components/animal/FavoriteAnimalsListContainer';
import Page from './Page';

function FavoriteAnimalsPage() {
    return (
        <Fade in timeout={600}>
            <Page title="Favorites">
                <FavoriteAnimalsListContainer />
            </Page>
        </Fade>
    );
}

export default FavoriteAnimalsPage;
