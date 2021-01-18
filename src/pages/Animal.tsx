import Image from 'material-ui-image';
import React from 'react';
import { useParams } from 'react-router-dom';

import { Box, Typography } from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import EventList from '../components/EventList';
import LayoutMultiColRow from '../components/LayoutMultiColRow';

interface RouterParams {
    id: string;
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
            color: 'dimGray',
        },
    })
);

function Animal() {
    const params: RouterParams = useParams();
    const { id } = params;
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <LayoutMultiColRow>
                <Image src="https://picsum.photos/600/338" aspectRatio={16 / 9} />
                <>
                    <Box mt={1}>
                        <Typography className={classes.animalName} variant="h3" component="h1">
                            dog Scooby Doo
                        </Typography>
                    </Box>
                    <Box mt={1}>
                        <Typography className={classes.animalMeta} variant="body1">
                            Breed, gender, weight, color, birth_date
                        </Typography>
                    </Box>
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
            <EventList />
        </div>
    );
}

export default Animal;
