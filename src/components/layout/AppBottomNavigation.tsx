import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Drawer from '@material-ui/core/Drawer';
import Fab from '@material-ui/core/Fab';
import IconButton from '@material-ui/core/IconButton';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import AddIcon from '@material-ui/icons/Add';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        appBar: {
            top: 'auto',
            bottom: 0,
            backgroundColor: theme.palette.primary.light,
        },
        list: {
            width: 250,
        },
        fullList: {
            width: 'auto',
        },
        fabButton: {
            position: 'absolute',
            zIndex: 1,
            top: -30,
            right: theme.spacing(3),
        },
    })
);

export default function AppBottomNavigation() {
    const classes = useStyles();
    const [drawerIsOpen, setDrawerState] = React.useState(false);

    // todo: the menu list

    return (
        <AppBar position="fixed" color="default" className={classes.appBar}>
            <Toolbar>
                <IconButton edge="start" onClick={() => setDrawerState(true)} color="inherit" aria-label="open drawer">
                    <MenuIcon />
                </IconButton>
                {/* FAB element should be rendered from the page context */}
                <Fab color="secondary" aria-label="add" className={classes.fabButton}>
                    <AddIcon />
                </Fab>
            </Toolbar>
            <Drawer anchor="bottom" open={drawerIsOpen} onClose={() => setDrawerState(false)}>
                some content
            </Drawer>
        </AppBar>
    );
}
