import { loader } from 'graphql.macro';
import React from 'react';
import { useHistory, useParams } from 'react-router-dom';

import { useQuery } from '@apollo/client';
import { Box, Fade } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Skeleton } from '@material-ui/lab';
import AnimalForm from '../components/animal/create-update/AnimalForm';
import { Animal } from '../graphql/types';
import logo from '../logo.svg';
import Page from './Page';

const GET_ANIMAL_DETAILS_ON_EDIT = loader('../graphql/queries/animal-details-on-edit.graphql');

function AnimalEditPage() {
    const history = useHistory();
    const params: RouterParams = useParams();
    const { id } = params;

    const { loading, error, data } = useQuery<Response>(GET_ANIMAL_DETAILS_ON_EDIT, {
        variables: { id: Number(id) },
        skip: !id,
    });

    const submitCallback = (err: any) => {
        if (err === null) {
            history.push('/animal-list');
        } else {
            // todo - should also show error on UI
            console.error('AnimalForm', err);
        }
    };

    return (
        <Fade in timeout={600}>
            <Page topSection={<TopSection />}>
                {error ? (
                    <p>Error!</p>
                ) : loading ? (
                    <Skeleton animation="wave" variant="rect" height="70vh" width="100%" />
                ) : (
                    <AnimalForm animal={data?.animal} submitCallback={submitCallback} />
                )}
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

interface RouterParams {
    id: string;
}

interface Response {
    animal: Animal;
}
