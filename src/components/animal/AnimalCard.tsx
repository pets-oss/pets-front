import clsx from 'clsx';
import React from 'react';
import { NavLink } from 'react-router-dom';

import { Box, Card, CardActionArea, CardHeader, CardMedia, IconButton, Typography } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import { makeStyles, Theme } from '@material-ui/core/styles';
import FavoriteIcon from '@material-ui/icons/Favorite';
import config from '../../config';
import { Animal } from '../../graphql/types';
import { getYMDDateFromTS } from '../../utils/dateFormatters';

const VALID_GENDER_IDS = ['1', '2'];
const VALID_SPECIES_IDS = ['1', '2'];

export default function AnimalCard({ animal }: AnimalCardProps) {
    const classes = useStyles();
    const [favorite, setFavorite] = React.useState(false);
    let formatedRegistrationDate;
    if (animal.registration?.registrationDate) {
        formatedRegistrationDate = getYMDDateFromTS(animal.registration?.registrationDate);
    } else {
        formatedRegistrationDate = 'n/d';
    }

    // just mocking toggle
    const handleFavoriteClick = () => {
        setFavorite(!favorite);
    };

    return (
        <Grid item xs={10} md={6} lg={3}>
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
                    avatar={<Avatar aria-label="specie" alt="specie" src={resolveIconSrc(animal)} />}
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

function resolveIconSrc(animal: Animal) {
    if (!animal.details?.gender || !VALID_GENDER_IDS.includes(animal.details.gender.id)) {
        return `${config.PUBLIC_URL}/logo192.png`;
    }

    let speciesId = '0';
    if (!!animal?.details?.species && VALID_SPECIES_IDS.includes(animal.details.species.id)) {
        speciesId = animal.details.species.id;
    }

    return `${config.PUBLIC_URL}/gender${animal.details.gender.id}-species${speciesId}.png`;
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
}
