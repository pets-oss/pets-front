import React from 'react';

import { Box, IconButton, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import MoreVertIcon from '@material-ui/icons/MoreVert';

function AnimalDetailsHeader({ animalName, gender, species, color, breed, onBack }: AnimalDetailsHeaderProps) {
    const classes = useStyles();

    return (
        <Box>
            <Box display="flex" alignItems="center">
                <IconButton className={classes.backButton} onClick={onBack}>
                    <ArrowBackIcon className={classes.backIcon} />
                </IconButton>
                <Box display="flex" flexGrow="1" flexShrink="1" flexBasis="auto">
                    {animalName && (
                        <Typography variant="h3" className={classes.innerName} noWrap>
                            {animalName}
                        </Typography>
                    )}
                </Box>
                <IconButton aria-label="settings">
                    <MoreVertIcon className={classes.moreVertIcon} />
                </IconButton>
            </Box>
            <Box display="flex" flexWrap="wrap" className={classes.mainParams}>
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
    );
}

export default AnimalDetailsHeader;

const useStyles = makeStyles(theme => ({
    backButton: {
        backgroundColor: theme.palette.primary.main,
        '&:hover,&:focus': {
            backgroundColor: theme.palette.primary.dark,
        },
        marginRight: theme.spacing(2),
        height: '36px',
        width: '36px',
        [theme.breakpoints.up('md')]: {
            height: '48px',
            width: '48px',
        },
    },
    backIcon: {
        color: theme.palette.tertiary.light,
    },
    innerName: {
        fontWeight: 500,
        maxWidth: 180,
        [theme.breakpoints.up('md')]: {
            maxWidth: 340,
        },
        [theme.breakpoints.up('lg')]: {
            maxWidth: 480,
        },
    },
    moreVertIcon: {
        color: '#202020',
    },
    mainParams: {
        padding: '8px 0',
        fontSize: '12px',
        [theme.breakpoints.up('md')]: {
            padding: '12px 0',
            fontSize: '14px',
        },
    },
    property: {
        color: '#666666',
        fontSize: '12px',
        [theme.breakpoints.up('md')]: {
            fontSize: '14px',
        },
        '&:not(:last-child)': {
            paddingRight: theme.spacing(2),
            marginRight: theme.spacing(2),
            position: 'relative',
            '&::after': {
                color: '#999999',
                content: '"/"',
                display: 'block',
                position: 'absolute',
                top: 0,
                right: 0,
            },
        },
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
