import { loader } from 'graphql.macro';
import React from 'react';

import { useQuery } from '@apollo/client';
import Grid from '@material-ui/core/Grid';
import { AnimalsConnection } from '../../graphql/types';
import AnimalCard from './AnimalCard';

const GET_ANIMALS_BY_IDS_QUERY = loader('../../graphql/queries/animal-list-by-ids.graphql');
interface AnimalsListProps {
    ids: number[];
}

interface Response {
    animals: AnimalsConnection;
}

export default function AnimalsList({ ids }: AnimalsListProps) {
    const { data } = useQuery<Response>(GET_ANIMALS_BY_IDS_QUERY, {
        variables: {
            ids,
        },
    });

    if (!data?.animals?.edges.length) {
        return null;
    }

    // will render whatever size/number of Animals is given
    return (
        <Grid container component="ul" spacing={2} justify="center">
            {data?.animals?.edges.map(animal => (
                <AnimalCard key={animal.node?.id} animal={animal.node!} />
            ))}
        </Grid>
    );
}
