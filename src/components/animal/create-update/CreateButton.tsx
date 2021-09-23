import React from 'react';
import { useHistory } from 'react-router-dom';

import { Button } from '@material-ui/core';
import Fab from '@material-ui/core/Fab';
import { makeStyles, Theme } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';
import useMobile from '../../../hooks/useMobile';
import { BOTTOM_NAVIGATION_HEIGHT } from '../../layout/AppBottomNavigation';

export default function CreateButton() {
    const history = useHistory();
    const classes = useStyles();
    const mobile = useMobile();

    const handleClick = () => {
        history.push('/animal/new');
    };

    if (mobile) {
        return (
            <Fab color="secondary" aria-label="add" className={classes.fab} onClick={handleClick}>
                <AddIcon />
            </Fab>
        );
    }

    return (
        <Button variant="contained" color="secondary" onClick={handleClick} startIcon={<AddIcon />}>
            Create
        </Button>
    );
}

const useStyles = makeStyles((theme: Theme) => ({
    fab: {
        position: 'fixed',
        zIndex: theme.zIndex.appBar + 1,
        right: theme.spacing(4),
        bottom: BOTTOM_NAVIGATION_HEIGHT,
        transform: 'translateY(50%)',
    },
}));
