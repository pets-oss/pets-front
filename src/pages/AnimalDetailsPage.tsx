import React, { useState } from 'react';

import AnimalDetails from '../components/animal/AnimalDetails';
import { Animal } from '../graphql/types';
import Page from './Page';

function AnimalDetailsPage() {
    const [animalName, setAnimalName] = useState('');

    return (
        <Page title={animalName ?? 'Pet details'}>
            <AnimalDetails onLoad={(animal: Animal) => setAnimalName(animal.name ?? '')} />
        </Page>
    );
}

export default AnimalDetailsPage;
