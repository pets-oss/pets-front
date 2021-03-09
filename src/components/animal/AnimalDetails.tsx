import { loader } from 'graphql.macro';
import Image from 'material-ui-image';
import React from 'react';
import { useHistory, useParams } from 'react-router-dom';

import { useQuery } from '@apollo/client';
import { Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Skeleton } from '@material-ui/lab';
import { Animal } from '../../graphql/types';
import { getAnimalAge, getAnimalWeight } from '../../utils/animal';
import LayoutMultiColRow from '../layout/LayoutMultiColRow';
import AnimalEventList from './AnimalEventList';
import AnimalDetailsHeader from './details/AnimalDetailsHeader';

const GET_ANIMAL_DETAILS = loader('../../graphql/queries/animal-details.graphql');

interface RouterParams {
    id: string;
}

interface Response {
    animal: Animal;
}

interface AnimalDetailsProps {
    onLoad?: (animal: Animal) => void;
}

function AnimalDetails({ onLoad }: AnimalDetailsProps) {
    const params: RouterParams = useParams();
    const { id } = params;
    const classes = useStyles();
    const history = useHistory();

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

    const { animal } = data;
    const birthDay = animal.details?.birthDate ? getAnimalAge(animal.details.birthDate) : '';

    return (
        <>
            <LayoutMultiColRow>
                <>
                    <AnimalDetailsHeader
                        animalName={animal.name}
                        gender={animal.details?.gender?.value}
                        species={animal.details?.species?.value}
                        color={animal.details?.color?.value}
                        onBack={() => history.goBack()}
                    />
                    <Image src={animal.imageUrl!} aspectRatio={3 / 2} />
                    {animal.details && (
                        <>
                            <Box mt={3} mb={2}>
                                {animal.microchip && (
                                    <Typography variant="body1" className={classes.secondaryProperty}>
                                        {`Microchip Id - ${animal.microchip}`}
                                    </Typography>
                                )}
                                {animal.registration && (
                                    <Typography variant="body1" className={classes.secondaryProperty}>
                                        {`Registration No - ${animal.registration?.registrationNo}`}
                                    </Typography>
                                )}
                            </Box>
                            <Box
                                display="flex"
                                flexDirection="column"
                                alignItems="flexStart"
                                justifyContent="flexStart"
                            >
                                <Typography variant="body2">{`Age - ${birthDay}`}</Typography>
                                {animal.details.weight && (
                                    <Typography variant="body2">
                                        {`Weight - ${getAnimalWeight(animal.details.weight)}`}
                                    </Typography>
                                )}
                                <Typography variant="body2">{`Color - ${animal.details.color?.value}`}</Typography>
                                <Typography variant="body2">{animal.comments}</Typography>
                            </Box>
                        </>
                    )}
                    <Box mt={1}>
                        <Typography variant="body1">Referencing Animal ID:{id}</Typography>
                    </Box>
                </>
                <Box className={classes.eventsContainer} py={3} px={2}>
                    <Typography variant="h6" component="h3" className={classes.eventsHeader}>
                        Events
                    </Typography>
                    <AnimalEventList />
                </Box>
            </LayoutMultiColRow>
        </>
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
    secondaryProperty: {
        marginBottom: theme.spacing(2),
        fontWeight: 500,
    },
    eventsHeader: {
        fontWeight: 400,
    },
    eventsContainer: {
        backgroundColor: '#FAF5F1',
    },
}));
