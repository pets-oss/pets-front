import React, { useEffect } from 'react';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';

import Grid from '@material-ui/core/Grid';
import { Animal } from '../../graphql/types';
import { addToFavourites, fetchAnimals, removeFromFavourites } from '../../store/animalsFav';
import AnimalCard from './AnimalCard';

interface AnimalCardListProps {
    animals: Animal[];
}

export default function AnimalCardList({ animals }: AnimalCardListProps) {
    const dispatch = useDispatch();
    const { page } = useSelector((state: RootStateOrAny) => state.animalsFav);
    const favoriteAnimals = page.ids;

    useEffect(() => {
        dispatch(fetchAnimals({}));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const isFavourite = (id: number) => {
        const result = favoriteAnimals.indexOf(id) !== -1;
        return result;
    };

    const toggleFavorite = (id: number) => {
        if (isFavourite(id)) {
            dispatch(removeFromFavourites(id));
        } else {
            dispatch(addToFavourites(id));
        }
    };

    return (
        <Grid container component="ul" spacing={2} justifyContent="center">
            {animals.map(animal => (
                <AnimalCard
                    key={animal.id}
                    animal={animal}
                    isFavorite={isFavourite(animal.id)}
                    toggleFavorite={toggleFavorite}
                />
            ))}
        </Grid>
    );
}
