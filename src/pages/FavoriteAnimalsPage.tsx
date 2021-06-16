import React from 'react';

import { Fade } from '@material-ui/core';
import FavoriteAnimalsContainer from '../components/animal/FavoriteAnimalsContainer';
import Page from './Page';

function FavoriteAnimalsPage() {
    return (
        <Fade in timeout={600}>
            <Page title="Favorites">
                <FavoriteAnimalsContainer />
            </Page>
        </Fade>
    );
}

export default FavoriteAnimalsPage;
