import React from 'react';
import { useLocation } from 'react-router-dom';

import AppBar from '@material-ui/core/AppBar';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { navigation, NavigationItem } from '../../navigation';
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
    const location = useLocation();

    const pageTitle = () => {
        const pages: Array<NavigationItem> = navigation.filter((item: NavigationItem) => item.to === location.pathname);
        if (pages.length === 1) {
            return pages[0].pageTitle;
        }
        return '';
    };

    return (
        <AppBar className={classes.appbar} position="static" color="default" elevation={0}>
            <Toolbar className={classes.toolbar}>
                <Typography variant="h6" className={classes.title}>
                    {pageTitle()}
                </Typography>
                <TopAuthNav />
            </Toolbar>
        </AppBar>
    );
}
