import clsx from 'clsx';
import { loader } from 'graphql.macro';
import React, { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';

import { gql, useMutation } from '@apollo/client';
import { Box, Card, CardActionArea, CardHeader, CardMedia, GridSize, IconButton, Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import { makeStyles, Theme } from '@material-ui/core/styles';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { Animal } from '../../graphql/types';
import { getYMDDateFromTS } from '../../utils/dateFormatters';
import { OutdatedPageContext } from '../../utils/OutdatedPageContextProvider';
import AnimalAvatar from './AnimalAvatar';

const ADD_ANIMAL_TO_FAVORITES_MUTATION = gql`
    ${loader('../../graphql/mutations/add-animal-to-favorites.graphql')}
`;
const REMOVE_ANIMAL_FROM_FAVORITES_MUTATION = gql`
    ${loader('../../graphql/mutations/remove-animal-from-favorites.graphql')}
`;

export default function AnimalCard({ animal, xs = 10, md = 6, lg = 3, updateFavoritesPage }: AnimalCardProps) {
    const classes = useStyles();

    const [favorite, setFavorite] = useState(animal.isFavorite);
    const [addAnimalToFavorites] = useMutation(ADD_ANIMAL_TO_FAVORITES_MUTATION, {
        variables: { animalId: animal.id },
    });
    const [removeAnimalFromFavorites] = useMutation(REMOVE_ANIMAL_FROM_FAVORITES_MUTATION, {
        variables: { animalId: animal.id },
    });

    const { setIsPageOutdated } = useContext(OutdatedPageContext);

    let formatedRegistrationDate;
    if (animal.registration?.registrationDate) {
        formatedRegistrationDate = getYMDDateFromTS(animal.registration?.registrationDate);
    } else {
        formatedRegistrationDate = 'n/d';
    }

    const species = animal.details?.species;
    const gender = animal.details?.gender;

    const handleFavoriteClick = () => {
        if (!favorite) {
            // update database
            addAnimalToFavorites();
            // update data in Favorites page, as a new animal has been marked as favorite
            setIsPageOutdated({ animalsPage: false, favoritesPage: true });
        } else {
            // update database
            removeAnimalFromFavorites();
            if (updateFavoritesPage) {
                // remove animal from the view in Favorites page
                updateFavoritesPage(animal);
                // a call from Favorites page: update Animals page
                setIsPageOutdated({ animalsPage: true, favoritesPage: false });
            } else {
                // a call from Animals page: update Favorites page
                setIsPageOutdated({ animalsPage: false, favoritesPage: true });
            }
        }
        setFavorite(!favorite);
    };

    return (
        <Grid item xs={xs} md={md} lg={lg}>
            <Card>
                <Box className={classes.cardMediaWrapper}>
                    <CardActionArea component={NavLink} to={`/animal/${animal.id}`}>
                        <CardMedia
                            className={classes.media}
                            image={animal.imageUrl || `https://eu.ui-avatars.com/api/?name=${animal.name}`}
                            title="Animal picture"
                        />
                    </CardActionArea>
                    <IconButton
                        className={clsx(classes.favoriteButton, {
                            [classes.isFavorite]: favorite,
                        })}
                        onClick={handleFavoriteClick}
                        aria-label="add to favorites"
                    >
                        <FavoriteIcon />
                    </IconButton>
                </Box>
                <CardHeader
                    avatar={<AnimalAvatar species={species} gender={gender} />}
                    title={
                        <Typography component="h6" className={classes.headerText} noWrap>
                            {animal.name}
                        </Typography>
                    }
                    subheader={
                        <Typography className={classes.subHeaderText} noWrap>
                            {formatedRegistrationDate}
                        </Typography>
                    }
                />
            </Card>
        </Grid>
    );
}

const isFavoriteColor = '#D10C0C';

const useStyles = makeStyles((theme: Theme) => ({
    cardMediaWrapper: {
        position: 'relative',
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
        zIndex: 0,
    },
    favoriteButton: {
        position: 'absolute',
        top: theme.spacing(2),
        right: theme.spacing(2),
        zIndex: 1,
        backgroundColor: 'rgba(255, 255, 255, .3)',
        '&:hover': {
            backgroundColor: 'rgba(255, 255, 255, .6)',
        },
        '&:focus': {
            backgroundColor: 'rgba(255, 255, 255, .6)',
        },
    },
    isFavorite: {
        color: isFavoriteColor,
        backgroundColor: 'rgba(255, 255, 255, .75)',
    },
    headerText: {
        maxWidth: 150,
        fontSize: 20,
        lineHeight: '24px',
        fontWeight: 600,
    },
    subHeaderText: {
        maxWidth: 150,
        color: theme.palette.grey['600'],
    },
}));

interface AnimalCardProps {
    animal: Animal;
    xs?: GridSize;
    md?: GridSize;
    lg?: GridSize;
    updateFavoritesPage?: (animal: Animal) => void;
}
