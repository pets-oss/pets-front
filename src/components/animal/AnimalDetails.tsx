import { loader } from 'graphql.macro';
import Image from 'mui-image';
import React, { useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { useMutation, useQuery } from '@apollo/client';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import { Box, IconButton, Skeleton, styled, Typography } from '@mui/material';
import { Animal, Event } from '../../graphql/types';
import { getAnimalDetails } from '../../utils/animal';
import SelectFilesDialog, { DialogEventTypes } from '../form/SelectFilesDialog';
import LayoutMultiColRow from '../layout/LayoutMultiColRow';
import AnimalDetailsHeader from './details/AnimalDetailsHeader';
import AnimalDetailsMenu from './details/AnimalDetailsMenu';
import AnimalEvents from './events/AnimalEvents';
import ParamTable from './ParamTable';

const GET_ANIMAL_DETAILS = loader('../../graphql/queries/animal-details.graphql');
const UPDATE_ANIMAL_IMAGE = loader('../../graphql/queries/update-animal-image.graphql');

interface Response {
    animal: Animal;
    events: Event[];
}

interface AnimalDetailsProps {
    onLoad?: (animal: Animal) => void;
}

const PREFIX = 'AnimalDetails';

const classes = {
    animalName: `${PREFIX}-animalName`,
    animalMeta: `${PREFIX}-animalMeta`,
    secondaryProperty: `${PREFIX}-secondaryProperty`,
    eventsHeader: `${PREFIX}-eventsHeader`,
    eventsContainer: `${PREFIX}-eventsContainer`,
    imageContainer: `${PREFIX}-imageContainer`,
    imageIcon: `${PREFIX}-imageIcon`,
    addImageButton: `${PREFIX}-addImageButton`,
};

const Root = styled('div')(({ theme }) => ({
    flexGrow: 1,
    width: '100%',

    [`& .${classes.animalName}`]: {
        color: theme.palette.primary.dark,
    },
    [`& .${classes.animalMeta}`]: {
        color: theme.palette.grey[600],
    },
    [`& .${classes.secondaryProperty}`]: {
        marginBottom: theme.spacing(2),
        fontWeight: 500,
    },
    [`& .${classes.eventsHeader}`]: {
        fontWeight: 400,
    },
    [`& .${classes.eventsContainer}`]: {
        backgroundColor: theme.palette.tertiary.main,
    },
    [`& .${classes.imageContainer}`]: {
        position: 'relative',
    },
    [`& .${classes.addImageButton}`]: {
        position: 'absolute',
        top: theme.spacing(2),
        right: theme.spacing(2),
        zIndex: 1,
        backgroundColor: 'rgba(255, 255, 255, 1)',
        '&:hover': {
            backgroundColor: 'rgba(255, 255, 255, .85)',
        },
        '&:focus': {
            backgroundColor: 'rgba(255, 255, 255, .85)',
        },
    },
}));

export default function AnimalDetails({ onLoad }: AnimalDetailsProps) {
    const { id } = useParams();
    const navigate = useNavigate();

    const [updateAnimalImageMutation] = useMutation(UPDATE_ANIMAL_IMAGE);
    const uploadImageDialogRef = useRef<DialogEventTypes>(null);

    const { loading, error, data } = useQuery<Response>(GET_ANIMAL_DETAILS, {
        variables: { id: Number(id) },
        onCompleted: ({ animal }) => (onLoad ? onLoad(animal) : undefined),
    });

    if (loading) {
        return <Skeleton animation="wave" variant="rectangular" height="70vh" width="100%" />;
    }

    if (error) {
        // TODO: replace with proper UI elements
        return <p>Error!</p>;
    }

    if (!data?.animal) {
        // TODO: replace with proper UI elements
        return <p>No data!</p>;
    }

    const { animal, events = [] } = data;
    const animalDetails = getAnimalDetails(animal);

    const onSelectedFilesSubmit = async (images: File[]) => {
        const dialogRef = uploadImageDialogRef?.current;
        if (!dialogRef) {
            return;
        }
        try {
            dialogRef.setLoading(true);
            await updateAnimalImageMutation({
                variables: { id: Number(id), image: images[0] },
            });
            dialogRef.setVisible(false);
        } catch (updateError: any) {
            dialogRef.setError(updateError.message);
        } finally {
            dialogRef.setLoading(false);
        }
    };

    const showUploadImageDialog = () => {
        uploadImageDialogRef.current?.setVisible(true);
    };

    return (
        <Root>
            <LayoutMultiColRow>
                <>
                    <AnimalDetailsHeader
                        animalName={animal.name}
                        gender={animal.details?.gender?.value}
                        species={animal.details?.species?.value}
                        color={animal.details?.color?.value}
                        onBack={() => navigate(-1)}
                        breed={animal.details?.breed?.value}
                    >
                        <AnimalDetailsMenu id={animal.id} />
                    </AnimalDetailsHeader>
                    <Box className={classes.imageContainer}>
                        <Image src={animal.imageUrl!} aspectratio={3 / 2} cover="true" />
                        <IconButton
                            className={classes.addImageButton}
                            color="primary"
                            onClick={showUploadImageDialog}
                            aria-label="add image"
                        >
                            <AddAPhotoIcon />
                        </IconButton>
                    </Box>
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
                            <Box mt={3} mb={2}>
                                <ParamTable details={animalDetails} />
                            </Box>
                        </>
                    )}
                    {animal.comments && (
                        <Box mt={3} mb={2}>
                            <Typography variant="body1" dangerouslySetInnerHTML={{ __html: animal.comments }} />
                        </Box>
                    )}
                    <Box mt={1}>
                        <Typography variant="body1">Referencing Animal ID:{id}</Typography>
                    </Box>
                </>
                <Box className={classes.eventsContainer} py={3} px={2}>
                    <AnimalEvents events={events} />
                </Box>
            </LayoutMultiColRow>
            <SelectFilesDialog
                ref={uploadImageDialogRef}
                title="Animal picture"
                accept="image/jpeg, image/jpg"
                onSubmit={onSelectedFilesSubmit}
            />
        </Root>
    );
}
