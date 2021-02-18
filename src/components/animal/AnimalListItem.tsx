import React from 'react';
import { NavLink } from 'react-router-dom';

import { fade, Theme } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Typography from '@material-ui/core/Typography';
import { Animal } from '../../graphql/types';
import { getAnimalAge } from '../../utils/animal';

interface AnimalsListItemProps {
    animal: Animal;
}

export default function AnimalsListItem({ animal }: AnimalsListItemProps) {
    const classes = useStyles();
    return (
        <Grid item xs={12} md={6} lg={4}>
            <ListItem className={classes.item} color="secondary" component={NavLink} to={`/animal/${animal.id}`}>
                <ListItemAvatar className={classes.avatar}>
                    <Avatar
                        alt="Animal picture"
                        src={animal.imageUrl ? animal.imageUrl : `https://eu.ui-avatars.com/api/?name=${animal.name}`}
                    />
                </ListItemAvatar>
                <ListItemText>
                    <Box>
                        <Typography variant="subtitle1" display="inline" color="textPrimary">
                            {`Dog ${animal.name}`}
                        </Typography>
                        <Typography variant="body1" color="textSecondary" display="inline">
                            {` - ${getAnimalAge(animal.details?.birthDate)}`}
                        </Typography>
                        <Typography variant="subtitle2" color="textSecondary">
                            check-in date
                        </Typography>
                    </Box>
                    <Box pt={1}>
                        <Typography component="span" variant="body2" color="textPrimary">
                            {`1.6kg black male Puddle, born in ${getAnimalAge(animal.details?.birthDate)}`}
                        </Typography>
                    </Box>
                </ListItemText>
            </ListItem>
        </Grid>
    );
}

const useStyles = makeStyles((theme: Theme) => ({
    item: {
        alignItems: 'flex-start',
        backgroundColor: fade(theme.palette.background.paper, 0.4),
        borderRadius: 4,
        transition: theme.transitions.create(['box-shadow', 'transform'], {
            easing: theme.transitions.easing.easeIn,
            duration: theme.transitions.duration.shortest,
        }),
        '&:hover': {
            transform: 'translateY(-2px)',
            boxShadow: '0 4px 8px rgba(0, 0, 0, .2)',
        },
    },
    avatar: {
        paddingTop: theme.spacing(1),
    },
}));
