import clsx from 'clsx';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import FavoriteIcon from '@mui/icons-material/Favorite';
import {
    Box,
    Card,
    CardActionArea,
    CardHeader,
    CardMedia,
    Grid,
    GridSize,
    IconButton,
    styled,
    Typography,
} from '@mui/material';
import { Animal } from '../../graphql/types';
import { useAppDispatch } from '../../store';
import { toggleFavorite } from '../../store/animals';
import { getYMDDateFromTS } from '../../utils/dateFormatters';
import AnimalAvatar from '../icons/AnimalAvatar';

interface AnimalCardProps {
    animal: Animal;
    xs?: GridSize;
    sm?: GridSize;
    md?: GridSize;
    lg?: GridSize;
}

const PREFIX = 'AnimalCard';
const classes = {
    cardMediaWrapper: `${PREFIX}-cardMediaWrapper`,
    media: `${PREFIX}-media`,
    favoriteButton: `${PREFIX}-favoriteButton`,
    isFavorite: `${PREFIX}-isFavorite`,
    headerText: `${PREFIX}-headerText`,
    subHeaderText: `${PREFIX}-subHeaderText`,
};

const isFavoriteColor = '#D10C0C';

const StyledCard = styled(Card)(({ theme }) => ({
    [`& .${classes.cardMediaWrapper}`]: {
        position: 'relative',
    },
    [`& .${classes.media}`]: {
        zIndex: 0,
    },
    [`& .${classes.favoriteButton}`]: {
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
    [`& .${classes.isFavorite}`]: {
        color: isFavoriteColor,
        backgroundColor: 'rgba(255, 255, 255, .75)',
    },
    [`& .${classes.headerText}`]: {
        maxWidth: 150,
        fontSize: 20,
        lineHeight: '24px',
        fontWeight: 600,
    },
    [`& .${classes.subHeaderText}`]: {
        maxWidth: 150,
        color: theme.palette.grey['600'],
    },
}));

function AnimalCard({ animal, xs = 12, sm = 6, md = 4, lg = 4 }: AnimalCardProps) {
    const dispatch = useAppDispatch();
    const [isFavorite, setFavorite] = useState<boolean>(!!animal.isFavorite);

    const handleToggleFavorite = () => {
        dispatch(toggleFavorite({ id: animal.id, favorite: !isFavorite }));
        setFavorite(!isFavorite);
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
        <Grid item xs={xs} sm={sm} md={md} lg={lg}>
            <StyledCard>
                <Box className={classes.cardMediaWrapper}>
                    <CardActionArea component={NavLink} to={`/animal/${animal.id}`}>
                        <CardMedia
                            component="img"
                            className={classes.media}
                            image={animal.imageUrl || `https://eu.ui-avatars.com/api/?name=${animal.name}`}
                            title="Animal picture"
                        />
                    </CardActionArea>
                    <IconButton
                        className={clsx(classes.favoriteButton, {
                            [classes.isFavorite]: isFavorite,
                        })}
                        onClick={handleToggleFavorite}
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
            </StyledCard>
        </Grid>
    );
}

export default React.memo(AnimalCard);
