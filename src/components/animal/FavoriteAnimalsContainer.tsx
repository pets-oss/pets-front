import { loader } from 'graphql.macro';
import React from 'react';

import { useQuery } from '@apollo/client';
import { Grid } from '@material-ui/core';
import Skeleton from '@material-ui/lab/Skeleton';
import { Animal } from '../../graphql/types';
import AnimalCard from './AnimalCard';

const GET_FAVORITE_ANIMALS_QUERY = loader('../../graphql/queries/favorite-animals.graphql');

interface Response {
    animals: Animal[];
}

export default function FavoriteAnimalsContainer() {
    const { loading, error, data } = useQuery<Response>(GET_FAVORITE_ANIMALS_QUERY);
    if (loading) {
        return <Skeleton animation="wave" variant="rect" height={500} />;
    }
    if (error) {
        // TODO: replace with proper UI elements
        return <p>Error!</p>;
    }
    if (!data?.animals.length) {
        // TODO: replace with proper UI elements
        return <p>No data</p>;
    }

    return (
        <Grid container component="ul" spacing={2} justify="center">
            {data.animals.map(animal => (
                <AnimalCard key={animal.id} animal={animal} showFavoriteAnimalsOnly />
            ))}
        </Grid>
    );
}
