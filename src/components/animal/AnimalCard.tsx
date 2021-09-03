import clsx from 'clsx';
import React from 'react';
import { NavLink } from 'react-router-dom';

import { Box, Card, CardActionArea, CardHeader, CardMedia, GridSize, IconButton, Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import { makeStyles, Theme } from '@material-ui/core/styles';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { Animal } from '../../graphql/types';
import { getYMDDateFromTS } from '../../utils/dateFormatters';
import AnimalAvatar from './AnimalAvatar';

interface AnimalCardProps {
    animal: Animal;
    isFavorite?: boolean;
    toggleFavoriteCb?: (id: number) => void;
    xs?: GridSize;
    md?: GridSize;
    lg?: GridSize;
}

function AnimalCard({
    animal,
    isFavorite,
    toggleFavoriteCb: toggleFavorite,
    xs = 10,
    md = 6,
    lg = 3,
}: AnimalCardProps) {
    const classes = useStyles();

    const favouriteFeatureEnabled = isFavorite !== null && toggleFavorite !== null;

    const handleToggleFavorite = () => {
        if (toggleFavorite) {
            toggleFavorite(animal.id);
        }
    };

    let formatedRegistrationDate;
    if (animal.registration?.registrationDate) {
        formatedRegistrationDate = getYMDDateFromTS(animal.registration?.registrationDate);
    } else {
        formatedRegistrationDate = 'n/d';
    }

    const species = animal.details?.species;
    const gender = animal.details?.gender;

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
                    {favouriteFeatureEnabled && (
                        <IconButton
                            className={clsx(classes.favoriteButton, {
                                [classes.isFavorite]: isFavorite,
                            })}
                            onClick={handleToggleFavorite}
                            aria-label="add/remove favorite"
                        >
                            <FavoriteIcon />
                        </IconButton>
                    )}
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

export default React.memo(AnimalCard);

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
