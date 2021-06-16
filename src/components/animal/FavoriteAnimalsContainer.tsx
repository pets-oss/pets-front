import { loader } from 'graphql.macro';
import React, { useContext, useEffect, useState } from 'react';

import { useQuery } from '@apollo/client';
import { Grid } from '@material-ui/core';
import Skeleton from '@material-ui/lab/Skeleton';
import { Animal } from '../../graphql/types';
import { OutdatedPageContext } from '../../utils/OutdatedPageContextProvider';
import AnimalCard from './AnimalCard';

const GET_FAVORITE_ANIMALS_QUERY = loader('../../graphql/queries/favorite-animals.graphql');

interface Response {
    favoriteAnimals: Animal[];
}

export default function FavoriteAnimalsContainer() {
    const [favoriteAnimals, setFavoriteAnimals] = useState([] as Animal[]);
    const { loading, error, data, refetch } = useQuery<Response>(GET_FAVORITE_ANIMALS_QUERY, {
        fetchPolicy: 'no-cache',
    });
    const { isPageOutdated, setIsPageOutdated } = useContext(OutdatedPageContext);

    useEffect(() => {
        if (isPageOutdated.favoritesPage) {
            refetch();
            setIsPageOutdated({ animalsPage: false, favoritesPage: false });
        }
    }, [isPageOutdated, setIsPageOutdated, refetch]);

    useEffect(() => {
        if (data) {
            setFavoriteAnimals(data.favoriteAnimals);
        }
    }, [data]);

    if (loading) {
        return <Skeleton animation="wave" variant="rect" height={500} />;
    }
    if (error) {
        // TODO: replace with proper UI elements
        return <p>Error!</p>;
    }
    if (!data?.favoriteAnimals.length) {
        // TODO: replace with proper UI elements
        return <p>No data</p>;
    }

    // in Favorites page, animals can only be removed from the view
    const updateFavoriteAnimals = (animal: Animal) => {
        const index = favoriteAnimals.indexOf(animal);
        if (index > -1) {
            setFavoriteAnimals([...favoriteAnimals].splice(index, 1));
        } else {
            // eslint-disable-next-line no-console
            console.log('Could not find animal to remove from Favorites page.');
        }
    };

    return (
        <Grid container component="ul" spacing={2} justify="center">
            {favoriteAnimals.map(animal => (
                <AnimalCard key={animal.id} animal={animal} updateFavoritesPage={updateFavoriteAnimals} />
            ))}
        </Grid>
    );
}
