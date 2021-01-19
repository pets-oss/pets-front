import React from 'react';

import Grid from '@material-ui/core/Grid';
import { Animal } from '../../graphql/types';
import AnimalsListItem from './AnimalListItem';

interface AnimalsListProps {
    animals: Animal[];
}

export default function AnimalsList({ animals }: AnimalsListProps) {
    return (
        <Grid container component="ul" spacing={2}>
            {animals.map(animal => (
                <AnimalsListItem key={animal.id} animal={animal} />
            ))}
        </Grid>
    );
}
