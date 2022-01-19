import { loader } from 'graphql.macro';
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { useQuery } from '@apollo/client';
import { Box, Grid, Skeleton, styled } from '@mui/material';
import AnimalForm from '../components/animal/create-update/AnimalForm';
import { Animal } from '../graphql/types';
import logo from '../logo.svg';
import Page from './Page';

const GET_ANIMAL_DETAILS_ON_EDIT = loader('../graphql/queries/animal-details-on-edit.graphql');

function AnimalEditPage() {
    const navigate = useNavigate();
    const { id } = useParams();

    const { loading, error, data } = useQuery<Response>(GET_ANIMAL_DETAILS_ON_EDIT, {
        variables: { id: Number(id) },
        skip: !id,
    });

    const submitCallback = (err: any) => {
        if (err === null) {
            navigate('/animal-list');
        } else {
            // todo - should also show error on UI
            console.error('AnimalForm', err);
        }
    };

    return (
        <Page topSection={<TopSection />}>
            {error ? (
                <p>Error!</p>
            ) : loading ? (
                <Skeleton animation="wave" variant="rectangular" height="70vh" width="100%" />
            ) : (
                <AnimalForm animal={data?.animal} submitCallback={submitCallback} />
            )}
        </Page>
    );
}

const PREFIX = 'TopSection';

const classes = {
    image: `${PREFIX}-image`,
    imageWrapper: `${PREFIX}-imageWrapper`,
};

const StyledGrid = styled(Grid)(({ theme }) => ({
    [`& .${classes.image}`]: {
        fill: theme.palette.primary.dark,
        width: '100%',
    },
    [`& .${classes.imageWrapper}`]: {
        padding: theme.spacing(1),
        marginBottom: theme.spacing(1),
        width: 64,
        height: 64,
        borderRadius: '50%',
        backgroundColor: theme.palette.secondary.light,
        [theme.breakpoints.up('md')]: {
            padding: theme.spacing(2),
            marginBottom: theme.spacing(2),
            width: 100,
            height: 100,
        },
    },
}));

function TopSection() {
    return (
        <StyledGrid container spacing={0} justifyContent="center" alignItems="center">
            <Box className={classes.imageWrapper}>
                <img src={logo} alt="paw" className={classes.image} />
            </Box>
        </StyledGrid>
    );
}

export default AnimalEditPage;

interface Response {
    animal: Animal;
}
