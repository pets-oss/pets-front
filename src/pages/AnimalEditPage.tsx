import React from 'react';
import { useParams } from 'react-router-dom';

import { Box, Fade } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import AnimalForm from '../components/animal/create-update/AnimalForm';
import logo from '../logo.svg';
import Page from './Page';

interface RouterParams {
    id: string;
}

function AnimalEditPage() {
    const params: RouterParams = useParams();
    const { id } = params;

    return (
        <Fade in timeout={600}>
            <Page topSection={<TopSection />}>
                <AnimalForm id={Number(id)} />
            </Page>
        </Fade>
    );
}

function TopSection() {
    const classes = useStyles();
    return (
        <Box display="flex" flexDirection="column" alignItems="center">
            <Box className={classes.imageWrapper}>
                <img src={logo} alt="paw" className={classes.image} />
            </Box>
        </Box>
    );
}

const useStyles = makeStyles(theme => ({
    image: {
        fill: theme.palette.primary.dark,
        width: '100%',
    },
    imageWrapper: {
        padding: theme.spacing(1),
        marginBottom: theme.spacing(1),
        width: 64,
        height: 64,
        borderRadius: '50%',
        backgroundColor: theme.palette.primary.light,
        [theme.breakpoints.up('md')]: {
            padding: theme.spacing(2),
            marginBottom: theme.spacing(2),
            width: 100,
            height: 100,
        },
    },
}));

export default AnimalEditPage;
