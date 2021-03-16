import { loader } from 'graphql.macro';
import React from 'react';

import { useQuery } from '@apollo/client';
import { GridSize } from '@material-ui/core';
import useTheme from '@material-ui/core/styles/useTheme';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Skeleton from '@material-ui/lab/Skeleton';
import { Animal } from '../../graphql/types';
import { sortAnimalsByDate } from '../../utils/animal';
import AnimalCard from '../animal/AnimalCard';
import HomePageCarouselContainer from './HomePageCarouselContainer';

const GET_ANIMALS_QUERY = loader('../../graphql/queries/animal-list.graphql');
interface Response {
    animals: Animal[];
}

const DesktopProps: Record<string, GridSize> = {
    md: 4,
    lg: 4,
};

const MobileProps: Record<string, GridSize> = {
    xs: 12,
};

export default function RecentAnimalsContainer() {
    const theme = useTheme();
    const isDesktop = useMediaQuery(theme.breakpoints.up('md'));
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
    const mediaProps = isDesktop ? DesktopProps : MobileProps;
    const animals = [...data.animals].sort(sortAnimalsByDate);
    const items = animals.map(animal => <AnimalCard animal={animal} key={animal.id} {...mediaProps} />);

    return <HomePageCarouselContainer title="Recent animals" itemsToRender={items} />;
}
