import React from 'react';
import { useLocation } from 'react-router-dom';

import { AppBar, styled, Toolbar, Typography } from '@mui/material';
import { navigation, NavigationItem } from '../../navigation';
import TopAuthNav from './TopAuthNav';

const PREFIX = 'AppTopBar';
const classes = {
    appbar: `${PREFIX}-appbar`,
    toolbar: `${PREFIX}-toolbar`,
    title: `${PREFIX}-title`,
};

const Root = styled('div')(() => ({
    [`& .${classes.appbar}`]: {
        backgroundColor: 'transparent',
    },
    [`& .${classes.toolbar}`]: {
        justifyContent: 'space-between',
    },
    [`& .${classes.title}`]: {
        flexGrow: 1,
        fontSize: '1.5rem',
    },
}));

export default function AppTopBar() {
    const location = useLocation();

    const pageTitle = () => {
        const pages: Array<NavigationItem> = navigation.filter((item: NavigationItem) => item.to === location.pathname);
        if (pages.length === 1) {
            return pages[0].pageTitle;
        }
        return '';
    };

    return (
        <Root>
            <AppBar className={classes.appbar} position="static" color="default" elevation={0}>
                <Toolbar className={classes.toolbar}>
                    <Typography variant="h1" className={classes.title} noWrap>
                        {pageTitle()}
                    </Typography>
                    <TopAuthNav />
                </Toolbar>
            </AppBar>
        </Root>
    );
}
