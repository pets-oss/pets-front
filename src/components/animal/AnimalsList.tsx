import React from 'react';

import Grid from '@material-ui/core/Grid';
import { AnimalEdge } from '../../graphql/types';
import AnimalCard from './AnimalCard';

interface AnimalsListProps {
    animals: AnimalEdge[];
}

export default function AnimalsList({ animals }: AnimalsListProps) {
    return (
        <Grid container component="ul" spacing={2} justify="center">
            {animals.map(animal => (
                <AnimalCard key={animal.node?.id} animal={animal.node!} />
            ))}
        </Grid>
    );
}
