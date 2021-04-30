import React, { useState } from 'react';

import { Fade } from '@material-ui/core';
import AnimalDetails from '../components/animal/AnimalDetails';
import { Animal } from '../graphql/types';
import Page from './Page';

function AnimalDetailsPage() {
    const [animalName, setAnimalName] = useState('');

    return (
        <Fade in timeout={600}>
            <Page title={animalName ?? 'Pet details'}>
                <AnimalDetails onLoad={(animal: Animal) => setAnimalName(animal.name ?? '')} />
            </Page>
        </Fade>
    );
}

export default AnimalDetailsPage;
