import { loader } from 'graphql.macro';
import React from 'react';

import { useQuery } from '@apollo/client';
import Skeleton from '@material-ui/lab/Skeleton';
import { Animal } from '../../graphql/types';
import { sortAnimalsByDate } from '../../utils/animal';
import AnimalCard from '../animal/AnimalCard';
import HomePageCarouselContainer from './HomePageCarouselContainer';

const GET_ANIMALS_QUERY = loader('../../graphql/queries/animal-list.graphql');
interface Response {
    animals: Animal[];
}

export default function RecentAnimalsContainer() {
    const { loading, error, data } = useQuery<Response>(GET_ANIMALS_QUERY);
    if (loading) {
        return <Skeleton animation="wave" height="70vh" />;
    }
    if (error) {
        // TODO: replace with proper UI elements
        return <p>Error!</p>;
    }
    if (!data?.animals.length) {
        // TODO: replace with proper UI elements
        return <p>No data</p>;
    }

    const animals = [...data.animals].sort(sortAnimalsByDate);
    const items = animals.map(animal => <AnimalCard animal={animal} key={animal.id} xs={12} md={4} lg={4} />);

    return <HomePageCarouselContainer title="Recent animals" itemsToRender={items} />;
}
