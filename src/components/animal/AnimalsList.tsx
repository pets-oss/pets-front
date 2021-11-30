import React from 'react';

import { Grid } from '@mui/material';
import { Animal } from '../../graphql/types';
import AnimalCard from './AnimalCard';

interface AnimalsListProps {
    animals: Animal[];
}

export default function AnimalsList({ animals }: AnimalsListProps) {
    return (
        <Grid container component="ul" spacing={2} justifyContent="center">
            {animals.map(animal => (
                <AnimalCard key={animal.id} animal={animal} />
            ))}
        </Grid>
    );
}
