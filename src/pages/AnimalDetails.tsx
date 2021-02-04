import { loader } from 'graphql.macro';
import Image from 'material-ui-image';
import React from 'react';
import { useParams } from 'react-router-dom';

import { useQuery } from '@apollo/client';
import { Box, Typography } from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { Skeleton } from '@material-ui/lab';
import AnimalEventList from '../components/animal/AnimalEventList';
import LayoutMultiColRow from '../components/layout/LayoutMultiColRow';
import { Animal } from '../graphql/types';
import { getAnimalAge, getAnimalWeight } from '../utils/animal';

const GET_ANIMAL_DETAILS = loader('../graphql/queries/animal-details.graphql');
interface RouterParams {
    id: string;
}

interface Response {
    animal: Animal;
}

const useStyles = makeStyles(theme =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        animalName: {
            color: theme.palette.primary.dark,
        },
        animalMeta: {
            color: theme.palette.grey[600],
        },
    })
);

function AnimalDetails() {
    const params: RouterParams = useParams();
    const { id } = params;
    const classes = useStyles();

    const { loading, error, data } = useQuery<Response>(GET_ANIMAL_DETAILS, {
        variables: { id: Number(id) },
    });

    if (loading) {
        return <Skeleton animation="wave" height="70vh" />;
    }

    if (error) {
        // TODO: replace with proper UI elements
        return <p>Error!</p>;
    }

    if (!data?.animal) {
        // TODO: replace with proper UI elements
        return <p>No data!</p>;
    }

    const { animal } = data;
    const birthDay = animal.details?.birthDate ? getAnimalAge(animal.details.birthDate) : '';

    return (
        <div className={classes.root}>
            <LayoutMultiColRow>
                <Image src={animal.imageUrl!} aspectRatio={16 / 9} />
                <>
                    <Box mt={1}>
                        <Typography className={classes.animalName} variant="h3" component="h1">
                            {animal.name}
                        </Typography>
                    </Box>
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
            <Box mt={2} mb={2}>
                <Typography variant="h5" component="h3">
                    Events
                </Typography>
            </Box>
            <AnimalEventList />
        </div>
    );
}

export default AnimalDetails;
