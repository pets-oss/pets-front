import { loader } from 'graphql.macro';
import Image from 'material-ui-image';
import React from 'react';
import { useParams } from 'react-router-dom';

import { useQuery } from '@apollo/client';
import { Box, Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Skeleton } from '@material-ui/lab';
import { Animal, Event } from '../../graphql/types';
import { getAnimalAge, getAnimalWeight } from '../../utils/animal';
import LayoutMultiColRow from '../layout/LayoutMultiColRow';
import AnimalEvents from './events/AnimalEvents';

const GET_ANIMAL_DETAILS = loader('../../graphql/queries/animal-details.graphql');

interface RouterParams {
    id: string;
}

interface Response {
    animal: Animal;
    events: { animalAll: Event[] }[];
}

interface AnimalDetailsProps {
    onLoad?: (animal: Animal) => void;
}

function AnimalDetails({ onLoad }: AnimalDetailsProps) {
    const params: RouterParams = useParams();
    const { id } = params;
    const classes = useStyles();

    const { loading, error, data } = useQuery<Response>(GET_ANIMAL_DETAILS, {
        variables: { id: Number(id) },
        onCompleted: ({ animal }) => (onLoad ? onLoad(animal) : undefined),
    });

    if (loading) {
        return <Skeleton animation="wave" variant="rect" height="70vh" />;
    }

    if (error) {
        // TODO: replace with proper UI elements
        return <p>Error!</p>;
    }

    if (!data?.animal) {
        // TODO: replace with proper UI elements
        return <p>No data!</p>;
    }

    const { animal, events } = data;
    const birthDay = animal.details?.birthDate ? getAnimalAge(animal.details.birthDate) : '';
    const animalEvents = events?.[0]?.animalAll ?? [];

    return (
        <Grid container spacing={2}>
            <Grid item xs={12} lg={6}>
                <LayoutMultiColRow>
                    <Image src={animal.imageUrl!} aspectRatio={16 / 9} />
                    <>
                        {animal.details && (
                            <Box mt={1}>
                                <Typography className={classes.animalMeta} variant="body1">
                                    {`${animal.details.breed}, ${animal.details.gender}, ${getAnimalWeight(
                                        animal.details.weight!
                                    )}, ${animal.details.color}, ${birthDay}`}
                                </Typography>
                            </Box>
                        )}
                        <Box mt={1}>
                            <Typography variant="body1">Referencing Animal ID:{id}</Typography>
                        </Box>
                    </>
                </LayoutMultiColRow>
            </Grid>
            <Grid item xs={12} lg={6}>
                <AnimalEvents events={animalEvents} />
            </Grid>
        </Grid>
    );
}

export default AnimalDetails;

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    animalName: {
        color: theme.palette.primary.dark,
    },
    animalMeta: {
        color: theme.palette.grey[600],
    },
}));
