import clsx from 'clsx';
import React from 'react';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { Box, Card, CardActionArea, CardHeader, CardMedia, GridSize, IconButton, Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import { makeStyles, Theme } from '@material-ui/core/styles';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { Animal } from '../../graphql/types';
import { addToFavourites, removeFromFavourites } from '../../store/animalsFav';
import { getYMDDateFromTS } from '../../utils/dateFormatters';
import AnimalAvatar from './AnimalAvatar';

export default function AnimalCard({ animal, xs = 10, md = 6, lg = 3 }: AnimalCardProps) {
    const classes = useStyles();
    const dispatch = useDispatch();

    const { page } = useSelector((state: RootStateOrAny) => state.animalsFav.all);

    const isFavourite = page.ids.indexOf(animal.id) !== -1;
    console.log(page);

    let formatedRegistrationDate;
    if (animal.registration?.registrationDate) {
        formatedRegistrationDate = getYMDDateFromTS(animal.registration?.registrationDate);
    } else {
        formatedRegistrationDate = 'n/d';
    }

    const species = animal.details?.species;
    const gender = animal.details?.gender;

    const toggleFavorite = () => {
        if (isFavourite) {
            dispatch(removeFromFavourites(animal.id));
        } else {
            dispatch(addToFavourites(animal.id));
        }
    };

    // todo - should handle error state via UI "toast" elements

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
                            [classes.isFavorite]: isFavourite,
                        })}
                        onClick={toggleFavorite}
                        aria-label="add/remove favorite"
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
}
