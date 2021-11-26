import React from 'react';

import Grid from '@material-ui/core/Grid';
import { Animal } from '../../graphql/types';
import AnimalCard from './AnimalCard';

interface AnimalCardListProps {
    animals: Animal[];
}

export default function AnimalCardList({ animals }: AnimalCardListProps) {
    return (
        <Grid container component="ul" spacing={2} justifyContent="center">
            {animals.map(animal => (
                <AnimalCard key={animal.id} animal={animal} />
            ))}
        </Grid>
    );
}
