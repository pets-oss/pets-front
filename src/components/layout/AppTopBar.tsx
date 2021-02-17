import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import TopAuthNav from './TopAuthNav';

const useStyles = makeStyles(() =>
    createStyles({
        appbar: {
            backgroundColor: 'transparent',
        },
        toolbar: {
            justifyContent: 'space-between',
        },
        title: {
            flexGrow: 1,
        },
    })
);

export default function AppTopBar() {
    const classes = useStyles();
    return (
        <AppBar className={classes.appbar} position="static" color="default" elevation={0}>
            <Toolbar className={classes.toolbar}>
                <Typography variant="h6" className={classes.title}>
                    Some page title
                </Typography>
                <TopAuthNav />
            </Toolbar>
        </AppBar>
    );
}
