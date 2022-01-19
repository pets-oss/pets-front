import React, { ReactNode } from 'react';

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Box, IconButton, styled, Typography } from '@mui/material';

const PREFIX = 'AnimalDetailsHeader';

const classes = {
    backButton: `${PREFIX}-backButton`,
    backIcon: `${PREFIX}-backIcon`,
    innerName: `${PREFIX}-innerName`,
    mainParams: `${PREFIX}-mainParams`,
    property: `${PREFIX}-property`,
};

const StyledBox = styled('div')(({ theme }) => ({
    [`& .${classes.backButton}`]: {
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
    [`& .${classes.backIcon}`]: {
        color: theme.palette.tertiary.light,
    },
    [`& .${classes.innerName}`]: {
        fontWeight: 500,
        maxWidth: 180,
        [theme.breakpoints.up('md')]: {
            maxWidth: 340,
        },
        [theme.breakpoints.up('lg')]: {
            maxWidth: 480,
        },
    },
    [`& .${classes.mainParams}`]: {
        padding: '8px 0',
        fontSize: '12px',
        [theme.breakpoints.up('md')]: {
            padding: '12px 0',
            fontSize: '14px',
        },
    },
    [`& .${classes.property}`]: {
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

function AnimalDetailsHeader({
    animalName,
    gender,
    species,
    color,
    breed,
    onBack,
    children,
}: AnimalDetailsHeaderProps) {
    return (
        <StyledBox>
            <Box display="flex" alignItems="center">
                <IconButton className={classes.backButton} onClick={onBack}>
                    <ArrowBackIcon className={classes.backIcon} />
                </IconButton>
                <Box display="flex" flexGrow="1" flexShrink="1" flexBasis="auto">
                    {animalName && (
                        <Typography variant="h1" className={classes.innerName} noWrap>
                            {animalName}
                        </Typography>
                    )}
                </Box>
                {children}
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
        </StyledBox>
    );
}

export default AnimalDetailsHeader;

interface AnimalDetailsHeaderProps {
    animalName?: string | null;
    species?: string | null;
    gender?: string | null;
    color?: string | null;
    breed?: string | null;
    onBack?: () => void;
    children: ReactNode;
}
