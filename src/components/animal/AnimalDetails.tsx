import { loader } from 'graphql.macro';
import Image from 'material-ui-image';
import React, { useRef } from 'react';
import { useHistory, useParams } from 'react-router-dom';

import { useMutation, useQuery } from '@apollo/client';
import { Box, IconButton, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import AddAPhotoOutlinedIcon from '@material-ui/icons/AddAPhotoOutlined';
import { Skeleton } from '@material-ui/lab';
import { Animal, Event } from '../../graphql/types';
import { getAnimalDetails } from '../../utils/animal';
import SelectFilesDialog, { DialogEventTypes } from '../form/SelectFilesDialog';
import LayoutMultiColRow from '../layout/LayoutMultiColRow';
import AnimalDetailsHeader from './details/AnimalDetailsHeader';
import AnimalEvents from './events/AnimalEvents';
import ParamTable from './ParamTable';

const GET_ANIMAL_DETAILS = loader('../../graphql/queries/animal-details.graphql');
const UPDATE_ANIMAL_IMAGE = loader('../../graphql/queries/update-animal-image.graphql');

interface RouterParams {
    id: string;
}

interface Response {
    animal: Animal;
    events: Event[];
}

interface AnimalDetailsProps {
    onLoad?: (animal: Animal) => void;
}

function AnimalDetails({ onLoad }: AnimalDetailsProps) {
    const params: RouterParams = useParams();
    const { id } = params;
    const classes = useStyles();
    const history = useHistory();

    const [updateAnimalImageMutation] = useMutation(UPDATE_ANIMAL_IMAGE);
    const uploadImageDialogRef = useRef<DialogEventTypes>(null);

    const { loading, error, data } = useQuery<Response>(GET_ANIMAL_DETAILS, {
        variables: { id: Number(id) },
        onCompleted: ({ animal }) => (onLoad ? onLoad(animal) : undefined),
    });

    if (loading) {
        return <Skeleton animation="wave" variant="rect" height="70vh" width="100%" />;
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
        } catch ({ message }) {
            dialogRef.setError(message);
        } finally {
            dialogRef.setLoading(false);
        }
    };

    const showUploadImageDialog = () => {
        uploadImageDialogRef.current?.setVisible(true);
    };

    return (
        <div className={classes.root}>
            <LayoutMultiColRow>
                <>
                    <AnimalDetailsHeader
                        animalName={animal.name}
                        gender={animal.details?.gender?.value}
                        species={animal.details?.species?.value}
                        color={animal.details?.color?.value}
                        onBack={() => history.goBack()}
                        breed={animal.details?.breed?.value}
                    />
                    <Box className={classes.imageContainer}>
                        <Image src={animal.imageUrl!} aspectRatio={3 / 2} cover />
                        <IconButton className={classes.addImageButton} onClick={showUploadImageDialog}>
                            <AddAPhotoOutlinedIcon className={classes.imageIcon} />
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
        </div>
    );
}

export default AnimalDetails;

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        width: '100%',
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
        backgroundColor: theme.palette.tertiary.main,
    },
    imageContainer: {
        position: 'relative',
    },
    imageIcon: {
        color: theme.palette.tertiary.light,
        height: '18px',
        width: '18px',
        [theme.breakpoints.up('md')]: {
            height: 'unset',
            width: 'unset',
        },
    },
    addImageButton: {
        position: 'absolute',
        right: theme.spacing(1),
        top: theme.spacing(1),
        backgroundColor: theme.palette.primary.main,
        '&:hover,&:focus': {
            backgroundColor: theme.palette.primary.dark,
        },
        height: '36px',
        width: '36px',
        [theme.breakpoints.up('md')]: {
            height: '48px',
            width: '48px',
            right: theme.spacing(2),
            top: theme.spacing(2),
        },
    },
}));
