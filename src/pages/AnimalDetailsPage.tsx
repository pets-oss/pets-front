import React from 'react';

import { Fade } from '@material-ui/core';
import AnimalDetails from '../components/animal/AnimalDetails';
import Page from './Page';

function AnimalDetailsPage() {
    return (
        <Fade in timeout={600}>
            <Page>
                <AnimalDetails />
            </Page>
        </Fade>
    );
}

export default AnimalDetailsPage;
