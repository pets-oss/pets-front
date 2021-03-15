import React from 'react';

import { Box, IconButton, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

function AnimalDetailsHeader({ animalName, gender, species, color, breed, onBack }: AnimalDetailsHeaderProps) {
    const classes = useStyles();

    return (
        <Box display="flex" alignItems="center" flexDirection="row" mb={3}>
            <IconButton className={classes.backButton} onClick={onBack}>
                <ArrowBackIcon className={classes.backIcon} />
            </IconButton>
            <Box ml={3}>
                {animalName && <Typography variant="h3">{animalName}</Typography>}
                <Box display="flex" mt={1}>
                    {species && (
                        <Typography variant="body2" className={classes.property}>
                            {species}
                        </Typography>
                    )}
                    {gender && (
                        <Typography variant="body2" className={classes.property}>
                            {gender}
                        </Typography>
                    )}
                    {color && (
                        <Typography variant="body2" className={classes.property}>
                            {color}
                        </Typography>
                    )}
                    {breed && (
                        <Typography variant="body2" className={classes.property}>
                            {breed}
                        </Typography>
                    )}
                </Box>
            </Box>
        </Box>
    );
}

export default AnimalDetailsHeader;

const useStyles = makeStyles(theme => ({
    property: {
        '&:not(:last-child)': {
            paddingRight: theme.spacing(2),
            marginRight: theme.spacing(2),
            position: 'relative',
            '&::after': {
                content: '""',
                display: 'block',
                position: 'absolute',
                height: '100%',
                width: '2px',
                backgroundColor: theme.palette.tertiary.dark,
                top: 0,
                right: 0,
            },
        },
    },
    backButton: {
        backgroundColor: theme.palette.primary.main,
        '&:hover,&:focus': {
            backgroundColor: theme.palette.primary.dark,
        },
    },
    backIcon: {
        color: theme.palette.tertiary.light,
    },
}));

interface AnimalDetailsHeaderProps {
    animalName?: string | null;
    species?: string | null;
    gender?: string | null;
    color?: string | null;
    breed?: string | null;
    onBack?: () => void;
}
