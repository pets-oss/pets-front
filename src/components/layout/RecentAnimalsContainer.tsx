import { loader } from 'graphql.macro';
import React from 'react';

import { useQuery } from '@apollo/client';
import { Skeleton } from '@mui/material';
import { Animal, AnimalsConnection } from '../../graphql/types';
import { sortAnimalsByDate } from '../../utils/animal';
import AnimalCard from '../animal/AnimalCard';
import HomePageCarouselContainer from './HomePageCarouselContainer';

const GET_ANIMALS_QUERY = loader('../../graphql/queries/animal-list.graphql');
interface Response {
    animals: AnimalsConnection;
}

export default function RecentAnimalsContainer() {
    const { loading, error, data } = useQuery<Response>(GET_ANIMALS_QUERY);
    if (loading) {
        return <Skeleton animation="wave" height="70vh" width="100%" />;
    }
    if (error) {
        // TODO: replace with proper UI elements
        return <p>Error!</p>;
    }
    if (!data?.animals?.edges?.length) {
        // TODO: replace with proper UI elements
        return <p>No data</p>;
    }

    const animals = data.animals.edges.map(item => item.node as Animal).sort(sortAnimalsByDate);
    const items = animals.map(animal => <AnimalCard animal={animal} key={animal.id} xs={12} md={4} lg={4} />);

    return <HomePageCarouselContainer title="Recent animals" itemsToRender={items} />;
}
