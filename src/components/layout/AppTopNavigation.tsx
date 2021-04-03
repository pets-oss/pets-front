import React from 'react';
import { NavLink } from 'react-router-dom';

import { useAuth0 } from '@auth0/auth0-react';
import { Grow } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Link from '@material-ui/core/Link';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { navigation, NavigationItem } from '../../navigation';
import TopAuthNav from './TopAuthNav';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        appBar: {
            backgroundColor: theme.palette.primary.light,
        },
        title: {
            flexGrow: 1,
            textAlign: 'left',
        },
        link: {
            margin: theme.spacing(1, 1.5),
            fontWeight: 'bold',
            textTransform: 'uppercase',
            color: theme.palette.text.secondary,
        },
        // todo: NavLink active class is not working
    })
);

export default function AppTopNavigation() {
    const classes = useStyles();
    const { isAuthenticated } = useAuth0();

    return (
        <AppBar className={classes.appBar} position="fixed" color="default">
            <Grow in timeout={800}>
                <div>
                    <Toolbar>
                        <Typography variant="h6" className={classes.title}>
                            PetBook
                        </Typography>
                        {navigation
                            .filter((item: NavigationItem) => {
                                return item.authRequired ? isAuthenticated : true;
                            })
                            .map((item: NavigationItem) => (
                                <Link component={NavLink} className={classes.link} key={item.title} to={item.to}>
                                    {item.title}
                                </Link>
                            ))}
                        <TopAuthNav />
                    </Toolbar>
                </div>
            </Grow>
        </AppBar>
    );
}
