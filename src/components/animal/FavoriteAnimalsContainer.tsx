import { loader } from 'graphql.macro';
import React from 'react';

import { useQuery } from '@apollo/client';
import { Grid } from '@material-ui/core';
import Skeleton from '@material-ui/lab/Skeleton';
import { Animal } from '../../graphql/types';
import { setFavoriteAnimalIds } from '../../utils/favoriteAnimal';
import AnimalCard from './AnimalCard';

const GET_FAVORITE_ANIMALS_QUERY = loader('../../graphql/queries/favorite-animals.graphql');

interface Response {
    animals: Animal[];
}

interface FavoriteAnimalsContainerProps {
    dataLoadOnly?: boolean;
}

export default function FavoriteAnimalsContainer({ dataLoadOnly }: FavoriteAnimalsContainerProps) {
    const { loading, error, data } = useQuery<Response>(GET_FAVORITE_ANIMALS_QUERY);
    if (loading) {
        return <Skeleton animation="wave" variant="rect" height={500} />;
    }
    if (error) {
        // TODO: replace with proper UI elements
        return <p>Error while loading data related to favorite animals!</p>;
    }
    if (!data?.animals.length && !dataLoadOnly) {
        // TODO: replace with proper UI elements
        return <p>No favorite animals found.</p>;
    }

    // load favorite animal ids into a global resource for later use
    setFavoriteAnimalIds(data?.animals.map(animal => animal.id));

    return dataLoadOnly ? null : (
        <Grid container component="ul" spacing={2} justify="center">
            {data?.animals.map(animal => (
                <AnimalCard key={animal.id} animal={animal} showFavoriteAnimalsOnly />
            ))}
        </Grid>
    );
}
