import React from 'react';
import { NavLink } from 'react-router-dom';

import { Card, CardActionArea, CardHeader, CardMedia, IconButton, Typography } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import makeStyles from '@material-ui/core/styles/makeStyles';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { Animal } from '../../graphql/types';

const VALID_GENDERS = ['male', 'female'];
const VALID_SPECIES = ['dog', 'cat'];

export default function AnimalCard({ animal }: AnimalCardProps) {
    const classes = useStyles();

    return (
        <Grid item xs={10} md={6} lg={3}>
            <Card className={classes.root}>
                <CardActionArea component={NavLink} to={`/animal/${animal.id}`}>
                    <CardMedia
                        className={classes.media}
                        image={animal.imageUrl || `https://eu.ui-avatars.com/api/?name=${animal.name}`}
                        title="Animal picture"
                    />
                </CardActionArea>
                <CardHeader
                    avatar={<Avatar aria-label="specie" alt="specie" src={resolveIconSrc(animal)} />}
                    action={
                        <IconButton aria-label="add to favorites">
                            <FavoriteIcon />
                        </IconButton>
                    }
                    title={
                        <Typography className={classes.headerText} noWrap>
                            {animal.name}
                        </Typography>
                    }
                    subheader={
                        <Typography className={classes.headerText} noWrap>
                            {animal.registration?.registrationDate}
                        </Typography>
                    }
                />
            </Card>
        </Grid>
    );
}

function resolveIconSrc(animal: Animal) {
    if (!animal.details?.gender || !VALID_GENDERS.includes(animal.details.gender.toLowerCase())) {
        return `${process.env.PUBLIC_URL}/logo192.png`;
    }

    let species = 'unknown';
    if (!!animal?.details?.species && VALID_SPECIES.includes(animal.details.species.toLowerCase())) {
        species = animal.details.species.toLowerCase();
    }

    return `${process.env.PUBLIC_URL}/${animal.details.gender.toLowerCase()}-${species}.png`;
}

const useStyles = makeStyles(() => ({
    root: {
        width: 280,
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    headerText: {
        maxWidth: 150,
    },
}));

interface AnimalCardProps {
    animal: Animal;
}
